import * as I from './data/interface';
import {Stats} from './stats';
import {toID, extend, assignWithout} from './util';
import {State} from './state';
import {AbilityName} from '@pkmn/dex';

export const STATS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'] as I.StatID[];
const SPC = new Set(['spc']);


export class Pokemon implements State.Pokemon {
  gen: I.Generation;
  name: I.SpeciesName;
  species: I.Specie;

  types: [I.TypeName] | [I.TypeName, I.TypeName] | [I.TypeName, I.TypeName, I.TypeName];
  weightkg: number;
  heads: number;
  genderR?: number;

  level: number;
  gender?: I.GenderName;
  ability?: I.AbilityName;
  innates?: string[];
  abilityOn?: boolean;
  innatesOn?: boolean[];
  descAbility?: string;
  isDynamaxed?: boolean;
  dynamaxLevel?: number;
  isSaltCure?: boolean;
  alliesFainted?: number;
  boostedStat?: I.StatIDExceptHP;
  item?: I.ItemName;
  teraType?: I.TypeName;

  nature: I.NatureName;
  ivs: I.StatsTable;
  evs: I.StatsTable;
  boosts: I.StatsTable;
  rawStats: I.StatsTable;
  stats: I.StatsTable;

  originalCurHP: number;
  status: I.StatusName | '';
  toxicCounter: number;

  moves: I.MoveName[];
  
  constructor(
    gen: I.Generation,
    name: string,
    options: Partial<State.Pokemon> & {
      curHP?: number;
      ivs?: Partial<I.StatsTable> & {spc?: number};
      evs?: Partial<I.StatsTable> & {spc?: number};
      boosts?: Partial<I.StatsTable> & {spc?: number};
    } = {}
  ) {
    this.species = extend(true, {}, gen.species.get(toID(name)), options.overrides);
    this.gen = gen;
    this.name = options.name || name as I.SpeciesName;
    this.types = this.species.types;
    this.weightkg = options.weightkg || this.species.weightkg;
    this.heads = options.heads || this.species.heads || 0;

    this.level = options.level || 100;
    this.gender = options.gender || this.species.gender || 'M';
    this.ability = options.ability || this.species.abilities?.[0] || undefined;
    this.innates = options.innates || [];
    this.abilityOn = !!options.abilityOn;
    this.innatesOn = options.innatesOn || [false, false, false];
    this.isDynamaxed = !!options.isDynamaxed;
    this.dynamaxLevel = this.isDynamaxed
      ? (options.dynamaxLevel === undefined ? 10 : options.dynamaxLevel) : undefined;
    this.isSaltCure = !!options.isSaltCure;
    this.alliesFainted = options.alliesFainted;
    this.boostedStat = options.boostedStat;
    this.teraType = options.teraType;
    this.item = options.item;
    this.nature = options.nature || ('Serious' as I.NatureName);
    this.ivs = Pokemon.withDefault(gen, options.ivs, 31);
    this.evs = Pokemon.withDefault(gen, options.evs, gen.num >= 3 ? 0 : 252);
    this.boosts = Pokemon.withDefault(gen, options.boosts, 0, false);

    // Gigantamax 'forms' inherit weight from their base species when not dynamaxed
    // TODO: clean this up with proper Gigantamax support
    if (this.weightkg === 0 && !this.isDynamaxed && this.species.baseSpecies) {
      this.weightkg = gen.species.get(toID(this.species.baseSpecies))!.weightkg;
    }

    if (gen.num < 3) {
      this.ivs.hp = Stats.DVToIV(
        Stats.getHPDV({
          atk: this.ivs.atk,
          def: this.ivs.def,
          spe: this.ivs.spe,
          spc: this.ivs.spa,
        })
      );
    }

    this.rawStats = {} as I.StatsTable;
    this.stats = {} as I.StatsTable;
    for (const stat of STATS) {
      const val = this.calcStat(gen, stat);
      this.rawStats[stat] = val;
      this.stats[stat] = val;
    }

    const curHP = options.curHP || options.originalCurHP;
    this.originalCurHP = curHP && curHP <= this.rawStats.hp ? curHP : this.rawStats.hp;
    this.status = options.status || '';
    this.toxicCounter = options.toxicCounter || 0;
    this.moves = options.moves || [];
  }

  maxHP(original = false) {
    // Shedinja still has 1 max HP during the effect even if its Dynamax Level is maxed (DaWoblefet)
    if (!original && this.isDynamaxed && this.species.baseStats.hp !== 1) {
      return Math.floor((this.rawStats.hp * (150 + 5 * this.dynamaxLevel!)) / 100);
    }

    return this.rawStats.hp;
  }

  curHP(original = false) {
    // Shedinja still has 1 max HP during the effect even if its Dynamax Level is maxed (DaWoblefet)
    if (!original && this.isDynamaxed && this.species.baseStats.hp !== 1) {
      return Math.ceil((this.originalCurHP * (150 + 5 * this.dynamaxLevel!)) / 100);
    }

    return this.originalCurHP;
  }

