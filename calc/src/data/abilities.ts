import * as I from './interface';
import {toID} from '../util';

const RBY: string[] = [];

const GSC: string[] = [];

const ADV = [
  'Air Lock',
  'Arena Trap',
  'Battle Armor',
  'Blaze',
  'Chlorophyll',
  'Clear Body',
  'Cloud Nine',
  'Color Change',
  'Compound Eyes',
  'Cute Charm',
  'Drizzle',
  'Damp',
  'Drought',
  'Early Bird',
  'Effect Spore',
  'Flame Body',
  'Flash Fire',
  'Forecast',
  'Guts',
  'Huge Power',
  'Hustle',
  'Hyper Cutter',
  'Illuminate',
  'Immunity',
  'Inner Focus',
  'Insomnia',
  'Intimidate',
  'Keen Eye',
  'Levitate',
  'Lightning Rod',
  'Limber',
  'Liquid Ooze',
  'Magma Armor',
  'Magnet Pull',
  'Marvel Scale',
  'Minus',
  'Natural Cure',
  'Oblivious',
  'Overgrow',
  'Own Tempo',
  'Pickup',
  'Plus',
  'Poison Point',
  'Pressure',
  'Pure Power',
  'Rain Dish',
  'Rock Head',
  'Rough Skin',
  'Run Away',
  'Sand Stream',
  'Sand Veil',
  'Serene Grace',
  'Shadow Tag',
  'Shed Skin',
  'Shell Armor',
  'Shield Dust',
  'Soundproof',
  'Speed Boost',
  'Static',
  'Stench',
  'Sticky Hold',
  'Sturdy',
  'Suction Cups',
  'Swarm',
  'Swift Swim',
  'Synchronize',
  'Thick Fat',
  'Torrent',
  'Trace',
  'Truant',
  'Vital Spirit',
  'Volt Absorb',
  'Water Absorb',
  'Water Veil',
  'White Smoke',
  'Wonder Guard',
];

const DPP = ADV.concat([
  'Adaptability',
  'Aftermath',
  'Anger Point',
  'Anticipation',
  'Bad Dreams',
  'Download',
  'Dry Skin',
  'Filter',
  'Flower Gift',
  'Forewarn',
  'Frisk',
  'Gluttony',
  'Heatproof',
  'Honey Gather',
  'Hydration',
  'Ice Body',
  'Iron Fist',
  'Klutz',
  'Leaf Guard',
  'Magic Guard',
  'Mold Breaker',
  'Motor Drive',
  'Mountaineer',
  'Multitype',
  'No Guard',
  'Normalize',
  'Persistent',
  'Poison Heal',
  'Quick Feet',
  'Rebound',
  'Reckless',
  'Rivalry',
  'Scrappy',
  'Simple',
  'Skill Link',
  'Slow Start',
  'Sniper',
  'Snow Cloak',
  'Snow Warning',
  'Solar Power',
  'Solid Rock',
  'Stall',
  'Steadfast',
  'Storm Drain',
  'Super Luck',
  'Tangled Feet',
  'Technician',
  'Tinted Lens',
  'Unaware',
  'Unburden',
]);

const BW = DPP.concat([
  'Analytic',
  'Big Pecks',
  'Contrary',
  'Cursed Body',
  'Defeatist',
  'Defiant',
  'Flare Boost',
  'Friend Guard',
  'Harvest',
  'Healer',
  'Heavy Metal',
  'Illusion',
  'Imposter',
  'Infiltrator',
  'Iron Barbs',
  'Light Metal',
  'Justified',
  'Magic Bounce',
  'Moody',
  'Moxie',
  'Multiscale',
  'Mummy',
  'Overcoat',
  'Pickpocket',
  'Poison Touch',
  'Prankster',
  'Rattled',
  'Regenerator',
  'Sand Force',
  'Sand Rush',
  'Sap Sipper',
  'Sheer Force',
  'Telepathy',
  'Teravolt',
  'Toxic Boost',
  'Turboblaze',
  'Unnerve',
  'Victory Star',
  'Weak Armor',
  'Wonder Skin',
  'Zen Mode',
]);

const XY = BW.concat([
  'Aerilate',
  'Aura Break',
  'Aroma Veil',
  'Bulletproof',
  'Cheek Pouch',
  'Competitive',
  'Dark Aura',
  'Delta Stream',
  'Desolate Land',
  'Fairy Aura',
  'Flower Veil',
  'Fur Coat',
  'Gale Wings',
  'Gooey',
  'Grass Pelt',
  'Magician',
  'Mega Launcher',
  'Parental Bond',
  'Pixilate',
  'Primordial Sea',
  'Protean',
  'Refrigerate',
  'Stance Change',
  'Strong Jaw',
  'Sweet Veil',
  'Symbiosis',
  'Tough Claws',
]);

