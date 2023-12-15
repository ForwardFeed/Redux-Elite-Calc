import {Generation, AbilityName, StatID, Terrain} from '../data/interface';
import {toID} from '../util';
import {
  getBerryResistType,
  getFlingPower,
  getItemBoostType,
  getMultiAttack,
  getNaturalGift,
  getTechnoBlast,
  SEED_BOOSTED_STAT,
} from '../items';
import {RawDesc} from '../desc';
import {Field} from '../field';
import {Move} from '../move';
import {Pokemon} from '../pokemon';
import {Result} from '../result';
import {
  chainMods,
  checkAirLock,
  checkClueless,
  checkDauntlessShield,
  checkDownload,
  checkForecast,
  checkInfiltrator,
  checkIntimidate,
  checkScare,
  checkCounterBuffingAbility,
  checkIntrepidSword,
  checkItem,
  checkMultihitBoost,
  checkSeedBoost,
  checkWonderRoom,
  computeFinalStats,
  countBoosts,
  getBaseDamage,
  getEVDescriptionText,
  getFinalDamage,
  getModifiedStat,
  getQPBoostedStat,
  getMoveEffectiveness,
  getShellSideArmCategory,
  getWeightFactor,
  handleFixedDamageMoves,
  isGrounded,
  OF16, OF32,
  pokeRound,
  appSpacedStr,
  checkLoweredStats,
  colorChangeTyping,
} from './util';
import { ItemName } from '@pkmn/dex';

