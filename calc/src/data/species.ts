import * as I from './interface';
import {toID, extend, DeepPartial, assignWithout} from '../util';

export interface SpeciesData {
  readonly types: [I.TypeName] | [I.TypeName, I.TypeName];
  // TODO: replace with bs
  readonly bs: {
    hp: number;
    at: number;
    df: number;
    sa?: number;
    sd?: number;
    sp: number;
    sl?: number;
  };
  readonly weightkg: number; // weight
  readonly nfe?: boolean;
  readonly gender?: I.GenderName;
  readonly otherFormes?: string[];
  readonly baseSpecies?: string;
  readonly abilities?: {0: string}; // ability
  readonly id?: number;
  readonly innates?: {0: string}; // innate
  readonly heads?: number;
  readonly genderR?: number;
}

const RBY: {[name: string]: SpeciesData} = {};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

// @ts-ignore readonly

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {};

const REDUX_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  'Bulbasaur': {
    id: 1,
    bs: {hp: 45,at: 49,df: 49,sa: 65,sd: 65,sp: 45},
    abilities: ['Chloroplast','Effect Spore','Chlorophyll'],
    innates: ['Overgrow','Thick Fat','Poison Touch'],
    nfe: true,
    weightkg: 69,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Ivysaur': {
    id: 2,
    bs: {hp: 60,at: 62,df: 63,sa: 80,sd: 80,sp: 60},
    abilities: ['Chloroplast','Effect Spore','Chlorophyll'],
    innates: ['Overgrow','Thick Fat','Poison Touch'],
    nfe: true,
    weightkg: 130,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Venusaur': {
    id: 3,
    bs: {hp: 80,at: 82,df: 83,sa: 100,sd: 100,sp: 80},
    abilities: ['Chloroplast','Effect Spore','Chlorophyll'],
    innates: ['Overgrow','Thick Fat','Poison Touch'],
    otherFormes: ['Venusaur Mega'],
    weightkg: 1000,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Charmander': {
    id: 4,
    bs: {hp: 39,at: 52,df: 43,sa: 60,sd: 50,sp: 65},
    abilities: ['Flame Body','Pyromancy','Flash Fire'],
    innates: ['Blaze','Immolate','Solar Power'],
    nfe: true,
    weightkg: 85,
    types: ['Fire'],
    genderR: 127
  },
  'Charmeleon': {
    id: 5,
    bs: {hp: 58,at: 64,df: 58,sa: 80,sd: 65,sp: 80},
    abilities: ['Flame Body','Pyromancy','Flash Fire'],
    innates: ['Blaze','Immolate','Solar Power'],
    nfe: true,
    weightkg: 190,
    types: ['Fire'],
    genderR: 127
  },
  'Charizard': {
    id: 6,
    bs: {hp: 78,at: 84,df: 78,sa: 109,sd: 85,sp: 100},
    abilities: ['Molten Down','Giant Wings','Tough Claws'],
    innates: ['Blaze','Levitate','Sun Worship'],
    otherFormes: ['Charizard Mega X','Charizard Mega Y'],
    weightkg: 905,
    types: ['Fire','Dragon'],
    genderR: 127
  },
  'Squirtle': {
    id: 7,
    bs: {hp: 44,at: 48,df: 65,sa: 50,sd: 64,sp: 43},
    abilities: ['Stamina','Regenerator','Bulletproof'],
    innates: ['Torrent','Shell Armor','Water Veil'],
    nfe: true,
    weightkg: 90,
    types: ['Water'],
    genderR: 127
  },
  'Wartortle': {
    id: 8,
    bs: {hp: 59,at: 63,df: 80,sa: 65,sd: 80,sp: 58},
    abilities: ['Stamina','Regenerator','Bulletproof'],
    innates: ['Torrent','Shell Armor','Water Veil'],
    nfe: true,
    weightkg: 225,
    types: ['Water'],
    genderR: 127
  },
  'Blastoise': {
    id: 9,
    bs: {hp: 79,at: 83,df: 100,sa: 85,sd: 105,sp: 78},
    abilities: ['Stamina','Regenerator','Bulletproof'],
    innates: ['Torrent','Shell Armor','Mega Launcher'],
    otherFormes: ['Blastoise Mega'],
    weightkg: 855,
    types: ['Water'],
    genderR: 127
  },
  'Caterpie': {
    id: 10,
    bs: {hp: 45,at: 30,df: 35,sa: 20,sd: 20,sp: 45},
    abilities: ['Compound Eyes','None','None'],
    innates: ['Swarm','Shield Dust'],
    nfe: true,
    weightkg: 29,
    types: ['Bug'],
    genderR: 127
  },
  'Metapod': {
    id: 11,
    bs: {hp: 50,at: 20,df: 55,sa: 25,sd: 25,sp: 30},
    abilities: ['Shed Skin','Shell Armor','None'],
    innates: ['Swarm','Shield Dust','Overcoat'],
    nfe: true,
    weightkg: 99,
    types: ['Bug'],
    genderR: 127
  },
  'Butterfree': {
    id: 12,
    bs: {hp: 60,at: 45,df: 50,sa: 90,sd: 80,sp: 90},
    abilities: ['Tinted Lens','Magical Dust','Effect Spore'],
    innates: ['Majestic Moth','Compound Eyes','Levitate'],
    weightkg: 320,
    types: ['Bug','Psychic'],
    genderR: 127
  },
  'Weedle': {
    id: 13,
    bs: {hp: 40,at: 35,df: 30,sa: 20,sd: 20,sp: 50},
    abilities: ['Compound Eyes','None','None'],
    innates: ['Swarm','Shield Dust'],
    nfe: true,
    weightkg: 32,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Kakuna': {
    id: 14,
    bs: {hp: 45,at: 25,df: 50,sa: 25,sd: 25,sp: 35},
    abilities: ['Shed Skin','Shell Armor','None'],
    innates: ['Swarm','Shield Dust','Overcoat'],
    nfe: true,
    weightkg: 100,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Beedrill': {
    id: 15,
    bs: {hp: 65,at: 110,df: 40,sa: 45,sd: 80,sp: 135},
    abilities: ['Poison Touch','Sniper','Speed Force'],
    innates: ['Hyper Aggressive','Merciless','Levitate'],
    otherFormes: ['Beedrill Mega'],
    weightkg: 295,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Pidgey': {
    id: 16,
    bs: {hp: 40,at: 35,df: 40,sa: 45,sd: 35,sp: 56},
    abilities: ['No Guard','Guts','Big Pecks'],
    innates: ['Flock','Keen Eye','Early Bird'],
    nfe: true,
    weightkg: 18,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Pidgeotto': {
    id: 17,
    bs: {hp: 63,at: 50,df: 55,sa: 60,sd: 50,sp: 71},
    abilities: ['No Guard','Guts','Big Pecks'],
    innates: ['Flock','Keen Eye','Early Bird'],
    nfe: true,
    weightkg: 300,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Pidgeot': {
    id: 18,
    bs: {hp: 83,at: 95,df: 75,sa: 85,sd: 70,sp: 101},
    abilities: ['No Guard','Majestic Bird','Big Pecks'],
    innates: ['Flock','Keen Eye','Giant Wings'],
    otherFormes: ['Pidgeot Mega'],
    weightkg: 395,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Rattata': {
    id: 19,
    bs: {hp: 30,at: 56,df: 35,sa: 25,sd: 35,sp: 72},
    abilities: ['Hustle','Normalize','Looter'],
    innates: ['Guts','Run Away'],
    otherFormes: ['Rattata Alolan'],
    nfe: true,
    weightkg: 35,
    types: ['Normal'],
    genderR: 127
  },
  'Raticate': {
    id: 20,
    bs: {hp: 55,at: 101,df: 60,sa: 50,sd: 70,sp: 102},
    abilities: ['Hustle','Normalize','Looter'],
    innates: ['Guts','Quick Feet','Growing Tooth'],
    otherFormes: ['Raticate Alolan'],
    weightkg: 185,
    types: ['Normal'],
    genderR: 127
  },
  'Spearow': {
    id: 21,
    bs: {hp: 40,at: 60,df: 30,sa: 31,sd: 31,sp: 70},
    abilities: ['Early Bird','Gale Wings','Big Pecks'],
    innates: ['Flock','Sniper','Keen Eye'],
    nfe: true,
    weightkg: 20,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Fearow': {
    id: 22,
    bs: {hp: 65,at: 110,df: 75,sa: 61,sd: 71,sp: 100},
    abilities: ['Intimidate','Gale Wings','Big Pecks'],
    innates: ['Flock','Sniper','Keen Eye'],
    weightkg: 380,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Ekans': {
    id: 23,
    bs: {hp: 35,at: 60,df: 44,sa: 40,sd: 54,sp: 55},
    abilities: ['Merciless','Intoxicate','Intimidate'],
    innates: ['Solenoglyphs','Shed Skin','Coil Up'],
    nfe: true,
    weightkg: 69,
    types: ['Poison'],
    genderR: 127
  },
  'Arbok': {
    id: 24,
    bs: {hp: 80,at: 105,df: 79,sa: 65,sd: 79,sp: 80},
    abilities: ['Merciless','Intoxicate','Intimidate'],
    innates: ['Solenoglyphs','Shed Skin','Coil Up'],
    weightkg: 650,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Pikachu': {
    id: 25,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu Cosplay','Pikachu Rock Star','Pikachu Belle','Pikachu Pop Star','Pikachu Ph D','Pikachu Libre','Pikachu Original Cap','Pikachu Hoenn Cap','Pikachu Sinnoh Cap','Pikachu Unova Cap','Pikachu Kalos Cap','Pikachu Alola Cap','Pikachu Partner Cap','Pikachu World Cap'],
    nfe: true,
    weightkg: 60,
    types: ['Electric'],
    genderR: 127
  },
  'Raichu': {
    id: 26,
    bs: {hp: 60,at: 90,df: 55,sa: 90,sd: 80,sp: 115},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Raichu Alolan'],
    weightkg: 300,
    types: ['Electric'],
    genderR: 127
  },
  'Sandshrew': {
    id: 27,
    bs: {hp: 50,at: 75,df: 85,sa: 20,sd: 30,sp: 40},
    abilities: ['Sand Veil','Stamina','Sand Stream'],
    innates: ['Lets Roll','Sand Rush','Battle Armor'],
    otherFormes: ['Sandshrew Alolan'],
    nfe: true,
    weightkg: 120,
    types: ['Ground'],
    genderR: 127
  },
  'Sandslash': {
    id: 28,
    bs: {hp: 95,at: 100,df: 110,sa: 45,sd: 55,sp: 65},
    abilities: ['Battle Armor','Stamina','Sand Stream'],
    innates: ['Lets Roll','Loose Quills','Tough Claws'],
    otherFormes: ['Sandslash Alolan','Sandslash Mega'],
    weightkg: 295,
    types: ['Ground'],
    genderR: 127
  },
  'Nidoran F': {
    id: 29,
    bs: {hp: 55,at: 47,df: 52,sa: 40,sd: 40,sp: 41},
    abilities: ['Poison Point','Hustle','None'],
    innates: ['Rivalry'],
    nfe: true,
    weightkg: 70,
    types: ['Poison'],
    genderR: 254
  },
  'Nidorina': {
    id: 30,
    bs: {hp: 70,at: 62,df: 67,sa: 55,sd: 55,sp: 56},
    abilities: ['Poison Point','Hustle','None'],
    innates: ['Rivalry'],
    nfe: true,
    weightkg: 200,
    types: ['Poison'],
    genderR: 254
  },
  'Nidoqueen': {
    id: 31,
    bs: {hp: 90,at: 92,df: 87,sa: 75,sd: 85,sp: 76},
    abilities: ['Poison Point','Hustle','Intoxicate'],
    innates: ['Rivalry','Thick Fat','Queenly Majesty'],
    otherFormes: ['Nidoqueen Mega'],
    weightkg: 600,
    types: ['Poison','Ground'],
    genderR: 254
  },
  'Nidoran M': {
    id: 32,
    bs: {hp: 46,at: 57,df: 40,sa: 40,sd: 40,sp: 50},
    abilities: ['Poison Point','Hustle','None'],
    innates: ['Rivalry'],
    nfe: true,
    weightkg: 90,
    types: ['Poison'],
    genderR: 0
  },
  'Nidorino': {
    id: 33,
    bs: {hp: 61,at: 72,df: 57,sa: 55,sd: 55,sp: 65},
    abilities: ['Poison Point','Hustle','None'],
    innates: ['Rivalry'],
    nfe: true,
    weightkg: 195,
    types: ['Poison'],
    genderR: 0
  },
  'Nidoking': {
    id: 34,
    bs: {hp: 81,at: 102,df: 77,sa: 85,sd: 75,sp: 85},
    abilities: ['Sheer Force','Hustle','Intoxicate'],
    innates: ['Rivalry','Poison Point','Rampage'],
    otherFormes: ['Nidoking Mega'],
    weightkg: 620,
    types: ['Poison','Ground'],
    genderR: 0
  },
  'Clefairy': {
    id: 35,
    bs: {hp: 70,at: 45,df: 48,sa: 60,sd: 65,sp: 35},
    abilities: ['Unaware','Magic Guard','Fluffy'],
    innates: ['Cute Charm','Healer','Natural Cure'],
    nfe: true,
    weightkg: 75,
    types: ['Fairy'],
    genderR: 191
  },
  'Clefable': {
    id: 36,
    bs: {hp: 95,at: 70,df: 73,sa: 95,sd: 90,sp: 60},
    abilities: ['Unaware','Magic Guard','Fluffy'],
    innates: ['Cute Charm','Healer','Natural Cure'],
    weightkg: 400,
    types: ['Fairy'],
    genderR: 191
  },
  'Vulpix': {
    id: 37,
    bs: {hp: 38,at: 41,df: 40,sa: 50,sd: 65,sp: 65},
    abilities: ['Flash Fire','Pyromancy','Drought'],
    innates: ['Quick Feet','Immolate'],
    otherFormes: ['Vulpix Alolan'],
    nfe: true,
    weightkg: 99,
    types: ['Fire'],
    genderR: 191
  },
  'Ninetales': {
    id: 38,
    bs: {hp: 73,at: 76,df: 75,sa: 91,sd: 100,sp: 100},
    abilities: ['Flaming Soul','Pixilate','Drought'],
    innates: ['Queenly Majesty','Pyromancy','Flash Fire'],
    otherFormes: ['Ninetales Alolan'],
    weightkg: 199,
    types: ['Fire','Fairy'],
    genderR: 191
  },
  'Jigglypuff': {
    id: 39,
    bs: {hp: 105,at: 45,df: 20,sa: 65,sd: 35,sp: 20},
    abilities: ['Sweet Dreams','Competitive','Magic Guard'],
    innates: ['Cute Charm','Inflatable','Lets Roll'],
    nfe: true,
    weightkg: 55,
    types: ['Normal','Fairy'],
    genderR: 191
  },
  'Wigglytuff': {
    id: 40,
    bs: {hp: 120,at: 70,df: 45,sa: 105,sd: 80,sp: 45},
    abilities: ['Sweet Dreams','Competitive','Magic Guard'],
    innates: ['Cute Charm','Inflatable','Fur Coat'],
    weightkg: 120,
    types: ['Normal','Fairy'],
    genderR: 191
  },
  'Zubat': {
    id: 41,
    bs: {hp: 40,at: 45,df: 35,sa: 30,sd: 40,sp: 55},
    abilities: ['Inner Focus','Infiltrator','Opportunist'],
    innates: ['Sniper','Nocturnal'],
    nfe: true,
    weightkg: 75,
    types: ['Poison','Flying'],
    genderR: 127
  },
  'Golbat': {
    id: 42,
    bs: {hp: 75,at: 80,df: 70,sa: 65,sd: 75,sp: 90},
    abilities: ['Mountaineer','Scavenger','Opportunist'],
    innates: ['Infiltrator','Sniper','Nocturnal'],
    nfe: true,
    weightkg: 550,
    types: ['Poison','Flying'],
    genderR: 127
  },
  'Oddish': {
    id: 43,
    bs: {hp: 45,at: 50,df: 55,sa: 75,sd: 65,sp: 30},
    abilities: ['Poison Absorb','Chloroplast','Sweet Veil'],
    innates: ['Regenerator','Grass Pelt','Natural Cure'],
    nfe: true,
    weightkg: 54,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Gloom': {
    id: 44,
    bs: {hp: 60,at: 65,df: 70,sa: 85,sd: 75,sp: 40},
    abilities: ['Poison Absorb','Chloroplast','Sweet Veil'],
    innates: ['Regenerator','Grass Pelt','Natural Cure'],
    nfe: true,
    weightkg: 86,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Vileplume': {
    id: 45,
    bs: {hp: 85,at: 60,df: 95,sa: 120,sd: 100,sp: 50},
    abilities: ['Poison Absorb','Chloroplast','Sweet Veil'],
    innates: ['Regenerator','Grass Pelt','Natural Cure'],
    weightkg: 186,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Paras': {
    id: 46,
    bs: {hp: 35,at: 70,df: 55,sa: 45,sd: 55,sp: 25},
    abilities: ['Overcoat','None','None'],
    innates: ['Effect Spore','Dry Skin'],
    nfe: true,
    weightkg: 54,
    types: ['Bug','Grass'],
    genderR: 127
  },
  'Parasect': {
    id: 47,
    bs: {hp: 80,at: 100,df: 95,sa: 70,sd: 140,sp: 30},
    abilities: ['Self Sufficient','Shadow Tag','Soul Eater'],
    innates: ['Effect Spore','Phantom','Opportunist'],
    weightkg: 295,
    types: ['Bug','Grass'],
    genderR: 127
  },
  'Venonat': {
    id: 48,
    bs: {hp: 60,at: 55,df: 50,sa: 40,sd: 55,sp: 45},
    abilities: ['Tinted Lens','None','None'],
    innates: ['Compound Eyes','Nocturnal','Magical Dust'],
    nfe: true,
    weightkg: 300,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Venomoth': {
    id: 49,
    bs: {hp: 70,at: 65,df: 60,sa: 85,sd: 75,sp: 100},
    abilities: ['Tinted Lens','Magical Dust','Magic Guard'],
    innates: ['Compound Eyes','Majestic Moth','Levitate'],
    weightkg: 125,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Diglett': {
    id: 50,
    bs: {hp: 10,at: 55,df: 25,sa: 35,sd: 45,sp: 95},
    abilities: ['Sand Force','Arena Trap','Earthbound'],
    innates: ['Sand Rush'],
    otherFormes: ['Diglett Alolan'],
    nfe: true,
    weightkg: 8,
    types: ['Ground'],
    genderR: 127
  },
  'Dugtrio': {
    id: 51,
    bs: {hp: 35,at: 100,df: 50,sa: 50,sd: 70,sp: 120},
    abilities: ['Sand Rush','Arena Trap','Earthbound'],
    innates: ['Multi Headed','Sand Force','Speed Force'],
    otherFormes: ['Dugtrio Alolan'],
    weightkg: 333,
    types: ['Ground'],
    genderR: 127
  },
  'Meowth': {
    id: 52,
    bs: {hp: 40,at: 45,df: 35,sa: 40,sd: 40,sp: 90},
    abilities: ['Sniper','Limber','Prankster'],
    innates: ['Perfectionist','Technician','Opportunist'],
    otherFormes: ['Meowth Alolan','Meowth Galarian'],
    nfe: true,
    weightkg: 42,
    types: ['Normal'],
    genderR: 127
  },
  'Persian': {
    id: 53,
    bs: {hp: 65,at: 85,df: 60,sa: 105,sd: 65,sp: 115},
    abilities: ['Sniper','Limber','Skill Link'],
    innates: ['Perfectionist','Technician','Opportunist'],
    otherFormes: ['Persian Alolan'],
    weightkg: 320,
    types: ['Normal'],
    genderR: 127
  },
  'Psyduck': {
    id: 54,
    bs: {hp: 50,at: 52,df: 48,sa: 65,sd: 50,sp: 55},
    abilities: ['Insomnia','Cloud Nine','Drizzle'],
    innates: ['Weather Control','Psychic Mind','Damp'],
    nfe: true,
    weightkg: 196,
    types: ['Water'],
    genderR: 127
  },
  'Golduck': {
    id: 55,
    bs: {hp: 80,at: 92,df: 78,sa: 105,sd: 80,sp: 85},
    abilities: ['Tough Claws','Sage Power','Drizzle'],
    innates: ['Weather Control','Psychic Mind','Swift Swim'],
    weightkg: 766,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Mankey': {
    id: 56,
    bs: {hp: 40,at: 80,df: 35,sa: 35,sd: 45,sp: 70},
    abilities: ['Moxie','Gorilla Tactics','No Guard'],
    innates: ['Anger Point','Hyper Aggressive'],
    nfe: true,
    weightkg: 280,
    types: ['Fighting'],
    genderR: 127
  },
  'Primeape': {
    id: 57,
    bs: {hp: 65,at: 105,df: 60,sa: 60,sd: 70,sp: 95},
    abilities: ['Moxie','Gorilla Tactics','No Guard'],
    innates: ['Anger Point','Hyper Aggressive','Violent Rush'],
    weightkg: 320,
    types: ['Fighting'],
    genderR: 127
  },
  'Growlithe': {
    id: 58,
    bs: {hp: 55,at: 70,df: 45,sa: 70,sd: 50,sp: 60},
    abilities: ['Intimidate','Strong Jaw','Immolate'],
    innates: ['Fur Coat','Flash Fire'],
    nfe: true,
    weightkg: 190,
    types: ['Fire'],
    genderR: 63
  },
  'Arcanine': {
    id: 59,
    bs: {hp: 90,at: 125,df: 65,sa: 85,sd: 80,sp: 110},
    abilities: ['Intimidate','Strong Jaw','Immolate'],
    innates: ['Fur Coat','Discipline','Predator'],
    weightkg: 1550,
    types: ['Fire'],
    genderR: 63
  },
  'Poliwag': {
    id: 60,
    bs: {hp: 40,at: 50,df: 40,sa: 40,sd: 40,sp: 90},
    abilities: ['Hydrate','Damp','None'],
    innates: ['Hypnotist','Swift Swim','Hydration'],
    nfe: true,
    weightkg: 124,
    types: ['Water'],
    genderR: 127
  },
  'Poliwhirl': {
    id: 61,
    bs: {hp: 65,at: 65,df: 65,sa: 50,sd: 50,sp: 90},
    abilities: ['Hydrate','Damp','None'],
    innates: ['Hypnotist','Swift Swim','Hydration'],
    nfe: true,
    weightkg: 200,
    types: ['Water'],
    genderR: 127
  },
  'Poliwrath': {
    id: 62,
    bs: {hp: 90,at: 115,df: 95,sa: 75,sd: 90,sp: 70},
    abilities: ['Precise Fist','Iron Fist','Power Fists'],
    innates: ['Hypnotist','Swift Swim','Hydration'],
    weightkg: 540,
    types: ['Water','Fighting'],
    genderR: 127
  },
  'Abra': {
    id: 63,
    bs: {hp: 25,at: 20,df: 15,sa: 105,sd: 55,sp: 90},
    abilities: ['Mystic Power','Trace','Exploit Weakness'],
    innates: ['Psychic Mind','Hypnotist','Magic Guard'],
    nfe: true,
    weightkg: 195,
    types: ['Psychic'],
    genderR: 63
  },
  'Kadabra': {
    id: 64,
    bs: {hp: 40,at: 35,df: 30,sa: 120,sd: 70,sp: 105},
    abilities: ['Mystic Power','Trace','Exploit Weakness'],
    innates: ['Psychic Mind','Inner Focus','Magic Guard'],
    nfe: true,
    weightkg: 565,
    types: ['Psychic'],
    genderR: 63
  },
  'Alakazam': {
    id: 65,
    bs: {hp: 55,at: 50,df: 45,sa: 135,sd: 95,sp: 120},
    abilities: ['Mystic Power','Trace','Exploit Weakness'],
    innates: ['Psychic Mind','Inner Focus','Magic Guard'],
    otherFormes: ['Alakazam Mega'],
    weightkg: 480,
    types: ['Psychic'],
    genderR: 63
  },
  'Machop': {
    id: 66,
    bs: {hp: 70,at: 80,df: 50,sa: 35,sd: 35,sp: 35},
    abilities: ['Iron Fist','None','Sheer Force'],
    innates: ['No Guard'],
    nfe: true,
    weightkg: 195,
    types: ['Fighting'],
    genderR: 63
  },
  'Machoke': {
    id: 67,
    bs: {hp: 80,at: 100,df: 70,sa: 50,sd: 60,sp: 45},
    abilities: ['Iron Fist','Power Fists','Sheer Force'],
    innates: ['No Guard','Steadfast','Guts'],
    nfe: true,
    weightkg: 705,
    types: ['Fighting'],
    genderR: 63
  },
  'Machamp': {
    id: 68,
    bs: {hp: 90,at: 130,df: 80,sa: 65,sd: 85,sp: 55},
    abilities: ['Precise Fist','Power Fists','Sheer Force'],
    innates: ['No Guard','Iron Fist','Guts'],
    weightkg: 1300,
    types: ['Fighting'],
    genderR: 63
  },
  'Bellsprout': {
    id: 69,
    bs: {hp: 50,at: 75,df: 35,sa: 70,sd: 30,sp: 40},
    abilities: ['Chloroplast','Harvest','None'],
    innates: ['Chlorophyll','Gluttony'],
    nfe: true,
    weightkg: 40,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Weepinbell': {
    id: 70,
    bs: {hp: 65,at: 90,df: 50,sa: 85,sd: 45,sp: 55},
    abilities: ['Chloroplast','Ambush','Arena Trap'],
    innates: ['Chlorophyll','Gluttony','Corrosion'],
    nfe: true,
    weightkg: 64,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Victreebel': {
    id: 71,
    bs: {hp: 80,at: 105,df: 65,sa: 100,sd: 70,sp: 70},
    abilities: ['Predator','Ambush','Arena Trap'],
    innates: ['Big Leaves','Gluttony','Corrosion'],
    weightkg: 155,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Tentacool': {
    id: 72,
    bs: {hp: 40,at: 40,df: 35,sa: 50,sd: 100,sp: 70},
    abilities: ['Liquid Ooze','Neuroforce','None'],
    innates: ['Clear Body','Poison Touch','Water Absorb'],
    nfe: true,
    weightkg: 455,
    types: ['Water','Poison'],
    genderR: 127
  },
  'Tentacruel': {
    id: 73,
    bs: {hp: 80,at: 70,df: 65,sa: 80,sd: 120,sp: 100},
    abilities: ['Liquid Ooze','Neuroforce','Water Veil'],
    innates: ['Clear Body','Poison Touch','Water Absorb'],
    weightkg: 550,
    types: ['Water','Poison'],
    genderR: 127
  },
  'Geodude': {
    id: 74,
    bs: {hp: 40,at: 80,df: 100,sa: 30,sd: 30,sp: 20},
    abilities: ['Rock Head','Sand Force','Fort Knox'],
    innates: ['Lets Roll','Sturdy','Solid Rock'],
    otherFormes: ['Geodude Alolan'],
    nfe: true,
    weightkg: 200,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Graveler': {
    id: 75,
    bs: {hp: 55,at: 95,df: 115,sa: 45,sd: 45,sp: 35},
    abilities: ['Rock Head','Sand Force','Fort Knox'],
    innates: ['Lets Roll','Sturdy','Solid Rock'],
    otherFormes: ['Graveler Alolan'],
    nfe: true,
    weightkg: 1050,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Golem': {
    id: 76,
    bs: {hp: 90,at: 135,df: 130,sa: 55,sd: 65,sp: 45},
    abilities: ['Rock Head','Fort Knox','Loose Rocks'],
    innates: ['Lets Roll','Sturdy','Mineralize'],
    otherFormes: ['Golem Alolan'],
    weightkg: 3000,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Ponyta': {
    id: 77,
    bs: {hp: 50,at: 85,df: 55,sa: 65,sd: 65,sp: 90},
    abilities: ['Reckless','Turboblaze','Striker'],
    innates: ['Speed Force','Flash Fire','Flame Body'],
    otherFormes: ['Ponyta Galarian'],
    nfe: true,
    weightkg: 300,
    types: ['Fire'],
    genderR: 127
  },
  'Rapidash': {
    id: 78,
    bs: {hp: 85,at: 110,df: 70,sa: 75,sd: 80,sp: 120},
    abilities: ['Reckless','Turboblaze','Striker'],
    innates: ['Immolate','Speed Force','Flame Body'],
    otherFormes: ['Rapidash Galarian'],
    weightkg: 950,
    types: ['Fire'],
    genderR: 127
  },
  'Slowpoke': {
    id: 79,
    bs: {hp: 90,at: 65,df: 65,sa: 40,sd: 40,sp: 15},
    abilities: ['Regenerator','Unaware','None'],
    innates: ['Oblivious','Own Tempo'],
    otherFormes: ['Slowpoke Galarian'],
    nfe: true,
    weightkg: 360,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Slowbro': {
    id: 80,
    bs: {hp: 95,at: 75,df: 110,sa: 100,sd: 80,sp: 30},
    abilities: ['Regenerator','Unaware','Twisted Dimension'],
    innates: ['Oblivious','Own Tempo','Shell Armor'],
    otherFormes: ['Slowbro Mega','Slowbro Galarian'],
    weightkg: 785,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Magnemite': {
    id: 81,
    bs: {hp: 25,at: 35,df: 70,sa: 95,sd: 55,sp: 45},
    abilities: ['Analytic','Full Metal Body','Download'],
    innates: ['Galvanize','Sturdy','Magnet Pull'],
    nfe: true,
    weightkg: 60,
    types: ['Electric','Steel'],
    genderR: 255
  },
  'Magneton': {
    id: 82,
    bs: {hp: 50,at: 60,df: 95,sa: 120,sd: 70,sp: 70},
    abilities: ['Analytic','Full Metal Body','Download'],
    innates: ['Galvanize','Multi Headed','Magnet Pull'],
    nfe: true,
    weightkg: 600,
    types: ['Electric','Steel'],
    genderR: 255
  },
  'Farfetchd': {
    id: 83,
    bs: {hp: 52,at: 90,df: 55,sa: 58,sd: 62,sp: 100},
    abilities: ['Super Luck','Fight Spirit','Defiant'],
    innates: ['Keen Eye','Field Explorer','Keen Edge'],
    otherFormes: ['Farfetchd Galarian'],
    weightkg: 150,
    types: ['Fighting','Flying'],
    genderR: 127
  },
  'Doduo': {
    id: 84,
    bs: {hp: 35,at: 85,df: 45,sa: 35,sd: 35,sp: 75},
    abilities: ['Speed Force','Moody','Big Pecks'],
    innates: ['Multi Headed','Grounded','Moxie'],
    nfe: true,
    weightkg: 392,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Dodrio': {
    id: 85,
    bs: {hp: 90,at: 110,df: 70,sa: 60,sd: 60,sp: 120},
    abilities: ['Speed Force','Moody','Big Pecks'],
    innates: ['Multi Headed','Grounded','Moxie'],
    weightkg: 852,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Seel': {
    id: 86,
    bs: {hp: 65,at: 45,df: 45,sa: 55,sd: 75,sp: 45},
    abilities: ['Water Veil','Swift Swim','None'],
    innates: ['Thick Fat','Fur Coat'],
    nfe: true,
    weightkg: 900,
    types: ['Water'],
    genderR: 127
  },
  'Dewgong': {
    id: 87,
    bs: {hp: 90,at: 90,df: 65,sa: 95,sd: 95,sp: 90},
    abilities: ['Fur Coat','Ice Scales','Arctic Fur'],
    innates: ['Thick Fat','Water Veil','North Wind'],
    otherFormes: ['Dewgong Mega'],
    weightkg: 1200,
    types: ['Water','Ice'],
    genderR: 127
  },
  'Grimer': {
    id: 88,
    bs: {hp: 80,at: 80,df: 50,sa: 40,sd: 50,sp: 25},
    abilities: ['Poison Touch','Regenerator','Self Sufficient'],
    innates: ['Liquified','Stench','Sticky Hold'],
    otherFormes: ['Grimer Alolan'],
    nfe: true,
    weightkg: 300,
    types: ['Poison'],
    genderR: 127
  },
  'Muk': {
    id: 89,
    bs: {hp: 105,at: 125,df: 75,sa: 65,sd: 100,sp: 50},
    abilities: ['Poison Touch','Regenerator','Self Sufficient'],
    innates: ['Liquified','Stench','Sticky Hold'],
    otherFormes: ['Muk Alolan'],
    weightkg: 300,
    types: ['Poison'],
    genderR: 127
  },
  'Shellder': {
    id: 90,
    bs: {hp: 30,at: 65,df: 100,sa: 45,sd: 25,sp: 40},
    abilities: ['Impenetrable','Skill Link','Weak Armor'],
    innates: ['Shell Armor','Hydrate','Sturdy'],
    nfe: true,
    weightkg: 40,
    types: ['Water'],
    genderR: 127
  },
  'Cloyster': {
    id: 91,
    bs: {hp: 50,at: 95,df: 180,sa: 85,sd: 45,sp: 70},
    abilities: ['Impenetrable','Skill Link','Weak Armor'],
    innates: ['Shell Armor','Hydrate','Sturdy'],
    weightkg: 1325,
    types: ['Water','Ice'],
    genderR: 127
  },
  'Gastly': {
    id: 92,
    bs: {hp: 30,at: 35,df: 30,sa: 100,sd: 35,sp: 80},
    abilities: ['Vengeance','Scare','Prankster'],
    innates: ['Levitate','Cursed Body','Haunted Spirit'],
    nfe: true,
    weightkg: 1,
    types: ['Ghost','Poison'],
    genderR: 127
  },
  'Haunter': {
    id: 93,
    bs: {hp: 45,at: 75,df: 45,sa: 115,sd: 55,sp: 95},
    abilities: ['Vengeance','Scare','Prankster'],
    innates: ['Levitate','Cursed Body','Haunted Spirit'],
    nfe: true,
    weightkg: 1,
    types: ['Ghost','Poison'],
    genderR: 127
  },
  'Gengar': {
    id: 94,
    bs: {hp: 60,at: 115,df: 60,sa: 130,sd: 75,sp: 110},
    abilities: ['Vengeance','Scare','Prankster'],
    innates: ['Levitate','Cursed Body','Haunted Spirit'],
    otherFormes: ['Gengar Mega'],
    weightkg: 405,
    types: ['Ghost','Poison'],
    genderR: 127
  },
  'Onix': {
    id: 95,
    bs: {hp: 65,at: 70,df: 160,sa: 30,sd: 55,sp: 70},
    abilities: ['Rock Head','Stamina','Sand Stream'],
    innates: ['Sturdy','Rough Skin','Loose Rocks'],
    nfe: true,
    weightkg: 2100,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Drowzee': {
    id: 96,
    bs: {hp: 60,at: 48,df: 45,sa: 43,sd: 90,sp: 42},
    abilities: ['Magic Bounce','Psychic Mind','None'],
    innates: ['Hypnotist','Dreamcatcher','Insomnia'],
    nfe: true,
    weightkg: 324,
    types: ['Psychic'],
    genderR: 127
  },
  'Hypno': {
    id: 97,
    bs: {hp: 95,at: 73,df: 70,sa: 115,sd: 115,sp: 67},
    abilities: ['Magic Bounce','Psychic Mind','Psychic Surge'],
    innates: ['Hypnotist','Dreamcatcher','Insomnia'],
    weightkg: 756,
    types: ['Psychic'],
    genderR: 127
  },
  'Krabby': {
    id: 98,
    bs: {hp: 30,at: 105,df: 90,sa: 25,sd: 25,sp: 50},
    abilities: ['Swift Swim','Technician','Self Sufficient'],
    innates: ['Shell Armor','Hyper Cutter','Grip Pincer'],
    nfe: true,
    weightkg: 65,
    types: ['Water'],
    genderR: 127
  },
  'Kingler': {
    id: 99,
    bs: {hp: 80,at: 130,df: 115,sa: 50,sd: 50,sp: 75},
    abilities: ['Swift Swim','Technician','Self Sufficient'],
    innates: ['Shell Armor','Hyper Cutter','Grip Pincer'],
    weightkg: 600,
    types: ['Water'],
    genderR: 127
  },
  'Voltorb': {
    id: 100,
    bs: {hp: 40,at: 30,df: 50,sa: 55,sd: 55,sp: 100},
    abilities: ['Soundproof','Download','Volt Absorb'],
    innates: ['Speed Force','Short Circuit','Momentum'],
    nfe: true,
    weightkg: 104,
    types: ['Electric'],
    genderR: 255
  },
  'Electrode': {
    id: 101,
    bs: {hp: 60,at: 50,df: 70,sa: 80,sd: 80,sp: 150},
    abilities: ['Volt Absorb','Download','Momentum'],
    innates: ['Aftermath','Electric Surge','Soundproof'],
    weightkg: 666,
    types: ['Electric'],
    genderR: 255
  },
  'Exeggcute': {
    id: 102,
    bs: {hp: 60,at: 40,df: 80,sa: 60,sd: 45,sp: 40},
    abilities: ['Magic Bounce','Chloroplast','Natural Cure'],
    innates: ['Solar Power','Chlorophyll'],
    nfe: true,
    weightkg: 25,
    types: ['Grass','Psychic'],
    genderR: 127
  },
  'Exeggutor': {
    id: 103,
    bs: {hp: 95,at: 95,df: 85,sa: 125,sd: 75,sp: 55},
    abilities: ['Magic Bounce','Chloroplast','Solar Power'],
    innates: ['Harvest','Multi Headed','Chlorophyll'],
    otherFormes: ['Exeggutor Alolan'],
    weightkg: 1200,
    types: ['Grass','Psychic'],
    genderR: 127
  },
  'Cubone': {
    id: 104,
    bs: {hp: 50,at: 50,df: 95,sa: 40,sd: 50,sp: 35},
    abilities: ['Technician','Guts','None'],
    innates: ['Bone Zone','Battle Armor','Rock Head'],
    nfe: true,
    weightkg: 65,
    types: ['Ground'],
    genderR: 127
  },
  'Marowak': {
    id: 105,
    bs: {hp: 75,at: 80,df: 110,sa: 50,sd: 80,sp: 45},
    abilities: ['Technician','Stamina','Skill Link'],
    innates: ['Bone Zone','Battle Armor','Rock Head'],
    otherFormes: ['Marowak Alolan'],
    weightkg: 450,
    types: ['Ground'],
    genderR: 127
  },
  'Hitmonlee': {
    id: 106,
    bs: {hp: 80,at: 120,df: 53,sa: 35,sd: 110,sp: 87},
    abilities: ['Unburden','Fatal Precision','Violent Rush'],
    innates: ['Limber','Reckless','Striker'],
    otherFormes: ['Hitmonlee Mega'],
    weightkg: 498,
    types: ['Fighting'],
    genderR: 0
  },
  'Hitmonchan': {
    id: 107,
    bs: {hp: 80,at: 105,df: 79,sa: 35,sd: 110,sp: 76},
    abilities: ['Precise Fist','Blitz Boxer','Raging Boxer'],
    innates: ['Inner Focus','Fatal Precision','Perfectionist'],
    otherFormes: ['Hitmonchan Mega'],
    weightkg: 502,
    types: ['Fighting'],
    genderR: 0
  },
  'Lickitung': {
    id: 108,
    bs: {hp: 90,at: 55,df: 75,sa: 60,sd: 75,sp: 30},
    abilities: ['Simple','Regenerator','Unaware'],
    innates: ['Gluttony','Thick Fat','Own Tempo'],
    nfe: true,
    weightkg: 655,
    types: ['Normal'],
    genderR: 127
  },
  'Koffing': {
    id: 109,
    bs: {hp: 40,at: 65,df: 95,sa: 60,sd: 45,sp: 35},
    abilities: ['Poison Absorb','Neutralizing Gas','Stench'],
    innates: ['Levitate','Inflatable'],
    nfe: true,
    weightkg: 10,
    types: ['Poison'],
    genderR: 127
  },
  'Weezing': {
    id: 110,
    bs: {hp: 65,at: 90,df: 120,sa: 95,sd: 70,sp: 60},
    abilities: ['Poison Absorb','Neutralizing Gas','Stench'],
    innates: ['Levitate','Multi Headed','Inflatable'],
    otherFormes: ['Weezing Galarian'],
    weightkg: 95,
    types: ['Poison'],
    genderR: 127
  },
  'Rhyhorn': {
    id: 111,
    bs: {hp: 80,at: 85,df: 95,sa: 30,sd: 30,sp: 25},
    abilities: ['Lightning Rod','Reckless','None'],
    innates: ['Solid Rock','Rock Head'],
    nfe: true,
    weightkg: 1150,
    types: ['Ground','Rock'],
    genderR: 127
  },
  'Rhydon': {
    id: 112,
    bs: {hp: 105,at: 130,df: 120,sa: 45,sd: 45,sp: 40},
    abilities: ['Lightning Rod','Reckless','Fort Knox'],
    innates: ['Solid Rock','Rock Head','Rough Skin'],
    nfe: true,
    weightkg: 1200,
    types: ['Ground','Rock'],
    genderR: 127
  },
  'Chansey': {
    id: 113,
    bs: {hp: 250,at: 5,df: 5,sa: 35,sd: 105,sp: 50},
    abilities: ['Cute Charm','None','Triage'],
    innates: ['Healer','Natural Cure','Serene Grace'],
    nfe: true,
    weightkg: 346,
    types: ['Normal'],
    genderR: 254
  },
  'Tangela': {
    id: 114,
    bs: {hp: 65,at: 55,df: 115,sa: 100,sd: 40,sp: 60},
    abilities: ['Chlorophyll','Battle Armor','Leaf Guard'],
    innates: ['Regenerator','Seaweed','Tangling Hair'],
    nfe: true,
    weightkg: 350,
    types: ['Grass'],
    genderR: 127
  },
  'Kangaskhan': {
    id: 115,
    bs: {hp: 105,at: 95,df: 80,sa: 40,sd: 80,sp: 90},
    abilities: ['Iron Fist','Technician','Guts'],
    innates: ['Parental Bond','Scrappy','Avenger'],
    otherFormes: ['Kangaskhan Mega'],
    weightkg: 800,
    types: ['Normal'],
    genderR: 254
  },
  'Horsea': {
    id: 116,
    bs: {hp: 30,at: 40,df: 70,sa: 70,sd: 25,sp: 60},
    abilities: ['Swift Swim','Immunity','None'],
    innates: ['Poison Point','Sniper'],
    nfe: true,
    weightkg: 80,
    types: ['Water'],
    genderR: 127
  },
  'Seadra': {
    id: 117,
    bs: {hp: 55,at: 65,df: 95,sa: 95,sd: 45,sp: 85},
    abilities: ['Swift Swim','Immunity','Poison Heal'],
    innates: ['Poison Point','Sniper','Mega Launcher'],
    nfe: true,
    weightkg: 250,
    types: ['Water'],
    genderR: 127
  },
  'Goldeen': {
    id: 118,
    bs: {hp: 45,at: 67,df: 60,sa: 35,sd: 50,sp: 63},
    abilities: ['Swift Swim','Water Veil','Mighty Horn'],
    innates: ['Lightning Rod','Multiscale','Field Explorer'],
    nfe: true,
    weightkg: 150,
    types: ['Water'],
    genderR: 127
  },
  'Seaking': {
    id: 119,
    bs: {hp: 80,at: 112,df: 65,sa: 65,sd: 100,sp: 98},
    abilities: ['Swift Swim','Water Veil','Mighty Horn'],
    innates: ['Lightning Rod','Multiscale','Field Explorer'],
    weightkg: 390,
    types: ['Water'],
    genderR: 127
  },
  'Staryu': {
    id: 120,
    bs: {hp: 30,at: 45,df: 55,sa: 70,sd: 55,sp: 85},
    abilities: ['Swift Swim','None','Illuminate'],
    innates: ['Natural Cure','Regenerator','Analytic'],
    nfe: true,
    weightkg: 345,
    types: ['Water'],
    genderR: 255
  },
  'Starmie': {
    id: 121,
    bs: {hp: 60,at: 75,df: 85,sa: 100,sd: 85,sp: 115},
    abilities: ['Swift Swim','Mystic Power','Illuminate'],
    innates: ['Natural Cure','Analytic','Victory Star'],
    weightkg: 800,
    types: ['Water','Psychic'],
    genderR: 255
  },
  'Mr Mime': {
    id: 122,
    bs: {hp: 40,at: 45,df: 65,sa: 120,sd: 120,sp: 90},
    abilities: ['Filter','Unnerve','Screen Cleaner'],
    innates: ['Magic Bounce','Soundproof','Hypnotist'],
    otherFormes: ['Mr Mime Galarian'],
    weightkg: 545,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Scyther': {
    id: 123,
    bs: {hp: 70,at: 110,df: 80,sa: 55,sd: 80,sp: 105},
    abilities: ['Perfectionist','Technician','Aerodynamics'],
    innates: ['Keen Edge','Swarm','Aerilate'],
    nfe: true,
    weightkg: 560,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Jynx': {
    id: 124,
    bs: {hp: 65,at: 50,df: 35,sa: 115,sd: 95,sp: 115},
    abilities: ['Psychic Mind','None','Psychic Surge'],
    innates: ['Dry Skin','Refrigerate','Amplifier'],
    weightkg: 406,
    types: ['Ice','Psychic'],
    genderR: 254
  },
  'Electabuzz': {
    id: 125,
    bs: {hp: 65,at: 83,df: 57,sa: 95,sd: 85,sp: 105},
    abilities: ['Power Fists','Short Circuit','Electric Surge'],
    innates: ['Vital Spirit','Hyper Aggressive','Motor Drive'],
    nfe: true,
    weightkg: 300,
    types: ['Electric'],
    genderR: 63
  },
  'Magmar': {
    id: 126,
    bs: {hp: 65,at: 95,df: 57,sa: 100,sd: 85,sp: 93},
    abilities: ['Pyromancy','Flaming Soul','Power Fists'],
    innates: ['Molten Down','Flame Body','Flash Fire'],
    nfe: true,
    weightkg: 445,
    types: ['Fire'],
    genderR: 63
  },
  'Pinsir': {
    id: 127,
    bs: {hp: 65,at: 125,df: 100,sa: 55,sd: 70,sp: 85},
    abilities: ['Anger Point','Violent Rush','Moxie'],
    innates: ['Swarm','Hyper Cutter','Grip Pincer'],
    otherFormes: ['Pinsir Mega'],
    weightkg: 550,
    types: ['Bug'],
    genderR: 127
  },
  'Tauros': {
    id: 128,
    bs: {hp: 95,at: 120,df: 95,sa: 40,sd: 70,sp: 110},
    abilities: ['Violent Rush','Rock Head','Rampage'],
    innates: ['Hyper Aggressive','Anger Point','Scrappy'],
    weightkg: 884,
    types: ['Normal'],
    genderR: 0
  },
  'Magikarp': {
    id: 129,
    bs: {hp: 20,at: 10,df: 55,sa: 15,sd: 20,sp: 80},
    abilities: ['Marvel Scale','None','Rattled'],
    innates: ['Swift Swim','Limber'],
    nfe: true,
    weightkg: 100,
    types: ['Water'],
    genderR: 127
  },
  'Gyarados': {
    id: 130,
    bs: {hp: 95,at: 125,df: 79,sa: 60,sd: 100,sp: 81},
    abilities: ['Intimidate','Moxie','Overwhelm'],
    innates: ['Levitate','Aerilate','Sea Guardian'],
    otherFormes: ['Gyarados Mega','Gyarados Mega Y'],
    weightkg: 2350,
    types: ['Water','Dragon'],
    genderR: 127
  },
  'Lapras': {
    id: 131,
    bs: {hp: 130,at: 85,df: 80,sa: 95,sd: 95,sp: 60},
    abilities: ['Adaptability','Snow Warning','Permafrost'],
    innates: ['Half Drake','Shell Armor','Self Sufficient'],
    otherFormes: ['Lapras Mega','Lapras Mega X'],
    weightkg: 2200,
    types: ['Water','Ice'],
    genderR: 127
  },
  'Ditto': {
    id: 132,
    bs: {hp: 48,at: 48,df: 48,sa: 48,sd: 48,sp: 48},
    abilities: ['Prankster','Limber','Imposter'],
    innates: ['Liquified'],
    weightkg: 40,
    types: ['Normal'],
    genderR: 255
  },
  'Eevee': {
    id: 133,
    bs: {hp: 55,at: 55,df: 50,sa: 45,sd: 65,sp: 55},
    abilities: ['Prankster','Adaptability','Unaware'],
    innates: ['Cute Charm'],
    nfe: true,
    weightkg: 65,
    types: ['Normal'],
    genderR: 30
  },
  'Vaporeon': {
    id: 134,
    bs: {hp: 130,at: 65,df: 60,sa: 110,sd: 95,sp: 65},
    abilities: ['Rain Dish','Regenerator','Drizzle'],
    innates: ['Water Veil','Water Absorb','Hydration'],
    weightkg: 290,
    types: ['Water'],
    genderR: 30
  },
  'Jolteon': {
    id: 135,
    bs: {hp: 65,at: 65,df: 60,sa: 110,sd: 95,sp: 130},
    abilities: ['Speed Boost','Electric Burst','Electric Surge'],
    innates: ['Short Circuit','Lightning Rod','Illuminate'],
    weightkg: 245,
    types: ['Electric'],
    genderR: 30
  },
  'Flareon': {
    id: 136,
    bs: {hp: 95,at: 130,df: 60,sa: 65,sd: 65,sp: 110},
    abilities: ['Reckless','Guts','Flaming Soul'],
    innates: ['Flash Fire','Quick Feet','Rivalry'],
    weightkg: 250,
    types: ['Fire'],
    genderR: 30
  },
  'Porygon': {
    id: 137,
    bs: {hp: 65,at: 60,df: 70,sa: 85,sd: 75,sp: 40},
    abilities: ['Download','Trace','Twisted Dimension'],
    innates: ['Analytic'],
    nfe: true,
    weightkg: 365,
    types: ['Normal'],
    genderR: 255
  },
  'Omanyte': {
    id: 138,
    bs: {hp: 35,at: 40,df: 100,sa: 90,sd: 55,sp: 35},
    abilities: ['Weak Armor','Swift Swim','None'],
    innates: ['Fossilized','Rain Dish','Shell Armor'],
    nfe: true,
    weightkg: 75,
    types: ['Rock','Water'],
    genderR: 30
  },
  'Omastar': {
    id: 139,
    bs: {hp: 70,at: 60,df: 125,sa: 115,sd: 70,sp: 55},
    abilities: ['Weak Armor','Swift Swim','Water Compaction'],
    innates: ['Fossilized','Rain Dish','Shell Armor'],
    weightkg: 350,
    types: ['Rock','Water'],
    genderR: 30
  },
  'Kabuto': {
    id: 140,
    bs: {hp: 30,at: 80,df: 90,sa: 55,sd: 45,sp: 55},
    abilities: ['Swift Swim','Battle Armor','Adaptability'],
    innates: ['Fossilized'],
    nfe: true,
    weightkg: 115,
    types: ['Rock','Water'],
    genderR: 30
  },
  'Kabutops': {
    id: 141,
    bs: {hp: 60,at: 115,df: 105,sa: 65,sd: 70,sp: 80},
    abilities: ['Swift Swim','Hyper Cutter','Perfectionist'],
    innates: ['Fossilized','Battle Armor','Keen Edge'],
    weightkg: 405,
    types: ['Rock','Water'],
    genderR: 30
  },
  'Aerodactyl': {
    id: 142,
    bs: {hp: 80,at: 105,df: 65,sa: 60,sd: 75,sp: 130},
    abilities: ['Speed Force','Predator','Fatal Precision'],
    innates: ['Fossilized','Rock Head','Half Drake'],
    otherFormes: ['Aerodactyl Mega'],
    weightkg: 590,
    types: ['Rock','Flying'],
    genderR: 30
  },
  'Snorlax': {
    id: 143,
    bs: {hp: 160,at: 110,df: 65,sa: 65,sd: 110,sp: 30},
    abilities: ['Lets Roll','Oblivious','Comatose'],
    innates: ['Field Explorer','Thick Fat','Gluttony'],
    weightkg: 4600,
    types: ['Normal'],
    genderR: 30
  },
  'Articuno': {
    id: 144,
    bs: {hp: 90,at: 85,df: 100,sa: 95,sd: 125,sp: 85},
    abilities: ['North Wind','Snow Warning','Ice Scales'],
    innates: ['Antarctic Bird','Majestic Bird','Permafrost'],
    otherFormes: ['Articuno Galarian'],
    weightkg: 554,
    types: ['Ice','Flying'],
    genderR: 255
  },
  'Zapdos': {
    id: 145,
    bs: {hp: 90,at: 90,df: 85,sa: 125,sd: 90,sp: 100},
    abilities: ['Overcharge','Gale Wings','Drizzle'],
    innates: ['Volt Absorb','Ground Shock','Static'],
    otherFormes: ['Zapdos Galarian'],
    weightkg: 526,
    types: ['Electric','Flying'],
    genderR: 255
  },
  'Moltres': {
    id: 146,
    bs: {hp: 90,at: 100,df: 90,sa: 125,sd: 85,sp: 90},
    abilities: ['Air Blower','Flaming Soul','Drought'],
    innates: ['Flash Fire','Molten Down','Pyromancy'],
    otherFormes: ['Moltres Galarian'],
    weightkg: 600,
    types: ['Fire','Flying'],
    genderR: 255
  },
  'Dratini': {
    id: 147,
    bs: {hp: 41,at: 64,df: 45,sa: 50,sd: 50,sp: 50},
    abilities: ['Regenerator','None','None'],
    innates: ['Multiscale','Marvel Scale','Shed Skin'],
    nfe: true,
    weightkg: 33,
    types: ['Dragon'],
    genderR: 127
  },
  'Dragonair': {
    id: 148,
    bs: {hp: 61,at: 84,df: 65,sa: 70,sd: 70,sp: 70},
    abilities: ['Regenerator','None','None'],
    innates: ['Multiscale','Marvel Scale','Shed Skin'],
    nfe: true,
    weightkg: 165,
    types: ['Dragon'],
    genderR: 127
  },
  'Dragonite': {
    id: 149,
    bs: {hp: 91,at: 134,df: 95,sa: 100,sd: 100,sp: 80},
    abilities: ['Dragons Maw','Aerilate','Prism Scales'],
    innates: ['Multiscale','Overwhelm','Rampage'],
    weightkg: 2100,
    types: ['Dragon','Flying'],
    genderR: 127
  },
  'Mewtwo': {
    id: 150,
    bs: {hp: 106,at: 110,df: 90,sa: 154,sd: 90,sp: 130},
    abilities: ['Mystic Power','Psychic Surge','Soul Eater'],
    innates: ['Psychic Mind','Pressure','Fatal Precision'],
    otherFormes: ['Mewtwo Mega X','Mewtwo Mega Y'],
    weightkg: 1220,
    types: ['Psychic'],
    genderR: 255
  },
  'Mew': {
    id: 151,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Magic Guard','Mystic Power','Imposter'],
    innates: ['Psychic Mind','Unaware','Prankster'],
    weightkg: 40,
    types: ['Psychic'],
    genderR: 255
  },
  'Chikorita': {
    id: 152,
    bs: {hp: 45,at: 49,df: 65,sa: 49,sd: 65,sp: 45},
    abilities: ['Regenerator','Pixilate','Grassy Surge'],
    innates: ['Grass Pelt','Sweet Dreams','Natural Cure'],
    nfe: true,
    weightkg: 64,
    types: ['Grass'],
    genderR: 127
  },
  'Bayleef': {
    id: 153,
    bs: {hp: 60,at: 62,df: 80,sa: 63,sd: 80,sp: 60},
    abilities: ['Regenerator','Pixilate','Grassy Surge'],
    innates: ['Grass Pelt','Sweet Dreams','Natural Cure'],
    weightkg: 158,
    types: ['Grass'],
    genderR: 127
  },
  'Meganium': {
    id: 154,
    bs: {hp: 80,at: 82,df: 100,sa: 93,sd: 100,sp: 80},
    abilities: ['Regenerator','Triage','Grassy Surge'],
    innates: ['Overgrow','Big Leaves','Pixilate'],
    otherFormes: ['Meganium Mega'],
    weightkg: 1005,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Cyndaquil': {
    id: 155,
    bs: {hp: 39,at: 52,df: 43,sa: 60,sd: 50,sp: 65},
    abilities: ['Flame Body','Berserk','Pyromancy'],
    innates: ['Blaze','Sand Rush','Sand Song'],
    nfe: true,
    weightkg: 79,
    types: ['Fire'],
    genderR: 127
  },
  'Quilava': {
    id: 156,
    bs: {hp: 58,at: 64,df: 58,sa: 80,sd: 65,sp: 80},
    abilities: ['Earthbound','Sand Rush','Pyromancy'],
    innates: ['Blaze','Berserk','Sand Song'],
    nfe: true,
    weightkg: 190,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Typhlosion': {
    id: 157,
    bs: {hp: 78,at: 84,df: 78,sa: 109,sd: 85,sp: 100},
    abilities: ['Earthbound','Berserk','Pyromancy'],
    innates: ['Blaze','Sand Rush','Flaming Soul'],
    otherFormes: ['Typhlosion Mega'],
    weightkg: 795,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Totodile': {
    id: 158,
    bs: {hp: 50,at: 65,df: 64,sa: 44,sd: 48,sp: 43},
    abilities: ['Intimidate','Predator','Violent Rush'],
    innates: ['Torrent','Strong Jaw','Rough Skin'],
    nfe: true,
    weightkg: 95,
    types: ['Water'],
    genderR: 127
  },
  'Croconaw': {
    id: 159,
    bs: {hp: 65,at: 80,df: 80,sa: 59,sd: 63,sp: 58},
    abilities: ['Intimidate','Predator','Violent Rush'],
    innates: ['Torrent','Strong Jaw','Rough Skin'],
    nfe: true,
    weightkg: 250,
    types: ['Water'],
    genderR: 127
  },
  'Feraligatr': {
    id: 160,
    bs: {hp: 85,at: 125,df: 100,sa: 49,sd: 83,sp: 88},
    abilities: ['Intimidate','Predator','Violent Rush'],
    innates: ['Torrent','Strong Jaw','Rough Skin'],
    otherFormes: ['Feraligatr Mega X','Feraligatr Mega Y'],
    weightkg: 888,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Sentret': {
    id: 161,
    bs: {hp: 35,at: 46,df: 34,sa: 35,sd: 45,sp: 20},
    abilities: ['Run Away','Sap Sipper','Quick Feet'],
    innates: ['Keen Eye','Field Explorer','Fur Coat'],
    nfe: true,
    weightkg: 60,
    types: ['Normal'],
    genderR: 127
  },
  'Furret': {
    id: 162,
    bs: {hp: 85,at: 86,df: 64,sa: 40,sd: 70,sp: 115},
    abilities: ['Momentum','Normalize','Adaptability'],
    innates: ['Scrappy','Field Explorer','Fur Coat'],
    weightkg: 325,
    types: ['Normal'],
    genderR: 127
  },
  'Hoothoot': {
    id: 163,
    bs: {hp: 60,at: 30,df: 30,sa: 36,sd: 56,sp: 50},
    abilities: ['Tinted Lens','Aerilate','None'],
    innates: ['Nocturnal','Keen Eye','Early Bird'],
    nfe: true,
    weightkg: 212,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Noctowl': {
    id: 164,
    bs: {hp: 100,at: 50,df: 70,sa: 76,sd: 96,sp: 70},
    abilities: ['Tinted Lens','Aerilate','Air Blower'],
    innates: ['Nocturnal','Insomnia','Majestic Bird'],
    weightkg: 408,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Ledyba': {
    id: 165,
    bs: {hp: 40,at: 40,df: 30,sa: 20,sd: 80,sp: 55},
    abilities: ['Run Away','Rattled','None'],
    innates: ['Swarm','Early Bird'],
    nfe: true,
    weightkg: 108,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Ledian': {
    id: 166,
    bs: {hp: 55,at: 95,df: 50,sa: 35,sd: 110,sp: 105},
    abilities: ['Aerilate','Pollinate','Aerodynamics'],
    innates: ['Raging Boxer','Iron Fist','Levitate'],
    weightkg: 356,
    types: ['Bug','Fighting'],
    genderR: 127
  },
  'Spinarak': {
    id: 167,
    bs: {hp: 40,at: 60,df: 40,sa: 40,sd: 40,sp: 30},
    abilities: ['Infiltrator','Prankster','No Guard'],
    innates: ['Spider Lair','Merciless'],
    nfe: true,
    weightkg: 85,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Ariados': {
    id: 168,
    bs: {hp: 80,at: 110,df: 80,sa: 60,sd: 80,sp: 80},
    abilities: ['Poison Touch','Sniper','Exploit Weakness'],
    innates: ['Spider Lair','Merciless','Opportunist'],
    weightkg: 335,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Crobat': {
    id: 169,
    bs: {hp: 85,at: 90,df: 80,sa: 80,sd: 80,sp: 130},
    abilities: ['Mountaineer','Momentum','Tinted Lens'],
    innates: ['Infiltrator','Soundproof','Nocturnal'],
    otherFormes: ['Crobat Mega'],
    weightkg: 750,
    types: ['Poison','Flying'],
    genderR: 127
  },
  'Chinchou': {
    id: 170,
    bs: {hp: 75,at: 38,df: 38,sa: 56,sd: 56,sp: 67},
    abilities: ['Swift Swim','Illuminate','Short Circuit'],
    innates: ['Plus','Water Absorb','Volt Absorb'],
    nfe: true,
    weightkg: 120,
    types: ['Water','Electric'],
    genderR: 127
  },
  'Lanturn': {
    id: 171,
    bs: {hp: 125,at: 58,df: 58,sa: 86,sd: 86,sp: 67},
    abilities: ['Swift Swim','Illuminate','Drizzle'],
    innates: ['Plus','Water Absorb','Volt Absorb'],
    otherFormes: ['Lanturn Mega'],
    weightkg: 225,
    types: ['Water','Electric'],
    genderR: 127
  },
  'Pichu': {
    id: 172,
    bs: {hp: 20,at: 40,df: 15,sa: 35,sd: 35,sp: 60},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pichu Spiky Eared'],
    nfe: true,
    weightkg: 20,
    types: ['Electric'],
    genderR: 127
  },
  'Cleffa': {
    id: 173,
    bs: {hp: 50,at: 25,df: 28,sa: 45,sd: 55,sp: 15},
    abilities: ['Unaware','Magic Guard','Friend Guard'],
    innates: ['Cute Charm','Healer','Natural Cure'],
    nfe: true,
    weightkg: 30,
    types: ['Fairy'],
    genderR: 191
  },
  'Igglybuff': {
    id: 174,
    bs: {hp: 90,at: 30,df: 15,sa: 40,sd: 20,sp: 15},
    abilities: ['Sweet Dreams','Competitive','Magic Guard'],
    innates: ['Cute Charm','Inflatable','Lets Roll'],
    nfe: true,
    weightkg: 10,
    types: ['Normal','Fairy'],
    genderR: 191
  },
  'Togepi': {
    id: 175,
    bs: {hp: 35,at: 20,df: 65,sa: 40,sd: 65,sp: 20},
    abilities: ['Serene Grace','Hustle','None'],
    innates: ['Super Luck'],
    nfe: true,
    weightkg: 15,
    types: ['Fairy'],
    genderR: 30
  },
  'Togetic': {
    id: 176,
    bs: {hp: 70,at: 40,df: 85,sa: 65,sd: 105,sp: 40},
    abilities: ['Cute Charm','Regenerator','Serene Grace'],
    innates: ['Shield Dust','Self Sufficient','Aerodynamics'],
    nfe: true,
    weightkg: 32,
    types: ['Fairy','Flying'],
    genderR: 30
  },
  'Natu': {
    id: 177,
    bs: {hp: 40,at: 50,df: 45,sa: 70,sd: 45,sp: 70},
    abilities: ['Forewarn','Early Bird','Synchronize'],
    innates: ['Keen Eye'],
    nfe: true,
    weightkg: 20,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Xatu': {
    id: 178,
    bs: {hp: 65,at: 75,df: 70,sa: 115,sd: 70,sp: 105},
    abilities: ['Forewarn','Early Bird','Synchronize'],
    innates: ['Keen Eye','Dreamcatcher','Magic Bounce'],
    weightkg: 150,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Mareep': {
    id: 179,
    bs: {hp: 55,at: 40,df: 40,sa: 65,sd: 45,sp: 35},
    abilities: ['Static','None','None'],
    innates: ['Minus','Fluffy'],
    nfe: true,
    weightkg: 78,
    types: ['Electric'],
    genderR: 127
  },
  'Flaaffy': {
    id: 180,
    bs: {hp: 70,at: 55,df: 55,sa: 80,sd: 60,sp: 45},
    abilities: ['Static','None','None'],
    innates: ['Minus','Fluffy'],
    nfe: true,
    weightkg: 133,
    types: ['Electric'],
    genderR: 127
  },
  'Ampharos': {
    id: 181,
    bs: {hp: 110,at: 75,df: 85,sa: 115,sd: 90,sp: 55},
    abilities: ['Short Circuit','Lightning Rod','Electric Surge'],
    innates: ['Dazzling','Illuminate','Overwhelm'],
    otherFormes: ['Ampharos Mega'],
    weightkg: 615,
    types: ['Electric','Dragon'],
    genderR: 127
  },
  'Bellossom': {
    id: 182,
    bs: {hp: 90,at: 60,df: 105,sa: 110,sd: 100,sp: 50},
    abilities: ['Chloroplast','Harvest','Triage'],
    innates: ['Chlorophyll','Healer','Leaf Guard'],
    weightkg: 58,
    types: ['Grass'],
    genderR: 127
  },
  'Marill': {
    id: 183,
    bs: {hp: 70,at: 20,df: 50,sa: 20,sd: 50,sp: 40},
    abilities: ['Sap Sipper','Swift Swim','None'],
    innates: ['Thick Fat','Hydration','Huge Power'],
    nfe: true,
    weightkg: 85,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Azumarill': {
    id: 184,
    bs: {hp: 100,at: 65,df: 90,sa: 110,sd: 90,sp: 60},
    abilities: ['Sap Sipper','Swift Swim','Water Veil'],
    innates: ['Thick Fat','Hydration','Huge Power'],
    weightkg: 285,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Sudowoodo': {
    id: 185,
    bs: {hp: 70,at: 110,df: 125,sa: 30,sd: 65,sp: 30},
    abilities: ['Juggernaut','Rock Head','Water Compaction'],
    innates: ['Raw Wood','Fort Knox','Sturdy'],
    weightkg: 380,
    types: ['Rock'],
    genderR: 127
  },
  'Politoed': {
    id: 186,
    bs: {hp: 110,at: 75,df: 75,sa: 100,sd: 100,sp: 70},
    abilities: ['Storm Drain','Unaware','Hydrate'],
    innates: ['Damp','Hydration','Drizzle'],
    weightkg: 339,
    types: ['Water','Normal'],
    genderR: 127
  },
  'Hoppip': {
    id: 187,
    bs: {hp: 35,at: 35,df: 40,sa: 35,sd: 55,sp: 50},
    abilities: ['Leaf Guard','Infiltrator','Aerilate'],
    innates: ['Chlorophyll','Aerodynamics'],
    nfe: true,
    weightkg: 5,
    types: ['Grass','Flying'],
    genderR: 127
  },
  'Skiploom': {
    id: 188,
    bs: {hp: 55,at: 45,df: 50,sa: 45,sd: 65,sp: 80},
    abilities: ['Leaf Guard','Infiltrator','Aerilate'],
    innates: ['Chlorophyll','Aerodynamics'],
    nfe: true,
    weightkg: 10,
    types: ['Grass','Flying'],
    genderR: 127
  },
  'Jumpluff': {
    id: 189,
    bs: {hp: 75,at: 75,df: 70,sa: 55,sd: 95,sp: 130},
    abilities: ['Leaf Guard','Infiltrator','Aerilate'],
    innates: ['Chlorophyll','Aerodynamics','Cotton Down'],
    weightkg: 30,
    types: ['Grass','Flying'],
    genderR: 127
  },
  'Aipom': {
    id: 190,
    bs: {hp: 55,at: 70,df: 55,sa: 40,sd: 55,sp: 85},
    abilities: ['Super Luck','Normalize','Simple'],
    innates: ['Technician','Skill Link','Moody'],
    nfe: true,
    weightkg: 115,
    types: ['Normal'],
    genderR: 127
  },
  'Sunkern': {
    id: 191,
    bs: {hp: 30,at: 30,df: 30,sa: 30,sd: 30,sp: 30},
    abilities: ['Chloroplast','Solar Power','None'],
    innates: ['Chlorophyll'],
    nfe: true,
    weightkg: 18,
    types: ['Grass'],
    genderR: 127
  },
  'Sunflora': {
    id: 192,
    bs: {hp: 95,at: 75,df: 55,sa: 125,sd: 85,sp: 30},
    abilities: ['Chloroplast','Grassy Surge','Drought'],
    innates: ['Chlorophyll','Solar Power','Early Bird'],
    weightkg: 85,
    types: ['Grass','Fire'],
    genderR: 127
  },
  'Yanma': {
    id: 193,
    bs: {hp: 65,at: 65,df: 45,sa: 75,sd: 45,sp: 95},
    abilities: ['Aerodynamics','Infiltrator','Tinted Lens'],
    innates: ['Speed Boost','Compound Eyes','Swarm'],
    weightkg: 380,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Wooper': {
    id: 194,
    bs: {hp: 55,at: 45,df: 45,sa: 25,sd: 25,sp: 15},
    abilities: ['Oblivious','None','Rain Dish'],
    innates: ['Unaware','Water Absorb'],
    nfe: true,
    weightkg: 85,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Quagsire': {
    id: 195,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 35},
    abilities: ['Hydrate','Tectonize','Water Veil'],
    innates: ['Unaware','Water Absorb','Oblivious'],
    weightkg: 750,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Espeon': {
    id: 196,
    bs: {hp: 65,at: 65,df: 60,sa: 130,sd: 95,sp: 110},
    abilities: ['Soul Heart','Sage Power','Psychic Surge'],
    innates: ['Magic Bounce','Avenger','Psychic Mind'],
    weightkg: 265,
    types: ['Psychic'],
    genderR: 30
  },
  'Umbreon': {
    id: 197,
    bs: {hp: 95,at: 65,df: 110,sa: 60,sd: 130,sp: 65},
    abilities: ['Bad Luck','Self Sufficient','Soul Linker'],
    innates: ['Predator','Nocturnal','Dark Aura'],
    weightkg: 270,
    types: ['Dark'],
    genderR: 30
  },
  'Murkrow': {
    id: 198,
    bs: {hp: 60,at: 85,df: 42,sa: 85,sd: 42,sp: 101},
    abilities: ['Moody','Super Luck','Prankster'],
    innates: ['Big Pecks','Nocturnal','Bad Luck'],
    nfe: true,
    weightkg: 21,
    types: ['Dark','Flying'],
    genderR: 127
  },
  'Slowking': {
    id: 199,
    bs: {hp: 95,at: 75,df: 80,sa: 100,sd: 110,sp: 30},
    abilities: ['Regenerator','Unaware','Twisted Dimension'],
    innates: ['Oblivious','Own Tempo','Battle Armor'],
    otherFormes: ['Slowking Galarian','Slowking Mega'],
    weightkg: 795,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Misdreavus': {
    id: 200,
    bs: {hp: 60,at: 60,df: 60,sa: 85,sd: 85,sp: 85},
    abilities: ['Perish Body','Shadow Tag','Pixilate'],
    innates: ['Levitate','Cursed Body','Vengeance'],
    nfe: true,
    weightkg: 10,
    types: ['Ghost','Fairy'],
    genderR: 127
  },
  'Unown': {
    id: 201,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown B','Unown C','Unown D','Unown E','Unown F','Unown G','Unown H','Unown I','Unown J','Unown K','Unown L','Unown M','Unown N','Unown O','Unown P','Unown Q','Unown R','Unown S','Unown T','Unown U','Unown V','Unown W','Unown X','Unown Y','Unown Z','Unown Emark','Unown Qmark'],
    weightkg: 50,
    types: ['Psychic'],
    genderR: 255
  },
  'Wobbuffet': {
    id: 202,
    bs: {hp: 190,at: 33,df: 58,sa: 33,sd: 58,sp: 33},
    abilities: ['Shadow Tag','Soul Linker','Screen Cleaner'],
    innates: ['Sticky Hold','Inflatable','Limber'],
    weightkg: 285,
    types: ['Psychic'],
    genderR: 127
  },
  'Girafarig': {
    id: 203,
    bs: {hp: 70,at: 100,df: 65,sa: 90,sd: 65,sp: 105},
    abilities: ['Scare','Contrary','Sap Sipper'],
    innates: ['Multi Headed','Nocturnal','Strong Jaw'],
    weightkg: 415,
    types: ['Normal','Psychic'],
    genderR: 127
  },
  'Pineco': {
    id: 204,
    bs: {hp: 50,at: 65,df: 90,sa: 35,sd: 35,sp: 15},
    abilities: ['Sturdy','None','Stamina'],
    innates: ['Overcoat'],
    nfe: true,
    weightkg: 72,
    types: ['Bug'],
    genderR: 127
  },
  'Forretress': {
    id: 205,
    bs: {hp: 75,at: 100,df: 140,sa: 60,sd: 80,sp: 20},
    abilities: ['Sturdy','Fort Knox','Stamina'],
    innates: ['Overcoat','Lead Coat','Heatproof'],
    weightkg: 1258,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Dunsparce': {
    id: 206,
    bs: {hp: 110,at: 80,df: 80,sa: 65,sd: 75,sp: 45},
    abilities: ['Serene Grace','Field Explorer','Unaware'],
    innates: ['Super Luck','Run Away','Coward'],
    weightkg: 140,
    types: ['Normal'],
    genderR: 127
  },
  'Gligar': {
    id: 207,
    bs: {hp: 65,at: 75,df: 105,sa: 35,sd: 65,sp: 85},
    abilities: ['Immunity','Battle Armor','Poison Heal'],
    innates: ['Hyper Cutter','Sand Veil','Rough Skin'],
    nfe: true,
    weightkg: 648,
    types: ['Ground','Flying'],
    genderR: 127
  },
  'Steelix': {
    id: 208,
    bs: {hp: 75,at: 105,df: 200,sa: 55,sd: 75,sp: 20},
    abilities: ['Fort Knox','Impenetrable','Coil Up'],
    innates: ['Lead Coat','Tectonize','Strong Jaw'],
    otherFormes: ['Steelix Mega'],
    weightkg: 4000,
    types: ['Steel','Ground'],
    genderR: 127
  },
  'Snubbull': {
    id: 209,
    bs: {hp: 60,at: 80,df: 50,sa: 40,sd: 40,sp: 30},
    abilities: ['Intimidate','Pixilate','Rattled'],
    innates: ['Quick Feet'],
    nfe: true,
    weightkg: 78,
    types: ['Fairy'],
    genderR: 191
  },
  'Granbull': {
    id: 210,
    bs: {hp: 90,at: 130,df: 75,sa: 60,sd: 60,sp: 65},
    abilities: ['Intimidate','Guts','Violent Rush'],
    innates: ['Fight Spirit','Strong Jaw','Quick Feet'],
    otherFormes: ['Granbull Mega'],
    weightkg: 487,
    types: ['Fairy','Dark'],
    genderR: 191
  },
  'Qwilfish': {
    id: 211,
    bs: {hp: 65,at: 95,df: 115,sa: 55,sd: 55,sp: 85},
    abilities: ['Innards Out','Intoxicate','Intimidate'],
    innates: ['Loose Quills','Inflatable','Poison Point'],
    weightkg: 39,
    types: ['Water','Poison'],
    genderR: 127
  },
  'Scizor': {
    id: 212,
    bs: {hp: 70,at: 130,df: 100,sa: 55,sd: 80,sp: 65},
    abilities: ['Steely Spirit','Grip Pincer','Intimidate'],
    innates: ['Technician','Hyper Cutter','Pollinate'],
    otherFormes: ['Scizor Mega'],
    weightkg: 1180,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Shuckle': {
    id: 213,
    bs: {hp: 30,at: 10,df: 230,sa: 10,sd: 230,sp: 5},
    abilities: ['Coward','Lets Roll','Contrary'],
    innates: ['Shell Armor','Fort Knox','Solid Rock'],
    weightkg: 205,
    types: ['Bug','Rock'],
    genderR: 127
  },
  'Heracross': {
    id: 214,
    bs: {hp: 80,at: 125,df: 75,sa: 40,sd: 95,sp: 85},
    abilities: ['Skill Link','Violent Rush','Moxie'],
    innates: ['Swarm','Battle Armor','Guts'],
    otherFormes: ['Heracross Mega'],
    weightkg: 540,
    types: ['Bug','Fighting'],
    genderR: 127
  },
  'Sneasel': {
    id: 215,
    bs: {hp: 55,at: 70,df: 55,sa: 35,sd: 75,sp: 115},
    abilities: ['Hyper Aggressive','Technician','Fatal Precision'],
    innates: ['Tough Claws','Inner Focus','Infiltrator'],
    nfe: true,
    weightkg: 280,
    types: ['Dark','Ice'],
    genderR: 127
  },
  'Teddiursa': {
    id: 216,
    bs: {hp: 60,at: 80,df: 50,sa: 50,sd: 50,sp: 40},
    abilities: ['Scrappy','Tough Claws','None'],
    innates: ['Guts','Quick Feet','Fur Coat'],
    nfe: true,
    weightkg: 88,
    types: ['Normal'],
    genderR: 127
  },
  'Ursaring': {
    id: 217,
    bs: {hp: 90,at: 130,df: 75,sa: 75,sd: 75,sp: 75},
    abilities: ['Intimidate','Tough Claws','Predator'],
    innates: ['Guts','Quick Feet','Fur Coat'],
    weightkg: 1258,
    types: ['Normal'],
    genderR: 127
  },
  'Slugma': {
    id: 218,
    bs: {hp: 40,at: 40,df: 40,sa: 70,sd: 40,sp: 20},
    abilities: ['Simple','Flame Body','None'],
    innates: ['Molten Down','Flash Fire'],
    nfe: true,
    weightkg: 350,
    types: ['Fire'],
    genderR: 127
  },
  'Magcargo': {
    id: 219,
    bs: {hp: 60,at: 50,df: 120,sa: 90,sd: 80,sp: 30},
    abilities: ['Simple','Mountaineer','Shell Armor'],
    innates: ['Molten Down','Flash Fire','Magma Armor'],
    weightkg: 550,
    types: ['Fire','Rock'],
    genderR: 127
  },
  'Swinub': {
    id: 220,
    bs: {hp: 50,at: 50,df: 40,sa: 30,sd: 30,sp: 50},
    abilities: ['Oblivious','Sheer Force','None'],
    innates: ['Slush Rush','Snow Cloak'],
    nfe: true,
    weightkg: 65,
    types: ['Ice','Ground'],
    genderR: 127
  },
  'Piloswine': {
    id: 221,
    bs: {hp: 100,at: 100,df: 80,sa: 60,sd: 60,sp: 50},
    abilities: ['Fur Coat','Sheer Force','Mountaineer'],
    innates: ['Slush Rush','Thick Fat','Growing Tooth'],
    nfe: true,
    weightkg: 558,
    types: ['Ice','Ground'],
    genderR: 127
  },
  'Corsola': {
    id: 222,
    bs: {hp: 85,at: 55,df: 95,sa: 85,sd: 95,sp: 35},
    abilities: ['Sturdy','Rough Skin','Water Veil'],
    innates: ['Regenerator','Natural Cure','Solid Rock'],
    otherFormes: ['Corsola Galarian'],
    weightkg: 50,
    types: ['Water','Rock'],
    genderR: 191
  },
  'Remoraid': {
    id: 223,
    bs: {hp: 35,at: 65,df: 35,sa: 65,sd: 35,sp: 65},
    abilities: ['Hustle','Sniper','Moody'],
    innates: ['Artillery','Swift Swim'],
    nfe: true,
    weightkg: 120,
    types: ['Water'],
    genderR: 127
  },
  'Octillery': {
    id: 224,
    bs: {hp: 75,at: 65,df: 95,sa: 125,sd: 95,sp: 45},
    abilities: ['Suction Cups','Sniper','Moody'],
    innates: ['Artillery','Swift Swim','Mega Launcher'],
    weightkg: 285,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Delibird': {
    id: 225,
    bs: {hp: 80,at: 105,df: 55,sa: 65,sd: 55,sp: 95},
    abilities: ['Adaptability','Prankster','Slush Rush'],
    innates: ['Thick Fat','Magic Bounce','Christmas Spirit'],
    weightkg: 160,
    types: ['Ice'],
    genderR: 127
  },
  'Mantine': {
    id: 226,
    bs: {hp: 85,at: 40,df: 70,sa: 80,sd: 140,sp: 70},
    abilities: ['Regenerator','Water Veil','Drizzle'],
    innates: ['Rain Dish','Water Absorb','Giant Wings'],
    weightkg: 2200,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Skarmory': {
    id: 227,
    bs: {hp: 65,at: 80,df: 140,sa: 40,sd: 70,sp: 70},
    abilities: ['Mirror Armor','Sturdy','Lead Coat'],
    innates: ['Giant Wings','Full Metal Body','Battle Armor'],
    otherFormes: ['Skarmory Mega'],
    weightkg: 505,
    types: ['Steel','Flying'],
    genderR: 127
  },
  'Houndour': {
    id: 228,
    bs: {hp: 45,at: 60,df: 30,sa: 80,sd: 50,sp: 65},
    abilities: ['Flame Body','Pyromancy','None'],
    innates: ['Nocturnal','Fae Hunter','Equinox'],
    nfe: true,
    weightkg: 108,
    types: ['Dark','Fire'],
    genderR: 127
  },
  'Houndoom': {
    id: 229,
    bs: {hp: 75,at: 100,df: 50,sa: 110,sd: 80,sp: 105},
    abilities: ['Strong Jaw','Molten Down','Solar Power'],
    innates: ['Nocturnal','Fae Hunter','Equinox'],
    otherFormes: ['Houndoom Mega'],
    weightkg: 350,
    types: ['Dark','Fire'],
    genderR: 127
  },
  'Kingdra': {
    id: 230,
    bs: {hp: 75,at: 95,df: 95,sa: 95,sd: 95,sp: 85},
    abilities: ['Swift Swim','Sniper','Torrent'],
    innates: ['Prism Scales','Mega Launcher','Marvel Scale'],
    otherFormes: ['Kingdra Mega','Kingdra Mega Y'],
    weightkg: 1520,
    types: ['Water','Dragon'],
    genderR: 127
  },
  'Phanpy': {
    id: 231,
    bs: {hp: 90,at: 60,df: 60,sa: 40,sd: 40,sp: 40},
    abilities: ['Sheer Force','Thick Fat','Stamina'],
    innates: ['Lets Roll','Rough Skin'],
    nfe: true,
    weightkg: 335,
    types: ['Ground'],
    genderR: 127
  },
  'Donphan': {
    id: 232,
    bs: {hp: 90,at: 130,df: 130,sa: 60,sd: 60,sp: 50},
    abilities: ['Sheer Force','Thick Fat','Stamina'],
    innates: ['Lets Roll','Rough Skin','Battle Armor'],
    weightkg: 1200,
    types: ['Ground'],
    genderR: 127
  },
  'Porygon2': {
    id: 233,
    bs: {hp: 85,at: 80,df: 90,sa: 105,sd: 95,sp: 60},
    abilities: ['Download','Trace','Twisted Dimension'],
    innates: ['Analytic','Self Repair','Levitate'],
    nfe: true,
    weightkg: 325,
    types: ['Normal'],
    genderR: 255
  },
  'Stantler': {
    id: 234,
    bs: {hp: 73,at: 115,df: 62,sa: 85,sd: 65,sp: 95},
    abilities: ['Quick Feet','Rivalry','Intimidate'],
    innates: ['Sap Sipper','Violent Rush','Hypnotist'],
    weightkg: 712,
    types: ['Normal'],
    genderR: 127
  },
  'Smeargle': {
    id: 235,
    bs: {hp: 55,at: 20,df: 35,sa: 20,sd: 45,sp: 75},
    abilities: ['Prankster','Simple','Moody'],
    innates: ['Own Tempo','Technician','Skill Link'],
    weightkg: 580,
    types: ['Normal'],
    genderR: 127
  },
  'Tyrogue': {
    id: 236,
    bs: {hp: 35,at: 35,df: 35,sa: 35,sd: 35,sp: 35},
    abilities: ['Steadfast','None','None'],
    innates: ['Guts','Vital Spirit'],
    nfe: true,
    weightkg: 210,
    types: ['Fighting'],
    genderR: 0
  },
  'Hitmontop': {
    id: 237,
    bs: {hp: 80,at: 95,df: 95,sa: 35,sd: 110,sp: 70},
    abilities: ['Steadfast','Fight Spirit','Contrary'],
    innates: ['Technician','Intimidate','Scrappy'],
    weightkg: 480,
    types: ['Fighting'],
    genderR: 0
  },
  'Smoochum': {
    id: 238,
    bs: {hp: 45,at: 30,df: 15,sa: 85,sd: 65,sp: 65},
    abilities: ['Oblivious','Forewarn','Hydration'],
    innates: ['Dry Skin'],
    nfe: true,
    weightkg: 60,
    types: ['Ice','Psychic'],
    genderR: 254
  },
  'Elekid': {
    id: 239,
    bs: {hp: 45,at: 63,df: 37,sa: 65,sd: 55,sp: 95},
    abilities: ['Static','None','Vital Spirit'],
    innates: ['Minus'],
    nfe: true,
    weightkg: 235,
    types: ['Electric'],
    genderR: 63
  },
  'Magby': {
    id: 240,
    bs: {hp: 45,at: 75,df: 37,sa: 70,sd: 55,sp: 83},
    abilities: ['Flame Body','None','Vital Spirit'],
    innates: ['Flash Fire'],
    nfe: true,
    weightkg: 214,
    types: ['Fire'],
    genderR: 63
  },
  'Miltank': {
    id: 241,
    bs: {hp: 95,at: 80,df: 105,sa: 40,sd: 70,sp: 100},
    abilities: ['Self Sufficient','Scrappy','Stamina'],
    innates: ['Thick Fat','Sap Sipper','Juggernaut'],
    weightkg: 755,
    types: ['Normal'],
    genderR: 254
  },
  'Blissey': {
    id: 242,
    bs: {hp: 255,at: 10,df: 10,sa: 75,sd: 135,sp: 55},
    abilities: ['Cute Charm','Serene Grace','Self Sufficient'],
    innates: ['Natural Cure','Healer','Super Luck'],
    weightkg: 468,
    types: ['Normal'],
    genderR: 254
  },
  'Raikou': {
    id: 243,
    bs: {hp: 90,at: 85,df: 75,sa: 115,sd: 100,sp: 115},
    abilities: ['Transistor','Ground Shock','Drizzle'],
    innates: ['Overcharge','Beast Boost','Electric Surge'],
    weightkg: 1780,
    types: ['Electric'],
    genderR: 255
  },
  'Entei': {
    id: 244,
    bs: {hp: 115,at: 115,df: 85,sa: 90,sd: 75,sp: 100},
    abilities: ['Strong Jaw','Flaming Soul','Drought'],
    innates: ['Volcano Rage','Beast Boost','Molten Down'],
    weightkg: 1980,
    types: ['Fire'],
    genderR: 255
  },
  'Suicune': {
    id: 245,
    bs: {hp: 100,at: 75,df: 115,sa: 90,sd: 115,sp: 85},
    abilities: ['North Wind','Prism Scales','Drizzle'],
    innates: ['Aurora Borealis','Water Veil','Sea Guardian'],
    weightkg: 1870,
    types: ['Water'],
    genderR: 255
  },
  'Larvitar': {
    id: 246,
    bs: {hp: 50,at: 64,df: 50,sa: 45,sd: 50,sp: 41},
    abilities: ['Guts','Sand Force','Moxie'],
    innates: ['Solid Rock','Mountaineer','Rough Skin'],
    nfe: true,
    weightkg: 720,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Pupitar': {
    id: 247,
    bs: {hp: 70,at: 84,df: 70,sa: 65,sd: 70,sp: 51},
    abilities: ['Shed Skin','Sand Veil','Battle Armor'],
    innates: ['Solid Rock','Mountaineer','Rough Skin'],
    nfe: true,
    weightkg: 1520,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Tyranitar': {
    id: 248,
    bs: {hp: 100,at: 134,df: 110,sa: 95,sd: 100,sp: 61},
    abilities: ['Strong Jaw','Moxie','Sand Stream'],
    innates: ['Impenetrable','Juggernaut','Rough Skin'],
    otherFormes: ['Tyranitar Mega'],
    weightkg: 2020,
    types: ['Rock','Dark'],
    genderR: 127
  },
  'Lugia': {
    id: 249,
    bs: {hp: 106,at: 90,df: 130,sa: 90,sd: 154,sp: 110},
    abilities: ['Sea Guardian','Weather Control','Air Blower'],
    innates: ['Levitate','Multiscale','Psychic Mind'],
    weightkg: 2160,
    types: ['Water','Psychic'],
    genderR: 255
  },
  'Ho Oh': {
    id: 250,
    bs: {hp: 106,at: 130,df: 90,sa: 110,sd: 154,sp: 90},
    abilities: ['Delta Stream','Magic Guard','Self Sufficient'],
    innates: ['Levitate','Majestic Bird','Prism Scales'],
    weightkg: 1990,
    types: ['Fire','Fairy'],
    genderR: 255
  },
  'Celebi': {
    id: 251,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Self Sufficient','Avenger','Grassy Surge'],
    innates: ['Psychic Mind','Natural Cure','Grass Pelt'],
    weightkg: 50,
    types: ['Grass','Fairy'],
    genderR: 255
  },
  'Treecko': {
    id: 252,
    bs: {hp: 40,at: 45,df: 35,sa: 65,sd: 55,sp: 70},
    abilities: ['Chloroplast','Unburden','Speed Force'],
    innates: ['Overgrow','Sticky Hold','Inner Focus'],
    nfe: true,
    weightkg: 50,
    types: ['Grass'],
    genderR: 127
  },
  'Grovyle': {
    id: 253,
    bs: {hp: 50,at: 65,df: 45,sa: 85,sd: 65,sp: 95},
    abilities: ['Chloroplast','Keen Edge','Speed Force'],
    innates: ['Overgrow','Skill Link','Inner Focus'],
    nfe: true,
    weightkg: 216,
    types: ['Grass'],
    genderR: 127
  },
  'Sceptile': {
    id: 254,
    bs: {hp: 70,at: 105,df: 65,sa: 85,sd: 85,sp: 120},
    abilities: ['Chloroplast','Protean','Speed Force'],
    innates: ['Overgrow','Skill Link','Keen Edge'],
    otherFormes: ['Sceptile Mega'],
    weightkg: 522,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Torchic': {
    id: 255,
    bs: {hp: 45,at: 60,df: 40,sa: 70,sd: 50,sp: 45},
    abilities: ['Iron Fist','Aerodynamics','Speed Boost'],
    innates: ['Blaze','Flame Body','Avenger'],
    nfe: true,
    weightkg: 25,
    types: ['Fire'],
    genderR: 127
  },
  'Combusken': {
    id: 256,
    bs: {hp: 60,at: 85,df: 60,sa: 85,sd: 60,sp: 55},
    abilities: ['Iron Fist','Aerodynamics','Speed Boost'],
    innates: ['Blaze','Flame Body','Striker'],
    nfe: true,
    weightkg: 195,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Blaziken': {
    id: 257,
    bs: {hp: 80,at: 120,df: 70,sa: 110,sd: 70,sp: 80},
    abilities: ['Iron Fist','Aerodynamics','Speed Boost'],
    innates: ['Blaze','Flame Body','Striker'],
    otherFormes: ['Blaziken Mega'],
    weightkg: 520,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Mudkip': {
    id: 258,
    bs: {hp: 50,at: 70,df: 50,sa: 50,sd: 50,sp: 40},
    abilities: ['Swift Swim','Field Explorer','Rivalry'],
    innates: ['Torrent','Dry Skin'],
    nfe: true,
    weightkg: 76,
    types: ['Water'],
    genderR: 127
  },
  'Marshtomp': {
    id: 259,
    bs: {hp: 70,at: 85,df: 70,sa: 60,sd: 70,sp: 50},
    abilities: ['Swift Swim','Field Explorer','Stamina'],
    innates: ['Torrent','Dry Skin','Battle Armor'],
    nfe: true,
    weightkg: 280,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Swampert': {
    id: 260,
    bs: {hp: 100,at: 110,df: 90,sa: 85,sd: 90,sp: 60},
    abilities: ['Swift Swim','Field Explorer','Stamina'],
    innates: ['Torrent','Dry Skin','Regenerator'],
    otherFormes: ['Swampert Mega'],
    weightkg: 819,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Poochyena': {
    id: 261,
    bs: {hp: 35,at: 65,df: 35,sa: 30,sd: 30,sp: 65},
    abilities: ['Moxie','Intimidate','Rattled'],
    innates: ['Predator','Strong Jaw','Nocturnal'],
    nfe: true,
    weightkg: 136,
    types: ['Dark'],
    genderR: 127
  },
  'Mightyena': {
    id: 262,
    bs: {hp: 70,at: 110,df: 70,sa: 60,sd: 80,sp: 105},
    abilities: ['Moxie','Intimidate','Opportunist'],
    innates: ['Predator','Strong Jaw','Stakeout'],
    weightkg: 370,
    types: ['Dark'],
    genderR: 127
  },
  'Zigzagoon': {
    id: 263,
    bs: {hp: 38,at: 30,df: 41,sa: 30,sd: 41,sp: 60},
    abilities: ['Pickup','Run Away','Limber'],
    innates: ['Gluttony','Quick Feet'],
    otherFormes: ['Zigzagoon Galarian'],
    nfe: true,
    weightkg: 175,
    types: ['Normal'],
    genderR: 127
  },
  'Linoone': {
    id: 264,
    bs: {hp: 78,at: 100,df: 61,sa: 50,sd: 61,sp: 110},
    abilities: ['Pickup','Run Away','Limber'],
    innates: ['Gluttony','Quick Feet','Field Explorer'],
    otherFormes: ['Linoone Galarian'],
    weightkg: 325,
    types: ['Normal'],
    genderR: 127
  },
  'Wurmple': {
    id: 265,
    bs: {hp: 45,at: 45,df: 35,sa: 20,sd: 30,sp: 20},
    abilities: ['Shield Dust','Suction Cups','Poison Point'],
    innates: ['Swarm','Run Away','Sap Sipper'],
    nfe: true,
    weightkg: 36,
    types: ['Bug'],
    genderR: 127
  },
  'Silcoon': {
    id: 266,
    bs: {hp: 50,at: 35,df: 55,sa: 25,sd: 25,sp: 15},
    abilities: ['Shed Skin','Shed Skin','Poison Point'],
    innates: ['Swarm','Battle Armor','Sap Sipper'],
    nfe: true,
    weightkg: 100,
    types: ['Bug'],
    genderR: 127
  },
  'Beautifly': {
    id: 267,
    bs: {hp: 60,at: 50,df: 60,sa: 85,sd: 60,sp: 85},
    abilities: ['Shield Dust','Compound Eyes','Aerodynamics'],
    innates: ['Majestic Moth','Pixilate','Levitate'],
    weightkg: 284,
    types: ['Bug','Fairy'],
    genderR: 127
  },
  'Cascoon': {
    id: 268,
    bs: {hp: 50,at: 35,df: 55,sa: 25,sd: 25,sp: 15},
    abilities: ['Shed Skin','Shed Skin','Poison Point'],
    innates: ['Swarm','Battle Armor','Sap Sipper'],
    otherFormes: ['Cascoon Primal'],
    nfe: true,
    weightkg: 115,
    types: ['Bug'],
    genderR: 127
  },
  'Dustox': {
    id: 269,
    bs: {hp: 80,at: 30,df: 90,sa: 70,sd: 90,sp: 65},
    abilities: ['Poison Touch','Compound Eyes','Aerodynamics'],
    innates: ['Majestic Moth','Nocturnal','Levitate'],
    weightkg: 316,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Lotad': {
    id: 270,
    bs: {hp: 40,at: 30,df: 30,sa: 40,sd: 50,sp: 30},
    abilities: ['Swift Swim','Chlorophyll','Own Tempo'],
    innates: ['Seaweed','Rain Dish','Hydration'],
    nfe: true,
    weightkg: 26,
    types: ['Water','Grass'],
    genderR: 127
  },
  'Lombre': {
    id: 271,
    bs: {hp: 60,at: 50,df: 50,sa: 60,sd: 70,sp: 50},
    abilities: ['Swift Swim','Chlorophyll','Own Tempo'],
    innates: ['Seaweed','Rain Dish','Hydration'],
    nfe: true,
    weightkg: 325,
    types: ['Water','Grass'],
    genderR: 127
  },
  'Ludicolo': {
    id: 272,
    bs: {hp: 80,at: 70,df: 70,sa: 100,sd: 100,sp: 80},
    abilities: ['Swift Swim','Chlorophyll','Own Tempo'],
    innates: ['Seaweed','Rain Dish','Hydration'],
    weightkg: 550,
    types: ['Water','Grass'],
    genderR: 127
  },
  'Seedot': {
    id: 273,
    bs: {hp: 40,at: 40,df: 50,sa: 30,sd: 30,sp: 30},
    abilities: ['Early Bird','None','Defiant'],
    innates: ['Overgrow','Chlorophyll'],
    nfe: true,
    weightkg: 40,
    types: ['Grass'],
    genderR: 127
  },
  'Nuzleaf': {
    id: 274,
    bs: {hp: 70,at: 70,df: 40,sa: 60,sd: 40,sp: 60},
    abilities: ['Early Bird','Moxie','Defiant'],
    innates: ['Overgrow','Chlorophyll','Nocturnal'],
    nfe: true,
    weightkg: 280,
    types: ['Grass','Dark'],
    genderR: 127
  },
  'Shiftry': {
    id: 275,
    bs: {hp: 90,at: 110,df: 60,sa: 100,sd: 60,sp: 80},
    abilities: ['Early Bird','Moxie','Defiant'],
    innates: ['Overgrow','Chlorophyll','Nocturnal'],
    weightkg: 596,
    types: ['Grass','Dark'],
    genderR: 127
  },
  'Taillow': {
    id: 276,
    bs: {hp: 40,at: 55,df: 30,sa: 30,sd: 30,sp: 85},
    abilities: ['Tangled Feet','None','Scrappy'],
    innates: ['Flock','Keen Eye','Guts'],
    nfe: true,
    weightkg: 23,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Swellow': {
    id: 277,
    bs: {hp: 60,at: 85,df: 60,sa: 85,sd: 50,sp: 125},
    abilities: ['Gale Wings','Air Blower','Scrappy'],
    innates: ['Flock','Keen Eye','Guts'],
    weightkg: 198,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Wingull': {
    id: 278,
    bs: {hp: 40,at: 30,df: 30,sa: 55,sd: 30,sp: 85},
    abilities: ['Hydration','None','None'],
    innates: ['Keen Eye','Rain Dish','Flock'],
    nfe: true,
    weightkg: 95,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Pelipper': {
    id: 279,
    bs: {hp: 60,at: 50,df: 100,sa: 95,sd: 70,sp: 65},
    abilities: ['Drizzle','Hydration','Air Blower'],
    innates: ['Keen Eye','Rain Dish','Flock'],
    weightkg: 280,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Ralts': {
    id: 280,
    bs: {hp: 28,at: 25,df: 25,sa: 45,sd: 35,sp: 40},
    abilities: ['Telepathy','Trace','Synchronize'],
    innates: [''],
    nfe: true,
    weightkg: 66,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Kirlia': {
    id: 281,
    bs: {hp: 38,at: 35,df: 35,sa: 65,sd: 55,sp: 50},
    abilities: ['Psychic Mind','Trace','Synchronize'],
    innates: ['Serene Grace'],
    nfe: true,
    weightkg: 202,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Gardevoir': {
    id: 282,
    bs: {hp: 68,at: 60,df: 65,sa: 125,sd: 115,sp: 100},
    abilities: ['Queenly Majesty','Soul Heart','Psychic Surge'],
    innates: ['Serene Grace','Magic Guard','Dreamcatcher'],
    otherFormes: ['Gardevoir Mega'],
    weightkg: 484,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Surskit': {
    id: 283,
    bs: {hp: 40,at: 30,df: 32,sa: 50,sd: 52,sp: 65},
    abilities: ['Swift Swim','None','Rain Dish'],
    innates: ['Compound Eyes'],
    nfe: true,
    weightkg: 17,
    types: ['Bug','Water'],
    genderR: 127
  },
  'Masquerain': {
    id: 284,
    bs: {hp: 70,at: 60,df: 72,sa: 100,sd: 82,sp: 80},
    abilities: ['Intimidate','Scare','Unnerve'],
    innates: ['Compound Eyes','Majestic Moth','Levitate'],
    weightkg: 36,
    types: ['Bug','Water'],
    genderR: 127
  },
  'Shroomish': {
    id: 285,
    bs: {hp: 60,at: 40,df: 60,sa: 40,sd: 60,sp: 35},
    abilities: ['Poison Heal','None','None'],
    innates: ['Effect Spore','Toxic Boost','Quick Feet'],
    nfe: true,
    weightkg: 45,
    types: ['Grass'],
    genderR: 127
  },
  'Breloom': {
    id: 286,
    bs: {hp: 60,at: 130,df: 80,sa: 60,sd: 60,sp: 70},
    abilities: ['Poison Heal','Precise Fist','Long Reach'],
    innates: ['Effect Spore','Toxic Boost','Technician'],
    weightkg: 392,
    types: ['Grass','Fighting'],
    genderR: 127
  },
  'Slakoth': {
    id: 287,
    bs: {hp: 60,at: 60,df: 60,sa: 35,sd: 35,sp: 30},
    abilities: ['Truant','None','None'],
    innates: ['Comatose','Unaware'],
    nfe: true,
    weightkg: 240,
    types: ['Normal'],
    genderR: 127
  },
  'Vigoroth': {
    id: 288,
    bs: {hp: 80,at: 80,df: 80,sa: 55,sd: 55,sp: 90},
    abilities: ['Sheer Force','Moxie','Scrappy'],
    innates: ['Anger Point','Hyper Aggressive','Vital Spirit'],
    nfe: true,
    weightkg: 465,
    types: ['Normal'],
    genderR: 127
  },
  'Slaking': {
    id: 289,
    bs: {hp: 130,at: 150,df: 100,sa: 75,sd: 95,sp: 100},
    abilities: ['Truant','None','Stall'],
    innates: ['Comatose','Unaware','Mold Breaker'],
    otherFormes: ['Slaking Mega'],
    weightkg: 1305,
    types: ['Normal'],
    genderR: 127
  },
  'Nincada': {
    id: 290,
    bs: {hp: 31,at: 45,df: 90,sa: 30,sd: 30,sp: 40},
    abilities: ['Rattled','None','Run Away'],
    innates: ['Compound Eyes','Shed Skin','Dry Skin'],
    nfe: true,
    weightkg: 55,
    types: ['Bug','Ground'],
    genderR: 127
  },
  'Ninjask': {
    id: 291,
    bs: {hp: 61,at: 100,df: 45,sa: 50,sd: 50,sp: 160},
    abilities: ['Aerodynamics','Speed Force','Aerilate'],
    innates: ['Compound Eyes','Infiltrator','Speed Boost'],
    weightkg: 120,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Shedinja': {
    id: 292,
    bs: {hp: 1,at: 90,df: 45,sa: 70,sd: 30,sp: 40},
    abilities: ['Wonder Guard','Wonder Guard','Wonder Guard'],
    innates: ['Wonder Skin','Levitate','Cursed Body'],
    otherFormes: ['Shedinja Mega'],
    weightkg: 12,
    types: ['Bug','Ghost'],
    genderR: 255
  },
  'Whismur': {
    id: 293,
    bs: {hp: 64,at: 51,df: 23,sa: 51,sd: 23,sp: 28},
    abilities: ['Soundproof','None','Rattled'],
    innates: ['Scrappy'],
    nfe: true,
    weightkg: 163,
    types: ['Normal'],
    genderR: 127
  },
  'Loudred': {
    id: 294,
    bs: {hp: 84,at: 71,df: 43,sa: 71,sd: 43,sp: 48},
    abilities: ['Soundproof','None','Sheer Force'],
    innates: ['Scrappy','Loud Bang','Amplifier'],
    nfe: true,
    weightkg: 405,
    types: ['Normal'],
    genderR: 127
  },
  'Exploud': {
    id: 295,
    bs: {hp: 104,at: 91,df: 63,sa: 111,sd: 83,sp: 68},
    abilities: ['Punk Rock','Competitive','Sheer Force'],
    innates: ['Scrappy','Loud Bang','Amplifier'],
    weightkg: 840,
    types: ['Normal'],
    genderR: 127
  },
  'Makuhita': {
    id: 296,
    bs: {hp: 72,at: 60,df: 30,sa: 20,sd: 30,sp: 25},
    abilities: ['Iron Fist','None','None'],
    innates: ['Thick Fat','Guts','Rivalry'],
    nfe: true,
    weightkg: 864,
    types: ['Fighting'],
    genderR: 63
  },
  'Hariyama': {
    id: 297,
    bs: {hp: 144,at: 130,df: 70,sa: 40,sd: 70,sp: 50},
    abilities: ['Iron Fist','Skill Link','Stamina'],
    innates: ['Thick Fat','Guts','Rivalry'],
    weightkg: 2538,
    types: ['Fighting'],
    genderR: 63
  },
  'Azurill': {
    id: 298,
    bs: {hp: 50,at: 20,df: 40,sa: 20,sd: 40,sp: 20},
    abilities: ['Huge Power','None','Sap Sipper'],
    innates: ['Thick Fat'],
    nfe: true,
    weightkg: 20,
    types: ['Normal','Fairy'],
    genderR: 191
  },
  'Nosepass': {
    id: 299,
    bs: {hp: 30,at: 45,df: 135,sa: 45,sd: 90,sp: 30},
    abilities: ['Sturdy','Magnet Pull','Rock Head'],
    innates: ['Solid Rock','Sand Force'],
    nfe: true,
    weightkg: 970,
    types: ['Rock'],
    genderR: 127
  },
  'Skitty': {
    id: 300,
    bs: {hp: 50,at: 45,df: 45,sa: 35,sd: 35,sp: 50},
    abilities: ['Normalize','Friend Guard','Wonder Skin'],
    innates: ['Cute Charm'],
    nfe: true,
    weightkg: 110,
    types: ['Normal'],
    genderR: 191
  },
  'Delcatty': {
    id: 301,
    bs: {hp: 70,at: 85,df: 65,sa: 55,sd: 55,sp: 110},
    abilities: ['Dazzling','Soundproof','Speed Force'],
    innates: ['Wonder Skin','Feline Prowess','Nocturnal'],
    weightkg: 326,
    types: ['Normal'],
    genderR: 191
  },
  'Sableye': {
    id: 302,
    bs: {hp: 70,at: 75,df: 80,sa: 65,sd: 70,sp: 50},
    abilities: ['Hypnotist','Soul Linker','Prankster'],
    innates: ['Analytic','Wonder Skin','Nocturnal'],
    otherFormes: ['Sableye Mega'],
    weightkg: 110,
    types: ['Dark','Ghost'],
    genderR: 127
  },
  'Mawile': {
    id: 303,
    bs: {hp: 70,at: 85,df: 95,sa: 55,sd: 55,sp: 50},
    abilities: ['Adaptability','Intimidate','Scare'],
    innates: ['Multi Headed','Strong Jaw','Grip Pincer'],
    otherFormes: ['Mawile Mega'],
    weightkg: 115,
    types: ['Steel','Fairy'],
    genderR: 127
  },
  'Aron': {
    id: 304,
    bs: {hp: 50,at: 70,df: 100,sa: 40,sd: 40,sp: 30},
    abilities: ['Sturdy','Rock Head','Iron Barbs'],
    innates: ['Lead Coat'],
    nfe: true,
    weightkg: 600,
    types: ['Steel','Rock'],
    genderR: 127
  },
  'Lairon': {
    id: 305,
    bs: {hp: 60,at: 90,df: 140,sa: 50,sd: 50,sp: 40},
    abilities: ['Sturdy','Rock Head','Iron Barbs'],
    innates: ['Lead Coat','Juggernaut','Impenetrable'],
    nfe: true,
    weightkg: 1200,
    types: ['Steel','Rock'],
    genderR: 127
  },
  'Aggron': {
    id: 306,
    bs: {hp: 70,at: 110,df: 180,sa: 60,sd: 60,sp: 50},
    abilities: ['Juggernaut','Heatproof','Iron Barbs'],
    innates: ['Lead Coat','Filter','Impenetrable'],
    otherFormes: ['Aggron Mega'],
    weightkg: 3600,
    types: ['Steel','Rock'],
    genderR: 127
  },
  'Meditite': {
    id: 307,
    bs: {hp: 30,at: 40,df: 55,sa: 40,sd: 55,sp: 60},
    abilities: ['Pure Power','Pure Power','Technician'],
    innates: ['Psychic Mind'],
    nfe: true,
    weightkg: 112,
    types: ['Fighting','Psychic'],
    genderR: 127
  },
  'Medicham': {
    id: 308,
    bs: {hp: 60,at: 60,df: 75,sa: 60,sd: 75,sp: 80},
    abilities: ['Pure Power','None','Technician'],
    innates: ['Psychic Mind','Striker','Limber'],
    otherFormes: ['Medicham Mega'],
    weightkg: 315,
    types: ['Fighting','Psychic'],
    genderR: 127
  },
  'Electrike': {
    id: 309,
    bs: {hp: 40,at: 45,df: 40,sa: 65,sd: 40,sp: 65},
    abilities: ['Static','Lightning Rod','None'],
    innates: ['Plus','Quick Feet'],
    nfe: true,
    weightkg: 152,
    types: ['Electric'],
    genderR: 127
  },
  'Manectric': {
    id: 310,
    bs: {hp: 70,at: 110,df: 60,sa: 125,sd: 60,sp: 105},
    abilities: ['Static','Illuminate','Electric Burst'],
    innates: ['Plus','Lightning Rod','Overcharge'],
    otherFormes: ['Manectric Mega'],
    weightkg: 402,
    types: ['Electric'],
    genderR: 127
  },
  'Plusle': {
    id: 311,
    bs: {hp: 60,at: 50,df: 50,sa: 105,sd: 75,sp: 105},
    abilities: ['Transistor','None','Lightning Rod'],
    innates: ['Plus','Pixilate','Speed Boost'],
    weightkg: 42,
    types: ['Electric','Fairy'],
    genderR: 127
  },
  'Minun': {
    id: 312,
    bs: {hp: 60,at: 105,df: 50,sa: 50,sd: 75,sp: 105},
    abilities: ['Transistor','None','Lightning Rod'],
    innates: ['Minus','Pixilate','Speed Boost'],
    weightkg: 42,
    types: ['Electric','Fairy'],
    genderR: 127
  },
  'Volbeat': {
    id: 313,
    bs: {hp: 65,at: 73,df: 85,sa: 47,sd: 85,sp: 115},
    abilities: ['Galvanize','Tinted Lens','Prankster'],
    innates: ['Swarm','Illuminate','Electrocytes'],
    weightkg: 177,
    types: ['Bug','Electric'],
    genderR: 0
  },
  'Illumise': {
    id: 314,
    bs: {hp: 65,at: 47,df: 75,sa: 93,sd: 85,sp: 105},
    abilities: ['Pixilate','Tinted Lens','Prankster'],
    innates: ['Swarm','Nocturnal','Cute Charm'],
    weightkg: 177,
    types: ['Bug','Fairy'],
    genderR: 254
  },
  'Roselia': {
    id: 315,
    bs: {hp: 50,at: 60,df: 45,sa: 100,sd: 80,sp: 65},
    abilities: ['Leaf Guard','Long Reach','Technician'],
    innates: ['Natural Cure','Chlorophyll','Poison Point'],
    nfe: true,
    weightkg: 20,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Gulpin': {
    id: 316,
    bs: {hp: 70,at: 43,df: 53,sa: 43,sd: 53,sp: 40},
    abilities: ['Liquid Ooze','Pickup','Gooey'],
    innates: ['Sticky Hold','Liquified','Gluttony'],
    nfe: true,
    weightkg: 103,
    types: ['Poison'],
    genderR: 127
  },
  'Swalot': {
    id: 317,
    bs: {hp: 100,at: 83,df: 93,sa: 83,sd: 93,sp: 55},
    abilities: ['Poison Absorb','Regenerator','Gluttony'],
    innates: ['Sticky Hold','Liquified','Unaware'],
    otherFormes: ['Swalot Mega'],
    weightkg: 800,
    types: ['Poison'],
    genderR: 127
  },
  'Carvanha': {
    id: 318,
    bs: {hp: 45,at: 90,df: 20,sa: 65,sd: 20,sp: 65},
    abilities: ['Weak Armor','None','Speed Boost'],
    innates: ['Strong Jaw','Swift Swim','Rough Skin'],
    nfe: true,
    weightkg: 208,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Sharpedo': {
    id: 319,
    bs: {hp: 70,at: 120,df: 45,sa: 115,sd: 45,sp: 95},
    abilities: ['Speed Force','Hyper Aggressive','Speed Boost'],
    innates: ['Strong Jaw','Swift Swim','Jaws Of Carnage'],
    otherFormes: ['Sharpedo Mega'],
    weightkg: 888,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Wailmer': {
    id: 320,
    bs: {hp: 130,at: 70,df: 35,sa: 70,sd: 35,sp: 60},
    abilities: ['Water Veil','Stamina','Drizzle'],
    innates: ['Liquid Voice','Thick Fat'],
    nfe: true,
    weightkg: 1300,
    types: ['Water'],
    genderR: 127
  },
  'Wailord': {
    id: 321,
    bs: {hp: 170,at: 90,df: 65,sa: 90,sd: 65,sp: 60},
    abilities: ['Water Veil','Stamina','Drizzle'],
    innates: ['Liquid Voice','Thick Fat','Pressure'],
    weightkg: 3980,
    types: ['Water'],
    genderR: 127
  },
  'Numel': {
    id: 322,
    bs: {hp: 60,at: 60,df: 40,sa: 65,sd: 45,sp: 35},
    abilities: ['Stamina','None','Simple'],
    innates: ['Own Tempo'],
    nfe: true,
    weightkg: 240,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Camerupt': {
    id: 323,
    bs: {hp: 90,at: 100,df: 80,sa: 105,sd: 85,sp: 40},
    abilities: ['Stamina','Anger Point','Sheer Force'],
    innates: ['Magma Armor','Solid Rock','Molten Down'],
    otherFormes: ['Camerupt Mega'],
    weightkg: 2200,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Torkoal': {
    id: 324,
    bs: {hp: 70,at: 85,df: 140,sa: 85,sd: 70,sp: 20},
    abilities: ['Stamina','Impenetrable','Drought'],
    innates: ['Shell Armor','White Smoke','Mountaineer'],
    weightkg: 804,
    types: ['Fire'],
    genderR: 127
  },
  'Spoink': {
    id: 325,
    bs: {hp: 60,at: 25,df: 35,sa: 70,sd: 80,sp: 60},
    abilities: ['Magic Bounce','None','Own Tempo'],
    innates: ['Gluttony'],
    nfe: true,
    weightkg: 306,
    types: ['Psychic'],
    genderR: 127
  },
  'Grumpig': {
    id: 326,
    bs: {hp: 100,at: 45,df: 55,sa: 100,sd: 110,sp: 80},
    abilities: ['Magic Bounce','None','Own Tempo'],
    innates: ['Gluttony','Thick Fat','Fur Coat'],
    weightkg: 715,
    types: ['Psychic'],
    genderR: 127
  },
  'Spinda': {
    id: 327,
    bs: {hp: 60,at: 90,df: 60,sa: 90,sd: 60,sp: 90},
    abilities: ['Contrary','Competitive','Dancer'],
    innates: ['Unaware','Simple','Field Explorer'],
    weightkg: 50,
    types: ['Normal'],
    genderR: 127
  },
  'Trapinch': {
    id: 328,
    bs: {hp: 45,at: 100,df: 45,sa: 45,sd: 45,sp: 10},
    abilities: ['Sheer Force','Arena Trap','None'],
    innates: ['Hyper Cutter','Strong Jaw'],
    nfe: true,
    weightkg: 150,
    types: ['Ground','Bug'],
    genderR: 127
  },
  'Vibrava': {
    id: 329,
    bs: {hp: 50,at: 70,df: 50,sa: 50,sd: 50,sp: 70},
    abilities: ['Tectonize','Sand Force','Sand Stream'],
    innates: ['Dragonfly','Sand Song'],
    nfe: true,
    weightkg: 153,
    types: ['Ground','Bug'],
    genderR: 127
  },
  'Flygon': {
    id: 330,
    bs: {hp: 80,at: 100,df: 80,sa: 100,sd: 80,sp: 100},
    abilities: ['Sand Rush','Sand Force','Sand Stream'],
    innates: ['Dragonfly','Sand Song','Earthbound'],
    weightkg: 820,
    types: ['Ground','Bug'],
    genderR: 127
  },
  'Cacnea': {
    id: 331,
    bs: {hp: 50,at: 85,df: 40,sa: 85,sd: 40,sp: 35},
    abilities: ['Sand Rush','Sand Veil','Prankster'],
    innates: ['Nocturnal','Water Absorb'],
    nfe: true,
    weightkg: 513,
    types: ['Grass'],
    genderR: 127
  },
  'Cacturne': {
    id: 332,
    bs: {hp: 70,at: 115,df: 60,sa: 115,sd: 60,sp: 85},
    abilities: ['Sand Rush','Bad Luck','Scare'],
    innates: ['Nocturnal','Rough Skin','Soul Eater'],
    weightkg: 774,
    types: ['Grass','Dark'],
    genderR: 127
  },
  'Swablu': {
    id: 333,
    bs: {hp: 45,at: 40,df: 60,sa: 40,sd: 75,sp: 50},
    abilities: ['Cotton Down','Serene Grace','Cute Charm'],
    innates: ['Natural Cure','Fluffy'],
    nfe: true,
    weightkg: 12,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Altaria': {
    id: 334,
    bs: {hp: 75,at: 90,df: 90,sa: 70,sd: 105,sp: 80},
    abilities: ['Cotton Down','Serene Grace','Cloud Nine'],
    innates: ['Natural Cure','Fluffy','Sweet Dreams'],
    otherFormes: ['Altaria Mega'],
    weightkg: 206,
    types: ['Dragon','Flying'],
    genderR: 127
  },
  'Zangoose': {
    id: 335,
    bs: {hp: 73,at: 115,df: 70,sa: 60,sd: 70,sp: 105},
    abilities: ['Anger Point','Speed Force','Hyper Aggressive'],
    innates: ['Toxic Boost','Fatal Precision','Tough Claws'],
    weightkg: 403,
    types: ['Normal'],
    genderR: 127
  },
  'Seviper': {
    id: 336,
    bs: {hp: 73,at: 100,df: 60,sa: 100,sd: 60,sp: 100},
    abilities: ['Merciless','Opportunist','Hyper Aggressive'],
    innates: ['Strong Jaw','Solenoglyphs','Coil Up'],
    weightkg: 525,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Lunatone': {
    id: 337,
    bs: {hp: 90,at: 55,df: 65,sa: 125,sd: 115,sp: 70},
    abilities: ['Sturdy','Sage Power','Dreamcatcher'],
    innates: ['Levitate','Nocturnal','Lunar Eclipse'],
    weightkg: 1680,
    types: ['Rock','Psychic'],
    genderR: 255
  },
  'Solrock': {
    id: 338,
    bs: {hp: 90,at: 125,df: 115,sa: 55,sd: 65,sp: 70},
    abilities: ['Victory Star','Drought','Sun Worship'],
    innates: ['Levitate','Sturdy','Solar Flare'],
    weightkg: 1540,
    types: ['Rock','Psychic'],
    genderR: 255
  },
  'Barboach': {
    id: 339,
    bs: {hp: 50,at: 48,df: 43,sa: 46,sd: 41,sp: 60},
    abilities: ['Oblivious','Hydration','Sheer Force'],
    innates: ['Electrocytes','Galvanize'],
    nfe: true,
    weightkg: 19,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Whiscash': {
    id: 340,
    bs: {hp: 110,at: 98,df: 73,sa: 76,sd: 71,sp: 60},
    abilities: ['Unaware','Water Absorb','Sheer Force'],
    innates: ['Electrocytes','Galvanize','Predator'],
    weightkg: 236,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Corphish': {
    id: 341,
    bs: {hp: 43,at: 80,df: 65,sa: 50,sd: 35,sp: 35},
    abilities: ['Swift Swim','None','Adaptability'],
    innates: ['Hyper Cutter','Shell Armor','Self Sufficient'],
    nfe: true,
    weightkg: 115,
    types: ['Water'],
    genderR: 127
  },
  'Crawdaunt': {
    id: 342,
    bs: {hp: 63,at: 120,df: 85,sa: 90,sd: 55,sp: 55},
    abilities: ['Swift Swim','Hyper Aggressive','Adaptability'],
    innates: ['Hyper Cutter','Shell Armor','Grip Pincer'],
    weightkg: 328,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Baltoy': {
    id: 343,
    bs: {hp: 40,at: 40,df: 55,sa: 40,sd: 70,sp: 55},
    abilities: ['Telepathy','Sand Veil','None'],
    innates: ['Levitate','Ancient Idol'],
    nfe: true,
    weightkg: 215,
    types: ['Ground','Psychic'],
    genderR: 255
  },
  'Claydol': {
    id: 344,
    bs: {hp: 70,at: 70,df: 105,sa: 90,sd: 120,sp: 75},
    abilities: ['Mystic Power','Soul Linker','Twisted Dimension'],
    innates: ['Levitate','Ancient Idol','Sand Force'],
    weightkg: 1080,
    types: ['Ground','Psychic'],
    genderR: 255
  },
  'Lileep': {
    id: 345,
    bs: {hp: 66,at: 41,df: 77,sa: 61,sd: 87,sp: 23},
    abilities: ['Battle Armor','Regenerator','Storm Drain'],
    innates: ['Fossilized','Amphibious','Seaweed'],
    nfe: true,
    weightkg: 238,
    types: ['Rock','Grass'],
    genderR: 30
  },
  'Cradily': {
    id: 346,
    bs: {hp: 96,at: 81,df: 97,sa: 91,sd: 107,sp: 43},
    abilities: ['Absorbant','Regenerator','Storm Drain'],
    innates: ['Battle Armor','Amphibious','Seaweed'],
    weightkg: 604,
    types: ['Rock','Grass'],
    genderR: 30
  },
  'Anorith': {
    id: 347,
    bs: {hp: 45,at: 95,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Battle Armor','Keen Edge','None'],
    innates: ['Fossilized','Amphibious'],
    nfe: true,
    weightkg: 125,
    types: ['Rock','Bug'],
    genderR: 30
  },
  'Armaldo': {
    id: 348,
    bs: {hp: 75,at: 125,df: 120,sa: 70,sd: 80,sp: 45},
    abilities: ['Battle Armor','Keen Edge','Impenetrable'],
    innates: ['Fossilized','Amphibious','Hyper Cutter'],
    weightkg: 682,
    types: ['Rock','Bug'],
    genderR: 30
  },
  'Feebas': {
    id: 349,
    bs: {hp: 20,at: 15,df: 20,sa: 10,sd: 55,sp: 80},
    abilities: ['Swift Swim','Oblivious','Scrappy'],
    innates: ['Marvel Scale'],
    nfe: true,
    weightkg: 74,
    types: ['Water'],
    genderR: 127
  },
  'Milotic': {
    id: 350,
    bs: {hp: 95,at: 60,df: 79,sa: 100,sd: 125,sp: 81},
    abilities: ['Self Sufficient','Competitive','Marvel Scale'],
    innates: ['Prism Scales','Adaptability','Sea Guardian'],
    weightkg: 1620,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Castform': {
    id: 351,
    bs: {hp: 70,at: 70,df: 70,sa: 100,sd: 70,sp: 100},
    abilities: ['Forecast','Forecast','Forecast'],
    innates: ['Levitate','Weather Control','Limber'],
    otherFormes: ['Castform Sunny','Castform Rainy','Castform Snowy'],
    weightkg: 8,
    types: ['Normal'],
    genderR: 127
  },
  'Kecleon': {
    id: 352,
    bs: {hp: 60,at: 90,df: 70,sa: 60,sd: 120,sp: 40},
    abilities: ['Defeatist','Lethargy','Klutz'],
    innates: ['Color Change','Protean','Cheap Tactics'],
    weightkg: 220,
    types: ['Normal'],
    genderR: 127
  },
  'Shuppet': {
    id: 353,
    bs: {hp: 44,at: 75,df: 35,sa: 63,sd: 33,sp: 45},
    abilities: ['Cursed Body','Scare','Insomnia'],
    innates: ['Vengeance','Haunted Spirit','Levitate'],
    nfe: true,
    weightkg: 23,
    types: ['Ghost','Normal'],
    genderR: 127
  },
  'Banette': {
    id: 354,
    bs: {hp: 84,at: 125,df: 85,sa: 65,sd: 83,sp: 93},
    abilities: ['Cursed Body','Vengeance','Insomnia'],
    innates: ['Scare','Haunted Spirit','Soul Eater'],
    otherFormes: ['Banette Mega'],
    weightkg: 125,
    types: ['Ghost','Normal'],
    genderR: 127
  },
  'Duskull': {
    id: 355,
    bs: {hp: 20,at: 40,df: 90,sa: 30,sd: 90,sp: 25},
    abilities: ['Cursed Body','None','None'],
    innates: ['Levitate','Nocturnal'],
    nfe: true,
    weightkg: 150,
    types: ['Ghost'],
    genderR: 127
  },
  'Dusclops': {
    id: 356,
    bs: {hp: 40,at: 70,df: 130,sa: 60,sd: 130,sp: 25},
    abilities: ['Bad Luck','Impenetrable','Soul Linker'],
    innates: ['Iron Fist','Nocturnal','Soul Eater'],
    nfe: true,
    weightkg: 306,
    types: ['Ghost'],
    genderR: 127
  },
  'Tropius': {
    id: 357,
    bs: {hp: 99,at: 88,df: 93,sa: 72,sd: 97,sp: 51},
    abilities: ['Aerilate','Air Blower','Grass Pelt'],
    innates: ['Levitate','Giant Wings','Big Leaves'],
    weightkg: 1000,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Chimecho': {
    id: 358,
    bs: {hp: 85,at: 50,df: 90,sa: 95,sd: 100,sp: 65},
    abilities: ['Magic Guard','Friend Guard','Mystic Power'],
    innates: ['Levitate','Dreamcatcher','Metallic'],
    weightkg: 10,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Absol': {
    id: 359,
    bs: {hp: 65,at: 130,df: 65,sa: 75,sd: 65,sp: 85},
    abilities: ['Avenger','Pixilate','Scare'],
    innates: ['Super Luck','Mountaineer','Keen Edge'],
    otherFormes: ['Absol Mega'],
    weightkg: 470,
    types: ['Dark','Fairy'],
    genderR: 127
  },
  'Wynaut': {
    id: 360,
    bs: {hp: 95,at: 23,df: 48,sa: 23,sd: 48,sp: 23},
    abilities: ['Shadow Tag','None','Screen Cleaner'],
    innates: ['Sticky Hold'],
    nfe: true,
    weightkg: 140,
    types: ['Psychic'],
    genderR: 127
  },
  'Snorunt': {
    id: 361,
    bs: {hp: 50,at: 50,df: 50,sa: 50,sd: 50,sp: 50},
    abilities: ['Refrigerate','None','Moody'],
    innates: ['Ice Body'],
    nfe: true,
    weightkg: 168,
    types: ['Ice'],
    genderR: 127
  },
  'Glalie': {
    id: 362,
    bs: {hp: 80,at: 100,df: 70,sa: 80,sd: 70,sp: 100},
    abilities: ['Refrigerate','Rock Head','Whiteout'],
    innates: ['Ice Body','Moody','Looter'],
    otherFormes: ['Glalie Mega'],
    weightkg: 2565,
    types: ['Ice'],
    genderR: 127
  },
  'Spheal': {
    id: 363,
    bs: {hp: 70,at: 40,df: 50,sa: 55,sd: 50,sp: 25},
    abilities: ['Sheer Force','Refrigerate','Oblivious'],
    innates: ['Thick Fat','Ice Body','Lets Roll'],
    nfe: true,
    weightkg: 395,
    types: ['Ice','Water'],
    genderR: 127
  },
  'Sealeo': {
    id: 364,
    bs: {hp: 90,at: 60,df: 70,sa: 75,sd: 70,sp: 45},
    abilities: ['Sheer Force','Refrigerate','Oblivious'],
    innates: ['Thick Fat','Ice Body','Lets Roll'],
    nfe: true,
    weightkg: 876,
    types: ['Ice','Water'],
    genderR: 127
  },
  'Walrein': {
    id: 365,
    bs: {hp: 110,at: 80,df: 90,sa: 95,sd: 90,sp: 65},
    abilities: ['Sheer Force','Refrigerate','Snow Warning'],
    innates: ['Thick Fat','Ice Body','Growing Tooth'],
    weightkg: 1506,
    types: ['Ice','Water'],
    genderR: 127
  },
  'Clamperl': {
    id: 366,
    bs: {hp: 35,at: 64,df: 85,sa: 74,sd: 55,sp: 32},
    abilities: ['Rattled','None','Run Away'],
    innates: ['Shell Armor'],
    nfe: true,
    weightkg: 525,
    types: ['Water'],
    genderR: 127
  },
  'Huntail': {
    id: 367,
    bs: {hp: 55,at: 114,df: 105,sa: 94,sd: 75,sp: 72},
    abilities: ['Water Veil','Hydration','Illuminate'],
    innates: ['Swift Swim','Strong Jaw','Predator'],
    weightkg: 270,
    types: ['Water'],
    genderR: 127
  },
  'Gorebyss': {
    id: 368,
    bs: {hp: 55,at: 84,df: 105,sa: 114,sd: 75,sp: 72},
    abilities: ['Water Veil','Hydration','Dazzling'],
    innates: ['Swift Swim','Adaptability','Predator'],
    weightkg: 226,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Relicanth': {
    id: 369,
    bs: {hp: 100,at: 110,df: 130,sa: 45,sd: 65,sp: 55},
    abilities: ['Sturdy','Fort Knox','Rough Skin'],
    innates: ['Fossilized','Impenetrable','Primal Armor'],
    weightkg: 234,
    types: ['Water','Rock'],
    genderR: 30
  },
  'Luvdisc': {
    id: 370,
    bs: {hp: 43,at: 30,df: 55,sa: 80,sd: 65,sp: 97},
    abilities: ['Unaware','Swift Swim','Shield Dust'],
    innates: ['Soul Heart','Multiscale','Serene Grace'],
    weightkg: 87,
    types: ['Water','Fairy'],
    genderR: 191
  },
  'Bagon': {
    id: 371,
    bs: {hp: 45,at: 75,df: 60,sa: 40,sd: 30,sp: 50},
    abilities: ['Intimidate','Immolate','Moxie'],
    innates: ['Rock Head','Anger Point','Reckless'],
    nfe: true,
    weightkg: 421,
    types: ['Dragon'],
    genderR: 127
  },
  'Shelgon': {
    id: 372,
    bs: {hp: 65,at: 95,df: 100,sa: 60,sd: 50,sp: 50},
    abilities: ['Intimidate','Immolate','Moxie'],
    innates: ['Shell Armor','Overcoat','Impenetrable'],
    nfe: true,
    weightkg: 1105,
    types: ['Dragon'],
    genderR: 127
  },
  'Salamence': {
    id: 373,
    bs: {hp: 95,at: 135,df: 80,sa: 110,sd: 80,sp: 100},
    abilities: ['Intimidate','Predator','Moxie'],
    innates: ['Overwhelm','Anger Point','Rampage'],
    otherFormes: ['Salamence Mega'],
    weightkg: 1026,
    types: ['Dragon','Flying'],
    genderR: 127
  },
  'Beldum': {
    id: 374,
    bs: {hp: 40,at: 55,df: 80,sa: 35,sd: 60,sp: 30},
    abilities: ['Steelworker','Magnet Pull','Psychic Mind'],
    innates: ['Levitate','Full Metal Body'],
    nfe: true,
    weightkg: 952,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Metang': {
    id: 375,
    bs: {hp: 60,at: 75,df: 100,sa: 55,sd: 80,sp: 50},
    abilities: ['Fatal Precision','Predator','Lead Coat'],
    innates: ['Levitate','Download','Full Metal Body'],
    nfe: true,
    weightkg: 2025,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Metagross': {
    id: 376,
    bs: {hp: 80,at: 135,df: 130,sa: 95,sd: 90,sp: 70},
    abilities: ['Fatal Precision','Predator','Lead Coat'],
    innates: ['Prism Armor','Download','Full Metal Body'],
    otherFormes: ['Metagross Mega'],
    weightkg: 5500,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Regirock': {
    id: 377,
    bs: {hp: 80,at: 100,df: 200,sa: 50,sd: 100,sp: 50},
    abilities: ['Iron Fist','Loose Rocks','Sand Stream'],
    innates: ['Power Core','Impenetrable','Self Sufficient'],
    weightkg: 2300,
    types: ['Rock'],
    genderR: 255
  },
  'Regice': {
    id: 378,
    bs: {hp: 80,at: 50,df: 100,sa: 100,sd: 200,sp: 50},
    abilities: ['Sighting System','Heatproof','Snow Warning'],
    innates: ['Power Core','Impenetrable','Self Sufficient'],
    weightkg: 1750,
    types: ['Ice'],
    genderR: 255
  },
  'Registeel': {
    id: 379,
    bs: {hp: 80,at: 75,df: 150,sa: 75,sd: 150,sp: 50},
    abilities: ['Sighting System','Heatproof','Steely Spirit'],
    innates: ['Power Core','Impenetrable','Self Sufficient'],
    weightkg: 2050,
    types: ['Steel'],
    genderR: 255
  },
  'Latias': {
    id: 380,
    bs: {hp: 80,at: 80,df: 90,sa: 110,sd: 130,sp: 110},
    abilities: ['Mirror Armor','Natural Cure','Illusion'],
    innates: ['Levitate','Prism Armor','Mystic Power'],
    otherFormes: ['Latias Mega'],
    weightkg: 400,
    types: ['Dragon','Psychic'],
    genderR: 254
  },
  'Latios': {
    id: 381,
    bs: {hp: 80,at: 90,df: 80,sa: 130,sd: 110,sp: 110},
    abilities: ['Avenger','Neuroforce','Speed Boost'],
    innates: ['Levitate','Violent Rush','Mystic Power'],
    otherFormes: ['Latios Mega'],
    weightkg: 600,
    types: ['Dragon','Psychic'],
    genderR: 0
  },
  'Kyogre': {
    id: 382,
    bs: {hp: 100,at: 100,df: 90,sa: 150,sd: 140,sp: 90},
    abilities: ['Swift Swim','Aurora Borealis','Predator'],
    innates: ['Drizzle','Self Sufficient','Sea Guardian'],
    otherFormes: ['Kyogre Primal'],
    nfe: true,
    weightkg: 3520,
    types: ['Water'],
    genderR: 255
  },
  'Groudon': {
    id: 383,
    bs: {hp: 100,at: 150,df: 140,sa: 100,sd: 90,sp: 90},
    abilities: ['Tough Claws','Molten Down','Solar Power'],
    innates: ['Drought','Self Sufficient','Sun Worship'],
    otherFormes: ['Groudon Primal'],
    nfe: true,
    weightkg: 9500,
    types: ['Ground','Fire'],
    genderR: 255
  },
  'Rayquaza': {
    id: 384,
    bs: {hp: 105,at: 150,df: 90,sa: 150,sd: 90,sp: 95},
    abilities: ['Dragons Maw','Air Blower','Violent Rush'],
    innates: ['Air Lock','Weather Control','Rampage'],
    otherFormes: ['Rayquaza Mega'],
    weightkg: 2065,
    types: ['Dragon','Flying'],
    genderR: 255
  },
  'Jirachi': {
    id: 385,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Comatose','Regenerator','Serene Grace'],
    innates: ['Steely Spirit','Victory Star','Levitate'],
    weightkg: 11,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Deoxys': {
    id: 386,
    bs: {hp: 50,at: 150,df: 50,sa: 150,sd: 50,sp: 150},
    abilities: ['Pressure','Levitate','Speed Boost'],
    innates: ['Inner Focus','Fatal Precision','Psychic Mind'],
    otherFormes: ['Deoxys Attack','Deoxys Defense','Deoxys Speed'],
    weightkg: 608,
    types: ['Psychic'],
    genderR: 255
  },
  'Turtwig': {
    id: 387,
    bs: {hp: 55,at: 68,df: 64,sa: 45,sd: 55,sp: 31},
    abilities: ['Rough Skin','Stamina','Sheer Force'],
    innates: ['Overgrow','Shell Armor','Chloroplast'],
    nfe: true,
    weightkg: 102,
    types: ['Grass'],
    genderR: 127
  },
  'Grotle': {
    id: 388,
    bs: {hp: 75,at: 89,df: 85,sa: 55,sd: 65,sp: 36},
    abilities: ['Rough Skin','Stamina','Sheer Force'],
    innates: ['Overgrow','Shell Armor','Chloroplast'],
    nfe: true,
    weightkg: 970,
    types: ['Grass'],
    genderR: 127
  },
  'Torterra': {
    id: 389,
    bs: {hp: 95,at: 119,df: 134,sa: 55,sd: 95,sp: 36},
    abilities: ['Rough Skin','Stamina','Loose Rocks'],
    innates: ['Overgrow','Impenetrable','Big Leaves'],
    weightkg: 3100,
    types: ['Grass','Ground'],
    genderR: 127
  },
  'Chimchar': {
    id: 390,
    bs: {hp: 44,at: 58,df: 44,sa: 58,sd: 44,sp: 61},
    abilities: ['Iron Fist','Power Fists','Gorilla Tactics'],
    innates: ['Blaze','Prankster','Defiant'],
    nfe: true,
    weightkg: 62,
    types: ['Fire'],
    genderR: 127
  },
  'Monferno': {
    id: 391,
    bs: {hp: 64,at: 78,df: 52,sa: 78,sd: 52,sp: 81},
    abilities: ['Iron Fist','Power Fists','Gorilla Tactics'],
    innates: ['Blaze','Prankster','Defiant'],
    nfe: true,
    weightkg: 220,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Infernape': {
    id: 392,
    bs: {hp: 76,at: 104,df: 71,sa: 104,sd: 71,sp: 108},
    abilities: ['Iron Fist','Power Fists','Gorilla Tactics'],
    innates: ['Blaze','Discipline','Defiant'],
    weightkg: 550,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Piplup': {
    id: 393,
    bs: {hp: 53,at: 51,df: 53,sa: 61,sd: 56,sp: 40},
    abilities: ['Competitive','Defiant','Big Pecks'],
    innates: ['Torrent','Thick Fat','Swift Swim'],
    nfe: true,
    weightkg: 52,
    types: ['Water'],
    genderR: 127
  },
  'Prinplup': {
    id: 394,
    bs: {hp: 64,at: 66,df: 68,sa: 81,sd: 76,sp: 50},
    abilities: ['Competitive','Defiant','Big Pecks'],
    innates: ['Torrent','Antarctic Bird','Swift Swim'],
    nfe: true,
    weightkg: 230,
    types: ['Water'],
    genderR: 127
  },
  'Empoleon': {
    id: 395,
    bs: {hp: 84,at: 86,df: 88,sa: 111,sd: 101,sp: 60},
    abilities: ['Impenetrable','Swift Swim','Slush Rush'],
    innates: ['Torrent','Antarctic Bird','Competitive'],
    weightkg: 845,
    types: ['Water','Steel'],
    genderR: 127
  },
  'Starly': {
    id: 396,
    bs: {hp: 40,at: 55,df: 30,sa: 30,sd: 30,sp: 60},
    abilities: ['Intimidate','Reckless','None'],
    innates: ['Flock','Keen Eye'],
    nfe: true,
    weightkg: 20,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Staravia': {
    id: 397,
    bs: {hp: 55,at: 75,df: 50,sa: 40,sd: 40,sp: 80},
    abilities: ['Intimidate','Reckless','Violent Rush'],
    innates: ['Flock','Keen Eye','Guts'],
    nfe: true,
    weightkg: 155,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Staraptor': {
    id: 398,
    bs: {hp: 85,at: 120,df: 70,sa: 50,sd: 60,sp: 100},
    abilities: ['Intimidate','Guts','Violent Rush'],
    innates: ['Predator','Reckless','Giant Wings'],
    weightkg: 249,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Bidoof': {
    id: 399,
    bs: {hp: 59,at: 45,df: 40,sa: 35,sd: 40,sp: 31},
    abilities: ['Simple','Looter','Moody'],
    innates: ['Unaware','Growing Tooth','Field Explorer'],
    nfe: true,
    weightkg: 200,
    types: ['Normal'],
    genderR: 127
  },
  'Bibarel': {
    id: 400,
    bs: {hp: 89,at: 85,df: 80,sa: 55,sd: 60,sp: 71},
    abilities: ['Simple','Looter','Moody'],
    innates: ['Unaware','Growing Tooth','Field Explorer'],
    weightkg: 315,
    types: ['Normal','Water'],
    genderR: 127
  },
  'Kricketot': {
    id: 401,
    bs: {hp: 37,at: 25,df: 41,sa: 25,sd: 41,sp: 25},
    abilities: ['Shed Skin','Run Away','None'],
    innates: ['Swarm'],
    nfe: true,
    weightkg: 22,
    types: ['Bug','Normal'],
    genderR: 127
  },
  'Kricketune': {
    id: 402,
    bs: {hp: 77,at: 85,df: 51,sa: 65,sd: 51,sp: 85},
    abilities: ['Soundproof','Perfectionist','Drizzle'],
    innates: ['Mountaineer','Technician','Pollinate'],
    weightkg: 255,
    types: ['Bug','Normal'],
    genderR: 127
  },
  'Shinx': {
    id: 403,
    bs: {hp: 45,at: 65,df: 34,sa: 40,sd: 34,sp: 45},
    abilities: ['Intimidate','Electric Burst','None'],
    innates: ['Short Circuit','Illuminate','Guts'],
    nfe: true,
    weightkg: 95,
    types: ['Electric'],
    genderR: 127
  },
  'Luxio': {
    id: 404,
    bs: {hp: 60,at: 85,df: 49,sa: 60,sd: 49,sp: 60},
    abilities: ['Intimidate','Electric Burst','Predator'],
    innates: ['Short Circuit','Illuminate','Guts'],
    nfe: true,
    weightkg: 305,
    types: ['Electric'],
    genderR: 127
  },
  'Luxray': {
    id: 405,
    bs: {hp: 90,at: 120,df: 79,sa: 75,sd: 79,sp: 90},
    abilities: ['Intimidate','Electric Burst','Guts'],
    innates: ['Short Circuit','Bad Luck','Predator'],
    otherFormes: ['Luxray Mega'],
    weightkg: 420,
    types: ['Electric','Dark'],
    genderR: 127
  },
  'Budew': {
    id: 406,
    bs: {hp: 40,at: 30,df: 35,sa: 50,sd: 70,sp: 55},
    abilities: ['Poison Point','None','Leaf Guard'],
    innates: ['Natural Cure','Chlorophyll'],
    nfe: true,
    weightkg: 12,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Roserade': {
    id: 407,
    bs: {hp: 60,at: 70,df: 65,sa: 125,sd: 105,sp: 90},
    abilities: ['Technician','Merciless','Predator'],
    innates: ['Natural Cure','Chlorophyll','Poison Point'],
    weightkg: 145,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Cranidos': {
    id: 408,
    bs: {hp: 67,at: 125,df: 40,sa: 30,sd: 30,sp: 58},
    abilities: ['Mold Breaker','Rampage','Predator'],
    innates: ['Rock Head','Reckless','Fossilized'],
    nfe: true,
    weightkg: 315,
    types: ['Rock'],
    genderR: 30
  },
  'Rampardos': {
    id: 409,
    bs: {hp: 97,at: 165,df: 70,sa: 55,sd: 50,sp: 78},
    abilities: ['Sturdy','Hyper Aggressive','Predator'],
    innates: ['Fossilized','Reckless','Rock Head'],
    weightkg: 1025,
    types: ['Rock'],
    genderR: 30
  },
  'Shieldon': {
    id: 410,
    bs: {hp: 30,at: 42,df: 118,sa: 42,sd: 88,sp: 30},
    abilities: ['Sturdy','Stamina','Rock Head'],
    innates: ['Fossilized','Impenetrable','Primal Armor'],
    nfe: true,
    weightkg: 570,
    types: ['Rock','Steel'],
    genderR: 30
  },
  'Bastiodon': {
    id: 411,
    bs: {hp: 80,at: 52,df: 168,sa: 47,sd: 138,sp: 30},
    abilities: ['Battle Armor','Stamina','Iron Barbs'],
    innates: ['Dauntless Shield','Impenetrable','Primal Armor'],
    weightkg: 1495,
    types: ['Rock','Steel'],
    genderR: 30
  },
  'Burmy': {
    id: 412,
    bs: {hp: 40,at: 29,df: 45,sa: 29,sd: 45,sp: 36},
    abilities: ['Shed Skin','None','Overcoat'],
    innates: ['Swarm'],
    otherFormes: ['Burmy Sandy Cloak','Burmy Trash Cloak'],
    nfe: true,
    weightkg: 34,
    types: ['Bug'],
    genderR: 127
  },
  'Wormadam': {
    id: 413,
    bs: {hp: 80,at: 59,df: 85,sa: 99,sd: 105,sp: 36},
    abilities: ['Anticipation','Analytic','Overcoat'],
    innates: ['Swarm','Battle Armor','Pollinate'],
    otherFormes: ['Wormadam Sandy Cloak','Wormadam Trash Cloak'],
    weightkg: 65,
    types: ['Bug','Grass'],
    genderR: 254
  },
  'Mothim': {
    id: 414,
    bs: {hp: 70,at: 54,df: 70,sa: 84,sd: 70,sp: 86},
    abilities: ['Overcoat','Looter','Tinted Lens'],
    innates: ['Swarm','Majestic Moth','Compound Eyes'],
    weightkg: 233,
    types: ['Bug','Flying'],
    genderR: 0
  },
  'Combee': {
    id: 415,
    bs: {hp: 30,at: 30,df: 42,sa: 30,sd: 42,sp: 70},
    abilities: ['Regenerator','None','None'],
    innates: ['Swarm','Multi Headed'],
    nfe: true,
    weightkg: 55,
    types: ['Bug','Flying'],
    genderR: 63
  },
  'Vespiquen': {
    id: 416,
    bs: {hp: 70,at: 80,df: 112,sa: 80,sd: 112,sp: 40},
    abilities: ['Regenerator','Stamina','Parental Bond'],
    innates: ['Queens Mourning','Queenly Majesty','Self Sufficient'],
    weightkg: 385,
    types: ['Bug','Flying'],
    genderR: 254
  },
  'Pachirisu': {
    id: 417,
    bs: {hp: 60,at: 45,df: 70,sa: 75,sd: 110,sp: 95},
    abilities: ['Gluttony','Quick Feet','Electric Surge'],
    innates: ['Fur Coat','Regenerator','Volt Absorb'],
    weightkg: 39,
    types: ['Electric'],
    genderR: 127
  },
  'Buizel': {
    id: 418,
    bs: {hp: 55,at: 65,df: 35,sa: 60,sd: 30,sp: 85},
    abilities: ['Swift Swim','Technician','No Guard'],
    innates: ['Pickup','Field Explorer'],
    nfe: true,
    weightkg: 295,
    types: ['Water'],
    genderR: 127
  },
  'Floatzel': {
    id: 419,
    bs: {hp: 85,at: 115,df: 55,sa: 100,sd: 50,sp: 115},
    abilities: ['Technician','Hydrate','Looter'],
    innates: ['Swift Swim','Field Explorer','Inflatable'],
    weightkg: 335,
    types: ['Water'],
    genderR: 127
  },
  'Cherubi': {
    id: 420,
    bs: {hp: 45,at: 62,df: 45,sa: 62,sd: 53,sp: 35},
    abilities: ['Leaf Guard','None','None'],
    innates: ['Chlorophyll'],
    nfe: true,
    weightkg: 33,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Cherrim': {
    id: 421,
    bs: {hp: 70,at: 100,df: 70,sa: 87,sd: 78,sp: 85},
    abilities: ['Leaf Guard','Flower Gift','None'],
    innates: ['Chlorophyll','Solar Power','Solar Flare'],
    otherFormes: ['Cherrim Sunshine'],
    weightkg: 93,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Shellos': {
    id: 422,
    bs: {hp: 76,at: 48,df: 48,sa: 57,sd: 62,sp: 34},
    abilities: ['Shell Armor','Storm Drain','Regenerator'],
    innates: ['Sticky Hold','Self Sufficient','Limber'],
    otherFormes: ['Shellos East Sea'],
    nfe: true,
    weightkg: 63,
    types: ['Water'],
    genderR: 127
  },
  'Gastrodon': {
    id: 423,
    bs: {hp: 111,at: 83,df: 68,sa: 92,sd: 82,sp: 39},
    abilities: ['Shell Armor','Storm Drain','Regenerator'],
    innates: ['Sticky Hold','Self Sufficient','Tectonize'],
    otherFormes: ['Gastrodon East Sea'],
    weightkg: 299,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Ambipom': {
    id: 424,
    bs: {hp: 75,at: 100,df: 66,sa: 60,sd: 66,sp: 125},
    abilities: ['Run Away','Pickup','Limber'],
    innates: ['Skill Link','Technician','Quick Feet'],
    weightkg: 203,
    types: ['Normal'],
    genderR: 127
  },
  'Drifloon': {
    id: 425,
    bs: {hp: 90,at: 50,df: 34,sa: 60,sd: 44,sp: 70},
    abilities: ['Aftermath','Nocturnal','Unburden'],
    innates: ['Inflatable','Flare Boost','Soul Eater'],
    nfe: true,
    weightkg: 12,
    types: ['Ghost','Flying'],
    genderR: 127
  },
  'Drifblim': {
    id: 426,
    bs: {hp: 150,at: 80,df: 54,sa: 90,sd: 74,sp: 80},
    abilities: ['Aftermath','Nocturnal','Unburden'],
    innates: ['Inflatable','Flare Boost','Soul Eater'],
    weightkg: 150,
    types: ['Ghost','Flying'],
    genderR: 127
  },
  'Buneary': {
    id: 427,
    bs: {hp: 55,at: 66,df: 44,sa: 44,sd: 56,sp: 85},
    abilities: ['Normalize','Run Away','Quick Feet'],
    innates: ['Limber','Fur Coat'],
    nfe: true,
    weightkg: 55,
    types: ['Normal'],
    genderR: 127
  },
  'Lopunny': {
    id: 428,
    bs: {hp: 65,at: 76,df: 64,sa: 54,sd: 96,sp: 115},
    abilities: ['Normalize','Fight Spirit','Technician'],
    innates: ['Limber','Fur Coat','Striker'],
    otherFormes: ['Lopunny Mega'],
    weightkg: 333,
    types: ['Normal','Fighting'],
    genderR: 127
  },
  'Mismagius': {
    id: 429,
    bs: {hp: 60,at: 60,df: 60,sa: 110,sd: 110,sp: 110},
    abilities: ['Bad Luck','Prankster','Shadow Tag'],
    innates: ['Levitate','Pixilate','Bad Dreams'],
    weightkg: 44,
    types: ['Ghost','Fairy'],
    genderR: 127
  },
  'Honchkrow': {
    id: 430,
    bs: {hp: 100,at: 105,df: 52,sa: 105,sd: 52,sp: 71},
    abilities: ['Super Luck','Scare','Moxie'],
    innates: ['Big Pecks','Overcoat','Bad Luck'],
    weightkg: 273,
    types: ['Dark','Flying'],
    genderR: 127
  },
  'Glameow': {
    id: 431,
    bs: {hp: 49,at: 55,df: 42,sa: 42,sd: 37,sp: 85},
    abilities: ['Run Away','None','Rattled'],
    innates: ['Hypnotist','Limber','Quick Feet'],
    nfe: true,
    weightkg: 39,
    types: ['Normal'],
    genderR: 191
  },
  'Purugly': {
    id: 432,
    bs: {hp: 71,at: 102,df: 64,sa: 64,sd: 69,sp: 112},
    abilities: ['Intimidate','Defiant','Moxie'],
    innates: ['Hyper Aggressive','Fur Coat','Thick Fat'],
    weightkg: 438,
    types: ['Normal'],
    genderR: 191
  },
  'Chingling': {
    id: 433,
    bs: {hp: 45,at: 30,df: 50,sa: 65,sd: 50,sp: 45},
    abilities: ['Magic Guard','None','None'],
    innates: ['Levitate'],
    nfe: true,
    weightkg: 6,
    types: ['Psychic'],
    genderR: 127
  },
  'Stunky': {
    id: 434,
    bs: {hp: 63,at: 63,df: 47,sa: 41,sd: 41,sp: 74},
    abilities: ['Poison Point','Anticipation','Run Away'],
    innates: ['Aftermath','Stench','Keen Eye'],
    nfe: true,
    weightkg: 192,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Skuntank': {
    id: 435,
    bs: {hp: 103,at: 51,df: 77,sa: 113,sd: 71,sp: 84},
    abilities: ['Aftermath','Unburden','Adaptability'],
    innates: ['Corrosion','Stench','Gluttony'],
    weightkg: 380,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Bronzor': {
    id: 436,
    bs: {hp: 57,at: 24,df: 86,sa: 24,sd: 86,sp: 23},
    abilities: ['Battle Armor','Lead Coat','Sturdy'],
    innates: ['Levitate'],
    nfe: true,
    weightkg: 605,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Bronzong': {
    id: 437,
    bs: {hp: 67,at: 89,df: 116,sa: 79,sd: 116,sp: 33},
    abilities: ['Battle Armor','Lead Coat','Twisted Dimension'],
    innates: ['Steely Spirit','Heatproof','Bulletproof'],
    weightkg: 1870,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Bonsly': {
    id: 438,
    bs: {hp: 50,at: 80,df: 95,sa: 10,sd: 45,sp: 10},
    abilities: ['Sturdy','Rock Head','Water Compaction'],
    innates: ['Raw Wood'],
    nfe: true,
    weightkg: 150,
    types: ['Rock'],
    genderR: 127
  },
  'Mime Jr': {
    id: 439,
    bs: {hp: 20,at: 25,df: 45,sa: 70,sd: 90,sp: 60},
    abilities: ['Filter','Unnerve','Magic Bounce'],
    innates: ['Soundproof','Technician'],
    nfe: true,
    weightkg: 130,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Happiny': {
    id: 440,
    bs: {hp: 100,at: 5,df: 5,sa: 15,sd: 65,sp: 30},
    abilities: ['Regenerator','Serene Grace','None'],
    innates: ['Natural Cure','Healer','Super Luck'],
    nfe: true,
    weightkg: 244,
    types: ['Normal'],
    genderR: 254
  },
  'Chatot': {
    id: 441,
    bs: {hp: 76,at: 65,df: 45,sa: 102,sd: 42,sp: 101},
    abilities: ['Opportunist','Prankster','Cloud Nine'],
    innates: ['Adaptability','Amplifier','Mold Breaker'],
    weightkg: 19,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Spiritomb': {
    id: 442,
    bs: {hp: 50,at: 108,df: 108,sa: 108,sd: 108,sp: 35},
    abilities: ['Hypnotist','Twisted Dimension','Soul Linker'],
    innates: ['Soul Eater','Bad Dreams','Shadow Shield'],
    weightkg: 1080,
    types: ['Ghost','Dark'],
    genderR: 127
  },
  'Gible': {
    id: 443,
    bs: {hp: 58,at: 70,df: 45,sa: 40,sd: 45,sp: 42},
    abilities: ['Strong Jaw','Earthbound','Field Explorer'],
    innates: ['Hyper Aggressive','Sand Veil','Rough Skin'],
    nfe: true,
    weightkg: 205,
    types: ['Dragon','Ground'],
    genderR: 127
  },
  'Gabite': {
    id: 444,
    bs: {hp: 68,at: 90,df: 65,sa: 50,sd: 55,sp: 82},
    abilities: ['Opportunist','Looter','Tectonize'],
    innates: ['Hyper Aggressive','Sand Force','Rough Skin'],
    nfe: true,
    weightkg: 560,
    types: ['Dragon','Ground'],
    genderR: 127
  },
  'Garchomp': {
    id: 445,
    bs: {hp: 108,at: 130,df: 95,sa: 80,sd: 85,sp: 102},
    abilities: ['Overwhelm','Predator','Keen Edge'],
    innates: ['Hyper Aggressive','Speed Force','Rough Skin'],
    otherFormes: ['Garchomp Mega'],
    weightkg: 950,
    types: ['Dragon','Ground'],
    genderR: 127
  },
  'Munchlax': {
    id: 446,
    bs: {hp: 135,at: 85,df: 40,sa: 40,sd: 85,sp: 5},
    abilities: ['Lets Roll','Oblivious','None'],
    innates: ['Immunity','Thick Fat','Gluttony'],
    nfe: true,
    weightkg: 1050,
    types: ['Normal'],
    genderR: 30
  },
  'Riolu': {
    id: 447,
    bs: {hp: 40,at: 70,df: 40,sa: 35,sd: 40,sp: 60},
    abilities: ['Steadfast','None','Prankster'],
    innates: ['Inner Focus','Quick Feet'],
    nfe: true,
    weightkg: 202,
    types: ['Fighting'],
    genderR: 30
  },
  'Lucario': {
    id: 448,
    bs: {hp: 70,at: 110,df: 70,sa: 115,sd: 70,sp: 90},
    abilities: ['Fight Spirit','Competitive','Power Fists'],
    innates: ['Inner Focus','Fatal Precision','Vital Spirit'],
    otherFormes: ['Lucario Mega'],
    weightkg: 540,
    types: ['Fighting','Steel'],
    genderR: 30
  },
  'Hippopotas': {
    id: 449,
    bs: {hp: 68,at: 72,df: 78,sa: 38,sd: 42,sp: 32},
    abilities: ['Sand Stream','Rivalry','Intimidate'],
    innates: ['Sand Force','Battle Armor','Stamina'],
    nfe: true,
    weightkg: 495,
    types: ['Ground'],
    genderR: 127
  },
  'Hippowdon': {
    id: 450,
    bs: {hp: 108,at: 112,df: 118,sa: 68,sd: 72,sp: 47},
    abilities: ['Sand Stream','Growing Tooth','Hyper Aggressive'],
    innates: ['Sand Force','Predator','Strong Jaw'],
    weightkg: 3000,
    types: ['Ground'],
    genderR: 127
  },
  'Skorupi': {
    id: 451,
    bs: {hp: 40,at: 50,df: 90,sa: 30,sd: 55,sp: 65},
    abilities: ['Poison Touch','Fatal Precision','Looter'],
    innates: ['Shell Armor','Grip Pincer','Grounded'],
    nfe: true,
    weightkg: 120,
    types: ['Poison','Bug'],
    genderR: 127
  },
  'Drapion': {
    id: 452,
    bs: {hp: 70,at: 100,df: 120,sa: 60,sd: 75,sp: 95},
    abilities: ['Sniper','Fatal Precision','Looter'],
    innates: ['Shell Armor','Grip Pincer','Nocturnal'],
    weightkg: 615,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Croagunk': {
    id: 453,
    bs: {hp: 48,at: 61,df: 40,sa: 61,sd: 40,sp: 50},
    abilities: ['Poison Touch','Opportunist','Poison Absorb'],
    innates: ['Dry Skin','Amphibious'],
    nfe: true,
    weightkg: 230,
    types: ['Poison','Fighting'],
    genderR: 127
  },
  'Toxicroak': {
    id: 454,
    bs: {hp: 83,at: 106,df: 65,sa: 106,sd: 65,sp: 105},
    abilities: ['Technician','Hyper Aggressive','Opportunist'],
    innates: ['Dry Skin','Poison Touch','Merciless'],
    weightkg: 444,
    types: ['Poison','Fighting'],
    genderR: 127
  },
  'Carnivine': {
    id: 455,
    bs: {hp: 74,at: 100,df: 92,sa: 90,sd: 92,sp: 46},
    abilities: ['Chlorophyll','Grip Pincer','Arena Trap'],
    innates: ['Levitate','Strong Jaw','Scavenger'],
    weightkg: 270,
    types: ['Grass'],
    genderR: 127
  },
  'Finneon': {
    id: 456,
    bs: {hp: 49,at: 49,df: 56,sa: 49,sd: 61,sp: 66},
    abilities: ['Storm Drain','None','Water Veil'],
    innates: ['Swift Swim','Illuminate'],
    nfe: true,
    weightkg: 70,
    types: ['Water'],
    genderR: 127
  },
  'Lumineon': {
    id: 457,
    bs: {hp: 69,at: 69,df: 76,sa: 109,sd: 86,sp: 91},
    abilities: ['Storm Drain','None','Water Veil'],
    innates: ['Swift Swim','Illuminate','Nocturnal'],
    weightkg: 240,
    types: ['Water'],
    genderR: 127
  },
  'Mantyke': {
    id: 458,
    bs: {hp: 45,at: 20,df: 50,sa: 60,sd: 120,sp: 50},
    abilities: ['Swift Swim','Water Absorb','Water Veil'],
    innates: ['Rain Dish','Hydration'],
    nfe: true,
    weightkg: 650,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Snover': {
    id: 459,
    bs: {hp: 60,at: 62,df: 50,sa: 62,sd: 60,sp: 40},
    abilities: ['Snow Warning','Whiteout','Mountaineer'],
    innates: ['Ice Body','Snow Cloak','Permafrost'],
    nfe: true,
    weightkg: 505,
    types: ['Grass','Ice'],
    genderR: 127
  },
  'Abomasnow': {
    id: 460,
    bs: {hp: 90,at: 102,df: 75,sa: 102,sd: 85,sp: 60},
    abilities: ['Snow Warning','North Wind','Mountaineer'],
    innates: ['Ice Body','Overcoat','Permafrost'],
    otherFormes: ['Abomasnow Mega'],
    weightkg: 1355,
    types: ['Grass','Ice'],
    genderR: 127
  },
  'Weavile': {
    id: 461,
    bs: {hp: 70,at: 90,df: 65,sa: 45,sd: 85,sp: 125},
    abilities: ['Hyper Aggressive','Violent Rush','Fatal Precision'],
    innates: ['Tough Claws','Predator','Technician'],
    weightkg: 340,
    types: ['Dark','Ice'],
    genderR: 127
  },
  'Magnezone': {
    id: 462,
    bs: {hp: 70,at: 70,df: 115,sa: 130,sd: 90,sp: 60},
    abilities: ['Sighting System','Overcharge','Download'],
    innates: ['Galvanize','Multi Headed','Magnet Pull'],
    otherFormes: ['Magnezone Mega'],
    weightkg: 1800,
    types: ['Electric','Steel'],
    genderR: 255
  },
  'Lickilicky': {
    id: 463,
    bs: {hp: 110,at: 95,df: 95,sa: 90,sd: 95,sp: 50},
    abilities: ['Cloud Nine','Regenerator','Long Reach'],
    innates: ['Thick Fat','Own Tempo','Unaware'],
    weightkg: 1400,
    types: ['Normal'],
    genderR: 127
  },
  'Rhyperior': {
    id: 464,
    bs: {hp: 115,at: 140,df: 130,sa: 55,sd: 55,sp: 40},
    abilities: ['Lightning Rod','Battle Armor','Stamina'],
    innates: ['Solid Rock','Rock Head','Rough Skin'],
    weightkg: 2828,
    types: ['Ground','Rock'],
    genderR: 127
  },
  'Tangrowth': {
    id: 465,
    bs: {hp: 100,at: 100,df: 125,sa: 110,sd: 50,sp: 50},
    abilities: ['Chlorophyll','Battle Armor','Long Reach'],
    innates: ['Regenerator','Seaweed','Self Sufficient'],
    weightkg: 1286,
    types: ['Grass'],
    genderR: 127
  },
  'Electivire': {
    id: 466,
    bs: {hp: 75,at: 123,df: 67,sa: 95,sd: 85,sp: 95},
    abilities: ['Power Fists','Ground Shock','Electric Surge'],
    innates: ['Vital Spirit','Transistor','Motor Drive'],
    weightkg: 1386,
    types: ['Electric','Fighting'],
    genderR: 63
  },
  'Magmortar': {
    id: 467,
    bs: {hp: 75,at: 95,df: 67,sa: 125,sd: 85,sp: 93},
    abilities: ['Pyromancy','Flash Fire','Power Fists'],
    innates: ['Molten Down','Flame Body','Mega Launcher'],
    weightkg: 680,
    types: ['Fire'],
    genderR: 63
  },
  'Togekiss': {
    id: 468,
    bs: {hp: 85,at: 50,df: 95,sa: 120,sd: 115,sp: 80},
    abilities: ['Giant Wings','Self Sufficient','Soul Heart'],
    innates: ['Super Luck','Serene Grace','Pixilate'],
    weightkg: 380,
    types: ['Fairy','Flying'],
    genderR: 30
  },
  'Yanmega': {
    id: 469,
    bs: {hp: 86,at: 76,df: 86,sa: 126,sd: 56,sp: 95},
    abilities: ['Giant Wings','Compound Eyes','Tinted Lens'],
    innates: ['Speed Boost','Hyper Aggressive','Predator'],
    weightkg: 515,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Leafeon': {
    id: 470,
    bs: {hp: 65,at: 110,df: 130,sa: 60,sd: 65,sp: 95},
    abilities: ['Keen Edge','Avenger','Grassy Surge'],
    innates: ['Big Leaves','Feline Prowess','Natural Cure'],
    weightkg: 255,
    types: ['Grass'],
    genderR: 30
  },
  'Glaceon': {
    id: 471,
    bs: {hp: 65,at: 60,df: 110,sa: 130,sd: 95,sp: 65},
    abilities: ['Ice Scales','Whiteout','Frozen Soul'],
    innates: ['Ice Body','Refrigerate','Slush Rush'],
    weightkg: 259,
    types: ['Ice'],
    genderR: 30
  },
  'Gliscor': {
    id: 472,
    bs: {hp: 75,at: 95,df: 125,sa: 45,sd: 75,sp: 95},
    abilities: ['Predator','Rough Skin','Poison Heal'],
    innates: ['Hyper Cutter','Grip Pincer','Solenoglyphs'],
    weightkg: 425,
    types: ['Ground','Flying'],
    genderR: 127
  },
  'Mamoswine': {
    id: 473,
    bs: {hp: 110,at: 130,df: 80,sa: 70,sd: 60,sp: 80},
    abilities: ['Permafrost','Sheer Force','Whiteout'],
    innates: ['Slush Rush','Thick Fat','Growing Tooth'],
    weightkg: 2910,
    types: ['Ice','Ground'],
    genderR: 127
  },
  'Porygon Z': {
    id: 474,
    bs: {hp: 85,at: 80,df: 70,sa: 135,sd: 75,sp: 90},
    abilities: ['Download','Sighting System','Twisted Dimension'],
    innates: ['Analytic','Adaptability','Levitate'],
    weightkg: 340,
    types: ['Normal','Electric'],
    genderR: 255
  },
  'Gallade': {
    id: 475,
    bs: {hp: 68,at: 125,df: 65,sa: 60,sd: 115,sp: 100},
    abilities: ['Speed Force','Sweeping Edge','Sheer Force'],
    innates: ['Keen Edge','Fatal Precision','Avenger'],
    otherFormes: ['Gallade Mega'],
    weightkg: 520,
    types: ['Psychic','Fighting'],
    genderR: 0
  },
  'Probopass': {
    id: 476,
    bs: {hp: 60,at: 55,df: 145,sa: 95,sd: 150,sp: 40},
    abilities: ['Impenetrable','Magnet Pull','Steelworker'],
    innates: ['Solid Rock','Sand Force','Multi Headed'],
    weightkg: 3400,
    types: ['Rock','Steel'],
    genderR: 127
  },
  'Dusknoir': {
    id: 477,
    bs: {hp: 45,at: 120,df: 135,sa: 60,sd: 135,sp: 45},
    abilities: ['Twisted Dimension','Iron Fist','Opportunist'],
    innates: ['Cursed Body','Shadow Shield','Soul Eater'],
    weightkg: 1066,
    types: ['Ghost'],
    genderR: 127
  },
  'Froslass': {
    id: 478,
    bs: {hp: 70,at: 70,df: 70,sa: 110,sd: 70,sp: 110},
    abilities: ['Bad Luck','Refrigerate','Whiteout'],
    innates: ['Ice Body','Cursed Body','Slush Rush'],
    weightkg: 266,
    types: ['Ice','Ghost'],
    genderR: 254
  },
  'Rotom': {
    id: 479,
    bs: {hp: 50,at: 50,df: 77,sa: 95,sd: 77,sp: 91},
    abilities: ['Cursed Body','None','None'],
    innates: ['Levitate','Minus','Volt Absorb'],
    otherFormes: ['Rotom Heat','Rotom Wash','Rotom Frost','Rotom Fan','Rotom Mow'],
    weightkg: 3,
    types: ['Electric','Ghost'],
    genderR: 255
  },
  'Uxie': {
    id: 480,
    bs: {hp: 75,at: 75,df: 130,sa: 75,sd: 130,sp: 95},
    abilities: ['Magic Guard','Soul Linker','Sage Power'],
    innates: ['Levitate','Psychic Mind','Natural Cure'],
    weightkg: 3,
    types: ['Psychic'],
    genderR: 255
  },
  'Mesprit': {
    id: 481,
    bs: {hp: 80,at: 105,df: 105,sa: 105,sd: 105,sp: 80},
    abilities: ['Magic Guard','Power Core','Sage Power'],
    innates: ['Levitate','Psychic Mind','Natural Cure'],
    weightkg: 3,
    types: ['Psychic'],
    genderR: 255
  },
  'Azelf': {
    id: 482,
    bs: {hp: 75,at: 125,df: 70,sa: 125,sd: 70,sp: 115},
    abilities: ['Magic Guard','Neuroforce','Sage Power'],
    innates: ['Levitate','Psychic Mind','Natural Cure'],
    weightkg: 3,
    types: ['Psychic'],
    genderR: 255
  },
  'Dialga': {
    id: 483,
    bs: {hp: 100,at: 120,df: 120,sa: 150,sd: 100,sp: 90},
    abilities: ['Bulletproof','Stamina','Lead Coat'],
    innates: ['Primal Armor','Impenetrable','Power Core'],
    weightkg: 6830,
    types: ['Steel','Dragon'],
    genderR: 255
  },
  'Palkia': {
    id: 484,
    bs: {hp: 90,at: 120,df: 100,sa: 150,sd: 120,sp: 100},
    abilities: ['Rampage','Swift Swim','Drizzle'],
    innates: ['Primal Armor','Sea Guardian','Power Core'],
    weightkg: 3360,
    types: ['Water','Dragon'],
    genderR: 255
  },
  'Heatran': {
    id: 485,
    bs: {hp: 91,at: 90,df: 106,sa: 130,sd: 106,sp: 77},
    abilities: ['Steelworker','Mountaineer','Drought'],
    innates: ['Magma Armor','Molten Down','Flash Fire'],
    weightkg: 4300,
    types: ['Fire','Steel'],
    genderR: 127
  },
  'Regigigas': {
    id: 486,
    bs: {hp: 140,at: 160,df: 120,sa: 70,sd: 120,sp: 60},
    abilities: ['Adaptability','Primal Armor','Raging Boxer'],
    innates: ['Power Core','Impenetrable','Juggernaut'],
    weightkg: 4200,
    types: ['Normal'],
    genderR: 255
  },
  'Giratina': {
    id: 487,
    bs: {hp: 150,at: 100,df: 120,sa: 100,sd: 120,sp: 90},
    abilities: ['Intimidate','Scare','Twisted Dimension'],
    innates: ['Shadow Shield','Shadow Tag','Soul Eater'],
    otherFormes: ['Giratina Origin'],
    weightkg: 7500,
    types: ['Ghost','Dragon'],
    genderR: 255
  },
  'Cresselia': {
    id: 488,
    bs: {hp: 120,at: 70,df: 120,sa: 75,sd: 130,sp: 85},
    abilities: ['Prism Scales','Mystic Power','Magic Bounce'],
    innates: ['Levitate','Sweet Dreams','Lunar Eclipse'],
    weightkg: 856,
    types: ['Psychic'],
    genderR: 254
  },
  'Phione': {
    id: 489,
    bs: {hp: 80,at: 80,df: 80,sa: 80,sd: 80,sp: 80},
    abilities: ['Hydration','Friend Guard','Healer'],
    innates: ['Levitate','Water Veil','Inflatable'],
    weightkg: 31,
    types: ['Water'],
    genderR: 255
  },
  'Manaphy': {
    id: 490,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Swift Swim','Friend Guard','Healer'],
    innates: ['Levitate','Water Veil','Hydration'],
    weightkg: 14,
    types: ['Water'],
    genderR: 255
  },
  'Darkrai': {
    id: 491,
    bs: {hp: 70,at: 90,df: 90,sa: 135,sd: 90,sp: 125},
    abilities: ['Soul Eater','Bad Dreams','Dark Aura'],
    innates: ['Levitate','Phantom','Dreamcatcher'],
    weightkg: 505,
    types: ['Dark'],
    genderR: 255
  },
  'Shaymin': {
    id: 492,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Magic Bounce','Regenerator','Pixilate'],
    innates: ['Natural Cure','Harvest','Grass Pelt'],
    otherFormes: ['Shaymin Sky'],
    weightkg: 21,
    types: ['Grass'],
    genderR: 255
  },
  'Arceus': {
    id: 493,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Mystic Power'],
    otherFormes: ['Arceus Fighting','Arceus Flying','Arceus Poison','Arceus Ground','Arceus Rock','Arceus Bug','Arceus Ghost','Arceus Steel','Arceus Fire','Arceus Water','Arceus Grass','Arceus Electric','Arceus Psychic','Arceus Ice','Arceus Dragon','Arceus Dark','Arceus Fairy'],
    weightkg: 3200,
    types: ['Normal'],
    genderR: 255
  },
  'Victini': {
    id: 494,
    bs: {hp: 100,at: 100,df: 100,sa: 100,sd: 100,sp: 100},
    abilities: ['Turboblaze','Solar Flare','Power Spot'],
    innates: ['Victory Star','Magic Guard','Psychic Mind'],
    weightkg: 40,
    types: ['Psychic','Fire'],
    genderR: 255
  },
  'Snivy': {
    id: 495,
    bs: {hp: 45,at: 45,df: 55,sa: 45,sd: 55,sp: 63},
    abilities: ['Chloroplast','Opportunist','Contrary'],
    innates: ['Overgrow','Shed Skin','Chlorophyll'],
    nfe: true,
    weightkg: 81,
    types: ['Grass'],
    genderR: 127
  },
  'Servine': {
    id: 496,
    bs: {hp: 60,at: 60,df: 75,sa: 60,sd: 75,sp: 83},
    abilities: ['Chloroplast','Opportunist','Contrary'],
    innates: ['Overgrow','Shed Skin','Chlorophyll'],
    nfe: true,
    weightkg: 160,
    types: ['Grass'],
    genderR: 127
  },
  'Serperior': {
    id: 497,
    bs: {hp: 75,at: 75,df: 95,sa: 75,sd: 95,sp: 113},
    abilities: ['Chloroplast','Opportunist','Contrary'],
    innates: ['Overgrow','Shed Skin','Chlorophyll'],
    weightkg: 630,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Tepig': {
    id: 498,
    bs: {hp: 65,at: 63,df: 45,sa: 45,sd: 45,sp: 45},
    abilities: ['Reckless','Avenger','Flame Body'],
    innates: ['Blaze','Thick Fat','Gluttony'],
    nfe: true,
    weightkg: 99,
    types: ['Fire'],
    genderR: 127
  },
  'Pignite': {
    id: 499,
    bs: {hp: 90,at: 93,df: 55,sa: 70,sd: 55,sp: 55},
    abilities: ['Reckless','Avenger','Flame Body'],
    innates: ['Blaze','Thick Fat','Gluttony'],
    nfe: true,
    weightkg: 555,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Emboar': {
    id: 500,
    bs: {hp: 110,at: 123,df: 80,sa: 70,sd: 80,sp: 65},
    abilities: ['Reckless','Avenger','Violent Rush'],
    innates: ['Blaze','Thick Fat','Juggernaut'],
    weightkg: 1500,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Oshawott': {
    id: 501,
    bs: {hp: 55,at: 55,df: 45,sa: 63,sd: 45,sp: 45},
    abilities: ['Swift Swim','Violent Rush','Fatal Precision'],
    innates: ['Torrent','Shell Armor','Keen Edge'],
    nfe: true,
    weightkg: 59,
    types: ['Water'],
    genderR: 127
  },
  'Dewott': {
    id: 502,
    bs: {hp: 75,at: 75,df: 60,sa: 83,sd: 60,sp: 60},
    abilities: ['Swift Swim','Violent Rush','Fatal Precision'],
    innates: ['Torrent','Shell Armor','Keen Edge'],
    nfe: true,
    weightkg: 245,
    types: ['Water','Fighting'],
    genderR: 127
  },
  'Samurott': {
    id: 503,
    bs: {hp: 95,at: 100,df: 85,sa: 108,sd: 70,sp: 70},
    abilities: ['Swift Swim','Violent Rush','Fatal Precision'],
    innates: ['Torrent','Shell Armor','Keen Edge'],
    weightkg: 946,
    types: ['Water','Fighting'],
    genderR: 127
  },
  'Patrat': {
    id: 504,
    bs: {hp: 45,at: 55,df: 39,sa: 35,sd: 39,sp: 42},
    abilities: ['Run Away','Quick Feet','None'],
    innates: ['Keen Eye','Analytic'],
    nfe: true,
    weightkg: 116,
    types: ['Normal'],
    genderR: 127
  },
  'Watchog': {
    id: 505,
    bs: {hp: 75,at: 95,df: 79,sa: 60,sd: 79,sp: 77},
    abilities: ['Run Away','Quick Feet','Field Explorer'],
    innates: ['Keen Eye','Analytic','Illuminate'],
    weightkg: 270,
    types: ['Normal'],
    genderR: 127
  },
  'Lillipup': {
    id: 506,
    bs: {hp: 45,at: 60,df: 45,sa: 25,sd: 45,sp: 55},
    abilities: ['Vital Spirit','Pickup','Run Away'],
    innates: ['Overcoat'],
    nfe: true,
    weightkg: 41,
    types: ['Normal'],
    genderR: 127
  },
  'Herdier': {
    id: 507,
    bs: {hp: 65,at: 80,df: 65,sa: 35,sd: 65,sp: 60},
    abilities: ['Intimidate','Sand Rush','Scrappy'],
    innates: ['Overcoat','Fur Coat','Filter'],
    nfe: true,
    weightkg: 147,
    types: ['Normal'],
    genderR: 127
  },
  'Stoutland': {
    id: 508,
    bs: {hp: 85,at: 120,df: 70,sa: 45,sd: 90,sp: 80},
    abilities: ['Intimidate','Sand Rush','Scrappy'],
    innates: ['Overcoat','Fur Coat','Filter'],
    weightkg: 610,
    types: ['Normal'],
    genderR: 127
  },
  'Purrloin': {
    id: 509,
    bs: {hp: 41,at: 50,df: 37,sa: 50,sd: 37,sp: 66},
    abilities: ['Unburden','Sniper','Moody'],
    innates: ['Limber','Prankster'],
    nfe: true,
    weightkg: 101,
    types: ['Dark'],
    genderR: 127
  },
  'Liepard': {
    id: 510,
    bs: {hp: 64,at: 98,df: 50,sa: 98,sd: 50,sp: 106},
    abilities: ['Unburden','Sniper','Moody'],
    innates: ['Limber','Prankster','Opportunist'],
    weightkg: 375,
    types: ['Dark'],
    genderR: 127
  },
  'Pansage': {
    id: 511,
    bs: {hp: 50,at: 53,df: 48,sa: 53,sd: 48,sp: 64},
    abilities: ['Sap Sipper','None','Guts'],
    innates: ['Overgrow','Prankster'],
    nfe: true,
    weightkg: 105,
    types: ['Grass'],
    genderR: 30
  },
  'Simisage': {
    id: 512,
    bs: {hp: 75,at: 108,df: 63,sa: 108,sd: 63,sp: 101},
    abilities: ['Sap Sipper','Sage Power','Guts'],
    innates: ['Overgrow','Prankster','Gluttony'],
    weightkg: 305,
    types: ['Grass'],
    genderR: 30
  },
  'Pansear': {
    id: 513,
    bs: {hp: 50,at: 53,df: 48,sa: 53,sd: 48,sp: 64},
    abilities: ['Flash Fire','None','Hustle'],
    innates: ['Blaze','Prankster'],
    nfe: true,
    weightkg: 110,
    types: ['Fire'],
    genderR: 30
  },
  'Simisear': {
    id: 514,
    bs: {hp: 75,at: 108,df: 63,sa: 108,sd: 63,sp: 101},
    abilities: ['Flash Fire','Sage Power','Hustle'],
    innates: ['Blaze','Prankster','Gluttony'],
    weightkg: 280,
    types: ['Fire'],
    genderR: 30
  },
  'Panpour': {
    id: 515,
    bs: {hp: 50,at: 53,df: 48,sa: 53,sd: 48,sp: 64},
    abilities: ['Storm Drain','None','Healer'],
    innates: ['Torrent','Prankster'],
    nfe: true,
    weightkg: 135,
    types: ['Water'],
    genderR: 30
  },
  'Simipour': {
    id: 516,
    bs: {hp: 75,at: 108,df: 63,sa: 108,sd: 63,sp: 101},
    abilities: ['Storm Drain','Sage Power','Healer'],
    innates: ['Torrent','Prankster','Gluttony'],
    weightkg: 290,
    types: ['Water'],
    genderR: 30
  },
  'Munna': {
    id: 517,
    bs: {hp: 76,at: 25,df: 45,sa: 67,sd: 55,sp: 24},
    abilities: ['Forewarn','Synchronize','None'],
    innates: ['Dreamcatcher','Sweet Dreams','Levitate'],
    nfe: true,
    weightkg: 233,
    types: ['Psychic'],
    genderR: 127
  },
  'Musharna': {
    id: 518,
    bs: {hp: 116,at: 55,df: 85,sa: 117,sd: 95,sp: 29},
    abilities: ['Neuroforce','Sweet Dreams','Psychic Surge'],
    innates: ['Dreamcatcher','Comatose','Levitate'],
    weightkg: 605,
    types: ['Psychic'],
    genderR: 127
  },
  'Pidove': {
    id: 519,
    bs: {hp: 50,at: 55,df: 50,sa: 36,sd: 30,sp: 43},
    abilities: ['Super Luck','None','None'],
    innates: ['Keen Eye','Big Pecks','Rivalry'],
    nfe: true,
    weightkg: 21,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Tranquill': {
    id: 520,
    bs: {hp: 62,at: 77,df: 62,sa: 50,sd: 42,sp: 65},
    abilities: ['Super Luck','None','None'],
    innates: ['Keen Eye','Big Pecks','Rivalry'],
    nfe: true,
    weightkg: 150,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Unfezant': {
    id: 521,
    bs: {hp: 100,at: 95,df: 80,sa: 65,sd: 55,sp: 93},
    abilities: ['Super Luck','None','None'],
    innates: ['Keen Eye','Big Pecks','Rivalry'],
    weightkg: 290,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Blitzle': {
    id: 522,
    bs: {hp: 45,at: 60,df: 32,sa: 50,sd: 32,sp: 76},
    abilities: ['Reckless','Speed Force','Momentum'],
    innates: ['Illuminate','Motor Drive','Sap Sipper'],
    nfe: true,
    weightkg: 298,
    types: ['Electric'],
    genderR: 127
  },
  'Zebstrika': {
    id: 523,
    bs: {hp: 85,at: 110,df: 63,sa: 80,sd: 63,sp: 116},
    abilities: ['Reckless','Speed Force','Momentum'],
    innates: ['Illuminate','Motor Drive','Sap Sipper'],
    weightkg: 795,
    types: ['Electric'],
    genderR: 127
  },
  'Roggenrola': {
    id: 524,
    bs: {hp: 55,at: 25,df: 85,sa: 75,sd: 25,sp: 15},
    abilities: ['Sturdy','Weak Armor','Sand Force'],
    innates: ['Power Core','Impenetrable'],
    nfe: true,
    weightkg: 180,
    types: ['Rock'],
    genderR: 127
  },
  'Boldore': {
    id: 525,
    bs: {hp: 70,at: 50,df: 105,sa: 105,sd: 40,sp: 20},
    abilities: ['Sturdy','Weak Armor','Sand Force'],
    innates: ['Power Core','Impenetrable'],
    nfe: true,
    weightkg: 1020,
    types: ['Rock'],
    genderR: 127
  },
  'Gigalith': {
    id: 526,
    bs: {hp: 85,at: 60,df: 130,sa: 135,sd: 80,sp: 25},
    abilities: ['Loose Rocks','Sand Stream','Solar Power'],
    innates: ['Power Core','Sturdy','Sand Force'],
    weightkg: 2600,
    types: ['Rock'],
    genderR: 127
  },
  'Woobat': {
    id: 527,
    bs: {hp: 65,at: 45,df: 43,sa: 55,sd: 43,sp: 72},
    abilities: ['Aerodynamics','None','Simple'],
    innates: ['Unaware','Soundproof'],
    nfe: true,
    weightkg: 21,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Swoobat': {
    id: 528,
    bs: {hp: 67,at: 57,df: 55,sa: 97,sd: 55,sp: 114},
    abilities: ['Aerodynamics','None','Simple'],
    innates: ['Unaware','Soundproof','Loud Bang'],
    weightkg: 105,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Drilbur': {
    id: 529,
    bs: {hp: 60,at: 85,df: 40,sa: 30,sd: 45,sp: 68},
    abilities: ['Mold Breaker','Field Explorer','Violent Rush'],
    innates: ['Sand Rush','Sand Force'],
    nfe: true,
    weightkg: 85,
    types: ['Ground'],
    genderR: 127
  },
  'Excadrill': {
    id: 530,
    bs: {hp: 110,at: 135,df: 60,sa: 50,sd: 65,sp: 88},
    abilities: ['Mold Breaker','Tough Claws','Violent Rush'],
    innates: ['Sand Rush','Sand Force','Earthbound'],
    weightkg: 404,
    types: ['Ground','Steel'],
    genderR: 127
  },
  'Audino': {
    id: 531,
    bs: {hp: 103,at: 60,df: 96,sa: 80,sd: 96,sp: 50},
    abilities: ['Cute Charm','None','Serene Grace'],
    innates: ['Healer','Regenerator'],
    otherFormes: ['Audino Mega'],
    weightkg: 310,
    types: ['Normal'],
    genderR: 127
  },
  'Timburr': {
    id: 532,
    bs: {hp: 75,at: 80,df: 55,sa: 25,sd: 35,sp: 35},
    abilities: ['Sheer Force','None','None'],
    innates: ['Guts','Iron Fist'],
    nfe: true,
    weightkg: 125,
    types: ['Fighting'],
    genderR: 63
  },
  'Gurdurr': {
    id: 533,
    bs: {hp: 85,at: 105,df: 85,sa: 40,sd: 50,sp: 40},
    abilities: ['Sheer Force','Anger Point','None'],
    innates: ['Guts','Iron Fist'],
    nfe: true,
    weightkg: 400,
    types: ['Fighting'],
    genderR: 63
  },
  'Conkeldurr': {
    id: 534,
    bs: {hp: 105,at: 140,df: 95,sa: 55,sd: 65,sp: 45},
    abilities: ['Sheer Force','Anger Point','Stamina'],
    innates: ['Guts','Iron Fist','Juggernaut'],
    weightkg: 870,
    types: ['Fighting'],
    genderR: 63
  },
  'Tympole': {
    id: 535,
    bs: {hp: 50,at: 50,df: 40,sa: 50,sd: 40,sp: 64},
    abilities: ['Swift Swim','None','Immunity'],
    innates: ['Water Absorb','Hydration'],
    nfe: true,
    weightkg: 45,
    types: ['Water'],
    genderR: 127
  },
  'Palpitoad': {
    id: 536,
    bs: {hp: 75,at: 65,df: 55,sa: 65,sd: 55,sp: 69},
    abilities: ['Swift Swim','None','Immunity'],
    innates: ['Water Absorb','Hydration'],
    nfe: true,
    weightkg: 170,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Seismitoad': {
    id: 537,
    bs: {hp: 105,at: 105,df: 75,sa: 105,sd: 75,sp: 74},
    abilities: ['Swift Swim','Earthbound','Immunity'],
    innates: ['Water Absorb','Amplifier','Poison Touch'],
    weightkg: 620,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Throh': {
    id: 538,
    bs: {hp: 120,at: 100,df: 85,sa: 30,sd: 85,sp: 45},
    abilities: ['Guts','Technician','Mold Breaker'],
    innates: ['Inner Focus','Thick Fat','Iron Fist'],
    weightkg: 555,
    types: ['Fighting'],
    genderR: 0
  },
  'Sawk': {
    id: 539,
    bs: {hp: 75,at: 125,df: 75,sa: 30,sd: 75,sp: 85},
    abilities: ['Guts','Technician','Mold Breaker'],
    innates: ['Inner Focus','Limber','Iron Fist'],
    weightkg: 510,
    types: ['Fighting'],
    genderR: 0
  },
  'Sewaddle': {
    id: 540,
    bs: {hp: 45,at: 53,df: 70,sa: 40,sd: 60,sp: 42},
    abilities: ['Leaf Guard','None','None'],
    innates: ['Swarm','Chlorophyll','Overcoat'],
    nfe: true,
    weightkg: 25,
    types: ['Bug','Grass'],
    genderR: 127
  },
  'Swadloon': {
    id: 541,
    bs: {hp: 55,at: 63,df: 90,sa: 50,sd: 80,sp: 42},
    abilities: ['Leaf Guard','None','None'],
    innates: ['Swarm','Chlorophyll','Overcoat'],
    nfe: true,
    weightkg: 73,
    types: ['Bug','Grass'],
    genderR: 127
  },
  'Leavanny': {
    id: 542,
    bs: {hp: 75,at: 120,df: 80,sa: 55,sd: 80,sp: 110},
    abilities: ['Swarm','Compound Eyes','Chlorophyll'],
    innates: ['Keen Edge','Super Luck','Overcoat'],
    weightkg: 205,
    types: ['Bug','Grass'],
    genderR: 127
  },
  'Venipede': {
    id: 543,
    bs: {hp: 30,at: 45,df: 59,sa: 30,sd: 39,sp: 57},
    abilities: ['Poison Point','Exploit Weakness','Speed Boost'],
    innates: ['Swarm','Solenoglyphs','Hyper Aggressive'],
    nfe: true,
    weightkg: 53,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Whirlipede': {
    id: 544,
    bs: {hp: 40,at: 55,df: 99,sa: 40,sd: 79,sp: 47},
    abilities: ['Poison Point','Exploit Weakness','Speed Boost'],
    innates: ['Lets Roll','Coil Up','Shell Armor'],
    nfe: true,
    weightkg: 585,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Scolipede': {
    id: 545,
    bs: {hp: 60,at: 100,df: 89,sa: 55,sd: 69,sp: 112},
    abilities: ['Poison Point','Predator','Speed Boost'],
    innates: ['Lets Roll','Solenoglyphs','Hyper Aggressive'],
    weightkg: 2005,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Cottonee': {
    id: 546,
    bs: {hp: 40,at: 27,df: 60,sa: 37,sd: 50,sp: 66},
    abilities: ['Prankster','Sticky Hold','Leaf Guard'],
    innates: ['Infiltrator','Chlorophyll','Fluffy'],
    nfe: true,
    weightkg: 6,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Whimsicott': {
    id: 547,
    bs: {hp: 70,at: 57,df: 85,sa: 77,sd: 75,sp: 116},
    abilities: ['Prankster','Pixilate','Air Blower'],
    innates: ['Infiltrator','Chlorophyll','Fluffy'],
    weightkg: 66,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Petilil': {
    id: 548,
    bs: {hp: 45,at: 35,df: 50,sa: 70,sd: 50,sp: 30},
    abilities: ['Solar Power','Leaf Guard','Chloroplast'],
    innates: ['Chlorophyll','Natural Cure'],
    nfe: true,
    weightkg: 66,
    types: ['Grass','Fairy'],
    genderR: 254
  },
  'Lilligant': {
    id: 549,
    bs: {hp: 70,at: 60,df: 75,sa: 110,sd: 75,sp: 90},
    abilities: ['Solar Power','Leaf Guard','Chloroplast'],
    innates: ['Chlorophyll','Natural Cure','Overgrow'],
    weightkg: 163,
    types: ['Grass','Fairy'],
    genderR: 254
  },
  'Basculin': {
    id: 550,
    bs: {hp: 70,at: 92,df: 65,sa: 80,sd: 55,sp: 118},
    abilities: ['Mold Breaker','Strong Jaw','Predator'],
    innates: ['Reckless','Adaptability','Hyper Aggressive'],
    otherFormes: ['Basculin Blue Striped'],
    weightkg: 180,
    types: ['Water'],
    genderR: 127
  },
  'Sandile': {
    id: 551,
    bs: {hp: 50,at: 72,df: 35,sa: 35,sd: 35,sp: 65},
    abilities: ['Intimidate','Moxie','Anger Point'],
    innates: ['Sand Rush','Scavenger'],
    nfe: true,
    weightkg: 152,
    types: ['Ground','Dark'],
    genderR: 127
  },
  'Krokorok': {
    id: 552,
    bs: {hp: 60,at: 82,df: 45,sa: 45,sd: 45,sp: 74},
    abilities: ['Intimidate','Moxie','Anger Point'],
    innates: ['Sand Rush','Scavenger','Strong Jaw'],
    nfe: true,
    weightkg: 334,
    types: ['Ground','Dark'],
    genderR: 127
  },
  'Krookodile': {
    id: 553,
    bs: {hp: 95,at: 117,df: 80,sa: 65,sd: 70,sp: 92},
    abilities: ['Intimidate','Moxie','Anger Point'],
    innates: ['Hyper Aggressive','Predator','Strong Jaw'],
    otherFormes: ['Krookodile Mega'],
    weightkg: 963,
    types: ['Ground','Dark'],
    genderR: 127
  },
  'Darumaka': {
    id: 554,
    bs: {hp: 70,at: 90,df: 45,sa: 15,sd: 45,sp: 50},
    abilities: ['Hustle','None','Inner Focus'],
    innates: ['Flame Body'],
    otherFormes: ['Darumaka Galarian'],
    nfe: true,
    weightkg: 375,
    types: ['Fire'],
    genderR: 127
  },
  'Darmanitan': {
    id: 555,
    bs: {hp: 105,at: 140,df: 55,sa: 30,sd: 55,sp: 95},
    abilities: ['Gorilla Tactics','Sheer Force','Zen Mode'],
    innates: ['Flame Body','Iron Fist','Turboblaze'],
    otherFormes: ['Darmanitan Zen Mode','Darmanitan Galarian','Darmanitan Zen Mode Galarian'],
    weightkg: 929,
    types: ['Fire'],
    genderR: 127
  },
  'Maractus': {
    id: 556,
    bs: {hp: 75,at: 56,df: 87,sa: 106,sd: 87,sp: 60},
    abilities: ['Water Absorb','Huge Power','Storm Drain'],
    innates: ['Rough Skin','Chlorophyll','Sand Force'],
    weightkg: 280,
    types: ['Grass'],
    genderR: 127
  },
  'Dwebble': {
    id: 557,
    bs: {hp: 50,at: 65,df: 85,sa: 35,sd: 35,sp: 55},
    abilities: ['Sturdy','No Guard','Weak Armor'],
    innates: ['Solid Rock','Shell Armor'],
    nfe: true,
    weightkg: 145,
    types: ['Bug','Rock'],
    genderR: 127
  },
  'Crustle': {
    id: 558,
    bs: {hp: 70,at: 115,df: 135,sa: 65,sd: 75,sp: 45},
    abilities: ['Sturdy','No Guard','Weak Armor'],
    innates: ['Solid Rock','Shell Armor','Grip Pincer'],
    weightkg: 2000,
    types: ['Bug','Rock'],
    genderR: 127
  },
  'Scraggy': {
    id: 559,
    bs: {hp: 50,at: 75,df: 70,sa: 35,sd: 70,sp: 48},
    abilities: ['Rivalry','Moxie','Intimidate'],
    innates: ['Shed Skin','Rock Head','Reckless'],
    nfe: true,
    weightkg: 118,
    types: ['Dark','Fighting'],
    genderR: 127
  },
  'Scrafty': {
    id: 560,
    bs: {hp: 73,at: 90,df: 115,sa: 45,sd: 115,sp: 73},
    abilities: ['Iron Fist','Moxie','Intimidate'],
    innates: ['Shed Skin','Rock Head','Reckless'],
    weightkg: 300,
    types: ['Dark','Fighting'],
    genderR: 127
  },
  'Sigilyph': {
    id: 561,
    bs: {hp: 72,at: 58,df: 80,sa: 103,sd: 80,sp: 97},
    abilities: ['Magic Guard','Dreamcatcher','Sage Power'],
    innates: ['Wonder Skin','Tinted Lens','Phantom'],
    weightkg: 140,
    types: ['Psychic','Flying'],
    genderR: 127
  },
  'Yamask': {
    id: 562,
    bs: {hp: 38,at: 30,df: 85,sa: 55,sd: 65,sp: 30},
    abilities: ['Mummy','Mummy','Mummy'],
    innates: ['Vengeance','Cursed Body','Haunted Spirit'],
    otherFormes: ['Yamask Galarian'],
    nfe: true,
    weightkg: 15,
    types: ['Ghost'],
    genderR: 127
  },
  'Cofagrigus': {
    id: 563,
    bs: {hp: 58,at: 50,df: 145,sa: 95,sd: 105,sp: 30},
    abilities: ['Mummy','Shadow Shield','Shadow Tag'],
    innates: ['Vengeance','Cursed Body','Haunted Spirit'],
    weightkg: 765,
    types: ['Ghost','Steel'],
    genderR: 127
  },
  'Tirtouga': {
    id: 564,
    bs: {hp: 54,at: 78,df: 103,sa: 53,sd: 45,sp: 22},
    abilities: ['Opportunist','Swift Swim','Predator'],
    innates: ['Fossilized','Shell Armor','Solid Rock'],
    nfe: true,
    weightkg: 165,
    types: ['Water','Rock'],
    genderR: 30
  },
  'Carracosta': {
    id: 565,
    bs: {hp: 74,at: 128,df: 133,sa: 83,sd: 65,sp: 32},
    abilities: ['Opportunist','Swift Swim','Predator'],
    innates: ['Strong Jaw','Shell Armor','Solid Rock'],
    weightkg: 810,
    types: ['Water','Rock'],
    genderR: 30
  },
  'Archen': {
    id: 566,
    bs: {hp: 55,at: 112,df: 45,sa: 74,sd: 45,sp: 70},
    abilities: ['Defeatist','None','None'],
    innates: ['Fossilized','Rock Head'],
    nfe: true,
    weightkg: 95,
    types: ['Rock','Flying'],
    genderR: 30
  },
  'Archeops': {
    id: 567,
    bs: {hp: 75,at: 140,df: 65,sa: 112,sd: 65,sp: 110},
    abilities: ['Defeatist','None','None'],
    innates: ['Fossilized','Rock Head','Predator'],
    weightkg: 320,
    types: ['Rock','Flying'],
    genderR: 30
  },
  'Trubbish': {
    id: 568,
    bs: {hp: 50,at: 50,df: 62,sa: 40,sd: 62,sp: 65},
    abilities: ['Poison Touch','Toxic Debris','Scrapyard'],
    innates: ['Stench','Adaptability','Poison Absorb'],
    nfe: true,
    weightkg: 310,
    types: ['Poison'],
    genderR: 127
  },
  'Garbodor': {
    id: 569,
    bs: {hp: 80,at: 95,df: 102,sa: 60,sd: 82,sp: 75},
    abilities: ['Poison Touch','Toxic Debris','Scrapyard'],
    innates: ['Stench','Scavenger','Toxic Spill'],
    weightkg: 1073,
    types: ['Poison','Steel'],
    genderR: 127
  },
  'Zorua': {
    id: 570,
    bs: {hp: 40,at: 80,df: 40,sa: 65,sd: 40,sp: 65},
    abilities: ['Illusion','Illusion','Illusion'],
    innates: ['Ambush','Insomnia','Opportunist'],
    nfe: true,
    weightkg: 125,
    types: ['Dark'],
    genderR: 30
  },
  'Zoroark': {
    id: 571,
    bs: {hp: 60,at: 120,df: 60,sa: 105,sd: 60,sp: 105},
    abilities: ['Illusion','Illusion','Illusion'],
    innates: ['Ambush','Exploit Weakness','Opportunist'],
    weightkg: 811,
    types: ['Dark'],
    genderR: 30
  },
  'Minccino': {
    id: 572,
    bs: {hp: 55,at: 50,df: 40,sa: 40,sd: 40,sp: 75},
    abilities: ['Perfectionist','Overcoat','Skill Link'],
    innates: ['Technician','Cute Charm','Limber'],
    nfe: true,
    weightkg: 58,
    types: ['Normal'],
    genderR: 191
  },
  'Cinccino': {
    id: 573,
    bs: {hp: 75,at: 95,df: 60,sa: 65,sd: 60,sp: 115},
    abilities: ['Perfectionist','Overcoat','Skill Link'],
    innates: ['Technician','Cute Charm','Limber'],
    weightkg: 75,
    types: ['Normal'],
    genderR: 191
  },
  'Gothita': {
    id: 574,
    bs: {hp: 45,at: 30,df: 50,sa: 55,sd: 65,sp: 45},
    abilities: ['Frisk','Competitive','Shadow Tag'],
    innates: ['Nocturnal','Psychic Mind'],
    nfe: true,
    weightkg: 58,
    types: ['Psychic'],
    genderR: 191
  },
  'Gothorita': {
    id: 575,
    bs: {hp: 60,at: 45,df: 70,sa: 75,sd: 85,sp: 55},
    abilities: ['Frisk','Competitive','Shadow Tag'],
    innates: ['Nocturnal','Psychic Mind'],
    nfe: true,
    weightkg: 180,
    types: ['Psychic'],
    genderR: 191
  },
  'Gothitelle': {
    id: 576,
    bs: {hp: 70,at: 55,df: 95,sa: 95,sd: 110,sp: 65},
    abilities: ['Frisk','Competitive','Shadow Tag'],
    innates: ['Nocturnal','Psychic Mind','Magic Bounce'],
    weightkg: 440,
    types: ['Psychic'],
    genderR: 191
  },
  'Solosis': {
    id: 577,
    bs: {hp: 45,at: 30,df: 40,sa: 105,sd: 50,sp: 20},
    abilities: ['Overcoat','None','Twisted Dimension'],
    innates: ['Regenerator','Liquified'],
    nfe: true,
    weightkg: 10,
    types: ['Psychic'],
    genderR: 127
  },
  'Duosion': {
    id: 578,
    bs: {hp: 65,at: 40,df: 50,sa: 125,sd: 60,sp: 30},
    abilities: ['Overcoat','Neuroforce','Twisted Dimension'],
    innates: ['Regenerator','Liquified','Magic Guard'],
    nfe: true,
    weightkg: 80,
    types: ['Psychic'],
    genderR: 127
  },
  'Reuniclus': {
    id: 579,
    bs: {hp: 110,at: 65,df: 75,sa: 125,sd: 85,sp: 30},
    abilities: ['Overcoat','Neuroforce','Twisted Dimension'],
    innates: ['Regenerator','Liquified','Magic Guard'],
    weightkg: 201,
    types: ['Psychic'],
    genderR: 127
  },
  'Ducklett': {
    id: 580,
    bs: {hp: 62,at: 44,df: 50,sa: 44,sd: 50,sp: 55},
    abilities: ['Hydration','Rivalry','None'],
    innates: ['Flock','Keen Eye','Big Pecks'],
    nfe: true,
    weightkg: 55,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Swanna': {
    id: 581,
    bs: {hp: 75,at: 87,df: 63,sa: 77,sd: 63,sp: 103},
    abilities: ['Hydration','Giant Wings','Majestic Bird'],
    innates: ['Flock','Keen Eye','Big Pecks'],
    weightkg: 242,
    types: ['Water','Flying'],
    genderR: 127
  },
  'Vanillite': {
    id: 582,
    bs: {hp: 36,at: 50,df: 50,sa: 65,sd: 60,sp: 44},
    abilities: ['Refrigerate','Snow Warning','Weak Armor'],
    innates: ['Permafrost','Ice Body','Slush Rush'],
    nfe: true,
    weightkg: 57,
    types: ['Ice'],
    genderR: 127
  },
  'Vanillish': {
    id: 583,
    bs: {hp: 51,at: 65,df: 65,sa: 80,sd: 75,sp: 59},
    abilities: ['Refrigerate','Snow Warning','Weak Armor'],
    innates: ['Permafrost','Ice Body','Slush Rush'],
    nfe: true,
    weightkg: 410,
    types: ['Ice'],
    genderR: 127
  },
  'Vanilluxe': {
    id: 584,
    bs: {hp: 71,at: 95,df: 85,sa: 110,sd: 95,sp: 95},
    abilities: ['Refrigerate','Snow Warning','Weak Armor'],
    innates: ['Multi Headed','Ice Body','Slush Rush'],
    weightkg: 575,
    types: ['Ice'],
    genderR: 127
  },
  'Deerling': {
    id: 585,
    bs: {hp: 60,at: 60,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush'],
    otherFormes: ['Deerling Summer','Deerling Autumn','Deerling Winter'],
    nfe: true,
    weightkg: 195,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Sawsbuck': {
    id: 586,
    bs: {hp: 80,at: 100,df: 70,sa: 60,sd: 70,sp: 95},
    abilities: ['Adaptability','Serene Grace','Chloroplast'],
    innates: ['Mighty Horn','Violent Rush','Rivalry'],
    otherFormes: ['Sawsbuck Summer','Sawsbuck Autumn','Sawsbuck Winter'],
    weightkg: 925,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Emolga': {
    id: 587,
    bs: {hp: 55,at: 75,df: 60,sa: 105,sd: 60,sp: 113},
    abilities: ['Static','Gluttony','Electrocytes'],
    innates: ['Plus','Motor Drive','Aerilate'],
    weightkg: 50,
    types: ['Electric','Flying'],
    genderR: 127
  },
  'Karrablast': {
    id: 588,
    bs: {hp: 50,at: 75,df: 45,sa: 40,sd: 45,sp: 60},
    abilities: ['No Guard','Hydration','Unburden'],
    innates: ['Swarm','Shed Skin','Sticky Hold'],
    nfe: true,
    weightkg: 59,
    types: ['Bug'],
    genderR: 127
  },
  'Escavalier': {
    id: 589,
    bs: {hp: 70,at: 135,df: 105,sa: 60,sd: 105,sp: 60},
    abilities: ['No Guard','Overcoat','Full Metal Body'],
    innates: ['Swarm','Shell Armor','Speed Boost'],
    weightkg: 330,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Foongus': {
    id: 590,
    bs: {hp: 69,at: 55,df: 45,sa: 55,sd: 55,sp: 15},
    abilities: ['Infiltrator','None','Adaptability'],
    innates: ['Regenerator','Effect Spore','Dry Skin'],
    nfe: true,
    weightkg: 10,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Amoonguss': {
    id: 591,
    bs: {hp: 114,at: 85,df: 85,sa: 85,sd: 95,sp: 30},
    abilities: ['Infiltrator','None','Adaptability'],
    innates: ['Regenerator','Effect Spore','Dry Skin'],
    weightkg: 105,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Frillish': {
    id: 592,
    bs: {hp: 55,at: 40,df: 50,sa: 65,sd: 85,sp: 40},
    abilities: ['Cursed Body','Clear Body','Immunity'],
    innates: ['Water Absorb','Limber','Poison Touch'],
    nfe: true,
    weightkg: 330,
    types: ['Water','Ghost'],
    genderR: 127
  },
  'Jellicent': {
    id: 593,
    bs: {hp: 120,at: 60,df: 70,sa: 85,sd: 105,sp: 60},
    abilities: ['Cursed Body','Clear Body','Immunity'],
    innates: ['Water Bubble','Soul Eater','Poison Touch'],
    weightkg: 1350,
    types: ['Water','Ghost'],
    genderR: 127
  },
  'Alomomola': {
    id: 594,
    bs: {hp: 165,at: 75,df: 80,sa: 40,sd: 45,sp: 65},
    abilities: ['Hydration','Natural Cure','Water Veil'],
    innates: ['Healer','Regenerator','Self Sufficient'],
    weightkg: 316,
    types: ['Water'],
    genderR: 127
  },
  'Joltik': {
    id: 595,
    bs: {hp: 50,at: 47,df: 50,sa: 57,sd: 50,sp: 65},
    abilities: ['Minus','Run Away','Spider Lair'],
    innates: ['Opportunist','Swarm','Compound Eyes'],
    nfe: true,
    weightkg: 6,
    types: ['Bug','Electric'],
    genderR: 127
  },
  'Galvantula': {
    id: 596,
    bs: {hp: 70,at: 77,df: 60,sa: 107,sd: 60,sp: 108},
    abilities: ['Compound Eyes','Looter','Spider Lair'],
    innates: ['Immunity','Swarm','Overcoat'],
    weightkg: 143,
    types: ['Bug','Electric'],
    genderR: 127
  },
  'Ferroseed': {
    id: 597,
    bs: {hp: 44,at: 50,df: 91,sa: 24,sd: 86,sp: 10},
    abilities: ['Impenetrable','Bulletproof','Fort Knox'],
    innates: ['Iron Barbs','Lets Roll','Battle Armor'],
    nfe: true,
    weightkg: 188,
    types: ['Grass','Steel'],
    genderR: 127
  },
  'Ferrothorn': {
    id: 598,
    bs: {hp: 74,at: 94,df: 131,sa: 54,sd: 116,sp: 20},
    abilities: ['Impenetrable','Bulletproof','Fort Knox'],
    innates: ['Iron Barbs','Lets Roll','Battle Armor'],
    weightkg: 1100,
    types: ['Grass','Steel'],
    genderR: 127
  },
  'Klink': {
    id: 599,
    bs: {hp: 40,at: 55,df: 70,sa: 45,sd: 60,sp: 30},
    abilities: ['Steelworker','None','None'],
    innates: ['Plus','Multi Headed','Full Metal Body'],
    nfe: true,
    weightkg: 210,
    types: ['Steel'],
    genderR: 255
  },
  'Klang': {
    id: 600,
    bs: {hp: 60,at: 80,df: 95,sa: 70,sd: 85,sp: 50},
    abilities: ['Steelworker','None','Galvanize'],
    innates: ['Plus','Multi Headed','Full Metal Body'],
    nfe: true,
    weightkg: 510,
    types: ['Steel'],
    genderR: 255
  },
  'Klinklang': {
    id: 601,
    bs: {hp: 60,at: 100,df: 115,sa: 100,sd: 85,sp: 90},
    abilities: ['Steelworker','Electric Surge','Galvanize'],
    innates: ['Iron Barbs','Multi Headed','Impenetrable'],
    weightkg: 810,
    types: ['Steel'],
    genderR: 255
  },
  'Tynamo': {
    id: 602,
    bs: {hp: 35,at: 55,df: 40,sa: 45,sd: 40,sp: 60},
    abilities: ['Electrocytes','Hydrate','Swift Swim'],
    innates: ['Plus','Levitate','Aquatic'],
    nfe: true,
    weightkg: 3,
    types: ['Electric'],
    genderR: 127
  },
  'Eelektrik': {
    id: 603,
    bs: {hp: 65,at: 85,df: 70,sa: 75,sd: 70,sp: 40},
    abilities: ['Electrocytes','Hydrate','Swift Swim'],
    innates: ['Plus','Levitate','Aquatic'],
    nfe: true,
    weightkg: 220,
    types: ['Electric'],
    genderR: 127
  },
  'Eelektross': {
    id: 604,
    bs: {hp: 85,at: 115,df: 90,sa: 105,sd: 90,sp: 50},
    abilities: ['Predator','Hydrate','Swift Swim'],
    innates: ['Levitate','Electrocytes','Artillery'],
    weightkg: 805,
    types: ['Electric','Water'],
    genderR: 127
  },
  'Elgyem': {
    id: 605,
    bs: {hp: 55,at: 55,df: 55,sa: 85,sd: 55,sp: 30},
    abilities: ['Neuroforce','Twisted Dimension','Psychic Surge'],
    innates: ['Analytic','Psychic Mind'],
    nfe: true,
    weightkg: 90,
    types: ['Psychic'],
    genderR: 127
  },
  'Beheeyem': {
    id: 606,
    bs: {hp: 75,at: 75,df: 75,sa: 125,sd: 95,sp: 40},
    abilities: ['Neuroforce','Twisted Dimension','Psychic Surge'],
    innates: ['Analytic','Psychic Mind'],
    weightkg: 345,
    types: ['Psychic'],
    genderR: 127
  },
  'Litwick': {
    id: 607,
    bs: {hp: 50,at: 30,df: 55,sa: 65,sd: 55,sp: 20},
    abilities: ['Flame Body','Infiltrator','Haunted Spirit'],
    innates: ['Flash Fire','Soul Eater'],
    nfe: true,
    weightkg: 31,
    types: ['Ghost','Fire'],
    genderR: 127
  },
  'Lampent': {
    id: 608,
    bs: {hp: 60,at: 40,df: 60,sa: 95,sd: 60,sp: 55},
    abilities: ['Flash Fire','Infiltrator','Haunted Spirit'],
    innates: ['Levitate','Soul Eater','Illuminate'],
    nfe: true,
    weightkg: 130,
    types: ['Ghost','Fire'],
    genderR: 127
  },
  'Chandelure': {
    id: 609,
    bs: {hp: 80,at: 55,df: 90,sa: 145,sd: 90,sp: 80},
    abilities: ['Flash Fire','Infiltrator','Soul Eater'],
    innates: ['Levitate','Pyromancy','Illuminate'],
    weightkg: 343,
    types: ['Ghost','Fire'],
    genderR: 127
  },
  'Axew': {
    id: 610,
    bs: {hp: 46,at: 87,df: 60,sa: 30,sd: 40,sp: 57},
    abilities: ['Intimidate','Growing Tooth','Moxie'],
    innates: ['Rivalry','Mold Breaker'],
    nfe: true,
    weightkg: 180,
    types: ['Dragon'],
    genderR: 127
  },
  'Fraxure': {
    id: 611,
    bs: {hp: 66,at: 117,df: 70,sa: 40,sd: 50,sp: 67},
    abilities: ['Intimidate','Keen Edge','Moxie'],
    innates: ['Rivalry','Mold Breaker','Shell Armor'],
    nfe: true,
    weightkg: 360,
    types: ['Dragon'],
    genderR: 127
  },
  'Haxorus': {
    id: 612,
    bs: {hp: 76,at: 147,df: 90,sa: 60,sd: 70,sp: 97},
    abilities: ['Intimidate','Keen Edge','Sheer Force'],
    innates: ['Beast Boost','Predator','Discipline'],
    otherFormes: ['Haxorus Mega'],
    weightkg: 1055,
    types: ['Dragon'],
    genderR: 127
  },
  'Cubchoo': {
    id: 613,
    bs: {hp: 55,at: 70,df: 40,sa: 60,sd: 40,sp: 40},
    abilities: ['Snow Cloak','Looter','Swift Swim'],
    innates: ['Slush Rush'],
    nfe: true,
    weightkg: 85,
    types: ['Ice'],
    genderR: 127
  },
  'Beartic': {
    id: 614,
    bs: {hp: 95,at: 120,df: 80,sa: 70,sd: 80,sp: 70},
    abilities: ['Tough Claws','Predator','Intimidate'],
    innates: ['Slush Rush','Aquatic','Swift Swim'],
    weightkg: 2600,
    types: ['Ice','Fighting'],
    genderR: 127
  },
  'Cryogonal': {
    id: 615,
    bs: {hp: 80,at: 50,df: 50,sa: 95,sd: 135,sp: 105},
    abilities: ['North Wind','Refrigerate','Regenerator'],
    innates: ['Levitate','Ice Body','Permafrost'],
    weightkg: 1480,
    types: ['Ice'],
    genderR: 255
  },
  'Shelmet': {
    id: 616,
    bs: {hp: 50,at: 40,df: 85,sa: 40,sd: 65,sp: 25},
    abilities: ['Hydration','Poison Touch','Clear Body'],
    innates: ['Swarm','Shell Armor','Overcoat'],
    nfe: true,
    weightkg: 77,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Accelgor': {
    id: 617,
    bs: {hp: 80,at: 70,df: 40,sa: 100,sd: 60,sp: 145},
    abilities: ['Momentum','Poison Touch','Unburden'],
    innates: ['Swarm','Perfectionist','Protean'],
    weightkg: 253,
    types: ['Bug','Dark'],
    genderR: 127
  },
  'Stunfisk': {
    id: 618,
    bs: {hp: 109,at: 66,df: 84,sa: 81,sd: 99,sp: 32},
    abilities: ['Arena Trap','Static','Electric Surge'],
    innates: ['Unaware','Amphibious','Dry Skin'],
    otherFormes: ['Stunfisk Galarian'],
    weightkg: 110,
    types: ['Ground','Electric'],
    genderR: 127
  },
  'Mienfoo': {
    id: 619,
    bs: {hp: 45,at: 85,df: 50,sa: 55,sd: 50,sp: 65},
    abilities: ['Iron Fist','Limber','Regenerator'],
    innates: ['Inner Focus','Reckless','Speed Force'],
    nfe: true,
    weightkg: 200,
    types: ['Fighting'],
    genderR: 127
  },
  'Mienshao': {
    id: 620,
    bs: {hp: 65,at: 125,df: 60,sa: 95,sd: 60,sp: 105},
    abilities: ['Iron Fist','Limber','Regenerator'],
    innates: ['Inner Focus','Scrappy','Striker'],
    weightkg: 355,
    types: ['Fighting'],
    genderR: 127
  },
  'Druddigon': {
    id: 621,
    bs: {hp: 97,at: 120,df: 90,sa: 60,sd: 90,sp: 48},
    abilities: ['Impenetrable','Sun Worship','Tough Claws'],
    innates: ['Ambush','Solid Rock','Predator'],
    weightkg: 1390,
    types: ['Dragon','Rock'],
    genderR: 127
  },
  'Golett': {
    id: 622,
    bs: {hp: 59,at: 74,df: 50,sa: 35,sd: 50,sp: 35},
    abilities: ['Power Fists','Shadow Shield','Haunted Spirit'],
    innates: ['Power Core','No Guard'],
    nfe: true,
    weightkg: 920,
    types: ['Ground','Ghost'],
    genderR: 255
  },
  'Golurk': {
    id: 623,
    bs: {hp: 89,at: 134,df: 90,sa: 55,sd: 90,sp: 55},
    abilities: ['Power Fists','No Guard','Self Repair'],
    innates: ['Power Core','Shadow Shield','Iron Fist'],
    weightkg: 3300,
    types: ['Ground','Ghost'],
    genderR: 255
  },
  'Pawniard': {
    id: 624,
    bs: {hp: 45,at: 85,df: 70,sa: 40,sd: 40,sp: 60},
    abilities: ['Defiant','Hyper Cutter','None'],
    innates: ['Inner Focus','Keen Edge','Battle Armor'],
    nfe: true,
    weightkg: 102,
    types: ['Dark','Steel'],
    genderR: 127
  },
  'Bisharp': {
    id: 625,
    bs: {hp: 65,at: 125,df: 100,sa: 60,sd: 70,sp: 70},
    abilities: ['Defiant','Hyper Cutter','Opportunist'],
    innates: ['No Guard','Keen Edge','Battle Armor'],
    weightkg: 700,
    types: ['Dark','Steel'],
    genderR: 127
  },
  'Bouffalant': {
    id: 626,
    bs: {hp: 95,at: 110,df: 95,sa: 40,sd: 95,sp: 55},
    abilities: ['Anger Point','Rampage','Reckless'],
    innates: ['Violent Rush','Fur Coat','Rock Head'],
    weightkg: 946,
    types: ['Normal'],
    genderR: 127
  },
  'Rufflet': {
    id: 627,
    bs: {hp: 70,at: 83,df: 50,sa: 37,sd: 50,sp: 60},
    abilities: ['Sheer Force','Defiant','Rivalry'],
    innates: ['Flock','Keen Eye'],
    nfe: true,
    weightkg: 105,
    types: ['Normal','Flying'],
    genderR: 0
  },
  'Braviary': {
    id: 628,
    bs: {hp: 100,at: 123,df: 75,sa: 57,sd: 75,sp: 80},
    abilities: ['Sheer Force','Defiant','Gale Wings'],
    innates: ['Flock','Giant Wings','Big Pecks'],
    weightkg: 410,
    types: ['Normal','Flying'],
    genderR: 0
  },
  'Vullaby': {
    id: 629,
    bs: {hp: 70,at: 55,df: 75,sa: 45,sd: 65,sp: 60},
    abilities: ['Big Pecks','Weak Armor','Overcoat'],
    innates: ['Flock','Keen Eye','Scavenger'],
    nfe: true,
    weightkg: 90,
    types: ['Dark','Flying'],
    genderR: 254
  },
  'Mandibuzz': {
    id: 630,
    bs: {hp: 110,at: 65,df: 105,sa: 55,sd: 95,sp: 80},
    abilities: ['Big Pecks','Giant Wings','Air Blower'],
    innates: ['Overcoat','Stamina','Scavenger'],
    weightkg: 395,
    types: ['Dark','Flying'],
    genderR: 254
  },
  'Heatmor': {
    id: 631,
    bs: {hp: 85,at: 97,df: 96,sa: 85,sd: 96,sp: 65},
    abilities: ['Immolate','Unaware','Steelworker'],
    innates: ['White Smoke','Tough Claws','Fatal Precision'],
    weightkg: 580,
    types: ['Fire','Steel'],
    genderR: 127
  },
  'Durant': {
    id: 632,
    bs: {hp: 58,at: 109,df: 112,sa: 48,sd: 78,sp: 109},
    abilities: ['Hustle','Looter','Steelworker'],
    innates: ['Swarm','Strong Jaw','Compound Eyes'],
    weightkg: 330,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Deino': {
    id: 633,
    bs: {hp: 52,at: 65,df: 50,sa: 45,sd: 50,sp: 38},
    abilities: ['Hustle','Sheer Force','Moody'],
    innates: ['Gluttony','Hyper Aggressive'],
    nfe: true,
    weightkg: 173,
    types: ['Dark','Dragon'],
    genderR: 127
  },
  'Zweilous': {
    id: 634,
    bs: {hp: 72,at: 85,df: 70,sa: 65,sd: 70,sp: 58},
    abilities: ['Hustle','Sheer Force','Moody'],
    innates: ['Multi Headed','Gluttony','Predator'],
    nfe: true,
    weightkg: 500,
    types: ['Dark','Dragon'],
    genderR: 127
  },
  'Hydreigon': {
    id: 635,
    bs: {hp: 92,at: 105,df: 90,sa: 125,sd: 90,sp: 98},
    abilities: ['Scare','Mega Launcher','Beast Boost'],
    innates: ['Multi Headed','Levitate','Predator'],
    weightkg: 1600,
    types: ['Dark','Dragon'],
    genderR: 127
  },
  'Larvesta': {
    id: 636,
    bs: {hp: 55,at: 85,df: 55,sa: 50,sd: 55,sp: 60},
    abilities: ['Compound Eyes','None','None'],
    innates: ['Swarm','Flame Body'],
    nfe: true,
    weightkg: 288,
    types: ['Bug','Fire'],
    genderR: 127
  },
  'Volcarona': {
    id: 637,
    bs: {hp: 85,at: 60,df: 65,sa: 135,sd: 105,sp: 100},
    abilities: ['Compound Eyes','Flash Fire','Drought'],
    innates: ['Swarm','Majestic Moth','Levitate'],
    weightkg: 460,
    types: ['Bug','Fire'],
    genderR: 127
  },
  'Cobalion': {
    id: 638,
    bs: {hp: 91,at: 90,df: 129,sa: 90,sd: 72,sp: 108},
    abilities: ['Justified','Avenger','Dragonslayer'],
    innates: ['Keen Edge','Sweeping Edge','Mirror Armor'],
    weightkg: 2500,
    types: ['Steel','Fighting'],
    genderR: 255
  },
  'Terrakion': {
    id: 639,
    bs: {hp: 91,at: 129,df: 90,sa: 72,sd: 90,sp: 108},
    abilities: ['Justified','Avenger','Dragonslayer'],
    innates: ['Keen Edge','Mold Breaker','Solid Rock'],
    weightkg: 2600,
    types: ['Rock','Fighting'],
    genderR: 255
  },
  'Virizion': {
    id: 640,
    bs: {hp: 91,at: 90,df: 72,sa: 90,sd: 129,sp: 108},
    abilities: ['Justified','Avenger','Dragonslayer'],
    innates: ['Mighty Horn','Absorbant','Keen Edge'],
    weightkg: 2000,
    types: ['Grass','Fighting'],
    genderR: 255
  },
  'Tornadus': {
    id: 641,
    bs: {hp: 79,at: 115,df: 70,sa: 125,sd: 80,sp: 111},
    abilities: ['Air Blower','Cloud Nine','Speed Boost'],
    innates: ['Prankster','Weather Control','Keen Eye'],
    otherFormes: ['Tornadus Therian'],
    weightkg: 630,
    types: ['Flying'],
    genderR: 0
  },
  'Thundurus': {
    id: 642,
    bs: {hp: 79,at: 115,df: 70,sa: 125,sd: 80,sp: 111},
    abilities: ['Electrocytes','Teravolt','Ground Shock'],
    innates: ['Overcharge','Weather Control','Volt Absorb'],
    otherFormes: ['Thundurus Therian'],
    weightkg: 610,
    types: ['Electric','Flying'],
    genderR: 0
  },
  'Reshiram': {
    id: 643,
    bs: {hp: 100,at: 120,df: 100,sa: 150,sd: 120,sp: 90},
    abilities: ['Beast Boost','Immolate','Drought'],
    innates: ['Turboblaze','Pyromancy','White Smoke'],
    weightkg: 3300,
    types: ['Dragon','Fire'],
    genderR: 255
  },
  'Zekrom': {
    id: 644,
    bs: {hp: 100,at: 150,df: 120,sa: 120,sd: 100,sp: 90},
    abilities: ['Beast Boost','Galvanize','Electric Surge'],
    innates: ['Teravolt','Transistor','Clear Body'],
    weightkg: 3450,
    types: ['Dragon','Electric'],
    genderR: 255
  },
  'Landorus': {
    id: 645,
    bs: {hp: 89,at: 125,df: 90,sa: 115,sd: 80,sp: 101},
    abilities: ['Sheer Force','Aerilate','Moxie'],
    innates: ['Sand Force','Intimidate','Regenerator'],
    otherFormes: ['Landorus Therian'],
    weightkg: 680,
    types: ['Ground','Flying'],
    genderR: 0
  },
  'Kyurem': {
    id: 646,
    bs: {hp: 125,at: 130,df: 90,sa: 130,sd: 90,sp: 95},
    abilities: ['Beast Boost','Refrigerate','Snow Warning'],
    innates: ['Ice Scales','Permafrost','Whiteout'],
    otherFormes: ['Kyurem White','Kyurem Black'],
    weightkg: 3250,
    types: ['Dragon','Ice'],
    genderR: 255
  },
  'Keldeo': {
    id: 647,
    bs: {hp: 91,at: 72,df: 90,sa: 129,sd: 90,sp: 108},
    abilities: ['Justified','Avenger','Dragonslayer'],
    innates: ['Steadfast','Field Explorer','Keen Edge'],
    otherFormes: ['Keldeo Resolute'],
    weightkg: 485,
    types: ['Water','Fighting'],
    genderR: 255
  },
  'Meloetta': {
    id: 648,
    bs: {hp: 100,at: 77,df: 77,sa: 128,sd: 128,sp: 90},
    abilities: ['Queenly Majesty','Competitive','Sage Power'],
    innates: ['Serene Grace','Inner Focus','Prankster'],
    otherFormes: ['Meloetta Pirouette'],
    weightkg: 65,
    types: ['Normal','Psychic'],
    genderR: 255
  },
  'Genesect': {
    id: 649,
    bs: {hp: 71,at: 120,df: 95,sa: 120,sd: 95,sp: 99},
    abilities: ['Download','Fatal Precision','Sighting System'],
    innates: ['Mega Launcher','Predator','Full Metal Body'],
    otherFormes: ['Genesect Douse Drive','Genesect Shock Drive','Genesect Burn Drive','Genesect Chill Drive'],
    weightkg: 825,
    types: ['Bug','Steel'],
    genderR: 255
  },
  'Chespin': {
    id: 650,
    bs: {hp: 56,at: 61,df: 65,sa: 48,sd: 45,sp: 38},
    abilities: ['Lets Roll','Stamina','Rough Skin'],
    innates: ['Overgrow','Shell Armor','Bulletproof'],
    nfe: true,
    weightkg: 90,
    types: ['Grass'],
    genderR: 127
  },
  'Quilladin': {
    id: 651,
    bs: {hp: 61,at: 78,df: 95,sa: 56,sd: 58,sp: 57},
    abilities: ['Lets Roll','Stamina','Rough Skin'],
    innates: ['Overgrow','Shell Armor','Bulletproof'],
    nfe: true,
    weightkg: 290,
    types: ['Grass'],
    genderR: 127
  },
  'Chesnaught': {
    id: 652,
    bs: {hp: 88,at: 107,df: 122,sa: 74,sd: 75,sp: 64},
    abilities: ['Lets Roll','Stamina','Bulletproof'],
    innates: ['Overgrow','Shell Armor','Loose Quills'],
    weightkg: 900,
    types: ['Grass','Fighting'],
    genderR: 127
  },
  'Fennekin': {
    id: 653,
    bs: {hp: 40,at: 45,df: 40,sa: 62,sd: 60,sp: 60},
    abilities: ['Immolate','Inner Focus','Magic Guard'],
    innates: ['Blaze','Pyromancy','Psychic Mind'],
    nfe: true,
    weightkg: 94,
    types: ['Fire'],
    genderR: 127
  },
  'Braixen': {
    id: 654,
    bs: {hp: 59,at: 59,df: 58,sa: 90,sd: 70,sp: 73},
    abilities: ['Immolate','Inner Focus','Magic Guard'],
    innates: ['Blaze','Pyromancy','Psychic Mind'],
    nfe: true,
    weightkg: 145,
    types: ['Fire'],
    genderR: 127
  },
  'Delphox': {
    id: 655,
    bs: {hp: 75,at: 69,df: 72,sa: 114,sd: 100,sp: 104},
    abilities: ['Immolate','Neuroforce','Magic Guard'],
    innates: ['Blaze','Pyromancy','Psychic Mind'],
    weightkg: 390,
    types: ['Fire','Psychic'],
    genderR: 127
  },
  'Froakie': {
    id: 656,
    bs: {hp: 41,at: 56,df: 40,sa: 62,sd: 44,sp: 71},
    abilities: ['Limber','Aerodynamics','Protean'],
    innates: ['Torrent','Skill Link','Long Reach'],
    nfe: true,
    weightkg: 70,
    types: ['Water'],
    genderR: 127
  },
  'Frogadier': {
    id: 657,
    bs: {hp: 54,at: 63,df: 52,sa: 83,sd: 56,sp: 97},
    abilities: ['Limber','Aerodynamics','Protean'],
    innates: ['Torrent','Skill Link','Long Reach'],
    nfe: true,
    weightkg: 109,
    types: ['Water'],
    genderR: 127
  },
  'Greninja': {
    id: 658,
    bs: {hp: 72,at: 95,df: 67,sa: 103,sd: 71,sp: 122},
    abilities: ['Fatal Precision','Speed Boost','Protean'],
    innates: ['Torrent','Skill Link','Long Reach'],
    otherFormes: ['Greninja Battle Bond','Greninja Ash'],
    weightkg: 400,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Bunnelby': {
    id: 659,
    bs: {hp: 38,at: 36,df: 38,sa: 32,sd: 36,sp: 57},
    abilities: ['Pickup','Tectonize','Cheek Pouch'],
    innates: ['Huge Power','Growing Tooth','Quick Feet'],
    nfe: true,
    weightkg: 50,
    types: ['Normal'],
    genderR: 127
  },
  'Diggersby': {
    id: 660,
    bs: {hp: 85,at: 56,df: 77,sa: 50,sd: 77,sp: 78},
    abilities: ['Pickup','Tectonize','Cheek Pouch'],
    innates: ['Huge Power','Growing Tooth','Sheer Force'],
    weightkg: 424,
    types: ['Normal','Ground'],
    genderR: 127
  },
  'Fletchling': {
    id: 661,
    bs: {hp: 45,at: 50,df: 43,sa: 40,sd: 38,sp: 62},
    abilities: ['Flame Body','None','Big Pecks'],
    innates: ['Flock','Keen Eye'],
    nfe: true,
    weightkg: 17,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Fletchinder': {
    id: 662,
    bs: {hp: 62,at: 73,df: 55,sa: 56,sd: 52,sp: 84},
    abilities: ['Flame Body','Speed Force','Big Pecks'],
    innates: ['Flock','Keen Eye'],
    nfe: true,
    weightkg: 160,
    types: ['Fire','Flying'],
    genderR: 127
  },
  'Talonflame': {
    id: 663,
    bs: {hp: 78,at: 81,df: 71,sa: 74,sd: 69,sp: 126},
    abilities: ['Predator','Speed Force','Big Pecks'],
    innates: ['Flock','Violent Rush','Gale Wings'],
    weightkg: 245,
    types: ['Fire','Flying'],
    genderR: 127
  },
  'Scatterbug': {
    id: 664,
    bs: {hp: 38,at: 35,df: 40,sa: 27,sd: 25,sp: 35},
    abilities: ['Friend Guard','None','None'],
    innates: ['Shield Dust','Compound Eyes'],
    nfe: true,
    weightkg: 25,
    types: ['Bug'],
    genderR: 127
  },
  'Spewpa': {
    id: 665,
    bs: {hp: 45,at: 22,df: 60,sa: 27,sd: 30,sp: 29},
    abilities: ['Battle Armor','None','None'],
    innates: ['Shield Dust','Compound Eyes','Shed Skin'],
    nfe: true,
    weightkg: 84,
    types: ['Bug'],
    genderR: 127
  },
  'Vivillon': {
    id: 666,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon Polar','Vivillon Tundra','Vivillon Continental','Vivillon Garden','Vivillon Elegant','Vivillon Meadow','Vivillon Modern','Vivillon Marine','Vivillon Archipelago','Vivillon High Plains','Vivillon Sandstorm','Vivillon River','Vivillon Monsoon','Vivillon Savanna','Vivillon Sun','Vivillon Ocean','Vivillon Jungle','Vivillon Fancy','Vivillon Poke Ball'],
    weightkg: 170,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Litleo': {
    id: 667,
    bs: {hp: 62,at: 50,df: 58,sa: 73,sd: 54,sp: 72},
    abilities: ['Unnerve','Competitive','Moxie'],
    innates: ['Rivalry'],
    nfe: true,
    weightkg: 135,
    types: ['Fire','Normal'],
    genderR: 221
  },
  'Pyroar': {
    id: 668,
    bs: {hp: 86,at: 68,df: 72,sa: 119,sd: 66,sp: 106},
    abilities: ['Intimidate','Competitive','Soul Heart'],
    innates: ['Rivalry','Opportunist','Predator'],
    weightkg: 815,
    types: ['Fire','Normal'],
    genderR: 221
  },
  'Flabebe': {
    id: 669,
    bs: {hp: 44,at: 38,df: 39,sa: 61,sd: 79,sp: 42},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Flabebe Yellow Flower','Flabebe Orange Flower','Flabebe Blue Flower','Flabebe White Flower'],
    nfe: true,
    weightkg: 1,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette': {
    id: 670,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette Yellow Flower','Floette Orange Flower','Floette Blue Flower','Floette White Flower','Floette Eternal Flower'],
    nfe: true,
    weightkg: 9,
    types: ['Fairy'],
    genderR: 254
  },
  'Florges': {
    id: 671,
    bs: {hp: 88,at: 55,df: 88,sa: 112,sd: 154,sp: 55},
    abilities: ['Harvest','Misty Surge','Fairy Aura'],
    innates: ['Natural Cure','Regenerator','Self Sufficient'],
    otherFormes: ['Florges Yellow Flower','Florges Orange Flower','Florges Blue Flower','Florges White Flower'],
    weightkg: 100,
    types: ['Fairy'],
    genderR: 254
  },
  'Skiddo': {
    id: 672,
    bs: {hp: 66,at: 65,df: 48,sa: 62,sd: 57,sp: 52},
    abilities: ['Grass Pelt','None','Chlorophyll'],
    innates: ['Sap Sipper','Mountaineer','Fur Coat'],
    nfe: true,
    weightkg: 310,
    types: ['Grass'],
    genderR: 127
  },
  'Gogoat': {
    id: 673,
    bs: {hp: 123,at: 100,df: 62,sa: 79,sd: 81,sp: 95},
    abilities: ['Grass Pelt','Violent Rush','Chlorophyll'],
    innates: ['Sap Sipper','Mountaineer','Fur Coat'],
    weightkg: 910,
    types: ['Grass'],
    genderR: 127
  },
  'Pancham': {
    id: 674,
    bs: {hp: 67,at: 82,df: 62,sa: 46,sd: 48,sp: 43},
    abilities: ['Iron Fist','Mold Breaker','None'],
    innates: ['Scrappy'],
    nfe: true,
    weightkg: 80,
    types: ['Fighting'],
    genderR: 127
  },
  'Pangoro': {
    id: 675,
    bs: {hp: 95,at: 124,df: 78,sa: 69,sd: 71,sp: 58},
    abilities: ['Iron Fist','Mold Breaker','Precise Fist'],
    innates: ['Scrappy','Anger Point','Hyper Aggressive'],
    weightkg: 1360,
    types: ['Fighting','Dark'],
    genderR: 127
  },
  'Furfrou': {
    id: 676,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou Heart Trim','Furfrou Star Trim','Furfrou Diamond Trim','Furfrou Debutante Trim','Furfrou Matron Trim','Furfrou Dandy Trim','Furfrou La Reine Trim','Furfrou Kabuki Trim','Furfrou Pharaoh Trim'],
    weightkg: 280,
    types: ['Normal'],
    genderR: 127
  },
  'Espurr': {
    id: 677,
    bs: {hp: 62,at: 48,df: 54,sa: 63,sd: 60,sp: 68},
    abilities: ['Infiltrator','None','None'],
    innates: ['Keen Eye','Own Tempo'],
    nfe: true,
    weightkg: 35,
    types: ['Psychic'],
    genderR: 127
  },
  'Meowstic': {
    id: 678,
    bs: {hp: 94,at: 48,df: 76,sa: 93,sd: 81,sp: 104},
    abilities: ['Infiltrator','Competitive','Sage Power'],
    innates: ['Psychic Mind','Psychic Surge','Soul Heart'],
    otherFormes: ['Meowstic Female'],
    weightkg: 85,
    types: ['Psychic'],
    genderR: 0
  },
  'Honedge': {
    id: 679,
    bs: {hp: 45,at: 80,df: 100,sa: 35,sd: 37,sp: 28},
    abilities: ['No Guard','None','None'],
    innates: ['Levitate','Keen Edge','Soul Eater'],
    nfe: true,
    weightkg: 20,
    types: ['Steel','Ghost'],
    genderR: 127
  },
  'Doublade': {
    id: 680,
    bs: {hp: 59,at: 110,df: 150,sa: 45,sd: 49,sp: 35},
    abilities: ['No Guard','None','None'],
    innates: ['Levitate','Keen Edge','Multi Headed'],
    nfe: true,
    weightkg: 45,
    types: ['Steel','Ghost'],
    genderR: 127
  },
  'Aegislash': {
    id: 681,
    bs: {hp: 60,at: 50,df: 140,sa: 50,sd: 140,sp: 60},
    abilities: ['Shadow Shield','Dragonslayer','Soul Eater'],
    innates: ['Levitate','Keen Edge','Stance Change'],
    otherFormes: ['Aegislash Blade'],
    weightkg: 530,
    types: ['Steel','Ghost'],
    genderR: 127
  },
  'Spritzee': {
    id: 682,
    bs: {hp: 78,at: 52,df: 60,sa: 63,sd: 65,sp: 23},
    abilities: ['Aroma Veil','Sweet Veil','None'],
    innates: ['Healer','Pixilate'],
    nfe: true,
    weightkg: 5,
    types: ['Fairy'],
    genderR: 127
  },
  'Aromatisse': {
    id: 683,
    bs: {hp: 101,at: 72,df: 72,sa: 99,sd: 89,sp: 29},
    abilities: ['Aroma Veil','Sweet Veil','Fairy Aura'],
    innates: ['Healer','Pixilate','Sweet Dreams'],
    weightkg: 155,
    types: ['Fairy'],
    genderR: 127
  },
  'Swirlix': {
    id: 684,
    bs: {hp: 62,at: 48,df: 66,sa: 59,sd: 57,sp: 49},
    abilities: ['Sweet Veil','None','Unburden'],
    innates: ['Gooey','Pixilate','Sticky Hold'],
    nfe: true,
    weightkg: 35,
    types: ['Fairy'],
    genderR: 127
  },
  'Slurpuff': {
    id: 685,
    bs: {hp: 82,at: 80,df: 86,sa: 85,sd: 75,sp: 72},
    abilities: ['Sweet Veil','None','Unburden'],
    innates: ['Gooey','Pixilate','Sticky Hold'],
    weightkg: 50,
    types: ['Fairy'],
    genderR: 127
  },
  'Inkay': {
    id: 686,
    bs: {hp: 53,at: 54,df: 53,sa: 37,sd: 46,sp: 45},
    abilities: ['Suction Cups','None','Infiltrator'],
    innates: ['Hypnotist','Contrary','Illuminate'],
    nfe: true,
    weightkg: 35,
    types: ['Dark','Psychic'],
    genderR: 127
  },
  'Malamar': {
    id: 687,
    bs: {hp: 86,at: 92,df: 88,sa: 68,sd: 75,sp: 73},
    abilities: ['Suction Cups','Contrary','Infiltrator'],
    innates: ['Hypnotist','Illuminate','Big Pecks'],
    weightkg: 470,
    types: ['Dark','Psychic'],
    genderR: 127
  },
  'Binacle': {
    id: 688,
    bs: {hp: 42,at: 52,df: 67,sa: 39,sd: 56,sp: 50},
    abilities: ['Pickpocket','Limber','Sand Force'],
    innates: ['Multi Headed','Tough Claws','Sniper'],
    nfe: true,
    weightkg: 310,
    types: ['Rock','Water'],
    genderR: 127
  },
  'Barbaracle': {
    id: 689,
    bs: {hp: 72,at: 105,df: 115,sa: 54,sd: 86,sp: 68},
    abilities: ['Pickpocket','Limber','Sand Force'],
    innates: ['Multi Headed','Tough Claws','Sniper'],
    weightkg: 960,
    types: ['Rock','Water'],
    genderR: 127
  },
  'Skrelp': {
    id: 690,
    bs: {hp: 50,at: 60,df: 60,sa: 60,sd: 60,sp: 30},
    abilities: ['Swift Swim','None','Propeller Tail'],
    innates: ['Adaptability','Poison Touch'],
    nfe: true,
    weightkg: 73,
    types: ['Poison','Water'],
    genderR: 127
  },
  'Dragalge': {
    id: 691,
    bs: {hp: 85,at: 97,df: 90,sa: 97,sd: 123,sp: 44},
    abilities: ['Swift Swim','Overwhelm','Contrary'],
    innates: ['Adaptability','Corrosion','Aquatic'],
    weightkg: 815,
    types: ['Poison','Dragon'],
    genderR: 127
  },
  'Clauncher': {
    id: 692,
    bs: {hp: 60,at: 53,df: 62,sa: 78,sd: 63,sp: 44},
    abilities: ['Multiscale','None','None'],
    innates: ['Swift Swim','Shell Armor','Mega Launcher'],
    nfe: true,
    weightkg: 83,
    types: ['Water'],
    genderR: 127
  },
  'Clawitzer': {
    id: 693,
    bs: {hp: 90,at: 73,df: 98,sa: 130,sd: 89,sp: 50},
    abilities: ['Multiscale','Rampage','Artillery'],
    innates: ['Hydrate','Shell Armor','Mega Launcher'],
    otherFormes: ['Clawitzer Redux'],
    weightkg: 353,
    types: ['Water'],
    genderR: 127
  },
  'Helioptile': {
    id: 694,
    bs: {hp: 44,at: 38,df: 33,sa: 61,sd: 43,sp: 70},
    abilities: ['Lightning Rod','None','Solar Power'],
    innates: ['Plus','Dry Skin','Sand Veil'],
    nfe: true,
    weightkg: 60,
    types: ['Electric','Normal'],
    genderR: 127
  },
  'Heliolisk': {
    id: 695,
    bs: {hp: 62,at: 55,df: 52,sa: 119,sd: 94,sp: 109},
    abilities: ['Lightning Rod','Plus','Solar Power'],
    innates: ['Dry Skin','Electrocytes','Sand Rush'],
    weightkg: 210,
    types: ['Electric','Normal'],
    genderR: 127
  },
  'Tyrunt': {
    id: 696,
    bs: {hp: 58,at: 89,df: 77,sa: 45,sd: 45,sp: 48},
    abilities: ['Predator','Rock Head','Rough Skin'],
    innates: ['Fossilized','Strong Jaw','Hyper Aggressive'],
    nfe: true,
    weightkg: 260,
    types: ['Rock','Dragon'],
    genderR: 30
  },
  'Tyrantrum': {
    id: 697,
    bs: {hp: 82,at: 121,df: 119,sa: 69,sd: 69,sp: 81},
    abilities: ['Predator','Juggernaut','Rough Skin'],
    innates: ['Rock Head','Strong Jaw','Hyper Aggressive'],
    weightkg: 2700,
    types: ['Rock','Dragon'],
    genderR: 30
  },
  'Amaura': {
    id: 698,
    bs: {hp: 77,at: 59,df: 50,sa: 67,sd: 63,sp: 46},
    abilities: ['Refrigerate','Solid Rock','Snow Warning'],
    innates: ['Fossilized','Primal Armor','Permafrost'],
    nfe: true,
    weightkg: 252,
    types: ['Rock','Ice'],
    genderR: 30
  },
  'Aurorus': {
    id: 699,
    bs: {hp: 123,at: 77,df: 72,sa: 119,sd: 92,sp: 58},
    abilities: ['Refrigerate','Solid Rock','Snow Warning'],
    innates: ['Primal Armor','Ice Body','Permafrost'],
    weightkg: 2250,
    types: ['Rock','Ice'],
    genderR: 30
  },
  'Sylveon': {
    id: 700,
    bs: {hp: 95,at: 65,df: 65,sa: 110,sd: 130,sp: 60},
    abilities: ['Fairy Aura','Serene Grace','Misty Surge'],
    innates: ['Pixilate','Dragonslayer','Opportunist'],
    weightkg: 235,
    types: ['Fairy'],
    genderR: 30
  },
  'Hawlucha': {
    id: 701,
    bs: {hp: 78,at: 92,df: 75,sa: 74,sd: 63,sp: 118},
    abilities: ['Unburden','Aerilate','Mold Breaker'],
    innates: ['Limber','No Guard','Aerodynamics'],
    weightkg: 215,
    types: ['Fighting','Flying'],
    genderR: 127
  },
  'Dedenne': {
    id: 702,
    bs: {hp: 67,at: 58,df: 57,sa: 101,sd: 87,sp: 101},
    abilities: ['Cheek Pouch','Galvanize','Pixilate'],
    innates: ['Minus','Electrocytes','Gluttony'],
    weightkg: 22,
    types: ['Electric','Fairy'],
    genderR: 127
  },
  'Carbink': {
    id: 703,
    bs: {hp: 50,at: 50,df: 150,sa: 50,sd: 150,sp: 50},
    abilities: ['Sturdy','Solid Rock','Power Spot'],
    innates: ['Clear Body','Impenetrable','Mountaineer'],
    weightkg: 57,
    types: ['Rock','Fairy'],
    genderR: 255
  },
  'Goomy': {
    id: 704,
    bs: {hp: 45,at: 50,df: 35,sa: 55,sd: 75,sp: 40},
    abilities: ['Sap Sipper','Gooey','None'],
    innates: ['Amphibious','Poison Heal','Hydrate'],
    nfe: true,
    weightkg: 28,
    types: ['Dragon'],
    genderR: 127
  },
  'Sliggoo': {
    id: 705,
    bs: {hp: 68,at: 75,df: 53,sa: 83,sd: 113,sp: 60},
    abilities: ['Sap Sipper','Gooey','Corrosion'],
    innates: ['Amphibious','Poison Heal','Sticky Hold'],
    nfe: true,
    weightkg: 175,
    types: ['Dragon'],
    genderR: 127
  },
  'Goodra': {
    id: 706,
    bs: {hp: 90,at: 100,df: 85,sa: 110,sd: 135,sp: 80},
    abilities: ['Sap Sipper','Gooey','Corrosion'],
    innates: ['Amphibious','Poison Heal','Hydrate'],
    weightkg: 1505,
    types: ['Dragon'],
    genderR: 127
  },
  'Klefki': {
    id: 707,
    bs: {hp: 57,at: 80,df: 91,sa: 80,sd: 87,sp: 75},
    abilities: ['Magic Guard','None','Magician'],
    innates: ['Prankster','Full Metal Body','Iron Barbs'],
    weightkg: 30,
    types: ['Steel','Fairy'],
    genderR: 127
  },
  'Phantump': {
    id: 708,
    bs: {hp: 43,at: 70,df: 48,sa: 50,sd: 60,sp: 38},
    abilities: ['Vengeance','Cursed Body','Grassy Surge'],
    innates: ['Natural Cure','Harvest','Haunted Spirit'],
    nfe: true,
    weightkg: 70,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Trevenant': {
    id: 709,
    bs: {hp: 85,at: 100,df: 86,sa: 65,sd: 92,sp: 56},
    abilities: ['Vengeance','Cursed Body','Grassy Surge'],
    innates: ['Tough Claws','Harvest','Haunted Spirit'],
    weightkg: 710,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Pumpkaboo': {
    id: 710,
    bs: {hp: 49,at: 44,df: 70,sa: 66,sd: 55,sp: 51},
    abilities: ['Frisk','Flare Boost','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Pumpkaboo Small','Pumpkaboo Large','Pumpkaboo Super'],
    nfe: true,
    weightkg: 50,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Gourgeist': {
    id: 711,
    bs: {hp: 65,at: 58,df: 122,sa: 90,sd: 75,sp: 84},
    abilities: ['Flare Boost','Harvest','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Gourgeist Small','Gourgeist Large','Gourgeist Super'],
    weightkg: 125,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Bergmite': {
    id: 712,
    bs: {hp: 55,at: 69,df: 85,sa: 32,sd: 55,sp: 28},
    abilities: ['Sturdy','Ice Body','Battle Armor'],
    innates: ['Permafrost','Impenetrable','Self Sufficient'],
    nfe: true,
    weightkg: 995,
    types: ['Ice'],
    genderR: 127
  },
  'Avalugg': {
    id: 713,
    bs: {hp: 95,at: 117,df: 184,sa: 44,sd: 86,sp: 28},
    abilities: ['Sturdy','Ice Body','Fort Knox'],
    innates: ['Permafrost','Impenetrable','Self Sufficient'],
    weightkg: 5050,
    types: ['Ice'],
    genderR: 127
  },
  'Noibat': {
    id: 714,
    bs: {hp: 50,at: 30,df: 45,sa: 75,sd: 50,sp: 95},
    abilities: ['Mountaineer','Infiltrator','None'],
    innates: ['Loud Bang','Hyper Aggressive','Nocturnal'],
    nfe: true,
    weightkg: 80,
    types: ['Flying','Dragon'],
    genderR: 127
  },
  'Noivern': {
    id: 715,
    bs: {hp: 85,at: 70,df: 80,sa: 97,sd: 80,sp: 123},
    abilities: ['Mountaineer','Infiltrator','Aerodynamics'],
    innates: ['Loud Bang','Nocturnal','Hyper Aggressive'],
    weightkg: 850,
    types: ['Flying','Dragon'],
    genderR: 127
  },
  'Xerneas': {
    id: 716,
    bs: {hp: 126,at: 131,df: 95,sa: 131,sd: 98,sp: 99},
    abilities: ['Pixilate','Competitive','Self Sufficient'],
    innates: ['Fairy Aura','Illuminate','Soul Heart'],
    otherFormes: ['Xerneas Active'],
    weightkg: 2150,
    types: ['Fairy'],
    genderR: 255
  },
  'Yveltal': {
    id: 717,
    bs: {hp: 126,at: 131,df: 95,sa: 131,sd: 98,sp: 99},
    abilities: ['Opportunist','Fae Hunter','Scare'],
    innates: ['Dark Aura','Air Blower','Giant Wings'],
    weightkg: 2030,
    types: ['Dark','Flying'],
    genderR: 255
  },
  'Zygarde': {
    id: 718,
    bs: {hp: 108,at: 100,df: 121,sa: 81,sd: 95,sp: 95},
    abilities: ['Aura Break','Regenerator','Power Construct'],
    innates: ['Primal Armor','Earthbound','Power Core'],
    otherFormes: ['Zygarde 10','Zygarde 10 Power Construct','Zygarde 50 Power Construct','Zygarde Complete'],
    weightkg: 3050,
    types: ['Dragon','Ground'],
    genderR: 255
  },
  'Diancie': {
    id: 719,
    bs: {hp: 50,at: 100,df: 150,sa: 100,sd: 150,sp: 50},
    abilities: ['Pixilate','Magic Guard','Regenerator'],
    innates: ['Clear Body','Levitate','Mountaineer'],
    otherFormes: ['Diancie Mega'],
    weightkg: 88,
    types: ['Rock','Fairy'],
    genderR: 255
  },
  'Hoopa': {
    id: 720,
    bs: {hp: 80,at: 110,df: 60,sa: 150,sd: 130,sp: 70},
    abilities: ['Mystic Power','Illusion','Twisted Dimension'],
    innates: ['Prankster','Vengeance','Hypnotist'],
    otherFormes: ['Hoopa Unbound'],
    weightkg: 90,
    types: ['Psychic','Ghost'],
    genderR: 255
  },
  'Volcanion': {
    id: 721,
    bs: {hp: 80,at: 110,df: 120,sa: 130,sd: 90,sp: 70},
    abilities: ['Drizzle','Drought','Mountaineer'],
    innates: ['Artillery','Storm Drain','Flash Fire'],
    weightkg: 1950,
    types: ['Fire','Water'],
    genderR: 255
  },
  'Rowlet': {
    id: 722,
    bs: {hp: 68,at: 55,df: 55,sa: 50,sd: 50,sp: 42},
    abilities: ['Sniper','Serene Grace','Super Luck'],
    innates: ['Overgrow','Nocturnal','Chlorophyll'],
    nfe: true,
    weightkg: 15,
    types: ['Grass','Flying'],
    genderR: 127
  },
  'Dartrix': {
    id: 723,
    bs: {hp: 78,at: 75,df: 75,sa: 70,sd: 70,sp: 52},
    abilities: ['Sniper','Serene Grace','Super Luck'],
    innates: ['Overgrow','Fatal Precision','Keen Edge'],
    nfe: true,
    weightkg: 160,
    types: ['Grass','Flying'],
    genderR: 127
  },
  'Decidueye': {
    id: 724,
    bs: {hp: 78,at: 107,df: 75,sa: 70,sd: 90,sp: 110},
    abilities: ['Sniper','Keen Edge','Opportunist'],
    innates: ['Overgrow','Deadeye','Long Reach'],
    weightkg: 366,
    types: ['Grass','Ghost'],
    genderR: 127
  },
  'Litten': {
    id: 725,
    bs: {hp: 45,at: 65,df: 40,sa: 60,sd: 40,sp: 70},
    abilities: ['Bad Luck','Moody','Intimidate'],
    innates: ['Blaze','Flame Body'],
    nfe: true,
    weightkg: 43,
    types: ['Fire'],
    genderR: 127
  },
  'Torracat': {
    id: 726,
    bs: {hp: 65,at: 85,df: 50,sa: 80,sd: 50,sp: 90},
    abilities: ['Bad Luck','Moody','Intimidate'],
    innates: ['Blaze','Flame Body','Striker'],
    nfe: true,
    weightkg: 250,
    types: ['Fire'],
    genderR: 127
  },
  'Incineroar': {
    id: 727,
    bs: {hp: 95,at: 115,df: 90,sa: 80,sd: 90,sp: 60},
    abilities: ['Hyper Aggressive','Anger Point','Intimidate'],
    innates: ['Blaze','Iron Fist','Striker'],
    weightkg: 830,
    types: ['Fire','Dark'],
    genderR: 127
  },
  'Popplio': {
    id: 728,
    bs: {hp: 50,at: 54,df: 54,sa: 66,sd: 56,sp: 40},
    abilities: ['Cute Charm','Pixilate','Prankster'],
    innates: ['Torrent','Serene Grace','Dancer'],
    nfe: true,
    weightkg: 75,
    types: ['Water'],
    genderR: 127
  },
  'Brionne': {
    id: 729,
    bs: {hp: 60,at: 69,df: 69,sa: 91,sd: 81,sp: 50},
    abilities: ['Competitive','Amplifier','Prankster'],
    innates: ['Torrent','Pixilate','Dancer'],
    nfe: true,
    weightkg: 175,
    types: ['Water'],
    genderR: 127
  },
  'Primarina': {
    id: 730,
    bs: {hp: 80,at: 74,df: 74,sa: 126,sd: 116,sp: 60},
    abilities: ['Competitive','Amplifier','Prankster'],
    innates: ['Torrent','Liquid Voice','Serene Grace'],
    weightkg: 440,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Pikipek': {
    id: 731,
    bs: {hp: 35,at: 75,df: 30,sa: 30,sd: 30,sp: 65},
    abilities: ['Pickup','Gluttony','Sheer Force'],
    innates: ['Flock','Keen Eye','Skill Link'],
    nfe: true,
    weightkg: 12,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Trumbeak': {
    id: 732,
    bs: {hp: 55,at: 85,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Pickup','Super Luck','Sheer Force'],
    innates: ['Flock','Keen Eye','Skill Link'],
    nfe: true,
    weightkg: 148,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Toucannon': {
    id: 733,
    bs: {hp: 80,at: 120,df: 95,sa: 75,sd: 95,sp: 60},
    abilities: ['Immolate','Super Luck','Sheer Force'],
    innates: ['Flock','Keen Eye','Skill Link'],
    weightkg: 260,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Yungoos': {
    id: 734,
    bs: {hp: 48,at: 70,df: 30,sa: 30,sd: 30,sp: 45},
    abilities: ['Ambush','Hustle','Opportunist'],
    innates: ['Stakeout','Strong Jaw','Predator'],
    nfe: true,
    weightkg: 60,
    types: ['Normal'],
    genderR: 127
  },
  'Gumshoos': {
    id: 735,
    bs: {hp: 88,at: 110,df: 80,sa: 55,sd: 80,sp: 45},
    abilities: ['Ambush','Analytic','Opportunist'],
    innates: ['Stakeout','Strong Jaw','Predator'],
    weightkg: 142,
    types: ['Normal'],
    genderR: 127
  },
  'Grubbin': {
    id: 736,
    bs: {hp: 47,at: 62,df: 45,sa: 55,sd: 45,sp: 46},
    abilities: ['Pickup','None','None'],
    innates: ['Swarm','Sap Sipper'],
    nfe: true,
    weightkg: 44,
    types: ['Bug'],
    genderR: 127
  },
  'Charjabug': {
    id: 737,
    bs: {hp: 57,at: 102,df: 95,sa: 55,sd: 75,sp: 36},
    abilities: ['Shell Armor','Galvanize','None'],
    innates: ['Swarm','Battery','Minus'],
    nfe: true,
    weightkg: 105,
    types: ['Bug','Electric'],
    genderR: 127
  },
  'Vikavolt': {
    id: 738,
    bs: {hp: 77,at: 95,df: 99,sa: 145,sd: 75,sp: 109},
    abilities: ['Speed Boost','Aerodynamics','Overcharge'],
    innates: ['Swarm','Levitate','Electrocytes'],
    weightkg: 450,
    types: ['Bug','Electric'],
    genderR: 127
  },
  'Crabrawler': {
    id: 739,
    bs: {hp: 47,at: 82,df: 57,sa: 42,sd: 47,sp: 63},
    abilities: ['Hyper Cutter','Iron Fist','Defiant'],
    innates: ['Grip Pincer','Anger Point','Moxie'],
    nfe: true,
    weightkg: 70,
    types: ['Fighting'],
    genderR: 127
  },
  'Crabominable': {
    id: 740,
    bs: {hp: 97,at: 132,df: 97,sa: 62,sd: 87,sp: 43},
    abilities: ['Hyper Cutter','Iron Fist','Raging Boxer'],
    innates: ['Grip Pincer','Anger Point','Permafrost'],
    weightkg: 1800,
    types: ['Fighting','Ice'],
    genderR: 127
  },
  'Oricorio': {
    id: 741,
    bs: {hp: 75,at: 70,df: 70,sa: 108,sd: 70,sp: 103},
    abilities: ['Dancer','Dancer','Dancer'],
    innates: ['Keen Eye','Flash Fire','Flock'],
    otherFormes: ['Oricorio Pom Pom','Oricorio Pau','Oricorio Sensu'],
    weightkg: 34,
    types: ['Fire','Flying'],
    genderR: 191
  },
  'Cutiefly': {
    id: 742,
    bs: {hp: 40,at: 45,df: 40,sa: 55,sd: 40,sp: 84},
    abilities: ['Run Away','Cute Charm','Sweet Veil'],
    innates: ['Levitate','Shield Dust','Effect Spore'],
    nfe: true,
    weightkg: 2,
    types: ['Bug','Fairy'],
    genderR: 127
  },
  'Ribombee': {
    id: 743,
    bs: {hp: 60,at: 55,df: 60,sa: 95,sd: 70,sp: 124},
    abilities: ['Compound Eyes','Cute Charm','Sweet Veil'],
    innates: ['Levitate','Shield Dust','Effect Spore'],
    weightkg: 5,
    types: ['Bug','Fairy'],
    genderR: 127
  },
  'Rockruff': {
    id: 744,
    bs: {hp: 45,at: 65,df: 40,sa: 30,sd: 40,sp: 60},
    abilities: ['Steadfast','Vital Spirit','Own Tempo'],
    innates: ['Keen Eye','Opportunist','Rock Head'],
    otherFormes: ['Rockruff Own Tempo'],
    nfe: true,
    weightkg: 92,
    types: ['Rock'],
    genderR: 127
  },
  'Lycanroc': {
    id: 745,
    bs: {hp: 75,at: 115,df: 65,sa: 55,sd: 65,sp: 112},
    abilities: ['Speed Force','Fatal Precision','Violent Rush'],
    innates: ['Opportunist','Sand Rush','Rock Head'],
    otherFormes: ['Lycanroc Midnight','Lycanroc Dusk'],
    weightkg: 250,
    types: ['Rock','Ground'],
    genderR: 127
  },
  'Wishiwashi': {
    id: 746,
    bs: {hp: 45,at: 20,df: 20,sa: 25,sd: 25,sp: 40},
    abilities: ['Schooling','Schooling','Schooling'],
    innates: ['Water Veil','Regenerator','Multiscale'],
    otherFormes: ['Wishiwashi School'],
    weightkg: 3,
    types: ['Water'],
    genderR: 127
  },
  'Mareanie': {
    id: 747,
    bs: {hp: 60,at: 53,df: 62,sa: 43,sd: 52,sp: 45},
    abilities: ['Looter','Limber','Toxic Debris'],
    innates: ['Poison Point','Regenerator','Rough Skin'],
    nfe: true,
    weightkg: 80,
    types: ['Poison','Water'],
    genderR: 127
  },
  'Toxapex': {
    id: 748,
    bs: {hp: 75,at: 63,df: 152,sa: 53,sd: 142,sp: 35},
    abilities: ['Battle Armor','Fort Knox','Toxic Debris'],
    innates: ['Poison Touch','Regenerator','Rough Skin'],
    weightkg: 145,
    types: ['Poison','Water'],
    genderR: 127
  },
  'Mudbray': {
    id: 749,
    bs: {hp: 70,at: 100,df: 70,sa: 45,sd: 55,sp: 45},
    abilities: ['Own Tempo','Striker','Sheer Force'],
    innates: ['Stamina'],
    nfe: true,
    weightkg: 1100,
    types: ['Ground'],
    genderR: 127
  },
  'Mudsdale': {
    id: 750,
    bs: {hp: 100,at: 125,df: 100,sa: 55,sd: 85,sp: 35},
    abilities: ['Own Tempo','Striker','Sheer Force'],
    innates: ['Stamina','Battle Armor','Water Compaction'],
    weightkg: 9200,
    types: ['Ground'],
    genderR: 127
  },
  'Dewpider': {
    id: 751,
    bs: {hp: 38,at: 40,df: 52,sa: 40,sd: 72,sp: 27},
    abilities: ['Water Bubble','Water Bubble','Water Bubble'],
    innates: ['Water Absorb','Spider Lair'],
    nfe: true,
    weightkg: 40,
    types: ['Water','Bug'],
    genderR: 127
  },
  'Araquanid': {
    id: 752,
    bs: {hp: 68,at: 90,df: 92,sa: 50,sd: 132,sp: 42},
    abilities: ['Water Veil','Opportunist','Water Absorb'],
    innates: ['Water Bubble','Spider Lair','Predator'],
    weightkg: 820,
    types: ['Water','Bug'],
    genderR: 127
  },
  'Fomantis': {
    id: 753,
    bs: {hp: 40,at: 55,df: 35,sa: 50,sd: 35,sp: 35},
    abilities: ['Keen Edge','Leaf Guard','Contrary'],
    innates: ['Chlorophyll','Opportunist'],
    nfe: true,
    weightkg: 15,
    types: ['Grass','Bug'],
    genderR: 127
  },
  'Lurantis': {
    id: 754,
    bs: {hp: 70,at: 105,df: 90,sa: 80,sd: 90,sp: 45},
    abilities: ['Keen Edge','Chloroplast','Contrary'],
    innates: ['Chlorophyll','Opportunist','Hyper Cutter'],
    weightkg: 185,
    types: ['Grass','Bug'],
    genderR: 127
  },
  'Morelull': {
    id: 755,
    bs: {hp: 40,at: 35,df: 55,sa: 65,sd: 75,sp: 15},
    abilities: ['Rain Dish','None','Natural Cure'],
    innates: ['Effect Spore','Dry Skin','Illuminate'],
    nfe: true,
    weightkg: 15,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Shiinotic': {
    id: 756,
    bs: {hp: 60,at: 45,df: 80,sa: 90,sd: 100,sp: 30},
    abilities: ['Dreamcatcher','Twisted Dimension','Poison Heal'],
    innates: ['Poison Absorb','Fairy Aura','Bad Dreams'],
    weightkg: 115,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Salandit': {
    id: 757,
    bs: {hp: 48,at: 44,df: 40,sa: 71,sd: 40,sp: 77},
    abilities: ['Poison Absorb','Competitive','Exploit Weakness'],
    innates: ['Corrosion','Poison Touch'],
    nfe: true,
    weightkg: 48,
    types: ['Poison','Fire'],
    genderR: 254
  },
  'Salazzle': {
    id: 758,
    bs: {hp: 68,at: 64,df: 60,sa: 111,sd: 60,sp: 117},
    abilities: ['Merciless','Competitive','Exploit Weakness'],
    innates: ['Corrosion','Queenly Majesty','Half Drake'],
    weightkg: 222,
    types: ['Poison','Fire'],
    genderR: 254
  },
  'Stufful': {
    id: 759,
    bs: {hp: 70,at: 75,df: 50,sa: 45,sd: 50,sp: 50},
    abilities: ['Cute Charm','Unaware','Sheer Force'],
    innates: ['Fluffy','Guts'],
    nfe: true,
    weightkg: 68,
    types: ['Normal','Fighting'],
    genderR: 127
  },
  'Bewear': {
    id: 760,
    bs: {hp: 120,at: 125,df: 80,sa: 55,sd: 60,sp: 60},
    abilities: ['Unnerve','Unaware','Sheer Force'],
    innates: ['Fluffy','Guts','Discipline'],
    weightkg: 1350,
    types: ['Normal','Fighting'],
    genderR: 127
  },
  'Bounsweet': {
    id: 761,
    bs: {hp: 42,at: 30,df: 38,sa: 30,sd: 38,sp: 32},
    abilities: ['Oblivious','None','Sweet Veil'],
    innates: ['Leaf Guard'],
    nfe: true,
    weightkg: 32,
    types: ['Grass'],
    genderR: 254
  },
  'Steenee': {
    id: 762,
    bs: {hp: 52,at: 40,df: 48,sa: 40,sd: 48,sp: 62},
    abilities: ['Oblivious','None','Sweet Veil'],
    innates: ['Leaf Guard','Reckless'],
    nfe: true,
    weightkg: 82,
    types: ['Grass'],
    genderR: 254
  },
  'Tsareena': {
    id: 763,
    bs: {hp: 72,at: 120,df: 90,sa: 50,sd: 90,sp: 108},
    abilities: ['Oblivious','Hyper Aggressive','Sweet Veil'],
    innates: ['Looter','Striker','Queenly Majesty'],
    weightkg: 214,
    types: ['Grass','Fighting'],
    genderR: 254
  },
  'Comfey': {
    id: 764,
    bs: {hp: 51,at: 52,df: 90,sa: 82,sd: 110,sp: 100},
    abilities: ['Flower Veil','Triage','Grassy Surge'],
    innates: ['Natural Cure','Healer','Regenerator'],
    weightkg: 3,
    types: ['Fairy'],
    genderR: 191
  },
  'Oranguru': {
    id: 765,
    bs: {hp: 90,at: 60,df: 80,sa: 90,sd: 110,sp: 60},
    abilities: ['Friend Guard','Sage Power','Twisted Dimension'],
    innates: ['Inner Focus','Psychic Mind','Healer'],
    weightkg: 760,
    types: ['Normal','Psychic'],
    genderR: 127
  },
  'Passimian': {
    id: 766,
    bs: {hp: 100,at: 120,df: 90,sa: 40,sd: 60,sp: 80},
    abilities: ['Receiver','Opportunist','Unburden'],
    innates: ['Harvest','Avenger','Defiant'],
    weightkg: 828,
    types: ['Fighting'],
    genderR: 127
  },
  'Wimpod': {
    id: 767,
    bs: {hp: 25,at: 35,df: 40,sa: 20,sd: 30,sp: 80},
    abilities: ['Wimp Out','None','Run Away'],
    innates: ['Shell Armor','Coward','Looter'],
    nfe: true,
    weightkg: 120,
    types: ['Bug','Water'],
    genderR: 127
  },
  'Golisopod': {
    id: 768,
    bs: {hp: 75,at: 125,df: 140,sa: 60,sd: 90,sp: 40},
    abilities: ['Emergency Exit','Tough Claws','Predator'],
    innates: ['Shell Armor','Coward','Hyper Cutter'],
    weightkg: 1080,
    types: ['Bug','Water'],
    genderR: 127
  },
  'Sandygast': {
    id: 769,
    bs: {hp: 55,at: 55,df: 80,sa: 70,sd: 45,sp: 15},
    abilities: ['Fort Knox','Arena Trap','Sand Stream'],
    innates: ['Water Compaction','Sand Force','Sand Veil'],
    nfe: true,
    weightkg: 700,
    types: ['Ghost','Ground'],
    genderR: 127
  },
  'Palossand': {
    id: 770,
    bs: {hp: 85,at: 75,df: 120,sa: 100,sd: 85,sp: 35},
    abilities: ['Fort Knox','Arena Trap','Sand Stream'],
    innates: ['Water Compaction','Sand Force','Self Sufficient'],
    weightkg: 2500,
    types: ['Ghost','Ground'],
    genderR: 127
  },
  'Pyukumuku': {
    id: 771,
    bs: {hp: 55,at: 60,df: 130,sa: 30,sd: 130,sp: 5},
    abilities: ['Corrosion','Innards Out','Triage'],
    innates: ['Unaware','Pressure','Perish Body'],
    weightkg: 12,
    types: ['Water'],
    genderR: 127
  },
  'Type Null': {
    id: 772,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 59},
    abilities: ['Adaptability','None','None'],
    innates: ['Battle Armor'],
    nfe: true,
    weightkg: 1205,
    types: ['Normal'],
    genderR: 255
  },
  'Silvally': {
    id: 773,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Protean','Unaware'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally Fighting','Silvally Flying','Silvally Poison','Silvally Ground','Silvally Rock','Silvally Bug','Silvally Ghost','Silvally Steel','Silvally Fire','Silvally Water','Silvally Grass','Silvally Electric','Silvally Psychic','Silvally Ice','Silvally Dragon','Silvally Dark','Silvally Fairy'],
    weightkg: 1005,
    types: ['Normal'],
    genderR: 255
  },
  'Minior': {
    id: 774,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior Meteor Orange','Minior Meteor Yellow','Minior Meteor Green','Minior Meteor Blue','Minior Meteor Indigo','Minior Meteor Violet','Minior Core Red','Minior Core Orange','Minior Core Yellow','Minior Core Green','Minior Core Blue','Minior Core Indigo','Minior Core Violet'],
    weightkg: 400,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Komala': {
    id: 775,
    bs: {hp: 65,at: 115,df: 95,sa: 55,sd: 95,sp: 65},
    abilities: ['Sweet Dreams','Prankster','Scrappy'],
    innates: ['Comatose','Poison Absorb','Sap Sipper'],
    weightkg: 199,
    types: ['Normal'],
    genderR: 127
  },
  'Turtonator': {
    id: 776,
    bs: {hp: 60,at: 78,df: 135,sa: 111,sd: 85,sp: 36},
    abilities: ['Flame Body','Filter','Aftermath'],
    innates: ['Shell Armor','Iron Barbs','Dauntless Shield'],
    weightkg: 2120,
    types: ['Fire','Dragon'],
    genderR: 127
  },
  'Togedemaru': {
    id: 777,
    bs: {hp: 65,at: 108,df: 83,sa: 40,sd: 73,sp: 106},
    abilities: ['Sturdy','Lead Coat','Impenetrable'],
    innates: ['Iron Barbs','Lightning Rod','Loose Quills'],
    weightkg: 33,
    types: ['Electric','Steel'],
    genderR: 127
  },
  'Mimikyu': {
    id: 778,
    bs: {hp: 55,at: 90,df: 80,sa: 50,sd: 105,sp: 96},
    abilities: ['Disguise','Disguise','Disguise'],
    innates: ['Vengeance','Avenger','Haunted Spirit'],
    otherFormes: ['Mimikyu Busted'],
    weightkg: 7,
    types: ['Ghost','Fairy'],
    genderR: 127
  },
  'Bruxish': {
    id: 779,
    bs: {hp: 68,at: 105,df: 70,sa: 70,sd: 70,sp: 92},
    abilities: ['Dazzling','Defiant','Predator'],
    innates: ['Strong Jaw','Wonder Skin','Psychic Mind'],
    weightkg: 190,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Drampa': {
    id: 780,
    bs: {hp: 78,at: 60,df: 90,sa: 135,sd: 106,sp: 36},
    abilities: ['Berserk','Huge Power','Friend Guard'],
    innates: ['Avenger','Rampage','Fluffy'],
    weightkg: 1850,
    types: ['Normal','Dragon'],
    genderR: 127
  },
  'Dhelmise': {
    id: 781,
    bs: {hp: 70,at: 131,df: 120,sa: 76,sd: 90,sp: 40},
    abilities: ['Water Absorb','Soul Eater','Sheer Force'],
    innates: ['Metallic','Seaweed','Steelworker'],
    weightkg: 2100,
    types: ['Ghost','Grass'],
    genderR: 255
  },
  'Jangmo O': {
    id: 782,
    bs: {hp: 45,at: 55,df: 65,sa: 45,sd: 45,sp: 45},
    abilities: ['Bulletproof','Soundproof','Rough Skin'],
    innates: ['Overcoat','Battle Armor','Mountaineer'],
    nfe: true,
    weightkg: 297,
    types: ['Dragon'],
    genderR: 127
  },
  'Hakamo O': {
    id: 783,
    bs: {hp: 55,at: 75,df: 90,sa: 65,sd: 70,sp: 65},
    abilities: ['Bulletproof','Soundproof','Rough Skin'],
    innates: ['Overcoat','Battle Armor','Mountaineer'],
    nfe: true,
    weightkg: 470,
    types: ['Dragon','Fighting'],
    genderR: 127
  },
  'Kommo O': {
    id: 784,
    bs: {hp: 75,at: 110,df: 125,sa: 100,sd: 105,sp: 85},
    abilities: ['Bulletproof','Soundproof','Rough Skin'],
    innates: ['Prism Scales','Battle Armor','Prism Armor'],
    weightkg: 782,
    types: ['Dragon','Fighting'],
    genderR: 127
  },
  'Tapu Koko': {
    id: 785,
    bs: {hp: 70,at: 115,df: 85,sa: 95,sd: 75,sp: 130},
    abilities: ['Speed Boost','Electric Burst','Overcharge'],
    innates: ['Levitate','Electric Surge','Drizzle'],
    weightkg: 205,
    types: ['Electric','Fairy'],
    genderR: 255
  },
  'Tapu Lele': {
    id: 786,
    bs: {hp: 70,at: 85,df: 75,sa: 130,sd: 115,sp: 95},
    abilities: ['Prism Scales','Unaware','Majestic Moth'],
    innates: ['Berserk','Psychic Surge','Multiscale'],
    weightkg: 186,
    types: ['Psychic','Fairy'],
    genderR: 255
  },
  'Tapu Bulu': {
    id: 787,
    bs: {hp: 70,at: 130,df: 115,sa: 85,sd: 95,sp: 75},
    abilities: ['Grass Pelt','Chloroplast','Harvest'],
    innates: ['Mighty Horn','Grassy Surge','Regenerator'],
    weightkg: 455,
    types: ['Grass','Fairy'],
    genderR: 255
  },
  'Tapu Fini': {
    id: 788,
    bs: {hp: 70,at: 75,df: 115,sa: 95,sd: 130,sp: 85},
    abilities: ['Water Veil','Regenerator','Drizzle'],
    innates: ['Avenger','Misty Surge','Shell Armor'],
    weightkg: 212,
    types: ['Water','Fairy'],
    genderR: 255
  },
  'Cosmog': {
    id: 789,
    bs: {hp: 43,at: 29,df: 31,sa: 29,sd: 31,sp: 37},
    abilities: ['Unaware','Unaware','Unaware'],
    innates: ['Levitate'],
    nfe: true,
    weightkg: 1,
    types: ['Psychic'],
    genderR: 255
  },
  'Cosmoem': {
    id: 790,
    bs: {hp: 43,at: 29,df: 131,sa: 29,sd: 131,sp: 37},
    abilities: ['Sturdy','Sturdy','Sturdy'],
    innates: ['Levitate','Power Core','Shell Armor'],
    nfe: true,
    weightkg: 9999,
    types: ['Psychic'],
    genderR: 255
  },
  'Solgaleo': {
    id: 791,
    bs: {hp: 137,at: 137,df: 107,sa: 113,sd: 89,sp: 97},
    abilities: ['Illuminate','None','None'],
    innates: ['Solar Flare','Full Metal Body','Prism Armor'],
    weightkg: 2300,
    types: ['Psychic','Steel'],
    genderR: 255
  },
  'Lunala': {
    id: 792,
    bs: {hp: 137,at: 113,df: 89,sa: 137,sd: 107,sp: 97},
    abilities: ['Nocturnal','None','None'],
    innates: ['Lunar Eclipse','Shadow Shield','Dreamcatcher'],
    weightkg: 1200,
    types: ['Psychic','Ghost'],
    genderR: 255
  },
  'Nihilego': {
    id: 793,
    bs: {hp: 109,at: 53,df: 47,sa: 127,sd: 131,sp: 103},
    abilities: ['Rough Skin','Corrosion','Soul Eater'],
    innates: ['Beast Boost','Poison Touch','Hyper Aggressive'],
    weightkg: 555,
    types: ['Rock','Poison'],
    genderR: 255
  },
  'Buzzwole': {
    id: 794,
    bs: {hp: 107,at: 139,df: 139,sa: 53,sd: 53,sp: 79},
    abilities: ['Sheer Force','Compound Eyes','Defiant'],
    innates: ['Beast Boost','Iron Fist','Raging Boxer'],
    weightkg: 3336,
    types: ['Bug','Fighting'],
    genderR: 255
  },
  'Pheromosa': {
    id: 795,
    bs: {hp: 71,at: 137,df: 37,sa: 137,sd: 37,sp: 151},
    abilities: ['Limber','Speed Force','Fatal Precision'],
    innates: ['Beast Boost','Speed Boost','Striker'],
    weightkg: 250,
    types: ['Bug','Fighting'],
    genderR: 255
  },
  'Xurkitree': {
    id: 796,
    bs: {hp: 83,at: 89,df: 71,sa: 173,sd: 71,sp: 83},
    abilities: ['Electrocytes','Lightning Rod','Ground Shock'],
    innates: ['Beast Boost','Illuminate','Infiltrator'],
    weightkg: 1000,
    types: ['Electric'],
    genderR: 255
  },
  'Celesteela': {
    id: 797,
    bs: {hp: 97,at: 101,df: 103,sa: 107,sd: 101,sp: 61},
    abilities: ['Clear Body','Mirror Armor','Self Repair'],
    innates: ['Beast Boost','Battle Armor','Lead Coat'],
    weightkg: 9999,
    types: ['Steel','Flying'],
    genderR: 255
  },
  'Kartana': {
    id: 798,
    bs: {hp: 59,at: 181,df: 131,sa: 59,sd: 31,sp: 109},
    abilities: ['Keen Edge','Aerodynamics','Violent Rush'],
    innates: ['Beast Boost','Hyper Cutter','Deadeye'],
    weightkg: 1,
    types: ['Grass','Steel'],
    genderR: 255
  },
  'Guzzlord': {
    id: 799,
    bs: {hp: 223,at: 101,df: 53,sa: 97,sd: 53,sp: 43},
    abilities: ['Intimidate','Strong Jaw','Jaws Of Carnage'],
    innates: ['Beast Boost','Thick Fat','Grip Pincer'],
    weightkg: 8880,
    types: ['Dark','Dragon'],
    genderR: 255
  },
  'Necrozma': {
    id: 800,
    bs: {hp: 97,at: 107,df: 101,sa: 127,sd: 89,sp: 79},
    abilities: ['Neuroforce','Rampage','Mega Launcher'],
    innates: ['Prism Armor','Metallic','Filter'],
    otherFormes: ['Necrozma Dusk Mane','Necrozma Dawn Wings','Necrozma Ultra'],
    weightkg: 2300,
    types: ['Psychic'],
    genderR: 255
  },
  'Magearna': {
    id: 801,
    bs: {hp: 80,at: 95,df: 115,sa: 130,sd: 115,sp: 65},
    abilities: ['Steelworker','Pixilate','Mirror Armor'],
    innates: ['Clear Body','Soul Heart','Power Core'],
    otherFormes: ['Magearna Original Color'],
    weightkg: 805,
    types: ['Steel','Fairy'],
    genderR: 255
  },
  'Marshadow': {
    id: 802,
    bs: {hp: 90,at: 125,df: 80,sa: 90,sd: 90,sp: 125},
    abilities: ['Technician','Opportunist','Fatal Precision'],
    innates: ['Iron Fist','Precise Fist','Cursed Body'],
    weightkg: 222,
    types: ['Fighting','Ghost'],
    genderR: 255
  },
  'Poipole': {
    id: 803,
    bs: {hp: 67,at: 73,df: 67,sa: 73,sd: 67,sp: 73},
    abilities: ['Poison Point','None','None'],
    innates: ['Beast Boost','Levitate','Analytic'],
    nfe: true,
    weightkg: 18,
    types: ['Poison'],
    genderR: 255
  },
  'Naganadel': {
    id: 804,
    bs: {hp: 73,at: 73,df: 73,sa: 127,sd: 73,sp: 121},
    abilities: ['Corrosion','Sniper','Spider Lair'],
    innates: ['Beast Boost','Levitate','Merciless'],
    weightkg: 1500,
    types: ['Poison','Dragon'],
    genderR: 255
  },
  'Stakataka': {
    id: 805,
    bs: {hp: 61,at: 131,df: 211,sa: 53,sd: 101,sp: 13},
    abilities: ['Solid Rock','Sturdy','Juggernaut'],
    innates: ['Beast Boost','Lead Coat','Fort Knox'],
    weightkg: 8200,
    types: ['Rock','Steel'],
    genderR: 255
  },
  'Blacephalon': {
    id: 806,
    bs: {hp: 53,at: 127,df: 53,sa: 151,sd: 79,sp: 107},
    abilities: ['Pyromancy','Cursed Body','Prankster'],
    innates: ['Beast Boost','Vengeance','Aftermath'],
    weightkg: 130,
    types: ['Fire','Ghost'],
    genderR: 255
  },
  'Zeraora': {
    id: 807,
    bs: {hp: 88,at: 112,df: 75,sa: 102,sd: 80,sp: 143},
    abilities: ['Iron Fist','Power Fists','Speed Boost'],
    innates: ['Speed Force','Volt Absorb','Tough Claws'],
    weightkg: 445,
    types: ['Electric'],
    genderR: 255
  },
  'Meltan': {
    id: 808,
    bs: {hp: 46,at: 65,df: 65,sa: 55,sd: 35,sp: 34},
    abilities: ['Magnet Pull','None','None'],
    innates: ['Sturdy','Galvanize'],
    nfe: true,
    weightkg: 80,
    types: ['Steel'],
    genderR: 255
  },
  'Melmetal': {
    id: 809,
    bs: {hp: 135,at: 143,df: 143,sa: 80,sd: 65,sp: 34},
    abilities: ['Iron Fist','Steelworker','Stamina'],
    innates: ['Magnet Pull','Galvanize','Juggernaut'],
    weightkg: 800,
    types: ['Steel'],
    genderR: 255
  },
  'Grookey': {
    id: 1309,
    bs: {hp: 50,at: 65,df: 50,sa: 40,sd: 40,sp: 65},
    abilities: ['Grassy Surge','Intimidate','None'],
    innates: ['Overgrow','Soundproof','Violent Rush'],
    nfe: true,
    weightkg: 50,
    types: ['Grass'],
    genderR: 30
  },
  'Thwackey': {
    id: 1310,
    bs: {hp: 70,at: 85,df: 70,sa: 55,sd: 60,sp: 80},
    abilities: ['Grassy Surge','Intimidate','None'],
    innates: ['Overgrow','Soundproof','Violent Rush'],
    nfe: true,
    weightkg: 140,
    types: ['Grass'],
    genderR: 30
  },
  'Rillaboom': {
    id: 1311,
    bs: {hp: 100,at: 125,df: 90,sa: 60,sd: 70,sp: 85},
    abilities: ['Violent Rush','Intimidate','Grass Pelt'],
    innates: ['Overgrow','Soundproof','Grassy Surge'],
    weightkg: 900,
    types: ['Grass'],
    genderR: 30
  },
  'Scorbunny': {
    id: 1312,
    bs: {hp: 50,at: 71,df: 40,sa: 40,sd: 40,sp: 69},
    abilities: ['Keen Eye','Libero','None'],
    innates: ['Blaze','Striker','Limber'],
    nfe: true,
    weightkg: 45,
    types: ['Fire'],
    genderR: 30
  },
  'Raboot': {
    id: 1313,
    bs: {hp: 65,at: 86,df: 60,sa: 55,sd: 60,sp: 94},
    abilities: ['Keen Eye','Libero','None'],
    innates: ['Blaze','Striker','Limber'],
    nfe: true,
    weightkg: 90,
    types: ['Fire'],
    genderR: 30
  },
  'Cinderace': {
    id: 1314,
    bs: {hp: 80,at: 116,df: 75,sa: 65,sd: 75,sp: 119},
    abilities: ['Keen Eye','Libero','Pyromancy'],
    innates: ['Blaze','Striker','Limber'],
    weightkg: 330,
    types: ['Fire'],
    genderR: 30
  },
  'Sobble': {
    id: 1315,
    bs: {hp: 50,at: 40,df: 40,sa: 70,sd: 40,sp: 70},
    abilities: ['Sniper','Rattled','None'],
    innates: ['Torrent','Immunity','Run Away'],
    nfe: true,
    weightkg: 40,
    types: ['Water'],
    genderR: 30
  },
  'Drizzile': {
    id: 1316,
    bs: {hp: 65,at: 60,df: 55,sa: 95,sd: 55,sp: 90},
    abilities: ['Sniper','Opportunist','None'],
    innates: ['Torrent','Immunity','Deadeye'],
    nfe: true,
    weightkg: 115,
    types: ['Water'],
    genderR: 30
  },
  'Inteleon': {
    id: 1317,
    bs: {hp: 70,at: 85,df: 65,sa: 125,sd: 65,sp: 120},
    abilities: ['Sniper','Opportunist','Overcharge'],
    innates: ['Torrent','Momentum','Deadeye'],
    weightkg: 452,
    types: ['Water'],
    genderR: 30
  },
  'Skwovet': {
    id: 1318,
    bs: {hp: 70,at: 55,df: 55,sa: 35,sd: 35,sp: 25},
    abilities: ['Cheek Pouch','None','Gluttony'],
    innates: [''],
    nfe: true,
    weightkg: 25,
    types: ['Normal'],
    genderR: 127
  },
  'Greedent': {
    id: 1319,
    bs: {hp: 120,at: 95,df: 95,sa: 55,sd: 75,sp: 20},
    abilities: ['Cheek Pouch','None','Gluttony'],
    innates: [''],
    weightkg: 60,
    types: ['Normal'],
    genderR: 127
  },
  'Rookidee': {
    id: 1320,
    bs: {hp: 38,at: 47,df: 35,sa: 33,sd: 35,sp: 57},
    abilities: ['Keen Eye','Reckless','Field Explorer'],
    innates: ['Intimidate','Flock'],
    nfe: true,
    weightkg: 18,
    types: ['Flying'],
    genderR: 127
  },
  'Corvisquire': {
    id: 1321,
    bs: {hp: 68,at: 67,df: 55,sa: 43,sd: 55,sp: 77},
    abilities: ['Keen Eye','Reckless','Field Explorer'],
    innates: ['Intimidate','Flock'],
    nfe: true,
    weightkg: 160,
    types: ['Flying'],
    genderR: 127
  },
  'Corviknight': {
    id: 1322,
    bs: {hp: 98,at: 87,df: 105,sa: 53,sd: 85,sp: 67},
    abilities: ['Stakeout','Reckless','Field Explorer'],
    innates: ['Intimidate','Unnerve','Mirror Armor'],
    weightkg: 750,
    types: ['Flying','Steel'],
    genderR: 127
  },
  'Blipbug': {
    id: 1323,
    bs: {hp: 25,at: 20,df: 20,sa: 25,sd: 45,sp: 45},
    abilities: ['Swarm','Compound Eyes','Telepathy'],
    innates: [''],
    nfe: true,
    weightkg: 80,
    types: ['Bug'],
    genderR: 127
  },
  'Dottler': {
    id: 1324,
    bs: {hp: 50,at: 35,df: 80,sa: 50,sd: 90,sp: 30},
    abilities: ['Swarm','Compound Eyes','Telepathy'],
    innates: [''],
    nfe: true,
    weightkg: 195,
    types: ['Bug','Psychic'],
    genderR: 127
  },
  'Orbeetle': {
    id: 1325,
    bs: {hp: 60,at: 45,df: 110,sa: 80,sd: 120,sp: 90},
    abilities: ['Swarm','Frisk','Telepathy'],
    innates: [''],
    weightkg: 408,
    types: ['Bug','Psychic'],
    genderR: 127
  },
  'Nickit': {
    id: 1326,
    bs: {hp: 40,at: 28,df: 28,sa: 47,sd: 52,sp: 50},
    abilities: ['Run Away','Unburden','Stakeout'],
    innates: [''],
    nfe: true,
    weightkg: 89,
    types: ['Dark'],
    genderR: 127
  },
  'Thievul': {
    id: 1327,
    bs: {hp: 70,at: 58,df: 58,sa: 87,sd: 92,sp: 90},
    abilities: ['Run Away','Unburden','Stakeout'],
    innates: [''],
    weightkg: 199,
    types: ['Dark'],
    genderR: 127
  },
  'Gossifleur': {
    id: 1328,
    bs: {hp: 40,at: 40,df: 60,sa: 40,sd: 60,sp: 10},
    abilities: ['Cotton Down','Regenerator','Effect Spore'],
    innates: [''],
    nfe: true,
    weightkg: 22,
    types: ['Grass'],
    genderR: 127
  },
  'Eldegoss': {
    id: 1329,
    bs: {hp: 60,at: 50,df: 90,sa: 80,sd: 120,sp: 60},
    abilities: ['Cotton Down','Regenerator','Effect Spore'],
    innates: [''],
    weightkg: 25,
    types: ['Grass'],
    genderR: 127
  },
  'Wooloo': {
    id: 1330,
    bs: {hp: 42,at: 40,df: 55,sa: 40,sd: 45,sp: 48},
    abilities: ['Fluffy','Run Away','Bulletproof'],
    innates: [''],
    nfe: true,
    weightkg: 60,
    types: ['Normal'],
    genderR: 127
  },
  'Dubwool': {
    id: 1331,
    bs: {hp: 72,at: 80,df: 100,sa: 60,sd: 90,sp: 88},
    abilities: ['Fluffy','Steadfast','Bulletproof'],
    innates: [''],
    weightkg: 430,
    types: ['Normal'],
    genderR: 127
  },
  'Chewtle': {
    id: 1332,
    bs: {hp: 50,at: 64,df: 50,sa: 38,sd: 38,sp: 44},
    abilities: ['Looter','Solid Rock','Swift Swim'],
    innates: ['Strong Jaw','Shell Armor','Growing Tooth'],
    nfe: true,
    weightkg: 85,
    types: ['Water'],
    genderR: 127
  },
  'Drednaw': {
    id: 1333,
    bs: {hp: 90,at: 115,df: 90,sa: 48,sd: 68,sp: 74},
    abilities: ['Predator','Solid Rock','Rock Head'],
    innates: ['Strong Jaw','Shell Armor','Primal Maw'],
    weightkg: 1155,
    types: ['Water','Rock'],
    genderR: 127
  },
  'Yamper': {
    id: 1334,
    bs: {hp: 59,at: 45,df: 50,sa: 40,sd: 50,sp: 26},
    abilities: ['Rattled','None','None'],
    innates: ['Run Away','Electrocytes'],
    nfe: true,
    weightkg: 135,
    types: ['Electric'],
    genderR: 127
  },
  'Boltund': {
    id: 1335,
    bs: {hp: 69,at: 90,df: 60,sa: 90,sd: 60,sp: 121},
    abilities: ['Short Circuit','Scare','Overcoat'],
    innates: ['Strong Jaw','Speed Boost','Defiant'],
    weightkg: 340,
    types: ['Electric'],
    genderR: 127
  },
  'Rolycoly': {
    id: 1336,
    bs: {hp: 30,at: 40,df: 50,sa: 40,sd: 50,sp: 30},
    abilities: ['Flame Body','Solid Rock','Mountaineer'],
    innates: ['Steam Engine','Juggernaut','Magma Armor'],
    nfe: true,
    weightkg: 120,
    types: ['Rock'],
    genderR: 127
  },
  'Carkol': {
    id: 1337,
    bs: {hp: 80,at: 60,df: 90,sa: 60,sd: 70,sp: 50},
    abilities: ['Flame Body','Solid Rock','Mountaineer'],
    innates: ['Steam Engine','Juggernaut','Magma Armor'],
    nfe: true,
    weightkg: 780,
    types: ['Rock','Fire'],
    genderR: 127
  },
  'Coalossal': {
    id: 1338,
    bs: {hp: 110,at: 80,df: 120,sa: 80,sd: 90,sp: 30},
    abilities: ['Flame Body','Galvanize','Mountaineer'],
    innates: ['Steam Engine','Juggernaut','Magma Armor'],
    weightkg: 3105,
    types: ['Rock','Fire'],
    genderR: 127
  },
  'Applin': {
    id: 1339,
    bs: {hp: 40,at: 40,df: 80,sa: 40,sd: 40,sp: 20},
    abilities: ['Ripen','Hustle','Bulletproof'],
    innates: ['Gluttony','Shell Armor'],
    nfe: true,
    weightkg: 5,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Flapple': {
    id: 1340,
    bs: {hp: 70,at: 120,df: 90,sa: 105,sd: 60,sp: 95},
    abilities: ['Hustle','Aerodynamics','Unburden'],
    innates: ['Levitate','Regenerator','Corrosion'],
    weightkg: 10,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Appletun': {
    id: 1341,
    bs: {hp: 110,at: 100,df: 110,sa: 100,sd: 90,sp: 30},
    abilities: ['Unaware','Predator','Solar Flare'],
    innates: ['Harvest','Ripen','Thick Fat'],
    weightkg: 130,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Silicobra': {
    id: 1342,
    bs: {hp: 52,at: 57,df: 75,sa: 35,sd: 50,sp: 46},
    abilities: ['Sand Spit','Shed Skin','Sand Veil'],
    innates: [''],
    nfe: true,
    weightkg: 76,
    types: ['Ground'],
    genderR: 127
  },
  'Sandaconda': {
    id: 1343,
    bs: {hp: 72,at: 107,df: 125,sa: 65,sd: 70,sp: 71},
    abilities: ['Sand Spit','Shed Skin','Sand Veil'],
    innates: [''],
    weightkg: 655,
    types: ['Ground'],
    genderR: 127
  },
  'Cramorant': {
    id: 1344,
    bs: {hp: 70,at: 85,df: 55,sa: 85,sd: 95,sp: 85},
    abilities: ['Gulp Missile','None'],
    innates: [''],
    otherFormes: ['Cramorant Gulping','Cramorant Gorging'],
    weightkg: 180,
    types: ['Flying','Water'],
    genderR: 127
  },
  'Arrokuda': {
    id: 1345,
    bs: {hp: 41,at: 63,df: 40,sa: 40,sd: 30,sp: 66},
    abilities: ['Swift Swim','None','Propeller Tail'],
    innates: [''],
    nfe: true,
    weightkg: 10,
    types: ['Water'],
    genderR: 127
  },
  'Barraskewda': {
    id: 1346,
    bs: {hp: 61,at: 123,df: 60,sa: 60,sd: 50,sp: 136},
    abilities: ['Swift Swim','None','Propeller Tail'],
    innates: [''],
    weightkg: 300,
    types: ['Water'],
    genderR: 127
  },
  'Toxel': {
    id: 1347,
    bs: {hp: 40,at: 38,df: 35,sa: 54,sd: 35,sp: 40},
    abilities: ['Rattled','Static','Klutz'],
    innates: ['Plus','Water Absorb','Poison Touch'],
    nfe: true,
    weightkg: 110,
    types: ['Electric','Poison'],
    genderR: 127
  },
  'Toxtricity': {
    id: 1348,
    bs: {hp: 75,at: 98,df: 70,sa: 114,sd: 70,sp: 75},
    abilities: ['Punk Rock','Amplifier','Technician'],
    innates: ['Plus','Water Absorb','Merciless'],
    otherFormes: ['Toxtricity Low Key'],
    weightkg: 400,
    types: ['Electric','Poison'],
    genderR: 127
  },
  'Sizzlipede': {
    id: 1349,
    bs: {hp: 50,at: 65,df: 45,sa: 50,sd: 50,sp: 45},
    abilities: ['Magma Armor','Coil Up','Solar Power'],
    innates: ['Flash Fire','White Smoke'],
    nfe: true,
    weightkg: 10,
    types: ['Fire','Bug'],
    genderR: 127
  },
  'Centiskorch': {
    id: 1350,
    bs: {hp: 100,at: 115,df: 65,sa: 90,sd: 90,sp: 65},
    abilities: ['Magma Armor','Coil Up','Solar Power'],
    innates: ['Flash Fire','White Smoke','Molten Down'],
    weightkg: 1200,
    types: ['Fire','Bug'],
    genderR: 127
  },
  'Clobbopus': {
    id: 1351,
    bs: {hp: 50,at: 68,df: 60,sa: 50,sd: 50,sp: 32},
    abilities: ['Limber','None','Technician'],
    innates: [''],
    nfe: true,
    weightkg: 40,
    types: ['Fighting'],
    genderR: 127
  },
  'Grapploct': {
    id: 1352,
    bs: {hp: 80,at: 118,df: 90,sa: 70,sd: 80,sp: 42},
    abilities: ['Limber','None','Technician'],
    innates: [''],
    weightkg: 390,
    types: ['Fighting'],
    genderR: 127
  },
  'Sinistea': {
    id: 1353,
    bs: {hp: 40,at: 45,df: 45,sa: 74,sd: 54,sp: 50},
    abilities: ['Weak Armor','Dancer','Aroma Veil'],
    innates: ['Cursed Body','Self Sufficient','Water Absorb'],
    otherFormes: ['Sinistea Antique'],
    nfe: true,
    weightkg: 2,
    types: ['Ghost'],
    genderR: 255
  },
  'Polteageist': {
    id: 1354,
    bs: {hp: 60,at: 65,df: 65,sa: 134,sd: 114,sp: 70},
    abilities: ['Weak Armor','Dancer','Liquified'],
    innates: ['Cursed Body','Self Sufficient','Water Absorb'],
    otherFormes: ['Polteageist Antique'],
    weightkg: 4,
    types: ['Ghost'],
    genderR: 255
  },
  'Hatenna': {
    id: 1355,
    bs: {hp: 42,at: 30,df: 45,sa: 56,sd: 53,sp: 39},
    abilities: ['Healer','Anticipation','Magic Bounce'],
    innates: ['Pixilate'],
    nfe: true,
    weightkg: 34,
    types: ['Psychic'],
    genderR: 254
  },
  'Hattrem': {
    id: 1356,
    bs: {hp: 57,at: 40,df: 65,sa: 86,sd: 73,sp: 49},
    abilities: ['Healer','Anticipation','Magic Bounce'],
    innates: ['Pixilate','Hyper Aggressive'],
    nfe: true,
    weightkg: 48,
    types: ['Psychic'],
    genderR: 254
  },
  'Hatterene': {
    id: 1357,
    bs: {hp: 57,at: 90,df: 95,sa: 136,sd: 103,sp: 29},
    abilities: ['Healer','Twisted Dimension','Rampage'],
    innates: ['Pixilate','Magic Bounce','Hyper Aggressive'],
    weightkg: 51,
    types: ['Psychic','Fairy'],
    genderR: 254
  },
  'Impidimp': {
    id: 1358,
    bs: {hp: 45,at: 45,df: 30,sa: 55,sd: 40,sp: 50},
    abilities: ['Prankster','Pickpocket','Frisk'],
    innates: ['Scare'],
    nfe: true,
    weightkg: 55,
    types: ['Dark','Fairy'],
    genderR: 0
  },
  'Morgrem': {
    id: 1359,
    bs: {hp: 65,at: 60,df: 45,sa: 75,sd: 55,sp: 70},
    abilities: ['Prankster','Pickpocket','Tangling Hair'],
    innates: ['Scare'],
    nfe: true,
    weightkg: 125,
    types: ['Dark','Fairy'],
    genderR: 0
  },
  'Grimmsnarl': {
    id: 1360,
    bs: {hp: 95,at: 120,df: 65,sa: 95,sd: 75,sp: 60},
    abilities: ['Prankster','Cheap Tactics','Tangling Hair'],
    innates: ['Fur Coat','Intimidate','Scare'],
    weightkg: 610,
    types: ['Dark','Fairy'],
    genderR: 0
  },
  'Obstagoon': {
    id: 1361,
    bs: {hp: 93,at: 90,df: 101,sa: 60,sd: 81,sp: 95},
    abilities: ['Fight Spirit','Stamina','Poison Heal'],
    innates: ['Pickup','Guts','Defiant'],
    weightkg: 460,
    types: ['Dark','Normal'],
    genderR: 127
  },
  'Perrserker': {
    id: 1362,
    bs: {hp: 70,at: 110,df: 100,sa: 50,sd: 60,sp: 50},
    abilities: ['Fur Coat','Looter','Iron Barbs'],
    innates: ['Battle Armor','Tough Claws','Steely Spirit'],
    weightkg: 280,
    types: ['Steel'],
    genderR: 127
  },
  'Cursola': {
    id: 1363,
    bs: {hp: 60,at: 95,df: 50,sa: 145,sd: 130,sp: 30},
    abilities: ['Weak Armor','None','Perish Body'],
    innates: [''],
    weightkg: 4,
    types: ['Ghost'],
    genderR: 191
  },
  'Sirfetchd': {
    id: 1364,
    bs: {hp: 92,at: 125,df: 95,sa: 68,sd: 92,sp: 65},
    abilities: ['Hyper Cutter','Dauntless Shield','Chlorophyll'],
    innates: ['Scrappy','Keen Edge','Rampage'],
    weightkg: 1170,
    types: ['Fighting'],
    genderR: 127
  },
  'Mr Rime': {
    id: 1365,
    bs: {hp: 80,at: 85,df: 75,sa: 110,sd: 100,sp: 70},
    abilities: ['Tangled Feet','Screen Cleaner','Ice Body'],
    innates: [''],
    weightkg: 582,
    types: ['Ice','Psychic'],
    genderR: 127
  },
  'Runerigus': {
    id: 1366,
    bs: {hp: 58,at: 95,df: 145,sa: 50,sd: 105,sp: 30},
    abilities: ['Wandering Spirit','Shadow Shield','Ancient Idol'],
    innates: ['Haunted Spirit','Cursed Body','Solid Rock'],
    weightkg: 666,
    types: ['Ground','Ghost'],
    genderR: 127
  },
  'Milcery': {
    id: 1367,
    bs: {hp: 45,at: 40,df: 40,sa: 50,sd: 61,sp: 34},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    nfe: true,
    weightkg: 3,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie': {
    id: 1368,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie Ruby Cream','Alcremie Matcha Cream','Alcremie Mint Cream','Alcremie Lemon Cream','Alcremie Salted Cream','Alcremie Ruby Swirl','Alcremie Caramel Swirl','Alcremie Rainbow Swirl'],
    weightkg: 5,
    types: ['Fairy'],
    genderR: 254
  },
  'Falinks': {
    id: 1369,
    bs: {hp: 65,at: 100,df: 100,sa: 70,sd: 60,sp: 75},
    abilities: ['Battle Armor','None','Defiant'],
    innates: [''],
    weightkg: 620,
    types: ['Fighting'],
    genderR: 255
  },
  'Pincurchin': {
    id: 1370,
    bs: {hp: 48,at: 101,df: 95,sa: 91,sd: 85,sp: 15},
    abilities: ['Lightning Rod','None','Electric Surge'],
    innates: [''],
    weightkg: 10,
    types: ['Electric'],
    genderR: 127
  },
  'Snom': {
    id: 1371,
    bs: {hp: 30,at: 25,df: 35,sa: 45,sd: 30,sp: 20},
    abilities: ['Shield Dust','None','Ice Scales'],
    innates: [''],
    nfe: true,
    weightkg: 38,
    types: ['Ice','Bug'],
    genderR: 127
  },
  'Frosmoth': {
    id: 1372,
    bs: {hp: 70,at: 65,df: 60,sa: 125,sd: 90,sp: 65},
    abilities: ['Shield Dust','None','Ice Scales'],
    innates: [''],
    weightkg: 420,
    types: ['Ice','Bug'],
    genderR: 127
  },
  'Stonjourner': {
    id: 1373,
    bs: {hp: 100,at: 125,df: 135,sa: 20,sd: 20,sp: 70},
    abilities: ['Power Spot','None'],
    innates: [''],
    weightkg: 5200,
    types: ['Rock'],
    genderR: 127
  },
  'Eiscue': {
    id: 1374,
    bs: {hp: 75,at: 80,df: 110,sa: 65,sd: 90,sp: 50},
    abilities: ['Ice Face','None'],
    innates: [''],
    otherFormes: ['Eiscue Noice Face'],
    weightkg: 890,
    types: ['Ice'],
    genderR: 127
  },
  'Indeedee': {
    id: 1375,
    bs: {hp: 60,at: 65,df: 55,sa: 105,sd: 95,sp: 95},
    abilities: ['Inner Focus','Synchronize','Psychic Surge'],
    innates: [''],
    otherFormes: ['Indeedee Female'],
    weightkg: 280,
    types: ['Psychic','Normal'],
    genderR: 0
  },
  'Morpeko': {
    id: 1376,
    bs: {hp: 58,at: 95,df: 58,sa: 70,sd: 58,sp: 97},
    abilities: ['Hunger Switch','None'],
    innates: [''],
    otherFormes: ['Morpeko Hangry'],
    weightkg: 30,
    types: ['Electric','Dark'],
    genderR: 127
  },
  'Cufant': {
    id: 1377,
    bs: {hp: 72,at: 80,df: 49,sa: 40,sd: 49,sp: 40},
    abilities: ['Sheer Force','None','Heavy Metal'],
    innates: [''],
    nfe: true,
    weightkg: 1000,
    types: ['Steel'],
    genderR: 127
  },
  'Copperajah': {
    id: 1378,
    bs: {hp: 122,at: 130,df: 69,sa: 80,sd: 69,sp: 30},
    abilities: ['Sheer Force','None','Heavy Metal'],
    innates: [''],
    weightkg: 6500,
    types: ['Steel'],
    genderR: 127
  },
  'Dracozolt': {
    id: 1379,
    bs: {hp: 90,at: 100,df: 90,sa: 80,sd: 70,sp: 75},
    abilities: ['Strong Jaw','Surge Surfer','Sand Rush'],
    innates: ['Fossilized','Dragons Maw','Volt Absorb'],
    weightkg: 1900,
    types: ['Electric','Dragon'],
    genderR: 255
  },
  'Arctozolt': {
    id: 1380,
    bs: {hp: 90,at: 100,df: 90,sa: 90,sd: 80,sp: 55},
    abilities: ['Strong Jaw','Surge Surfer','Slush Rush'],
    innates: ['Fossilized','Volt Absorb','Ice Body'],
    weightkg: 1500,
    types: ['Electric','Ice'],
    genderR: 255
  },
  'Dracovish': {
    id: 1381,
    bs: {hp: 90,at: 90,df: 100,sa: 70,sd: 80,sp: 75},
    abilities: ['Strong Jaw','Swift Swim','Sand Rush'],
    innates: ['Fossilized','Dragons Maw','Water Absorb'],
    weightkg: 2150,
    types: ['Water','Dragon'],
    genderR: 255
  },
  'Arctovish': {
    id: 1382,
    bs: {hp: 90,at: 90,df: 100,sa: 80,sd: 90,sp: 55},
    abilities: ['Strong Jaw','Swift Swim','Slush Rush'],
    innates: ['Fossilized','Water Absorb','Ice Body'],
    weightkg: 1750,
    types: ['Water','Ice'],
    genderR: 255
  },
  'Duraludon': {
    id: 1383,
    bs: {hp: 70,at: 95,df: 115,sa: 120,sd: 50,sp: 85},
    abilities: ['Light Metal','Heavy Metal','Stalwart'],
    innates: [''],
    weightkg: 400,
    types: ['Steel','Dragon'],
    genderR: 127
  },
  'Dreepy': {
    id: 1384,
    bs: {hp: 28,at: 60,df: 30,sa: 40,sd: 30,sp: 82},
    abilities: ['Keen Eye','Infiltrator','None'],
    innates: ['Levitate','Clear Body','Cursed Body'],
    nfe: true,
    weightkg: 20,
    types: ['Dragon','Ghost'],
    genderR: 127
  },
  'Drakloak': {
    id: 1385,
    bs: {hp: 68,at: 80,df: 50,sa: 60,sd: 50,sp: 102},
    abilities: ['Keen Eye','Infiltrator','Parental Bond'],
    innates: ['Levitate','Clear Body','Cursed Body'],
    nfe: true,
    weightkg: 110,
    types: ['Dragon','Ghost'],
    genderR: 127
  },
  'Dragapult': {
    id: 1386,
    bs: {hp: 88,at: 120,df: 75,sa: 100,sd: 75,sp: 142},
    abilities: ['Artillery','Speed Boost','Parental Bond'],
    innates: ['Levitate','Clear Body','Haunted Spirit'],
    weightkg: 500,
    types: ['Dragon','Ghost'],
    genderR: 127
  },
  'Zacian': {
    id: 1387,
    bs: {hp: 92,at: 130,df: 115,sa: 80,sd: 115,sp: 138},
    abilities: ['Intrepid Sword','None'],
    innates: [''],
    otherFormes: ['Zacian Crowned Sword'],
    weightkg: 1100,
    types: ['Fairy'],
    genderR: 255
  },
  'Zamazenta': {
    id: 1388,
    bs: {hp: 92,at: 130,df: 115,sa: 80,sd: 115,sp: 138},
    abilities: ['Dauntless Shield','None'],
    innates: [''],
    otherFormes: ['Zamazenta Crowned Shield'],
    weightkg: 2100,
    types: ['Fighting'],
    genderR: 255
  },
  'Eternatus': {
    id: 1389,
    bs: {hp: 140,at: 85,df: 95,sa: 145,sd: 95,sp: 130},
    abilities: ['Pressure','None'],
    innates: [''],
    otherFormes: ['Eternatus Eternamax'],
    weightkg: 9500,
    types: ['Poison','Dragon'],
    genderR: 255
  },
  'Kubfu': {
    id: 1390,
    bs: {hp: 60,at: 90,df: 60,sa: 53,sd: 50,sp: 72},
    abilities: ['Inner Focus','None'],
    innates: [''],
    nfe: true,
    weightkg: 120,
    types: ['Fighting'],
    genderR: 30
  },
  'Urshifu': {
    id: 1391,
    bs: {hp: 100,at: 130,df: 100,sa: 63,sd: 60,sp: 97},
    abilities: ['Unseen Fist','None'],
    innates: [''],
    otherFormes: ['Urshifu Rapid Strike Style'],
    weightkg: 1050,
    types: ['Fighting','Dark'],
    genderR: 30
  },
  'Zarude': {
    id: 1392,
    bs: {hp: 105,at: 120,df: 105,sa: 70,sd: 95,sp: 105},
    abilities: ['Leaf Guard','None'],
    innates: [''],
    otherFormes: ['Zarude Dada'],
    weightkg: 700,
    types: ['Dark','Grass'],
    genderR: 255
  },
  'Regieleki': {
    id: 1393,
    bs: {hp: 80,at: 100,df: 50,sa: 100,sd: 50,sp: 200},
    abilities: ['Transistor','None'],
    innates: [''],
    weightkg: 1450,
    types: ['Electric'],
    genderR: 255
  },
  'Regidrago': {
    id: 1394,
    bs: {hp: 200,at: 100,df: 50,sa: 100,sd: 50,sp: 80},
    abilities: ['Dragons Maw','None'],
    innates: [''],
    weightkg: 2000,
    types: ['Dragon'],
    genderR: 255
  },
  'Glastrier': {
    id: 896,
    bs: {hp: 100,at: 145,df: 130,sa: 65,sd: 110,sp: 30},
    abilities: ['Chilling Neigh','None'],
    innates: [''],
    weightkg: 8000,
    types: ['Ice'],
    genderR: 255
  },
  'Spectrier': {
    id: 897,
    bs: {hp: 100,at: 65,df: 60,sa: 145,sd: 80,sp: 130},
    abilities: ['Grim Neigh','None'],
    innates: [''],
    weightkg: 445,
    types: ['Ghost'],
    genderR: 255
  },
  'Calyrex': {
    id: 1395,
    bs: {hp: 100,at: 80,df: 80,sa: 80,sd: 80,sp: 80},
    abilities: ['Unnerve','Unnerve','Unnerve'],
    innates: [''],
    otherFormes: ['Calyrex Ice Rider','Calyrex Shadow Rider'],
    weightkg: 77,
    types: ['Psychic','Grass'],
    genderR: 255
  },
  'Venusaur Mega': {
    id: 899,
    bs: {hp: 80,at: 100,df: 123,sa: 122,sd: 120,sp: 80},
    abilities: ['Big Leaves','Big Leaves','Big Leaves'],
    innates: ['Forest Rage','Thick Fat','Poison Touch'],
    otherFormes: ['Venusaur'],
    weightkg: 0,
    types: ['Grass','Poison'],
    genderR: 127
  },
  'Charizard Mega X': {
    id: 900,
    bs: {hp: 78,at: 150,df: 111,sa: 110,sd: 85,sp: 100},
    abilities: ['Tough Claws','Tough Claws','Tough Claws'],
    innates: ['Hellblaze','Levitate','Discipline'],
    otherFormes: ['Charizard'],
    weightkg: 0,
    types: ['Fire','Dragon'],
    genderR: 127
  },
  'Charizard Mega Y': {
    id: 901,
    bs: {hp: 78,at: 104,df: 78,sa: 159,sd: 115,sp: 100},
    abilities: ['Drought','Drought','Drought'],
    innates: ['Hellblaze','Levitate','Solar Power'],
    otherFormes: ['Charizard'],
    weightkg: 0,
    types: ['Fire','Dragon'],
    genderR: 127
  },
  'Blastoise Mega': {
    id: 902,
    bs: {hp: 79,at: 103,df: 120,sa: 135,sd: 115,sp: 78},
    abilities: ['Artillery','Artillery','Artillery'],
    innates: ['Riptide','Shell Armor','Mega Launcher'],
    otherFormes: ['Blastoise'],
    weightkg: 0,
    types: ['Water','Steel'],
    genderR: 127
  },
  'Beedrill Mega': {
    id: 903,
    bs: {hp: 65,at: 150,df: 60,sa: 45,sd: 80,sp: 175},
    abilities: ['Adaptability','Adaptability','Adaptability'],
    innates: ['Hyper Aggressive','Merciless','Levitate'],
    otherFormes: ['Beedrill'],
    weightkg: 0,
    types: ['Bug','Poison'],
    genderR: 127
  },
  'Pidgeot Mega': {
    id: 904,
    bs: {hp: 83,at: 115,df: 95,sa: 115,sd: 80,sp: 121},
    abilities: ['No Guard','Majestic Bird','Big Pecks'],
    innates: ['Flock','Keen Eye','Giant Wings'],
    otherFormes: ['Pidgeot'],
    weightkg: 0,
    types: ['Normal','Flying'],
    genderR: 127
  },
  'Alakazam Mega': {
    id: 905,
    bs: {hp: 55,at: 50,df: 65,sa: 175,sd: 105,sp: 150},
    abilities: ['Mystic Power','Mystic Power','Mystic Power'],
    innates: ['Psychic Mind','Inner Focus','Magic Guard'],
    otherFormes: ['Alakazam'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 63
  },
  'Slowbro Mega': {
    id: 906,
    bs: {hp: 95,at: 75,df: 180,sa: 130,sd: 80,sp: 30},
    abilities: ['Unaware','Unaware','Unaware'],
    innates: ['Regenerator','Fort Knox','Shell Armor'],
    otherFormes: ['Slowbro'],
    weightkg: 0,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Gengar Mega': {
    id: 907,
    bs: {hp: 60,at: 115,df: 80,sa: 170,sd: 95,sp: 130},
    abilities: ['Shadow Tag','Shadow Tag','Shadow Tag'],
    innates: ['Vengeance','Soul Eater','Haunted Spirit'],
    otherFormes: ['Gengar'],
    weightkg: 0,
    types: ['Ghost','Poison'],
    genderR: 127
  },
  'Kangaskhan Mega': {
    id: 908,
    bs: {hp: 105,at: 125,df: 100,sa: 60,sd: 100,sp: 100},
    abilities: ['Tough Claws','Tough Claws','Tough Claws'],
    innates: ['Parental Bond','Scrappy','Avenger'],
    otherFormes: ['Kangaskhan'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 254
  },
  'Pinsir Mega': {
    id: 909,
    bs: {hp: 65,at: 155,df: 120,sa: 65,sd: 90,sp: 105},
    abilities: ['Hyper Aggressive','Hyper Aggressive','Hyper Aggressive'],
    innates: ['Hyper Cutter','Grip Pincer','Aerilate'],
    otherFormes: ['Pinsir'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Gyarados Mega': {
    id: 910,
    bs: {hp: 95,at: 155,df: 109,sa: 70,sd: 130,sp: 81},
    abilities: ['Hyper Aggressive','Hyper Aggressive','Hyper Aggressive'],
    innates: ['Mold Breaker','Beast Boost','Levitate'],
    otherFormes: ['Gyarados'],
    weightkg: 0,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Aerodactyl Mega': {
    id: 911,
    bs: {hp: 80,at: 135,df: 85,sa: 70,sd: 95,sp: 150},
    abilities: ['Speed Force','Predator','Fatal Precision'],
    innates: ['Fossilized','Rock Head','Tough Claws'],
    otherFormes: ['Aerodactyl'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 30
  },
  'Mewtwo Mega X': {
    id: 912,
    bs: {hp: 106,at: 190,df: 100,sa: 154,sd: 100,sp: 130},
    abilities: ['Opportunist','Opportunist','Opportunist'],
    innates: ['Psychic Mind','Raging Boxer','Fatal Precision'],
    otherFormes: ['Mewtwo'],
    weightkg: 0,
    types: ['Psychic','Fighting'],
    genderR: 255
  },
  'Mewtwo Mega Y': {
    id: 913,
    bs: {hp: 106,at: 150,df: 70,sa: 194,sd: 120,sp: 140},
    abilities: ['Mystic Power','Mystic Power','Mystic Power'],
    innates: ['Psychic Mind','Levitate','Fatal Precision'],
    otherFormes: ['Mewtwo'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Ampharos Mega': {
    id: 914,
    bs: {hp: 110,at: 95,df: 105,sa: 165,sd: 110,sp: 45},
    abilities: ['Transistor','Transistor','Transistor'],
    innates: ['Fluffy','Illuminate','Overwhelm'],
    otherFormes: ['Ampharos'],
    weightkg: 0,
    types: ['Electric','Dragon'],
    genderR: 127
  },
  'Steelix Mega': {
    id: 915,
    bs: {hp: 75,at: 145,df: 230,sa: 55,sd: 105,sp: 20},
    abilities: ['Primal Armor','Primal Armor','Primal Armor'],
    innates: ['Lead Coat','Impenetrable','Strong Jaw'],
    otherFormes: ['Steelix'],
    weightkg: 0,
    types: ['Steel','Ground'],
    genderR: 127
  },
  'Scizor Mega': {
    id: 916,
    bs: {hp: 70,at: 150,df: 140,sa: 65,sd: 100,sp: 75},
    abilities: ['Technician','Technician','Technician'],
    innates: ['Pollinate','Tough Claws','Levitate'],
    otherFormes: ['Scizor'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 127
  },
  'Heracross Mega': {
    id: 917,
    bs: {hp: 80,at: 185,df: 115,sa: 40,sd: 105,sp: 75},
    abilities: ['Mighty Horn','Mighty Horn','Mighty Horn'],
    innates: ['Fight Spirit','Battle Armor','Shield Dust'],
    otherFormes: ['Heracross'],
    weightkg: 0,
    types: ['Bug','Fighting'],
    genderR: 127
  },
  'Houndoom Mega': {
    id: 918,
    bs: {hp: 75,at: 100,df: 90,sa: 140,sd: 90,sp: 125},
    abilities: ['Infernal Rage','Infernal Rage','Infernal Rage'],
    innates: ['Solar Power','Molten Down','Hyper Aggressive'],
    otherFormes: ['Houndoom'],
    weightkg: 0,
    types: ['Dark','Fire'],
    genderR: 127
  },
  'Tyranitar Mega': {
    id: 919,
    bs: {hp: 100,at: 164,df: 150,sa: 95,sd: 120,sp: 71},
    abilities: ['Primal Armor','Primal Armor','Primal Armor'],
    innates: ['Impenetrable','Juggernaut','Rough Skin'],
    otherFormes: ['Tyranitar'],
    weightkg: 0,
    types: ['Rock','Dark'],
    genderR: 127
  },
  'Sceptile Mega': {
    id: 920,
    bs: {hp: 70,at: 145,df: 75,sa: 110,sd: 85,sp: 145},
    abilities: ['Big Leaves','Big Leaves','Big Leaves'],
    innates: ['Forest Rage','Speed Force','Keen Edge'],
    otherFormes: ['Sceptile'],
    weightkg: 0,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Blaziken Mega': {
    id: 921,
    bs: {hp: 80,at: 160,df: 80,sa: 130,sd: 80,sp: 100},
    abilities: ['Speed Boost','Speed Boost','Speed Boost'],
    innates: ['Hellblaze','Iron Fist','Striker'],
    otherFormes: ['Blaziken'],
    weightkg: 0,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Swampert Mega': {
    id: 922,
    bs: {hp: 100,at: 150,df: 110,sa: 95,sd: 110,sp: 70},
    abilities: ['Swift Swim','Swift Swim','Swift Swim'],
    innates: ['Riptide','Stamina','Regenerator'],
    otherFormes: ['Swampert'],
    weightkg: 0,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Gardevoir Mega': {
    id: 923,
    bs: {hp: 68,at: 85,df: 80,sa: 165,sd: 135,sp: 100},
    abilities: ['Pixilate','Pixilate','Pixilate'],
    innates: ['Serene Grace','Magic Guard','Soul Heart'],
    otherFormes: ['Gardevoir'],
    weightkg: 0,
    types: ['Psychic','Fairy'],
    genderR: 127
  },
  'Sableye Mega': {
    id: 924,
    bs: {hp: 70,at: 85,df: 130,sa: 85,sd: 120,sp: 20},
    abilities: ['Magic Bounce','Magic Bounce','Magic Bounce'],
    innates: ['Analytic','Prankster','Nocturnal'],
    otherFormes: ['Sableye'],
    weightkg: 0,
    types: ['Dark','Ghost'],
    genderR: 127
  },
  'Mawile Mega': {
    id: 925,
    bs: {hp: 70,at: 105,df: 130,sa: 55,sd: 100,sp: 50},
    abilities: ['Huge Power','Huge Power','Huge Power'],
    innates: ['Multi Headed','Strong Jaw','Grip Pincer'],
    otherFormes: ['Mawile'],
    weightkg: 0,
    types: ['Steel','Fairy'],
    genderR: 127
  },
  'Aggron Mega': {
    id: 926,
    bs: {hp: 70,at: 140,df: 230,sa: 60,sd: 80,sp: 50},
    abilities: ['Juggernaut','Heatproof','Iron Barbs'],
    innates: ['Lead Coat','Primal Armor','Impenetrable'],
    otherFormes: ['Aggron'],
    weightkg: 0,
    types: ['Steel'],
    genderR: 127
  },
  'Medicham Mega': {
    id: 927,
    bs: {hp: 60,at: 100,df: 85,sa: 80,sd: 85,sp: 100},
    abilities: ['Pure Power','Pure Power','Pure Power'],
    innates: ['Psychic Mind','Striker','Technician'],
    otherFormes: ['Medicham'],
    weightkg: 0,
    types: ['Fighting','Psychic'],
    genderR: 127
  },
  'Manectric Mega': {
    id: 928,
    bs: {hp: 70,at: 110,df: 80,sa: 135,sd: 80,sp: 155},
    abilities: ['Intimidate','Intimidate','Intimidate'],
    innates: ['Volt Rush','Ground Shock','Overcharge'],
    otherFormes: ['Manectric'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Sharpedo Mega': {
    id: 929,
    bs: {hp: 70,at: 150,df: 70,sa: 120,sd: 65,sp: 115},
    abilities: ['Hyper Aggressive','Hyper Aggressive','Hyper Aggressive'],
    innates: ['Strong Jaw','Swift Swim','Jaws Of Carnage'],
    otherFormes: ['Sharpedo'],
    weightkg: 0,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Camerupt Mega': {
    id: 930,
    bs: {hp: 90,at: 120,df: 110,sa: 145,sd: 115,sp: 20},
    abilities: ['Drought','Drought','Drought'],
    innates: ['Magma Armor','Artillery','Molten Down'],
    otherFormes: ['Camerupt'],
    weightkg: 0,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Altaria Mega': {
    id: 931,
    bs: {hp: 75,at: 110,df: 110,sa: 110,sd: 105,sp: 100},
    abilities: ['Pixilate','Pixilate','Pixilate'],
    innates: ['Natural Cure','Fluffy','Levitate'],
    otherFormes: ['Altaria'],
    weightkg: 0,
    types: ['Dragon','Fairy'],
    genderR: 127
  },
  'Banette Mega': {
    id: 932,
    bs: {hp: 84,at: 165,df: 105,sa: 75,sd: 103,sp: 103},
    abilities: ['Prankster','Prankster','Prankster'],
    innates: ['Intimidate','Magic Guard','Soul Eater'],
    otherFormes: ['Banette'],
    weightkg: 0,
    types: ['Ghost','Normal'],
    genderR: 127
  },
  'Absol Mega': {
    id: 933,
    bs: {hp: 65,at: 175,df: 60,sa: 100,sd: 60,sp: 125},
    abilities: ['Dark Aura','Dark Aura','Dark Aura'],
    innates: ['Super Luck','Keen Edge','Magic Guard'],
    otherFormes: ['Absol'],
    weightkg: 0,
    types: ['Dark','Fairy'],
    genderR: 127
  },
  'Glalie Mega': {
    id: 934,
    bs: {hp: 80,at: 130,df: 80,sa: 120,sd: 80,sp: 110},
    abilities: ['Moody','Rock Head','Whiteout'],
    innates: ['Snow Warning','Refrigerate','Levitate'],
    otherFormes: ['Glalie'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 127
  },
  'Salamence Mega': {
    id: 935,
    bs: {hp: 95,at: 145,df: 130,sa: 120,sd: 90,sp: 120},
    abilities: ['Beast Boost','Beast Boost','Beast Boost'],
    innates: ['Overwhelm','Aerilate','Predator'],
    otherFormes: ['Salamence'],
    weightkg: 0,
    types: ['Dragon','Flying'],
    genderR: 127
  },
  'Metagross Mega': {
    id: 936,
    bs: {hp: 80,at: 145,df: 150,sa: 105,sd: 110,sp: 110},
    abilities: ['Tough Claws','Tough Claws','Tough Claws'],
    innates: ['Predator','Full Metal Body','Levitate'],
    otherFormes: ['Metagross'],
    weightkg: 0,
    types: ['Steel','Psychic'],
    genderR: 255
  },
  'Latias Mega': {
    id: 937,
    bs: {hp: 80,at: 100,df: 120,sa: 140,sd: 150,sp: 110},
    abilities: ['Mirror Armor','Mirror Armor','Mirror Armor'],
    innates: ['Levitate','Prism Armor','Mystic Power'],
    otherFormes: ['Latias'],
    weightkg: 0,
    types: ['Dragon','Psychic'],
    genderR: 254
  },
  'Latios Mega': {
    id: 938,
    bs: {hp: 80,at: 130,df: 100,sa: 160,sd: 120,sp: 110},
    abilities: ['Speed Boost','Speed Boost','Speed Boost'],
    innates: ['Levitate','Multiscale','Mystic Power'],
    otherFormes: ['Latios'],
    weightkg: 0,
    types: ['Dragon','Psychic'],
    genderR: 0
  },
  'Lopunny Mega': {
    id: 939,
    bs: {hp: 65,at: 136,df: 74,sa: 64,sd: 96,sp: 135},
    abilities: ['Scrappy','Scrappy','Scrappy'],
    innates: ['Limber','Fur Coat','Striker'],
    otherFormes: ['Lopunny'],
    weightkg: 0,
    types: ['Normal','Fighting'],
    genderR: 127
  },
  'Garchomp Mega': {
    id: 940,
    bs: {hp: 108,at: 170,df: 110,sa: 120,sd: 90,sp: 102},
    abilities: ['Keen Edge','Keen Edge','Keen Edge'],
    innates: ['Hyper Aggressive','Predator','Rough Skin'],
    otherFormes: ['Garchomp'],
    weightkg: 0,
    types: ['Dragon','Ground'],
    genderR: 127
  },
  'Lucario Mega': {
    id: 941,
    bs: {hp: 70,at: 145,df: 88,sa: 140,sd: 70,sp: 112},
    abilities: ['Adaptability','Adaptability','Adaptability'],
    innates: ['Inner Focus','Fatal Precision','Fight Spirit'],
    otherFormes: ['Lucario'],
    weightkg: 0,
    types: ['Fighting','Steel'],
    genderR: 30
  },
  'Abomasnow Mega': {
    id: 942,
    bs: {hp: 90,at: 142,df: 105,sa: 142,sd: 105,sp: 30},
    abilities: ['Snow Warning','Snow Warning','Snow Warning'],
    innates: ['Ice Body','Whiteout','Permafrost'],
    otherFormes: ['Abomasnow'],
    weightkg: 0,
    types: ['Grass','Ice'],
    genderR: 127
  },
  'Gallade Mega': {
    id: 943,
    bs: {hp: 68,at: 135,df: 95,sa: 95,sd: 125,sp: 115},
    abilities: ['Intrepid Sword','Intrepid Sword','Intrepid Sword'],
    innates: ['Keen Edge','Fatal Precision','Inner Focus'],
    otherFormes: ['Gallade'],
    weightkg: 0,
    types: ['Psychic','Fighting'],
    genderR: 0
  },
  'Audino Mega': {
    id: 944,
    bs: {hp: 103,at: 60,df: 126,sa: 120,sd: 126,sp: 50},
    abilities: ['Healer','Healer','Healer'],
    innates: ['Natural Cure','Regenerator','Serene Grace'],
    otherFormes: ['Audino'],
    weightkg: 0,
    types: ['Normal','Fairy'],
    genderR: 127
  },
  'Diancie Mega': {
    id: 945,
    bs: {hp: 50,at: 160,df: 110,sa: 160,sd: 110,sp: 110},
    abilities: ['Magic Bounce','Magic Bounce','Magic Bounce'],
    innates: ['Clear Body','Levitate','Magic Guard'],
    otherFormes: ['Diancie'],
    weightkg: 0,
    types: ['Rock','Fairy'],
    genderR: 255
  },
  'Rayquaza Mega': {
    id: 946,
    bs: {hp: 105,at: 180,df: 100,sa: 180,sd: 100,sp: 115},
    abilities: ['Dragons Maw','Deadeye','Mold Breaker'],
    innates: ['Delta Stream','Weather Control','Aerilate'],
    otherFormes: ['Rayquaza'],
    weightkg: 0,
    types: ['Dragon','Flying'],
    genderR: 255
  },
  'Kyogre Primal': {
    id: 947,
    bs: {hp: 100,at: 150,df: 90,sa: 180,sd: 160,sp: 90},
    abilities: ['Artillery','Artillery','Artillery'],
    innates: ['Swift Swim','Primal Armor','Primordial Sea'],
    otherFormes: ['Kyogre'],
    weightkg: 0,
    types: ['Water'],
    genderR: 255
  },
  'Groudon Primal': {
    id: 948,
    bs: {hp: 100,at: 180,df: 160,sa: 150,sd: 90,sp: 90},
    abilities: ['Tough Claws','Tough Claws','Tough Claws'],
    innates: ['Molten Down','Primal Armor','Desolate Land'],
    otherFormes: ['Groudon'],
    weightkg: 0,
    types: ['Ground','Fire'],
    genderR: 255
  },
  'Rattata Alolan': {
    id: 949,
    bs: {hp: 30,at: 56,df: 35,sa: 25,sd: 35,sp: 72},
    abilities: ['Hustle','Cheek Pouch','Looter'],
    innates: ['Thick Fat','Run Away','Gluttony'],
    otherFormes: ['Rattata'],
    nfe: true,
    weightkg: 0,
    types: ['Dark','Normal'],
    genderR: 127
  },
  'Raticate Alolan': {
    id: 950,
    bs: {hp: 75,at: 86,df: 80,sa: 40,sd: 80,sp: 77},
    abilities: ['Hustle','Cheek Pouch','Cheap Tactics'],
    innates: ['Thick Fat','Gluttony','Growing Tooth'],
    otherFormes: ['Raticate'],
    weightkg: 0,
    types: ['Dark','Normal'],
    genderR: 127
  },
  'Raichu Alolan': {
    id: 951,
    bs: {hp: 60,at: 85,df: 50,sa: 95,sd: 85,sp: 115},
    abilities: ['Psychic Mind','Short Circuit','Electric Surge'],
    innates: ['Surge Surfer','Levitate','Ground Shock'],
    otherFormes: ['Raichu'],
    weightkg: 0,
    types: ['Electric','Psychic'],
    genderR: 127
  },
  'Sandshrew Alolan': {
    id: 952,
    bs: {hp: 50,at: 75,df: 90,sa: 10,sd: 35,sp: 40},
    abilities: ['Snow Cloak','Stamina','Mountaineer'],
    innates: ['Lets Roll','Slush Rush','Battle Armor'],
    otherFormes: ['Sandshrew'],
    nfe: true,
    weightkg: 0,
    types: ['Ice','Steel'],
    genderR: 127
  },
  'Sandslash Alolan': {
    id: 953,
    bs: {hp: 95,at: 100,df: 120,sa: 25,sd: 65,sp: 65},
    abilities: ['Slush Rush','Stamina','Mountaineer'],
    innates: ['Lets Roll','Tough Claws','Iron Barbs'],
    otherFormes: ['Sandslash'],
    weightkg: 0,
    types: ['Ice','Steel'],
    genderR: 127
  },
  'Vulpix Alolan': {
    id: 954,
    bs: {hp: 38,at: 41,df: 40,sa: 50,sd: 65,sp: 65},
    abilities: ['Ice Dew','Ice Body','Snow Warning'],
    innates: ['Quick Feet','Refrigerate'],
    otherFormes: ['Vulpix'],
    nfe: true,
    weightkg: 0,
    types: ['Ice'],
    genderR: 191
  },
  'Ninetales Alolan': {
    id: 955,
    bs: {hp: 73,at: 67,df: 75,sa: 91,sd: 100,sp: 109},
    abilities: ['Frozen Soul','North Wind','Snow Warning'],
    innates: ['Queenly Majesty','Refrigerate','Ice Dew'],
    otherFormes: ['Ninetales'],
    weightkg: 0,
    types: ['Ice','Fairy'],
    genderR: 191
  },
  'Diglett Alolan': {
    id: 956,
    bs: {hp: 10,at: 55,df: 30,sa: 35,sd: 45,sp: 90},
    abilities: ['Sand Force','Arena Trap','Steelworker'],
    innates: ['Tangling Hair','Sand Rush'],
    otherFormes: ['Diglett'],
    nfe: true,
    weightkg: 0,
    types: ['Ground','Steel'],
    genderR: 127
  },
  'Dugtrio Alolan': {
    id: 957,
    bs: {hp: 35,at: 100,df: 60,sa: 50,sd: 70,sp: 110},
    abilities: ['Sand Rush','Arena Trap','Steelworker'],
    innates: ['Multi Headed','Sand Force','Speed Force'],
    otherFormes: ['Dugtrio'],
    weightkg: 0,
    types: ['Ground','Steel'],
    genderR: 127
  },
  'Meowth Alolan': {
    id: 958,
    bs: {hp: 40,at: 35,df: 35,sa: 50,sd: 40,sp: 90},
    abilities: ['Sniper','Limber','Prankster'],
    innates: ['Perfectionist','Technician','Opportunist'],
    otherFormes: ['Meowth'],
    nfe: true,
    weightkg: 0,
    types: ['Dark'],
    genderR: 127
  },
  'Persian Alolan': {
    id: 959,
    bs: {hp: 65,at: 75,df: 70,sa: 105,sd: 65,sp: 115},
    abilities: ['Cheap Tactics','Opportunist','Prankster'],
    innates: ['Perfectionist','Coward','Fur Coat'],
    otherFormes: ['Persian'],
    weightkg: 0,
    types: ['Dark'],
    genderR: 127
  },
  'Geodude Alolan': {
    id: 960,
    bs: {hp: 40,at: 80,df: 100,sa: 30,sd: 30,sp: 20},
    abilities: ['Magnet Pull','Rock Head','Fort Knox'],
    innates: ['Lets Roll','Sturdy','Galvanize'],
    otherFormes: ['Geodude'],
    nfe: true,
    weightkg: 0,
    types: ['Rock','Electric'],
    genderR: 127
  },
  'Graveler Alolan': {
    id: 961,
    bs: {hp: 55,at: 95,df: 115,sa: 45,sd: 45,sp: 35},
    abilities: ['Magnet Pull','Rock Head','Fort Knox'],
    innates: ['Lets Roll','Sturdy','Galvanize'],
    otherFormes: ['Graveler'],
    nfe: true,
    weightkg: 0,
    types: ['Rock','Electric'],
    genderR: 127
  },
  'Golem Alolan': {
    id: 962,
    bs: {hp: 90,at: 135,df: 130,sa: 55,sd: 65,sp: 45},
    abilities: ['Magnet Pull','Ground Shock','Fort Knox'],
    innates: ['Lets Roll','Sturdy','Galvanize'],
    otherFormes: ['Golem'],
    weightkg: 0,
    types: ['Rock','Electric'],
    genderR: 127
  },
  'Grimer Alolan': {
    id: 963,
    bs: {hp: 80,at: 80,df: 50,sa: 40,sd: 50,sp: 25},
    abilities: ['Regenerator','Sticky Hold','Poison Absorb'],
    innates: ['Poison Touch','Liquified','Gluttony'],
    otherFormes: ['Grimer'],
    nfe: true,
    weightkg: 0,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Muk Alolan': {
    id: 964,
    bs: {hp: 105,at: 105,df: 75,sa: 65,sd: 100,sp: 50},
    abilities: ['Regenerator','Sticky Hold','Self Sufficient'],
    innates: ['Poison Touch','Liquified','Gluttony'],
    otherFormes: ['Muk'],
    weightkg: 0,
    types: ['Poison','Dark'],
    genderR: 127
  },
  'Exeggutor Alolan': {
    id: 965,
    bs: {hp: 95,at: 105,df: 85,sa: 125,sd: 75,sp: 45},
    abilities: ['Natural Cure','Chloroplast','Solar Power'],
    innates: ['Harvest','Multi Headed','Skill Link'],
    otherFormes: ['Exeggutor'],
    weightkg: 0,
    types: ['Grass','Dragon'],
    genderR: 127
  },
  'Marowak Alolan': {
    id: 966,
    bs: {hp: 75,at: 80,df: 110,sa: 50,sd: 80,sp: 60},
    abilities: ['Flame Body','Lightning Rod','Skill Link'],
    innates: ['Bone Zone','Vengeance','Rock Head'],
    otherFormes: ['Marowak'],
    weightkg: 0,
    types: ['Fire','Ghost'],
    genderR: 127
  },
  'Meowth Galarian': {
    id: 1269,
    bs: {hp: 50,at: 65,df: 55,sa: 40,sd: 40,sp: 40},
    abilities: ['Sniper','Rough Skin','Unnerve'],
    innates: ['Tough Claws','Opportunist','Perfectionist'],
    otherFormes: ['Meowth'],
    nfe: true,
    weightkg: 0,
    types: ['Steel'],
    genderR: 127
  },
  'Ponyta Galarian': {
    id: 1270,
    bs: {hp: 50,at: 85,df: 55,sa: 65,sd: 65,sp: 90},
    abilities: ['Run Away','Pastel Veil','Anticipation'],
    innates: ['Quick Feet','Psychic Mind','Natural Cure'],
    otherFormes: ['Ponyta'],
    nfe: true,
    weightkg: 0,
    types: ['Fire','Fairy'],
    genderR: 127
  },
  'Rapidash Galarian': {
    id: 1271,
    bs: {hp: 85,at: 110,df: 70,sa: 75,sd: 80,sp: 120},
    abilities: ['Dazzling','Pastel Veil','Keen Edge'],
    innates: ['Pixilate','Psychic Mind','Striker'],
    otherFormes: ['Rapidash'],
    weightkg: 0,
    types: ['Fire','Fairy'],
    genderR: 127
  },
  'Slowpoke Galarian': {
    id: 1272,
    bs: {hp: 90,at: 65,df: 65,sa: 40,sd: 40,sp: 15},
    abilities: ['Gluttony','Own Tempo','Regenerator'],
    innates: [''],
    otherFormes: ['Slowpoke'],
    nfe: true,
    weightkg: 0,
    types: ['Psychic'],
    genderR: 127
  },
  'Slowbro Galarian': {
    id: 1273,
    bs: {hp: 115,at: 100,df: 105,sa: 100,sd: 90,sp: 30},
    abilities: ['Quick Draw','Poison Touch','Regenerator'],
    innates: ['Oblivious','Own Tempo','Unaware'],
    otherFormes: ['Slowbro'],
    weightkg: 0,
    types: ['Poison','Psychic'],
    genderR: 127
  },
  'Farfetchd Galarian': {
    id: 1274,
    bs: {hp: 52,at: 95,df: 55,sa: 58,sd: 62,sp: 55},
    abilities: ['Steadfast','None','None'],
    innates: ['Scrappy','Sniper'],
    otherFormes: ['Farfetchd'],
    nfe: true,
    weightkg: 0,
    types: ['Fighting'],
    genderR: 127
  },
  'Weezing Galarian': {
    id: 1275,
    bs: {hp: 65,at: 90,df: 120,sa: 85,sd: 70,sp: 60},
    abilities: ['Levitate','Neutralizing Gas','Misty Surge'],
    innates: [''],
    otherFormes: ['Weezing'],
    weightkg: 0,
    types: ['Poison','Fairy'],
    genderR: 127
  },
  'Mr Mime Galarian': {
    id: 1276,
    bs: {hp: 50,at: 65,df: 65,sa: 90,sd: 90,sp: 100},
    abilities: ['Vital Spirit','Screen Cleaner','Ice Body'],
    innates: [''],
    otherFormes: ['Mr Mime'],
    nfe: true,
    weightkg: 0,
    types: ['Ice','Psychic'],
    genderR: 127
  },
  'Articuno Galarian': {
    id: 1277,
    bs: {hp: 90,at: 85,df: 85,sa: 125,sd: 100,sp: 95},
    abilities: ['Competitive','Intimidate','Scare'],
    innates: ['Aurora Borealis','Permafrost','Refrigerate'],
    otherFormes: ['Articuno'],
    weightkg: 0,
    types: ['Psychic','Flying'],
    genderR: 255
  },
  'Zapdos Galarian': {
    id: 1278,
    bs: {hp: 90,at: 125,df: 90,sa: 85,sd: 90,sp: 100},
    abilities: ['Defiant','Aerodynamics','Scrappy'],
    innates: ['Striker','Lightning Rod','Galvanize'],
    otherFormes: ['Zapdos'],
    weightkg: 0,
    types: ['Fighting','Flying'],
    genderR: 255
  },
  'Moltres Galarian': {
    id: 1279,
    bs: {hp: 90,at: 85,df: 90,sa: 100,sd: 125,sp: 90},
    abilities: ['Berserk','Soul Eater','Giant Wings'],
    innates: ['Dark Aura','Shadow Shield','Immolate'],
    otherFormes: ['Moltres'],
    weightkg: 0,
    types: ['Dark','Flying'],
    genderR: 255
  },
  'Slowking Galarian': {
    id: 1280,
    bs: {hp: 95,at: 65,df: 80,sa: 110,sd: 110,sp: 30},
    abilities: ['Curious Medicine','Own Tempo','Regenerator'],
    innates: [''],
    otherFormes: ['Slowking'],
    weightkg: 0,
    types: ['Poison','Psychic'],
    genderR: 127
  },
  'Corsola Galarian': {
    id: 1281,
    bs: {hp: 60,at: 55,df: 100,sa: 65,sd: 100,sp: 30},
    abilities: ['Weak Armor','Weak Armor','Cursed Body'],
    innates: [''],
    otherFormes: ['Corsola'],
    nfe: true,
    weightkg: 0,
    types: ['Ghost'],
    genderR: 191
  },
  'Zigzagoon Galarian': {
    id: 1282,
    bs: {hp: 38,at: 30,df: 41,sa: 30,sd: 41,sp: 60},
    abilities: ['Pickup','Gluttony','Quick Feet'],
    innates: ['Scrappy'],
    otherFormes: ['Zigzagoon'],
    nfe: true,
    weightkg: 0,
    types: ['Dark','Normal'],
    genderR: 127
  },
  'Linoone Galarian': {
    id: 1283,
    bs: {hp: 78,at: 100,df: 61,sa: 50,sd: 61,sp: 110},
    abilities: ['Pickup','Gluttony','Quick Feet'],
    innates: ['Scrappy','Hyper Aggressive'],
    otherFormes: ['Linoone'],
    nfe: true,
    weightkg: 0,
    types: ['Dark','Normal'],
    genderR: 127
  },
  'Darumaka Galarian': {
    id: 1284,
    bs: {hp: 70,at: 90,df: 45,sa: 15,sd: 45,sp: 50},
    abilities: ['Hustle','Inner Focus','None'],
    innates: ['Mold Breaker'],
    otherFormes: ['Darumaka'],
    nfe: true,
    weightkg: 0,
    types: ['Ice'],
    genderR: 127
  },
  'Darmanitan Galarian': {
    id: 1285,
    bs: {hp: 105,at: 140,df: 55,sa: 30,sd: 55,sp: 95},
    abilities: ['Gorilla Tactics','Sheer Force','Zen Mode'],
    innates: ['Mold Breaker','Iron Fist','Heatproof'],
    otherFormes: ['Darmanitan'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 127
  },
  'Yamask Galarian': {
    id: 1286,
    bs: {hp: 38,at: 55,df: 85,sa: 30,sd: 65,sp: 30},
    abilities: ['Wandering Spirit','Wandering Spirit','Wandering Spirit'],
    innates: ['Haunted Spirit','Cursed Body'],
    otherFormes: ['Yamask'],
    nfe: true,
    weightkg: 0,
    types: ['Ground','Ghost'],
    genderR: 127
  },
  'Stunfisk Galarian': {
    id: 1287,
    bs: {hp: 109,at: 81,df: 99,sa: 66,sd: 84,sp: 32},
    abilities: ['Mimicry','Mimicry','Mimicry'],
    innates: [''],
    otherFormes: ['Stunfisk'],
    weightkg: 0,
    types: ['Ground','Steel'],
    genderR: 127
  },
  'Pikachu Cosplay': {
    id: 986,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Rock Star': {
    id: 987,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Belle': {
    id: 988,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Pop Star': {
    id: 989,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Ph D': {
    id: 990,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Libre': {
    id: 991,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Pikachu Original Cap': {
    id: 992,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Hoenn Cap': {
    id: 993,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Sinnoh Cap': {
    id: 994,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Unova Cap': {
    id: 995,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Kalos Cap': {
    id: 996,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Alola Cap': {
    id: 997,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu Partner Cap': {
    id: 998,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pikachu World Cap': {
    id: 999,
    bs: {hp: 35,at: 55,df: 40,sa: 50,sd: 50,sp: 90},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pikachu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 0
  },
  'Pichu Spiky Eared': {
    id: 1000,
    bs: {hp: 20,at: 40,df: 15,sa: 35,sd: 35,sp: 60},
    abilities: ['Electrocytes','Static','Electric Burst'],
    innates: ['Short Circuit','Plus','Ground Shock'],
    otherFormes: ['Pichu'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 127
  },
  'Unown B': {
    id: 1001,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown C': {
    id: 1002,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown D': {
    id: 1003,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown E': {
    id: 1004,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown F': {
    id: 1005,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown G': {
    id: 1006,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown H': {
    id: 1007,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown I': {
    id: 1008,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown J': {
    id: 1009,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown K': {
    id: 1010,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown L': {
    id: 1011,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown M': {
    id: 1012,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown N': {
    id: 1013,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown O': {
    id: 1014,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown P': {
    id: 1015,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown Q': {
    id: 1016,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown R': {
    id: 1017,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown S': {
    id: 1018,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown T': {
    id: 1019,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown U': {
    id: 1020,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown V': {
    id: 1021,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown W': {
    id: 1022,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown X': {
    id: 1023,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown Y': {
    id: 1024,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown Z': {
    id: 1025,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown Emark': {
    id: 1026,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Unown Qmark': {
    id: 1027,
    bs: {hp: 48,at: 72,df: 48,sa: 72,sd: 48,sp: 48},
    abilities: ['Mystic Power','None','None'],
    innates: ['Levitate'],
    otherFormes: ['Unown'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Castform Sunny': {
    id: 1028,
    bs: {hp: 70,at: 70,df: 70,sa: 100,sd: 70,sp: 100},
    abilities: ['Forecast','Forecast','Forecast'],
    innates: ['Levitate','Weather Control','Limber'],
    otherFormes: ['Castform'],
    weightkg: 0,
    types: ['Fire'],
    genderR: 127
  },
  'Castform Rainy': {
    id: 1029,
    bs: {hp: 70,at: 70,df: 70,sa: 100,sd: 70,sp: 100},
    abilities: ['Forecast','Forecast','Forecast'],
    innates: ['Levitate','Weather Control','Limber'],
    otherFormes: ['Castform'],
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Castform Snowy': {
    id: 1030,
    bs: {hp: 70,at: 70,df: 70,sa: 100,sd: 70,sp: 100},
    abilities: ['Forecast','Forecast','Forecast'],
    innates: ['Levitate','Weather Control','Limber'],
    otherFormes: ['Castform'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 127
  },
  'Deoxys Attack': {
    id: 1031,
    bs: {hp: 50,at: 180,df: 20,sa: 180,sd: 20,sp: 150},
    abilities: ['Pressure','Levitate','Speed Boost'],
    innates: ['Inner Focus','Fatal Precision','Psychic Mind'],
    otherFormes: ['Deoxys'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Deoxys Defense': {
    id: 1032,
    bs: {hp: 50,at: 70,df: 160,sa: 70,sd: 160,sp: 90},
    abilities: ['Sturdy','Levitate','Fort Knox'],
    innates: ['Inner Focus','Stamina','Regenerator'],
    otherFormes: ['Deoxys'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Deoxys Speed': {
    id: 1033,
    bs: {hp: 50,at: 95,df: 90,sa: 95,sd: 90,sp: 180},
    abilities: ['Pressure','Inner Focus','Speed Boost'],
    innates: ['Levitate','Fatal Precision','Psychic Mind'],
    otherFormes: ['Deoxys'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Burmy Sandy Cloak': {
    id: 1034,
    bs: {hp: 40,at: 29,df: 45,sa: 29,sd: 45,sp: 36},
    abilities: ['Shed Skin','None','Overcoat'],
    innates: ['Swarm'],
    otherFormes: ['Burmy'],
    nfe: true,
    weightkg: 0,
    types: ['Bug'],
    genderR: 127
  },
  'Burmy Trash Cloak': {
    id: 1035,
    bs: {hp: 40,at: 29,df: 45,sa: 29,sd: 45,sp: 36},
    abilities: ['Shed Skin','None','Overcoat'],
    innates: ['Swarm'],
    otherFormes: ['Burmy'],
    nfe: true,
    weightkg: 0,
    types: ['Bug'],
    genderR: 127
  },
  'Wormadam Sandy Cloak': {
    id: 1036,
    bs: {hp: 80,at: 99,df: 105,sa: 59,sd: 85,sp: 36},
    abilities: ['Anticipation','Rock Head','Overcoat'],
    innates: ['Swarm','Battle Armor','Tectonize'],
    otherFormes: ['Wormadam'],
    weightkg: 0,
    types: ['Bug','Ground'],
    genderR: 254
  },
  'Wormadam Trash Cloak': {
    id: 1037,
    bs: {hp: 80,at: 69,df: 105,sa: 69,sd: 105,sp: 36},
    abilities: ['Anticipation','Weak Armor','Overcoat'],
    innates: ['Swarm','Battle Armor','Scrapyard'],
    otherFormes: ['Wormadam'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 254
  },
  'Cherrim Sunshine': {
    id: 1038,
    bs: {hp: 70,at: 100,df: 70,sa: 87,sd: 78,sp: 85},
    abilities: ['Leaf Guard','Flower Gift','None'],
    innates: ['Chlorophyll','Solar Power','Solar Flare'],
    otherFormes: ['Cherrim'],
    weightkg: 0,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Shellos East Sea': {
    id: 1039,
    bs: {hp: 76,at: 48,df: 48,sa: 57,sd: 62,sp: 34},
    abilities: ['Shell Armor','Storm Drain','Regenerator'],
    innates: ['Sticky Hold','Self Sufficient','Limber'],
    otherFormes: ['Shellos'],
    nfe: true,
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Gastrodon East Sea': {
    id: 1040,
    bs: {hp: 111,at: 83,df: 68,sa: 92,sd: 82,sp: 39},
    abilities: ['Shell Armor','Storm Drain','Regenerator'],
    innates: ['Sticky Hold','Self Sufficient','Tectonize'],
    otherFormes: ['Gastrodon'],
    weightkg: 0,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Rotom Heat': {
    id: 1041,
    bs: {hp: 50,at: 65,df: 107,sa: 115,sd: 107,sp: 86},
    abilities: ['Flash Fire','None','Motor Drive'],
    innates: ['Levitate','Minus','Phantom'],
    otherFormes: ['Rotom'],
    weightkg: 0,
    types: ['Electric','Fire'],
    genderR: 255
  },
  'Rotom Wash': {
    id: 1042,
    bs: {hp: 50,at: 65,df: 107,sa: 115,sd: 107,sp: 86},
    abilities: ['Water Absorb','None','Motor Drive'],
    innates: ['Levitate','Minus','Phantom'],
    otherFormes: ['Rotom'],
    weightkg: 0,
    types: ['Electric','Water'],
    genderR: 255
  },
  'Rotom Frost': {
    id: 1043,
    bs: {hp: 50,at: 65,df: 107,sa: 115,sd: 107,sp: 86},
    abilities: ['Ice Dew','None','Motor Drive'],
    innates: ['Levitate','Minus','Phantom'],
    otherFormes: ['Rotom'],
    weightkg: 0,
    types: ['Electric','Ice'],
    genderR: 255
  },
  'Rotom Fan': {
    id: 1044,
    bs: {hp: 50,at: 65,df: 107,sa: 115,sd: 107,sp: 86},
    abilities: ['Volt Absorb','None','Motor Drive'],
    innates: ['Air Blower','Minus','Phantom'],
    otherFormes: ['Rotom'],
    weightkg: 0,
    types: ['Electric','Flying'],
    genderR: 255
  },
  'Rotom Mow': {
    id: 1045,
    bs: {hp: 50,at: 65,df: 107,sa: 115,sd: 107,sp: 86},
    abilities: ['Sap Sipper','None','Motor Drive'],
    innates: ['Levitate','Minus','Phantom'],
    otherFormes: ['Rotom'],
    weightkg: 0,
    types: ['Electric','Grass'],
    genderR: 255
  },
  'Giratina Origin': {
    id: 1046,
    bs: {hp: 150,at: 120,df: 100,sa: 120,sd: 100,sp: 90},
    abilities: ['Intimidate','Scare','Twisted Dimension'],
    innates: ['Levitate','Shadow Tag','Soul Eater'],
    otherFormes: ['Giratina'],
    weightkg: 0,
    types: ['Ghost','Dragon'],
    genderR: 255
  },
  'Shaymin Sky': {
    id: 1047,
    bs: {hp: 100,at: 103,df: 75,sa: 120,sd: 75,sp: 127},
    abilities: ['Magic Bounce','Aerodynamics','Pixilate'],
    innates: ['Natural Cure','Serene Grace','Speed Boost'],
    otherFormes: ['Shaymin'],
    weightkg: 0,
    types: ['Grass','Flying'],
    genderR: 255
  },
  'Arceus Fighting': {
    id: 1048,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Fighting'],
    genderR: 255
  },
  'Arceus Flying': {
    id: 1049,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Flying'],
    genderR: 255
  },
  'Arceus Poison': {
    id: 1050,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Poison'],
    genderR: 255
  },
  'Arceus Ground': {
    id: 1051,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Ground'],
    genderR: 255
  },
  'Arceus Rock': {
    id: 1052,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Rock'],
    genderR: 255
  },
  'Arceus Bug': {
    id: 1053,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Bug'],
    genderR: 255
  },
  'Arceus Ghost': {
    id: 1054,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Ghost'],
    genderR: 255
  },
  'Arceus Steel': {
    id: 1055,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Steel'],
    genderR: 255
  },
  'Arceus Fire': {
    id: 1056,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Fire'],
    genderR: 255
  },
  'Arceus Water': {
    id: 1057,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Water'],
    genderR: 255
  },
  'Arceus Grass': {
    id: 1058,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Grass'],
    genderR: 255
  },
  'Arceus Electric': {
    id: 1059,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 255
  },
  'Arceus Psychic': {
    id: 1060,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Arceus Ice': {
    id: 1061,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 255
  },
  'Arceus Dragon': {
    id: 1062,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Dragon'],
    genderR: 255
  },
  'Arceus Dark': {
    id: 1063,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Dark'],
    genderR: 255
  },
  'Arceus Fairy': {
    id: 1064,
    bs: {hp: 120,at: 120,df: 120,sa: 120,sd: 120,sp: 120},
    abilities: ['Multitype','Multitype','Multitype'],
    innates: ['Power Core','Pressure','Levitate'],
    otherFormes: ['Arceus'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 255
  },
  'Basculin Blue Striped': {
    id: 1065,
    bs: {hp: 70,at: 92,df: 65,sa: 80,sd: 55,sp: 118},
    abilities: ['Mold Breaker','Strong Jaw','Predator'],
    innates: ['Rock Head','Adaptability','Hyper Aggressive'],
    otherFormes: ['Basculin'],
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Darmanitan Zen Mode': {
    id: 1066,
    bs: {hp: 105,at: 30,df: 105,sa: 140,sd: 105,sp: 55},
    abilities: ['Sheer Force','Psychic Mind','Zen Mode'],
    innates: ['Inner Focus','Impenetrable','Clear Body'],
    otherFormes: ['Darmanitan'],
    weightkg: 0,
    types: ['Fire','Psychic'],
    genderR: 127
  },
  'Darmanitan Zen Mode Galarian': {
    id: 1067,
    bs: {hp: 105,at: 160,df: 55,sa: 30,sd: 55,sp: 135},
    abilities: ['Gorilla Tactics','Sheer Force','Zen Mode'],
    innates: ['Mold Breaker','Power Fists','Heatproof'],
    otherFormes: ['Darmanitan'],
    weightkg: 0,
    types: ['Ice','Fire'],
    genderR: 127
  },
  'Deerling Summer': {
    id: 1068,
    bs: {hp: 60,at: 60,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush'],
    otherFormes: ['Deerling'],
    nfe: true,
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Deerling Autumn': {
    id: 1069,
    bs: {hp: 60,at: 60,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush'],
    otherFormes: ['Deerling'],
    nfe: true,
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Deerling Winter': {
    id: 1070,
    bs: {hp: 60,at: 60,df: 50,sa: 40,sd: 50,sp: 75},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush'],
    otherFormes: ['Deerling'],
    nfe: true,
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Sawsbuck Summer': {
    id: 1071,
    bs: {hp: 80,at: 100,df: 70,sa: 60,sd: 70,sp: 95},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush','Rivalry'],
    otherFormes: ['Sawsbuck'],
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Sawsbuck Autumn': {
    id: 1072,
    bs: {hp: 80,at: 100,df: 70,sa: 60,sd: 70,sp: 95},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush','Rivalry'],
    otherFormes: ['Sawsbuck'],
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Sawsbuck Winter': {
    id: 1073,
    bs: {hp: 80,at: 100,df: 70,sa: 60,sd: 70,sp: 95},
    abilities: ['Chlorophyll','None','Serene Grace'],
    innates: ['Sap Sipper','Violent Rush','Rivalry'],
    otherFormes: ['Sawsbuck'],
    weightkg: 0,
    types: ['Normal','Grass'],
    genderR: 127
  },
  'Tornadus Therian': {
    id: 1074,
    bs: {hp: 79,at: 100,df: 80,sa: 110,sd: 90,sp: 121},
    abilities: ['Air Blower','Cloud Nine','Speed Boost'],
    innates: ['Prankster','Weather Control','Keen Eye'],
    otherFormes: ['Tornadus'],
    weightkg: 0,
    types: ['Flying'],
    genderR: 0
  },
  'Thundurus Therian': {
    id: 1075,
    bs: {hp: 79,at: 105,df: 70,sa: 145,sd: 80,sp: 101},
    abilities: ['Electrocytes','Teravolt','Ground Shock'],
    innates: ['Overcharge','Weather Control','Volt Absorb'],
    otherFormes: ['Thundurus'],
    weightkg: 0,
    types: ['Electric','Flying'],
    genderR: 0
  },
  'Landorus Therian': {
    id: 1076,
    bs: {hp: 89,at: 145,df: 90,sa: 105,sd: 80,sp: 91},
    abilities: ['Sheer Force','Aerilate','Moxie'],
    innates: ['Sand Force','Intimidate','Regenerator'],
    otherFormes: ['Landorus'],
    weightkg: 0,
    types: ['Ground','Flying'],
    genderR: 0
  },
  'Kyurem White': {
    id: 1077,
    bs: {hp: 125,at: 120,df: 90,sa: 170,sd: 100,sp: 95},
    abilities: ['Beast Boost','Refrigerate','Snow Warning'],
    innates: ['Turboblaze','Permafrost','Whiteout'],
    otherFormes: ['Kyurem'],
    weightkg: 0,
    types: ['Dragon','Ice'],
    genderR: 255
  },
  'Kyurem Black': {
    id: 1078,
    bs: {hp: 125,at: 170,df: 100,sa: 120,sd: 90,sp: 95},
    abilities: ['Beast Boost','Refrigerate','Snow Warning'],
    innates: ['Teravolt','Permafrost','Multiscale'],
    otherFormes: ['Kyurem'],
    weightkg: 0,
    types: ['Dragon','Ice'],
    genderR: 255
  },
  'Keldeo Resolute': {
    id: 1079,
    bs: {hp: 91,at: 72,df: 90,sa: 129,sd: 90,sp: 108},
    abilities: ['Justified','Avenger','Dragonslayer'],
    innates: ['Steadfast','Field Explorer','Keen Edge'],
    otherFormes: ['Keldeo'],
    weightkg: 0,
    types: ['Water','Fighting'],
    genderR: 255
  },
  'Meloetta Pirouette': {
    id: 1080,
    bs: {hp: 100,at: 128,df: 90,sa: 77,sd: 77,sp: 128},
    abilities: ['Fight Spirit','Defiant','Super Luck'],
    innates: ['Serene Grace','Inner Focus','Striker'],
    otherFormes: ['Meloetta'],
    weightkg: 0,
    types: ['Normal','Fighting'],
    genderR: 255
  },
  'Genesect Douse Drive': {
    id: 1081,
    bs: {hp: 71,at: 120,df: 95,sa: 120,sd: 95,sp: 99},
    abilities: ['Download','Fatal Precision','Sighting System'],
    innates: ['Full Metal Body','Predator','Mega Launcher'],
    otherFormes: ['Genesect'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 255
  },
  'Genesect Shock Drive': {
    id: 1082,
    bs: {hp: 71,at: 120,df: 95,sa: 120,sd: 95,sp: 99},
    abilities: ['Download','Fatal Precision','Sighting System'],
    innates: ['Full Metal Body','Predator','Mega Launcher'],
    otherFormes: ['Genesect'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 255
  },
  'Genesect Burn Drive': {
    id: 1083,
    bs: {hp: 71,at: 120,df: 95,sa: 120,sd: 95,sp: 99},
    abilities: ['Download','Fatal Precision','Sighting System'],
    innates: ['Full Metal Body','Predator','Mega Launcher'],
    otherFormes: ['Genesect'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 255
  },
  'Genesect Chill Drive': {
    id: 1084,
    bs: {hp: 71,at: 120,df: 95,sa: 120,sd: 95,sp: 99},
    abilities: ['Download','Fatal Precision','Sighting System'],
    innates: ['Full Metal Body','Predator','Mega Launcher'],
    otherFormes: ['Genesect'],
    weightkg: 0,
    types: ['Bug','Steel'],
    genderR: 255
  },
  'Greninja Battle Bond': {
    id: 1085,
    bs: {hp: 72,at: 95,df: 67,sa: 103,sd: 71,sp: 122},
    abilities: ['Battle Bond','Battle Bond','Battle Bond'],
    innates: ['Torrent','Skill Link','Fatal Precision'],
    otherFormes: ['Greninja'],
    weightkg: 0,
    types: ['Water','Dark'],
    genderR: 0
  },
  'Greninja Ash': {
    id: 1086,
    bs: {hp: 72,at: 145,df: 67,sa: 153,sd: 71,sp: 132},
    abilities: ['Battle Bond','Battle Bond','Battle Bond'],
    innates: ['Torrent','Skill Link','Fatal Precision'],
    otherFormes: ['Greninja'],
    weightkg: 0,
    types: ['Water','Dark'],
    genderR: 0
  },
  'Vivillon Polar': {
    id: 1087,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Tundra': {
    id: 1088,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Continental': {
    id: 1089,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Garden': {
    id: 1090,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Elegant': {
    id: 1091,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Meadow': {
    id: 1092,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Modern': {
    id: 1093,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Marine': {
    id: 1094,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Archipelago': {
    id: 1095,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon High Plains': {
    id: 1096,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Sandstorm': {
    id: 1097,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon River': {
    id: 1098,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Monsoon': {
    id: 1099,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Savanna': {
    id: 1100,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Sun': {
    id: 1101,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Ocean': {
    id: 1102,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Jungle': {
    id: 1103,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Fancy': {
    id: 1104,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Vivillon Poke Ball': {
    id: 1105,
    bs: {hp: 80,at: 52,df: 50,sa: 90,sd: 50,sp: 89},
    abilities: ['Swarm','Tinted Lens','Effect Spore'],
    innates: ['Shield Dust','Compound Eyes','Majestic Moth'],
    otherFormes: ['Vivillon'],
    weightkg: 0,
    types: ['Bug','Flying'],
    genderR: 127
  },
  'Flabebe Yellow Flower': {
    id: 1106,
    bs: {hp: 44,at: 38,df: 39,sa: 61,sd: 79,sp: 42},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Flabebe'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Flabebe Orange Flower': {
    id: 1107,
    bs: {hp: 44,at: 38,df: 39,sa: 61,sd: 79,sp: 42},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Flabebe'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Flabebe Blue Flower': {
    id: 1108,
    bs: {hp: 44,at: 38,df: 39,sa: 61,sd: 79,sp: 42},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Flabebe'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Flabebe White Flower': {
    id: 1109,
    bs: {hp: 44,at: 38,df: 39,sa: 61,sd: 79,sp: 42},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Flabebe'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette Yellow Flower': {
    id: 1110,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette Orange Flower': {
    id: 1111,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette Blue Flower': {
    id: 1112,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette White Flower': {
    id: 1113,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette'],
    nfe: true,
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Floette Eternal Flower': {
    id: 1114,
    bs: {hp: 54,at: 45,df: 47,sa: 75,sd: 98,sp: 52},
    abilities: ['Flower Veil','None','Symbiosis'],
    innates: ['Natural Cure','Absorbant','Self Sufficient'],
    otherFormes: ['Floette'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Florges Yellow Flower': {
    id: 1115,
    bs: {hp: 78,at: 65,df: 68,sa: 112,sd: 154,sp: 75},
    abilities: ['Harvest','Misty Surge','Fairy Aura'],
    innates: ['Natural Cure','Regenerator','Self Sufficient'],
    otherFormes: ['Florges'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Florges Orange Flower': {
    id: 1116,
    bs: {hp: 78,at: 65,df: 68,sa: 112,sd: 154,sp: 75},
    abilities: ['Harvest','Misty Surge','Fairy Aura'],
    innates: ['Natural Cure','Regenerator','Self Sufficient'],
    otherFormes: ['Florges'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Florges Blue Flower': {
    id: 1117,
    bs: {hp: 78,at: 65,df: 68,sa: 112,sd: 154,sp: 75},
    abilities: ['Harvest','Misty Surge','Fairy Aura'],
    innates: ['Natural Cure','Regenerator','Self Sufficient'],
    otherFormes: ['Florges'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Florges White Flower': {
    id: 1118,
    bs: {hp: 78,at: 65,df: 68,sa: 112,sd: 154,sp: 75},
    abilities: ['Harvest','Misty Surge','Fairy Aura'],
    innates: ['Natural Cure','Regenerator','Self Sufficient'],
    otherFormes: ['Florges'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Furfrou Heart Trim': {
    id: 1119,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Star Trim': {
    id: 1120,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Diamond Trim': {
    id: 1121,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Debutante Trim': {
    id: 1122,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Matron Trim': {
    id: 1123,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Dandy Trim': {
    id: 1124,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou La Reine Trim': {
    id: 1125,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Kabuki Trim': {
    id: 1126,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Furfrou Pharaoh Trim': {
    id: 1127,
    bs: {hp: 75,at: 80,df: 60,sa: 65,sd: 90,sp: 102},
    abilities: ['Cute Charm','None','None'],
    innates: ['Fur Coat','Overcoat','Fluffy'],
    otherFormes: ['Furfrou'],
    weightkg: 0,
    types: ['Normal'],
    genderR: 127
  },
  'Meowstic Female': {
    id: 1128,
    bs: {hp: 74,at: 48,df: 76,sa: 103,sd: 81,sp: 104},
    abilities: ['Infiltrator','Competitive','Sage Power'],
    innates: ['Psychic Mind','Psychic Surge','Hyper Aggressive'],
    otherFormes: ['Meowstic'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 254
  },
  'Aegislash Blade': {
    id: 1129,
    bs: {hp: 60,at: 140,df: 50,sa: 140,sd: 50,sp: 60},
    abilities: ['Shadow Shield','Dragonslayer','Soul Eater'],
    innates: ['Levitate','Keen Edge','Stance Change'],
    otherFormes: ['Aegislash'],
    weightkg: 0,
    types: ['Steel','Ghost'],
    genderR: 127
  },
  'Pumpkaboo Small': {
    id: 1130,
    bs: {hp: 49,at: 44,df: 70,sa: 66,sd: 55,sp: 51},
    abilities: ['Frisk','Flare Boost','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Pumpkaboo'],
    nfe: true,
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Pumpkaboo Large': {
    id: 1131,
    bs: {hp: 49,at: 44,df: 70,sa: 66,sd: 55,sp: 51},
    abilities: ['Frisk','Flare Boost','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Pumpkaboo'],
    nfe: true,
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Pumpkaboo Super': {
    id: 1132,
    bs: {hp: 49,at: 44,df: 70,sa: 66,sd: 55,sp: 51},
    abilities: ['Frisk','Flare Boost','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Pumpkaboo'],
    nfe: true,
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Gourgeist Small': {
    id: 1133,
    bs: {hp: 55,at: 58,df: 122,sa: 85,sd: 75,sp: 99},
    abilities: ['Flare Boost','Harvest','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Gourgeist'],
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Gourgeist Large': {
    id: 1134,
    bs: {hp: 75,at: 58,df: 122,sa: 95,sd: 75,sp: 69},
    abilities: ['Flare Boost','Harvest','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Gourgeist'],
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Gourgeist Super': {
    id: 1135,
    bs: {hp: 85,at: 58,df: 122,sa: 100,sd: 75,sp: 54},
    abilities: ['Flare Boost','Harvest','Moody'],
    innates: ['Insomnia','Cursed Body','Haunted Spirit'],
    otherFormes: ['Gourgeist'],
    weightkg: 0,
    types: ['Ghost','Grass'],
    genderR: 127
  },
  'Xerneas Active': {
    id: 1136,
    bs: {hp: 126,at: 131,df: 95,sa: 131,sd: 98,sp: 99},
    abilities: ['Pixilate','Competitive','Self Sufficient'],
    innates: ['Fairy Aura','Illuminate','Soul Heart'],
    otherFormes: ['Xerneas'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 255
  },
  'Zygarde 10': {
    id: 1137,
    bs: {hp: 54,at: 100,df: 71,sa: 61,sd: 85,sp: 115},
    abilities: ['Aura Break','Hyper Aggressive','Power Construct'],
    innates: ['Primal Armor','Earthbound','Power Core'],
    otherFormes: ['Zygarde'],
    weightkg: 0,
    types: ['Dragon','Ground'],
    genderR: 255
  },
  'Zygarde 10 Power Construct': {
    id: 1138,
    bs: {hp: 54,at: 100,df: 71,sa: 61,sd: 85,sp: 115},
    abilities: ['Aura Break','Hyper Aggressive','Power Construct'],
    innates: ['Primal Armor','Earthbound','Power Core'],
    otherFormes: ['Zygarde'],
    weightkg: 0,
    types: ['Dragon','Ground'],
    genderR: 255
  },
  'Zygarde 50 Power Construct': {
    id: 1139,
    bs: {hp: 108,at: 100,df: 121,sa: 81,sd: 95,sp: 95},
    abilities: ['Aura Break','Regenerator','Power Construct'],
    innates: ['Primal Armor','Earthbound','Power Core'],
    otherFormes: ['Zygarde'],
    weightkg: 0,
    types: ['Dragon','Ground'],
    genderR: 255
  },
  'Zygarde Complete': {
    id: 1140,
    bs: {hp: 216,at: 100,df: 121,sa: 91,sd: 95,sp: 85},
    abilities: ['Power Construct','Power Construct','Power Construct'],
    innates: ['Primal Armor','Earthbound','Power Core'],
    otherFormes: ['Zygarde'],
    weightkg: 0,
    types: ['Dragon','Ground'],
    genderR: 255
  },
  'Hoopa Unbound': {
    id: 1141,
    bs: {hp: 80,at: 160,df: 60,sa: 170,sd: 130,sp: 80},
    abilities: ['Magician','Magician','Magician'],
    innates: ['Soul Eater','Hyper Aggressive','Infiltrator'],
    otherFormes: ['Hoopa'],
    weightkg: 0,
    types: ['Psychic','Dark'],
    genderR: 255
  },
  'Oricorio Pom Pom': {
    id: 1142,
    bs: {hp: 75,at: 70,df: 70,sa: 108,sd: 70,sp: 103},
    abilities: ['Dancer','Dancer','Dancer'],
    innates: ['Keen Eye','Lightning Rod','Flock'],
    otherFormes: ['Oricorio'],
    weightkg: 0,
    types: ['Electric','Flying'],
    genderR: 191
  },
  'Oricorio Pau': {
    id: 1143,
    bs: {hp: 75,at: 70,df: 70,sa: 108,sd: 70,sp: 103},
    abilities: ['Dancer','Dancer','Dancer'],
    innates: ['Keen Eye','Psychic Mind','Flock'],
    otherFormes: ['Oricorio'],
    weightkg: 0,
    types: ['Psychic','Flying'],
    genderR: 191
  },
  'Oricorio Sensu': {
    id: 1144,
    bs: {hp: 75,at: 70,df: 70,sa: 108,sd: 70,sp: 103},
    abilities: ['Dancer','Dancer','Dancer'],
    innates: ['Keen Eye','Cursed Body','Flock'],
    otherFormes: ['Oricorio'],
    weightkg: 0,
    types: ['Ghost','Flying'],
    genderR: 191
  },
  'Rockruff Own Tempo': {
    id: 1145,
    bs: {hp: 45,at: 65,df: 40,sa: 30,sd: 40,sp: 60},
    abilities: ['Own Tempo','Own Tempo','Own Tempo'],
    innates: ['Keen Eye','Opportunist','Rock Head'],
    otherFormes: ['Rockruff'],
    nfe: true,
    weightkg: 0,
    types: ['Rock'],
    genderR: 127
  },
  'Lycanroc Midnight': {
    id: 1146,
    bs: {hp: 85,at: 115,df: 75,sa: 55,sd: 75,sp: 82},
    abilities: ['Tough Claws','Lunar Eclipse','Predator'],
    innates: ['No Guard','Nocturnal','Hyper Aggressive'],
    otherFormes: ['Lycanroc'],
    weightkg: 0,
    types: ['Rock','Dark'],
    genderR: 127
  },
  'Lycanroc Dusk': {
    id: 1147,
    bs: {hp: 75,at: 117,df: 65,sa: 55,sd: 65,sp: 110},
    abilities: ['Tough Claws','Moxie','Predator'],
    innates: ['Opportunist','Fatal Precision','Rock Head'],
    otherFormes: ['Lycanroc'],
    weightkg: 0,
    types: ['Rock','Fighting'],
    genderR: 127
  },
  'Wishiwashi School': {
    id: 1148,
    bs: {hp: 45,at: 140,df: 130,sa: 140,sd: 135,sp: 30},
    abilities: ['Schooling','Schooling','Schooling'],
    innates: ['Water Veil','Regenerator','Multiscale'],
    otherFormes: ['Wishiwashi'],
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Silvally Fighting': {
    id: 1149,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Fighting'],
    genderR: 255
  },
  'Silvally Flying': {
    id: 1150,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Flying'],
    genderR: 255
  },
  'Silvally Poison': {
    id: 1151,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Poison'],
    genderR: 255
  },
  'Silvally Ground': {
    id: 1152,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Ground'],
    genderR: 255
  },
  'Silvally Rock': {
    id: 1153,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Rock'],
    genderR: 255
  },
  'Silvally Bug': {
    id: 1154,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Bug'],
    genderR: 255
  },
  'Silvally Ghost': {
    id: 1155,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Ghost'],
    genderR: 255
  },
  'Silvally Steel': {
    id: 1156,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Steel'],
    genderR: 255
  },
  'Silvally Fire': {
    id: 1157,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Fire'],
    genderR: 255
  },
  'Silvally Water': {
    id: 1158,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Water'],
    genderR: 255
  },
  'Silvally Grass': {
    id: 1159,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Grass'],
    genderR: 255
  },
  'Silvally Electric': {
    id: 1160,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Electric'],
    genderR: 255
  },
  'Silvally Psychic': {
    id: 1161,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 255
  },
  'Silvally Ice': {
    id: 1162,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 255
  },
  'Silvally Dragon': {
    id: 1163,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Dragon'],
    genderR: 255
  },
  'Silvally Dark': {
    id: 1164,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Dark'],
    genderR: 255
  },
  'Silvally Fairy': {
    id: 1165,
    bs: {hp: 95,at: 95,df: 95,sa: 95,sd: 95,sp: 95},
    abilities: ['Rks System','Rks System','Rks System'],
    innates: ['Adaptability','Anger Point','Primal Armor'],
    otherFormes: ['Silvally'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 255
  },
  'Minior Meteor Orange': {
    id: 1166,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Meteor Yellow': {
    id: 1167,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Meteor Green': {
    id: 1168,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Meteor Blue': {
    id: 1169,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Meteor Indigo': {
    id: 1170,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Meteor Violet': {
    id: 1171,
    bs: {hp: 60,at: 60,df: 100,sa: 60,sd: 100,sp: 60},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Weak Armor','Power Core','Loose Rocks'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Red': {
    id: 1172,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Orange': {
    id: 1173,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Yellow': {
    id: 1174,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Green': {
    id: 1175,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Blue': {
    id: 1176,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Indigo': {
    id: 1177,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Minior Core Violet': {
    id: 1178,
    bs: {hp: 60,at: 100,df: 60,sa: 100,sd: 60,sp: 120},
    abilities: ['Shields Down','Shields Down','Shields Down'],
    innates: ['Innards Out','Power Core','Equinox'],
    otherFormes: ['Minior'],
    weightkg: 0,
    types: ['Rock','Flying'],
    genderR: 255
  },
  'Mimikyu Busted': {
    id: 1179,
    bs: {hp: 55,at: 90,df: 80,sa: 50,sd: 105,sp: 96},
    abilities: ['Disguise','Disguise','Disguise'],
    innates: ['Vengeance','Avenger','Haunted Spirit'],
    otherFormes: ['Mimikyu'],
    weightkg: 0,
    types: ['Ghost','Fairy'],
    genderR: 127
  },
  'Necrozma Dusk Mane': {
    id: 1180,
    bs: {hp: 97,at: 157,df: 127,sa: 113,sd: 109,sp: 77},
    abilities: ['Neuroforce','Rampage','Mega Launcher'],
    innates: ['Solar Flare','Impenetrable','Prism Armor'],
    otherFormes: ['Necrozma'],
    weightkg: 0,
    types: ['Psychic','Steel'],
    genderR: 255
  },
  'Necrozma Dawn Wings': {
    id: 1181,
    bs: {hp: 97,at: 113,df: 109,sa: 157,sd: 127,sp: 77},
    abilities: ['Neuroforce','Rampage','Mega Launcher'],
    innates: ['Lunar Eclipse','Shadow Shield','Levitate'],
    otherFormes: ['Necrozma'],
    weightkg: 0,
    types: ['Psychic','Ghost'],
    genderR: 255
  },
  'Necrozma Ultra': {
    id: 1182,
    bs: {hp: 97,at: 167,df: 97,sa: 167,sd: 97,sp: 129},
    abilities: ['Soul Eater','Rampage','Mega Launcher'],
    innates: ['Beast Boost','Neuroforce','Levitate'],
    otherFormes: ['Necrozma'],
    weightkg: 0,
    types: ['Psychic','Dragon'],
    genderR: 255
  },
  'Magearna Original Color': {
    id: 1183,
    bs: {hp: 80,at: 95,df: 115,sa: 130,sd: 115,sp: 65},
    abilities: ['Steelworker','Pixilate','Mirror Armor'],
    innates: ['Clear Body','Soul Heart','Power Core'],
    otherFormes: ['Magearna'],
    weightkg: 0,
    types: ['Steel','Fairy'],
    genderR: 255
  },
  'Cramorant Gulping': {
    id: 1288,
    bs: {hp: 70,at: 85,df: 55,sa: 85,sd: 95,sp: 85},
    abilities: ['Gulp Missile','Gulp Missile','Gulp Missile'],
    innates: [''],
    otherFormes: ['Cramorant'],
    weightkg: 0,
    types: ['Flying','Water'],
    genderR: 127
  },
  'Cramorant Gorging': {
    id: 1289,
    bs: {hp: 70,at: 85,df: 55,sa: 85,sd: 95,sp: 85},
    abilities: ['Gulp Missile','Gulp Missile','Gulp Missile'],
    innates: [''],
    otherFormes: ['Cramorant'],
    weightkg: 0,
    types: ['Flying','Water'],
    genderR: 127
  },
  'Toxtricity Low Key': {
    id: 1290,
    bs: {hp: 75,at: 98,df: 70,sa: 114,sd: 70,sp: 75},
    abilities: ['Punk Rock','Amplifier','Technician'],
    innates: ['Minus','Water Absorb','Merciless'],
    otherFormes: ['Toxtricity'],
    weightkg: 0,
    types: ['Electric','Poison'],
    genderR: 127
  },
  'Sinistea Antique': {
    id: 1291,
    bs: {hp: 40,at: 45,df: 45,sa: 74,sd: 54,sp: 50},
    abilities: ['Weak Armor','Weak Armor','Cursed Body'],
    innates: [''],
    otherFormes: ['Sinistea'],
    nfe: true,
    weightkg: 0,
    types: ['Ghost'],
    genderR: 255
  },
  'Polteageist Antique': {
    id: 1292,
    bs: {hp: 60,at: 65,df: 65,sa: 134,sd: 114,sp: 70},
    abilities: ['Weak Armor','Weak Armor','Cursed Body'],
    innates: [''],
    otherFormes: ['Polteageist'],
    weightkg: 0,
    types: ['Ghost'],
    genderR: 255
  },
  'Alcremie Ruby Cream': {
    id: 1293,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Matcha Cream': {
    id: 1294,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Mint Cream': {
    id: 1295,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Lemon Cream': {
    id: 1296,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Salted Cream': {
    id: 1297,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Ruby Swirl': {
    id: 1298,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Caramel Swirl': {
    id: 1299,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Alcremie Rainbow Swirl': {
    id: 1300,
    bs: {hp: 65,at: 60,df: 75,sa: 110,sd: 121,sp: 64},
    abilities: ['Sweet Veil','Sweet Veil','Aroma Veil'],
    innates: [''],
    otherFormes: ['Alcremie'],
    weightkg: 0,
    types: ['Fairy'],
    genderR: 254
  },
  'Eiscue Noice Face': {
    id: 1301,
    bs: {hp: 75,at: 80,df: 70,sa: 65,sd: 50,sp: 130},
    abilities: ['Ice Face','Ice Face','Ice Face'],
    innates: [''],
    otherFormes: ['Eiscue'],
    weightkg: 0,
    types: ['Ice'],
    genderR: 127
  },
  'Indeedee Female': {
    id: 1302,
    bs: {hp: 70,at: 55,df: 65,sa: 95,sd: 105,sp: 85},
    abilities: ['Own Tempo','Synchronize','Psychic Surge'],
    innates: [''],
    otherFormes: ['Indeedee'],
    weightkg: 0,
    types: ['Psychic','Normal'],
    genderR: 254
  },
  'Morpeko Hangry': {
    id: 1303,
    bs: {hp: 58,at: 95,df: 58,sa: 70,sd: 58,sp: 97},
    abilities: ['Hunger Switch','Hunger Switch','Hunger Switch'],
    innates: [''],
    otherFormes: ['Morpeko'],
    weightkg: 0,
    types: ['Electric','Dark'],
    genderR: 127
  },
  'Zacian Crowned Sword': {
    id: 1304,
    bs: {hp: 92,at: 170,df: 115,sa: 80,sd: 115,sp: 148},
    abilities: ['Intrepid Sword','Intrepid Sword','Intrepid Sword'],
    innates: [''],
    otherFormes: ['Zacian'],
    weightkg: 0,
    types: ['Fairy','Steel'],
    genderR: 255
  },
  'Zamazenta Crowned Shield': {
    id: 1305,
    bs: {hp: 92,at: 130,df: 145,sa: 80,sd: 145,sp: 128},
    abilities: ['Dauntless Shield','Dauntless Shield','Dauntless Shield'],
    innates: [''],
    otherFormes: ['Zamazenta'],
    weightkg: 0,
    types: ['Fighting','Steel'],
    genderR: 255
  },
  'Eternatus Eternamax': {
    id: 1306,
    bs: {hp: 255,at: 115,df: 250,sa: 125,sd: 250,sp: 130},
    abilities: ['Pressure','Pressure','Pressure'],
    innates: [''],
    otherFormes: ['Eternatus'],
    weightkg: 0,
    types: ['Poison','Dragon'],
    genderR: 255
  },
  'Urshifu Rapid Strike Style': {
    id: 1307,
    bs: {hp: 100,at: 130,df: 100,sa: 63,sd: 60,sp: 97},
    abilities: ['Unseen Fist','Unseen Fist','Unseen Fist'],
    innates: [''],
    otherFormes: ['Urshifu'],
    weightkg: 0,
    types: ['Fighting','Water'],
    genderR: 30
  },
  'Zarude Dada': {
    id: 1308,
    bs: {hp: 105,at: 120,df: 105,sa: 70,sd: 95,sp: 105},
    abilities: ['Leaf Guard','Leaf Guard','Leaf Guard'],
    innates: [''],
    otherFormes: ['Zarude'],
    weightkg: 0,
    types: ['Dark','Grass'],
    genderR: 255
  },
  'Calyrex Ice Rider': {
    id: 1205,
    bs: {hp: 100,at: 165,df: 150,sa: 85,sd: 130,sp: 50},
    abilities: ['As One Ice Rider','As One Ice Rider','As One Ice Rider'],
    innates: ['Permafrost','Stamina','Whiteout'],
    otherFormes: ['Calyrex'],
    weightkg: 0,
    types: ['Psychic','Ice'],
    genderR: 255
  },
  'Calyrex Shadow Rider': {
    id: 1206,
    bs: {hp: 100,at: 85,df: 80,sa: 165,sd: 100,sp: 150},
    abilities: ['As One Shadow Rider','As One Shadow Rider','As One Shadow Rider'],
    innates: ['Shadow Shield','Scare','Speed Boost'],
    otherFormes: ['Calyrex'],
    weightkg: 0,
    types: ['Psychic','Ghost'],
    genderR: 255
  },
  'Milotic Mega': {
    id: 1207,
    bs: {hp: 95,at: 70,df: 109,sa: 130,sd: 155,sp: 81},
    abilities: ['Self Sufficient','Self Sufficient','Self Sufficient'],
    innates: ['Prism Scales','Adaptability','Sea Guardian'],
    weightkg: 0,
    types: ['Water','Fairy'],
    genderR: 127
  },
  'Butterfree Mega': {
    id: 1208,
    bs: {hp: 60,at: 15,df: 60,sa: 145,sd: 125,sp: 110},
    abilities: ['Tinted Lens','Tinted Lens','Tinted Lens'],
    innates: ['Magical Dust','Compound Eyes','Levitate'],
    weightkg: 0,
    types: ['Bug','Psychic'],
    genderR: 127
  },
  'Machamp Mega': {
    id: 1209,
    bs: {hp: 90,at: 170,df: 100,sa: 65,sd: 105,sp: 75},
    abilities: ['Raging Boxer','Raging Boxer','Raging Boxer'],
    innates: ['No Guard','Iron Fist','Anger Point'],
    weightkg: 0,
    types: ['Fighting'],
    genderR: 63
  },
  'Kingler Mega': {
    id: 1210,
    bs: {hp: 80,at: 170,df: 135,sa: 50,sd: 80,sp: 85},
    abilities: ['Tough Claws','Tough Claws','Tough Claws'],
    innates: ['Swift Swim','Hyper Cutter','Grip Pincer'],
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Lapras Mega': {
    id: 1211,
    bs: {hp: 130,at: 105,df: 110,sa: 125,sd: 125,sp: 50},
    abilities: ['Liquid Voice','Liquid Voice','Liquid Voice'],
    innates: ['Ice Scales','Shell Armor','Self Sufficient'],
    otherFormes: ['Lapras'],
    weightkg: 0,
    types: ['Water','Ice'],
    genderR: 127
  },
  'Flygon Mega': {
    id: 1212,
    bs: {hp: 80,at: 130,df: 100,sa: 120,sd: 100,sp: 110},
    abilities: ['Tinted Lens','Tinted Lens','Tinted Lens'],
    innates: ['Dragonfly','Sand Song','Sand Rush'],
    weightkg: 0,
    types: ['Ground','Bug'],
    genderR: 127
  },
  'Kingdra Mega': {
    id: 1213,
    bs: {hp: 75,at: 105,df: 100,sa: 145,sd: 100,sp: 115},
    abilities: ['Swift Swim','Swift Swim','Swift Swim'],
    innates: ['Sea Guardian','Mega Launcher','Marvel Scale'],
    otherFormes: ['Kingdra'],
    weightkg: 0,
    types: ['Water','Dragon'],
    genderR: 127
  },
  'Dewgong Mega': {
    id: 1214,
    bs: {hp: 90,at: 110,df: 105,sa: 125,sd: 105,sp: 90},
    abilities: ['Hardened Sheath','Lightning Rod','Arctic Fur'],
    innates: ['Cold Rebound','Water Veil','Hydrate'],
    otherFormes: ['Dewgong'],
    weightkg: 0,
    types: ['Water','Ice'],
    genderR: 127
  },
  'Hitmonchan Mega': {
    id: 1215,
    bs: {hp: 80,at: 145,df: 99,sa: 35,sd: 120,sp: 106},
    abilities: ['Parry','Parry','Parry'],
    innates: ['Raging Boxer','Power Fists','Earthbound'],
    otherFormes: ['Hitmonchan'],
    weightkg: 0,
    types: ['Fighting','Ground'],
    genderR: 0
  },
  'Hitmonlee Mega': {
    id: 1216,
    bs: {hp: 80,at: 140,df: 73,sa: 65,sd: 110,sp: 117},
    abilities: ['Roundhouse','Roundhouse','Roundhouse'],
    innates: ['Limber','Mineralize','Striker'],
    otherFormes: ['Hitmonlee'],
    weightkg: 0,
    types: ['Fighting','Rock'],
    genderR: 0
  },
  'Hitmontop Mega': {
    id: 1217,
    bs: {hp: 80,at: 135,df: 115,sa: 45,sd: 135,sp: 75},
    abilities: ['Spinning Top','Spinning Top','Spinning Top'],
    innates: ['Technician','Battle Armor','Intimidate'],
    weightkg: 0,
    types: ['Fighting','Steel'],
    genderR: 0
  },
  'Crobat Mega': {
    id: 1218,
    bs: {hp: 85,at: 140,df: 70,sa: 110,sd: 70,sp: 170},
    abilities: ['Scare','Nosferatu','Amplifier'],
    innates: ['Phantom','Spectral Shroud','Shadow Shield'],
    otherFormes: ['Crobat'],
    weightkg: 0,
    types: ['Poison','Flying'],
    genderR: 127
  },
  'Skarmory Mega': {
    id: 1219,
    bs: {hp: 65,at: 110,df: 170,sa: 40,sd: 90,sp: 90},
    abilities: ['Scrapyard','Scrapyard','Scrapyard'],
    innates: ['Motor Drive','Power Core','Self Repair'],
    otherFormes: ['Skarmory'],
    weightkg: 0,
    types: ['Steel','Flying'],
    genderR: 127
  },
  'Bruxish Mega': {
    id: 1220,
    bs: {hp: 68,at: 105,df: 70,sa: 70,sd: 70,sp: 92},
    abilities: ['Dazzling','Defiant','Predator'],
    innates: ['Strong Jaw','Wonder Skin','Psychic Mind'],
    weightkg: 0,
    types: ['Water','Psychic'],
    genderR: 127
  },
  'Torterra Mega': {
    id: 1221,
    bs: {hp: 95,at: 149,df: 184,sa: 65,sd: 105,sp: 36},
    abilities: ['Atlas','Atlas','Atlas'],
    innates: ['Forest Rage','Solid Rock','Grassy Surge'],
    weightkg: 0,
    types: ['Grass','Ground'],
    genderR: 127
  },
  'Infernape Mega': {
    id: 1222,
    bs: {hp: 76,at: 145,df: 75,sa: 145,sd: 70,sp: 123},
    abilities: ['Equinox','Equinox','Equinox'],
    innates: ['Hellblaze','Limber','Berserk'],
    weightkg: 0,
    types: ['Fire','Fighting'],
    genderR: 127
  },
  'Empoleon Mega': {
    id: 1223,
    bs: {hp: 84,at: 80,df: 118,sa: 131,sd: 121,sp: 96},
    abilities: ['No Guard','Competitive','Slush Rush'],
    innates: ['Riptide','Antarctic Bird','Battle Armor'],
    weightkg: 0,
    types: ['Water','Steel'],
    genderR: 127
  },
  'Shuckle Mega': {
    id: 1224,
    bs: {hp: 30,at: 60,df: 255,sa: 10,sd: 255,sp: 5},
    abilities: ['Self Sufficient','Self Sufficient','Self Sufficient'],
    innates: ['Multi Headed','Juggernaut','Solid Rock'],
    weightkg: 0,
    types: ['Bug','Rock'],
    genderR: 127
  },
  'Relicanth Mega': {
    id: 1225,
    bs: {hp: 100,at: 160,df: 130,sa: 45,sd: 75,sp: 95},
    abilities: ['Marine Apex','Marine Apex','Marine Apex'],
    innates: ['Rock Head','Reckless','Primal Armor'],
    weightkg: 0,
    types: ['Water','Rock'],
    genderR: 30
  },
  'Quagsire Mega': {
    id: 1226,
    bs: {hp: 95,at: 110,df: 130,sa: 110,sd: 130,sp: 35},
    abilities: ['Clueless','Clueless','Clueless'],
    innates: ['Unaware','Water Veil','Oblivious'],
    weightkg: 0,
    types: ['Water','Ground'],
    genderR: 127
  },
  'Jellicent Mega': {
    id: 1227,
    bs: {hp: 120,at: 60,df: 70,sa: 85,sd: 105,sp: 60},
    abilities: ['Cursed Body','Clear Body','Immunity'],
    innates: ['Water Bubble','Soul Eater','Poison Touch'],
    weightkg: 0,
    types: ['Water','Ghost'],
    genderR: 127
  },
  'Toucannon Mega': {
    id: 1228,
    bs: {hp: 80,at: 120,df: 110,sa: 135,sd: 110,sp: 70},
    abilities: ['Sturdy','Sturdy','Sturdy'],
    innates: ['Steel Barrel','Iron Barrage','Pyro Shells'],
    weightkg: 0,
    types: ['Normal','Steel'],
    genderR: 127
  },
  'Dragonite Mega': {
    id: 1229,
    bs: {hp: 91,at: 159,df: 120,sa: 125,sd: 125,sp: 80},
    abilities: ['Multiscale','Multiscale','Multiscale'],
    innates: ['Galvanize','Discipline','Thundercall'],
    weightkg: 0,
    types: ['Dragon','Electric'],
    genderR: 127
  },
  'Breloom Mega': {
    id: 1230,
    bs: {hp: 60,at: 140,df: 130,sa: 50,sd: 110,sp: 70},
    abilities: ['Fungal Infection','Fungal Infection','Fungal Infection'],
    innates: ['Perfectionist','Technician','Effect Spore'],
    weightkg: 0,
    types: ['Grass','Fighting'],
    genderR: 127
  },
  'Slaking Mega': {
    id: 1231,
    bs: {hp: 130,at: 210,df: 105,sa: 95,sd: 105,sp: 105},
    abilities: ['Unseen Fist','Unseen Fist','Unseen Fist'],
    innates: ['Lethargy','Crystallize','Rampage'],
    otherFormes: ['Slaking'],
    weightkg: 0,
    types: ['Normal','Ice'],
    genderR: 127
  },
  'Cascoon Primal': {
    id: 1232,
    bs: {hp: 121,at: 121,df: 121,sa: 121,sd: 121,sp: 121},
    abilities: ['Angels Wrath','Angels Wrath','Angels Wrath'],
    innates: ['Color Change','Impenetrable','Adaptability'],
    otherFormes: ['Cascoon'],
    weightkg: 0,
    types: ['Bug'],
    genderR: 127
  },
  'Feraligatr Mega X': {
    id: 1233,
    bs: {hp: 85,at: 140,df: 100,sa: 109,sd: 93,sp: 103},
    abilities: ['Primal Maw','Primal Maw','Primal Maw'],
    innates: ['Riptide','Dry Skin','Predator'],
    otherFormes: ['Feraligatr'],
    weightkg: 0,
    types: ['Water','Dark'],
    genderR: 127
  },
  'Feraligatr Mega Y': {
    id: 1234,
    bs: {hp: 85,at: 75,df: 130,sa: 159,sd: 113,sp: 68},
    abilities: ['Atomic Burst','Atomic Burst','Atomic Burst'],
    innates: ['Riptide','Galvanize','Rampage'],
    otherFormes: ['Feraligatr'],
    weightkg: 0,
    types: ['Water','Electric'],
    genderR: 127
  },
  'Granbull Mega': {
    id: 1235,
    bs: {hp: 90,at: 160,df: 130,sa: 60,sd: 105,sp: 35},
    abilities: ['Tough Claws','Strong Jaw','Friend Guard'],
    innates: ['Pretty Princess','Defiant','Hyper Aggressive'],
    otherFormes: ['Granbull'],
    weightkg: 0,
    types: ['Fairy','Ground'],
    genderR: 191
  },
  'Gyarados Mega Y': {
    id: 1236,
    bs: {hp: 95,at: 95,df: 99,sa: 130,sd: 140,sp: 81},
    abilities: ['Mystic Power','Mystic Power','Mystic Power'],
    innates: ['Levitate','Prism Scales','Draconize'],
    otherFormes: ['Gyarados'],
    weightkg: 0,
    types: ['Water','Dragon'],
    genderR: 127
  },
  'Haxorus Mega': {
    id: 1237,
    bs: {hp: 76,at: 180,df: 110,sa: 82,sd: 90,sp: 102},
    abilities: ['Fearmonger','Fearmonger','Fearmonger'],
    innates: ['Hyper Cutter','Sweeping Edge','Merciless'],
    otherFormes: ['Haxorus'],
    weightkg: 0,
    types: ['Dragon','Steel'],
    genderR: 127
  },
  'Kingdra Mega Y': {
    id: 1238,
    bs: {hp: 75,at: 95,df: 95,sa: 95,sd: 95,sp: 85},
    abilities: ['Swift Swim','Sniper','Riptide'],
    innates: ['Prism Scales','Mega Launcher','Marvel Scale'],
    otherFormes: ['Kingdra'],
    weightkg: 0,
    types: ['Water','Dragon'],
    genderR: 127
  },
  'Meganium Mega': {
    id: 1239,
    bs: {hp: 80,at: 97,df: 130,sa: 118,sd: 130,sp: 80},
    abilities: ['Misty Surge','Misty Surge','Misty Surge'],
    innates: ['Forest Rage','Absorbant','Triage'],
    otherFormes: ['Meganium'],
    weightkg: 0,
    types: ['Grass','Fairy'],
    genderR: 127
  },
  'Noibat Redux': {
    id: 1241,
    bs: {hp: 50,at: 75,df: 45,sa: 30,sd: 50,sp: 95},
    abilities: ['Hyper Aggressive','Opportunist','Rock Head'],
    innates: ['Levitate','Nocturnal','Vengeance'],
    nfe: true,
    weightkg: 0,
    types: ['Rock','Ghost'],
    genderR: 127
  },
  'Noivern Redux': {
    id: 1242,
    bs: {hp: 85,at: 97,df: 80,sa: 70,sd: 80,sp: 123},
    abilities: ['Hyper Aggressive','Opportunist','Rock Head'],
    innates: ['Levitate','Nocturnal','Vengeance'],
    weightkg: 0,
    types: ['Rock','Ghost'],
    genderR: 127
  },
  'Dewleon': {
    id: 1243,
    bs: {hp: 90,at: 90,df: 70,sa: 95,sd: 120,sp: 95},
    abilities: ['Prismatic Fur','Prismatic Fur','Prismatic Fur'],
    innates: ['Retribution Blow','Wonder Skin','North Wind'],
    weightkg: 0,
    types: ['Ice','Normal'],
    genderR: 127
  },
  'Luxray Redux': {
    id: 1244,
    bs: {hp: 90,at: 120,df: 79,sa: 75,sd: 79,sp: 90},
    abilities: ['Intimidate','Electric Burst','Guts'],
    innates: ['Short Circuit','Bad Luck','Predator'],
    weightkg: 0,
    types: ['Electric','Ice'],
    genderR: 127
  },
  'Clawitzer Redux': {
    id: 1245,
    bs: {hp: 80,at: 65,df: 83,sa: 110,sd: 82,sp: 110},
    abilities: ['Elemental Charge','Elemental Charge','Elemental Charge'],
    innates: ['Ice Age','Levitate','Dual Wield'],
    otherFormes: ['Clawitzer'],
    weightkg: 0,
    types: ['Fire','Electric'],
    genderR: 127
  },
  'Luxray Mega': {
    id: 1252,
    bs: {hp: 90,at: 143,df: 95,sa: 106,sd: 95,sp: 104},
    abilities: ['Shocking Jaws','Shocking Jaws','Shocking Jaws'],
    innates: ['Predator','Fae Hunter','Merciless'],
    otherFormes: ['Luxray'],
    weightkg: 0,
    types: ['Electric','Dark'],
    genderR: 127
  },
  'Nidoking Mega': {
    id: 1253,
    bs: {hp: 81,at: 142,df: 92,sa: 85,sd: 95,sp: 110},
    abilities: ['Sheer Force','Sheer Force','Sheer Force'],
    innates: ['Kings Wrath','Rivalry','Mighty Horn'],
    otherFormes: ['Nidoking'],
    weightkg: 0,
    types: ['Poison','Ground'],
    genderR: 0
  },
  'Nidoqueen Mega': {
    id: 1254,
    bs: {hp: 90,at: 82,df: 112,sa: 125,sd: 110,sp: 86},
    abilities: ['Sheer Force','Sheer Force','Sheer Force'],
    innates: ['Queens Mourning','Queenly Majesty','Multiscale'],
    otherFormes: ['Nidoqueen'],
    weightkg: 0,
    types: ['Poison','Ground'],
    genderR: 254
  },
  'Sandslash Mega': {
    id: 1255,
    bs: {hp: 95,at: 140,df: 110,sa: 45,sd: 85,sp: 95},
    abilities: ['Desert Cloak','Desert Cloak','Desert Cloak'],
    innates: ['Sand Rush','Sand Force','Tough Claws'],
    otherFormes: ['Sandslash'],
    weightkg: 0,
    types: ['Ground'],
    genderR: 127
  },
  'Typhlosion Mega': {
    id: 1256,
    bs: {hp: 78,at: 94,df: 98,sa: 149,sd: 105,sp: 110},
    abilities: ['Volcano Rage','Volcano Rage','Volcano Rage'],
    innates: ['Hellblaze','Sand Stream','Sand Force'],
    otherFormes: ['Typhlosion'],
    weightkg: 0,
    types: ['Fire','Ground'],
    genderR: 127
  },
  'Krookodile Mega': {
    id: 1257,
    bs: {hp: 95,at: 147,df: 110,sa: 75,sd: 100,sp: 92},
    abilities: ['Dune Terror','Dune Terror','Dune Terror'],
    innates: ['Metallic','Moxie','Jaws Of Carnage'],
    otherFormes: ['Krookodile'],
    weightkg: 0,
    types: ['Ground','Dark'],
    genderR: 127
  },
  'Magnezone Mega': {
    id: 1258,
    bs: {hp: 70,at: 75,df: 135,sa: 165,sd: 125,sp: 65},
    abilities: ['Electric Surge','Electric Surge','Electric Surge'],
    innates: ['Electric Burst','Multi Headed','Magnet Pull'],
    otherFormes: ['Magnezone'],
    weightkg: 0,
    types: ['Electric','Steel'],
    genderR: 255
  },
  'Shedinja Mega': {
    id: 1259,
    bs: {hp: 1,at: 120,df: 45,sa: 70,sd: 30,sp: 110},
    abilities: ['Cheating Death','Cheating Death','Cheating Death'],
    innates: ['Tinted Lens','Magic Guard','Adaptability'],
    otherFormes: ['Shedinja'],
    weightkg: 0,
    types: ['Bug','Ghost'],
    genderR: 255
  },
  'Swalot Mega': {
    id: 1260,
    bs: {hp: 100,at: 108,df: 118,sa: 108,sd: 118,sp: 55},
    abilities: ['Toxic Spill','Toxic Spill','Toxic Spill'],
    innates: ['Poison Touch','Liquified','Corrosion'],
    otherFormes: ['Swalot'],
    weightkg: 0,
    types: ['Poison'],
    genderR: 127
  },
  'Lanturn Mega': {
    id: 1261,
    bs: {hp: 125,at: 58,df: 88,sa: 126,sd: 116,sp: 67},
    abilities: ['Hydro Circuit','Hydro Circuit','Hydro Circuit'],
    innates: ['Storm Drain','Volt Absorb','Radiance'],
    otherFormes: ['Lanturn'],
    weightkg: 0,
    types: ['Water','Electric'],
    genderR: 127
  },
  'Lapras Mega X': {
    id: 1262,
    bs: {hp: 130,at: 135,df: 105,sa: 100,sd: 90,sp: 85},
    abilities: ['Primal Maw','Primal Maw','Primal Maw'],
    innates: ['Swift Swim','Shell Armor','Jaws Of Carnage'],
    otherFormes: ['Lapras'],
    weightkg: 0,
    types: ['Water'],
    genderR: 127
  },
  'Slowking Mega': {
    id: 1263,
    bs: {hp: 95,at: 85,df: 80,sa: 130,sd: 180,sp: 20},
    abilities: ['Gifted Mind','Gifted Mind','Gifted Mind'],
    innates: ['Own Tempo','Psychic Surge','Magical Dust'],
    otherFormes: ['Slowking'],
    weightkg: 0,
    types: ['Psychic'],
    genderR: 127
  }
};
  

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH, REDUX_PATCH);

const PLA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {}

const SV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {}

const SV: {[name: string]: SpeciesData} = extend(true, {}, SS, SV_PATCH, PLA_PATCH);

export const SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Species implements I.Species {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return SPECIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in SPECIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Specie implements I.Specie {
  readonly kind: 'Species';
  readonly id: I.ID;
  readonly name: I.SpeciesName;
  readonly types!: [I.TypeName] | [I.TypeName, I.TypeName];
  readonly baseStats: Readonly<I.StatsTable>;
  readonly weightkg!: number; // weight
  readonly nfe?: boolean;
  readonly gender?: I.GenderName;
  readonly otherFormes?: I.SpeciesName[];
  readonly baseSpecies?: I.SpeciesName;
  readonly abilities?: {0: I.AbilityName}; // ability
  readonly heads?: number | undefined;
  readonly genderR?: number | undefined;

  private static readonly EXCLUDE = new Set(['bs', 'otherFormes']);

  constructor(name: string, data: SpeciesData) {
    this.kind = 'Species';
    this.id = toID(name);
    this.name = name as I.SpeciesName;

    const baseStats: Partial<I.StatsTable> = {};
    baseStats.hp = data.bs.hp;
    baseStats.atk = data.bs.at;
    baseStats.def = data.bs.df;
    baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
    baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
    baseStats.spe = data.bs.sp;
    this.baseStats = baseStats as I.StatsTable;
    // Hack for getting Gmax pokemon out of existence in Gen 9+
    if (data.otherFormes) {
      this.otherFormes = data.otherFormes as I.SpeciesName[];
      if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
        this.otherFormes = this.otherFormes.filter(f => !f.endsWith('-Gmax'));
        if (!this.otherFormes.length) this.otherFormes = undefined;
        if (this.otherFormes) this.otherFormes = [...new Set(this.otherFormes)];
      }
    }

    assignWithout(this, data, Specie.EXCLUDE);
  }
}
const SPECIES_BY_ID: Array<{[id: string]: Specie}> = [];

let gen = 0;
for (const species of SPECIES) {
  const map: {[id: string]: Specie} = {};
  for (const specie in species) {
    if (gen >= 2 && species[specie].bs.sl) delete species[specie].bs.sl;
    const m = new Specie(specie, species[specie]);
    map[toID(m.name)] = m;
  }
  SPECIES_BY_ID.push(map);
  gen++;
}