const SM = XY.concat();

const SS =["", "Stench", "Drizzle", "Speed Boost", "Battle Armor", "Sturdy", "Damp", "Limber", "Sand Veil", "Static", "Volt Absorb", "Water Absorb", "Oblivious", "Cloud Nine", "Compound Eyes", "Insomnia", "Color Change", "Immunity", "Flash Fire", "Shield Dust", "Own Tempo", "Suction Cups", "Intimidate", "Shadow Tag", "Rough Skin", "Wonder Guard", "Levitate", "Effect Spore", "Synchronize", "Clear Body", "Natural Cure", "Lightning Rod", "Serene Grace", "Swift Swim", "Chlorophyll", "Illuminate", "Trace", "Huge Power", "Poison Point", "Inner Focus", "Magma Armor", "Water Veil", "Magnet Pull", "Soundproof", "Rain Dish", "Sand Stream", "Pressure", "Thick Fat", "Early Bird", "Flame Body", "Run Away", "Keen Eye", "Hyper Cutter", "Pickup", "Truant", "Hustle", "Cute Charm", "Plus", "Minus", "Forecast", "Sticky Hold", "Shed Skin", "Guts", "Marvel Scale", "Liquid Ooze", "Overgrow", "Blaze", "Torrent", "Swarm", "Rock Head", "Drought", "Arena Trap", "Vital Spirit", "White Smoke", "Pure Power", "Shell Armor", "Air Lock", "Tangled Feet", "Motor Drive", "Rivalry", "Steadfast", "Snow Cloak", "Gluttony", "Anger Point", "Unburden", "Heatproof", "Simple", "Dry Skin", "Download", "Iron Fist", "Poison Heal", "Adaptability", "Skill Link", "Hydration", "Solar Power", "Quick Feet", "Normalize", "Sniper", "Magic Guard", "No Guard", "Stall", "Technician", "Leaf Guard", "Klutz", "Mold Breaker", "Super Luck", "Aftermath", "Anticipation", "Forewarn", "Unaware", "Tinted Lens", "Filter", "Slow Start", "Scrappy", "Storm Drain", "Ice Body", "Solid Rock", "Snow Warning", "Honey Gather", "Frisk", "Reckless", "Multitype", "Flower Gift", "Bad Dreams", "Pickpocket", "Sheer Force", "Contrary", "Unnerve", "Defiant", "Defeatist", "Cursed Body", "Healer", "Friend Guard", "Weak Armor", "Heavy Metal", "Light Metal", "Multiscale", "Toxic Boost", "Flare Boost", "Harvest", "Telepathy", "Moody", "Overcoat", "Poison Touch", "Regenerator", "Big Pecks", "Sand Rush", "Wonder Skin", "Analytic", "Illusion", "Imposter", "Infiltrator", "Mummy", "Moxie", "Justified", "Rattled", "Magic Bounce", "Sap Sipper", "Prankster", "Sand Force", "Iron Barbs", "Zen Mode", "Victory Star", "Turboblaze", "Teravolt", "Aroma Veil", "Flower Veil", "Cheek Pouch", "Protean", "Fur Coat", "Magician", "Bulletproof", "Competitive", "Strong Jaw", "Refrigerate", "Sweet Veil", "Stance Change", "Gale Wings", "Mega Launcher", "Grass Pelt", "Symbiosis", "Tough Claws", "Pixilate", "Gooey", "Aerilate", "Parental Bond", "Dark Aura", "Fairy Aura", "Aura Break", "Primordial Sea", "Desolate Land", "Delta Stream", "Stamina", "Wimp Out", "Emergency Exit", "Water Compaction", "Merciless", "Shields Down", "Stakeout", "Water Bubble", "Steelworker", "Berserk", "Slush Rush", "Long Reach", "Liquid Voice", "Triage", "Galvanize", "Surge Surfer", "Schooling", "Disguise", "Battle Bond", "Power Construct", "Corrosion", "Comatose", "Queenly Majesty", "Innards Out", "Dancer", "Battery", "Fluffy", "Dazzling", "Soul-Heart", "Tangling Hair", "Receiver", "Power of Alchemy", "Beast Boost", "RKS System", "Electro Surge", "Psychic Surge", "Misty Surge", "Grassy Surge", "Full Metal Body", "Shadow Shield", "Prism Armor", "Neuroforce", "Intrepid Sword", "Dauntless Shield", "Libero", "Ball Fetch", "Cotton Down", "Propeller Tail", "Mirror Armor", "Gulp Missile", "Stalwart", "Steam Engine", "Punk Rock", "Sand Spit", "Ice Scales", "Ripen", "Ice Face", "Power Spot", "Mimicry", "ScreenCleanr", "SteelySpirit", "Perish Body", "WandrngSprit", "Gorilla Tactics", "Neutralizing Gas", "Pastel Veil", "HungerSwitch", "Quick Draw", "Unseen Fist", "CuriusMedicn", "Transistor", "Dragon's Maw", "ChillngNeigh", "Grim Neigh", "As One", "As One", "Chloroplast", "Whiteout", "Pyromancy", "Keen Edge", "Prism Scales", "Power Fists", "Sand Song", "Rampage", "Vengeance", "Blitz Boxer", "Antarctic Bird", "Burnate", "Crystallize", "Electrocytes", "Aerodynamics", "Christmas Spirit", "Exploit Weakness", "Ground Shock", "Ancient Idol", "Mystic Power", "Perfectionist", "Growing Tooth", "Inflatable", "Aurora Borealis", "Avenger", "Let's Roll", "Aquatic", "Loud Bang", "Lead Coat", "Coil Up", "Amphibious", "Grounded", "Earthbound", "Fighting Spirit", "Feline Prowess", "Fossilized", "Magical Dust", "Dreamcatcher", "Nocturnal", "Self Sufficient", "Groundate", "Ice Age", "Half Drake", "Liquified", "Dragonfly", "Dragonslayer", "Mountaineer", "Hydrate", "Metallic", "Permafrost", "Primal Armor", "Raging Boxer", "Air Blower", "Juggernaut", "Short Circuit", "Majestic Bird", "Phantom", "Poisonate", "Impenetrable", "Hypnotist", "Overwhelm", "Scare", "Majestic Moth", "Soul Eater", "Soul Linker", "Sweet Dreams", "Bad Luck", "Haunted Spirit", "Electric Burst", "Raw Wood", "Solenoglyphs", "Spider Lair", "Fatal Precision", "Fort Knox", "Seaweed", "Psychic Mind", "Poison Absorb", "Scavenger", "Twist. Dimension", "Multi Headed", "North Wind", "Overcharge", "Violent Rush", "Flaming Soul", "Sage Power", "Bone Zone", "Weather Control", "Speed Force", "Sea Guardian", "Molten Down", "Hyper Aggressive", "Flock", "Field Explorer", "Striker", "Frozen Soul", "Predator", "Looter", "Lunar Eclipse", "Solar Flare", "Power Core", "Sighting System", "Bad Company", "Opportunist", "Giant Wings", "Momentum", "Grip Pincer", "Big Leaves", "Precise Fist", "Deadeye", "Artillery", "Amplifier", "Ice Dew", "Sun Worship", "Buginize", "Volcano Rage", "Cold Rebound", "Low Blow", "Nosferatu", "Spectral Shroud", "Discipline", "Thundercall", "Marine Apex", "Mighty Horn", "Hardened Sheath", "Arctic Fur", "Lethargy", "Iron Barrage", "Steel Barrel", "Pyro Shells", "Fungal Infection", "Parry", "Scrapyard", "Loose Quills", "Toxic Debris", "Roundhouse", "Mineralize", "Loose Rocks", "Spinning Top", "Retribution Blow", "Fearmonger", "King's Wrath", "Queen's Mourning", "Toxic Spill", "Desert Cloak", "Draconize", "Pretty Princess", "Self Repair", "Atomic Burst", "Hellblaze", "Riptide", "Forest Rage", "Primal Maw", "Sweeping Edge", "Gifted Mind", "Hydro Circuit", "Equinox", "Absorbant", "Clueless", "Cheating Death", "Cheap Tactics", "Coward", "Spectralize", "Volt Rush", "Dune Terror", "Infernal Rage", "Dual Wield", "Elemental Charge", "Ambush", "Atlas", "Radiance", "Jaws of Carnage", "Angel's Wrath", "Prismatic Fur", "Shocking Jaws", "Fae Hunter"]

const SV = SS

export const ABILITIES = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Abilities implements I.Abilities {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return ABILITIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in ABILITIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Ability implements I.Ability {
  readonly kind: 'Ability';
  readonly id: I.ID;
  readonly name: I.AbilityName;

  constructor(name: string) {
    this.kind = 'Ability';
    this.id = toID(name);
    this.name = name as I.AbilityName;
  }
}

const ABILITIES_BY_ID: Array<{[id: string]: Ability}> = [];

for (const abilities of ABILITIES) {
  const map: {[id: string]: Ability} = {};
  for (const ability of abilities) {
    const a = new Ability(ability);
    map[a.id] = a;
  }
  ABILITIES_BY_ID.push(map);
}