export function calculateSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  defenderFriend?: Pokemon,
) {
  // Check some multiple Abilities in one
  if (defender.hasAbility('Big Leaves')) {
    defender.innates?.push('Chloroplast', 'Chlorophyll', 'Harvest', 'Leaf Guard', 'Solar Power');
  }
  if (attacker.hasAbility('Big Leaves')) {
    attacker.innates?.push('Chloroplast', 'Chlorophyll', 'Harvest', 'Leaf Guard', 'Solar Power');
  }
  if (attacker.hasAbility('Iron Barrage')) {
    attacker.innates?.push('Sighting System', 'Mega Launcher');
  }
  if (attacker.hasAbility('Solar Flare')) {
    attacker.innates?.push('Chloroplast', 'Immolate');
  }
  // #region Initial
  checkAirLock(attacker, field);
  checkAirLock(defender, field);
  if (defenderFriend) checkAirLock(defenderFriend, field);
  checkClueless(attacker, field);
  checkClueless(defender, field);
  if (defenderFriend) checkClueless(defenderFriend, field);
  checkForecast(attacker, field.weather);
  checkForecast(defender, field.weather);
  checkItem(attacker, field.isMagicRoom);
  checkItem(defender, field.isMagicRoom);
  checkWonderRoom(attacker, field.isWonderRoom);
  checkWonderRoom(defender, field.isWonderRoom);
  checkSeedBoost(attacker, field);
  checkSeedBoost(defender, field);
  checkDauntlessShield(attacker, gen);
  checkDauntlessShield(defender, gen);
  if (defenderFriend?.hasAbility('Friend Guard')) field.defenderSide.isFriendGuard = true;

  computeFinalStats(gen, attacker, defender, field, 'def', 'spd', 'spe');

  checkIntimidate(gen, attacker, defender);
  checkIntimidate(gen, defender, attacker);
  if (defenderFriend) checkIntimidate(gen, defenderFriend, attacker);
  checkScare(gen, attacker, defender);
  checkScare(gen, defender, attacker);
  if (defenderFriend) checkScare(gen, defenderFriend, attacker);
  checkCounterBuffingAbility(attacker);
  checkCounterBuffingAbility(attacker);
  checkDownload(attacker, defender, field.isWonderRoom);
  checkDownload(defender, attacker, field.isWonderRoom);
  checkIntrepidSword(attacker, gen);
  checkIntrepidSword(defender, gen);

  computeFinalStats(gen, attacker, defender, field, 'atk', 'spa');
  if (defenderFriend?.hasAbility('CuriusMedicn')) defender.stats = defender.rawStats;
  if (defenderFriend?.hasAbility('Steely Spirit')) defender.innates?.push('Steely Spirit');
  if (defenderFriend?.hasAbility('Weather Control')) defender.innates?.push('Weather Control');
  checkInfiltrator(attacker, field.defenderSide);
  checkInfiltrator(defender, field.attackerSide);
  if (attacker.hasAbility('Deadeye') ||
    (attacker.hasAbility('Roundhouse') && move.flags.kick) ||
    (attacker.hasAbility('Gifted Mind') && move.category == 'Status') ||
    (attacker.hasAbility('Sweeping Edge') && move.flags.slicing)) {
    move.acc = 100;
  }
  if (move.acc){
    if (attacker.hasAbility('Compound Eyes', 'Illuminate', 'Keen Eye', 'Victory Star')){
      move.acc = Math.round(move.acc * 1.2) 
    }
    if (attacker.hasAbility('Hustle')){
      move.acc = Math.round(move.acc * 0.9)
    }
  }
  if (attacker.hasAbility('Inner Focus') && move.name === 'Focus Blast'){
    move.acc = 90
  }


  const desc: RawDesc = {
    attackerName: attacker.name,
    attackerTera: attacker.teraType,
    moveName: move.name,
    defenderName: defender.name,
    defenderTera: defender.teraType,
    isDefenderDynamaxed: defender.isDynamaxed,
    isWonderRoom: field.isWonderRoom,
  };
  const result = new Result(gen, attacker, defender, move, field, 0, desc);

  const breaksProtect = move.breaksProtect || move.isZ || attacker.isDynamaxed ||
  (attacker.hasAbility('Unseen Fist') && move.flags.contact);

  if (field.defenderSide.isProtected && !breaksProtect) {
    desc.isProtected = true;
    return result;
  }

  if (move.name === 'Pain Split') {
    const average = Math.floor((attacker.curHP() + defender.curHP()) / 2);
    const damage = defender.curHP() - average;
    result.damage = damage;
    return result;
  }

  const defenderIgnoresAbility = defender.hasAbility(
    'Full Metal Body',
    'Neutralizing Gas',
    'Prism Armor',
    'Shadow Shield'
  );

  const attackerIgnoresAbility = attacker.hasAbility('Mold Breaker', 'Teravolt', 'Turboblaze');
  const moveIgnoresAbility = move.named(
    'G Max Drum Solo',
    'G Max Fire Ball',
    'G Max Hydrosnipe',
    'Light That Burns the Sky',
    'Menacing Moonraze Maelstrom',
    'Moongeist Beam',
    'Photon Geyser',
    'Searing Sunraze Smash',
    'Sunsteel Strike'
  );
  if (!defenderIgnoresAbility && !defender.hasAbility('Poison Heal') &&
    (attackerIgnoresAbility || moveIgnoresAbility)) {
    if (attackerIgnoresAbility) {
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    }
    if (defender.hasItem('Ability Shield')) {
      desc.defenderItem = defender.item;
    } else {
      defender.removeAllAbilities();
    }
  }

  // Merciless does not ignore Shell Armor, damage dealt to a poisoned Pokemon with Shell Armor
  // will not be a critical hit (UltiMario)
  const isCritical = !defender.hasAbility('Battle Armor', 'Shell Armor', 'Bad Luck') &&
    (move.isCrit || (attacker.hasAbility('Merciless') && (defender.hasStatus('psn', 'tox', 'par') ||
      defender.boosts.spe < 0))) &&
    move.timesUsed === 1;

  let type = move.type;
  if (move.named('Weather Ball')) {
    const holdingUmbrella = attacker.hasItem('Utility Umbrella');
    type =
      field.hasWeather('Sun', 'Harsh Sunshine') && !holdingUmbrella ? 'Fire'
      : field.hasWeather('Rain', 'Heavy Rain') && !holdingUmbrella ? 'Water'
      : field.hasWeather('Sand') ? 'Rock'
      : field.hasWeather('Hail', 'Snow') ? 'Ice'
      : 'Normal';
    desc.weather = field.weather;
    desc.moveType = defender.hasAbility('Weather Control') ? 'Normal' : type;
  } else if (move.named('Judgment') && attacker.item && attacker.item.includes('Plate')) {
    type = getItemBoostType(attacker.item)!;
  } else if (move.named('Techno Blast') && attacker.item && attacker.item.includes('Drive')) {
    type = getTechnoBlast(attacker.item)!;
  } else if (move.named('Multi Attack') && attacker.item && attacker.item.includes('Memory')) {
    type = getMultiAttack(attacker.item)!;
  } else if (move.named('Natural Gift') && attacker.item && attacker.item.includes('Berry')) {
    const gift = getNaturalGift(gen, attacker.item)!;
    type = gift.t;
    desc.moveType = type;
    desc.attackerItem = attacker.item;
  } else if (
    move.named('Nature Power') ||
    (move.named('Terrain Pulse') && isGrounded(attacker, field))
  ) {
    type =
      field.hasTerrain('Electric') ? 'Electric'
      : field.hasTerrain('Grassy') ? 'Grass'
      : field.hasTerrain('Misty') ? 'Fairy'
      : field.hasTerrain('Psychic') ? 'Psychic'
      : 'Normal';
    desc.terrain = field.terrain;
    desc.moveType = type;
  } else if (move.named('Revelation Dance')) {
    if (attacker.teraType) {
      type = attacker.teraType;
    } else {
      type = attacker.types[0];
    }
  } else if (move.named('Aura Wheel')) {
    if (attacker.named('Morpeko')) {
      type = 'Electric';
    } else if (attacker.named('Morpeko Hangry')) {
      type = 'Dark';
    }
  } else if (move.named('Raging Bull')) {
    if (attacker.named('Tauros Paldea Combat')) {
      type = 'Fighting';
    } else if (attacker.named('Tauros Paldea Blaze')) {
      type = 'Fire';
    } else if (attacker.named('Tauros Paldea Aqua')) {
      type = 'Water';
    }
  }
  let hasAteAbilityTypeChange = false;
  let isAerilate = false;
  let isPixilate = false;
  let isRefrigerate = false;
  let isGalvanize = false;
  let isLiquidVoice = false;
  let isNormalize = false;
  let isPollinate = false;
  let isIntoxicate = false;
  let isHydrate = false;
  let isTectonize = false;
  let isFightingSpirit = false;
  let isCrystallize = false;
  let isImmolate = false;
  let isSpectralize = false;
  let isDraconize = false;
  let isMineralize = false;
  const noTypeChange = move.named(
    'Revelation Dance',
    'Judgment',
    'Nature Power',
    'Techno Blast',
    'Multi Attack',
    'Natural Gift',
    'Weather Ball',
    'Terrain Pulse',
    'Struggle',
  ) || (move.named('Tera Blast') && attacker.teraType);

  if (!move.isZ && !noTypeChange) {
    const normal = move.hasType('Normal');
    if ((isAerilate = !!attacker.hasAbility('Aerilate') && normal)) {
      type = 'Flying';
    } else if ((isGalvanize = !!attacker.hasAbility('Galvanize') && normal)) {
      type = 'Electric';
    } else if ((isLiquidVoice = !!attacker.hasAbility('Liquid Voice') && !!move.flags.sound)) {
      type = 'Water';
    } else if ((isPixilate = !!attacker.hasAbility('Pixilate') && normal)) {
      type = 'Fairy';
    } else if ((isRefrigerate = !!attacker.hasAbility('Refrigerate') && normal)) {
      type = 'Ice';
    } else if ((isNormalize = !!attacker.hasAbility('Normalize'))) { // Boosts any type
      type = 'Normal';
    } else if ((isPollinate = !!attacker.hasAbility('Pollinate')) && normal) {
      type = 'Bug';
    } else if ((isIntoxicate = !!attacker.hasAbility('Intoxicate') && normal)) {
      type = 'Poison';
    } else if ((isHydrate = !!attacker.hasAbility('Hydrate')) && normal) {
      type = 'Water';
    } else if ((isTectonize = !!attacker.hasAbility('Tectonize')) && normal) {
      type = 'Ground';
    } else if ((isFightingSpirit = !!attacker.hasAbility('Fighting Spirit')) && normal) {
      type = 'Fighting';
    } else if ((isCrystallize = !!attacker.hasAbility('Crystallize')) && move.hasType('Rock')) {
      type = 'Ice';
    } else if ((isImmolate = !!attacker.hasAbility('Immolate')) && normal) {
      type = 'Fire';
    } else if ((isSpectralize = !!attacker.hasAbility('Spectralize')) && normal){
      type = 'Ghost';
    } else if ((isDraconize = !!attacker.hasAbility('Draconize')) && normal){
      type = 'Dragon';
    } else if ((isMineralize = !!attacker.hasAbility('Mineralize')) && normal){
      type = 'Rock';
    }
    if (isGalvanize || isPixilate || isRefrigerate || isAerilate || isNormalize || isPollinate ||
      isIntoxicate || isHydrate || isTectonize || isFightingSpirit || isCrystallize || isImmolate ||
      isSpectralize || isDraconize || isMineralize) {
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
      hasAteAbilityTypeChange = true;
    } else if (isLiquidVoice) {
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    }
  }
  if (attacker.hasAbility('Sand Song') && move.flags.sound) {
    type = 'Ground';
  }
  if (move.named('Tera Blast') && attacker.teraType) {
    type = attacker.teraType;
  }
  
  move.type = type;
  const additionnalPriority = getPriorityAdditionnal(attacker, move, defender);
  move.priority += additionnalPriority
  move.priority = Math.min(move.priority, 5);
  if (additionnalPriority) desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  
  if (attacker.hasAbility('Sighting System')) {
    if (move.acc ? move.acc : 100 < 80) {
      move.priority = -7;
    }
    move.acc = 100;
  }
  if (attacker.hasAbility('Stall')) {
    move.priority = -7;
  }
  if (attacker.hasAbility('Phantom')) {
    attacker.types.push('Ghost');
  } else if (defender.hasAbility('Phantom')) {
    defender.types.push('Ghost');
  }
  if (attacker.hasAbility('Metallic')) {
    attacker.types.push('Steel');
  } else if (defender.hasAbility('Metallic')) {
    defender.types.push('Steel');
  }
  if (attacker.hasAbility('Dragonfly', 'Half Drake')) {
    attacker.types.push('Dragon');
  } else if (defender.hasAbility('Dragonfly', 'Half Drake')) {
    defender.types.push('Dragon');
  }
  if (attacker.hasAbility('Ice Age')) {
    attacker.types.push('Ice');
  } else if (defender.hasAbility('Ice Age')) {
    defender.types.push('Ice');
  }
  if (attacker.hasAbility('Grounded')) {
    attacker.types.push('Ground');
  } else if (defender.hasAbility('Grounded')) {
    defender.types.push('Ground');
  }
  if (attacker.hasAbility('Aquatic')) {
    attacker.types.push('Water');
  } else if (defender.hasAbility('Aquatic')) {
    defender.types.push('Water');
  }
  if (attacker.hasAbility('Turboblaze')) {
    attacker.types.push('Fire');
  } else if (defender.hasAbility('Turboblaze')) {
    defender.types.push('Fire');
  }
  if (attacker.hasAbility('Teravolt')) {
    attacker.types.push('Electric');
  } else if (defender.hasAbility('Teravolt')) {
    defender.types.push('Electric');
  }
  const isGhostRevealed =
    !!attacker.hasAbility('Scrappy') || field.defenderSide.isForesight;
  const isRingTarget =
    defender.hasItem('Ring Target') && !defender.hasAbility('Klutz');
  
  let typeEffectiveness = 1
  for (const defenderType of defender.types){
    if (!defenderType) break
    typeEffectiveness *= getMoveEffectiveness(
      gen,
      move,
      defenderType,
      defender,
      attacker,
      isGhostRevealed,
      field.isGravity,
      isRingTarget
    )
  }
  if (defender.teraType) {
    typeEffectiveness = getMoveEffectiveness(
      gen,
      move,
      defender.teraType,
      defender,
      attacker,
      isGhostRevealed,
      field.isGravity,
      isRingTarget
    );
  }

  if (typeEffectiveness === 0 && move.named('Thousand Arrows')) {
    typeEffectiveness = 1;
  }

  if (typeEffectiveness === 0 && move.hasType('Ground') &&
  defender.hasItem('Iron Ball') && !defender.hasAbility('Klutz')) {
    typeEffectiveness = 1;
  }

  move.typeEffectiveness = typeEffectiveness
  if (typeEffectiveness === 0) {
    return result;
  }

  if ((move.named('Sky Drop') &&
        (defender.hasType('Flying') || defender.weightkg >= 200 || field.isGravity)) ||
      (move.named('Synchronoise') && !defender.hasType(attacker.types[0]) &&
        (!attacker.types[1] || !defender.hasType(attacker.types[1]))) ||
      (move.named('Dream Eater') &&
        (!(defender.hasStatus('slp') || defender.hasAbility('Comatose')))) ||
      (move.named('Steel Roller') && !field.terrain) ||
      (move.named('Poltergeist') && !defender.item)
  ) {
    return result;
  }

  if (
    (field.hasWeather('Harsh Sunshine') && move.hasType('Water')) ||
    (field.hasWeather('Heavy Rain') && move.hasType('Fire'))
  ) {
    desc.weather = field.weather;
    return result;
  }

  if (field.hasWeather('Strong Winds') && defender.hasType('Flying') &&
      gen.types.get(toID(move.type))!.effectiveness['Flying']! > 1) {
    typeEffectiveness /= 2;
    desc.weather = field.weather;
  }

  if ((defender.hasAbility('Wonder Guard') && typeEffectiveness <= 1) ||
      (move.hasType('Ice') && defender.hasAbility('Ice Dew')) ||
      (move.hasType('Grass') && defender.hasAbility('Sap Sipper')) ||
      (move.hasType('Fire') && defender.hasAbility('Flash Fire', 'Well Baked Body')) ||
      (move.hasType('Water') && defender.hasAbility('Dry Skin', 'Storm Drain', 'Water Absorb')) ||
      (move.hasType('Poison') && defender.hasAbility('Poison Absorb')) ||
      (move.hasType('Electric') &&
        defender.hasAbility('Lightning Rod', 'Motor Drive', 'Volt Absorb')) ||
      (move.hasType('Ground') &&
        !field.isGravity && !move.named('Thousand Arrows') &&
        !defender.hasItem('Iron Ball') && defender.hasAbility('Levitate', 'Dragonfly')) ||
      (move.flags.bullet && defender.hasAbility('Bulletproof')) ||
      (move.flags.sound && !move.named('Clangorous Soul') && defender.hasAbility('Soundproof')) ||
      (move.priority > 0 && defender.hasAbility('Queenly Majesty', 'Dazzling')) ||
      (move.hasType('Ground') && defender.hasAbility('Earth Eater')) ||
      (move.flags.wind && defender.hasAbility('Wind Rider'))
  ) {
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    return result;
  }

  if (move.hasType('Ground') && !move.named('Thousand Arrows') &&
      !field.isGravity && defender.hasItem('Air Balloon')) {
    desc.defenderItem = defender.item;
    return result;
  }

  if (move.priority > 0 && field.hasTerrain('Psychic') && isGrounded(defender, field)) {
    desc.terrain = field.terrain;
    return result;
  }

  const weightBasedMove = move.named('Heat Crash', 'Heavy Slam', 'Low Kick', 'Grass Knot');
  if (defender.isDynamaxed && weightBasedMove) {
    return result;
  }

  if (defender.hasAbility('Color Change')){
    defender.types = [colorChangeTyping(move.type)]
  }
  desc.HPEVs = `${defender.evs.hp} HP`;

  const fixedDamage = handleFixedDamageMoves(attacker, move);
  if (fixedDamage) {
    if (attacker.hasAbility('Parental Bond')) {
      result.damage = [fixedDamage, fixedDamage];
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    } else {
      result.damage = fixedDamage;
    }
    return result;
  }

  if (move.named('Final Gambit')) {
    result.damage = attacker.curHP();
    return result;
  }

  if (move.named('Guardian of Alola')) {
    let zLostHP = Math.floor((defender.curHP() * 3) / 4);
    if (field.defenderSide.isProtected && attacker.item && attacker.item.includes(' Z')) {
      zLostHP = Math.ceil(zLostHP / 4 - 0.5);
    }
    result.damage = zLostHP;
    return result;
  }

  if (move.named('Nature\'s Madness', 'Super Fang', 'Ruination')) {
    const lostHP = field.defenderSide.isProtected ? 0 : Math.floor(defender.curHP() / 2) || 1;
    result.damage = lostHP;
    return result;
  }

  if (move.named('Spectral Thief')) {
    let stat: StatID;
    for (stat in defender.boosts) {
      if (defender.boosts[stat]) {
        attacker.boosts[stat] +=
          attacker.hasAbility('Contrary') ? -defender.boosts[stat]! : defender.boosts[stat]!;
        if (attacker.boosts[stat] > 6) attacker.boosts[stat] = 6;
        if (attacker.boosts[stat] < -6) attacker.boosts[stat] = -6;
        attacker.stats[stat] = getModifiedStat(attacker.rawStats[stat]!, attacker.boosts[stat]!);
      }
    }
  }

  if (move.hits > 1) {
    desc.hits = move.hits;
  }

  const turnOrder = attacker.stats.spe > defender.stats.spe ? 'first' : 'last';

  // #endregion
  // #region Base Power

  var basePower = calculateBasePowerSMSSSV(
    gen,
    attacker,
    defender,
    move,
    field,
    hasAteAbilityTypeChange,
    desc
  );
  if (basePower === 0) {
    return result;
  }
  move.bp = basePower;
  // #endregion
  // #region (Special) Attack
  const attack = calculateAttackSMSSSV(gen, attacker, defender, move, field, desc, !!isCritical);
  const attackSource = move.named('Foul Play') ? defender : attacker;
  if (move.named('Photon Geyser', 'Light That Burns The Sky') ||
      (move.named('Tera Blast') && attackSource.teraType)) {
    move.category = attackSource.stats.atk > attackSource.stats.spa ? 'Physical' : 'Special';
  }

  if (attacker.hasAbility('Equinox')) {
    move.category = attacker.stats.atk > attacker.stats.spa ? 'Physical' : 'Special';
  }
  
  if (attacker.hasAbility('Power Fists')) {
    move.category = 'Special';
  }
  const attackStat =
    move.named('Shell Side Arm') &&
    getShellSideArmCategory(attacker, defender) === 'Physical'
      ? 'atk'
      : move.named('Body Press')
        ? 'def'
        : move.category === 'Special'
          ? 'spa'
          : 'atk';
  // #endregion
  // #region (Special) Defense

  const defense = calculateDefenseSMSSSV(gen, attacker, defender, move, field, desc, !!isCritical);
  const hitsPhysical = move.overrideDefensiveStat === 'def' || move.category === 'Physical' ||
    (move.named('Shell Side Arm') && getShellSideArmCategory(attacker, defender) === 'Physical');
  const defenseStat = hitsPhysical ? 'def' : 'spd';

  // #endregion
  // #region Damage

  let baseDamage = getBaseDamage(attacker.level, basePower, attack, defense);

  if (field.gameType === 'Doubles' && (attacker.hasAbility('Amplifier') &&
  move.flags.sound) || (attacker.hasAbility('Artillery') && move.flags.sound)) {
    move.target = 'allAdjacentFoes';
  }

  const isSpread = field.gameType !== 'Singles' &&
     ['allAdjacent', 'allAdjacentFoes'].includes(move.target);
  if (isSpread) {
    baseDamage = pokeRound(OF32(baseDamage * 3072) / 4096);
  }

  if (attacker.hasAbility('Parental Bond (Child)', 'Hyper Aggressive 2th', 'Multi Headed 2th')) {
    baseDamage = pokeRound(OF32(baseDamage * 1024) / 4096);
  }
  if (attacker.hasAbility('Primal Maw 2th')) {
    baseDamage = pokeRound(OF32(baseDamage * 2048) / 4096);
  }
  if (attacker.hasAbility('Multi Headed last')) {
    baseDamage = pokeRound(OF32(baseDamage * 614) / 4096);
  }
  if (attacker.hasAbility('Raging Boxer 2th')) {
    baseDamage = pokeRound(OF32(baseDamage * 2048) / 4096);
  }
  if (
    field.hasWeather('Sun') && move.named('Hydro Steam') && !attacker.hasItem('Utility Umbrella')
  ) {
    baseDamage = pokeRound(OF32(baseDamage * 6144) / 4096);
    desc.weather = field.weather;
  } else if (!defender.hasItem('Utility Umbrella')) {
    if (
      (field.hasWeather('Sun', 'Harsh Sunshine') && move.hasType('Fire')) ||
      (field.hasWeather('Rain', 'Heavy Rain') && move.hasType('Water'))
    ) {
      baseDamage = pokeRound(OF32(baseDamage * 6144) / 4096);
      desc.weather = field.weather;
    } else if (
      (field.hasWeather('Sun') && move.hasType('Water')) ||
      (field.hasWeather('Rain') && move.hasType('Fire'))
    ) {
      baseDamage = pokeRound(OF32(baseDamage * 2048) / 4096);
      desc.weather = field.weather;
    }
  }

  if (hasTerrainSeed(defender) &&
    field.hasTerrain(defender.item!.substring(0, defender.item!.indexOf(' ')) as Terrain) &&
    SEED_BOOSTED_STAT[defender.item!] === defenseStat) {
    // Last condition applies so the calc doesn't show a seed where it wouldn't affect the outcome
    // (like Grassy Seed when being hit by a special move)
    desc.defenderItem = defender.item;
  }

  if (isCritical) {
    baseDamage = Math.floor(OF32(baseDamage * 1.5));
    desc.isCritical = isCritical;
  }

  // the random factor is applied between the crit mod and the stab mod, so don't apply anything
  // below this until we're inside the loop
  let stabMod = 4096;
  if (attacker.hasOriginalType(move.type) || attacker.hasAbility('Mystic Power') &&
  !attacker.hasAbility('Sand Song')) {
    stabMod += 2048;
  } else if (attacker.hasAbility('Protean', 'Libero') && !attacker.teraType ||
    (attacker.hasAbility('Lunar Eclipse') && move.hasType('Fairy', 'Dark'))) {
    stabMod += 2048;
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  const teraType = attacker.teraType;
  if (teraType === move.type) {
    stabMod += 2048;
    desc.attackerTera = teraType;
  }
  if (attacker.hasAbility('Adaptability') && attacker.hasType(move.type)) {
    stabMod += teraType && attacker.hasOriginalType(teraType) ? 1024 : 2048;
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  if (attacker.hasAbility('Amphibious') && !attacker.hasType('Water') &&
    move.hasType('Water')) {
    stabMod += 2048;
  }
  if (attacker.hasAbility('Aurora Borealis') && !attacker.hasType('Ice') &&
    move.hasType('Ice')) {
    stabMod += 2048;
  }
  if (attacker.hasAbility('Solar Flare') && !attacker.hasType('Fire') &&
    move.hasType('Fire')) {
    stabMod += 2048;
  }

  const applyBurn =
    attacker.hasStatus('brn') &&
    move.category === 'Physical' &&
    !attacker.hasAbility('Guts') &&
    !move.named('Facade');
  desc.isBurned = applyBurn;
  const finalMods = calculateFinalModsSMSSSV(
    gen,
    attacker,
    defender,
    move,
    field,
    desc,
    !!isCritical,
    typeEffectiveness
  );

  let protect = false;
  if (field.defenderSide.isProtected &&
    (attacker.isDynamaxed || (move.isZ && attacker.item && attacker.item.includes(' Z')))) {
    protect = true;
    desc.isProtected = true;
  }
  if (defender.hasAbilityActive('Cheating Death')){
    if (move.hits <= 2) {
      protect = true
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    } else {
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
      move.hits -= 2
    }
  }

  const finalMod = chainMods(finalMods, 41, 131072);

  let contributionDamage: number[] | undefined;
  if (attacker.hasAbility('Parental Bond') && move.hits === 1 && !isSpread) {
    const child = attacker.clone();
    child.remplaceAbility('Parental Bond', 'Parental Bond (Child)');
    checkMultihitBoost(gen, child, defender, move, field, desc);
    contributionDamage = calculateSMSSSV(gen, child, defender, move, field).damage as number[];
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  const contribution = calcContribution(gen, attacker, move, field);
  if (move.hits === 1 && contribution) {
    const child = contribution.child;
    const childMove = contribution.move;
    checkMultihitBoost(gen, child, defender, move, field, desc);
    contributionDamage = calculateSMSSSV(gen, child, defender, childMove, field).damage as number[];
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  let damage = [];
  for (let i = 0; i < 16; i++) {
    damage[i] =
      getFinalDamage(baseDamage, i, typeEffectiveness, applyBurn, stabMod, finalMod, protect);
  }

  if (move.dropsStats && move.timesUsed! > 1) {
    const simpleMultiplier = attacker.hasAbility('Simple') ? 2 : 1;

    desc.moveTurns = `over ${move.timesUsed} turns`;
    const hasWhiteHerb = attacker.hasItem('White Herb');
    let usedWhiteHerb = false;
    let dropCount = attacker.boosts[attackStat];
    for (let times = 0; times < move.timesUsed!; times++) {
      const newAttack = getModifiedStat(attack, dropCount);
      let damageMultiplier = 0;
      damage = damage.map(affectedAmount => {
        if (times) {
          const newBaseDamage = getBaseDamage(attacker.level, basePower, newAttack, defense);
          const newFinalDamage = getFinalDamage(
            newBaseDamage,
            damageMultiplier,
            typeEffectiveness,
            applyBurn,
            stabMod,
            finalMod,
            protect
          );
          damageMultiplier++;
          return affectedAmount + newFinalDamage;
        }
        return affectedAmount;
      });

      if (attacker.hasAbility('Contrary')) {
        dropCount = Math.min(6, dropCount + move.dropsStats);
        desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
      } else {
        dropCount = Math.max(-6, dropCount - move.dropsStats * simpleMultiplier);
        if (attacker.hasAbility('Simple')) {
          desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
        }
      }

      // the Pokémon hits THEN the stat rises / lowers
      if (hasWhiteHerb && attacker.boosts[attackStat] < 0 && !usedWhiteHerb) {
        dropCount += move.dropsStats * simpleMultiplier;
        usedWhiteHerb = true;
        desc.attackerItem = attacker.item;
      }
    }
  }

  desc.attackBoost =
    move.named('Foul Play') ? defender.boosts[attackStat] : attacker.boosts[attackStat];

  // result.damage = // contributionDamage ? [damage, contributionDamage] : damage;
  if (contributionDamage) {
    if (contributionDamage.length == damage.length) {
      const tempArray = []
      for (var i = 0; i < damage.length; i++) {
        tempArray[i] = contributionDamage[i] + damage[i]
      }
      result.damage = tempArray
    } else {
      result.damage = [damage, contributionDamage]
    }
  } else {
    result.damage = damage
  }
  // #endregion

  return result;
}

export function calculateBasePowerSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  hasAteAbilityTypeChange: boolean,
  desc: RawDesc
) {
  const turnOrder = attacker.stats.spe > defender.stats.spe ? 'first' : 'last';

  let basePower: number;

  switch (move.name) {
  case 'Antarctic Bird':
    basePower = move.bp * (move.hasType('Ice', 'Flying') ? 1.3 : 1);
    desc.moveBP = basePower;
    break;
  case 'Payback':
    basePower = move.bp * (turnOrder === 'last' ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Bolt Beak':
  case 'Fishious Rend':
    basePower = move.bp * (turnOrder !== 'last' ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Pursuit':
    const switching = field.defenderSide.isSwitching === 'out';
    basePower = move.bp * (switching ? 2 : 1);
    if (switching) desc.isSwitching = 'out';
    desc.moveBP = basePower;
    break;
  case 'Electro Ball':
    const r = Math.floor(attacker.stats.spe / defender.stats.spe);
    basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : r >= 1 ? 60 : 40;
    if (defender.stats.spe === 0) basePower = 40;
    desc.moveBP = basePower;
    break;
  case 'Gyro Ball':
    basePower = Math.min(150, Math.floor((25 * defender.stats.spe) / attacker.stats.spe) + 1);
    if (attacker.stats.spe === 0) basePower = 1;
    desc.moveBP = basePower;
    break;
  case 'Punishment':
    basePower = Math.min(200, 60 + 20 * countBoosts(gen, defender.boosts));
    desc.moveBP = basePower;
    break;
  case 'Low Kick':
  case 'Grass Knot':
    const w = defender.weightkg * getWeightFactor(defender);
    basePower = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
    desc.moveBP = basePower;
    break;
  case 'Hex':
  case 'Infernal Parade':
    // Hex deals double damage to Pokemon with Comatose (ih8ih8sn0w)
    basePower = move.bp * (defender.status || defender.hasAbility('Comatose') ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Barb Barrage':
    basePower = move.bp * (defender.hasStatus('psn', 'tox') ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Heavy Slam':
  case 'Heat Crash':
    const wr =
        (attacker.weightkg * getWeightFactor(attacker)) /
        (defender.weightkg * getWeightFactor(defender));
    basePower = wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
    desc.moveBP = basePower;
    break;
  case 'Stored Power':
  case 'Power Trip':
    basePower = 20 + 20 * countBoosts(gen, attacker.boosts);
    desc.moveBP = basePower;
    break;
  case 'Acrobatics':
    basePower = move.bp * (attacker.hasItem('Flying Gem') || !attacker.item ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Assurance':
    basePower = move.bp * (defender.hasAbility('Parental Bond (Child)') ? 2 : 1);
    // NOTE: desc.attackerAbility = 'Parental Bond' will already reflect this boost
    break;
  case 'Wake Up Slap':
    // Wake-Up Slap deals double damage to Pokemon with Comatose (ih8ih8sn0w)
    basePower = move.bp * (defender.hasStatus('slp') || defender.hasAbility('Comatose') ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Smelling Salts':
    basePower = move.bp * (defender.hasStatus('par') ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Weather Ball':
    basePower = move.bp * (field.weather && !field.hasWeather('Strong Winds') ? 2 : 1);
    if (field.hasWeather('Sun', 'Harsh Sunshine', 'Rain', 'Heavy Rain') &&
      attacker.hasItem('Utility Umbrella')) basePower = move.bp;
    desc.moveBP = basePower;
    break;
  case 'Terrain Pulse':
    basePower = move.bp * (isGrounded(attacker, field) && field.terrain ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Rising Voltage':
    basePower = move.bp * ((isGrounded(defender, field) && field.hasTerrain('Electric')) ? 2 : 1);
    desc.moveBP = basePower;
    break;
  case 'Psyblade':
    basePower = move.bp * (field.hasTerrain('Electric') ? 1.5 : 1);
    if (field.hasTerrain('Electric')) {
      desc.moveBP = basePower;
      desc.terrain = field.terrain;
    }
    break;
  case 'Fling':
    basePower = getFlingPower(attacker.item);
    desc.moveBP = basePower;
    desc.attackerItem = attacker.item;
    break;
  case 'Dragon Energy':
  case 'Eruption':
  case 'Water Spout':
    basePower = Math.max(1, Math.floor((150 * attacker.curHP()) / attacker.maxHP()));
    desc.moveBP = basePower;
    break;
  case 'Flail':
  case 'Reversal':
    const p = Math.floor((48 * attacker.curHP()) / attacker.maxHP());
    basePower = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
    desc.moveBP = basePower;
    break;
  case 'Natural Gift':
    if (attacker.item?.includes('Berry')) {
      const gift = getNaturalGift(gen, attacker.item)!;
      basePower = gift.p;
      desc.attackerItem = attacker.item;
      desc.moveBP = move.bp;
    } else {
      basePower = move.bp;
    }
    break;
  case 'Nature Power':
    move.category = 'Special';
    move.secondaries = true;
    switch (field.terrain) {
    case 'Electric':
      basePower = 90;
      desc.moveName = 'Thunderbolt';
      break;
    case 'Grassy':
      basePower = 90;
      desc.moveName = 'Energy Ball';
      break;
    case 'Misty':
      basePower = 95;
      desc.moveName = 'Moonblast';
      break;
    case 'Psychic':
      basePower = 90;
      desc.moveName = 'Psychic';
      break;
    default:
      basePower = 80;
      desc.moveName = 'Tri Attack';
    }
    break;
  case 'Water Shuriken':
    basePower = attacker.named('Greninja Ash') && attacker.hasAbility('Battle Bond') ? 20 : 15;
    desc.moveBP = basePower;
    break;
  // Triple Axel's damage doubles after each consecutive hit (20, 40, 60), this is a hack
  case 'Triple Axel':
    basePower = move.hits === 2 ? 30 : move.hits === 3 ? 40 : 20;
    desc.moveBP = basePower;
    break;
  // Triple Kick's damage doubles after each consecutive hit (10, 20, 30), this is a hack
  case 'Triple Kick':
    basePower = move.hits === 2 ? 15 : move.hits === 3 ? 30 : 10;
    desc.moveBP = basePower;
    break;
  case 'Crush Grip':
  case 'Wring Out':
    basePower = 100 * Math.floor((defender.curHP() * 4096) / defender.maxHP());
    basePower = Math.floor(Math.floor((120 * basePower + 2048 - 1) / 4096) / 100) || 1;
    desc.moveBP = basePower;
    break;
  default:
    basePower = move.bp;
  }
  if (basePower === 0) {
    return 0;
  }
  if (move.named(
    'Breakneck Blitz', 'Bloom Doom', 'Inferno Overdrive', 'Hydro Vortex', 'Gigavolt Havoc',
    'Subzero Slammer', 'Supersonic Skystrike', 'Savage Spin Out', 'Acid Downpour', 'Tectonic Rage',
    'Continental Crush', 'All Out Pummeling', 'Shattered Psyche', 'Never Ending Nightmare',
    'Devastating Drake', 'Black Hole Eclipse', 'Corkscrew Crash', 'Twinkle Tackle'
  )) {
    // show z-move power in description
    desc.moveBP = move.bp;
  }
  const bpMods = calculateBPModsSMSSSV(
    gen,
    attacker,
    defender,
    move,
    field,
    desc,
    basePower,
    hasAteAbilityTypeChange,
    turnOrder
  );
  basePower = OF16(Math.max(1, pokeRound((basePower * chainMods(bpMods, 41, 2097152)) / 4096)));
  if (
    attacker.teraType && move.type === attacker.teraType &&
    attacker.hasType(attacker.teraType) && move.hits === 1 &&
    move.priority <= 0 && move.bp > 0 && !move.named('Dragon Energy', 'Eruption', 'Water Spout') &&
    basePower < 60 && gen.num >= 9
  ) {
    basePower = 60;
    desc.moveBP = 60;
  }
  return basePower;
}

export function calculateBPModsSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc,
  basePower: number,
  hasAteAbilityTypeChange: boolean,
  turnOrder: string
) {
  var bpMods = [];

  // Move effects

  let resistedKnockOffDamage =
    !defender.item ||
    (defender.named('Dialga Origin') && defender.hasItem('Adamant Crystal')) ||
    (defender.named('Palkia Origin') && defender.hasItem('Lustrous Globe')) ||
    // Griseous Core for gen 9, Griseous Orb otherwise
    (defender.name.includes('Giratina Origin') && defender.item.includes('Griseous')) ||
    (defender.name.includes('Arceus') && defender.item.includes('Plate')) ||
    (defender.name.includes('Genesect') && defender.item.includes('Drive')) ||
    (defender.named('Groudon', 'Groudon Primal') && defender.hasItem('Red Orb')) ||
    (defender.named('Kyogre', 'Kyogre Primal') && defender.hasItem('Blue Orb')) ||
    (defender.name.includes('Silvally') && defender.item.includes('Memory')) ||
    defender.item.includes(' Z') ||
    (defender.named('Zacian') && defender.hasItem('Rusted Sword')) ||
    (defender.named('Zamazenta') && defender.hasItem('Rusted Shield') ||
    (defender.named('Venomicon Epilogue') && defender.hasItem('Vile Vial')));

  // The last case only applies when the Pokemon has the Mega Stone that matches its species
  // (or when it's already a Mega-Evolution)
  if (!resistedKnockOffDamage && defender.item) {
    const item = gen.items.get(toID(defender.item))!;
    resistedKnockOffDamage = !!item.megaEvolves && defender.name.includes(item.megaEvolves);
  }

  if ((move.named('Facade') && attacker.hasStatus('brn', 'par', 'psn', 'tox')) ||
    (move.named('Brine') && defender.curHP() <= defender.maxHP() / 2) ||
    (move.named('Venoshock') && defender.hasStatus('psn', 'tox')) ||
    (move.named('Lash Out') && (countBoosts(gen, attacker.boosts) < 0))
  ) {
    bpMods.push(8192);
    desc.moveBP = basePower * 2;
  } else if (
    move.named('Expanding Force') && isGrounded(attacker, field) && field.hasTerrain('Psychic')
  ) {
    move.target = 'allAdjacentFoes';
    bpMods.push(6144);
    desc.moveBP = basePower * 1.5;
  } else if ((move.named('Knock Off') && !resistedKnockOffDamage) ||
    (move.named('Misty Explosion') && isGrounded(attacker, field) && field.hasTerrain('Misty')) ||
    (move.named('Grav Apple') && field.isGravity)
  ) {
    bpMods.push(6144);
    desc.moveBP = basePower * 1.5;
  } else if (move.named('Solar Beam', 'Solar Blade') &&
      field.hasWeather('Rain', 'Heavy Rain', 'Sand', 'Hail', 'Snow') &&
      !attacker.hasAbility('Chloroplast')) {
    bpMods.push(2048);
    desc.moveBP = basePower / 2;
    desc.weather = field.weather;
  } else if (move.named('Collision Course', 'Electro Drift')) {
    const isGhostRevealed =
      !!attacker.hasAbility('Scrappy') || field.defenderSide.isForesight;
    const isRingTarget =
      defender.hasItem('Ring Target') && !defender.hasAbility('Klutz');
    const types = defender.teraType ? [defender.teraType] : defender.types;
    const type1Effectiveness = getMoveEffectiveness(
      gen,
      move,
      types[0],
      defender,
      attacker,
      isGhostRevealed,
      field.isGravity,
      isRingTarget
    );
    const type2Effectiveness = types[1] ? getMoveEffectiveness(
      gen,
      move,
      types[1],
      defender,
      attacker,
      isGhostRevealed,
      field.isGravity,
      isRingTarget
    ) : 1;
    const type3Effectiveness = types[2]
      ? getMoveEffectiveness(
        gen,
        move,
        types[2],
        defender,
        attacker,
        isGhostRevealed,
        field.isGravity,
        isRingTarget
      )
      : 1;
    if (type1Effectiveness * type2Effectiveness * type3Effectiveness >= 2) {
      bpMods.push(5461);
      desc.moveBP = basePower * (5461 / 4096);
    }
  }

  if (field.attackerSide.isHelpingHand) {
    bpMods.push(6144);
    desc.isHelpingHand = true;
  }

  // Field effects

  const terrainMultiplier = gen.num > 7 ? 5325 : 6144;
  if (isGrounded(attacker, field)) {
    if ((field.hasTerrain('Electric') && move.hasType('Electric')) ||
        (field.hasTerrain('Grassy') && move.hasType('Grass')) ||
        (field.hasTerrain('Psychic') && move.hasType('Psychic'))
    ) {
      bpMods.push(terrainMultiplier);
      desc.terrain = field.terrain;
    }
  }
  if (isGrounded(defender, field)) {
    if ((field.hasTerrain('Misty') && move.hasType('Dragon')) ||
        (field.hasTerrain('Grassy') && move.named('Bulldoze', 'Earthquake'))
    ) {
      bpMods.push(2048);
      desc.terrain = field.terrain;
    }
  }

  // Abilities
  bpMods = bpMods.concat(abilityBoosts(attacker, move, basePower));
  if (field.attackerSide.isInfatuated){
    desc.isInfatuated = true;
    bpMods.push(2048);
  }
  const aura = `${move.type} Aura`;
  const isAttackerAura = attacker.hasAbility(aura);
  const isDefenderAura = defender.hasAbility(aura);
  const isUserAuraBreak = attacker.hasAbility('Aura Break') || defender.hasAbility('Aura Break');
  const isFieldAuraBreak = field.isAuraBreak;
  const isFieldFairyAura = field.isFairyAura && move.type === 'Fairy';
  const isFieldDarkAura = field.isDarkAura && move.type === 'Dark';
  const auraActive = isAttackerAura || isDefenderAura || isFieldFairyAura || isFieldDarkAura;
  const auraBreak = isFieldAuraBreak || isUserAuraBreak;
  if (auraActive) {
    
    if (auraBreak) {
      bpMods.push(3072);
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    } else {
      bpMods.push(5448);
      if (isAttackerAura) {
        desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
      }
      if (isDefenderAura) {
        desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
      }
    }
  }

  // Sheer Force does not power up max moves or remove the effects (SadisticMystic)
  if (
    (attacker.hasAbility('Sheer Force') &&
      (move.secondaries || move.named('Jet Punch', 'Order Up')) && !move.isMax) ||
    (attacker.hasAbility('Sand Force') &&
      field.hasWeather('Sand') && move.hasType('Rock', 'Ground', 'Steel')) ||
    (attacker.hasAbility('Analytic') &&
      (turnOrder !== 'first' || field.defenderSide.isSwitching === 'out')) ||
    (attacker.hasAbility('Tough Claws') && move.flags.contact) ||
    (attacker.hasAbility('Punk Rock') || attacker.hasAbility('Amplifier') && move.flags.sound)
  ) {
    bpMods.push(5325);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }

  if (field.attackerSide.isBattery && move.category === 'Special') {
    bpMods.push(5325);
    desc.isBattery = true;
  }

  if (field.attackerSide.isPowerSpot) {
    bpMods.push(5325);
    desc.isPowerSpot = true;
  }

  if (field.attackerSide.isDefenseCurl && move.name === 'Rollout' || move.name === 'Ice Ball') {
    bpMods.push(8192);
  }

  if (attacker.hasAbility('Rivalry') && ![attacker.gender, defender.gender].includes('N')) {
    if (attacker.gender === defender.gender) {
      bpMods.push(5120);
      desc.rivalry = 'buffed';
    }
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }

  // The -ate abilities already changed move typing earlier, so most checks are done and desc is set
  // However, Max Moves also don't boost -ate Abilities
  if (!move.isMax && hasAteAbilityTypeChange) {
    bpMods.push(4506); // redux nerfed it to 10%
  }

  if ((attacker.hasAbility('Reckless') && (move.recoil || move.hasCrashDamage)) ||
      (attacker.hasAbility('Iron Fist') && move.flags.punch)
  ) {
    bpMods.push(4915);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }

  if (attacker.hasItem('Punching Glove') && move.flags.punch) {
    bpMods.push(4506);
    desc.attackerItem = attacker.item;
  }

  if (defender.hasAbility('Heatproof') && move.hasType('Fire')) {
    bpMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else if (defender.hasAbility('Dry Skin') && move.hasType('Fire')) {
    bpMods.push(5120);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }

  if (attacker.hasAbility('Supreme Overlord') && attacker.alliesFainted) {
    const powMod = [4096, 4506, 4915, 5325, 5734, 6144];
    bpMods.push(powMod[Math.min(5, attacker.alliesFainted)]);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    desc.alliesFainted = attacker.alliesFainted;
  }

  if (attacker.hasAbilityActive('Dreamcatcher')) {
    bpMods.push(8192);
  }
  // Items

  if (attacker.hasItem(`${move.type} Gem`)) {
    bpMods.push(5325);
    desc.attackerItem = attacker.item;
  } else if (
    (((attacker.hasItem('Adamant Crystal') && attacker.named('Dialga Origin')) ||
      (attacker.hasItem('Adamant Orb') && attacker.named('Dialga'))) &&
     move.hasType('Steel', 'Dragon')) ||
    (((attacker.hasItem('Lustrous Orb') &&
     attacker.named('Palkia')) ||
      (attacker.hasItem('Lustrous Globe') && attacker.named('Palkia Origin'))) &&
     move.hasType('Water', 'Dragon')) ||
    (((attacker.hasItem('Griseous Orb') || attacker.hasItem('Griseous Core')) &&
     (attacker.named('Giratina Origin') || attacker.named('Giratina'))) &&
     move.hasType('Ghost', 'Dragon')) ||
    (attacker.hasItem('Vile Vial') &&
     attacker.named('Venomicon Epilogue') &&
     move.hasType('Poison', 'Flying')) ||
    (attacker.hasItem('Soul Dew') &&
     attacker.named('Latios', 'Latias', 'Latios Mega', 'Latias Mega') &&
     move.hasType('Psychic', 'Dragon')) ||
     attacker.item && move.hasType(getItemBoostType(attacker.item))
  ) {
    bpMods.push(4915);
    desc.attackerItem = attacker.item;
  } else if (
    (attacker.hasItem('Muscle Band') && move.category === 'Physical') ||
    (attacker.hasItem('Wise Glasses') && move.category === 'Special')
  ) {
    bpMods.push(4505);
    desc.attackerItem = attacker.item;
  }
  return bpMods;
}

export function calculateAttackSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc,
  isCritical = false
) {
  let attack: number;
  const attackSource = move.named('Foul Play') ? defender : attacker;
  if (move.named('Photon Geyser', 'Light That Burns The Sky') ||
      (move.named('Tera Blast') && attackSource.teraType)) {
    move.category = attackSource.stats.atk > attackSource.stats.spa ? 'Physical' : 'Special';
  }
  const attackStat =
    move.named('Shell Side Arm') &&
    getShellSideArmCategory(attacker, defender) === 'Physical'
      ? 'atk'
      : move.named('Body Press')
        ? 'def'
        : move.category === 'Special'
          ? 'spa'
          : 'atk';
  desc.attackEVs =
    move.named('Foul Play')
      ? getEVDescriptionText(gen, defender, attackStat, defender.nature)
      : getEVDescriptionText(gen, attacker, attackStat, attacker.nature);

  if (attackSource.boosts[attackStat] === 0 ||
      (isCritical && attackSource.boosts[attackStat] < 0)) {
    attack = attackSource.rawStats[attackStat];
  } else if (defender.hasAbility('Unaware')) {
    attack = attackSource.rawStats[attackStat];
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else {
    attack = attackSource.stats[attackStat];
    desc.attackBoost = attackSource.boosts[attackStat];
  }

  // unlike all other attack modifiers, Hustle gets applied directly
  if (attacker.hasAbility('Hustle')) {
    attack = pokeRound(attack * 1.40);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  if (attacker.hasAbility('Roundhouse') && move.flags.kick) {
    if (defender.stats.def > defender.stats.spd){
      defender.stats.def = defender.stats.spd
    }
  }
  if (attacker.hasAbility('Momentum') && move.flags.contact) {
    attack = attacker.stats.spe;
  }
  if (attacker.hasAbility('Speed Force') && move.flags.contact) {
    attack = attacker.stats.atk + pokeRound((attacker.stats.spe * 0.20));
  }
  if (attacker.hasAbility('Juggernaut') && move.flags.contact) {
    attack = attacker.stats.atk + pokeRound((attacker.stats.def * 0.20));
  }
  if (attacker.hasAbility('Power Core')) {
    if (move.category === 'Physical') {
      attack = attacker.stats.atk + pokeRound((attacker.stats.def * 0.25));
    } else {
      attack = attacker.stats.spa + pokeRound((attacker.stats.spd * 0.25));
    }
  }
  if (attacker.hasAbility('Ancient Idol')) {
    if (move.category === 'Physical') {
      attack = attacker.stats.def;
    } else {
      attack = attacker.stats.spd;
    }
  }
  const atMods = calculateAtModsSMSSSV(gen, attacker, defender, move, field, desc);
  attack = OF16(Math.max(1, pokeRound((attack * chainMods(atMods, 410, 131072)) / 4096)));
  return attack;
}

export function calculateAtModsSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc
) {
  const atMods = [];
  if ((attacker.hasAbility('Flock') && move.hasType('Flying')) ||
    (attacker.hasAbility('Short Circuit') && move.hasType('Electric')) ||
    (attacker.hasAbility('Vengeance') && move.hasType('Ghost')) ||
    (attacker.hasAbility('Torrent') && move.hasType('Water')) ||
    (attacker.hasAbility('Overgrow') && move.hasType('Grass')) ||
    (attacker.hasAbility('Blaze') && move.hasType('Fire')) ||
    (attacker.hasAbility('Swarm') && move.hasType('Bug'))) {
    if (attacker.curHP() <= attacker.maxHP() / 3) {
      atMods.push(6144);
    } else {
      atMods.push(4915);
    }
  }
  if (attacker.hasAbility('Exploit Weakness') && defender.hasStatus()) {
    atMods.push(5120);
  }
  // Slow Start also halves damage with special Z moves
  if ((attacker.hasAbilityActive('Slow Start') &&
       (move.category === 'Physical' || (move.category === 'Special' && move.isZ))) ||
      (attacker.hasAbility('Defeatist') && attacker.curHP() <= attacker.maxHP() / 2)
  ) {
    atMods.push(2048);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else if (
    (attacker.hasAbility('Solar Power') &&
     field.hasWeather('Sun', 'Harsh Sunshine') &&
     move.category === 'Special') ||
    (attacker.named('Cherrim') &&
     attacker.hasAbility('Flower Gift') &&
     field.hasWeather('Sun', 'Harsh Sunshine') &&
     move.category === 'Physical') ||
    // Gorilla Tactics has no effect during Dynamax (Anubis)
    (attacker.hasAbility('Gorilla Tactics') && move.category === 'Physical' &&
     !attacker.isDynamaxed)) {
    atMods.push(6144);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    desc.weather = field.weather;
  } else if (
    field.attackerSide.isFlowerGift &&
    field.hasWeather('Sun', 'Harsh Sunshine') &&
    move.category === 'Physical') {
    atMods.push(6144);
    desc.weather = field.weather;
    desc.isFlowerGiftAttacker = true;
  } else if (
    (attacker.hasAbility('Guts') && attacker.status && move.category === 'Physical') ||
    (move.category === 'Special' && attacker.hasAbilityActive('Plus', 'Minus'))
  ) {
    atMods.push(6144);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else if (attacker.hasAbilityActive('Flash Fire') && move.hasType('Fire')) {
    atMods.push(6144);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, 'Flash Fire');
  } else if (
    (attacker.hasAbility('Steelworker') && move.hasType('Steel')) ||
    (attacker.hasAbility('Dragon\'s Maw') && move.hasType('Dragon')) ||
    (attacker.hasAbility('Rocky Payload') && move.hasType('Rock'))
  ) {
    atMods.push(6144);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else if (attacker.hasAbility('Transistor') && move.hasType('Electric')) {
    atMods.push(gen.num >= 9 ? 5325 : 6144);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else if (attacker.hasAbilityActive('Stakeout')) {
    atMods.push(8192);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else if (
    (attacker.hasAbility('Water Bubble') && move.hasType('Water')) ||
    (attacker.hasAbility('Huge Power', 'Pure Power') && move.category === 'Physical')
  ) {
    atMods.push(8192);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  if ((attacker.hasAbility('Forest Rage') && move.hasType('Grass'))||
    (attacker.hasAbility('Riptide') && move.hasType('Water')) ||
    (attacker.hasAbility('Hellblaze') && move.hasType('Fire'))) {
      if (attacker.curHP() <= attacker.maxHP() / 3 ){
        atMods.push(7373);
      } else {
        atMods.push(5325);
      }
  }
  if ((defender.hasAbility('Thick Fat') && move.hasType('Fire', 'Ice')) ||
      (defender.hasAbility('Water Bubble') && move.hasType('Fire')) ||
     (defender.hasAbility('Purifying Salt') && move.hasType('Ghost'))) {
    atMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  // Pokemon with " of Ruin" Ability are immune to the opposing "-of Ruin" ability
  const isTabletsOfRuinActive = (defender.hasAbility('Tablets of Ruin') || field.isTabletsOfRuin) &&
    !attacker.hasAbility('Tablets of Ruin');
  const isVesselOfRuinActive = (defender.hasAbility('Vessel of Ruin') || field.isVesselOfRuin) &&
    !attacker.hasAbility('Vessel of Ruin');
  if (
    (isTabletsOfRuinActive && move.category === 'Physical') ||
    (isVesselOfRuinActive && move.category === 'Special')
  ) {
    if (defender.hasAbility('Tablets of Ruin') || defender.hasAbility('Vessel of Ruin')) {
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    } else {
      desc[move.category === 'Special' ? 'isVesselOfRuin' : 'isTabletsOfRuin'] = true;
    }
    atMods.push(3072);
  }

  if (
    (attacker.hasAbility('Protosynthesis') &&
      (field.hasWeather('Sun') || attacker.hasItem('Booster Energy'))) ||
    (attacker.hasAbility('Quark Drive') &&
      (field.hasTerrain('Electric') || attacker.hasItem('Booster Energy')))
  ) {
    if (
      (move.category === 'Physical' &&
        getQPBoostedStat(attacker) === 'atk') ||
      (move.category === 'Special' && getQPBoostedStat(attacker) === 'spa')
    ) {
      atMods.push(5325);
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    }
  }

  if (
    (attacker.hasAbility('Hadron Engine') && move.category === 'Special' &&
      field.hasTerrain('Electric') && isGrounded(attacker, field)) ||
    (attacker.hasAbility('Orichalcum Pulse') && move.category === 'Physical' &&
      field.hasWeather('Sun', 'Harsh Sunshine') && !attacker.hasItem('Utility Umbrella'))
  ) {
    atMods.push(5461);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  if (attacker.hasItem('Light Ball') && !move.isZ) {
    if (attacker.named('Raichu', 'Raichu Alolan')){
      atMods.push(6144);
    } else if(attacker.named('Pikachu')) {
      atMods.push(8192);
    }
    desc.attackerItem = attacker.item;
  }
  else if ((attacker.hasItem('Thick Club') &&
       attacker.named('Cubone', 'Marowak', 'Marowak Alola', 'Marowak Alola Totem') &&
       move.category === 'Physical') ||
      (attacker.hasItem('Deep Sea Tooth') &&
       attacker.named('Clamperl') &&
       move.category === 'Special')) {
    atMods.push(8192);
    desc.attackerItem = attacker.item;
    // Choice Band/Scarf/Specs move lock and stat boosts are ignored during Dynamax (Anubis)
  } else if (!move.isZ && !move.isMax &&
    ((attacker.hasItem('Choice Band') && move.category === 'Physical') ||
      (attacker.hasItem('Choice Specs') && move.category === 'Special'))
  ) {
    atMods.push(6144);
    desc.attackerItem = attacker.item;
  }
  if (attacker.hasAbility('Earthbound') && move.hasType('Ground')) {
    atMods.push(5120);
  }
  if (attacker.hasAbility('Electrocytes') && move.hasType('Electric')) {
    atMods.push(5120);
  }
  if (attacker.hasAbility('Sage Power') && move.category === 'Special') {
    atMods.push(6144);
  }
  if (attacker.hasAbility('Majestic Bird') && move.category === 'Special') {
    atMods.push(6144);
  }
  if (attacker.hasAbility('Power Fists') && move.flags.punch) {
    atMods.push(5325);
  }
  return atMods;
}

export function calculateDefenseSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc,
  isCritical = false
) {
  if (attacker.hasAbilityActive('Grip Pincer')) move.ignoreDefensive = true;
  let defense: number;
  const hitsPhysical = move.overrideDefensiveStat === 'def' || move.category === 'Physical' ||
    (move.named('Shell Side Arm') && getShellSideArmCategory(attacker, defender) === 'Physical');
  const defenseStat = hitsPhysical ? 'def' : 'spd';
  desc.defenseEVs = getEVDescriptionText(gen, defender, defenseStat, defender.nature);
  if (defender.boosts[defenseStat] === 0 ||
      (isCritical && defender.boosts[defenseStat] > 0) ||
      move.ignoreDefensive) {
    defense = defender.rawStats[defenseStat];
  } else if (attacker.hasAbility('Unaware')) {
    defense = defender.rawStats[defenseStat];
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  } else {
    defense = defender.stats[defenseStat];
    desc.defenseBoost = defender.boosts[defenseStat];
  }

  // unlike all other defense modifiers, Sandstorm SpD boost gets applied directly
  if (field.hasWeather('Sand') && defender.hasType('Rock') && !hitsPhysical) {
    defense = pokeRound((defense * 3) / 2);
    desc.weather = field.weather;
  }
  if (field.hasWeather('Snow') && defender.hasType('Ice') && hitsPhysical) {
    defense = pokeRound((defense * 3) / 2);
    desc.weather = field.weather;
  }

  const dfMods = calculateDfModsSMSSSV(
    gen,
    attacker,
    defender,
    move,
    field,
    desc,
    isCritical,
    hitsPhysical
  );

  return OF16(Math.max(1, pokeRound((defense * chainMods(dfMods, 410, 131072)) / 4096)));
}

export function calculateDfModsSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc,
  isCritical = false,
  hitsPhysical = false
) {
  const dfMods = [];
  if (defender.hasAbility('Overcoat') && move.category == 'Special'){
    dfMods.push(4505);
  }
  if ((defender.hasAbility('Immunity') && move.type == 'Poison')||
  (defender.hasAbility('Water Compaction') && move.type == 'Water')) {
    dfMods.push(8192);
  }
  if (defender.hasAbility('Marvel Scale') && defender.status && hitsPhysical) {
    dfMods.push(6144);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else if (
    defender.named('Cherrim') &&
    defender.hasAbility('Flower Gift') &&
    field.hasWeather('Sun', 'Harsh Sunshine') &&
    !hitsPhysical
  ) {
    dfMods.push(6144);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    desc.weather = field.weather;
  } else if (
    field.defenderSide.isFlowerGift &&
    field.hasWeather('Sun', 'Harsh Sunshine') &&
    !hitsPhysical) {
    dfMods.push(6144);
    desc.weather = field.weather;
    desc.isFlowerGiftDefender = true;
  } else if (
    defender.hasAbility('Grass Pelt') &&
    field.hasTerrain('Grassy') &&
    hitsPhysical
  ) {
    dfMods.push(6144);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else if (defender.hasAbility('Fur Coat') && hitsPhysical) {
    dfMods.push(8192);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  // Pokemon with "-of Ruin" Ability are immune to the opposing "-of Ruin" ability
  const isSwordOfRuinActive = (attacker.hasAbility('Sword of Ruin') || field.isSwordOfRuin) &&
    !defender.hasAbility('Sword of Ruin');
  const isBeadsOfRuinActive = (attacker.hasAbility('Beads of Ruin') || field.isBeadsOfRuin) &&
    !defender.hasAbility('Beads of Ruin');
  if (
    (isSwordOfRuinActive && hitsPhysical) ||
    (isBeadsOfRuinActive && !hitsPhysical)
  ) {
    if (attacker.hasAbility('Sword of Ruin') || attacker.hasAbility('Beads of Ruin')) {
      desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
    } else {
      desc[hitsPhysical ? 'isSwordOfRuin' : 'isBeadsOfRuin'] = true;
    }
    dfMods.push(3072);
  }

  if (
    (defender.hasAbility('Protosynthesis') &&
    (field.hasWeather('Sun') || attacker.hasItem('Booster Energy'))) ||
    (defender.hasAbility('Quark Drive') &&
    (field.hasTerrain('Electric') || attacker.hasItem('Booster Energy')))
  ) {
    if (
      (hitsPhysical && getQPBoostedStat(defender) === 'def') ||
      (!hitsPhysical && getQPBoostedStat(defender) === 'spd')
    ) {
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
      dfMods.push(5324);
    }
  }
  if ((defender.hasItem('Eviolite') && gen.species.get(toID(defender.name))?.nfe) ||
      (!hitsPhysical && defender.hasItem('Assault Vest'))) {
    dfMods.push(6144);
    desc.defenderItem = defender.item;
  } else if (
    (defender.hasItem('Metal Powder') && defender.named('Ditto') && hitsPhysical) ||
    (defender.hasItem('Deep Sea Scale') && defender.named('Clamperl') && !hitsPhysical)
  ) {
    dfMods.push(8192);
    desc.defenderItem = defender.item;
  }

  if (defender.hasAbility('Battle Armor', 'Shell Armor')){
    dfMods.push(4915);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  if (defender.hasAbility('Magma Armor')){
    dfMods.push(5325);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  return dfMods;
}

export function calculateFinalModsSMSSSV(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field: Field,
  desc: RawDesc,
  isCritical = false,
  typeEffectiveness: number
) {
  const finalMods = [];
  if (field.hasWeather('Sand') && defender.hasAbility('Dune Terror')) {
    finalMods.push(2048);
    desc.weather = field.weather;
  }
  if (field.defenderSide.isReflect && move.category === 'Physical' &&
      !isCritical && !field.defenderSide.isAuroraVeil) {
    // doesn't stack with Aurora Veil
    finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
    desc.isReflect = true;
  } else if (
    field.defenderSide.isLightScreen && move.category === 'Special' &&
    !isCritical && !field.defenderSide.isAuroraVeil
  ) {
    // doesn't stack with Aurora Veil
    finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
    desc.isLightScreen = true;
  }
  if (field.defenderSide.isAuroraVeil && !isCritical) {
    finalMods.push(field.gameType !== 'Singles' ? 2732 : 2048);
    desc.isAuroraVeil = true;
  }

  if (attacker.hasAbility('Overcharge') && defender.hasType('Electric') &&
    move.type === 'Electric') {
    finalMods.push(8192);
  }
  if (attacker.hasAbility('Hydro Circuit')) {
    if (move.type === 'Electric') {
      finalMods.push(6144);
    }
    if (move.type === 'Water') {
      move.drain = [1, 4];
    } 
  }
  if (attacker.hasAbility('Pretty Princess') && checkLoweredStats(defender)) {
    finalMods.push(6144);
  }

  if (attacker.hasAbility('Fatal Precision') && typeEffectiveness > 1) {
    finalMods.push(4915);
  }
  if (attacker.hasAbility('Psychic Mind') && move.hasType('Psychic')) {
    finalMods.push(5120);
  }
  if (defender.hasAbility('Raw Wood') && move.hasType('Grass')) {
    finalMods.push(2048);
  }


  if (attacker.hasAbility('Neuroforce') && typeEffectiveness > 1) {
    finalMods.push(5120);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
  if (attacker.hasAbility('Sniper') && isCritical) {
    finalMods.push(9216);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }
   if (attacker.hasAbility('Tinted Lens') && typeEffectiveness < 1) {
    finalMods.push(8192);
    desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  }

  if (defender.isDynamaxed && move.named('Dynamax Cannon', 'Behemoth Blade', 'Behemoth Bash')) {
    finalMods.push(8192);
  }

  if (defender.hasAbility('Multiscale', 'Shadow Shield') &&
      defender.curHP() === defender.maxHP() &&
      (!field.defenderSide.isSR && (!field.defenderSide.spikes || defender.hasType('Flying')) ||
      defender.hasItem('Heavy-Duty Boots')) && !attacker.hasAbility('Parental Bond (Child)')
  ) {
    finalMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  if (attacker.hasAbility('Long Reach') && !move.flags.contact) {
    finalMods.push(4915);
  } else if (attacker.hasAbility('Long Reach')) {
    move.flags.contact = 0
  }
  if (defender.hasAbility('Liquified')) {
    if (move.flags.contact) {
      finalMods.push(2048);
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    } else if (move.hasType('Water')) {
      finalMods.push(8192);
      desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
    }
  }
  if (defender.hasAbility('Fluffy') && move.flags.contact) {
    finalMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else if (
    (defender.hasAbility('Punk Rock') && move.flags.sound) ||
    (defender.hasAbility('Ice Scales') && move.category === 'Special')
  ) {
    finalMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  if (defender.hasAbility('Solid Rock', 'Filter', 'Prism Armor', 'Permafrost') &&
  typeEffectiveness > 1) {
    finalMods.push(3072);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  } else if (defender.hasAbility('Primal Armor') && typeEffectiveness > 1) {
    finalMods.push(2048);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  if (defender.hasAbility('Prism Scales') && move.category === 'Special') {
    finalMods.push(2867);
  }
  if (defender.hasAbility('Christmas Spirit') && field.hasWeather('Hail')) {
    finalMods.push(2048);
  }
  if (defender.hasAbility('Nocturnal') && move.hasType('Dark', 'Fairy')) {
    finalMods.push(3072);
  }
  if (attacker.hasAbility('Nocturnal') && move.hasType('Dark')) {
    finalMods.push(5120);
  }
  if (defender.hasAbility('Whiteout') && field.hasWeather('Hail') &&
  move.hasType('Ice')) {
    finalMods.push(6144);
  }
  if (field.defenderSide.isFriendGuard) {
    finalMods.push(3072);
    desc.isFriendGuard = true;
  }

  if (defender.hasAbility('Fluffy') && move.hasType('Fire')) {
    finalMods.push(8192);
    desc.defenderAbility = appSpacedStr(desc.defenderAbility, defender.ability);
  }
  if (attacker.hasAbility('Giant Wings') && move.flags.air) {
    finalMods.push(5120);
  }
  if (attacker.hasAbility('Dragon\'s Maw') && move.hasType('Dragon')) {
    finalMods.push(5325);
  }
  if (attacker.hasAbility('Transistor') && move.hasType('Electric')) {
    finalMods.push(6144);
  }
  if (attacker.hasAbility('Electric Burst') && move.hasType('Electric')) {
    finalMods.push(5530);
  }
  if (attacker.hasAbility('Marine Apex') && (
    defender.hasAbility('Infiltrator') || defender.hasType('Water')
  )) {
    finalMods.push(6144);
  }
  if (attacker.hasAbility('Nosferatu') && move.flags.contact) {
    finalMods.push(4915);
  }
  if (attacker.hasAbility('Dragonslayer') && defender.hasType('Dragon')) {
    finalMods.push(6144);
  }
  if (attacker.hasItem('Expert Belt') && typeEffectiveness > 1 && !move.isZ) {
    finalMods.push(4915);
    desc.attackerItem = attacker.item;
  } else if (attacker.hasItem('Life Orb')) {
    finalMods.push(5324);
    desc.attackerItem = attacker.item;
  } else if (attacker.hasItem('Metronome') && move.timesUsedWithMetronome! >= 1) {
    const timesUsedWithMetronome = Math.floor(move.timesUsedWithMetronome!);
    if (timesUsedWithMetronome <= 4) {
      finalMods.push(4096 + timesUsedWithMetronome * 819);
    } else {
      finalMods.push(8192);
    }
    desc.attackerItem = attacker.item;
  }

  if (move.hasType(getBerryResistType(defender.item)) &&
      (typeEffectiveness > 1 || move.hasType('Normal')) &&
      !attacker.hasAbility('Unnerve', 'As One', 'As One Ice Rider', 'As One Shadow Rider')) {
    if (defender.hasAbility('Ripen')) {
      finalMods.push(1024);
    } else {
      finalMods.push(2048);
    }
    desc.defenderItem = defender.item;
    defender.item = "" as ItemName;
  }

  if (defender.hasAbility('Lethargy') || defender.hasAbility('Arctic Fur')) {
    finalMods.push(2662);
  }

  if (defender.hasAbility('Fossilized') && move.hasType('Rock')) {
    finalMods.push(2048);
  }
  return finalMods;
}

function hasTerrainSeed(pokemon: Pokemon) {
  return pokemon.hasItem('Electric Seed', 'Misty Seed', 'Grassy Seed', 'Psychic Seed');
}

function calcContribution(
  gen: Generation,
  attacker: Pokemon,
  move: Move,
  field: Field,
) {
  if (attacker.hasAbility('Pyro Shells') && move.flags.pulse) {
    const child = attacker.clone();
    child.remplaceAbility('Pyro Shells', '');
    const childMove: Move = new Move(gen, 'Outburst');
    childMove.bp = 50;
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Thundercall') && move.hasType('Electric')) {
    const child = attacker.clone();
    child.remplaceAbility('Thundercall', '');
    const childMove: Move = new Move(gen, 'Smite');
    childMove.bp = 24;
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Volcano Rage') && move.flags.bite) {
    const child = attacker.clone();
    child.remplaceAbility('Volcano Rage', '');
    const childMove: Move = new Move(gen, 'Eruption');
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Hyper Aggressive')) {
    const child = attacker.clone();
    child.remplaceAbility('Hyper Aggressive', 'Hyper Aggressive 2th');
    const childMove: Move = move.clone();
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Multi Headed')) {
    const child = attacker.clone();
    child.remplaceAbility('Multi Headed', 'Multi Headed 2th');
    const childMove: Move = move.clone();
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Multi Headed 2th') && attacker.heads === 3) {
    const child = attacker.clone();
    child.remplaceAbility('Multi Headed 2th', 'Multi Headed last');
    const childMove: Move = move.clone();
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Raging Boxer') && move.flags.punch) {
    const child = attacker.clone();
    child.remplaceAbility('Raging Boxer', 'Raging Boxer 2th');
    const childMove: Move = move.clone();
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Primal Maw') && move.flags.bite) {
    const child = attacker.clone();
    child.remplaceAbility('Primal Maw', 'Primal Maw 2th');
    const childMove: Move = move.clone();
    return {
      child: child,
      move: childMove,
    };
  } else if (attacker.hasAbility('Cheap Tactics') && field.attackerSide.isSwitching === 'in'){
    const child = attacker.clone();
    child.remplaceAbility('Cheap Tactics', 'Cheap Tactics 2th');
    const childMove: Move = new Move(gen, 'Scratch');
    return {
      child: child,
      move: childMove,
    };
  }
  return undefined;
}

function getPriorityAdditionnal(attacker: Pokemon, move: Move, defender: Pokemon) {
  let add = 0;
  // FIXME: this is incorrect, should be move.flags.heal, not move.drain
  if (attacker.hasAbility('Triage') && move.drain) {
    add += 1;
  }
  if (attacker.hasAbility('Gale Wings') && move.hasType('Flying') &&
  attacker.curHP() === attacker.maxHP()) {
    add += 1;
  }
  if (attacker.hasAbility('Flaming Soul') && move.hasType('Fire') &&
  attacker.curHP() === attacker.maxHP()) {
    add += 1;
  }
  if (attacker.hasAbility('Opportunist') && (defender.curHP() / defender.maxHP() < 0.5) &&
  !['allAdjacent', 'allAdjacentFoes'].includes(move.target)) {
    add += 1;
  }
  if (attacker.hasAbility('Frozen Soul') && move.hasType('Ice') &&
  attacker.curHP() === attacker.maxHP()) {
    add += 1;
  }
  if (attacker.hasAbility('Perfectionist') && move.bp < 25) {
    add += 1;
  }
  if (attacker.hasAbility('Volt Rush') && move.hasType('Electric') && attacker.curHP() == attacker.maxHP()) {
    add += 1;
  }
  if (attacker.hasAbility('Blitz Boxer') && move.flags.punch) {
    add += 1;
  }
  if (attacker.hasAbilityActive('Coil Up') && move.flags.bite) {
    add += 1;
  }
  
  return add;
}


function abilityBoosts(attacker: Pokemon, move: Move, basePower: number) {
  const bpMods: number[] = [];
  // Use BasePower after moves with custom BP to determine if Technician should boost
  
  if (attacker.hasAbility('Technician') && basePower <= 60) {
    bpMods.push(6144);
  }
  if (attacker.hasAbility('Flare Boost') &&
   attacker.hasStatus('brn') && move.category === 'Special') bpMods.push(6144);
  if (attacker.hasAbility('Toxic Boost') &&
  attacker.hasStatus('psn', 'tox') && move.category === 'Physical') bpMods.push(6144);
  if (attacker.hasAbility('Mega Launcher') && move.flags.pulse) bpMods.push(6144);
  if (attacker.hasAbility('Strong Jaw') && move.flags.bite) bpMods.push(6144);
  if (attacker.hasAbility('Steely Spirit') && move.hasType('Steel')) bpMods.push(6144);
  if (attacker.hasAbility('Striker') && move.flags.kick) bpMods.push(5325);
  if (attacker.hasAbility('Keen Edge') && move.flags.slicing) bpMods.push(5325);
  if (attacker.hasAbility('Mighty Horn') && move.flags.horn) bpMods.push(5325);
  if (attacker.hasAbility('Field Explorer') && move.flags.field) bpMods.push(5120);
  // desc.attackerAbility = appSpacedStr(desc.attackerAbility, attacker.ability);
  return bpMods;
}