  hasAbilityActive(...abilities: string[]) {
    const ability = this.hasAbility(...abilities);
    switch (ability) {
    case -1:
      return this.abilityOn;
    case undefined:
      return false
    default:
      if (!this.innatesOn) return false;
      return this.innatesOn[ability - 1];
    }
  }

  hasAbility(...abilities: string[]) {
    if (this.ability && abilities.includes(this.ability)) {
      this.descAbility = this.ability
      return -1;
    }
    if (!this.innates) return undefined;
    for (let i = 0; i < this.innates.length; i++) {
      const innate = this.innates[i];
      if (abilities?.includes(innate.toString())) {
        // swap out the ability with the innate, so the description has the right ability to point
        this.descAbility = innate
        return i + 1; // to avoid 0
      }
    }
    return undefined;
  }

  removeAllAbilities() {
    this.ability = '' as AbilityName;
    if (!this.innates) return;
    for (let i = 0; i < this.innates?.length; i++) {
      this.innates[i] = '' as AbilityName;
    }
  }
  remplaceAbility(ability: string, remplacement: string) {
    if (this.ability && this.ability === ability) {
      this.ability = remplacement as AbilityName;
    }
    if (!this.innates) return;
    for (let i = 0; i < this.innates?.length; i++) {
      const innate = this.innates[i];
      if (ability === innate.toString()) {
        this.innates[i] = remplacement as AbilityName;
      }
    }
  }
  hasItem(...items: string[]) {
    return !!(this.item && items.includes(this.item));
  }

  hasStatus(...statuses: I.StatusName[]) {
    return !!(this.status && statuses.includes(this.status));
  }

  hasType(...types: I.TypeName[]) {
    for (const type of types) {
      if (this.teraType ? this.teraType === type : this.types.includes(type)) return true;
    }
    return false;
  }

  /** Ignores Tera type */
  hasOriginalType(...types: I.TypeName[]) {
    for (const type of types) {
      if (this.types.includes(type)) return true;
    }
    return false;
  }

  named(...names: string[]) {
    return names.includes(this.name);
  }

  clone() {
    return new Pokemon(this.gen, this.name, {
      level: this.level,
      innates: Object.assign([], this.innates),
      innatesOn: Object.assign([], this.innatesOn),
      ability: this.ability,
      abilityOn: this.abilityOn,
      isDynamaxed: this.isDynamaxed,
      dynamaxLevel: this.dynamaxLevel,
      isSaltCure: this.isSaltCure,
      alliesFainted: this.alliesFainted,
      boostedStat: this.boostedStat,
      item: this.item,
      gender: this.gender,
      nature: this.nature,
      ivs: extend(true, {}, this.ivs),
      evs: extend(true, {}, this.evs),
      boosts: extend(true, {}, this.boosts),
      originalCurHP: this.originalCurHP,
      status: this.status,
      teraType: this.teraType,
      toxicCounter: this.toxicCounter,
      moves: this.moves.slice(),
      overrides: this.species,
    });
  }

  private calcStat(gen: I.Generation, stat: I.StatID) {
    return Stats.calcStat(
      gen,
      stat,
      this.species.baseStats[stat],
      this.ivs[stat]!,
      this.evs[stat]!,
      this.level,
      this.nature
    );
  }

  static getForme(
    gen: I.Generation,
    speciesName: string,
    item?: I.ItemName,
    moveName?: I.MoveName
  ) {
    const species = gen.species.get(toID(speciesName));
    if (!species?.otherFormes) {
      return speciesName;
    }

    let i = 0;
    if (
      (item &&
        ((item.includes('ite') && !item.includes('ite Y')) ||
          (speciesName === 'Groudon' && item === 'Red Orb') ||
          (speciesName === 'Kyogre' && item === 'Blue Orb'))) ||
      (moveName && speciesName === 'Meloetta' && moveName === 'Relic Song') ||
      (speciesName === 'Rayquaza' && moveName === 'Dragon Ascent')
    ) {
      i = 1;
    } else if (item?.includes('ite Y')) {
      i = 2;
    }

    return i ? species.otherFormes[i - 1] : species.name;
  }

  private static withDefault(
    gen: I.Generation,
    current: Partial<I.StatsTable> & {spc?: number} | undefined,
    val: number,
    match = true,
  ) {
    const cur: Partial<I.StatsTable> = {};
    if (current) {
      assignWithout(cur, current, SPC);
      if (current.spc) {
        cur.spa = current.spc;
        cur.spd = current.spc;
      }
      if (match && gen.num <= 2 && current.spa !== current.spd) {
        throw new Error('Special Attack and Special Defense must match before Gen 3');
      }
    }
    return {hp: val, atk: val, def: val, spa: val, spd: val, spe: val, ...cur};
  }
}
