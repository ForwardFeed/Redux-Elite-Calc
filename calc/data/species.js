"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    Abra: {
        types: ['Psychic'],
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        weightkg: 19.5,
        nfe: true
    },
    Aerodactyl: {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 105, df: 65, sp: 130, sl: 60 },
        weightkg: 59
    },
    Alakazam: {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 45, sp: 120, sl: 135 },
        weightkg: 48
    },
    Arbok: { types: ['Poison'], bs: { hp: 60, at: 85, df: 69, sp: 80, sl: 65 }, weightkg: 65 },
    Arcanine: {
        types: ['Fire'],
        bs: { hp: 90, at: 110, df: 80, sp: 95, sl: 80 },
        weightkg: 155
    },
    Articuno: {
        types: ['Ice', 'Flying'],
        bs: { hp: 90, at: 85, df: 100, sp: 85, sl: 125 },
        weightkg: 55.4
    },
    Beedrill: {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 80, df: 40, sp: 75, sl: 45 },
        weightkg: 29.5
    },
    Bellsprout: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 75, df: 35, sp: 40, sl: 70 },
        weightkg: 4,
        nfe: true
    },
    Blastoise: {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sp: 78, sl: 85 },
        weightkg: 85.5
    },
    Bulbasaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 49, df: 49, sp: 45, sl: 65 },
        weightkg: 6.9,
        nfe: true
    },
    Butterfree: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sp: 70, sl: 80 },
        weightkg: 32
    },
    Caterpie: {
        types: ['Bug'],
        bs: { hp: 45, at: 30, df: 35, sp: 45, sl: 20 },
        weightkg: 2.9,
        nfe: true
    },
    Chansey: {
        types: ['Normal'],
        bs: { hp: 250, at: 5, df: 5, sp: 50, sl: 105 },
        weightkg: 34.6
    },
    Charizard: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sp: 100, sl: 85 },
        weightkg: 90.5
    },
    Charmander: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sp: 65, sl: 50 },
        weightkg: 8.5,
        nfe: true
    },
    Charmeleon: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sp: 80, sl: 65 },
        weightkg: 19,
        nfe: true
    },
    Clefable: { types: ['Normal'], bs: { hp: 95, at: 70, df: 73, sp: 60, sl: 85 }, weightkg: 40 },
    Clefairy: {
        types: ['Normal'],
        bs: { hp: 70, at: 45, df: 48, sp: 35, sl: 60 },
        weightkg: 7.5,
        nfe: true
    },
    Cloyster: {
        types: ['Water', 'Ice'],
        bs: { hp: 50, at: 95, df: 180, sp: 70, sl: 85 },
        weightkg: 132.5
    },
    Cubone: {
        types: ['Ground'],
        bs: { hp: 50, at: 50, df: 95, sp: 35, sl: 40 },
        weightkg: 6.5,
        nfe: true
    },
    Dewgong: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 70, df: 80, sp: 70, sl: 95 },
        weightkg: 120
    },
    Diglett: {
        types: ['Ground'],
        bs: { hp: 10, at: 55, df: 25, sp: 95, sl: 45 },
        weightkg: 0.8,
        nfe: true
    },
    Ditto: { types: ['Normal'], bs: { hp: 48, at: 48, df: 48, sp: 48, sl: 48 }, weightkg: 4 },
    Dodrio: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 110, df: 70, sp: 100, sl: 60 },
        weightkg: 85.2
    },
    Doduo: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 85, df: 45, sp: 75, sl: 35 },
        weightkg: 39.2,
        nfe: true
    },
    Dragonair: {
        types: ['Dragon'],
        bs: { hp: 61, at: 84, df: 65, sp: 70, sl: 70 },
        weightkg: 16.5,
        nfe: true
    },
    Dragonite: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 91, at: 134, df: 95, sp: 80, sl: 100 },
        weightkg: 210
    },
    Dratini: {
        types: ['Dragon'],
        bs: { hp: 41, at: 64, df: 45, sp: 50, sl: 50 },
        weightkg: 3.3,
        nfe: true
    },
    Drowzee: {
        types: ['Psychic'],
        bs: { hp: 60, at: 48, df: 45, sp: 42, sl: 90 },
        weightkg: 32.4,
        nfe: true
    },
    Dugtrio: {
        types: ['Ground'],
        bs: { hp: 35, at: 80, df: 50, sp: 120, sl: 70 },
        weightkg: 33.3
    },
    Eevee: {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sp: 55, sl: 65 },
        weightkg: 6.5,
        nfe: true
    },
    Ekans: {
        types: ['Poison'],
        bs: { hp: 35, at: 60, df: 44, sp: 55, sl: 40 },
        weightkg: 6.9,
        nfe: true
    },
    Electabuzz: {
        types: ['Electric'],
        bs: { hp: 65, at: 83, df: 57, sp: 105, sl: 85 },
        weightkg: 30
    },
    Electrode: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 70, sp: 140, sl: 80 },
        weightkg: 66.6
    },
    Exeggcute: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 60, at: 40, df: 80, sp: 40, sl: 60 },
        weightkg: 2.5,
        nfe: true
    },
    Exeggutor: {
        types: ['Grass', 'Psychic'],
        bs: { hp: 95, at: 95, df: 85, sp: 55, sl: 125 },
        weightkg: 120
    },
    'Farfetch\u2019d': {
        types: ['Normal', 'Flying'],
        bs: { hp: 52, at: 65, df: 55, sp: 60, sl: 58 },
        weightkg: 15
    },
    Fearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 65, at: 90, df: 65, sp: 100, sl: 61 },
        weightkg: 38
    },
    Flareon: { types: ['Fire'], bs: { hp: 65, at: 130, df: 60, sp: 65, sl: 110 }, weightkg: 25 },
    Gastly: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 30, at: 35, df: 30, sp: 80, sl: 100 },
        weightkg: 0.1,
        nfe: true
    },
    Gengar: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sp: 110, sl: 130 },
        weightkg: 40.5
    },
    Geodude: {
        types: ['Rock', 'Ground'],
        bs: { hp: 40, at: 80, df: 100, sp: 20, sl: 30 },
        weightkg: 20,
        nfe: true
    },
    Gloom: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 65, df: 70, sp: 40, sl: 85 },
        weightkg: 8.6,
        nfe: true
    },
    Golbat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 75, at: 80, df: 70, sp: 90, sl: 75 },
        weightkg: 55
    },
    Goldeen: {
        types: ['Water'],
        bs: { hp: 45, at: 67, df: 60, sp: 63, sl: 50 },
        weightkg: 15,
        nfe: true
    },
    Golduck: { types: ['Water'], bs: { hp: 80, at: 82, df: 78, sp: 85, sl: 80 }, weightkg: 76.6 },
    Golem: {
        types: ['Rock', 'Ground'],
        bs: { hp: 80, at: 110, df: 130, sp: 45, sl: 55 },
        weightkg: 300
    },
    Graveler: {
        types: ['Rock', 'Ground'],
        bs: { hp: 55, at: 95, df: 115, sp: 35, sl: 45 },
        weightkg: 105,
        nfe: true
    },
    Grimer: {
        types: ['Poison'],
        bs: { hp: 80, at: 80, df: 50, sp: 25, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Growlithe: {
        types: ['Fire'],
        bs: { hp: 55, at: 70, df: 45, sp: 60, sl: 50 },
        weightkg: 19,
        nfe: true
    },
    Gyarados: {
        types: ['Water', 'Flying'],
        bs: { hp: 95, at: 125, df: 79, sp: 81, sl: 100 },
        weightkg: 235
    },
    Haunter: {
        types: ['Ghost', 'Poison'],
        bs: { hp: 45, at: 50, df: 45, sp: 95, sl: 115 },
        weightkg: 0.1,
        nfe: true
    },
    Hitmonchan: {
        types: ['Fighting'],
        bs: { hp: 50, at: 105, df: 79, sp: 76, sl: 35 },
        weightkg: 50.2
    },
    Hitmonlee: {
        types: ['Fighting'],
        bs: { hp: 50, at: 120, df: 53, sp: 87, sl: 35 },
        weightkg: 49.8
    },
    Horsea: {
        types: ['Water'],
        bs: { hp: 30, at: 40, df: 70, sp: 60, sl: 70 },
        weightkg: 8,
        nfe: true
    },
    Hypno: {
        types: ['Psychic'],
        bs: { hp: 85, at: 73, df: 70, sp: 67, sl: 115 },
        weightkg: 75.6
    },
    Ivysaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 62, df: 63, sp: 60, sl: 80 },
        weightkg: 13,
        nfe: true
    },
    Jigglypuff: {
        types: ['Normal'],
        bs: { hp: 115, at: 45, df: 20, sp: 20, sl: 25 },
        weightkg: 5.5,
        nfe: true
    },
    Jolteon: {
        types: ['Electric'],
        bs: { hp: 65, at: 65, df: 60, sp: 130, sl: 110 },
        weightkg: 24.5
    },
    Jynx: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 65, at: 50, df: 35, sp: 95, sl: 95 },
        weightkg: 40.6
    },
    Kabuto: {
        types: ['Rock', 'Water'],
        bs: { hp: 30, at: 80, df: 90, sp: 55, sl: 45 },
        weightkg: 11.5,
        nfe: true
    },
    Kabutops: {
        types: ['Rock', 'Water'],
        bs: { hp: 60, at: 115, df: 105, sp: 80, sl: 70 },
        weightkg: 40.5
    },
    Kadabra: {
        types: ['Psychic'],
        bs: { hp: 40, at: 35, df: 30, sp: 105, sl: 120 },
        weightkg: 56.5,
        nfe: true
    },
    Kakuna: {
        types: ['Bug', 'Poison'],
        bs: { hp: 45, at: 25, df: 50, sp: 35, sl: 25 },
        weightkg: 10,
        nfe: true
    },
    Kangaskhan: {
        types: ['Normal'],
        bs: { hp: 105, at: 95, df: 80, sp: 90, sl: 40 },
        weightkg: 80
    },
    Kingler: { types: ['Water'], bs: { hp: 55, at: 130, df: 115, sp: 75, sl: 50 }, weightkg: 60 },
    Koffing: {
        types: ['Poison'],
        bs: { hp: 40, at: 65, df: 95, sp: 35, sl: 60 },
        weightkg: 1,
        nfe: true
    },
    Krabby: {
        types: ['Water'],
        bs: { hp: 30, at: 105, df: 90, sp: 50, sl: 25 },
        weightkg: 6.5,
        nfe: true
    },
    Lapras: {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sp: 60, sl: 95 },
        weightkg: 220
    },
    Lickitung: {
        types: ['Normal'],
        bs: { hp: 90, at: 55, df: 75, sp: 30, sl: 60 },
        weightkg: 65.5
    },
    Machamp: {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sp: 55, sl: 65 },
        weightkg: 130
    },
    Machoke: {
        types: ['Fighting'],
        bs: { hp: 80, at: 100, df: 70, sp: 45, sl: 50 },
        weightkg: 70.5,
        nfe: true
    },
    Machop: {
        types: ['Fighting'],
        bs: { hp: 70, at: 80, df: 50, sp: 35, sl: 35 },
        weightkg: 19.5,
        nfe: true
    },
    Magikarp: {
        types: ['Water'],
        bs: { hp: 20, at: 10, df: 55, sp: 80, sl: 20 },
        weightkg: 10,
        nfe: true
    },
    Magmar: {
        types: ['Fire'],
        bs: { hp: 65, at: 95, df: 57, sp: 93, sl: 85 },
        weightkg: 44.5
    },
    Magnemite: {
        types: ['Electric'],
        bs: { hp: 25, at: 35, df: 70, sp: 45, sl: 95 },
        weightkg: 6,
        nfe: true
    },
    Magneton: {
        types: ['Electric'],
        bs: { hp: 50, at: 60, df: 95, sp: 70, sl: 120 },
        weightkg: 60
    },
    Mankey: {
        types: ['Fighting'],
        bs: { hp: 40, at: 80, df: 35, sp: 70, sl: 35 },
        weightkg: 28,
        nfe: true
    },
    Marowak: { types: ['Ground'], bs: { hp: 60, at: 80, df: 110, sp: 45, sl: 50 }, weightkg: 45 },
    Meowth: {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sp: 90, sl: 40 },
        weightkg: 4.2,
        nfe: true
    },
    Metapod: {
        types: ['Bug'],
        bs: { hp: 50, at: 20, df: 55, sp: 30, sl: 25 },
        weightkg: 9.9,
        nfe: true
    },
    Mew: {
        types: ['Psychic'],
        bs: { hp: 100, at: 100, df: 100, sp: 100, sl: 100 },
        weightkg: 4
    },
    Mewtwo: {
        types: ['Psychic'],
        bs: { hp: 106, at: 110, df: 90, sp: 130, sl: 154 },
        weightkg: 122
    },
    Moltres: {
        types: ['Fire', 'Flying'],
        bs: { hp: 90, at: 100, df: 90, sp: 90, sl: 125 },
        weightkg: 60
    },
    'Mr. Mime': {
        types: ['Psychic'],
        bs: { hp: 40, at: 45, df: 65, sp: 90, sl: 100 },
        weightkg: 54.5
    },
    Muk: { types: ['Poison'], bs: { hp: 105, at: 105, df: 75, sp: 50, sl: 65 }, weightkg: 30 },
    Nidoking: {
        types: ['Poison', 'Ground'],
        bs: { hp: 81, at: 92, df: 77, sp: 85, sl: 75 },
        weightkg: 62
    },
    Nidoqueen: {
        types: ['Poison', 'Ground'],
        bs: { hp: 90, at: 82, df: 87, sp: 76, sl: 75 },
        weightkg: 60
    },
    'Nidoran-F': {
        types: ['Poison'],
        bs: { hp: 55, at: 47, df: 52, sp: 41, sl: 40 },
        weightkg: 7,
        nfe: true
    },
    'Nidoran-M': {
        types: ['Poison'],
        bs: { hp: 46, at: 57, df: 40, sp: 50, sl: 40 },
        weightkg: 9,
        nfe: true
    },
    Nidorina: {
        types: ['Poison'],
        bs: { hp: 70, at: 62, df: 67, sp: 56, sl: 55 },
        weightkg: 20,
        nfe: true
    },
    Nidorino: {
        types: ['Poison'],
        bs: { hp: 61, at: 72, df: 57, sp: 65, sl: 55 },
        weightkg: 19.5,
        nfe: true
    },
    Ninetales: {
        types: ['Fire'],
        bs: { hp: 73, at: 76, df: 75, sp: 100, sl: 100 },
        weightkg: 19.9
    },
    Oddish: {
        types: ['Grass', 'Poison'],
        bs: { hp: 45, at: 50, df: 55, sp: 30, sl: 75 },
        weightkg: 5.4,
        nfe: true
    },
    Omanyte: {
        types: ['Rock', 'Water'],
        bs: { hp: 35, at: 40, df: 100, sp: 35, sl: 90 },
        weightkg: 7.5,
        nfe: true
    },
    Omastar: {
        types: ['Rock', 'Water'],
        bs: { hp: 70, at: 60, df: 125, sp: 55, sl: 115 },
        weightkg: 35
    },
    Onix: {
        types: ['Rock', 'Ground'],
        bs: { hp: 35, at: 45, df: 160, sp: 70, sl: 30 },
        weightkg: 210
    },
    Paras: {
        types: ['Bug', 'Grass'],
        bs: { hp: 35, at: 70, df: 55, sp: 25, sl: 55 },
        weightkg: 5.4,
        nfe: true
    },
    Parasect: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 95, df: 80, sp: 30, sl: 80 },
        weightkg: 29.5
    },
    Persian: { types: ['Normal'], bs: { hp: 65, at: 70, df: 60, sp: 115, sl: 65 }, weightkg: 32 },
    Pidgeot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 75, sp: 91, sl: 70 },
        weightkg: 39.5
    },
    Pidgeotto: {
        types: ['Normal', 'Flying'],
        bs: { hp: 63, at: 60, df: 55, sp: 71, sl: 50 },
        weightkg: 30,
        nfe: true
    },
    Pidgey: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 45, df: 40, sp: 56, sl: 35 },
        weightkg: 1.8,
        nfe: true
    },
    Pikachu: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        weightkg: 6,
        nfe: true
    },
    Pinsir: { types: ['Bug'], bs: { hp: 65, at: 125, df: 100, sp: 85, sl: 55 }, weightkg: 55 },
    Poliwag: {
        types: ['Water'],
        bs: { hp: 40, at: 50, df: 40, sp: 90, sl: 40 },
        weightkg: 12.4,
        nfe: true
    },
    Poliwhirl: {
        types: ['Water'],
        bs: { hp: 65, at: 65, df: 65, sp: 90, sl: 50 },
        weightkg: 20,
        nfe: true
    },
    Poliwrath: {
        types: ['Water', 'Fighting'],
        bs: { hp: 90, at: 85, df: 95, sp: 70, sl: 70 },
        weightkg: 54
    },
    Ponyta: {
        types: ['Fire'],
        bs: { hp: 50, at: 85, df: 55, sp: 90, sl: 65 },
        weightkg: 30,
        nfe: true
    },
    Porygon: {
        types: ['Normal'],
        bs: { hp: 65, at: 60, df: 70, sp: 40, sl: 75 },
        weightkg: 36.5
    },
    Primeape: {
        types: ['Fighting'],
        bs: { hp: 65, at: 105, df: 60, sp: 95, sl: 60 },
        weightkg: 32
    },
    Psyduck: {
        types: ['Water'],
        bs: { hp: 50, at: 52, df: 48, sp: 55, sl: 50 },
        weightkg: 19.6,
        nfe: true
    },
    Raichu: {
        types: ['Electric'],
        bs: { hp: 60, at: 90, df: 55, sp: 100, sl: 90 },
        weightkg: 30
    },
    Rapidash: { types: ['Fire'], bs: { hp: 65, at: 100, df: 70, sp: 105, sl: 80 }, weightkg: 95 },
    Raticate: {
        types: ['Normal'],
        bs: { hp: 55, at: 81, df: 60, sp: 97, sl: 50 },
        weightkg: 18.5
    },
    Rattata: {
        types: ['Normal'],
        bs: { hp: 30, at: 56, df: 35, sp: 72, sl: 25 },
        weightkg: 3.5,
        nfe: true
    },
    Rhydon: {
        types: ['Ground', 'Rock'],
        bs: { hp: 105, at: 130, df: 120, sp: 40, sl: 45 },
        weightkg: 120
    },
    Rhyhorn: {
        types: ['Ground', 'Rock'],
        bs: { hp: 80, at: 85, df: 95, sp: 25, sl: 30 },
        weightkg: 115,
        nfe: true
    },
    Sandshrew: {
        types: ['Ground'],
        bs: { hp: 50, at: 75, df: 85, sp: 40, sl: 30 },
        weightkg: 12,
        nfe: true
    },
    Sandslash: {
        types: ['Ground'],
        bs: { hp: 75, at: 100, df: 110, sp: 65, sl: 55 },
        weightkg: 29.5
    },
    Scyther: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 110, df: 80, sp: 105, sl: 55 },
        weightkg: 56
    },
    Seadra: { types: ['Water'], bs: { hp: 55, at: 65, df: 95, sp: 85, sl: 95 }, weightkg: 25 },
    Seaking: { types: ['Water'], bs: { hp: 80, at: 92, df: 65, sp: 68, sl: 80 }, weightkg: 39 },
    Seel: {
        types: ['Water'],
        bs: { hp: 65, at: 45, df: 55, sp: 45, sl: 70 },
        weightkg: 90,
        nfe: true
    },
    Shellder: {
        types: ['Water'],
        bs: { hp: 30, at: 65, df: 100, sp: 40, sl: 45 },
        weightkg: 4,
        nfe: true
    },
    Slowbro: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 110, sp: 30, sl: 80 },
        weightkg: 78.5
    },
    Slowpoke: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 65, df: 65, sp: 15, sl: 40 },
        weightkg: 36,
        nfe: true
    },
    Snorlax: {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sp: 30, sl: 65 },
        weightkg: 460
    },
    Spearow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 60, df: 30, sp: 70, sl: 31 },
        weightkg: 2,
        nfe: true
    },
    Squirtle: {
        types: ['Water'],
        bs: { hp: 44, at: 48, df: 65, sp: 43, sl: 50 },
        weightkg: 9,
        nfe: true
    },
    Starmie: {
        types: ['Water', 'Psychic'],
        bs: { hp: 60, at: 75, df: 85, sp: 115, sl: 100 },
        weightkg: 80
    },
    Staryu: {
        types: ['Water'],
        bs: { hp: 30, at: 45, df: 55, sp: 85, sl: 70 },
        weightkg: 34.5,
        nfe: true
    },
    Tangela: {
        types: ['Grass'],
        bs: { hp: 65, at: 55, df: 115, sp: 60, sl: 100 },
        weightkg: 35
    },
    Tauros: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 95, sp: 110, sl: 70 },
        weightkg: 88.4
    },
    Tentacool: {
        types: ['Water', 'Poison'],
        bs: { hp: 40, at: 40, df: 35, sp: 70, sl: 100 },
        weightkg: 45.5,
        nfe: true
    },
    Tentacruel: {
        types: ['Water', 'Poison'],
        bs: { hp: 80, at: 70, df: 65, sp: 100, sl: 120 },
        weightkg: 55
    },
    Vaporeon: {
        types: ['Water'],
        bs: { hp: 130, at: 65, df: 60, sp: 65, sl: 110 },
        weightkg: 29
    },
    Venomoth: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 65, df: 60, sp: 90, sl: 90 },
        weightkg: 12.5
    },
    Venonat: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 55, df: 50, sp: 45, sl: 40 },
        weightkg: 30,
        nfe: true
    },
    Venusaur: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sp: 80, sl: 100 },
        weightkg: 100
    },
    Victreebel: {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 105, df: 65, sp: 70, sl: 100 },
        weightkg: 15.5
    },
    Vileplume: {
        types: ['Grass', 'Poison'],
        bs: { hp: 75, at: 80, df: 85, sp: 50, sl: 100 },
        weightkg: 18.6
    },
    Voltorb: {
        types: ['Electric'],
        bs: { hp: 40, at: 30, df: 50, sp: 100, sl: 55 },
        weightkg: 10.4,
        nfe: true
    },
    Vulpix: {
        types: ['Fire'],
        bs: { hp: 38, at: 41, df: 40, sp: 65, sl: 65 },
        weightkg: 9.9,
        nfe: true
    },
    Wartortle: {
        types: ['Water'],
        bs: { hp: 59, at: 63, df: 80, sp: 58, sl: 65 },
        weightkg: 22.5,
        nfe: true
    },
    Weedle: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 35, df: 30, sp: 50, sl: 20 },
        weightkg: 3.2,
        nfe: true
    },
    Weepinbell: {
        types: ['Grass', 'Poison'],
        bs: { hp: 65, at: 90, df: 50, sp: 55, sl: 85 },
        weightkg: 6.4,
        nfe: true
    },
    Weezing: {
        types: ['Poison'],
        bs: { hp: 65, at: 90, df: 120, sp: 60, sl: 85 },
        weightkg: 9.5
    },
    Wigglytuff: {
        types: ['Normal'],
        bs: { hp: 140, at: 70, df: 45, sp: 45, sl: 50 },
        weightkg: 12
    },
    Zapdos: {
        types: ['Electric', 'Flying'],
        bs: { hp: 90, at: 90, df: 85, sp: 100, sl: 125 },
        weightkg: 52.6
    },
    Zubat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 40, at: 45, df: 35, sp: 55, sl: 40 },
        weightkg: 7.5,
        nfe: true
    }
};
var GSC_PATCH = {
    Abra: { bs: { sa: 105, sd: 55 } },
    Aerodactyl: { bs: { sa: 60, sd: 75 } },
    Alakazam: { bs: { sa: 135, sd: 85 } },
    Arbok: { bs: { sa: 65, sd: 79 } },
    Arcanine: { bs: { sa: 100, sd: 80 } },
    Articuno: { bs: { sa: 95, sd: 125 }, gender: 'N' },
    Beedrill: { bs: { sa: 45, sd: 80 } },
    Bellsprout: { bs: { sa: 70, sd: 30 } },
    Blastoise: { bs: { sa: 85, sd: 105 } },
    Bulbasaur: { bs: { sa: 65, sd: 65 } },
    Butterfree: { bs: { sa: 80, sd: 80 } },
    Caterpie: { bs: { sa: 20, sd: 20 } },
    Chansey: { bs: { sa: 35, sd: 105 }, nfe: true },
    Charizard: { bs: { sa: 109, sd: 85 } },
    Charmander: { bs: { sa: 60, sd: 50 } },
    Charmeleon: { bs: { sa: 80, sd: 65 } },
    Clefable: { bs: { sa: 85, sd: 90 } },
    Clefairy: { bs: { sa: 60, sd: 65 } },
    Cloyster: { bs: { sa: 85, sd: 45 } },
    Cubone: { bs: { sa: 40, sd: 50 } },
    Dewgong: { bs: { sa: 70, sd: 95 } },
    Diglett: { bs: { sa: 35, sd: 45 } },
    Ditto: { bs: { sa: 48, sd: 48 }, gender: 'N' },
    Dodrio: { bs: { sa: 60, sd: 60 } },
    Doduo: { bs: { sa: 35, sd: 35 } },
    Dragonair: { bs: { sa: 70, sd: 70 } },
    Dragonite: { bs: { sa: 100, sd: 100 } },
    Dratini: { bs: { sa: 50, sd: 50 } },
    Drowzee: { bs: { sa: 43, sd: 90 } },
    Dugtrio: { bs: { sa: 50, sd: 70 } },
    Eevee: { bs: { sa: 45, sd: 65 } },
    Ekans: { bs: { sa: 40, sd: 54 } },
    Electabuzz: { bs: { sa: 95, sd: 85 } },
    Electrode: { bs: { sa: 80, sd: 80 }, gender: 'N' },
    Exeggcute: { bs: { sa: 60, sd: 45 } },
    Exeggutor: { bs: { sa: 125, sd: 65 } },
    'Farfetch\u2019d': { bs: { sa: 58, sd: 62 } },
    Fearow: { bs: { sa: 61, sd: 61 } },
    Flareon: { bs: { sa: 95, sd: 110 } },
    Gastly: { bs: { sa: 100, sd: 35 } },
    Gengar: { bs: { sa: 130, sd: 75 } },
    Geodude: { bs: { sa: 30, sd: 30 } },
    Gloom: { bs: { sa: 85, sd: 75 } },
    Golbat: { bs: { sa: 65, sd: 75 }, nfe: true },
    Goldeen: { bs: { sa: 35, sd: 50 } },
    Golduck: { bs: { sa: 95, sd: 80 } },
    Golem: { bs: { sa: 55, sd: 65 } },
    Graveler: { bs: { sa: 45, sd: 45 } },
    Grimer: { bs: { sa: 40, sd: 50 } },
    Growlithe: { bs: { sa: 70, sd: 50 } },
    Gyarados: { bs: { sa: 60, sd: 100 } },
    Haunter: { bs: { sa: 115, sd: 55 } },
    Hitmonchan: { bs: { sa: 35, sd: 110 } },
    Hitmonlee: { bs: { sa: 35, sd: 110 } },
    Horsea: { bs: { sa: 70, sd: 25 } },
    Hypno: { bs: { sa: 73, sd: 115 } },
    Ivysaur: { bs: { sa: 80, sd: 80 } },
    Jigglypuff: { bs: { sa: 45, sd: 25 } },
    Jolteon: { bs: { sa: 110, sd: 95 } },
    Jynx: { bs: { sa: 115, sd: 95 } },
    Kabuto: { bs: { sa: 55, sd: 45 } },
    Kabutops: { bs: { sa: 65, sd: 70 } },
    Kadabra: { bs: { sa: 120, sd: 70 } },
    Kakuna: { bs: { sa: 25, sd: 25 } },
    Kangaskhan: { bs: { sa: 40, sd: 80 } },
    Kingler: { bs: { sa: 50, sd: 50 } },
    Koffing: { bs: { sa: 60, sd: 45 } },
    Krabby: { bs: { sa: 25, sd: 25 } },
    Lapras: { bs: { sa: 85, sd: 95 } },
    Lickitung: { bs: { sa: 60, sd: 75 } },
    Machamp: { bs: { sa: 65, sd: 85 } },
    Machoke: { bs: { sa: 50, sd: 60 } },
    Machop: { bs: { sa: 35, sd: 35 } },
    Magikarp: { bs: { sa: 15, sd: 20 } },
    Magmar: { bs: { sa: 100, sd: 85 } },
    Magnemite: { types: ['Electric', 'Steel'], bs: { sa: 95, sd: 55 }, gender: 'N' },
    Magneton: { types: ['Electric', 'Steel'], bs: { sa: 120, sd: 70 }, gender: 'N' },
    Mankey: { bs: { sa: 35, sd: 45 } },
    Marowak: { bs: { sa: 50, sd: 80 } },
    Meowth: { bs: { sa: 40, sd: 40 } },
    Metapod: { bs: { sa: 25, sd: 25 } },
    Mew: { bs: { sa: 100, sd: 100 }, gender: 'N' },
    Mewtwo: { bs: { sa: 154, sd: 90 }, gender: 'N' },
    Moltres: { bs: { sa: 125, sd: 85 }, gender: 'N' },
    'Mr. Mime': { bs: { sa: 100, sd: 120 } },
    Muk: { bs: { sa: 65, sd: 100 } },
    Nidoking: { bs: { sa: 85, sd: 75 } },
    Nidoqueen: { bs: { sa: 75, sd: 85 } },
    'Nidoran-F': { bs: { sa: 40, sd: 40 } },
    'Nidoran-M': { bs: { sa: 40, sd: 40 } },
    Nidorina: { bs: { sa: 55, sd: 55 } },
    Nidorino: { bs: { sa: 55, sd: 55 } },
    Ninetales: { bs: { sa: 81, sd: 100 } },
    Oddish: { bs: { sa: 75, sd: 65 } },
    Omanyte: { bs: { sa: 90, sd: 55 } },
    Omastar: { bs: { sa: 115, sd: 70 } },
    Onix: { bs: { sa: 30, sd: 45 }, nfe: true },
    Paras: { bs: { sa: 45, sd: 55 } },
    Parasect: { bs: { sa: 60, sd: 80 } },
    Persian: { bs: { sa: 65, sd: 65 } },
    Pidgeot: { bs: { sa: 70, sd: 70 } },
    Pidgeotto: { bs: { sa: 50, sd: 50 } },
    Pidgey: { bs: { sa: 35, sd: 35 } },
    Pikachu: { bs: { sa: 50, sd: 40 } },
    Pinsir: { bs: { sa: 55, sd: 70 } },
    Poliwag: { bs: { sa: 40, sd: 40 } },
    Poliwhirl: { bs: { sa: 50, sd: 50 } },
    Poliwrath: { bs: { sa: 70, sd: 90 } },
    Ponyta: { bs: { sa: 65, sd: 65 } },
    Porygon: { bs: { sa: 85, sd: 75 }, nfe: true, gender: 'N' },
    Primeape: { bs: { sa: 60, sd: 70 } },
    Psyduck: { bs: { sa: 65, sd: 50 } },
    Raichu: { bs: { sa: 90, sd: 80 } },
    Rapidash: { bs: { sa: 80, sd: 80 } },
    Raticate: { bs: { sa: 50, sd: 70 } },
    Rattata: { bs: { sa: 25, sd: 35 } },
    Rhydon: { bs: { sa: 45, sd: 45 } },
    Rhyhorn: { bs: { sa: 30, sd: 30 } },
    Sandshrew: { bs: { sa: 20, sd: 30 } },
    Sandslash: { bs: { sa: 45, sd: 55 } },
    Scyther: { bs: { sa: 55, sd: 80 }, nfe: true },
    Seadra: { bs: { sa: 95, sd: 45 }, nfe: true },
    Seaking: { bs: { sa: 65, sd: 80 } },
    Seel: { bs: { sa: 45, sd: 70 } },
    Shellder: { bs: { sa: 45, sd: 25 } },
    Slowbro: { bs: { sa: 100, sd: 80 } },
    Slowpoke: { bs: { sa: 40, sd: 40 } },
    Snorlax: { bs: { sa: 65, sd: 110 } },
    Spearow: { bs: { sa: 31, sd: 31 } },
    Squirtle: { bs: { sa: 50, sd: 64 } },
    Starmie: { bs: { sa: 100, sd: 85 }, gender: 'N' },
    Staryu: { bs: { sa: 70, sd: 55 }, gender: 'N' },
    Tangela: { bs: { sa: 100, sd: 40 } },
    Tauros: { bs: { sa: 40, sd: 70 } },
    Tentacool: { bs: { sa: 50, sd: 100 } },
    Tentacruel: { bs: { sa: 80, sd: 120 } },
    Vaporeon: { bs: { sa: 110, sd: 95 } },
    Venomoth: { bs: { sa: 90, sd: 75 } },
    Venonat: { bs: { sa: 40, sd: 55 } },
    Venusaur: { bs: { sa: 100, sd: 100 } },
    Victreebel: { bs: { sa: 100, sd: 60 } },
    Vileplume: { bs: { sa: 100, sd: 90 } },
    Voltorb: { bs: { sa: 55, sd: 55 }, gender: 'N' },
    Vulpix: { bs: { sa: 50, sd: 65 } },
    Wartortle: { bs: { sa: 65, sd: 80 } },
    Weedle: { bs: { sa: 20, sd: 20 } },
    Weepinbell: { bs: { sa: 85, sd: 45 } },
    Weezing: { bs: { sa: 85, sd: 70 } },
    Wigglytuff: { bs: { sa: 75, sd: 50 } },
    Zapdos: { bs: { sa: 125, sd: 90 }, gender: 'N' },
    Zubat: { bs: { sa: 30, sd: 40 } },
    Aipom: { types: ['Normal'], bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 }, weightkg: 11.5 },
    Ampharos: {
        types: ['Electric'],
        bs: { hp: 90, at: 75, df: 75, sa: 115, sd: 90, sp: 55 },
        weightkg: 61.5
    },
    Ariados: {
        types: ['Bug', 'Poison'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 40 },
        weightkg: 33.5
    },
    Azumarill: {
        types: ['Water'],
        bs: { hp: 100, at: 50, df: 80, sa: 50, sd: 80, sp: 50 },
        weightkg: 28.5
    },
    Bayleef: {
        types: ['Grass'],
        bs: { hp: 60, at: 62, df: 80, sa: 63, sd: 80, sp: 60 },
        weightkg: 15.8,
        nfe: true
    },
    Bellossom: {
        types: ['Grass'],
        bs: { hp: 75, at: 80, df: 85, sa: 90, sd: 100, sp: 50 },
        weightkg: 5.8
    },
    Blissey: {
        types: ['Normal'],
        bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 135, sp: 55 },
        weightkg: 46.8
    },
    Celebi: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 5,
        gender: 'N'
    },
    Chikorita: {
        types: ['Grass'],
        bs: { hp: 45, at: 49, df: 65, sa: 49, sd: 65, sp: 45 },
        weightkg: 6.4,
        nfe: true
    },
    Chinchou: {
        types: ['Water', 'Electric'],
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        weightkg: 12,
        nfe: true
    },
    Cleffa: {
        types: ['Normal'],
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        weightkg: 3,
        nfe: true
    },
    Corsola: {
        types: ['Water', 'Rock'],
        bs: { hp: 55, at: 55, df: 85, sa: 65, sd: 85, sp: 35 },
        weightkg: 5
    },
    Crobat: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 90, df: 80, sa: 70, sd: 80, sp: 130 },
        weightkg: 75
    },
    Croconaw: {
        types: ['Water'],
        bs: { hp: 65, at: 80, df: 80, sa: 59, sd: 63, sp: 58 },
        weightkg: 25,
        nfe: true
    },
    Cyndaquil: {
        types: ['Fire'],
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        weightkg: 7.9,
        nfe: true
    },
    Delibird: {
        types: ['Ice', 'Flying'],
        bs: { hp: 45, at: 55, df: 45, sa: 65, sd: 45, sp: 75 },
        weightkg: 16
    },
    Donphan: {
        types: ['Ground'],
        bs: { hp: 90, at: 120, df: 120, sa: 60, sd: 60, sp: 50 },
        weightkg: 120
    },
    Dunsparce: {
        types: ['Normal'],
        bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 },
        weightkg: 14
    },
    Elekid: {
        types: ['Electric'],
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        weightkg: 23.5,
        nfe: true
    },
    Entei: {
        types: ['Fire'],
        bs: { hp: 115, at: 115, df: 85, sa: 90, sd: 75, sp: 100 },
        weightkg: 198,
        gender: 'N'
    },
    Espeon: {
        types: ['Psychic'],
        bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 },
        weightkg: 26.5
    },
    Feraligatr: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 78 },
        weightkg: 88.8
    },
    Flaaffy: {
        types: ['Electric'],
        bs: { hp: 70, at: 55, df: 55, sa: 80, sd: 60, sp: 45 },
        weightkg: 13.3,
        nfe: true
    },
    Forretress: {
        types: ['Bug', 'Steel'],
        bs: { hp: 75, at: 90, df: 140, sa: 60, sd: 60, sp: 40 },
        weightkg: 125.8
    },
    Furret: { types: ['Normal'], bs: { hp: 85, at: 76, df: 64, sa: 45, sd: 55, sp: 90 }, weightkg: 32.5 },
    Girafarig: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        weightkg: 41.5
    },
    Gligar: {
        types: ['Ground', 'Flying'],
        bs: { hp: 65, at: 75, df: 105, sa: 35, sd: 65, sp: 85 },
        weightkg: 64.8
    },
    Granbull: {
        types: ['Normal'],
        bs: { hp: 90, at: 120, df: 75, sa: 60, sd: 60, sp: 45 },
        weightkg: 48.7
    },
    Heracross: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 125, df: 75, sa: 40, sd: 95, sp: 85 },
        weightkg: 54
    },
    Hitmontop: {
        types: ['Fighting'],
        bs: { hp: 50, at: 95, df: 95, sa: 35, sd: 110, sp: 70 },
        weightkg: 48
    },
    'Ho-Oh': {
        types: ['Fire', 'Flying'],
        bs: { hp: 106, at: 130, df: 90, sa: 110, sd: 154, sp: 90 },
        weightkg: 199,
        gender: 'N'
    },
    Hoothoot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        weightkg: 21.2,
        nfe: true
    },
    Hoppip: {
        types: ['Grass', 'Flying'],
        bs: { hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50 },
        weightkg: 0.5,
        nfe: true
    },
    Houndoom: {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 95 },
        weightkg: 35
    },
    Houndour: {
        types: ['Dark', 'Fire'],
        bs: { hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65 },
        weightkg: 10.8,
        nfe: true
    },
    Igglybuff: {
        types: ['Normal'],
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        weightkg: 1,
        nfe: true
    },
    Jumpluff: {
        types: ['Grass', 'Flying'],
        bs: { hp: 75, at: 55, df: 70, sa: 55, sd: 85, sp: 110 },
        weightkg: 3
    },
    Kingdra: {
        types: ['Water', 'Dragon'],
        bs: { hp: 75, at: 95, df: 95, sa: 95, sd: 95, sp: 85 },
        weightkg: 152
    },
    Lanturn: {
        types: ['Water', 'Electric'],
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        weightkg: 22.5
    },
    Larvitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 50, at: 64, df: 50, sa: 45, sd: 50, sp: 41 },
        weightkg: 72,
        nfe: true
    },
    Ledian: {
        types: ['Bug', 'Flying'],
        bs: { hp: 55, at: 35, df: 50, sa: 55, sd: 110, sp: 85 },
        weightkg: 35.6
    },
    Ledyba: {
        types: ['Bug', 'Flying'],
        bs: { hp: 40, at: 20, df: 30, sa: 40, sd: 80, sp: 55 },
        weightkg: 10.8,
        nfe: true
    },
    Lugia: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 106, at: 90, df: 130, sa: 90, sd: 154, sp: 110 },
        weightkg: 216,
        gender: 'N'
    },
    Magby: {
        types: ['Fire'],
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        weightkg: 21.4,
        nfe: true
    },
    Magcargo: {
        types: ['Fire', 'Rock'],
        bs: { hp: 50, at: 50, df: 120, sa: 80, sd: 80, sp: 30 },
        weightkg: 55
    },
    Mantine: {
        types: ['Water', 'Flying'],
        bs: { hp: 65, at: 40, df: 70, sa: 80, sd: 140, sp: 70 },
        weightkg: 220
    },
    Mareep: {
        types: ['Electric'],
        bs: { hp: 55, at: 40, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 7.8,
        nfe: true
    },
    Marill: {
        types: ['Water'],
        bs: { hp: 70, at: 20, df: 50, sa: 20, sd: 50, sp: 40 },
        weightkg: 8.5,
        nfe: true
    },
    Meganium: {
        types: ['Grass'],
        bs: { hp: 80, at: 82, df: 100, sa: 83, sd: 100, sp: 80 },
        weightkg: 100.5
    },
    Miltank: {
        types: ['Normal'],
        bs: { hp: 95, at: 80, df: 105, sa: 40, sd: 70, sp: 100 },
        weightkg: 75.5
    },
    Misdreavus: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        weightkg: 1
    },
    Murkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 91 },
        weightkg: 2.1
    },
    Natu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 40, at: 50, df: 45, sa: 70, sd: 45, sp: 70 },
        weightkg: 2,
        nfe: true
    },
    Noctowl: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        weightkg: 40.8
    },
    Octillery: {
        types: ['Water'],
        bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 },
        weightkg: 28.5
    },
    Phanpy: {
        types: ['Ground'],
        bs: { hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40 },
        weightkg: 33.5,
        nfe: true
    },
    Pichu: {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        nfe: true
    },
    Piloswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        weightkg: 55.8
    },
    Pineco: {
        types: ['Bug'],
        bs: { hp: 50, at: 65, df: 90, sa: 35, sd: 35, sp: 15 },
        weightkg: 7.2,
        nfe: true
    },
    Politoed: {
        types: ['Water'],
        bs: { hp: 90, at: 75, df: 75, sa: 90, sd: 100, sp: 70 },
        weightkg: 33.9
    },
    Porygon2: {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 90, sa: 105, sd: 95, sp: 60 },
        weightkg: 32.5,
        gender: 'N'
    },
    Pupitar: {
        types: ['Rock', 'Ground'],
        bs: { hp: 70, at: 84, df: 70, sa: 65, sd: 70, sp: 51 },
        weightkg: 152,
        nfe: true
    },
    Quagsire: {
        types: ['Water', 'Ground'],
        bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
        weightkg: 75
    },
    Quilava: {
        types: ['Fire'],
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        weightkg: 19,
        nfe: true
    },
    Qwilfish: {
        types: ['Water', 'Poison'],
        bs: { hp: 65, at: 95, df: 75, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9
    },
    Raikou: {
        types: ['Electric'],
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 115 },
        weightkg: 178,
        gender: 'N'
    },
    Remoraid: {
        types: ['Water'],
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        weightkg: 12,
        nfe: true
    },
    Scizor: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        weightkg: 118
    },
    Sentret: {
        types: ['Normal'],
        bs: { hp: 35, at: 46, df: 34, sa: 35, sd: 45, sp: 20 },
        weightkg: 6,
        nfe: true
    },
    Shuckle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        weightkg: 20.5
    },
    Skarmory: {
        types: ['Steel', 'Flying'],
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        weightkg: 50.5
    },
    Skiploom: {
        types: ['Grass', 'Flying'],
        bs: { hp: 55, at: 45, df: 50, sa: 45, sd: 65, sp: 80 },
        weightkg: 1,
        nfe: true
    },
    Slowking: {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        weightkg: 79.5
    },
    Slugma: {
        types: ['Fire'],
        bs: { hp: 40, at: 40, df: 40, sa: 70, sd: 40, sp: 20 },
        weightkg: 35,
        nfe: true
    },
    Smeargle: { types: ['Normal'], bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 }, weightkg: 58 },
    Smoochum: {
        types: ['Ice', 'Psychic'],
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        weightkg: 6,
        nfe: true
    },
    Sneasel: {
        types: ['Dark', 'Ice'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 28
    },
    Snubbull: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 40, sd: 40, sp: 30 },
        weightkg: 7.8,
        nfe: true
    },
    Spinarak: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        weightkg: 8.5,
        nfe: true
    },
    Stantler: {
        types: ['Normal'],
        bs: { hp: 73, at: 95, df: 62, sa: 85, sd: 65, sp: 85 },
        weightkg: 71.2
    },
    Steelix: {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 85, df: 200, sa: 55, sd: 65, sp: 30 },
        weightkg: 400
    },
    Sudowoodo: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 30, sd: 65, sp: 30 },
        weightkg: 38
    },
    Suicune: {
        types: ['Water'],
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 115, sp: 85 },
        weightkg: 187,
        gender: 'N'
    },
    Sunflora: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 },
        weightkg: 8.5
    },
    Sunkern: {
        types: ['Grass'],
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        weightkg: 1.8,
        nfe: true
    },
    Swinub: {
        types: ['Ice', 'Ground'],
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        weightkg: 6.5,
        nfe: true
    },
    Teddiursa: {
        types: ['Normal'],
        bs: { hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 8.8,
        nfe: true
    },
    Togepi: {
        types: ['Normal'],
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        weightkg: 1.5,
        nfe: true
    },
    Togetic: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 40, df: 85, sa: 80, sd: 105, sp: 40 },
        weightkg: 3.2
    },
    Totodile: {
        types: ['Water'],
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        weightkg: 9.5,
        nfe: true
    },
    Typhlosion: {
        types: ['Fire'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 79.5
    },
    Tyranitar: {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 134, df: 110, sa: 95, sd: 100, sp: 61 },
        weightkg: 202
    },
    Tyrogue: {
        types: ['Fighting'],
        bs: { hp: 35, at: 35, df: 35, sa: 35, sd: 35, sp: 35 },
        weightkg: 21,
        nfe: true
    },
    Umbreon: { types: ['Dark'], bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 }, weightkg: 27 },
    Unown: {
        types: ['Psychic'],
        bs: { hp: 48, at: 72, df: 48, sa: 72, sd: 48, sp: 48 },
        weightkg: 5,
        gender: 'N'
    },
    Ursaring: {
        types: ['Normal'],
        bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 55 },
        weightkg: 125.8
    },
    Wobbuffet: {
        types: ['Psychic'],
        bs: { hp: 190, at: 33, df: 58, sa: 33, sd: 58, sp: 33 },
        weightkg: 28.5
    },
    Wooper: {
        types: ['Water', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        nfe: true
    },
    Xatu: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 65, at: 75, df: 70, sa: 95, sd: 70, sp: 95 },
        weightkg: 15
    },
    Yanma: {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 },
        weightkg: 38
    }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Abra: { abilities: { 0: 'Synchronize' } },
    Aerodactyl: { abilities: { 0: 'Rock Head' } },
    Alakazam: { abilities: { 0: 'Synchronize' } },
    Arbok: { abilities: { 0: 'Intimidate' } },
    Arcanine: { abilities: { 0: 'Intimidate' } },
    Articuno: { abilities: { 0: 'Pressure' } },
    Beedrill: { abilities: { 0: 'Swarm' } },
    Bellsprout: { abilities: { 0: 'Chlorophyll' } },
    Blastoise: { abilities: { 0: 'Torrent' } },
    Bulbasaur: { abilities: { 0: 'Overgrow' } },
    Butterfree: { abilities: { 0: 'Compound Eyes' } },
    Caterpie: { abilities: { 0: 'Shield Dust' } },
    Chansey: { abilities: { 0: 'Natural Cure' } },
    Charizard: { abilities: { 0: 'Blaze' } },
    Charmander: { abilities: { 0: 'Blaze' } },
    Charmeleon: { abilities: { 0: 'Blaze' } },
    Clefable: { abilities: { 0: 'Cute Charm' } },
    Clefairy: { abilities: { 0: 'Cute Charm' } },
    Cloyster: { abilities: { 0: 'Shell Armor' } },
    Cubone: { abilities: { 0: 'Rock Head' } },
    Dewgong: { abilities: { 0: 'Thick Fat' } },
    Diglett: { abilities: { 0: 'Sand Veil' } },
    Ditto: { abilities: { 0: 'Limber' } },
    Dodrio: { abilities: { 0: 'Run Away' } },
    Doduo: { abilities: { 0: 'Run Away' } },
    Dragonair: { abilities: { 0: 'Shed Skin' } },
    Dragonite: { abilities: { 0: 'Inner Focus' } },
    Dratini: { abilities: { 0: 'Shed Skin' } },
    Drowzee: { abilities: { 0: 'Insomnia' } },
    Dugtrio: { abilities: { 0: 'Sand Veil' } },
    Eevee: { abilities: { 0: 'Run Away' } },
    Ekans: { abilities: { 0: 'Intimidate' } },
    Electabuzz: { abilities: { 0: 'Static' } },
    Electrode: { abilities: { 0: 'Soundproof' } },
    Exeggcute: { abilities: { 0: 'Chlorophyll' } },
    Exeggutor: { abilities: { 0: 'Chlorophyll' } },
    'Farfetch\u2019d': { abilities: { 0: 'Keen Eye' } },
    Fearow: { abilities: { 0: 'Keen Eye' } },
    Flareon: { abilities: { 0: 'Flash Fire' } },
    Gastly: { abilities: { 0: 'Levitate' } },
    Gengar: { abilities: { 0: 'Levitate' } },
    Geodude: { abilities: { 0: 'Rock Head' } },
    Gloom: { abilities: { 0: 'Chlorophyll' } },
    Golbat: { abilities: { 0: 'Inner Focus' } },
    Goldeen: { abilities: { 0: 'Swift Swim' } },
    Golduck: { abilities: { 0: 'Damp' } },
    Golem: { abilities: { 0: 'Rock Head' } },
    Graveler: { abilities: { 0: 'Rock Head' } },
    Grimer: { abilities: { 0: 'Stench' } },
    Growlithe: { abilities: { 0: 'Intimidate' } },
    Gyarados: { abilities: { 0: 'Intimidate' } },
    Haunter: { abilities: { 0: 'Levitate' } },
    Hitmonchan: { abilities: { 0: 'Keen Eye' } },
    Hitmonlee: { abilities: { 0: 'Limber' } },
    Horsea: { abilities: { 0: 'Swift Swim' } },
    Hypno: { abilities: { 0: 'Insomnia' } },
    Ivysaur: { abilities: { 0: 'Overgrow' } },
    Jigglypuff: { abilities: { 0: 'Cute Charm' } },
    Jolteon: { abilities: { 0: 'Volt Absorb' } },
    Jynx: { abilities: { 0: 'Oblivious' } },
    Kabuto: { abilities: { 0: 'Swift Swim' } },
    Kabutops: { abilities: { 0: 'Swift Swim' } },
    Kadabra: { abilities: { 0: 'Synchronize' } },
    Kakuna: { abilities: { 0: 'Shed Skin' } },
    Kangaskhan: { abilities: { 0: 'Early Bird' } },
    Kingler: { abilities: { 0: 'Hyper Cutter' } },
    Koffing: { abilities: { 0: 'Levitate' } },
    Krabby: { abilities: { 0: 'Hyper Cutter' } },
    Lapras: { abilities: { 0: 'Water Absorb' } },
    Lickitung: { abilities: { 0: 'Own Tempo' } },
    Machamp: { abilities: { 0: 'Guts' } },
    Machoke: { abilities: { 0: 'Guts' } },
    Machop: { abilities: { 0: 'Guts' } },
    Magikarp: { abilities: { 0: 'Swift Swim' } },
    Magmar: { abilities: { 0: 'Flame Body' } },
    Magnemite: { abilities: { 0: 'Magnet Pull' } },
    Magneton: { abilities: { 0: 'Magnet Pull' } },
    Mankey: { abilities: { 0: 'Vital Spirit' } },
    Marowak: { abilities: { 0: 'Rock Head' } },
    Meowth: { abilities: { 0: 'Pickup' } },
    Metapod: { abilities: { 0: 'Shed Skin' } },
    Mew: { abilities: { 0: 'Synchronize' } },
    Mewtwo: { abilities: { 0: 'Pressure' } },
    Moltres: { abilities: { 0: 'Pressure' } },
    'Mr. Mime': { abilities: { 0: 'Soundproof' } },
    Muk: { abilities: { 0: 'Stench' } },
    Nidoking: { abilities: { 0: 'Poison Point' } },
    Nidoqueen: { abilities: { 0: 'Poison Point' } },
    'Nidoran-F': { abilities: { 0: 'Poison Point' } },
    'Nidoran-M': { abilities: { 0: 'Poison Point' } },
    Nidorina: { abilities: { 0: 'Poison Point' } },
    Nidorino: { abilities: { 0: 'Poison Point' } },
    Ninetales: { abilities: { 0: 'Flash Fire' } },
    Oddish: { abilities: { 0: 'Chlorophyll' } },
    Omanyte: { abilities: { 0: 'Swift Swim' } },
    Omastar: { abilities: { 0: 'Swift Swim' } },
    Onix: { abilities: { 0: 'Rock Head' } },
    Paras: { abilities: { 0: 'Effect Spore' } },
    Parasect: { abilities: { 0: 'Effect Spore' } },
    Persian: { abilities: { 0: 'Limber' } },
    Pidgeot: { abilities: { 0: 'Keen Eye' } },
    Pidgeotto: { abilities: { 0: 'Keen Eye' } },
    Pidgey: { abilities: { 0: 'Keen Eye' } },
    Pikachu: { abilities: { 0: 'Static' } },
    Pinsir: { abilities: { 0: 'Hyper Cutter' } },
    Poliwag: { abilities: { 0: 'Water Absorb' } },
    Poliwhirl: { abilities: { 0: 'Water Absorb' } },
    Poliwrath: { abilities: { 0: 'Water Absorb' } },
    Ponyta: { abilities: { 0: 'Run Away' } },
    Porygon: { abilities: { 0: 'Trace' } },
    Primeape: { abilities: { 0: 'Vital Spirit' } },
    Psyduck: { abilities: { 0: 'Damp' } },
    Raichu: { abilities: { 0: 'Static' } },
    Rapidash: { abilities: { 0: 'Run Away' } },
    Raticate: { abilities: { 0: 'Run Away' } },
    Rattata: { abilities: { 0: 'Run Away' } },
    Rhydon: { abilities: { 0: 'Lightning Rod' } },
    Rhyhorn: { abilities: { 0: 'Lightning Rod' } },
    Sandshrew: { abilities: { 0: 'Sand Veil' } },
    Sandslash: { abilities: { 0: 'Sand Veil' } },
    Scyther: { abilities: { 0: 'Swarm' } },
    Seadra: { abilities: { 0: 'Poison Point' } },
    Seaking: { abilities: { 0: 'Swift Swim' } },
    Seel: { abilities: { 0: 'Thick Fat' } },
    Shellder: { abilities: { 0: 'Shell Armor' } },
    Slowbro: { abilities: { 0: 'Oblivious' } },
    Slowpoke: { abilities: { 0: 'Oblivious' } },
    Snorlax: { abilities: { 0: 'Immunity' } },
    Spearow: { abilities: { 0: 'Keen Eye' } },
    Squirtle: { abilities: { 0: 'Torrent' } },
    Starmie: { abilities: { 0: 'Illuminate' } },
    Staryu: { abilities: { 0: 'Illuminate' } },
    Tangela: { abilities: { 0: 'Chlorophyll' } },
    Tauros: { abilities: { 0: 'Intimidate' } },
    Tentacool: { abilities: { 0: 'Clear Body' } },
    Tentacruel: { abilities: { 0: 'Clear Body' } },
    Vaporeon: { abilities: { 0: 'Water Absorb' } },
    Venomoth: { abilities: { 0: 'Shield Dust' } },
    Venonat: { abilities: { 0: 'Compound Eyes' } },
    Venusaur: { abilities: { 0: 'Overgrow' } },
    Victreebel: { abilities: { 0: 'Chlorophyll' } },
    Vileplume: { abilities: { 0: 'Chlorophyll' } },
    Voltorb: { abilities: { 0: 'Soundproof' } },
    Vulpix: { abilities: { 0: 'Flash Fire' } },
    Wartortle: { abilities: { 0: 'Torrent' } },
    Weedle: { abilities: { 0: 'Shield Dust' } },
    Weepinbell: { abilities: { 0: 'Chlorophyll' } },
    Weezing: { abilities: { 0: 'Levitate' } },
    Wigglytuff: { abilities: { 0: 'Cute Charm' } },
    Zapdos: { abilities: { 0: 'Pressure' } },
    Zubat: { abilities: { 0: 'Inner Focus' } },
    Aipom: { abilities: { 0: 'Run Away' } },
    Ampharos: { abilities: { 0: 'Static' } },
    Ariados: { abilities: { 0: 'Swarm' } },
    Azumarill: { abilities: { 0: 'Thick Fat' } },
    Bayleef: { abilities: { 0: 'Overgrow' } },
    Bellossom: { abilities: { 0: 'Chlorophyll' } },
    Blissey: { abilities: { 0: 'Natural Cure' } },
    Celebi: { abilities: { 0: 'Natural Cure' } },
    Chikorita: { abilities: { 0: 'Overgrow' } },
    Chinchou: { abilities: { 0: 'Volt Absorb' } },
    Cleffa: { abilities: { 0: 'Cute Charm' } },
    Corsola: { abilities: { 0: 'Hustle' } },
    Crobat: { abilities: { 0: 'Inner Focus' } },
    Croconaw: { abilities: { 0: 'Torrent' } },
    Cyndaquil: { abilities: { 0: 'Blaze' } },
    Delibird: { abilities: { 0: 'Vital Spirit' } },
    Donphan: { abilities: { 0: 'Sturdy' } },
    Dunsparce: { abilities: { 0: 'Serene Grace' } },
    Elekid: { abilities: { 0: 'Static' } },
    Entei: { abilities: { 0: 'Pressure' } },
    Espeon: { abilities: { 0: 'Synchronize' } },
    Feraligatr: { abilities: { 0: 'Torrent' } },
    Flaaffy: { abilities: { 0: 'Static' } },
    Forretress: { abilities: { 0: 'Sturdy' } },
    Furret: { abilities: { 0: 'Run Away' } },
    Girafarig: { abilities: { 0: 'Inner Focus' } },
    Gligar: { abilities: { 0: 'Hyper Cutter' } },
    Granbull: { abilities: { 0: 'Intimidate' } },
    Heracross: { abilities: { 0: 'Swarm' } },
    Hitmontop: { abilities: { 0: 'Intimidate' } },
    'Ho-Oh': { abilities: { 0: 'Pressure' } },
    Hoothoot: { abilities: { 0: 'Insomnia' } },
    Hoppip: { abilities: { 0: 'Chlorophyll' } },
    Houndoom: { abilities: { 0: 'Early Bird' } },
    Houndour: { abilities: { 0: 'Early Bird' } },
    Igglybuff: { abilities: { 0: 'Cute Charm' } },
    Jumpluff: { abilities: { 0: 'Chlorophyll' } },
    Kingdra: { abilities: { 0: 'Swift Swim' } },
    Lanturn: { abilities: { 0: 'Volt Absorb' } },
    Larvitar: { abilities: { 0: 'Guts' } },
    Ledian: { abilities: { 0: 'Swarm' } },
    Ledyba: { abilities: { 0: 'Swarm' } },
    Lugia: { abilities: { 0: 'Pressure' } },
    Magby: { abilities: { 0: 'Flame Body' } },
    Magcargo: { abilities: { 0: 'Magma Armor' } },
    Mantine: { abilities: { 0: 'Swift Swim' } },
    Mareep: { abilities: { 0: 'Static' } },
    Marill: { abilities: { 0: 'Thick Fat' } },
    Meganium: { abilities: { 0: 'Overgrow' } },
    Miltank: { abilities: { 0: 'Thick Fat' } },
    Misdreavus: { abilities: { 0: 'Levitate' } },
    Murkrow: { abilities: { 0: 'Insomnia' } },
    Natu: { abilities: { 0: 'Synchronize' } },
    Noctowl: { abilities: { 0: 'Insomnia' } },
    Octillery: { abilities: { 0: 'Suction Cups' } },
    Phanpy: { abilities: { 0: 'Pickup' } },
    Pichu: { abilities: { 0: 'Static' } },
    Piloswine: { abilities: { 0: 'Oblivious' } },
    Pineco: { abilities: { 0: 'Sturdy' } },
    Politoed: { abilities: { 0: 'Water Absorb' } },
    Porygon2: { abilities: { 0: 'Trace' } },
    Pupitar: { abilities: { 0: 'Shed Skin' } },
    Quagsire: { abilities: { 0: 'Damp' } },
    Quilava: { abilities: { 0: 'Blaze' } },
    Qwilfish: { abilities: { 0: 'Poison Point' } },
    Raikou: { abilities: { 0: 'Pressure' } },
    Remoraid: { abilities: { 0: 'Hustle' } },
    Scizor: { abilities: { 0: 'Swarm' } },
    Sentret: { abilities: { 0: 'Run Away' } },
    Shuckle: { abilities: { 0: 'Sturdy' } },
    Skarmory: { abilities: { 0: 'Keen Eye' } },
    Skiploom: { abilities: { 0: 'Chlorophyll' } },
    Slowking: { abilities: { 0: 'Oblivious' } },
    Slugma: { abilities: { 0: 'Magma Armor' } },
    Smeargle: { abilities: { 0: 'Own Tempo' } },
    Smoochum: { abilities: { 0: 'Oblivious' } },
    Sneasel: { abilities: { 0: 'Inner Focus' } },
    Snubbull: { abilities: { 0: 'Intimidate' } },
    Spinarak: { abilities: { 0: 'Swarm' } },
    Stantler: { abilities: { 0: 'Intimidate' } },
    Steelix: { abilities: { 0: 'Rock Head' } },
    Sudowoodo: { abilities: { 0: 'Sturdy' } },
    Suicune: { abilities: { 0: 'Pressure' } },
    Sunflora: { abilities: { 0: 'Chlorophyll' } },
    Sunkern: { abilities: { 0: 'Chlorophyll' } },
    Swinub: { abilities: { 0: 'Oblivious' } },
    Teddiursa: { abilities: { 0: 'Pickup' } },
    Togepi: { abilities: { 0: 'Hustle' } },
    Togetic: { abilities: { 0: 'Hustle' } },
    Totodile: { abilities: { 0: 'Torrent' } },
    Typhlosion: { abilities: { 0: 'Blaze' } },
    Tyranitar: { abilities: { 0: 'Sand Stream' } },
    Tyrogue: { abilities: { 0: 'Guts' } },
    Umbreon: { abilities: { 0: 'Synchronize' } },
    Unown: { abilities: { 0: 'Levitate' } },
    Ursaring: { abilities: { 0: 'Guts' } },
    Wobbuffet: { abilities: { 0: 'Shadow Tag' } },
    Wooper: { abilities: { 0: 'Damp' } },
    Xatu: { abilities: { 0: 'Synchronize' } },
    Yanma: { abilities: { 0: 'Speed Boost' } },
    Absol: {
        types: ['Dark'],
        bs: { hp: 65, at: 130, df: 60, sa: 75, sd: 60, sp: 75 },
        weightkg: 47,
        abilities: { 0: 'Pressure' }
    },
    Aggron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        weightkg: 360,
        abilities: { 0: 'Sturdy' }
    },
    Altaria: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 75, at: 70, df: 90, sa: 70, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Natural Cure' }
    },
    Anorith: {
        types: ['Rock', 'Bug'],
        bs: { hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Armaldo: {
        types: ['Rock', 'Bug'],
        bs: { hp: 75, at: 125, df: 100, sa: 70, sd: 80, sp: 45 },
        weightkg: 68.2,
        abilities: { 0: 'Battle Armor' }
    },
    Aron: {
        types: ['Steel', 'Rock'],
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        weightkg: 60,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Azurill: {
        types: ['Normal'],
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Bagon: {
        types: ['Dragon'],
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        weightkg: 42.1,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Baltoy: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 40, at: 40, df: 55, sa: 40, sd: 70, sp: 55 },
        weightkg: 21.5,
        abilities: { 0: 'Levitate' },
        nfe: true,
        gender: 'N'
    },
    Banette: {
        types: ['Ghost'],
        bs: { hp: 64, at: 115, df: 65, sa: 83, sd: 63, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Insomnia' }
    },
    Barboach: {
        types: ['Water', 'Ground'],
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Beautifly: {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 70, df: 50, sa: 90, sd: 50, sp: 65 },
        weightkg: 28.4,
        abilities: { 0: 'Swarm' }
    },
    Beldum: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        weightkg: 95.2,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Blaziken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Blaze' }
    },
    Breloom: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        weightkg: 39.2,
        abilities: { 0: 'Effect Spore' }
    },
    Cacnea: {
        types: ['Grass'],
        bs: { hp: 50, at: 85, df: 40, sa: 85, sd: 40, sp: 35 },
        weightkg: 51.3,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Cacturne: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 55 },
        weightkg: 77.4,
        abilities: { 0: 'Sand Veil' }
    },
    Camerupt: {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        weightkg: 220,
        abilities: { 0: 'Magma Armor' }
    },
    Carvanha: {
        types: ['Water', 'Dark'],
        bs: { hp: 45, at: 90, df: 20, sa: 65, sd: 20, sp: 65 },
        weightkg: 20.8,
        nfe: true,
        abilities: { 0: 'Rough Skin' }
    },
    Cascoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 11.5,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Castform: {
        types: ['Normal'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        otherFormes: ['Castform-Rainy', 'Castform-Snowy', 'Castform-Sunny']
    },
    'Castform-Rainy': {
        types: ['Water'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Snowy': {
        types: ['Ice'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    'Castform-Sunny': {
        types: ['Fire'],
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        weightkg: 0.8,
        abilities: { 0: 'Forecast' },
        baseSpecies: 'Castform'
    },
    Chimecho: {
        types: ['Psychic'],
        bs: { hp: 65, at: 50, df: 70, sa: 95, sd: 80, sp: 65 },
        weightkg: 1,
        abilities: { 0: 'Levitate' }
    },
    Clamperl: {
        types: ['Water'],
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        weightkg: 52.5,
        nfe: true,
        abilities: { 0: 'Shell Armor' }
    },
    Claydol: {
        types: ['Ground', 'Psychic'],
        bs: { hp: 60, at: 70, df: 105, sa: 70, sd: 120, sp: 75 },
        weightkg: 108,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Combusken: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Corphish: {
        types: ['Water'],
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Cradily: {
        types: ['Rock', 'Grass'],
        bs: { hp: 86, at: 81, df: 97, sa: 81, sd: 107, sp: 43 },
        weightkg: 60.4,
        abilities: { 0: 'Suction Cups' }
    },
    Crawdaunt: {
        types: ['Water', 'Dark'],
        bs: { hp: 63, at: 120, df: 85, sa: 90, sd: 55, sp: 55 },
        weightkg: 32.8,
        abilities: { 0: 'Hyper Cutter' }
    },
    Delcatty: {
        types: ['Normal'],
        bs: { hp: 70, at: 65, df: 65, sa: 55, sd: 55, sp: 70 },
        weightkg: 32.6,
        abilities: { 0: 'Cute Charm' }
    },
    Deoxys: {
        types: ['Psychic'],
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Deoxys-Attack': {
        types: ['Psychic'],
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Defense': {
        types: ['Psychic'],
        bs: { hp: 50, at: 70, df: 160, sa: 70, sd: 160, sp: 90 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    'Deoxys-Speed': {
        types: ['Psychic'],
        bs: { hp: 50, at: 95, df: 90, sa: 95, sd: 90, sp: 180 },
        weightkg: 60.8,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Deoxys'
    },
    Dusclops: {
        types: ['Ghost'],
        bs: { hp: 40, at: 70, df: 130, sa: 60, sd: 130, sp: 25 },
        weightkg: 30.6,
        abilities: { 0: 'Pressure' }
    },
    Duskull: {
        types: ['Ghost'],
        bs: { hp: 20, at: 40, df: 90, sa: 30, sd: 90, sp: 25 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Levitate' }
    },
    Dustox: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 50, df: 70, sa: 50, sd: 90, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Shield Dust' }
    },
    Electrike: {
        types: ['Electric'],
        bs: { hp: 40, at: 45, df: 40, sa: 65, sd: 40, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Static' }
    },
    Exploud: {
        types: ['Normal'],
        bs: { hp: 104, at: 91, df: 63, sa: 91, sd: 63, sp: 68 },
        weightkg: 84,
        abilities: { 0: 'Soundproof' }
    },
    Feebas: {
        types: ['Water'],
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        weightkg: 7.4,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flygon: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 80, at: 100, df: 80, sa: 80, sd: 80, sp: 100 },
        weightkg: 82,
        abilities: { 0: 'Levitate' }
    },
    Gardevoir: {
        types: ['Psychic'],
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        weightkg: 48.4,
        abilities: { 0: 'Synchronize' }
    },
    Glalie: {
        types: ['Ice'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 256.5,
        abilities: { 0: 'Inner Focus' }
    },
    Gorebyss: {
        types: ['Water'],
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        weightkg: 22.6,
        abilities: { 0: 'Swift Swim' }
    },
    Groudon: {
        types: ['Ground'],
        bs: { hp: 100, at: 150, df: 140, sa: 100, sd: 90, sp: 90 },
        weightkg: 950,
        abilities: { 0: 'Drought' },
        gender: 'N'
    },
    Grovyle: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        weightkg: 21.6,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Grumpig: {
        types: ['Psychic'],
        bs: { hp: 80, at: 45, df: 65, sa: 90, sd: 110, sp: 80 },
        weightkg: 71.5,
        abilities: { 0: 'Thick Fat' }
    },
    Gulpin: {
        types: ['Poison'],
        bs: { hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40 },
        weightkg: 10.3,
        nfe: true,
        abilities: { 0: 'Liquid Ooze' }
    },
    Hariyama: {
        types: ['Fighting'],
        bs: { hp: 144, at: 120, df: 60, sa: 40, sd: 60, sp: 50 },
        weightkg: 253.8,
        abilities: { 0: 'Thick Fat' }
    },
    Huntail: {
        types: ['Water'],
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        weightkg: 27,
        abilities: { 0: 'Swift Swim' }
    },
    Illumise: {
        types: ['Bug'],
        bs: { hp: 65, at: 47, df: 55, sa: 73, sd: 75, sp: 85 },
        abilities: { 0: 'Oblivious' },
        weightkg: 17.7
    },
    Jirachi: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.1,
        abilities: { 0: 'Serene Grace' },
        gender: 'N'
    },
    Kecleon: {
        types: ['Normal'],
        bs: { hp: 60, at: 90, df: 70, sa: 60, sd: 120, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Color Change' }
    },
    Kirlia: {
        types: ['Psychic'],
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Kyogre: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 90, sa: 150, sd: 140, sp: 90 },
        weightkg: 352,
        abilities: { 0: 'Drizzle' },
        gender: 'N'
    },
    Lairon: {
        types: ['Steel', 'Rock'],
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        weightkg: 120,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Latias: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        weightkg: 40,
        abilities: { 0: 'Levitate' }
    },
    Latios: {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        weightkg: 60,
        abilities: { 0: 'Levitate' }
    },
    Lileep: {
        types: ['Rock', 'Grass'],
        bs: { hp: 66, at: 41, df: 77, sa: 61, sd: 87, sp: 23 },
        weightkg: 23.8,
        nfe: true,
        abilities: { 0: 'Suction Cups' }
    },
    Linoone: {
        types: ['Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' }
    },
    Lombre: {
        types: ['Water', 'Grass'],
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        weightkg: 32.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Lotad: {
        types: ['Water', 'Grass'],
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        weightkg: 2.6,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Loudred: {
        types: ['Normal'],
        bs: { hp: 84, at: 71, df: 43, sa: 71, sd: 43, sp: 48 },
        weightkg: 40.5,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Ludicolo: {
        types: ['Water', 'Grass'],
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        weightkg: 55,
        abilities: { 0: 'Swift Swim' }
    },
    Lunatone: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 85, sp: 70 },
        weightkg: 168,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Luvdisc: {
        types: ['Water'],
        bs: { hp: 43, at: 30, df: 55, sa: 40, sd: 65, sp: 97 },
        weightkg: 8.7,
        abilities: { 0: 'Swift Swim' }
    },
    Makuhita: {
        types: ['Fighting'],
        bs: { hp: 72, at: 60, df: 30, sa: 20, sd: 30, sp: 25 },
        weightkg: 86.4,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Manectric: {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 60, sa: 105, sd: 60, sp: 105 },
        weightkg: 40.2,
        abilities: { 0: 'Static' }
    },
    Marshtomp: {
        types: ['Water', 'Ground'],
        bs: { hp: 70, at: 85, df: 70, sa: 60, sd: 70, sp: 50 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Masquerain: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 60, df: 62, sa: 80, sd: 82, sp: 60 },
        weightkg: 3.6,
        abilities: { 0: 'Intimidate' }
    },
    Mawile: {
        types: ['Steel'],
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        weightkg: 11.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Medicham: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' }
    },
    Meditite: {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        weightkg: 11.2,
        nfe: true,
        abilities: { 0: 'Pure Power' }
    },
    Metagross: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        weightkg: 550,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Metang: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        weightkg: 202.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Mightyena: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 70 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Milotic: {
        types: ['Water'],
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        weightkg: 162,
        abilities: { 0: 'Marvel Scale' }
    },
    Minun: {
        types: ['Electric'],
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Minus' }
    },
    Mudkip: {
        types: ['Water'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        weightkg: 7.6,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Nincada: {
        types: ['Bug', 'Ground'],
        bs: { hp: 31, at: 45, df: 90, sa: 30, sd: 30, sp: 40 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Ninjask: {
        types: ['Bug', 'Flying'],
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 160 },
        weightkg: 12,
        abilities: { 0: 'Speed Boost' }
    },
    Nosepass: {
        types: ['Rock'],
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30 },
        weightkg: 97,
        abilities: { 0: 'Sturdy' }
    },
    Numel: {
        types: ['Fire', 'Ground'],
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        weightkg: 24,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Nuzleaf: {
        types: ['Grass', 'Dark'],
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        weightkg: 28,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pelipper: {
        types: ['Water', 'Flying'],
        bs: { hp: 60, at: 50, df: 100, sa: 85, sd: 70, sp: 65 },
        weightkg: 28,
        abilities: { 0: 'Keen Eye' }
    },
    Plusle: {
        types: ['Electric'],
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        weightkg: 4.2,
        abilities: { 0: 'Plus' }
    },
    Poochyena: {
        types: ['Dark'],
        bs: { hp: 35, at: 55, df: 35, sa: 30, sd: 30, sp: 35 },
        weightkg: 13.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Ralts: {
        types: ['Psychic'],
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Synchronize' }
    },
    Rayquaza: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 150, df: 90, sa: 150, sd: 90, sp: 95 },
        weightkg: 206.5,
        abilities: { 0: 'Air Lock' },
        gender: 'N'
    },
    Regice: {
        types: ['Ice'],
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        weightkg: 175,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Regirock: {
        types: ['Rock'],
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        weightkg: 230,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Registeel: {
        types: ['Steel'],
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        weightkg: 205,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Relicanth: {
        types: ['Water', 'Rock'],
        bs: { hp: 100, at: 90, df: 130, sa: 45, sd: 65, sp: 55 },
        weightkg: 23.4,
        abilities: { 0: 'Swift Swim' }
    },
    Roselia: {
        types: ['Grass', 'Poison'],
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        weightkg: 2,
        abilities: { 0: 'Natural Cure' }
    },
    Sableye: {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        weightkg: 11,
        abilities: { 0: 'Keen Eye' }
    },
    Salamence: {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 135, df: 80, sa: 110, sd: 80, sp: 100 },
        weightkg: 102.6,
        abilities: { 0: 'Intimidate' }
    },
    Sceptile: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        weightkg: 52.2,
        abilities: { 0: 'Overgrow' }
    },
    Sealeo: {
        types: ['Ice', 'Water'],
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        weightkg: 87.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Seedot: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Seviper: {
        types: ['Poison'],
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 65 },
        weightkg: 52.5,
        abilities: { 0: 'Shed Skin' }
    },
    Sharpedo: {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 120, df: 40, sa: 95, sd: 40, sp: 95 },
        weightkg: 88.8,
        abilities: { 0: 'Rough Skin' }
    },
    Shedinja: {
        types: ['Bug', 'Ghost'],
        bs: { hp: 1, at: 90, df: 45, sa: 30, sd: 30, sp: 40 },
        weightkg: 1.2,
        abilities: { 0: 'Wonder Guard' },
        gender: 'N'
    },
    Shelgon: {
        types: ['Dragon'],
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        weightkg: 110.5,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Shiftry: {
        types: ['Grass', 'Dark'],
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        weightkg: 59.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Shroomish: {
        types: ['Grass'],
        bs: { hp: 60, at: 40, df: 60, sa: 40, sd: 60, sp: 35 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Shuppet: {
        types: ['Ghost'],
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 45 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Insomnia' }
    },
    Silcoon: {
        types: ['Bug'],
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        weightkg: 10,
        abilities: { 0: 'Shed Skin' },
        nfe: true
    },
    Skitty: {
        types: ['Normal'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 35, sp: 50 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Slaking: {
        types: ['Normal'],
        bs: { hp: 150, at: 160, df: 100, sa: 95, sd: 65, sp: 100 },
        weightkg: 130.5,
        abilities: { 0: 'Truant' }
    },
    Slakoth: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        weightkg: 24,
        abilities: { 0: 'Truant' },
        nfe: true
    },
    Snorunt: {
        types: ['Ice'],
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        weightkg: 16.8,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Solrock: {
        types: ['Rock', 'Psychic'],
        bs: { hp: 70, at: 95, df: 85, sa: 55, sd: 65, sp: 70 },
        weightkg: 154,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Spheal: {
        types: ['Ice', 'Water'],
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        weightkg: 39.5,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Spinda: {
        types: ['Normal'],
        bs: { hp: 60, at: 60, df: 60, sa: 60, sd: 60, sp: 60 },
        weightkg: 5,
        abilities: { 0: 'Own Tempo' }
    },
    Spoink: {
        types: ['Psychic'],
        bs: { hp: 60, at: 25, df: 35, sa: 70, sd: 80, sp: 60 },
        weightkg: 30.6,
        nfe: true,
        abilities: { 0: 'Thick Fat' }
    },
    Surskit: {
        types: ['Bug', 'Water'],
        bs: { hp: 40, at: 30, df: 32, sa: 50, sd: 52, sp: 65 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Swablu: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Swalot: {
        types: ['Poison'],
        bs: { hp: 100, at: 73, df: 83, sa: 73, sd: 83, sp: 55 },
        weightkg: 80,
        abilities: { 0: 'Liquid Ooze' }
    },
    Swampert: {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60 },
        weightkg: 81.9,
        abilities: { 0: 'Torrent' }
    },
    Swellow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 60, at: 85, df: 60, sa: 50, sd: 50, sp: 125 },
        weightkg: 19.8,
        abilities: { 0: 'Guts' }
    },
    Taillow: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        weightkg: 2.3,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Torchic: {
        types: ['Fire'],
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Torkoal: {
        types: ['Fire'],
        bs: { hp: 70, at: 85, df: 140, sa: 85, sd: 70, sp: 20 },
        weightkg: 80.4,
        abilities: { 0: 'White Smoke' }
    },
    Trapinch: {
        types: ['Ground'],
        bs: { hp: 45, at: 100, df: 45, sa: 45, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Treecko: {
        types: ['Grass'],
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Tropius: {
        types: ['Grass', 'Flying'],
        bs: { hp: 99, at: 68, df: 83, sa: 72, sd: 87, sp: 51 },
        weightkg: 100,
        abilities: { 0: 'Chlorophyll' }
    },
    Vibrava: {
        types: ['Ground', 'Dragon'],
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 70 },
        weightkg: 15.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Vigoroth: {
        types: ['Normal'],
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        weightkg: 46.5,
        abilities: { 0: 'Vital Spirit' },
        nfe: true
    },
    Volbeat: {
        types: ['Bug'],
        bs: { hp: 65, at: 73, df: 55, sa: 47, sd: 75, sp: 85 },
        weightkg: 17.7,
        abilities: { 0: 'Illuminate' }
    },
    Wailmer: {
        types: ['Water'],
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        weightkg: 130,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Wailord: {
        types: ['Water'],
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        weightkg: 398,
        abilities: { 0: 'Water Veil' }
    },
    Walrein: {
        types: ['Ice', 'Water'],
        bs: { hp: 110, at: 80, df: 90, sa: 95, sd: 90, sp: 65 },
        weightkg: 150.6,
        abilities: { 0: 'Thick Fat' }
    },
    Whiscash: {
        types: ['Water', 'Ground'],
        bs: { hp: 110, at: 78, df: 73, sa: 76, sd: 71, sp: 60 },
        weightkg: 23.6,
        abilities: { 0: 'Oblivious' }
    },
    Whismur: {
        types: ['Normal'],
        bs: { hp: 64, at: 51, df: 23, sa: 51, sd: 23, sp: 28 },
        weightkg: 16.3,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Wingull: {
        types: ['Water', 'Flying'],
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Wurmple: {
        types: ['Bug'],
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        weightkg: 3.6,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Wynaut: {
        types: ['Psychic'],
        bs: { hp: 95, at: 23, df: 48, sa: 23, sd: 48, sp: 23 },
        weightkg: 14,
        nfe: true,
        abilities: { 0: 'Shadow Tag' }
    },
    Zangoose: {
        types: ['Normal'],
        bs: { hp: 73, at: 115, df: 60, sa: 60, sd: 60, sp: 90 },
        weightkg: 40.3,
        abilities: { 0: 'Immunity' }
    },
    Zigzagoon: {
        types: ['Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Aipom: { nfe: true },
    Dusclops: { nfe: true },
    Electabuzz: { nfe: true },
    Gligar: { nfe: true },
    Lickitung: { nfe: true },
    Magmar: { nfe: true },
    Magneton: { nfe: true },
    Misdreavus: { nfe: true },
    Murkrow: { nfe: true },
    Nosepass: { nfe: true },
    Piloswine: { nfe: true },
    Pichu: { otherFormes: ['Pichu-Spiky-eared'] },
    Porygon2: { nfe: true },
    Rhydon: { nfe: true },
    Roselia: { nfe: true },
    Sneasel: { nfe: true },
    Tangela: { nfe: true },
    Togetic: { nfe: true },
    Yanma: { nfe: true },
    Abomasnow: {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 92, df: 75, sa: 92, sd: 85, sp: 60 },
        weightkg: 135.5,
        abilities: { 0: 'Snow Warning' }
    },
    Ambipom: {
        types: ['Normal'],
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        weightkg: 20.3,
        abilities: { 0: 'Technician' }
    },
    Arceus: {
        types: ['Normal'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        otherFormes: ['Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',]
    },
    'Arceus-Bug': {
        types: ['Bug'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dark': {
        types: ['Dark'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Dragon': {
        types: ['Dragon'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Electric': {
        types: ['Electric'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fighting': {
        types: ['Fighting'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Fire': {
        types: ['Fire'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Flying': {
        types: ['Flying'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ghost': {
        types: ['Ghost'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Grass': {
        types: ['Grass'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ground': {
        types: ['Ground'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Ice': {
        types: ['Ice'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Poison': {
        types: ['Poison'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Psychic': {
        types: ['Psychic'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Rock': {
        types: ['Rock'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Steel': {
        types: ['Steel'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    'Arceus-Water': {
        types: ['Water'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        gender: 'N',
        baseSpecies: 'Arceus'
    },
    Arghonaut: {
        types: ['Water', 'Fighting'],
        bs: { hp: 105, at: 110, df: 95, sa: 70, sd: 100, sp: 75 },
        weightkg: 151,
        abilities: { 0: 'Unaware' }
    },
    Azelf: {
        types: ['Psychic'],
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Bastiodon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 52, df: 168, sa: 47, sd: 138, sp: 30 },
        weightkg: 149.5,
        abilities: { 0: 'Sturdy' }
    },
    Bibarel: {
        types: ['Normal', 'Water'],
        bs: { hp: 79, at: 85, df: 60, sa: 55, sd: 60, sp: 71 },
        weightkg: 31.5,
        abilities: { 0: 'Simple' }
    },
    Bidoof: {
        types: ['Normal'],
        bs: { hp: 59, at: 45, df: 40, sa: 35, sd: 40, sp: 31 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Simple' }
    },
    Bonsly: {
        types: ['Rock'],
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 10 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Breezi: {
        types: ['Poison', 'Flying'],
        bs: { hp: 50, at: 46, df: 69, sa: 60, sd: 50, sp: 75 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Unburden' }
    },
    Bronzong: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 67, at: 89, df: 116, sa: 79, sd: 116, sp: 33 },
        weightkg: 187,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Bronzor: {
        types: ['Steel', 'Psychic'],
        bs: { hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23 },
        weightkg: 60.5,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Budew: {
        types: ['Grass', 'Poison'],
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Buizel: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 35, sa: 60, sd: 30, sp: 85 },
        weightkg: 29.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Buneary: {
        types: ['Normal'],
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Burmy: {
        types: ['Bug'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 },
        weightkg: 3.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Carnivine: {
        types: ['Grass'],
        bs: { hp: 74, at: 100, df: 72, sa: 90, sd: 72, sp: 46 },
        weightkg: 27,
        abilities: { 0: 'Levitate' }
    },
    Chatot: {
        types: ['Normal', 'Flying'],
        bs: { hp: 76, at: 65, df: 45, sa: 92, sd: 42, sp: 91 },
        weightkg: 1.9,
        abilities: { 0: 'Keen Eye' }
    },
    Cherrim: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        otherFormes: ['Cherrim-Sunshine']
    },
    'Cherrim-Sunshine': {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        weightkg: 9.3,
        abilities: { 0: 'Flower Gift' },
        baseSpecies: 'Cherrim'
    },
    Cherubi: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 45, sa: 62, sd: 53, sp: 35 },
        weightkg: 3.3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Chimchar: {
        types: ['Fire'],
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        weightkg: 6.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Chingling: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 65, sd: 50, sp: 45 },
        weightkg: 0.6,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Colossoil: {
        types: ['Ground', 'Dark'],
        bs: { hp: 133, at: 122, df: 72, sa: 71, sd: 72, sp: 95 },
        weightkg: 683.6,
        abilities: { 0: 'Rebound' }
    },
    Combee: {
        types: ['Bug', 'Flying'],
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Honey Gather' },
        heads: 3
    },
    Cranidos: {
        types: ['Rock'],
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        weightkg: 31.5,
        nfe: true,
        abilities: { 0: 'Mold Breaker' }
    },
    Cresselia: {
        types: ['Psychic'],
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 },
        weightkg: 85.6,
        abilities: { 0: 'Levitate' }
    },
    Croagunk: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Cyclohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 108, at: 60, df: 118, sa: 112, sd: 70, sp: 80 },
        weightkg: 59,
        abilities: { 0: 'Shield Dust' }
    },
    Darkrai: {
        types: ['Dark'],
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        weightkg: 50.5,
        abilities: { 0: 'Bad Dreams' },
        gender: 'N'
    },
    Dialga: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 120, df: 120, sa: 150, sd: 100, sp: 90 },
        weightkg: 683,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Dorsoil: {
        types: ['Ground'],
        bs: { hp: 103, at: 72, df: 52, sa: 61, sd: 52, sp: 65 },
        weightkg: 145,
        nfe: true,
        abilities: { 0: 'Oblivious' }
    },
    Drapion: {
        types: ['Poison', 'Dark'],
        bs: { hp: 70, at: 90, df: 110, sa: 60, sd: 75, sp: 95 },
        weightkg: 61.5,
        abilities: { 0: 'Battle Armor' }
    },
    Drifblim: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        weightkg: 15,
        abilities: { 0: 'Aftermath' }
    },
    Drifloon: {
        types: ['Ghost', 'Flying'],
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Aftermath' }
    },
    Duohm: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 88, at: 40, df: 103, sa: 77, sd: 60, sp: 60 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Dusknoir: {
        types: ['Ghost'],
        bs: { hp: 45, at: 100, df: 135, sa: 65, sd: 135, sp: 45 },
        weightkg: 106.6,
        abilities: { 0: 'Pressure' }
    },
    Electivire: {
        types: ['Electric'],
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        weightkg: 138.6,
        abilities: { 0: 'Motor Drive' }
    },
    Embirch: {
        types: ['Fire', 'Grass'],
        bs: { hp: 60, at: 40, df: 55, sa: 65, sd: 40, sp: 60 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Reckless' }
    },
    Empoleon: {
        types: ['Water', 'Steel'],
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        weightkg: 84.5,
        abilities: { 0: 'Torrent' }
    },
    Fidgit: {
        types: ['Poison', 'Ground'],
        bs: { hp: 95, at: 76, df: 109, sa: 90, sd: 80, sp: 105 },
        weightkg: 53,
        abilities: { 0: 'Persistent' }
    },
    Finneon: {
        types: ['Water'],
        bs: { hp: 49, at: 49, df: 56, sa: 49, sd: 61, sp: 66 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Flarelm: {
        types: ['Fire', 'Grass'],
        bs: { hp: 90, at: 50, df: 95, sa: 75, sd: 70, sp: 40 },
        weightkg: 73,
        nfe: true,
        abilities: { 0: 'Rock Head' }
    },
    Floatzel: {
        types: ['Water'],
        bs: { hp: 85, at: 105, df: 55, sa: 85, sd: 50, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Swift Swim' }
    },
    Froslass: {
        types: ['Ice', 'Ghost'],
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        weightkg: 26.6,
        abilities: { 0: 'Snow Cloak' }
    },
    Gabite: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 68, at: 90, df: 65, sa: 50, sd: 55, sp: 82 },
        weightkg: 56,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Gallade: {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        weightkg: 52,
        abilities: { 0: 'Steadfast' }
    },
    Garchomp: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102 },
        weightkg: 95,
        abilities: { 0: 'Sand Veil' }
    },
    Gastrodon: {
        types: ['Water', 'Ground'],
        bs: { hp: 111, at: 83, df: 68, sa: 92, sd: 82, sp: 39 },
        weightkg: 29.9,
        abilities: { 0: 'Sticky Hold' }
    },
    Gible: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42 },
        weightkg: 20.5,
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    Giratina: {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 100, df: 120, sa: 100, sd: 120, sp: 90 },
        weightkg: 750,
        gender: 'N',
        otherFormes: ['Giratina-Origin'],
        abilities: { 0: 'Pressure' }
    },
    'Giratina-Origin': {
        types: ['Ghost', 'Dragon'],
        bs: { hp: 150, at: 120, df: 100, sa: 120, sd: 100, sp: 90 },
        weightkg: 650,
        gender: 'N',
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Giratina'
    },
    Glaceon: {
        types: ['Ice'],
        bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
        weightkg: 25.9,
        abilities: { 0: 'Snow Cloak' }
    },
    Glameow: {
        types: ['Normal'],
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        weightkg: 3.9,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Gliscor: {
        types: ['Ground', 'Flying'],
        bs: { hp: 75, at: 95, df: 125, sa: 45, sd: 75, sp: 95 },
        weightkg: 42.5,
        abilities: { 0: 'Hyper Cutter' }
    },
    Grotle: {
        types: ['Grass'],
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        weightkg: 97,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Happiny: {
        types: ['Normal'],
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        weightkg: 24.4,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    Heatran: {
        types: ['Fire', 'Steel'],
        bs: { hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77 },
        weightkg: 430,
        abilities: { 0: 'Flash Fire' }
    },
    Hippopotas: {
        types: ['Ground'],
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        weightkg: 49.5,
        nfe: true,
        abilities: { 0: 'Sand Stream' }
    },
    Hippowdon: {
        types: ['Ground'],
        bs: { hp: 108, at: 112, df: 118, sa: 68, sd: 72, sp: 47 },
        weightkg: 300,
        abilities: { 0: 'Sand Stream' }
    },
    Honchkrow: {
        types: ['Dark', 'Flying'],
        bs: { hp: 100, at: 125, df: 52, sa: 105, sd: 52, sp: 71 },
        weightkg: 27.3,
        abilities: { 0: 'Insomnia' }
    },
    Infernape: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        weightkg: 55,
        abilities: { 0: 'Blaze' }
    },
    Kitsunoh: {
        types: ['Ghost', 'Steel'],
        bs: { hp: 80, at: 103, df: 85, sa: 55, sd: 80, sp: 110 },
        weightkg: 51,
        abilities: { 0: 'Frisk' }
    },
    Kricketot: {
        types: ['Bug'],
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        weightkg: 2.2,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Kricketune: {
        types: ['Bug'],
        bs: { hp: 77, at: 85, df: 51, sa: 55, sd: 51, sp: 65 },
        weightkg: 25.5,
        abilities: { 0: 'Swarm' }
    },
    Krilowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 151, at: 84, df: 73, sa: 83, sd: 74, sp: 105 },
        weightkg: 10.6,
        abilities: { 0: 'Trace' }
    },
    Leafeon: {
        types: ['Grass'],
        bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
        weightkg: 25.5,
        abilities: { 0: 'Leaf Guard' }
    },
    Lickilicky: {
        types: ['Normal'],
        bs: { hp: 110, at: 85, df: 95, sa: 80, sd: 95, sp: 50 },
        weightkg: 140,
        abilities: { 0: 'Own Tempo' }
    },
    Lopunny: {
        types: ['Normal'],
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        weightkg: 33.3,
        abilities: { 0: 'Cute Charm' }
    },
    Lucario: {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        weightkg: 54,
        abilities: { 0: 'Steadfast' }
    },
    Lumineon: {
        types: ['Water'],
        bs: { hp: 69, at: 69, df: 76, sa: 69, sd: 86, sp: 91 },
        weightkg: 24,
        abilities: { 0: 'Swift Swim' }
    },
    Luxio: {
        types: ['Electric'],
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        weightkg: 30.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Luxray: {
        types: ['Electric'],
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        weightkg: 42,
        abilities: { 0: 'Rivalry' }
    },
    Magmortar: {
        types: ['Fire'],
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        weightkg: 68,
        abilities: { 0: 'Flame Body' }
    },
    Magnezone: {
        types: ['Electric', 'Steel'],
        bs: { hp: 70, at: 70, df: 115, sa: 130, sd: 90, sp: 60 },
        weightkg: 180,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    Mamoswine: {
        types: ['Ice', 'Ground'],
        bs: { hp: 110, at: 130, df: 80, sa: 70, sd: 60, sp: 80 },
        weightkg: 291,
        abilities: { 0: 'Oblivious' }
    },
    Manaphy: {
        types: ['Water'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 1.4,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    Mantyke: {
        types: ['Water', 'Flying'],
        bs: { hp: 45, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        weightkg: 65,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Mesprit: {
        types: ['Psychic'],
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    'Mime Jr.': {
        types: ['Psychic'],
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Soundproof' }
    },
    Mismagius: {
        types: ['Ghost'],
        bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
        weightkg: 4.4,
        abilities: { 0: 'Levitate' }
    },
    Monferno: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        weightkg: 22,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Monohm: {
        types: ['Electric'],
        bs: { hp: 53, at: 40, df: 58, sa: 67, sd: 55, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Mothim: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 94, df: 50, sa: 94, sd: 50, sp: 66 },
        weightkg: 23.3,
        abilities: { 0: 'Swarm' }
    },
    Munchlax: {
        types: ['Normal'],
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        weightkg: 105,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Nohface: {
        types: ['Ghost'],
        bs: { hp: 50, at: 73, df: 50, sa: 30, sd: 50, sp: 80 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Pachirisu: {
        types: ['Electric'],
        bs: { hp: 60, at: 45, df: 70, sa: 45, sd: 90, sp: 95 },
        weightkg: 3.9,
        abilities: { 0: 'Run Away' }
    },
    Palkia: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 120, df: 100, sa: 150, sd: 120, sp: 100 },
        weightkg: 336,
        gender: 'N',
        abilities: { 0: 'Pressure' }
    },
    Phione: {
        types: ['Water'],
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 3.1,
        abilities: { 0: 'Hydration' },
        gender: 'N'
    },
    'Pichu-Spiky-eared': {
        types: ['Electric'],
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        weightkg: 2,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pichu'
    },
    Piplup: {
        types: ['Water'],
        bs: { hp: 53, at: 51, df: 53, sa: 61, sd: 56, sp: 40 },
        weightkg: 5.2,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Porygon-Z': {
        types: ['Normal'],
        bs: { hp: 85, at: 80, df: 70, sa: 135, sd: 75, sp: 90 },
        weightkg: 34,
        gender: 'N',
        abilities: { 0: 'Adaptability' }
    },
    Prinplup: {
        types: ['Water'],
        bs: { hp: 64, at: 66, df: 68, sa: 81, sd: 76, sp: 50 },
        weightkg: 23,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Privatyke: {
        types: ['Water', 'Fighting'],
        bs: { hp: 65, at: 75, df: 65, sa: 40, sd: 60, sp: 45 },
        weightkg: 35,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Probopass: {
        types: ['Rock', 'Steel'],
        bs: { hp: 60, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        weightkg: 340,
        abilities: { 0: 'Sturdy' }
    },
    Protowatt: {
        types: ['Electric', 'Water'],
        bs: { hp: 51, at: 44, df: 33, sa: 43, sd: 34, sp: 65 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Purugly: {
        types: ['Normal'],
        bs: { hp: 71, at: 82, df: 64, sa: 64, sd: 59, sp: 112 },
        weightkg: 43.8,
        abilities: { 0: 'Thick Fat' }
    },
    Pyroak: {
        types: ['Fire', 'Grass'],
        bs: { hp: 120, at: 70, df: 105, sa: 95, sd: 90, sp: 60 },
        weightkg: 168,
        abilities: { 0: 'Rock Head' }
    },
    Rampardos: {
        types: ['Rock'],
        bs: { hp: 97, at: 165, df: 60, sa: 65, sd: 50, sp: 58 },
        weightkg: 102.5,
        abilities: { 0: 'Mold Breaker' }
    },
    Rebble: {
        types: ['Rock'],
        bs: { hp: 45, at: 25, df: 65, sa: 75, sd: 55, sp: 80 },
        weightkg: 7,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Regigigas: {
        types: ['Normal'],
        bs: { hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100 },
        weightkg: 420,
        abilities: { 0: 'Slow Start' },
        gender: 'N'
    },
    Revenankh: {
        types: ['Ghost', 'Fighting'],
        bs: { hp: 90, at: 105, df: 90, sa: 65, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Shed Skin' }
    },
    Rhyperior: {
        types: ['Ground', 'Rock'],
        bs: { hp: 115, at: 140, df: 130, sa: 55, sd: 55, sp: 40 },
        weightkg: 282.8,
        abilities: { 0: 'Lightning Rod' }
    },
    Riolu: {
        types: ['Fighting'],
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        weightkg: 20.2,
        nfe: true,
        abilities: { 0: 'Steadfast' }
    },
    Roserade: {
        types: ['Grass', 'Poison'],
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        weightkg: 14.5,
        abilities: { 0: 'Natural Cure' }
    },
    Rotom: {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 77, sp: 91 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        otherFormes: ['Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash']
    },
    'Rotom-Mow': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Frost': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Heat': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Fan': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    'Rotom-Wash': {
        types: ['Electric', 'Ghost'],
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N',
        baseSpecies: 'Rotom'
    },
    Shaymin: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 2.1,
        abilities: { 0: 'Natural Cure' },
        gender: 'N',
        otherFormes: ['Shaymin-Sky']
    },
    'Shaymin-Sky': {
        types: ['Grass', 'Flying'],
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        weightkg: 5.2,
        abilities: { 0: 'Serene Grace' },
        gender: 'N',
        baseSpecies: 'Shaymin'
    },
    Shellos: {
        types: ['Water'],
        bs: { hp: 76, at: 48, df: 48, sa: 57, sd: 62, sp: 34 },
        weightkg: 6.3,
        nfe: true,
        abilities: { 0: 'Sticky Hold' }
    },
    Shieldon: {
        types: ['Rock', 'Steel'],
        bs: { hp: 30, at: 42, df: 118, sa: 42, sd: 88, sp: 30 },
        weightkg: 57,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Shinx: {
        types: ['Electric'],
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        weightkg: 9.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Skorupi: {
        types: ['Poison', 'Bug'],
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Battle Armor' }
    },
    Skuntank: {
        types: ['Poison', 'Dark'],
        bs: { hp: 103, at: 93, df: 67, sa: 71, sd: 61, sp: 84 },
        weightkg: 38,
        abilities: { 0: 'Stench' }
    },
    Snover: {
        types: ['Grass', 'Ice'],
        bs: { hp: 60, at: 62, df: 50, sa: 62, sd: 60, sp: 40 },
        weightkg: 50.5,
        nfe: true,
        abilities: { 0: 'Snow Warning' }
    },
    Spiritomb: {
        types: ['Ghost', 'Dark'],
        bs: { hp: 50, at: 92, df: 108, sa: 92, sd: 108, sp: 35 },
        weightkg: 108,
        abilities: { 0: 'Pressure' }
    },
    Staraptor: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 120, df: 70, sa: 50, sd: 50, sp: 100 },
        weightkg: 24.9,
        abilities: { 0: 'Intimidate' }
    },
    Staravia: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 75, df: 50, sa: 40, sd: 40, sp: 80 },
        weightkg: 15.5,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Starly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 60 },
        weightkg: 2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Stratagem: {
        types: ['Rock'],
        bs: { hp: 90, at: 60, df: 65, sa: 120, sd: 70, sp: 130 },
        weightkg: 45,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Stunky: {
        types: ['Poison', 'Dark'],
        bs: { hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74 },
        weightkg: 19.2,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Syclant: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 116, df: 70, sa: 114, sd: 64, sp: 121 },
        weightkg: 52,
        abilities: { 0: 'Compound Eyes' }
    },
    Syclar: {
        types: ['Ice', 'Bug'],
        bs: { hp: 40, at: 76, df: 45, sa: 74, sd: 39, sp: 91 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Tactite: {
        types: ['Rock'],
        bs: { hp: 70, at: 40, df: 65, sa: 100, sd: 65, sp: 95 },
        weightkg: 16,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    Tangrowth: {
        types: ['Grass'],
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        weightkg: 128.6,
        abilities: { 0: 'Chlorophyll' }
    },
    Togekiss: {
        types: ['Normal', 'Flying'],
        bs: { hp: 85, at: 50, df: 95, sa: 120, sd: 115, sp: 80 },
        weightkg: 38,
        abilities: { 0: 'Hustle' }
    },
    Torterra: {
        types: ['Grass', 'Ground'],
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        weightkg: 310,
        abilities: { 0: 'Overgrow' }
    },
    Toxicroak: {
        types: ['Poison', 'Fighting'],
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        weightkg: 44.4,
        abilities: { 0: 'Anticipation' }
    },
    Turtwig: {
        types: ['Grass'],
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Uxie: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Vespiquen: {
        types: ['Bug', 'Flying'],
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        weightkg: 38.5,
        abilities: { 0: 'Pressure' }
    },
    Voodoll: {
        types: ['Normal', 'Dark'],
        bs: { hp: 55, at: 40, df: 55, sa: 75, sd: 50, sp: 70 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Volt Absorb' }
    },
    Voodoom: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 90, at: 85, df: 80, sa: 105, sd: 80, sp: 110 },
        weightkg: 75.5,
        abilities: { 0: 'Volt Absorb' }
    },
    Weavile: {
        types: ['Dark', 'Ice'],
        bs: { hp: 70, at: 120, df: 65, sa: 45, sd: 85, sp: 125 },
        weightkg: 34,
        abilities: { 0: 'Pressure' }
    },
    Wormadam: {
        types: ['Bug', 'Grass'],
        bs: { hp: 60, at: 59, df: 85, sa: 79, sd: 105, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        otherFormes: ['Wormadam-Sandy', 'Wormadam-Trash']
    },
    'Wormadam-Sandy': {
        types: ['Bug', 'Ground'],
        bs: { hp: 60, at: 79, df: 105, sa: 59, sd: 85, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    'Wormadam-Trash': {
        types: ['Bug', 'Steel'],
        bs: { hp: 60, at: 69, df: 95, sa: 69, sd: 95, sp: 36 },
        weightkg: 6.5,
        abilities: { 0: 'Anticipation' },
        baseSpecies: 'Wormadam'
    },
    Yanmega: {
        types: ['Bug', 'Flying'],
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
        weightkg: 51.5,
        abilities: { 0: 'Speed Boost' }
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Rotom-Fan': { types: ['Electric', 'Flying'] },
    'Rotom-Frost': { types: ['Electric', 'Ice'] },
    'Rotom-Heat': { types: ['Electric', 'Fire'] },
    'Rotom-Mow': { types: ['Electric', 'Grass'] },
    'Rotom-Wash': { types: ['Electric', 'Water'] },
    Accelgor: {
        types: ['Bug'],
        bs: { hp: 80, at: 70, df: 40, sa: 100, sd: 60, sp: 145 },
        weightkg: 25.3,
        abilities: { 0: 'Hydration' }
    },
    Alomomola: {
        types: ['Water'],
        bs: { hp: 165, at: 75, df: 80, sa: 40, sd: 45, sp: 65 },
        weightkg: 31.6,
        abilities: { 0: 'Healer' }
    },
    Amoonguss: {
        types: ['Grass', 'Poison'],
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        weightkg: 10.5,
        abilities: { 0: 'Effect Spore' }
    },
    Archen: {
        types: ['Rock', 'Flying'],
        bs: { hp: 55, at: 112, df: 45, sa: 74, sd: 45, sp: 70 },
        weightkg: 9.5,
        abilities: { 0: 'Defeatist' },
        nfe: true
    },
    Archeops: {
        types: ['Rock', 'Flying'],
        bs: { hp: 75, at: 140, df: 65, sa: 112, sd: 65, sp: 110 },
        weightkg: 32,
        abilities: { 0: 'Defeatist' }
    },
    Argalis: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 90, df: 89, sa: 87, sd: 40, sp: 54 },
        weightkg: 341.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Audino: {
        types: ['Normal'],
        bs: { hp: 103, at: 60, df: 86, sa: 60, sd: 86, sp: 50 },
        weightkg: 31,
        abilities: { 0: 'Healer' }
    },
    Aurumoth: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 110, at: 120, df: 99, sa: 117, sd: 60, sp: 94 },
        weightkg: 193,
        abilities: { 0: 'Weak Armor' }
    },
    Axew: {
        types: ['Dragon'],
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Basculin: {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Reckless' },
        otherFormes: ['Basculin-Blue-Striped']
    },
    'Basculin-Blue-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Basculin'
    },
    Beartic: {
        types: ['Ice'],
        bs: { hp: 95, at: 110, df: 80, sa: 70, sd: 80, sp: 50 },
        weightkg: 260,
        abilities: { 0: 'Snow Cloak' }
    },
    Beheeyem: {
        types: ['Psychic'],
        bs: { hp: 75, at: 75, df: 75, sa: 125, sd: 95, sp: 40 },
        weightkg: 34.5,
        abilities: { 0: 'Telepathy' }
    },
    Bisharp: {
        types: ['Dark', 'Steel'],
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        weightkg: 70,
        abilities: { 0: 'Defiant' }
    },
    Blitzle: {
        types: ['Electric'],
        bs: { hp: 45, at: 60, df: 32, sa: 50, sd: 32, sp: 76 },
        weightkg: 29.8,
        nfe: true,
        abilities: { 0: 'Lightning Rod' }
    },
    Boldore: {
        types: ['Rock'],
        bs: { hp: 70, at: 105, df: 105, sa: 50, sd: 40, sp: 20 },
        weightkg: 102,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Bouffalant: {
        types: ['Normal'],
        bs: { hp: 95, at: 110, df: 95, sa: 40, sd: 95, sp: 55 },
        weightkg: 94.6,
        abilities: { 0: 'Reckless' }
    },
    Brattler: {
        types: ['Dark', 'Grass'],
        bs: { hp: 80, at: 70, df: 40, sa: 20, sd: 90, sp: 30 },
        weightkg: 11.5,
        nfe: true,
        abilities: { 0: 'Harvest' }
    },
    Braviary: {
        types: ['Normal', 'Flying'],
        bs: { hp: 100, at: 123, df: 75, sa: 57, sd: 75, sp: 80 },
        weightkg: 41,
        abilities: { 0: 'Keen Eye' }
    },
    Carracosta: {
        types: ['Water', 'Rock'],
        bs: { hp: 74, at: 108, df: 133, sa: 83, sd: 65, sp: 32 },
        weightkg: 81,
        abilities: { 0: 'Solid Rock' }
    },
    Cawdet: {
        types: ['Steel', 'Flying'],
        bs: { hp: 35, at: 72, df: 85, sa: 40, sd: 55, sp: 88 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Cawmodore: {
        types: ['Steel', 'Flying'],
        bs: { hp: 50, at: 92, df: 130, sa: 65, sd: 75, sp: 118 },
        weightkg: 37,
        abilities: { 0: 'Intimidate' }
    },
    Chandelure: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        weightkg: 34.3,
        abilities: { 0: 'Flash Fire' }
    },
    Cinccino: {
        types: ['Normal'],
        bs: { hp: 75, at: 95, df: 60, sa: 65, sd: 60, sp: 115 },
        weightkg: 7.5,
        abilities: { 0: 'Cute Charm' }
    },
    Cobalion: {
        types: ['Steel', 'Fighting'],
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        weightkg: 250,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Cofagrigus: {
        types: ['Ghost'],
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        weightkg: 76.5,
        abilities: { 0: 'Mummy' }
    },
    Conkeldurr: {
        types: ['Fighting'],
        bs: { hp: 105, at: 140, df: 95, sa: 55, sd: 65, sp: 45 },
        weightkg: 87,
        abilities: { 0: 'Guts' }
    },
    Cottonee: {
        types: ['Grass'],
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Prankster' }
    },
    Crustle: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        weightkg: 200,
        abilities: { 0: 'Sturdy' }
    },
    Cryogonal: {
        types: ['Ice'],
        bs: { hp: 70, at: 50, df: 30, sa: 95, sd: 135, sp: 105 },
        weightkg: 148,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Cubchoo: {
        types: ['Ice'],
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Cupra: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 60, df: 49, sa: 67, sd: 30, sp: 44 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Darmanitan: {
        types: ['Fire'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 92.9,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Darmanitan-Zen']
    },
    'Darmanitan-Zen': {
        types: ['Fire', 'Psychic'],
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 },
        weightkg: 92.9,
        baseSpecies: 'Darmanitan',
        abilities: { 0: 'Zen Mode' }
    },
    Darumaka: {
        types: ['Fire'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 37.5,
        nfe: true,
        abilities: { 0: 'Hustle' }
    },
    Deerling: {
        types: ['Normal', 'Grass'],
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 19.5,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Deino: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        weightkg: 17.3,
        abilities: { 0: 'Hustle' },
        nfe: true
    },
    Dewott: {
        types: ['Water'],
        bs: { hp: 75, at: 75, df: 60, sa: 83, sd: 60, sp: 60 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Drilbur: {
        types: ['Ground'],
        bs: { hp: 60, at: 85, df: 40, sa: 30, sd: 45, sp: 68 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Sand Rush' }
    },
    Druddigon: {
        types: ['Dragon'],
        bs: { hp: 77, at: 120, df: 90, sa: 60, sd: 90, sp: 48 },
        weightkg: 139,
        abilities: { 0: 'Rough Skin' }
    },
    Ducklett: {
        types: ['Water', 'Flying'],
        bs: { hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55 },
        weightkg: 5.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Duosion: {
        types: ['Psychic'],
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Durant: {
        types: ['Bug', 'Steel'],
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 109 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Dwebble: {
        types: ['Bug', 'Rock'],
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Eelektrik: {
        types: ['Electric'],
        bs: { hp: 65, at: 85, df: 70, sa: 75, sd: 70, sp: 40 },
        weightkg: 22,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Eelektross: {
        types: ['Electric'],
        bs: { hp: 85, at: 115, df: 80, sa: 105, sd: 80, sp: 50 },
        weightkg: 80.5,
        abilities: { 0: 'Levitate' }
    },
    Elgyem: {
        types: ['Psychic'],
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Telepathy' }
    },
    Emboar: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 110, at: 123, df: 65, sa: 100, sd: 65, sp: 65 },
        weightkg: 150,
        abilities: { 0: 'Blaze' }
    },
    Emolga: {
        types: ['Electric', 'Flying'],
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        weightkg: 5,
        abilities: { 0: 'Static' }
    },
    Escavalier: {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        weightkg: 33,
        abilities: { 0: 'Swarm' }
    },
    Excadrill: {
        types: ['Ground', 'Steel'],
        bs: { hp: 110, at: 135, df: 60, sa: 50, sd: 65, sp: 88 },
        weightkg: 40.4,
        abilities: { 0: 'Sand Rush' }
    },
    Ferroseed: {
        types: ['Grass', 'Steel'],
        bs: { hp: 44, at: 50, df: 91, sa: 24, sd: 86, sp: 10 },
        weightkg: 18.8,
        nfe: true,
        abilities: { 0: 'Iron Barbs' }
    },
    Ferrothorn: {
        types: ['Grass', 'Steel'],
        bs: { hp: 74, at: 94, df: 131, sa: 54, sd: 116, sp: 20 },
        weightkg: 110,
        abilities: { 0: 'Iron Barbs' }
    },
    Foongus: {
        types: ['Grass', 'Poison'],
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Effect Spore' }
    },
    Fraxure: {
        types: ['Dragon'],
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Frillish: {
        types: ['Water', 'Ghost'],
        bs: { hp: 55, at: 40, df: 50, sa: 65, sd: 85, sp: 40 },
        weightkg: 33,
        nfe: true,
        abilities: { 0: 'Water Absorb' }
    },
    Galvantula: {
        types: ['Bug', 'Electric'],
        bs: { hp: 70, at: 77, df: 60, sa: 97, sd: 60, sp: 108 },
        weightkg: 14.3,
        abilities: { 0: 'Compound Eyes' }
    },
    Garbodor: {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 107.3,
        abilities: { 0: 'Stench' }
    },
    Genesect: {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        otherFormes: ['Genesect-Burn', 'Genesect-Chill', 'Genesect-Douse', 'Genesect-Shock']
    },
    'Genesect-Burn': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Chill': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Douse': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    'Genesect-Shock': {
        types: ['Bug', 'Steel'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        weightkg: 82.5,
        abilities: { 0: 'Download' },
        gender: 'N',
        baseSpecies: 'Genesect'
    },
    Gigalith: {
        types: ['Rock'],
        bs: { hp: 85, at: 135, df: 130, sa: 60, sd: 70, sp: 25 },
        weightkg: 260,
        abilities: { 0: 'Sturdy' }
    },
    Golett: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        weightkg: 92,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Golurk: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        weightkg: 330,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Gothita: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gothitelle: {
        types: ['Psychic'],
        bs: { hp: 70, at: 55, df: 95, sa: 95, sd: 110, sp: 65 },
        weightkg: 44,
        abilities: { 0: 'Frisk' }
    },
    Gothorita: {
        types: ['Psychic'],
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Gurdurr: {
        types: ['Fighting'],
        bs: { hp: 85, at: 105, df: 85, sa: 40, sd: 50, sp: 40 },
        weightkg: 40,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Haxorus: {
        types: ['Dragon'],
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        weightkg: 105.5,
        abilities: { 0: 'Rivalry' }
    },
    Heatmor: {
        types: ['Fire'],
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        weightkg: 58,
        abilities: { 0: 'Gluttony' }
    },
    Herdier: {
        types: ['Normal'],
        bs: { hp: 65, at: 80, df: 65, sa: 35, sd: 65, sp: 60 },
        weightkg: 14.7,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Hydreigon: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        weightkg: 160,
        abilities: { 0: 'Levitate' }
    },
    Jellicent: {
        types: ['Water', 'Ghost'],
        bs: { hp: 100, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        weightkg: 135,
        abilities: { 0: 'Water Absorb' }
    },
    Joltik: {
        types: ['Bug', 'Electric'],
        bs: { hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65 },
        weightkg: 0.6,
        nfe: true,
        abilities: { 0: 'Compound Eyes' }
    },
    Karrablast: {
        types: ['Bug'],
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Keldeo: {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        otherFormes: ['Keldeo-Resolute']
    },
    'Keldeo-Resolute': {
        types: ['Water', 'Fighting'],
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        weightkg: 48.5,
        abilities: { 0: 'Justified' },
        gender: 'N',
        baseSpecies: 'Keldeo'
    },
    Klang: {
        types: ['Steel'],
        bs: { hp: 60, at: 80, df: 95, sa: 70, sd: 85, sp: 50 },
        weightkg: 51,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klink: {
        types: ['Steel'],
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        weightkg: 21,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Klinklang: {
        types: ['Steel'],
        bs: { hp: 60, at: 100, df: 115, sa: 70, sd: 85, sp: 90 },
        weightkg: 81,
        gender: 'N',
        abilities: { 0: 'Plus' }
    },
    Krokorok: {
        types: ['Ground', 'Dark'],
        bs: { hp: 60, at: 82, df: 45, sa: 45, sd: 45, sp: 74 },
        weightkg: 33.4,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Krookodile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 95, at: 117, df: 70, sa: 65, sd: 70, sp: 92 },
        weightkg: 96.3,
        abilities: { 0: 'Intimidate' }
    },
    Kyurem: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Kyurem-Black', 'Kyurem-White']
    },
    'Kyurem-Black': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 170, df: 100, sa: 120, sd: 90, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Teravolt' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    'Kyurem-White': {
        types: ['Dragon', 'Ice'],
        bs: { hp: 125, at: 120, df: 90, sa: 170, sd: 100, sp: 95 },
        weightkg: 325,
        abilities: { 0: 'Turboblaze' },
        gender: 'N',
        baseSpecies: 'Kyurem'
    },
    Lampent: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        weightkg: 13,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Landorus: {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        weightkg: 68,
        abilities: { 0: 'Sand Force' },
        otherFormes: ['Landorus-Therian']
    },
    'Landorus-Therian': {
        types: ['Ground', 'Flying'],
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        weightkg: 68,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Landorus'
    },
    Larvesta: {
        types: ['Bug', 'Fire'],
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        weightkg: 28.8,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Leavanny: {
        types: ['Bug', 'Grass'],
        bs: { hp: 75, at: 103, df: 80, sa: 70, sd: 70, sp: 92 },
        weightkg: 20.5,
        abilities: { 0: 'Swarm' }
    },
    Liepard: {
        types: ['Dark'],
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        weightkg: 37.5,
        abilities: { 0: 'Limber' }
    },
    Lilligant: {
        types: ['Grass'],
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        weightkg: 16.3,
        abilities: { 0: 'Chlorophyll' }
    },
    Lillipup: {
        types: ['Normal'],
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        weightkg: 4.1,
        nfe: true,
        abilities: { 0: 'Vital Spirit' }
    },
    Litwick: {
        types: ['Ghost', 'Fire'],
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        weightkg: 3.1,
        nfe: true,
        abilities: { 0: 'Flash Fire' }
    },
    Malaconda: {
        types: ['Dark', 'Grass'],
        bs: { hp: 115, at: 100, df: 60, sa: 40, sd: 130, sp: 55 },
        weightkg: 108.8,
        abilities: { 0: 'Harvest' }
    },
    Mandibuzz: {
        types: ['Dark', 'Flying'],
        bs: { hp: 110, at: 65, df: 105, sa: 55, sd: 95, sp: 80 },
        weightkg: 39.5,
        abilities: { 0: 'Big Pecks' }
    },
    Maractus: {
        types: ['Grass'],
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        weightkg: 28,
        abilities: { 0: 'Water Absorb' }
    },
    Meloetta: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Meloetta-Pirouette'],
        gender: 'N'
    },
    'Meloetta-Pirouette': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        weightkg: 6.5,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Meloetta',
        gender: 'N'
    },
    Mienfoo: {
        types: ['Fighting'],
        bs: { hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    Mienshao: {
        types: ['Fighting'],
        bs: { hp: 65, at: 125, df: 60, sa: 95, sd: 60, sp: 105 },
        weightkg: 35.5,
        abilities: { 0: 'Inner Focus' }
    },
    Minccino: {
        types: ['Normal'],
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        weightkg: 5.8,
        nfe: true,
        abilities: { 0: 'Cute Charm' }
    },
    Mollux: {
        types: ['Fire', 'Poison'],
        bs: { hp: 95, at: 45, df: 83, sa: 131, sd: 105, sp: 76 },
        weightkg: 41,
        abilities: { 0: 'Dry Skin' }
    },
    Munna: {
        types: ['Psychic'],
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24 },
        weightkg: 23.3,
        nfe: true,
        abilities: { 0: 'Forewarn' }
    },
    Musharna: {
        types: ['Psychic'],
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 95, sp: 29 },
        weightkg: 60.5,
        abilities: { 0: 'Forewarn' }
    },
    Necturine: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 49, at: 55, df: 60, sa: 50, sd: 75, sp: 51 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Necturna: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 64, at: 120, df: 100, sa: 85, sd: 120, sp: 81 },
        weightkg: 49.6,
        abilities: { 0: 'Forewarn' }
    },
    Oshawott: {
        types: ['Water'],
        bs: { hp: 55, at: 55, df: 45, sa: 63, sd: 45, sp: 45 },
        weightkg: 5.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Palpitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 75, at: 65, df: 55, sa: 65, sd: 55, sp: 69 },
        weightkg: 17,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Panpour: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansage: {
        types: ['Grass'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Pansear: {
        types: ['Fire'],
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        weightkg: 11,
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Patrat: {
        types: ['Normal'],
        bs: { hp: 45, at: 55, df: 39, sa: 35, sd: 39, sp: 42 },
        weightkg: 11.6,
        nfe: true,
        abilities: { 0: 'Run Away' }
    },
    Pawniard: {
        types: ['Dark', 'Steel'],
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        weightkg: 10.2,
        nfe: true,
        abilities: { 0: 'Defiant' }
    },
    Petilil: {
        types: ['Grass'],
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        weightkg: 6.6,
        nfe: true,
        abilities: { 0: 'Chlorophyll' }
    },
    Pidove: {
        types: ['Normal', 'Flying'],
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Pignite: {
        types: ['Fire', 'Fighting'],
        bs: { hp: 90, at: 93, df: 55, sa: 70, sd: 55, sp: 55 },
        weightkg: 55.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Purrloin: {
        types: ['Dark'],
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        weightkg: 10.1,
        nfe: true,
        abilities: { 0: 'Limber' }
    },
    Reshiram: {
        types: ['Dragon', 'Fire'],
        bs: { hp: 100, at: 120, df: 100, sa: 150, sd: 120, sp: 90 },
        weightkg: 330,
        abilities: { 0: 'Turboblaze' },
        gender: 'N'
    },
    Reuniclus: {
        types: ['Psychic'],
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        weightkg: 20.1,
        abilities: { 0: 'Overcoat' }
    },
    Roggenrola: {
        types: ['Rock'],
        bs: { hp: 55, at: 75, df: 85, sa: 25, sd: 25, sp: 15 },
        weightkg: 18,
        nfe: true,
        abilities: { 0: 'Sturdy' }
    },
    Rufflet: {
        types: ['Normal', 'Flying'],
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Samurott: {
        types: ['Water'],
        bs: { hp: 95, at: 100, df: 85, sa: 108, sd: 70, sp: 70 },
        weightkg: 94.6,
        abilities: { 0: 'Torrent' }
    },
    Sandile: {
        types: ['Ground', 'Dark'],
        bs: { hp: 50, at: 72, df: 35, sa: 35, sd: 35, sp: 65 },
        weightkg: 15.2,
        nfe: true,
        abilities: { 0: 'Intimidate' }
    },
    Sawk: {
        types: ['Fighting'],
        bs: { hp: 75, at: 125, df: 75, sa: 30, sd: 75, sp: 85 },
        weightkg: 51,
        abilities: { 0: 'Sturdy' }
    },
    Sawsbuck: {
        types: ['Normal', 'Grass'],
        bs: { hp: 80, at: 100, df: 70, sa: 60, sd: 70, sp: 95 },
        weightkg: 92.5,
        abilities: { 0: 'Chlorophyll' }
    },
    Scolipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        weightkg: 200.5,
        abilities: { 0: 'Poison Point' }
    },
    Scrafty: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        weightkg: 30,
        abilities: { 0: 'Shed Skin' }
    },
    Scraggy: {
        types: ['Dark', 'Fighting'],
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Scratchet: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 55, at: 85, df: 80, sa: 20, sd: 70, sp: 40 },
        weightkg: 20,
        nfe: true,
        abilities: { 0: 'Scrappy' }
    },
    Seismitoad: {
        types: ['Water', 'Ground'],
        bs: { hp: 105, at: 85, df: 75, sa: 85, sd: 75, sp: 74 },
        weightkg: 62,
        abilities: { 0: 'Swift Swim' }
    },
    Serperior: {
        types: ['Grass'],
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        weightkg: 63,
        abilities: { 0: 'Overgrow' }
    },
    Servine: {
        types: ['Grass'],
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Sewaddle: {
        types: ['Bug', 'Grass'],
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Shelmet: {
        types: ['Bug'],
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        weightkg: 7.7,
        nfe: true,
        abilities: { 0: 'Hydration' }
    },
    Sigilyph: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 72, at: 58, df: 80, sa: 103, sd: 80, sp: 97 },
        weightkg: 14,
        abilities: { 0: 'Wonder Skin' }
    },
    Simipour: {
        types: ['Water'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 29,
        abilities: { 0: 'Gluttony' }
    },
    Simisage: {
        types: ['Grass'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 30.5,
        abilities: { 0: 'Gluttony' }
    },
    Simisear: {
        types: ['Fire'],
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        weightkg: 28,
        abilities: { 0: 'Gluttony' }
    },
    Snivy: {
        types: ['Grass'],
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        weightkg: 8.1,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Solosis: {
        types: ['Psychic'],
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        weightkg: 1,
        nfe: true,
        abilities: { 0: 'Overcoat' }
    },
    Stoutland: {
        types: ['Normal'],
        bs: { hp: 85, at: 100, df: 90, sa: 45, sd: 90, sp: 80 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Stunfisk: {
        types: ['Ground', 'Electric'],
        bs: { hp: 109, at: 66, df: 84, sa: 81, sd: 99, sp: 32 },
        weightkg: 11,
        abilities: { 0: 'Static' }
    },
    Swadloon: {
        types: ['Bug', 'Grass'],
        bs: { hp: 55, at: 63, df: 90, sa: 50, sd: 80, sp: 42 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Swanna: {
        types: ['Water', 'Flying'],
        bs: { hp: 75, at: 87, df: 63, sa: 87, sd: 63, sp: 98 },
        weightkg: 24.2,
        abilities: { 0: 'Keen Eye' }
    },
    Swoobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 67, at: 57, df: 55, sa: 77, sd: 55, sp: 114 },
        weightkg: 10.5,
        abilities: { 0: 'Unaware' }
    },
    Tepig: {
        types: ['Fire'],
        bs: { hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45 },
        weightkg: 9.9,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Terrakion: {
        types: ['Rock', 'Fighting'],
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        weightkg: 260,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Throh: {
        types: ['Fighting'],
        bs: { hp: 120, at: 100, df: 85, sa: 30, sd: 85, sp: 45 },
        weightkg: 55.5,
        abilities: { 0: 'Guts' }
    },
    Thundurus: {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Thundurus-Therian']
    },
    'Thundurus-Therian': {
        types: ['Electric', 'Flying'],
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        weightkg: 61,
        abilities: { 0: 'Volt Absorb' },
        baseSpecies: 'Thundurus'
    },
    Timburr: {
        types: ['Fighting'],
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35 },
        weightkg: 12.5,
        nfe: true,
        abilities: { 0: 'Guts' }
    },
    Tirtouga: {
        types: ['Water', 'Rock'],
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        weightkg: 16.5,
        nfe: true,
        abilities: { 0: 'Solid Rock' }
    },
    Tomohawk: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 105, at: 60, df: 90, sa: 115, sd: 80, sp: 85 },
        weightkg: 37.2,
        abilities: { 0: 'Intimidate' }
    },
    Tornadus: {
        types: ['Flying'],
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        weightkg: 63,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Tornadus-Therian']
    },
    'Tornadus-Therian': {
        types: ['Flying'],
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Regenerator' },
        baseSpecies: 'Tornadus'
    },
    Tranquill: {
        types: ['Normal', 'Flying'],
        bs: { hp: 62, at: 77, df: 62, sa: 50, sd: 42, sp: 65 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Trubbish: {
        types: ['Poison'],
        bs: { hp: 50, at: 50, df: 62, sa: 40, sd: 62, sp: 65 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Stench' }
    },
    Tympole: {
        types: ['Water'],
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        weightkg: 4.5,
        nfe: true,
        abilities: { 0: 'Swift Swim' }
    },
    Tynamo: {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 45, sd: 40, sp: 60 },
        weightkg: 0.3,
        abilities: { 0: 'Levitate' },
        nfe: true
    },
    Unfezant: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 105, df: 80, sa: 65, sd: 55, sp: 93 },
        weightkg: 29,
        abilities: { 0: 'Big Pecks' }
    },
    Vanillish: {
        types: ['Ice'],
        bs: { hp: 51, at: 65, df: 65, sa: 80, sd: 75, sp: 59 },
        weightkg: 41,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanillite: {
        types: ['Ice'],
        bs: { hp: 36, at: 50, df: 50, sa: 65, sd: 60, sp: 44 },
        weightkg: 5.7,
        nfe: true,
        abilities: { 0: 'Ice Body' }
    },
    Vanilluxe: {
        types: ['Ice'],
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 79 },
        weightkg: 57.5,
        abilities: { 0: 'Ice Body' }
    },
    Venipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        weightkg: 5.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Victini: {
        types: ['Psychic', 'Fire'],
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        weightkg: 4,
        abilities: { 0: 'Victory Star' },
        gender: 'N'
    },
    Virizion: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        weightkg: 200,
        abilities: { 0: 'Justified' },
        gender: 'N'
    },
    Volcarona: {
        types: ['Bug', 'Fire'],
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        weightkg: 46,
        abilities: { 0: 'Flame Body' }
    },
    Vullaby: {
        types: ['Dark', 'Flying'],
        bs: { hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Watchog: {
        types: ['Normal'],
        bs: { hp: 60, at: 85, df: 69, sa: 60, sd: 69, sp: 77 },
        weightkg: 27,
        abilities: { 0: 'Illuminate' }
    },
    Whimsicott: {
        types: ['Grass'],
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 116 },
        weightkg: 6.6,
        abilities: { 0: 'Prankster' }
    },
    Whirlipede: {
        types: ['Bug', 'Poison'],
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        weightkg: 58.5,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Woobat: {
        types: ['Psychic', 'Flying'],
        bs: { hp: 55, at: 45, df: 43, sa: 55, sd: 43, sp: 72 },
        weightkg: 2.1,
        nfe: true,
        abilities: { 0: 'Unaware' }
    },
    Yamask: {
        types: ['Ghost'],
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Mummy' },
        nfe: true
    },
    Zebstrika: {
        types: ['Electric'],
        bs: { hp: 75, at: 100, df: 63, sa: 80, sd: 63, sp: 116 },
        weightkg: 79.5,
        abilities: { 0: 'Lightning Rod' }
    },
    Zekrom: {
        types: ['Dragon', 'Electric'],
        bs: { hp: 100, at: 150, df: 120, sa: 120, sd: 100, sp: 90 },
        weightkg: 345,
        abilities: { 0: 'Teravolt' },
        gender: 'N'
    },
    Zoroark: {
        types: ['Dark'],
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        weightkg: 81.1,
        abilities: { 0: 'Illusion' }
    },
    Zorua: {
        types: ['Dark'],
        bs: { hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        nfe: true
    },
    Zweilous: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        weightkg: 50,
        abilities: { 0: 'Hustle' },
        nfe: true
    }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Pichu'].otherFormes;
delete BW['Pichu-Spiky-eared'];
var XY_PATCH = {
    Abomasnow: { otherFormes: ['Abomasnow-Mega'] },
    Absol: { otherFormes: ['Absol-Mega'] },
    Aerodactyl: { otherFormes: ['Aerodactyl-Mega'] },
    Aggron: { otherFormes: ['Aggron-Mega'] },
    Alakazam: { bs: { sd: 95 }, otherFormes: ['Alakazam-Mega'] },
    Altaria: { otherFormes: ['Altaria-Mega'] },
    Ampharos: { bs: { df: 85 }, otherFormes: ['Ampharos-Mega'] },
    Audino: { otherFormes: ['Audino-Mega'] },
    Azumarill: { types: ['Water', 'Fairy'], bs: { sa: 60 } },
    Azurill: { types: ['Normal', 'Fairy'] },
    Banette: { otherFormes: ['Banette-Mega'] },
    Beautifly: { bs: { sa: 100 } },
    Beedrill: { bs: { at: 90 }, otherFormes: ['Beedrill-Mega'] },
    Bellossom: { bs: { df: 95 } },
    Blastoise: { otherFormes: ['Blastoise-Mega'] },
    Blaziken: { otherFormes: ['Blaziken-Mega'] },
    Butterfree: { bs: { sa: 90 } },
    Camerupt: { otherFormes: ['Camerupt-Mega'] },
    Charizard: { otherFormes: ['Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Clefable: { types: ['Fairy'], bs: { sa: 95 } },
    Clefairy: { types: ['Fairy'] },
    Cleffa: { types: ['Fairy'] },
    Cottonee: { types: ['Grass', 'Fairy'] },
    Exploud: { bs: { sd: 73 } },
    Gallade: { otherFormes: ['Gallade-Mega'] },
    Garchomp: { otherFormes: ['Garchomp-Mega'] },
    Gardevoir: { types: ['Psychic', 'Fairy'], otherFormes: ['Gardevoir-Mega'] },
    Gengar: { otherFormes: ['Gengar-Mega'] },
    Gigalith: { bs: { sd: 80 } },
    Glalie: { otherFormes: ['Glalie-Mega'] },
    Golem: { bs: { at: 120 } },
    Granbull: { types: ['Fairy'] },
    Groudon: { otherFormes: ['Groudon-Primal'] },
    Gyarados: { otherFormes: ['Gyarados-Mega'] },
    Heracross: { otherFormes: ['Heracross-Mega'] },
    Houndoom: { otherFormes: ['Houndoom-Mega'] },
    Igglybuff: { types: ['Normal', 'Fairy'] },
    Jigglypuff: { types: ['Normal', 'Fairy'] },
    Jumpluff: { bs: { sd: 95 } },
    Kangaskhan: { otherFormes: ['Kangaskhan-Mega'] },
    Kirlia: { types: ['Psychic', 'Fairy'] },
    Krookodile: { bs: { df: 80 } },
    Kyogre: { otherFormes: ['Kyogre-Primal'] },
    Latias: { otherFormes: ['Latias-Mega'] },
    Latios: { otherFormes: ['Latios-Mega'] },
    Leavanny: { bs: { sd: 80 } },
    Lopunny: { otherFormes: ['Lopunny-Mega'] },
    Lucario: { otherFormes: ['Lucario-Mega'] },
    Manectric: { otherFormes: ['Manectric-Mega'] },
    Marill: { types: ['Water', 'Fairy'] },
    Mawile: { types: ['Steel', 'Fairy'], otherFormes: ['Mawile-Mega'] },
    Medicham: { otherFormes: ['Medicham-Mega'] },
    Metagross: { otherFormes: ['Metagross-Mega'] },
    Mewtwo: { otherFormes: ['Mewtwo-Mega-X', 'Mewtwo-Mega-Y'] },
    'Mime Jr.': { types: ['Psychic', 'Fairy'] },
    'Mr. Mime': { types: ['Psychic', 'Fairy'] },
    Nidoking: { bs: { at: 102 } },
    Nidoqueen: { bs: { at: 92 } },
    Pidgeot: { bs: { sp: 101 }, otherFormes: ['Pidgeot-Mega'] },
    Pikachu: {
        bs: { df: 40, sd: 50 },
        otherFormes: ['Pikachu-Belle', 'Pikachu-Cosplay', 'Pikachu-Libre', 'Pikachu-PhD', 'Pikachu-Pop-Star', 'Pikachu-Rock-Star',]
    },
    Pinsir: { otherFormes: ['Pinsir-Mega'] },
    Poliwrath: { bs: { at: 95 } },
    Raichu: { bs: { sp: 110 } },
    Ralts: { types: ['Psychic', 'Fairy'] },
    Rayquaza: { otherFormes: ['Rayquaza-Mega'] },
    Roserade: { bs: { df: 65 } },
    Sableye: { otherFormes: ['Sableye-Mega'] },
    Salamence: { otherFormes: ['Salamence-Mega'] },
    Sceptile: { otherFormes: ['Sceptile-Mega'] },
    Scizor: { otherFormes: ['Scizor-Mega'] },
    Scolipede: { bs: { at: 100 } },
    Seismitoad: { bs: { at: 95 } },
    Sharpedo: { otherFormes: ['Sharpedo-Mega'] },
    Slowbro: { otherFormes: ['Slowbro-Mega'] },
    Snubbull: { types: ['Fairy'] },
    Staraptor: { bs: { sd: 60 } },
    Steelix: { otherFormes: ['Steelix-Mega'] },
    Stoutland: { bs: { at: 110 } },
    Swampert: { otherFormes: ['Swampert-Mega'] },
    Togekiss: { types: ['Fairy', 'Flying'] },
    Togepi: { types: ['Fairy'] },
    Togetic: { types: ['Fairy', 'Flying'] },
    Tyranitar: { otherFormes: ['Tyranitar-Mega'] },
    Unfezant: { bs: { at: 115 } },
    Venusaur: { otherFormes: ['Venusaur-Mega'] },
    Victreebel: { bs: { sd: 70 } },
    Vileplume: { bs: { sa: 110 } },
    Whimsicott: { types: ['Grass', 'Fairy'] },
    Wigglytuff: { types: ['Normal', 'Fairy'], bs: { sa: 85 } },
    'Aegislash-Blade': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 50, sa: 150, sd: 50, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        otherFormes: ['Aegislash-Shield', 'Aegislash-Both']
    },
    'Aegislash-Shield': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 50, df: 150, sa: 50, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Aegislash-Blade'
    },
    'Aegislash-Both': {
        types: ['Steel', 'Ghost'],
        bs: { hp: 60, at: 150, df: 150, sa: 150, sd: 150, sp: 60 },
        weightkg: 53,
        abilities: { 0: 'Stance Change' },
        baseSpecies: 'Aegislash-Blade'
    },
    Amaura: {
        types: ['Rock', 'Ice'],
        bs: { hp: 77, at: 59, df: 50, sa: 67, sd: 63, sp: 46 },
        weightkg: 25.2,
        nfe: true,
        abilities: { 0: 'Refrigerate' }
    },
    'Arceus-Fairy': {
        types: ['Fairy'],
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        weightkg: 320,
        abilities: { 0: 'Multitype' },
        baseSpecies: 'Arceus',
        gender: 'N'
    },
    Aromatisse: {
        types: ['Fairy'],
        bs: { hp: 101, at: 72, df: 72, sa: 99, sd: 89, sp: 29 },
        weightkg: 15.5,
        abilities: { 0: 'Healer' }
    },
    Aurorus: {
        types: ['Rock', 'Ice'],
        bs: { hp: 123, at: 77, df: 72, sa: 99, sd: 92, sp: 58 },
        weightkg: 225,
        abilities: { 0: 'Refrigerate' }
    },
    Avalugg: {
        types: ['Ice'],
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 46, sp: 28 },
        weightkg: 505,
        abilities: { 0: 'Own Tempo' }
    },
    Barbaracle: {
        types: ['Rock', 'Water'],
        bs: { hp: 72, at: 105, df: 115, sa: 54, sd: 86, sp: 68 },
        weightkg: 96,
        abilities: { 0: 'Tough Claws' }
    },
    Bergmite: {
        types: ['Ice'],
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 35, sp: 28 },
        weightkg: 99.5,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Binacle: {
        types: ['Rock', 'Water'],
        bs: { hp: 42, at: 52, df: 67, sa: 39, sd: 56, sp: 50 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Tough Claws' }
    },
    Braixen: {
        types: ['Fire'],
        bs: { hp: 59, at: 59, df: 58, sa: 90, sd: 70, sp: 73 },
        weightkg: 14.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Bunnelby: {
        types: ['Normal'],
        bs: { hp: 38, at: 36, df: 38, sa: 32, sd: 36, sp: 57 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Caimanoe: {
        types: ['Water', 'Steel'],
        bs: { hp: 73, at: 85, df: 65, sa: 80, sd: 40, sp: 87 },
        weightkg: 72.5,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Carbink: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 50, df: 150, sa: 50, sd: 150, sp: 50 },
        weightkg: 5.7,
        gender: 'N',
        abilities: { 0: 'Clear Body' }
    },
    Chesnaught: {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 107, df: 122, sa: 74, sd: 75, sp: 64 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' }
    },
    Chespin: {
        types: ['Grass'],
        bs: { hp: 56, at: 61, df: 65, sa: 48, sd: 45, sp: 38 },
        weightkg: 9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Clauncher: {
        types: ['Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 58, sd: 63, sp: 44 },
        weightkg: 8.3,
        abilities: { 0: 'Mega Launcher' },
        nfe: true
    },
    Clawitzer: {
        types: ['Water'],
        bs: { hp: 71, at: 73, df: 88, sa: 120, sd: 89, sp: 59 },
        weightkg: 35.3,
        abilities: { 0: 'Mega Launcher' }
    },
    Crucibelle: {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 105, df: 65, sa: 75, sd: 85, sp: 104 },
        weightkg: 23.6,
        abilities: { 0: 'Regenerator' },
        otherFormes: ['Crucibelle-Mega']
    },
    Diancie: {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50 },
        weightkg: 8.8,
        abilities: { 0: 'Clear Body' },
        otherFormes: ['Diancie-Mega'],
        gender: 'N'
    },
    Dedenne: {
        types: ['Electric', 'Fairy'],
        bs: { hp: 67, at: 58, df: 57, sa: 81, sd: 67, sp: 101 },
        weightkg: 2.2,
        abilities: { 0: 'Cheek Pouch' }
    },
    Delphox: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 75, at: 69, df: 72, sa: 114, sd: 100, sp: 104 },
        weightkg: 39,
        abilities: { 0: 'Blaze' }
    },
    Diggersby: {
        types: ['Normal', 'Ground'],
        bs: { hp: 85, at: 56, df: 77, sa: 50, sd: 77, sp: 78 },
        weightkg: 42.4,
        abilities: { 0: 'Pickup' }
    },
    Doublade: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 59, at: 110, df: 150, sa: 45, sd: 49, sp: 35 },
        weightkg: 4.5,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Dragalge: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 65, at: 75, df: 90, sa: 97, sd: 123, sp: 44 },
        weightkg: 81.5,
        abilities: { 0: 'Poison Point' }
    },
    Espurr: {
        types: ['Psychic'],
        bs: { hp: 62, at: 48, df: 54, sa: 63, sd: 60, sp: 68 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Fennekin: {
        types: ['Fire'],
        bs: { hp: 40, at: 45, df: 40, sa: 62, sd: 60, sp: 60 },
        weightkg: 9.4,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Flabébé: {
        types: ['Fairy'],
        bs: { hp: 44, at: 38, df: 39, sa: 61, sd: 79, sp: 42 },
        weightkg: 0.1,
        nfe: true,
        abilities: { 0: 'Flower Veil' }
    },
    Fletchinder: {
        types: ['Fire', 'Flying'],
        bs: { hp: 62, at: 73, df: 55, sa: 56, sd: 52, sp: 84 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Flame Body' }
    },
    Fletchling: {
        types: ['Normal', 'Flying'],
        bs: { hp: 45, at: 50, df: 43, sa: 40, sd: 38, sp: 62 },
        weightkg: 1.7,
        nfe: true,
        abilities: { 0: 'Big Pecks' }
    },
    Floatoy: {
        types: ['Water'],
        bs: { hp: 48, at: 70, df: 40, sa: 70, sd: 30, sp: 77 },
        weightkg: 1.9,
        nfe: true,
        abilities: { 0: 'Water Veil' }
    },
    Floette: {
        types: ['Fairy'],
        bs: { hp: 54, at: 45, df: 47, sa: 75, sd: 98, sp: 52 },
        weightkg: 0.9,
        nfe: true,
        otherFormes: ['Floette-Eternal'],
        abilities: { 0: 'Flower Veil' }
    },
    'Floette-Eternal': {
        types: ['Fairy'],
        bs: { hp: 74, at: 65, df: 67, sa: 125, sd: 128, sp: 92 },
        weightkg: 0.9,
        abilities: { 0: 'Flower Veil' },
        baseSpecies: 'Floette'
    },
    Florges: {
        types: ['Fairy'],
        bs: { hp: 78, at: 65, df: 68, sa: 112, sd: 154, sp: 75 },
        weightkg: 10,
        abilities: { 0: 'Flower Veil' }
    },
    Froakie: {
        types: ['Water'],
        bs: { hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Frogadier: {
        types: ['Water'],
        bs: { hp: 54, at: 63, df: 52, sa: 83, sd: 56, sp: 97 },
        weightkg: 10.9,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Furfrou: {
        types: ['Normal'],
        bs: { hp: 75, at: 80, df: 60, sa: 65, sd: 90, sp: 102 },
        weightkg: 28,
        abilities: { 0: 'Fur Coat' }
    },
    Gogoat: {
        types: ['Grass'],
        bs: { hp: 123, at: 100, df: 62, sa: 97, sd: 81, sp: 68 },
        weightkg: 91,
        abilities: { 0: 'Sap Sipper' }
    },
    Goodra: {
        types: ['Dragon'],
        bs: { hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80 },
        weightkg: 150.5,
        abilities: { 0: 'Sap Sipper' }
    },
    Goomy: {
        types: ['Dragon'],
        bs: { hp: 45, at: 50, df: 35, sa: 55, sd: 75, sp: 40 },
        weightkg: 2.8,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Gourgeist: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 65, at: 90, df: 122, sa: 58, sd: 75, sp: 84 },
        weightkg: 12.5,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Gourgeist-Large', 'Gourgeist-Small', 'Gourgeist-Super']
    },
    'Gourgeist-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 75, at: 95, df: 122, sa: 58, sd: 75, sp: 69 },
        weightkg: 14,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    'Gourgeist-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 55, at: 85, df: 122, sa: 58, sd: 75, sp: 99 },
        weightkg: 9.5,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    'Gourgeist-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 100, df: 122, sa: 58, sd: 75, sp: 54 },
        weightkg: 39,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Gourgeist'
    },
    Greninja: {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 },
        weightkg: 40,
        abilities: { 0: 'Torrent' }
    },
    Hawlucha: {
        types: ['Fighting', 'Flying'],
        bs: { hp: 78, at: 92, df: 75, sa: 74, sd: 63, sp: 118 },
        weightkg: 21.5,
        abilities: { 0: 'Limber' }
    },
    Heliolisk: {
        types: ['Electric', 'Normal'],
        bs: { hp: 62, at: 55, df: 52, sa: 109, sd: 94, sp: 109 },
        weightkg: 21,
        abilities: { 0: 'Dry Skin' }
    },
    Helioptile: {
        types: ['Electric', 'Normal'],
        bs: { hp: 44, at: 38, df: 33, sa: 61, sd: 43, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Dry Skin' }
    },
    Honedge: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 45, at: 80, df: 100, sa: 35, sd: 37, sp: 28 },
        weightkg: 2,
        abilities: { 0: 'No Guard' },
        nfe: true
    },
    Hoopa: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        weightkg: 9,
        gender: 'N',
        abilities: { 0: 'Magician' },
        otherFormes: ['Hoopa-Unbound']
    },
    'Hoopa-Unbound': {
        types: ['Psychic', 'Dark'],
        bs: { hp: 80, at: 160, df: 60, sa: 170, sd: 130, sp: 80 },
        weightkg: 490,
        gender: 'N',
        abilities: { 0: 'Magician' },
        baseSpecies: 'Hoopa'
    },
    Inkay: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 53, at: 54, df: 53, sa: 37, sd: 46, sp: 45 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Contrary' }
    },
    Kerfluffle: {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 84, at: 78, df: 86, sa: 115, sd: 88, sp: 119 },
        weightkg: 24.2,
        abilities: { 0: 'Natural Cure' }
    },
    Klefki: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 57, at: 80, df: 91, sa: 80, sd: 87, sp: 75 },
        weightkg: 3,
        abilities: { 0: 'Prankster' }
    },
    Litleo: {
        types: ['Fire', 'Normal'],
        bs: { hp: 62, at: 50, df: 58, sa: 73, sd: 54, sp: 72 },
        weightkg: 13.5,
        nfe: true,
        abilities: { 0: 'Rivalry' }
    },
    Malamar: {
        types: ['Dark', 'Psychic'],
        bs: { hp: 86, at: 92, df: 88, sa: 68, sd: 75, sp: 73 },
        weightkg: 47,
        abilities: { 0: 'Contrary' }
    },
    'Abomasnow-Mega': {
        types: ['Grass', 'Ice'],
        bs: { hp: 90, at: 132, df: 105, sa: 132, sd: 105, sp: 30 },
        weightkg: 185,
        abilities: { 0: 'Snow Warning' },
        baseSpecies: 'Abomasnow'
    },
    'Absol-Mega': {
        types: ['Dark'],
        bs: { hp: 65, at: 150, df: 60, sa: 115, sd: 60, sp: 115 },
        weightkg: 49,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Absol'
    },
    'Aerodactyl-Mega': {
        types: ['Rock', 'Flying'],
        bs: { hp: 80, at: 135, df: 85, sa: 70, sd: 95, sp: 150 },
        weightkg: 79,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Aerodactyl'
    },
    'Aggron-Mega': {
        types: ['Steel'],
        bs: { hp: 70, at: 140, df: 230, sa: 60, sd: 80, sp: 50 },
        weightkg: 395,
        abilities: { 0: 'Filter' },
        baseSpecies: 'Aggron'
    },
    'Alakazam-Mega': {
        types: ['Psychic'],
        bs: { hp: 55, at: 50, df: 65, sa: 175, sd: 95, sp: 150 },
        weightkg: 48,
        abilities: { 0: 'Trace' },
        baseSpecies: 'Alakazam'
    },
    'Altaria-Mega': {
        types: ['Dragon', 'Fairy'],
        bs: { hp: 75, at: 110, df: 110, sa: 110, sd: 105, sp: 80 },
        weightkg: 20.6,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Altaria'
    },
    'Ampharos-Mega': {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 95, df: 105, sa: 165, sd: 110, sp: 45 },
        weightkg: 61.5,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Ampharos'
    },
    'Audino-Mega': {
        types: ['Normal', 'Fairy'],
        bs: { hp: 103, at: 60, df: 126, sa: 80, sd: 126, sp: 50 },
        weightkg: 32,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Audino'
    },
    'Banette-Mega': {
        types: ['Ghost'],
        bs: { hp: 64, at: 165, df: 75, sa: 93, sd: 83, sp: 75 },
        weightkg: 13,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Banette'
    },
    'Beedrill-Mega': {
        types: ['Bug', 'Poison'],
        bs: { hp: 65, at: 150, df: 40, sa: 15, sd: 80, sp: 145 },
        weightkg: 40.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Beedrill'
    },
    'Blastoise-Mega': {
        types: ['Water'],
        bs: { hp: 79, at: 103, df: 120, sa: 135, sd: 115, sp: 78 },
        weightkg: 101.1,
        abilities: { 0: 'Mega Launcher' },
        baseSpecies: 'Blastoise'
    },
    'Blaziken-Mega': {
        types: ['Fire', 'Fighting'],
        bs: { hp: 80, at: 160, df: 80, sa: 130, sd: 80, sp: 100 },
        weightkg: 52,
        abilities: { 0: 'Speed Boost' },
        baseSpecies: 'Blaziken'
    },
    'Camerupt-Mega': {
        types: ['Fire', 'Ground'],
        bs: { hp: 70, at: 120, df: 100, sa: 145, sd: 105, sp: 20 },
        weightkg: 320.5,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Camerupt'
    },
    'Charizard-Mega-X': {
        types: ['Fire', 'Dragon'],
        bs: { hp: 78, at: 130, df: 111, sa: 130, sd: 85, sp: 100 },
        weightkg: 110.5,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Charizard'
    },
    'Charizard-Mega-Y': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 104, df: 78, sa: 159, sd: 115, sp: 100 },
        weightkg: 100.5,
        abilities: { 0: 'Drought' },
        baseSpecies: 'Charizard'
    },
    'Crucibelle-Mega': {
        types: ['Rock', 'Poison'],
        bs: { hp: 106, at: 135, df: 75, sa: 85, sd: 125, sp: 114 },
        weightkg: 22.5,
        abilities: { 0: 'Magic Guard' },
        baseSpecies: 'Crucibelle'
    },
    'Diancie-Mega': {
        types: ['Rock', 'Fairy'],
        bs: { hp: 50, at: 160, df: 110, sa: 160, sd: 110, sp: 110 },
        weightkg: 27.8,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Diancie',
        gender: 'N'
    },
    'Gallade-Mega': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 68, at: 165, df: 95, sa: 65, sd: 115, sp: 110 },
        weightkg: 56.4,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Gallade'
    },
    'Garchomp-Mega': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 170, df: 115, sa: 120, sd: 95, sp: 92 },
        weightkg: 95,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Garchomp'
    },
    'Gardevoir-Mega': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        weightkg: 48.4,
        abilities: { 0: 'Pixilate' },
        baseSpecies: 'Gardevoir'
    },
    'Gengar-Mega': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 80, sa: 170, sd: 95, sp: 130 },
        weightkg: 40.5,
        abilities: { 0: 'Shadow Tag' },
        baseSpecies: 'Gengar'
    },
    'Glalie-Mega': {
        types: ['Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 100 },
        weightkg: 350.2,
        abilities: { 0: 'Refrigerate' },
        baseSpecies: 'Glalie'
    },
    'Gyarados-Mega': {
        types: ['Water', 'Dark'],
        bs: { hp: 95, at: 155, df: 109, sa: 70, sd: 130, sp: 81 },
        weightkg: 305,
        abilities: { 0: 'Mold Breaker' },
        baseSpecies: 'Gyarados'
    },
    'Heracross-Mega': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 80, at: 185, df: 115, sa: 40, sd: 105, sp: 75 },
        weightkg: 62.5,
        abilities: { 0: 'Skill Link' },
        baseSpecies: 'Heracross'
    },
    'Houndoom-Mega': {
        types: ['Dark', 'Fire'],
        bs: { hp: 75, at: 90, df: 90, sa: 140, sd: 90, sp: 115 },
        weightkg: 49.5,
        abilities: { 0: 'Solar Power' },
        baseSpecies: 'Houndoom'
    },
    'Kangaskhan-Mega': {
        types: ['Normal'],
        bs: { hp: 105, at: 125, df: 100, sa: 60, sd: 100, sp: 100 },
        weightkg: 100,
        abilities: { 0: 'Parental Bond' },
        baseSpecies: 'Kangaskhan'
    },
    'Latias-Mega': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 100, df: 120, sa: 140, sd: 150, sp: 110 },
        weightkg: 52,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latias'
    },
    'Latios-Mega': {
        types: ['Dragon', 'Psychic'],
        bs: { hp: 80, at: 130, df: 100, sa: 160, sd: 120, sp: 110 },
        weightkg: 70,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Latios'
    },
    'Lopunny-Mega': {
        types: ['Normal', 'Fighting'],
        bs: { hp: 65, at: 136, df: 94, sa: 54, sd: 96, sp: 135 },
        weightkg: 28.3,
        abilities: { 0: 'Scrappy' },
        baseSpecies: 'Lopunny'
    },
    'Lucario-Mega': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        weightkg: 57.5,
        abilities: { 0: 'Adaptability' },
        baseSpecies: 'Lucario'
    },
    'Manectric-Mega': {
        types: ['Electric'],
        bs: { hp: 70, at: 75, df: 80, sa: 135, sd: 80, sp: 135 },
        weightkg: 44,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Manectric'
    },
    'Mawile-Mega': {
        types: ['Steel', 'Fairy'],
        bs: { hp: 50, at: 105, df: 125, sa: 55, sd: 95, sp: 50 },
        weightkg: 23.5,
        abilities: { 0: 'Huge Power' },
        baseSpecies: 'Mawile'
    },
    'Medicham-Mega': {
        types: ['Fighting', 'Psychic'],
        bs: { hp: 60, at: 100, df: 85, sa: 80, sd: 85, sp: 100 },
        weightkg: 31.5,
        abilities: { 0: 'Pure Power' },
        baseSpecies: 'Medicham'
    },
    'Metagross-Mega': {
        types: ['Steel', 'Psychic'],
        bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
        weightkg: 942.9,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Metagross',
        gender: 'N'
    },
    'Mewtwo-Mega-X': {
        types: ['Psychic', 'Fighting'],
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        weightkg: 127,
        abilities: { 0: 'Steadfast' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Mewtwo-Mega-Y': {
        types: ['Psychic'],
        bs: { hp: 106, at: 150, df: 70, sa: 194, sd: 120, sp: 140 },
        weightkg: 33,
        abilities: { 0: 'Insomnia' },
        baseSpecies: 'Mewtwo',
        gender: 'N'
    },
    'Pidgeot-Mega': {
        types: ['Normal', 'Flying'],
        bs: { hp: 83, at: 80, df: 80, sa: 135, sd: 80, sp: 121 },
        weightkg: 50.5,
        abilities: { 0: 'No Guard' },
        baseSpecies: 'Pidgeot'
    },
    'Pinsir-Mega': {
        types: ['Bug', 'Flying'],
        bs: { hp: 65, at: 155, df: 120, sa: 65, sd: 90, sp: 105 },
        weightkg: 59,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Pinsir'
    },
    'Rayquaza-Mega': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 105, at: 180, df: 100, sa: 180, sd: 100, sp: 115 },
        weightkg: 392,
        gender: 'N',
        abilities: { 0: 'Delta Stream' },
        baseSpecies: 'Rayquaza'
    },
    'Sableye-Mega': {
        types: ['Dark', 'Ghost'],
        bs: { hp: 50, at: 85, df: 125, sa: 85, sd: 115, sp: 20 },
        weightkg: 161,
        abilities: { 0: 'Magic Bounce' },
        baseSpecies: 'Sableye'
    },
    'Salamence-Mega': {
        types: ['Dragon', 'Flying'],
        bs: { hp: 95, at: 145, df: 130, sa: 120, sd: 90, sp: 120 },
        weightkg: 112.6,
        abilities: { 0: 'Aerilate' },
        baseSpecies: 'Salamence'
    },
    'Sceptile-Mega': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 75, sa: 145, sd: 85, sp: 145 },
        weightkg: 55.2,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Sceptile'
    },
    'Scizor-Mega': {
        types: ['Bug', 'Steel'],
        bs: { hp: 70, at: 150, df: 140, sa: 65, sd: 100, sp: 75 },
        weightkg: 125,
        abilities: { 0: 'Technician' },
        baseSpecies: 'Scizor'
    },
    'Sharpedo-Mega': {
        types: ['Water', 'Dark'],
        bs: { hp: 70, at: 140, df: 70, sa: 110, sd: 65, sp: 105 },
        weightkg: 130.3,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Sharpedo'
    },
    'Slowbro-Mega': {
        types: ['Water', 'Psychic'],
        bs: { hp: 95, at: 75, df: 180, sa: 130, sd: 80, sp: 30 },
        weightkg: 120,
        abilities: { 0: 'Shell Armor' },
        baseSpecies: 'Slowbro'
    },
    'Steelix-Mega': {
        types: ['Steel', 'Ground'],
        bs: { hp: 75, at: 125, df: 230, sa: 55, sd: 95, sp: 30 },
        weightkg: 740,
        abilities: { 0: 'Sand Force' },
        baseSpecies: 'Steelix'
    },
    'Swampert-Mega': {
        types: ['Water', 'Ground'],
        bs: { hp: 100, at: 150, df: 110, sa: 95, sd: 110, sp: 70 },
        weightkg: 102,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Swampert'
    },
    'Tyranitar-Mega': {
        types: ['Rock', 'Dark'],
        bs: { hp: 100, at: 164, df: 150, sa: 95, sd: 120, sp: 71 },
        weightkg: 255,
        abilities: { 0: 'Sand Stream' },
        baseSpecies: 'Tyranitar'
    },
    'Venusaur-Mega': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 100, df: 123, sa: 122, sd: 120, sp: 80 },
        weightkg: 155.5,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Venusaur'
    },
    Meowstic: {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        otherFormes: ['Meowstic-F']
    },
    'Meowstic-F': {
        types: ['Psychic'],
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        weightkg: 8.5,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Meowstic'
    },
    Naviathan: {
        types: ['Water', 'Steel'],
        bs: { hp: 103, at: 110, df: 90, sa: 95, sd: 65, sp: 97 },
        weightkg: 510,
        abilities: { 0: 'Water Veil' }
    },
    Noibat: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 40, at: 30, df: 35, sa: 45, sd: 40, sp: 55 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Frisk' }
    },
    Noivern: {
        types: ['Flying', 'Dragon'],
        bs: { hp: 85, at: 70, df: 80, sa: 97, sd: 80, sp: 123 },
        weightkg: 85,
        abilities: { 0: 'Frisk' }
    },
    Pancham: {
        types: ['Fighting'],
        bs: { hp: 67, at: 82, df: 62, sa: 46, sd: 48, sp: 43 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Iron Fist' }
    },
    Pangoro: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 95, at: 124, df: 78, sa: 69, sd: 71, sp: 58 },
        weightkg: 136,
        abilities: { 0: 'Iron Fist' }
    },
    Phantump: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Pikachu-Cosplay': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Rock-Star': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Belle': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-PhD': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Pop-Star': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Libre': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Lightning Rod' },
        baseSpecies: 'Pikachu'
    },
    Plasmanta: {
        types: ['Electric', 'Poison'],
        bs: { hp: 60, at: 57, df: 119, sa: 131, sd: 98, sp: 100 },
        weightkg: 460,
        abilities: { 0: 'Storm Drain' }
    },
    Pluffle: {
        types: ['Fairy'],
        bs: { hp: 74, at: 38, df: 51, sa: 65, sd: 78, sp: 49 },
        weightkg: 1.8,
        nfe: true,
        abilities: { 0: 'Natural Cure' }
    },
    'Groudon-Primal': {
        types: ['Ground', 'Fire'],
        bs: { hp: 100, at: 180, df: 160, sa: 150, sd: 90, sp: 90 },
        weightkg: 999.7,
        abilities: { 0: 'Desolate Land' },
        baseSpecies: 'Groudon',
        gender: 'N'
    },
    'Kyogre-Primal': {
        types: ['Water'],
        bs: { hp: 100, at: 150, df: 90, sa: 180, sd: 160, sp: 90 },
        weightkg: 430,
        abilities: { 0: 'Primordial Sea' },
        baseSpecies: 'Kyogre',
        gender: 'N'
    },
    Pumpkaboo: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 49, at: 66, df: 70, sa: 44, sd: 55, sp: 51 },
        weightkg: 5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        otherFormes: ['Pumpkaboo-Large', 'Pumpkaboo-Small', 'Pumpkaboo-Super']
    },
    'Pumpkaboo-Large': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 54, at: 66, df: 70, sa: 44, sd: 55, sp: 46 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    'Pumpkaboo-Small': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 44, at: 66, df: 70, sa: 44, sd: 55, sp: 56 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    'Pumpkaboo-Super': {
        types: ['Ghost', 'Grass'],
        bs: { hp: 59, at: 66, df: 70, sa: 44, sd: 55, sp: 41 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Pumpkaboo'
    },
    Pyroar: {
        types: ['Fire', 'Normal'],
        bs: { hp: 86, at: 68, df: 72, sa: 109, sd: 66, sp: 106 },
        weightkg: 81.5,
        abilities: { 0: 'Rivalry' }
    },
    Quilladin: {
        types: ['Grass'],
        bs: { hp: 61, at: 78, df: 95, sa: 56, sd: 58, sp: 57 },
        weightkg: 29,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Scatterbug: {
        types: ['Bug'],
        bs: { hp: 38, at: 35, df: 40, sa: 27, sd: 25, sp: 35 },
        weightkg: 2.5,
        nfe: true,
        abilities: { 0: 'Shield Dust' }
    },
    Skiddo: {
        types: ['Grass'],
        bs: { hp: 66, at: 65, df: 48, sa: 62, sd: 57, sp: 52 },
        weightkg: 31,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Skrelp: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 60, df: 60, sa: 60, sd: 60, sp: 30 },
        weightkg: 7.3,
        nfe: true,
        abilities: { 0: 'Poison Point' }
    },
    Sliggoo: {
        types: ['Dragon'],
        bs: { hp: 68, at: 75, df: 53, sa: 83, sd: 113, sp: 60 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Sap Sipper' }
    },
    Slurpuff: {
        types: ['Fairy'],
        bs: { hp: 82, at: 80, df: 86, sa: 85, sd: 75, sp: 72 },
        weightkg: 5,
        abilities: { 0: 'Sweet Veil' }
    },
    Snugglow: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 37, df: 79, sa: 91, sd: 68, sp: 70 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Storm Drain' }
    },
    Spewpa: {
        types: ['Bug'],
        bs: { hp: 45, at: 22, df: 60, sa: 27, sd: 30, sp: 29 },
        weightkg: 8.4,
        nfe: true,
        abilities: { 0: 'Shed Skin' }
    },
    Spritzee: {
        types: ['Fairy'],
        bs: { hp: 78, at: 52, df: 60, sa: 63, sd: 65, sp: 23 },
        weightkg: 0.5,
        nfe: true,
        abilities: { 0: 'Healer' }
    },
    Swirlix: {
        types: ['Fairy'],
        bs: { hp: 62, at: 48, df: 66, sa: 59, sd: 57, sp: 49 },
        weightkg: 3.5,
        nfe: true,
        abilities: { 0: 'Sweet Veil' }
    },
    Sylveon: {
        types: ['Fairy'],
        bs: { hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 60 },
        weightkg: 23.5,
        abilities: { 0: 'Cute Charm' }
    },
    Talonflame: {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 81, df: 71, sa: 74, sd: 69, sp: 126 },
        weightkg: 24.5,
        abilities: { 0: 'Flame Body' }
    },
    Trevenant: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 85, at: 110, df: 76, sa: 65, sd: 82, sp: 56 },
        weightkg: 71,
        abilities: { 0: 'Natural Cure' }
    },
    Tyrantrum: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 82, at: 121, df: 119, sa: 69, sd: 59, sp: 71 },
        weightkg: 270,
        abilities: { 0: 'Strong Jaw' }
    },
    Tyrunt: {
        types: ['Rock', 'Dragon'],
        bs: { hp: 58, at: 89, df: 77, sa: 45, sd: 45, sp: 48 },
        weightkg: 26,
        nfe: true,
        abilities: { 0: 'Strong Jaw' }
    },
    Vivillon: {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        otherFormes: ['Vivillon-Fancy', 'Vivillon-Pokeball']
    },
    'Vivillon-Fancy': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Vivillon'
    },
    'Vivillon-Pokeball': {
        types: ['Bug', 'Flying'],
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        weightkg: 17,
        abilities: { 0: 'Shield Dust' },
        baseSpecies: 'Vivillon'
    },
    Volcanion: {
        types: ['Fire', 'Water'],
        bs: { hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70 },
        weightkg: 195,
        gender: 'N',
        abilities: { 0: 'Water Absorb' }
    },
    Volkraken: {
        types: ['Water', 'Fire'],
        bs: { hp: 100, at: 45, df: 80, sa: 135, sd: 100, sp: 95 },
        weightkg: 44.5,
        abilities: { 0: 'Analytic' }
    },
    Volkritter: {
        types: ['Water', 'Fire'],
        bs: { hp: 60, at: 30, df: 50, sa: 80, sd: 60, sp: 70 },
        weightkg: 15,
        nfe: true,
        abilities: { 0: 'Anticipation' }
    },
    Xerneas: {
        types: ['Fairy'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 215,
        abilities: { 0: 'Fairy Aura' },
        gender: 'N'
    },
    Yveltal: {
        types: ['Dark', 'Flying'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        weightkg: 203,
        abilities: { 0: 'Dark Aura' },
        gender: 'N'
    },
    Zygarde: {
        types: ['Dragon', 'Ground'],
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 },
        weightkg: 305,
        abilities: { 0: 'Aura Break' },
        gender: 'N'
    }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
XY['Arceus'].otherFormes.push('Arceus-Fairy');
XY['Arceus'].otherFormes.sort();
var SM_PATCH = {
    'Alakazam-Mega': { bs: { sd: 105 } },
    Arbok: { bs: { at: 95 } },
    Ariados: { bs: { sd: 70 } },
    Beartic: { bs: { at: 130 } },
    Chimecho: { bs: { hp: 75, df: 80, sd: 90 } },
    Corsola: { bs: { hp: 65, df: 95, sd: 95 } },
    'Crucibelle-Mega': { bs: { sa: 91, sp: 108 } },
    Crustle: { bs: { at: 105 } },
    Cryogonal: { bs: { hp: 80, df: 50 } },
    Delcatty: { bs: { sp: 90 } },
    Diglett: { otherFormes: ['Diglett-Alola'] },
    Dodrio: { bs: { sp: 110 } },
    Dugtrio: { bs: { at: 100 }, otherFormes: ['Dugtrio-Alola'] },
    Eevee: { otherFormes: ['Eevee-Starter'] },
    Electrode: { bs: { sp: 150 } },
    Exeggutor: { bs: { sd: 75 }, otherFormes: ['Exeggutor-Alola'] },
    'Farfetch\u2019d': { bs: { at: 90 } },
    Gengar: { abilities: { 0: 'Cursed Body' } },
    Geodude: { otherFormes: ['Geodude-Alola'] },
    Golem: { otherFormes: ['Golem-Alola'] },
    Graveler: { otherFormes: ['Graveler-Alola'] },
    Greninja: { otherFormes: ['Greninja-Ash'] },
    Grimer: { otherFormes: ['Grimer-Alola'] },
    Illumise: { bs: { df: 75, sd: 85 } },
    Lunatone: { bs: { hp: 90 } },
    Magcargo: { bs: { hp: 60, sa: 90 } },
    Mantine: { bs: { hp: 85 } },
    Marowak: { otherFormes: ['Marowak-Alola', 'Marowak-Alola-Totem'] },
    Masquerain: { bs: { sa: 100, sp: 80 } },
    Meowth: { otherFormes: ['Meowth-Alola'] },
    Muk: { otherFormes: ['Muk-Alola'] },
    Necturna: { bs: { sp: 58 } },
    Ninetales: { otherFormes: ['Ninetales-Alola'] },
    Naviathan: { abilities: { 0: 'Guts' } },
    Noctowl: { bs: { sa: 86 } },
    Pelipper: { bs: { sa: 95 } },
    Persian: { otherFormes: ['Persian-Alola'] },
    Pikachu: {
        otherFormes: ['Pikachu-Alola', 'Pikachu-Hoenn', 'Pikachu-Kalos', 'Pikachu-Original', 'Pikachu-Partner', 'Pikachu-Sinnoh', 'Pikachu-Starter', 'Pikachu-Unova',]
    },
    Qwilfish: { bs: { df: 85 } },
    Raichu: { otherFormes: ['Raichu-Alola'] },
    Raticate: { otherFormes: ['Raticate-Alola', 'Raticate-Alola-Totem'] },
    Rattata: { otherFormes: ['Rattata-Alola'] },
    Sandshrew: { otherFormes: ['Sandshrew-Alola'] },
    Sandslash: { otherFormes: ['Sandslash-Alola'] },
    Solrock: { bs: { hp: 90 } },
    Swellow: { bs: { sa: 75 } },
    Volbeat: { bs: { df: 75, sd: 85 } },
    Vulpix: { otherFormes: ['Vulpix-Alola'] },
    Woobat: { bs: { hp: 65 } },
    Zygarde: { otherFormes: ['Zygarde-10%', 'Zygarde-Complete'] },
    Araquanid: {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 82,
        otherFormes: ['Araquanid-Totem']
    },
    'Araquanid-Totem': {
        types: ['Water', 'Bug'],
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        abilities: { 0: 'Water Bubble' },
        weightkg: 217.5,
        baseSpecies: 'Araquanid'
    },
    Bewear: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 120, at: 125, df: 80, sa: 55, sd: 60, sp: 60 },
        abilities: { 0: 'Fluffy' },
        weightkg: 135
    },
    Blacephalon: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 53, at: 127, df: 53, sa: 151, sd: 79, sp: 107 },
        weightkg: 13,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Bounsweet: {
        types: ['Grass'],
        bs: { hp: 42, at: 30, df: 38, sa: 30, sd: 38, sp: 32 },
        weightkg: 3.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Brionne: {
        types: ['Water'],
        bs: { hp: 60, at: 69, df: 69, sa: 91, sd: 81, sp: 50 },
        weightkg: 17.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Bruxish: {
        types: ['Water', 'Psychic'],
        bs: { hp: 68, at: 105, df: 70, sa: 70, sd: 70, sp: 92 },
        weightkg: 19,
        abilities: { 0: 'Dazzling' }
    },
    Buzzwole: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 107, at: 139, df: 139, sa: 53, sd: 53, sp: 79 },
        weightkg: 333.6,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Caribolt: {
        types: ['Grass', 'Electric'],
        bs: { hp: 84, at: 106, df: 82, sa: 77, sd: 80, sp: 106 },
        weightkg: 140,
        abilities: { 0: 'Overgrow' }
    },
    Celesteela: {
        types: ['Steel', 'Flying'],
        bs: { hp: 97, at: 101, df: 103, sa: 107, sd: 101, sp: 61 },
        weightkg: 999.9,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Charjabug: {
        types: ['Bug', 'Electric'],
        bs: { hp: 57, at: 82, df: 95, sa: 55, sd: 75, sp: 36 },
        weightkg: 10.5,
        nfe: true,
        abilities: { 0: 'Battery' }
    },
    Comfey: {
        types: ['Fairy'],
        bs: { hp: 51, at: 52, df: 90, sa: 82, sd: 110, sp: 100 },
        weightkg: 0.3,
        abilities: { 0: 'Flower Veil' }
    },
    Cosmoem: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 131, sa: 29, sd: 131, sp: 37 },
        weightkg: 999.9,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Sturdy' }
    },
    Coribalis: {
        types: ['Water', 'Bug'],
        bs: { hp: 76, at: 69, df: 90, sa: 65, sd: 77, sp: 43 },
        weightkg: 24.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Cosmog: {
        types: ['Psychic'],
        bs: { hp: 43, at: 29, df: 31, sa: 29, sd: 31, sp: 37 },
        weightkg: 0.1,
        nfe: true,
        gender: 'N',
        abilities: { 0: 'Unaware' }
    },
    Crabominable: {
        types: ['Fighting', 'Ice'],
        bs: { hp: 97, at: 132, df: 77, sa: 62, sd: 67, sp: 43 },
        weightkg: 180,
        abilities: { 0: 'Hyper Cutter' }
    },
    Crabrawler: {
        types: ['Fighting'],
        bs: { hp: 47, at: 82, df: 57, sa: 42, sd: 47, sp: 63 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Hyper Cutter' }
    },
    Cutiefly: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 40, at: 45, df: 40, sa: 55, sd: 40, sp: 84 },
        weightkg: 0.2,
        nfe: true,
        abilities: { 0: 'Honey Gather' }
    },
    Dartrix: {
        types: ['Grass', 'Flying'],
        bs: { hp: 78, at: 75, df: 75, sa: 70, sd: 70, sp: 52 },
        weightkg: 16,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Decidueye: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 78, at: 107, df: 75, sa: 100, sd: 100, sp: 70 },
        weightkg: 36.6,
        abilities: { 0: 'Overgrow' }
    },
    Dewpider: {
        types: ['Water', 'Bug'],
        bs: { hp: 38, at: 40, df: 52, sa: 40, sd: 72, sp: 27 },
        weightkg: 4,
        nfe: true,
        abilities: { 0: 'Water Bubble' }
    },
    Dhelmise: {
        types: ['Ghost', 'Grass'],
        bs: { hp: 70, at: 131, df: 100, sa: 86, sd: 90, sp: 40 },
        weightkg: 210,
        gender: 'N',
        abilities: { 0: 'Steelworker' }
    },
    Drampa: {
        types: ['Normal', 'Dragon'],
        bs: { hp: 78, at: 60, df: 85, sa: 135, sd: 91, sp: 36 },
        weightkg: 185,
        abilities: { 0: 'Berserk' }
    },
    'Diglett-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 10, at: 55, df: 30, sa: 35, sd: 45, sp: 90 },
        weightkg: 1,
        baseSpecies: 'Diglett',
        nfe: true,
        abilities: { 0: 'Sand Veil' }
    },
    'Dugtrio-Alola': {
        types: ['Ground', 'Steel'],
        bs: { hp: 35, at: 100, df: 60, sa: 50, sd: 70, sp: 110 },
        weightkg: 66.6,
        baseSpecies: 'Dugtrio',
        abilities: { 0: 'Sand Veil' }
    },
    'Eevee-Starter': {
        types: ['Normal'],
        bs: { hp: 65, at: 75, df: 70, sa: 65, sd: 85, sp: 75 },
        weightkg: 6.5,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Eevee'
    },
    Electrelk: {
        types: ['Grass', 'Electric'],
        bs: { hp: 59, at: 81, df: 67, sa: 57, sd: 55, sp: 101 },
        weightkg: 41.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Equilibra: {
        types: ['Steel', 'Ground'],
        bs: { hp: 102, at: 50, df: 96, sa: 133, sd: 118, sp: 60 },
        weightkg: 51.3,
        gender: 'N',
        abilities: { 0: 'Levitate' }
    },
    'Exeggutor-Alola': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 95, at: 105, df: 85, sa: 125, sd: 75, sp: 45 },
        weightkg: 415.6,
        baseSpecies: 'Exeggutor',
        abilities: { 0: 'Frisk' }
    },
    Fawnifer: {
        types: ['Grass'],
        bs: { hp: 49, at: 61, df: 42, sa: 52, sd: 40, sp: 76 },
        weightkg: 6.9,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Fomantis: {
        types: ['Grass'],
        bs: { hp: 40, at: 55, df: 35, sa: 50, sd: 35, sp: 35 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    'Geodude-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 },
        weightkg: 20.3,
        baseSpecies: 'Geodude',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Golem-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 80, at: 120, df: 130, sa: 55, sd: 65, sp: 45 },
        weightkg: 316,
        abilities: { 0: 'Magnet Pull' },
        baseSpecies: 'Golem'
    },
    Golisopod: {
        types: ['Bug', 'Water'],
        bs: { hp: 75, at: 125, df: 140, sa: 60, sd: 90, sp: 40 },
        weightkg: 108,
        abilities: { 0: 'Emergency Exit' }
    },
    'Graveler-Alola': {
        types: ['Rock', 'Electric'],
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 },
        weightkg: 110,
        baseSpecies: 'Graveler',
        nfe: true,
        abilities: { 0: 'Magnet Pull' }
    },
    'Grimer-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 },
        weightkg: 42,
        baseSpecies: 'Grimer',
        nfe: true,
        abilities: { 0: 'Poison Touch' }
    },
    'Greninja-Ash': {
        types: ['Water', 'Dark'],
        bs: { hp: 72, at: 145, df: 67, sa: 153, sd: 71, sp: 132 },
        weightkg: 40,
        abilities: { 0: 'Battle Bond' },
        baseSpecies: 'Greninja'
    },
    Grubbin: {
        types: ['Bug'],
        bs: { hp: 47, at: 62, df: 45, sa: 55, sd: 45, sp: 46 },
        weightkg: 4.4,
        nfe: true,
        abilities: { 0: 'Swarm' }
    },
    Gumshoos: {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 14.2,
        otherFormes: ['Gumshoos-Totem'],
        abilities: { 0: 'Stakeout' }
    },
    'Gumshoos-Totem': {
        types: ['Normal'],
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        weightkg: 60,
        baseSpecies: 'Gumshoos',
        abilities: { 0: 'Adaptability' }
    },
    Guzzlord: {
        types: ['Dark', 'Dragon'],
        bs: { hp: 223, at: 101, df: 53, sa: 97, sd: 53, sp: 43 },
        weightkg: 888,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Hakamo-o': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 },
        weightkg: 47,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Incineroar: {
        types: ['Fire', 'Dark'],
        bs: { hp: 95, at: 115, df: 90, sa: 80, sd: 90, sp: 60 },
        weightkg: 83,
        abilities: { 0: 'Blaze' }
    },
    'Jangmo-o': {
        types: ['Dragon'],
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 },
        weightkg: 29.7,
        nfe: true,
        abilities: { 0: 'Bulletproof' }
    },
    Justyke: {
        types: ['Steel', 'Ground'],
        bs: { hp: 72, at: 70, df: 56, sa: 83, sd: 68, sp: 30 },
        weightkg: 36.5,
        nfe: true,
        abilities: { 0: 'Levitate' },
        gender: 'N'
    },
    Jumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 92, at: 63, df: 97, sa: 124, sd: 104, sp: 96 },
        weightkg: 200,
        abilities: { 0: 'Trace' }
    },
    Kartana: {
        types: ['Grass', 'Steel'],
        bs: { hp: 59, at: 181, df: 131, sa: 59, sd: 31, sp: 109 },
        weightkg: 0.1,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Komala: {
        types: ['Normal'],
        bs: { hp: 65, at: 115, df: 65, sa: 75, sd: 95, sp: 65 },
        weightkg: 19.9,
        abilities: { 0: 'Comatose' }
    },
    'Kommo-o': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 78.2,
        otherFormes: ['Kommo-o-Totem'],
        abilities: { 0: 'Bulletproof' }
    },
    'Kommo-o-Totem': {
        types: ['Dragon', 'Fighting'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        weightkg: 207.5,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Kommo-o'
    },
    Litten: {
        types: ['Fire'],
        bs: { hp: 45, at: 65, df: 40, sa: 60, sd: 40, sp: 70 },
        weightkg: 4.3,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Lunala: {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 137, at: 113, df: 89, sa: 137, sd: 107, sp: 97 },
        weightkg: 120,
        abilities: { 0: 'Shadow Shield' },
        gender: 'N'
    },
    Lurantis: {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 18.5,
        otherFormes: ['Lurantis-Totem'],
        abilities: { 0: 'Leaf Guard' }
    },
    'Lurantis-Totem': {
        types: ['Grass'],
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        weightkg: 58,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Lurantis'
    },
    Lycanroc: {
        types: ['Rock'],
        bs: { hp: 75, at: 115, df: 65, sa: 55, sd: 65, sp: 112 },
        weightkg: 25,
        otherFormes: ['Lycanroc-Dusk', 'Lycanroc-Midnight'],
        abilities: { 0: 'Keen Eye' }
    },
    'Lycanroc-Dusk': {
        types: ['Rock'],
        bs: { hp: 75, at: 117, df: 65, sa: 55, sd: 65, sp: 110 },
        weightkg: 25,
        abilities: { 0: 'Tough Claws' },
        baseSpecies: 'Lycanroc'
    },
    'Lycanroc-Midnight': {
        types: ['Rock'],
        bs: { hp: 85, at: 115, df: 75, sa: 55, sd: 75, sp: 82 },
        weightkg: 25,
        baseSpecies: 'Lycanroc',
        abilities: { 0: 'Keen Eye' }
    },
    Magearna: {
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    Mareanie: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 53, df: 62, sa: 43, sd: 52, sp: 45 },
        weightkg: 8,
        nfe: true,
        abilities: { 0: 'Merciless' }
    },
    'Marowak-Alola': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 34,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Marowak'
    },
    'Marowak-Alola-Totem': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        weightkg: 98,
        abilities: { 0: 'Rock Head' },
        baseSpecies: 'Marowak'
    },
    Marshadow: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 90, at: 125, df: 80, sa: 90, sd: 90, sp: 125 },
        weightkg: 22.2,
        gender: 'N',
        abilities: { 0: 'Technician' }
    },
    Melmetal: {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 800,
        gender: 'N',
        abilities: { 0: 'Iron Fist' }
    },
    Meltan: {
        types: ['Steel'],
        bs: { hp: 46, at: 65, df: 65, sa: 55, sd: 35, sp: 34 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Magnet Pull' }
    },
    'Meowth-Alola': {
        types: ['Dark'],
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 90 },
        weightkg: 4.2,
        baseSpecies: 'Meowth',
        nfe: true,
        abilities: { 0: 'Pickup' }
    },
    Mimikyu: {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        otherFormes: ['Mimikyu-Busted', 'Mimikyu-Busted-Totem', 'Mimikyu-Totem'],
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Busted': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 0.7,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Busted-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    'Mimikyu-Totem': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        weightkg: 2.8,
        baseSpecies: 'Mimikyu',
        abilities: { 0: 'Disguise' }
    },
    Minior: {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 100, df: 60, sa: 100, sd: 60, sp: 120 },
        weightkg: 0.3,
        otherFormes: ['Minior-Meteor'],
        gender: 'N',
        abilities: { 0: 'Shields Down' }
    },
    'Minior-Meteor': {
        types: ['Rock', 'Flying'],
        bs: { hp: 60, at: 60, df: 100, sa: 60, sd: 100, sp: 60 },
        weightkg: 40,
        gender: 'N',
        baseSpecies: 'Minior',
        abilities: { 0: 'Shields Down' }
    },
    Morelull: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 40, at: 35, df: 55, sa: 65, sd: 75, sp: 15 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Illuminate' }
    },
    Mudbray: {
        types: ['Ground'],
        bs: { hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45 },
        weightkg: 110,
        nfe: true,
        abilities: { 0: 'Own Tempo' }
    },
    Mudsdale: {
        types: ['Ground'],
        bs: { hp: 100, at: 125, df: 100, sa: 55, sd: 85, sp: 35 },
        weightkg: 920,
        abilities: { 0: 'Own Tempo' }
    },
    'Muk-Alola': {
        types: ['Poison', 'Dark'],
        bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 },
        weightkg: 52,
        baseSpecies: 'Muk',
        abilities: { 0: 'Poison Touch' }
    },
    Mumbao: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 55, at: 30, df: 64, sa: 87, sd: 73, sp: 66 },
        weightkg: 83,
        nfe: true,
        abilities: { 0: 'Trace' }
    },
    Naganadel: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 73, at: 73, df: 73, sa: 127, sd: 73, sp: 121 },
        weightkg: 150,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Necrozma: {
        types: ['Psychic'],
        bs: { hp: 97, at: 107, df: 101, sa: 127, sd: 89, sp: 79 },
        weightkg: 230,
        abilities: { 0: 'Prism Armor' },
        otherFormes: ['Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra'],
        gender: 'N'
    },
    'Necrozma-Dawn-Wings': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 97, at: 113, df: 109, sa: 157, sd: 127, sp: 77 },
        weightkg: 350,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Dusk-Mane': {
        types: ['Psychic', 'Steel'],
        bs: { hp: 97, at: 157, df: 127, sa: 113, sd: 109, sp: 77 },
        weightkg: 460,
        abilities: { 0: 'Prism Armor' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    'Necrozma-Ultra': {
        types: ['Psychic', 'Dragon'],
        bs: { hp: 97, at: 167, df: 97, sa: 167, sd: 97, sp: 129 },
        weightkg: 230,
        abilities: { 0: 'Neuroforce' },
        baseSpecies: 'Necrozma',
        gender: 'N'
    },
    Nihilego: {
        types: ['Rock', 'Poison'],
        bs: { hp: 109, at: 53, df: 47, sa: 127, sd: 131, sp: 103 },
        weightkg: 55.5,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Ninetales-Alola': {
        types: ['Ice', 'Fairy'],
        bs: { hp: 73, at: 67, df: 75, sa: 81, sd: 100, sp: 109 },
        weightkg: 19.9,
        abilities: { 0: 'Snow Cloak' },
        baseSpecies: 'Ninetales'
    },
    Oranguru: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 60 },
        weightkg: 76,
        abilities: { 0: 'Inner Focus' }
    },
    Oricorio: {
        types: ['Fire', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        otherFormes: ['Oricorio-Pa\'u', 'Oricorio-Pom-Pom', 'Oricorio-Sensu']
    },
    'Oricorio-Pa\'u': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    'Oricorio-Pom-Pom': {
        types: ['Electric', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    'Oricorio-Sensu': {
        types: ['Ghost', 'Flying'],
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        weightkg: 3.4,
        abilities: { 0: 'Dancer' },
        baseSpecies: 'Oricorio'
    },
    Pajantom: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 84, at: 133, df: 71, sa: 51, sd: 111, sp: 101 },
        weightkg: 3.1,
        abilities: { 0: 'Comatose' }
    },
    Palossand: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 85, at: 75, df: 110, sa: 100, sd: 75, sp: 35 },
        weightkg: 250,
        abilities: { 0: 'Water Compaction' }
    },
    Passimian: {
        types: ['Fighting'],
        bs: { hp: 100, at: 120, df: 90, sa: 40, sd: 60, sp: 80 },
        weightkg: 82.8,
        abilities: { 0: 'Receiver' }
    },
    'Persian-Alola': {
        types: ['Dark'],
        bs: { hp: 65, at: 60, df: 60, sa: 75, sd: 65, sp: 115 },
        weightkg: 33,
        baseSpecies: 'Persian',
        abilities: { 0: 'Fur Coat' }
    },
    Pheromosa: {
        types: ['Bug', 'Fighting'],
        bs: { hp: 71, at: 137, df: 37, sa: 137, sd: 37, sp: 151 },
        weightkg: 25,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    'Pikachu-Alola': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Hoenn': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Kalos': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Original': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Partner': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Sinnoh': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Starter': {
        types: ['Electric'],
        bs: { hp: 45, at: 80, df: 50, sa: 75, sd: 60, sp: 120 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-Unova': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Pikipek: {
        types: ['Normal', 'Flying'],
        bs: { hp: 35, at: 75, df: 30, sa: 30, sd: 30, sp: 65 },
        weightkg: 1.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Poipole: {
        types: ['Poison'],
        bs: { hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73 },
        weightkg: 1.8,
        abilities: { 0: 'Beast Boost' },
        nfe: true,
        gender: 'N'
    },
    Popplio: {
        types: ['Water'],
        bs: { hp: 50, at: 54, df: 54, sa: 66, sd: 56, sp: 40 },
        weightkg: 7.5,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    Primarina: {
        types: ['Water', 'Fairy'],
        bs: { hp: 80, at: 74, df: 74, sa: 126, sd: 116, sp: 60 },
        weightkg: 44,
        abilities: { 0: 'Torrent' }
    },
    Pyukumuku: {
        types: ['Water'],
        bs: { hp: 55, at: 60, df: 130, sa: 30, sd: 130, sp: 5 },
        weightkg: 1.2,
        abilities: { 0: 'Innards Out' }
    },
    'Raichu-Alola': {
        types: ['Electric', 'Psychic'],
        bs: { hp: 60, at: 85, df: 50, sa: 95, sd: 85, sp: 110 },
        weightkg: 21,
        baseSpecies: 'Raichu',
        abilities: { 0: 'Surge Surfer' }
    },
    'Raticate-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 25.5,
        baseSpecies: 'Raticate',
        abilities: { 0: 'Gluttony' }
    },
    'Raticate-Alola-Totem': {
        types: ['Dark', 'Normal'],
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        weightkg: 105,
        abilities: { 0: 'Thick Fat' },
        baseSpecies: 'Raticate'
    },
    'Rattata-Alola': {
        types: ['Dark', 'Normal'],
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 },
        weightkg: 3.8,
        baseSpecies: 'Rattata',
        nfe: true,
        abilities: { 0: 'Gluttony' }
    },
    Ribombee: {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 0.5,
        otherFormes: ['Ribombee-Totem'],
        abilities: { 0: 'Honey Gather' }
    },
    'Ribombee-Totem': {
        types: ['Bug', 'Fairy'],
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        weightkg: 2,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Ribombee'
    },
    Rockruff: {
        types: ['Rock'],
        bs: { hp: 45, at: 65, df: 40, sa: 30, sd: 40, sp: 60 },
        weightkg: 9.2,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Rowlet: {
        types: ['Grass', 'Flying'],
        bs: { hp: 68, at: 55, df: 55, sa: 50, sd: 50, sp: 42 },
        weightkg: 1.5,
        nfe: true,
        abilities: { 0: 'Overgrow' }
    },
    Salandit: {
        types: ['Poison', 'Fire'],
        bs: { hp: 48, at: 44, df: 40, sa: 71, sd: 40, sp: 77 },
        weightkg: 4.8,
        nfe: true,
        abilities: { 0: 'Corrosion' }
    },
    Salazzle: {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 22.2,
        otherFormes: ['Salazzle-Totem'],
        abilities: { 0: 'Corrosion' }
    },
    'Salazzle-Totem': {
        types: ['Poison', 'Fire'],
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        weightkg: 81,
        abilities: { 0: 'Corrosion' },
        baseSpecies: 'Salazzle'
    },
    'Sandshrew-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 50, at: 75, df: 90, sa: 10, sd: 35, sp: 40 },
        weightkg: 40,
        baseSpecies: 'Sandshrew',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    'Sandslash-Alola': {
        types: ['Ice', 'Steel'],
        bs: { hp: 75, at: 100, df: 120, sa: 25, sd: 65, sp: 65 },
        weightkg: 55,
        baseSpecies: 'Sandslash',
        abilities: { 0: 'Snow Cloak' }
    },
    Sandygast: {
        types: ['Ghost', 'Ground'],
        bs: { hp: 55, at: 55, df: 80, sa: 70, sd: 45, sp: 15 },
        weightkg: 70,
        nfe: true,
        abilities: { 0: 'Water Compaction' }
    },
    Shiinotic: {
        types: ['Grass', 'Fairy'],
        bs: { hp: 60, at: 45, df: 80, sa: 90, sd: 100, sp: 30 },
        weightkg: 11.5,
        abilities: { 0: 'Illuminate' }
    },
    Silvally: {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        gender: 'N',
        otherFormes: ['Silvally-Bug', 'Silvally-Dark', 'Silvally-Dragon', 'Silvally-Electric', 'Silvally-Fairy', 'Silvally-Fighting', 'Silvally-Fire', 'Silvally-Flying', 'Silvally-Ghost', 'Silvally-Grass', 'Silvally-Ground', 'Silvally-Ice', 'Silvally-Poison', 'Silvally-Psychic', 'Silvally-Rock', 'Silvally-Steel', 'Silvally-Water',]
    },
    'Silvally-Bug': {
        types: ['Bug'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Dark': {
        types: ['Dark'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Dragon': {
        types: ['Dragon'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Electric': {
        types: ['Electric'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fairy': {
        types: ['Fairy'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fighting': {
        types: ['Fighting'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Fire': {
        types: ['Fire'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Flying': {
        types: ['Flying'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ghost': {
        types: ['Ghost'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Grass': {
        types: ['Grass'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ground': {
        types: ['Ground'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Ice': {
        types: ['Ice'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Poison': {
        types: ['Poison'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Psychic': {
        types: ['Psychic'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Rock': {
        types: ['Rock'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Steel': {
        types: ['Steel'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    'Silvally-Water': {
        types: ['Water'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        weightkg: 100.5,
        abilities: { 0: 'RKS System' },
        baseSpecies: 'Silvally',
        gender: 'N'
    },
    Smogecko: {
        types: ['Fire'],
        bs: { hp: 48, at: 66, df: 43, sa: 58, sd: 48, sp: 56 },
        weightkg: 8.5,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smoguana: {
        types: ['Fire', 'Ground'],
        bs: { hp: 68, at: 86, df: 53, sa: 68, sd: 68, sp: 76 },
        weightkg: 22.2,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Smokomodo: {
        types: ['Fire', 'Ground'],
        bs: { hp: 88, at: 116, df: 67, sa: 88, sd: 78, sp: 97 },
        weightkg: 205,
        abilities: { 0: 'Blaze' }
    },
    Snaelstrom: {
        types: ['Water', 'Bug'],
        bs: { hp: 91, at: 94, df: 110, sa: 80, sd: 97, sp: 63 },
        weightkg: 120,
        abilities: { 0: 'Torrent' }
    },
    Solgaleo: {
        types: ['Psychic', 'Steel'],
        bs: { hp: 137, at: 137, df: 107, sa: 113, sd: 89, sp: 97 },
        weightkg: 230,
        abilities: { 0: 'Full Metal Body' },
        gender: 'N'
    },
    Stakataka: {
        types: ['Rock', 'Steel'],
        bs: { hp: 61, at: 131, df: 211, sa: 53, sd: 101, sp: 13 },
        weightkg: 820,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Steenee: {
        types: ['Grass'],
        bs: { hp: 52, at: 40, df: 48, sa: 40, sd: 48, sp: 62 },
        weightkg: 8.2,
        nfe: true,
        abilities: { 0: 'Leaf Guard' }
    },
    Stufful: {
        types: ['Normal', 'Fighting'],
        bs: { hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50 },
        weightkg: 6.8,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    Swirlpool: {
        types: ['Water'],
        bs: { hp: 61, at: 49, df: 70, sa: 50, sd: 62, sp: 28 },
        weightkg: 7,
        nfe: true,
        abilities: { 0: 'Torrent' }
    },
    'Tapu Bulu': {
        types: ['Grass', 'Fairy'],
        bs: { hp: 70, at: 130, df: 115, sa: 85, sd: 95, sp: 75 },
        weightkg: 45.5,
        abilities: { 0: 'Grassy Surge' },
        gender: 'N'
    },
    'Tapu Fini': {
        types: ['Water', 'Fairy'],
        bs: { hp: 70, at: 75, df: 115, sa: 95, sd: 130, sp: 85 },
        weightkg: 21.2,
        abilities: { 0: 'Misty Surge' },
        gender: 'N'
    },
    'Tapu Koko': {
        types: ['Electric', 'Fairy'],
        bs: { hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130 },
        weightkg: 20.5,
        abilities: { 0: 'Electric Surge' },
        gender: 'N'
    },
    'Tapu Lele': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 70, at: 85, df: 75, sa: 130, sd: 115, sp: 95 },
        weightkg: 18.6,
        abilities: { 0: 'Psychic Surge' },
        gender: 'N'
    },
    Togedemaru: {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 3.3,
        abilities: { 0: 'Iron Barbs' },
        otherFormes: ['Togedemaru-Totem']
    },
    'Togedemaru-Totem': {
        types: ['Electric', 'Steel'],
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        weightkg: 13,
        abilities: { 0: 'Sturdy' },
        baseSpecies: 'Togedemaru'
    },
    Torracat: {
        types: ['Fire'],
        bs: { hp: 65, at: 85, df: 50, sa: 80, sd: 50, sp: 90 },
        weightkg: 25,
        nfe: true,
        abilities: { 0: 'Blaze' }
    },
    Toucannon: {
        types: ['Normal', 'Flying'],
        bs: { hp: 80, at: 120, df: 75, sa: 75, sd: 75, sp: 60 },
        weightkg: 26,
        abilities: { 0: 'Keen Eye' }
    },
    Toxapex: {
        types: ['Poison', 'Water'],
        bs: { hp: 50, at: 63, df: 152, sa: 53, sd: 142, sp: 35 },
        weightkg: 14.5,
        abilities: { 0: 'Merciless' }
    },
    Trumbeak: {
        types: ['Normal', 'Flying'],
        bs: { hp: 55, at: 85, df: 50, sa: 40, sd: 50, sp: 75 },
        weightkg: 14.8,
        nfe: true,
        abilities: { 0: 'Keen Eye' }
    },
    Tsareena: {
        types: ['Grass'],
        bs: { hp: 72, at: 120, df: 98, sa: 50, sd: 98, sp: 72 },
        weightkg: 21.4,
        abilities: { 0: 'Leaf Guard' }
    },
    Turtonator: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 60, at: 78, df: 135, sa: 91, sd: 85, sp: 36 },
        weightkg: 212,
        abilities: { 0: 'Shell Armor' }
    },
    'Type: Null': {
        types: ['Normal'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 59 },
        weightkg: 120.5,
        abilities: { 0: 'Battle Armor' },
        nfe: true,
        gender: 'N'
    },
    Vikavolt: {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Levitate' },
        otherFormes: ['Vikavolt-Totem']
    },
    'Vikavolt-Totem': {
        types: ['Bug', 'Electric'],
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        weightkg: 147.5,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Vikavolt'
    },
    'Vulpix-Alola': {
        types: ['Ice'],
        bs: { hp: 38, at: 41, df: 40, sa: 50, sd: 65, sp: 65 },
        weightkg: 9.9,
        baseSpecies: 'Vulpix',
        nfe: true,
        abilities: { 0: 'Snow Cloak' }
    },
    Wimpod: {
        types: ['Bug', 'Water'],
        bs: { hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80 },
        weightkg: 12,
        abilities: { 0: 'Wimp Out' },
        nfe: true
    },
    Wishiwashi: {
        types: ['Water'],
        bs: { hp: 45, at: 20, df: 20, sa: 25, sd: 25, sp: 40 },
        weightkg: 0.3,
        otherFormes: ['Wishiwashi-School'],
        abilities: { 0: 'Schooling' }
    },
    'Wishiwashi-School': {
        types: ['Water'],
        bs: { hp: 45, at: 140, df: 130, sa: 140, sd: 135, sp: 30 },
        weightkg: 78.6,
        baseSpecies: 'Wishiwashi',
        abilities: { 0: 'Schooling' }
    },
    Xurkitree: {
        types: ['Electric'],
        bs: { hp: 83, at: 89, df: 71, sa: 173, sd: 71, sp: 83 },
        weightkg: 100,
        abilities: { 0: 'Beast Boost' },
        gender: 'N'
    },
    Yungoos: {
        types: ['Normal'],
        bs: { hp: 48, at: 70, df: 30, sa: 30, sd: 30, sp: 45 },
        weightkg: 6,
        nfe: true,
        abilities: { 0: 'Stakeout' }
    },
    Zeraora: {
        types: ['Electric'],
        bs: { hp: 88, at: 112, df: 75, sa: 102, sd: 80, sp: 143 },
        weightkg: 44.5,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    'Zygarde-10%': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 },
        weightkg: 33.5,
        abilities: { 0: 'Aura Break' },
        baseSpecies: 'Zygarde',
        gender: 'N'
    },
    'Zygarde-Complete': {
        types: ['Dragon', 'Ground'],
        bs: { hp: 216, at: 100, df: 121, sa: 91, sd: 95, sp: 85 },
        weightkg: 610,
        abilities: { 0: 'Power Construct' },
        baseSpecies: 'Zygarde',
        gender: 'N'
    }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
delete SM['Pikachu-Cosplay'];
delete SM['Pikachu-Rock-Star'];
delete SM['Pikachu-Belle'];
delete SM['Pikachu-PhD'];
delete SM['Pikachu-Pop-Star'];
delete SM['Pikachu-Libre'];
var SS_PATCH = {
    'Aegislash-Blade': { bs: { at: 140, sa: 140 } },
    'Aegislash-Both': { bs: { at: 140, df: 140, sa: 140, sd: 140 } },
    'Aegislash-Shield': { bs: { df: 140, sd: 140 } },
    Articuno: { otherFormes: ['Articuno-Galarian'] },
    Blastoise: { otherFormes: ['Blastoise-Gmax', 'Blastoise-Mega'] },
    Butterfree: { otherFormes: ['Butterfree-Gmax'] },
    Charizard: { otherFormes: ['Charizard-Gmax', 'Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Corsola: { otherFormes: ['Corsola-Galarian'] },
    Darmanitan: {
        otherFormes: ['Darmanitan-Galarian', 'Darmanitan-Galarian-Zen', 'Darmanitan-Zen']
    },
    Darumaka: { otherFormes: ['Darumaka-Galarian'] },
    Eevee: { otherFormes: ['Eevee-Gmax'] },
    Equilibra: { bs: { sa: 133 } },
    'Farfetch\u2019d': { otherFormes: ['Farfetch\u2019d-Galarian'] },
    Garbodor: { otherFormes: ['Garbodor-Gmax'] },
    Gengar: { otherFormes: ['Gengar-Gmax', 'Gengar-Mega'] },
    Kingler: { otherFormes: ['Kingler-Gmax'] },
    Lapras: { otherFormes: ['Lapras-Gmax'] },
    Linoone: { otherFormes: ['Linoone-Galarian'] },
    Machamp: { otherFormes: ['Machamp-Gmax'] },
    Melmetal: { otherFormes: ['Melmetal-Gmax'] },
    Meowth: { otherFormes: ['Meowth-Alola', 'Meowth-Galarian', 'Meowth-Gmax'] },
    Moltres: { otherFormes: ['Moltres-Galarian'] },
    'Mr. Mime': { otherFormes: ['Mr. Mime-Galarian'] },
    Pikachu: {
        otherFormes: ['Pikachu-Alola', 'Pikachu-Gmax', 'Pikachu-Hoenn', 'Pikachu-Kalos', 'Pikachu-Original', 'Pikachu-Partner', 'Pikachu-Sinnoh', 'Pikachu-Unova', 'Pikachu-World',]
    },
    Ponyta: { otherFormes: ['Ponyta-Galarian'] },
    Pyroak: { bs: { sa: 70, sd: 65 } },
    Rapidash: { otherFormes: ['Rapidash-Galarian'] },
    Slowbro: { otherFormes: ['Slowbro-Galarian', 'Slowbro-Mega'] },
    Slowking: { otherFormes: ['Slowking-Galarian'] },
    Slowpoke: { otherFormes: ['Slowpoke-Galarian'] },
    Snorlax: { otherFormes: ['Snorlax-Gmax'] },
    Stunfisk: { otherFormes: ['Stunfisk-Galarian'] },
    Venusaur: { otherFormes: ['Venusaur-Gmax', 'Venusaur-Mega'] },
    Voodoom: { bs: { sa: 130 } },
    Weezing: { otherFormes: ['Weezing-Galarian'] },
    Yamask: { otherFormes: ['Yamask-Galarian'] },
    Zapdos: { otherFormes: ['Zapdos-Galarian'] },
    Zigzagoon: { otherFormes: ['Zigzagoon-Galarian'] },
    Alcremie: {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0.5,
        abilities: { 0: 'Sweet Veil' },
        otherFormes: ['Alcremie-Gmax']
    },
    'Alcremie-Gmax': {
        types: ['Fairy'],
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        weightkg: 0,
        abilities: { 0: 'Sweet Veil' },
        baseSpecies: 'Alcremie'
    },
    Appletun: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 13,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Appletun-Gmax']
    },
    'Appletun-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Appletun'
    },
    Applin: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 40, at: 40, df: 80, sa: 40, sd: 40, sp: 20 },
        weightkg: 0.5,
        abilities: { 0: 'Ripen' },
        nfe: true
    },
    Arctovish: {
        types: ['Water', 'Ice'],
        bs: { hp: 90, at: 90, df: 100, sa: 80, sd: 90, sp: 55 },
        weightkg: 175,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Arctozolt: {
        types: ['Electric', 'Ice'],
        bs: { hp: 90, at: 100, df: 90, sa: 90, sd: 80, sp: 55 },
        weightkg: 150,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Arrokuda: {
        types: ['Water'],
        bs: { hp: 41, at: 63, df: 40, sa: 40, sd: 30, sp: 66 },
        weightkg: 1,
        abilities: { 0: 'Swift Swim' },
        nfe: true
    },
    'Articuno-Galarian': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 90, at: 85, df: 85, sa: 125, sd: 100, sp: 95 },
        weightkg: 50.9,
        abilities: { 0: 'Competitive' },
        gender: 'N',
        baseSpecies: 'Articuno'
    },
    Astrolotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 108, at: 108, df: 74, sa: 92, sd: 64, sp: 114 },
        weightkg: 50,
        abilities: { 0: 'Regenerator' }
    },
    Barraskewda: {
        types: ['Water'],
        bs: { hp: 61, at: 123, df: 60, sa: 60, sd: 50, sp: 136 },
        weightkg: 30,
        abilities: { 0: 'Swift Swim' }
    },
    'Blastoise-Gmax': {
        types: ['Water'],
        bs: { hp: 79, at: 83, df: 100, sa: 85, sd: 105, sp: 78 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Blastoise'
    },
    Blipbug: {
        types: ['Bug'],
        bs: { hp: 25, at: 20, df: 20, sa: 25, sd: 45, sp: 45 },
        weightkg: 8,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Boltund: {
        types: ['Electric'],
        bs: { hp: 69, at: 90, df: 60, sa: 90, sd: 60, sp: 121 },
        weightkg: 34,
        abilities: { 0: 'Strong Jaw' }
    },
    'Butterfree-Gmax': {
        types: ['Bug', 'Flying'],
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Compound Eyes' },
        baseSpecies: 'Butterfree'
    },
    Calyrex: {
        types: ['Psychic', 'Grass'],
        bs: { hp: 100, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        weightkg: 7.7,
        abilities: { 0: 'Unnerve' },
        gender: 'N',
        otherFormes: ['Calyrex-Ice', 'Calyrex-Shadow']
    },
    'Calyrex-Ice': {
        types: ['Psychic', 'Ice'],
        bs: { hp: 100, at: 165, df: 150, sa: 85, sd: 130, sp: 50 },
        weightkg: 809.1,
        abilities: { 0: 'As One (Glastrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    'Calyrex-Shadow': {
        types: ['Psychic', 'Ghost'],
        bs: { hp: 100, at: 85, df: 80, sa: 165, sd: 100, sp: 150 },
        weightkg: 53.6,
        abilities: { 0: 'As One (Spectrier)' },
        gender: 'N',
        baseSpecies: 'Calyrex'
    },
    Carkol: {
        types: ['Rock', 'Fire'],
        bs: { hp: 80, at: 60, df: 90, sa: 60, sd: 70, sp: 50 },
        weightkg: 78,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Centiskorch: {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Flash Fire' },
        otherFormes: ['Centiskorch-Gmax']
    },
    'Centiskorch-Gmax': {
        types: ['Fire', 'Bug'],
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        weightkg: 0,
        abilities: { 0: 'Flash Fire' },
        baseSpecies: 'Centiskorch'
    },
    'Charizard-Gmax': {
        types: ['Fire', 'Flying'],
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Charizard'
    },
    Chewtle: {
        types: ['Water'],
        bs: { hp: 50, at: 64, df: 50, sa: 38, sd: 38, sp: 44 },
        weightkg: 8.5,
        abilities: { 0: 'Strong Jaw' },
        nfe: true
    },
    Chromera: {
        types: ['Dark', 'Normal'],
        bs: { hp: 85, at: 85, df: 115, sa: 115, sd: 100, sp: 100 },
        weightkg: 215,
        abilities: { 0: 'Color Change' },
        gender: 'N'
    },
    Cinderace: {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 33,
        abilities: { 0: 'Blaze' },
        otherFormes: ['Cinderace-Gmax']
    },
    'Cinderace-Gmax': {
        types: ['Fire'],
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        weightkg: 0,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Cinderace'
    },
    Clobbopus: {
        types: ['Fighting'],
        bs: { hp: 50, at: 68, df: 60, sa: 50, sd: 50, sp: 32 },
        weightkg: 4,
        abilities: { 0: 'Limber' },
        nfe: true
    },
    Coalossal: {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 310.5,
        abilities: { 0: 'Steam Engine' },
        otherFormes: ['Coalossal-Gmax']
    },
    'Coalossal-Gmax': {
        types: ['Rock', 'Fire'],
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Steam Engine' },
        baseSpecies: 'Coalossal'
    },
    Copperajah: {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 650,
        abilities: { 0: 'Sheer Force' },
        otherFormes: ['Copperajah-Gmax']
    },
    'Copperajah-Gmax': {
        types: ['Steel'],
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Sheer Force' },
        baseSpecies: 'Copperajah'
    },
    'Corsola-Galarian': {
        types: ['Ghost'],
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 },
        weightkg: 0.5,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Corsola'
    },
    Corviknight: {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 75,
        abilities: { 0: 'Pressure' },
        otherFormes: ['Corviknight-Gmax']
    },
    'Corviknight-Gmax': {
        types: ['Flying', 'Steel'],
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Corviknight'
    },
    Corvisquire: {
        types: ['Flying'],
        bs: { hp: 68, at: 67, df: 55, sa: 43, sd: 55, sp: 77 },
        weightkg: 16,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Cramorant: {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        otherFormes: ['Cramorant-Gorging', 'Cramorant-Gulping']
    },
    'Cramorant-Gorging': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    'Cramorant-Gulping': {
        types: ['Flying', 'Water'],
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        weightkg: 18,
        abilities: { 0: 'Gulp Missile' },
        baseSpecies: 'Cramorant'
    },
    Cufant: {
        types: ['Steel'],
        bs: { hp: 72, at: 80, df: 49, sa: 40, sd: 49, sp: 40 },
        weightkg: 100,
        abilities: { 0: 'Sheer Force' },
        nfe: true
    },
    Cursola: {
        types: ['Ghost'],
        bs: { hp: 60, at: 95, df: 50, sa: 145, sd: 130, sp: 30 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' }
    },
    'Darmanitan-Galarian': {
        types: ['Ice'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        weightkg: 120,
        abilities: { 0: 'Gorilla Tactics' },
        baseSpecies: 'Darmanitan'
    },
    'Darmanitan-Galarian-Zen': {
        types: ['Ice', 'Fire'],
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 },
        weightkg: 120,
        abilities: { 0: 'Zen Mode' },
        baseSpecies: 'Darmanitan'
    },
    'Darumaka-Galarian': {
        types: ['Ice'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        weightkg: 40,
        abilities: { 0: 'Hustle' },
        nfe: true,
        baseSpecies: 'Darumaka'
    },
    Dottler: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 50, at: 35, df: 80, sa: 50, sd: 90, sp: 30 },
        weightkg: 19.5,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Dracovish: {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 90, df: 100, sa: 70, sd: 80, sp: 75 },
        weightkg: 215,
        abilities: { 0: 'Water Absorb' },
        gender: 'N'
    },
    Dracozolt: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 90, at: 100, df: 90, sa: 80, sd: 70, sp: 75 },
        weightkg: 190,
        abilities: { 0: 'Volt Absorb' },
        gender: 'N'
    },
    Dragapult: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 88, at: 120, df: 75, sa: 100, sd: 75, sp: 142 },
        weightkg: 50,
        abilities: { 0: 'Clear Body' }
    },
    Drakloak: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 68, at: 80, df: 50, sa: 60, sd: 50, sp: 102 },
        weightkg: 11,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drednaw: {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 115.5,
        abilities: { 0: 'Strong Jaw' },
        otherFormes: ['Drednaw-Gmax']
    },
    'Drednaw-Gmax': {
        types: ['Water', 'Rock'],
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        weightkg: 0,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Drednaw'
    },
    Dreepy: {
        types: ['Dragon', 'Ghost'],
        bs: { hp: 28, at: 60, df: 30, sa: 40, sd: 30, sp: 82 },
        weightkg: 2,
        abilities: { 0: 'Clear Body' },
        nfe: true
    },
    Drizzile: {
        types: ['Water'],
        bs: { hp: 65, at: 60, df: 55, sa: 95, sd: 55, sp: 90 },
        weightkg: 11.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Dubwool: {
        types: ['Normal'],
        bs: { hp: 72, at: 80, df: 100, sa: 60, sd: 90, sp: 88 },
        weightkg: 43,
        abilities: { 0: 'Fluffy' }
    },
    Duraludon: {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 40,
        abilities: { 0: 'Light Metal' },
        otherFormes: ['Duraludon-Gmax']
    },
    'Duraludon-Gmax': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Light Metal' },
        baseSpecies: 'Duraludon'
    },
    'Eevee-Gmax': {
        types: ['Normal'],
        bs: { hp: 55, at: 55, df: 50, sa: 45, sd: 65, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Eevee'
    },
    Eiscue: {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 110, sa: 65, sd: 90, sp: 50 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        otherFormes: ['Eiscue-Noice']
    },
    'Eiscue-Noice': {
        types: ['Ice'],
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 },
        weightkg: 89,
        abilities: { 0: 'Ice Face' },
        baseSpecies: 'Eiscue'
    },
    Eldegoss: {
        types: ['Grass'],
        bs: { hp: 60, at: 50, df: 90, sa: 80, sd: 120, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Cotton Down' }
    },
    Eternatus: {
        types: ['Poison', 'Dragon'],
        bs: { hp: 140, at: 85, df: 95, sa: 145, sd: 95, sp: 130 },
        weightkg: 950,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        otherFormes: ['Eternatus-Eternamax']
    },
    'Eternatus-Eternamax': {
        types: ['Poison', 'Dragon'],
        bs: { hp: 255, at: 115, df: 250, sa: 125, sd: 250, sp: 130 },
        weightkg: 0,
        abilities: { 0: 'Pressure' },
        gender: 'N',
        baseSpecies: 'Eternatus'
    },
    Falinks: {
        types: ['Fighting'],
        bs: { hp: 65, at: 100, df: 100, sa: 70, sd: 60, sp: 75 },
        weightkg: 62,
        abilities: { 0: 'Battle Armor' },
        gender: 'N'
    },
    'Farfetch\u2019d-Galarian': {
        types: ['Fighting'],
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 },
        weightkg: 15,
        abilities: { 0: 'Steadfast' },
        nfe: true,
        baseSpecies: 'Farfetch\u2019d'
    },
    Flapple: {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 1,
        abilities: { 0: 'Ripen' },
        otherFormes: ['Flapple-Gmax']
    },
    'Flapple-Gmax': {
        types: ['Grass', 'Dragon'],
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        weightkg: 0,
        abilities: { 0: 'Ripen' },
        baseSpecies: 'Flapple'
    },
    Frosmoth: {
        types: ['Ice', 'Bug'],
        bs: { hp: 70, at: 65, df: 60, sa: 125, sd: 90, sp: 65 },
        weightkg: 42,
        abilities: { 0: 'Shield Dust' }
    },
    'Garbodor-Gmax': {
        types: ['Poison'],
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Stench' },
        baseSpecies: 'Garbodor'
    },
    'Gengar-Gmax': {
        types: ['Ghost', 'Poison'],
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 110 },
        weightkg: 0,
        abilities: { 0: 'Cursed Body' },
        baseSpecies: 'Gengar'
    },
    Glastrier: {
        types: ['Ice'],
        bs: { hp: 100, at: 145, df: 130, sa: 65, sd: 110, sp: 30 },
        weightkg: 800,
        abilities: { 0: 'Chilling Neigh' },
        gender: 'N'
    },
    Gossifleur: {
        types: ['Grass'],
        bs: { hp: 40, at: 40, df: 60, sa: 40, sd: 60, sp: 10 },
        weightkg: 2.2,
        abilities: { 0: 'Cotton Down' },
        nfe: true
    },
    Grapploct: {
        types: ['Fighting'],
        bs: { hp: 80, at: 118, df: 90, sa: 70, sd: 80, sp: 42 },
        weightkg: 39,
        abilities: { 0: 'Limber' }
    },
    Greedent: {
        types: ['Normal'],
        bs: { hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 20 },
        weightkg: 6,
        abilities: { 0: 'Cheek Pouch' }
    },
    Grimmsnarl: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 61,
        abilities: { 0: 'Prankster' },
        otherFormes: ['Grimmsnarl-Gmax']
    },
    'Grimmsnarl-Gmax': {
        types: ['Dark', 'Fairy'],
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Prankster' },
        baseSpecies: 'Grimmsnarl'
    },
    Grookey: {
        types: ['Grass'],
        bs: { hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65 },
        weightkg: 5,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Hatenna: {
        types: ['Psychic'],
        bs: { hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39 },
        weightkg: 3.4,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Hatterene: {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 5.1,
        abilities: { 0: 'Healer' },
        otherFormes: ['Hatterene-Gmax']
    },
    'Hatterene-Gmax': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        weightkg: 0,
        abilities: { 0: 'Healer' },
        baseSpecies: 'Hatterene'
    },
    Hattrem: {
        types: ['Psychic'],
        bs: { hp: 57, at: 40, df: 65, sa: 86, sd: 73, sp: 49 },
        weightkg: 4.8,
        abilities: { 0: 'Healer' },
        nfe: true
    },
    Impidimp: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 45, at: 45, df: 30, sa: 55, sd: 40, sp: 50 },
        weightkg: 5.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Indeedee: {
        types: ['Psychic', 'Normal'],
        bs: { hp: 60, at: 65, df: 55, sa: 105, sd: 95, sp: 95 },
        weightkg: 28,
        abilities: { 0: 'Inner Focus' },
        otherFormes: ['Indeedee-F']
    },
    'Indeedee-F': {
        types: ['Psychic', 'Normal'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 },
        weightkg: 28,
        abilities: { 0: 'Own Tempo' },
        baseSpecies: 'Indeedee'
    },
    Inteleon: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 45.2,
        abilities: { 0: 'Torrent' },
        otherFormes: ['Inteleon-Gmax']
    },
    'Inteleon-Gmax': {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        weightkg: 0,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Inteleon'
    },
    'Kingler-Gmax': {
        types: ['Water'],
        bs: { hp: 55, at: 130, df: 115, sa: 50, sd: 50, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Hyper Cutter' },
        baseSpecies: 'Kingler'
    },
    'Kubfu': {
        types: ['Fighting'],
        bs: { hp: 60, at: 90, df: 60, sa: 53, sd: 50, sp: 72 },
        weightkg: 12,
        nfe: true,
        abilities: { 0: 'Inner Focus' }
    },
    'Lapras-Gmax': {
        types: ['Water', 'Ice'],
        bs: { hp: 130, at: 85, df: 80, sa: 85, sd: 95, sp: 60 },
        weightkg: 0,
        abilities: { 0: 'Water Absorb' },
        baseSpecies: 'Lapras'
    },
    'Linoone-Galarian': {
        types: ['Dark', 'Normal'],
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        weightkg: 32.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Linoone'
    },
    Magearna: { otherFormes: ['Magearna-Original'] },
    'Magearna-Original': {
        baseSpecies: 'Magearna',
        types: ['Steel', 'Fairy'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        weightkg: 80.5,
        gender: 'N',
        abilities: { 0: 'Soul-Heart' }
    },
    'Machamp-Gmax': {
        types: ['Fighting'],
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        weightkg: 0,
        abilities: { 0: 'Guts' },
        baseSpecies: 'Machamp'
    },
    'Melmetal-Gmax': {
        types: ['Steel'],
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        weightkg: 0,
        abilities: { 0: 'Iron Fist' },
        baseSpecies: 'Melmetal',
        gender: 'N'
    },
    'Meowth-Galarian': {
        types: ['Steel'],
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 },
        weightkg: 7.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Meowth'
    },
    'Meowth-Gmax': {
        types: ['Normal'],
        bs: { hp: 40, at: 45, df: 35, sa: 40, sd: 40, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Pickup' },
        baseSpecies: 'Meowth'
    },
    Miasmaw: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 85, at: 135, df: 60, sa: 88, sd: 105, sp: 99 },
        weightkg: 57,
        abilities: { 0: 'Neutralizing Gas' }
    },
    Miasmite: {
        types: ['Bug', 'Dragon'],
        bs: { hp: 40, at: 85, df: 60, sa: 52, sd: 52, sp: 44 },
        weightkg: 10.1,
        abilities: { 0: 'Neutralizing Gas' },
        nfe: true
    },
    Milcery: {
        types: ['Fairy'],
        bs: { hp: 45, at: 40, df: 40, sa: 50, sd: 61, sp: 34 },
        weightkg: 0.3,
        abilities: { 0: 'Sweet Veil' },
        nfe: true
    },
    'Moltres-Galarian': {
        types: ['Dark', 'Flying'],
        bs: { hp: 90, at: 85, df: 90, sa: 100, sd: 125, sp: 90 },
        weightkg: 66,
        abilities: { 0: 'Berserk' },
        gender: 'N',
        baseSpecies: 'Moltres'
    },
    Morgrem: {
        types: ['Dark', 'Fairy'],
        bs: { hp: 65, at: 60, df: 45, sa: 75, sd: 55, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Prankster' },
        nfe: true
    },
    Morpeko: {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        otherFormes: ['Morpeko-Hangry']
    },
    'Morpeko-Hangry': {
        types: ['Electric', 'Dark'],
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        weightkg: 3,
        abilities: { 0: 'Hunger Switch' },
        baseSpecies: 'Morpeko'
    },
    'Mr. Mime-Galarian': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 },
        weightkg: 56.8,
        abilities: { 0: 'Vital Spirit' },
        nfe: true,
        baseSpecies: 'Mr. Mime'
    },
    'Mr. Rime': {
        types: ['Ice', 'Psychic'],
        bs: { hp: 80, at: 85, df: 75, sa: 110, sd: 100, sp: 70 },
        weightkg: 58.2,
        abilities: { 0: 'Tangled Feet' }
    },
    Nickit: {
        types: ['Dark'],
        bs: { hp: 40, at: 28, df: 28, sa: 47, sd: 52, sp: 50 },
        weightkg: 8.9,
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Obstagoon: {
        types: ['Dark', 'Normal'],
        bs: { hp: 93, at: 90, df: 101, sa: 60, sd: 81, sp: 95 },
        weightkg: 46,
        abilities: { 0: 'Reckless' }
    },
    Orbeetle: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 40.8,
        abilities: { 0: 'Swarm' },
        otherFormes: ['Orbeetle-Gmax']
    },
    'Orbeetle-Gmax': {
        types: ['Bug', 'Psychic'],
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Swarm' },
        baseSpecies: 'Orbeetle'
    },
    Perrserker: {
        types: ['Steel'],
        bs: { hp: 70, at: 110, df: 100, sa: 50, sd: 60, sp: 50 },
        weightkg: 28,
        abilities: { 0: 'Battle Armor' }
    },
    'Pikachu-Gmax': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 0,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    'Pikachu-World': {
        types: ['Electric'],
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Static' },
        baseSpecies: 'Pikachu'
    },
    Pincurchin: {
        types: ['Electric'],
        bs: { hp: 48, at: 101, df: 95, sa: 91, sd: 85, sp: 15 },
        weightkg: 1,
        abilities: { 0: 'Lightning Rod' }
    },
    Polteageist: {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        otherFormes: ['Polteageist-Antique'],
        gender: 'N'
    },
    'Polteageist-Antique': {
        types: ['Ghost'],
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        weightkg: 0.4,
        abilities: { 0: 'Weak Armor' },
        baseSpecies: 'Polteageist',
        gender: 'N'
    },
    'Ponyta-Galarian': {
        types: ['Psychic'],
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        weightkg: 24,
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Ponyta'
    },
    Raboot: {
        types: ['Fire'],
        bs: { hp: 65, at: 86, df: 60, sa: 55, sd: 60, sp: 94 },
        weightkg: 9,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    'Rapidash-Galarian': {
        types: ['Psychic', 'Fairy'],
        bs: { hp: 65, at: 100, df: 70, sa: 80, sd: 80, sp: 105 },
        weightkg: 80,
        abilities: { 0: 'Run Away' },
        baseSpecies: 'Rapidash'
    },
    Regidrago: {
        types: ['Dragon'],
        bs: { hp: 200, at: 100, df: 50, sa: 100, sd: 50, sp: 80 },
        weightkg: 200,
        abilities: { 0: 'Dragon\'s Maw' },
        gender: 'N'
    },
    Regieleki: {
        types: ['Electric'],
        bs: { hp: 80, at: 100, df: 50, sa: 100, sd: 50, sp: 200 },
        weightkg: 145,
        abilities: { 0: 'Transistor' },
        gender: 'N'
    },
    Rillaboom: {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 90,
        abilities: { 0: 'Overgrow' },
        otherFormes: ['Rillaboom-Gmax']
    },
    'Rillaboom-Gmax': {
        types: ['Grass'],
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Rillaboom'
    },
    Rolycoly: {
        types: ['Rock'],
        bs: { hp: 30, at: 40, df: 50, sa: 40, sd: 50, sp: 30 },
        weightkg: 12,
        abilities: { 0: 'Steam Engine' },
        nfe: true
    },
    Rookidee: {
        types: ['Flying'],
        bs: { hp: 38, at: 47, df: 35, sa: 33, sd: 35, sp: 57 },
        weightkg: 1.8,
        abilities: { 0: 'Keen Eye' },
        nfe: true
    },
    Runerigus: {
        types: ['Ground', 'Ghost'],
        bs: { hp: 58, at: 95, df: 145, sa: 50, sd: 105, sp: 30 },
        weightkg: 66.6,
        abilities: { 0: 'Wandering Spirit' }
    },
    Saharaja: {
        types: ['Ground'],
        bs: { hp: 70, at: 112, df: 105, sa: 65, sd: 123, sp: 78 },
        weightkg: 303.9,
        abilities: { 0: 'Water Absorb' }
    },
    Saharascal: {
        types: ['Ground'],
        bs: { hp: 50, at: 80, df: 65, sa: 45, sd: 90, sp: 70 },
        weightkg: 48,
        abilities: { 0: 'Water Absorb' },
        nfe: true
    },
    Sandaconda: {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 65.5,
        abilities: { 0: 'Sand Spit' },
        otherFormes: ['Sandaconda-Gmax']
    },
    'Sandaconda-Gmax': {
        types: ['Ground'],
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        weightkg: 0,
        abilities: { 0: 'Sand Spit' },
        baseSpecies: 'Sandaconda'
    },
    Scorbunny: {
        types: ['Fire'],
        bs: { hp: 50, at: 71, df: 40, sa: 40, sd: 40, sp: 69 },
        weightkg: 4.5,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Silicobra: {
        types: ['Ground'],
        bs: { hp: 52, at: 57, df: 75, sa: 35, sd: 50, sp: 46 },
        weightkg: 7.6,
        abilities: { 0: 'Sand Spit' },
        nfe: true
    },
    Sinistea: {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        otherFormes: ['Sinistea-Antique'],
        gender: 'N'
    },
    'Sinistea-Antique': {
        types: ['Ghost'],
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        weightkg: 0.2,
        abilities: { 0: 'Weak Armor' },
        nfe: true,
        baseSpecies: 'Sinistea',
        gender: 'N'
    },
    'Sirfetch\u2019d': {
        types: ['Fighting'],
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 65 },
        weightkg: 117,
        abilities: { 0: 'Steadfast' }
    },
    Sizzlipede: {
        types: ['Fire', 'Bug'],
        bs: { hp: 50, at: 65, df: 45, sa: 50, sd: 50, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    Skwovet: {
        types: ['Normal'],
        bs: { hp: 70, at: 55, df: 55, sa: 35, sd: 35, sp: 25 },
        weightkg: 2.5,
        abilities: { 0: 'Cheek Pouch' },
        nfe: true
    },
    'Slowbro-Galarian': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 100, df: 95, sa: 100, sd: 70, sp: 30 },
        weightkg: 70.5,
        abilities: { 0: 'Quick Draw' },
        baseSpecies: 'Slowbro'
    },
    'Slowking-Galarian': {
        types: ['Poison', 'Psychic'],
        bs: { hp: 95, at: 65, df: 80, sa: 110, sd: 110, sp: 30 },
        weightkg: 79.5,
        abilities: { 0: 'Curious Medicine' },
        baseSpecies: 'Slowking'
    },
    'Slowpoke-Galarian': {
        types: ['Psychic'],
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 },
        weightkg: 36,
        nfe: true,
        abilities: { 0: 'Gluttony' },
        baseSpecies: 'Slowpoke'
    },
    Solotl: {
        types: ['Fire', 'Dragon'],
        bs: { hp: 68, at: 48, df: 34, sa: 72, sd: 24, sp: 84 },
        weightkg: 11.8,
        nfe: true,
        abilities: { 0: 'Regenerator' }
    },
    Snom: {
        types: ['Ice', 'Bug'],
        bs: { hp: 30, at: 25, df: 35, sa: 45, sd: 30, sp: 20 },
        weightkg: 3.8,
        abilities: { 0: 'Shield Dust' },
        nfe: true
    },
    'Snorlax-Gmax': {
        types: ['Normal'],
        bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
        weightkg: 0,
        abilities: { 0: 'Immunity' },
        baseSpecies: 'Snorlax'
    },
    Sobble: {
        types: ['Water'],
        bs: { hp: 50, at: 40, df: 40, sa: 70, sd: 40, sp: 70 },
        weightkg: 4,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Spectrier: {
        types: ['Ghost'],
        bs: { hp: 100, at: 65, df: 60, sa: 145, sd: 80, sp: 130 },
        weightkg: 44.5,
        abilities: { 0: 'Grim Neigh' },
        gender: 'N'
    },
    Stonjourner: {
        types: ['Rock'],
        bs: { hp: 100, at: 125, df: 135, sa: 20, sd: 20, sp: 70 },
        weightkg: 520,
        abilities: { 0: 'Power Spot' }
    },
    'Stunfisk-Galarian': {
        types: ['Ground', 'Steel'],
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 },
        weightkg: 20.5,
        abilities: { 0: 'Mimicry' },
        baseSpecies: 'Stunfisk'
    },
    Thievul: {
        types: ['Dark'],
        bs: { hp: 70, at: 58, df: 58, sa: 87, sd: 92, sp: 90 },
        weightkg: 19.9,
        abilities: { 0: 'Run Away' }
    },
    Thwackey: {
        types: ['Grass'],
        bs: { hp: 70, at: 85, df: 70, sa: 55, sd: 60, sp: 80 },
        weightkg: 14,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Toxel: {
        types: ['Electric', 'Poison'],
        bs: { hp: 40, at: 38, df: 35, sa: 54, sd: 35, sp: 40 },
        weightkg: 11,
        abilities: { 0: 'Rattled' },
        nfe: true
    },
    Toxtricity: {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        otherFormes: ['Toxtricity-Gmax', 'Toxtricity-Low-Key', 'Toxtricity-Low-Key-Gmax']
    },
    'Toxtricity-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 40,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    'Toxtricity-Low-Key-Gmax': {
        types: ['Electric', 'Poison'],
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        weightkg: 0,
        abilities: { 0: 'Punk Rock' },
        baseSpecies: 'Toxtricity'
    },
    Urshifu: {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        otherFormes: ['Urshifu-Gmax', 'Urshifu-Rapid-Strike', 'Urshifu-Rapid-Strike-Gmax']
    },
    'Urshifu-Rapid-Strike': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Rapid-Strike-Gmax': {
        types: ['Fighting', 'Water'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 105,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    'Urshifu-Gmax': {
        types: ['Fighting', 'Dark'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 },
        weightkg: 0,
        abilities: { 0: 'Unseen Fist' },
        baseSpecies: 'Urshifu'
    },
    Venomicon: {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 50, df: 113, sa: 118, sd: 90, sp: 64 },
        weightkg: 11.5,
        abilities: { 0: 'Stamina' },
        otherFormes: ['Venomicon-Epilogue'],
        gender: 'N'
    },
    'Venomicon-Epilogue': {
        types: ['Poison', 'Flying'],
        bs: { hp: 85, at: 102, df: 85, sa: 62, sd: 85, sp: 101 },
        weightkg: 12.4,
        abilities: { 0: 'Tinted Lens' },
        baseSpecies: 'Venomicon',
        gender: 'N'
    },
    'Venusaur-Gmax': {
        types: ['Grass', 'Poison'],
        bs: { hp: 80, at: 82, df: 83, sa: 100, sd: 100, sp: 80 },
        weightkg: 0,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Venusaur'
    },
    'Weezing-Galarian': {
        types: ['Poison', 'Fairy'],
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        weightkg: 16,
        abilities: { 0: 'Levitate' },
        baseSpecies: 'Weezing'
    },
    Wooloo: {
        types: ['Normal'],
        bs: { hp: 42, at: 40, df: 55, sa: 40, sd: 45, sp: 48 },
        weightkg: 6,
        abilities: { 0: 'Fluffy' },
        nfe: true
    },
    'Yamask-Galarian': {
        types: ['Ground', 'Ghost'],
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 },
        weightkg: 1.5,
        abilities: { 0: 'Wandering Spirit' },
        nfe: true,
        baseSpecies: 'Yamask'
    },
    Yamper: {
        types: ['Electric'],
        bs: { hp: 59, at: 45, df: 50, sa: 40, sd: 50, sp: 26 },
        weightkg: 13.5,
        abilities: { 0: 'Ball Fetch' },
        nfe: true
    },
    Zacian: {
        types: ['Fairy'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 110,
        abilities: { 0: 'Intrepid Sword' },
        gender: 'N',
        otherFormes: ['Zacian-Crowned']
    },
    'Zacian-Crowned': {
        types: ['Fairy', 'Steel'],
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
        weightkg: 355,
        abilities: { 0: 'Intrepid Sword' },
        baseSpecies: 'Zacian',
        gender: 'N'
    },
    Zamazenta: {
        types: ['Fighting'],
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        weightkg: 210,
        abilities: { 0: 'Dauntless Shield' },
        gender: 'N',
        otherFormes: ['Zamazenta-Crowned']
    },
    'Zamazenta-Crowned': {
        types: ['Fighting', 'Steel'],
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 },
        weightkg: 785,
        abilities: { 0: 'Dauntless Shield' },
        baseSpecies: 'Zamazenta',
        gender: 'N'
    },
    'Zapdos-Galarian': {
        types: ['Fighting', 'Flying'],
        bs: { hp: 90, at: 125, df: 90, sa: 85, sd: 90, sp: 100 },
        weightkg: 58.2,
        abilities: { 0: 'Defiant' },
        gender: 'N',
        baseSpecies: 'Zapdos'
    },
    Zarude: {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        gender: 'N',
        otherFormes: ['Zarude-Dada']
    },
    'Zarude-Dada': {
        types: ['Dark', 'Grass'],
        bs: { hp: 105, at: 120, df: 105, sa: 70, sd: 95, sp: 105 },
        weightkg: 70,
        abilities: { 0: 'Leaf Guard' },
        baseSpecies: 'Zarude',
        gender: 'N'
    },
    'Zigzagoon-Galarian': {
        types: ['Dark', 'Normal'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        weightkg: 17.5,
        abilities: { 0: 'Pickup' },
        nfe: true,
        baseSpecies: 'Zigzagoon'
    }
};
var REDUX_PATCH = {
    'Bulbasaur': {
        id: 1,
        abilities: ['Chloroplast', 'Effect Spore', 'Chlorophyll'],
        innates: ['Overgrow', 'Thick Fat', 'Poison Touch']
    },
    'Ivysaur': {
        id: 2,
        abilities: ['Chloroplast', 'Effect Spore', 'Chlorophyll'],
        innates: ['Overgrow', 'Thick Fat', 'Poison Touch']
    },
    'Venusaur': {
        id: 3,
        abilities: ['Chloroplast', 'Effect Spore', 'Chlorophyll'],
        innates: ['Overgrow', 'Thick Fat', 'Poison Touch'],
        otherFormes: ['Venusaur-Mega']
    },
    'Charmander': {
        id: 4,
        abilities: ['Flame Body', 'Pyromancy', 'Flash Fire'],
        innates: ['Blaze', 'Burnate', 'Solar Power']
    },
    'Charmeleon': {
        id: 5,
        abilities: ['Flame Body', 'Pyromancy', 'Flash Fire'],
        innates: ['Blaze', 'Burnate', 'Solar Power']
    },
    'Charizard': {
        id: 6,
        'types': ['Fire', 'Dragon'],
        abilities: ['Burnate', 'Aerilate', 'Tough Claws'],
        innates: ['Blaze', 'Levitate', 'Sun Worship'],
        otherFormes: ['Charizard-Mega-X', 'Charizard-Mega-Y']
    },
    'Squirtle': {
        id: 7,
        abilities: ['Stamina', 'Regenerator', 'Bulletproof'],
        innates: ['Torrent', 'Shell Armor', 'Water Veil']
    },
    'Wartortle': {
        id: 8,
        abilities: ['Stamina', 'Regenerator', 'Bulletproof'],
        innates: ['Torrent', 'Shell Armor', 'Water Veil']
    },
    'Blastoise': {
        id: 9,
        abilities: ['Stamina', 'Regenerator', 'Bulletproof'],
        innates: ['Torrent', 'Shell Armor', 'Mega Launcher'],
        otherFormes: ['Blastoise-Mega']
    },
    'Caterpie': {
        id: 10,
        abilities: ['Compound Eyes', 'Compound Eyes', 'Compound Eyes'],
        innates: ['Swarm', 'Shield Dust']
    },
    'Metapod': {
        id: 11,
        abilities: ['Shed Skin', 'Shell Armor', 'Shell Armor'],
        innates: ['Swarm', 'Shield Dust', 'Overcoat']
    },
    'Butterfree': {
        id: 12,
        'types': ['Bug', 'Psychic'],
        abilities: ['Tinted Lens', 'Magical Dust', 'Effect Spore'],
        innates: ['Majestic Moth', 'Compound Eyes', 'Levitate'],
        otherFormes: ['Butterfree-Mega'],
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 90 }
    },
    'Weedle': {
        id: 13,
        abilities: ['Compound Eyes', 'Compound Eyes', 'Compound Eyes'],
        innates: ['Swarm', 'Shield Dust']
    },
    'Kakuna': {
        id: 14,
        abilities: ['Shed Skin', 'Shell Armor', 'Shell Armor'],
        innates: ['Swarm', 'Shield Dust', 'Overcoat']
    },
    'Beedrill': {
        id: 15,
        abilities: ['Poison Touch', 'Sniper', 'Speed Force'],
        innates: ['Hyper Aggressive', 'Merciless', 'Levitate'],
        otherFormes: ['Beedrill-Mega'],
        bs: { hp: 65, at: 110, df: 40, sa: 45, sd: 80, sp: 135 }
    },
    'Pidgey': {
        id: 16,
        abilities: ['No Guard', 'Guts', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye', 'Early Bird'],
        bs: { hp: 40, at: 35, df: 40, sa: 45, sd: 35, sp: 56 }
    },
    'Pidgeotto': {
        id: 17,
        abilities: ['No Guard', 'Guts', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye', 'Early Bird'],
        bs: { hp: 63, at: 50, df: 55, sa: 60, sd: 50, sp: 71 }
    },
    'Pidgeot': {
        id: 18,
        abilities: ['No Guard', 'Majestic Bird', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye', 'Giant Wings'],
        otherFormes: ['Pidgeot-Mega'],
        bs: { hp: 83, at: 95, df: 75, sa: 85, sd: 70, sp: 101 }
    },
    'Rattata': {
        id: 19,
        abilities: ['Hustle', 'Normalize', 'Looter'],
        innates: ['Guts', 'Run Away'],
        otherFormes: ['Rattata-Alola']
    },
    'Raticate': {
        id: 20,
        abilities: ['Hustle', 'Normalize', 'Looter'],
        innates: ['Guts', 'Quick Feet', 'Growing Tooth'],
        otherFormes: ['Raticate-Alola'],
        bs: { hp: 55, at: 101, df: 60, sa: 50, sd: 70, sp: 102 }
    },
    'Spearow': {
        id: 21,
        abilities: ['Early Bird', 'Gale Wings', 'Big Pecks'],
        innates: ['Flock', 'Sniper', 'Keen Eye']
    },
    'Fearow': {
        id: 22,
        abilities: ['Intimidate', 'Gale Wings', 'Big Pecks'],
        innates: ['Flock', 'Sniper', 'Keen Eye'],
        bs: { hp: 65, at: 110, df: 75, sa: 61, sd: 71, sp: 100 }
    },
    'Ekans': {
        id: 23,
        abilities: ['Merciless', 'Poisonate', 'Intimidate'],
        innates: ['Solenoglyphs', 'Shed Skin', 'Coil Up']
    },
    'Arbok': {
        id: 24,
        'types': ['Poison', 'Dark'],
        abilities: ['Merciless', 'Poisonate', 'Intimidate'],
        innates: ['Solenoglyphs', 'Shed Skin', 'Coil Up'],
        bs: { hp: 80, at: 105, df: 79, sa: 65, sd: 79, sp: 80 }
    },
    'Pikachu': {
        id: 25,
        abilities: ['Electrocytes', 'Static', 'Electric Burst'],
        innates: ['Short Circuit', 'Plus', 'Ground Shock'],
        otherFormes: ['Pikachu-Cosplay', 'Pikachu-Rock-Star', 'Pikachu-Belle', 'Pikachu-Pop-Star', 'Pikachu-Ph-D', 'Pikachu-Libre', 'Pikachu-Original-Cap', 'Pikachu-Hoenn-Cap', 'Pikachu-Sinnoh-Cap', 'Pikachu-Unova-Cap', 'Pikachu-Kalos-Cap', 'Pikachu-Alola-Cap', 'Pikachu-Partner-Cap', 'Pikachu-World-Cap']
    },
    'Raichu': {
        id: 26,
        abilities: ['Electrocytes', 'Static', 'Electric Burst'],
        innates: ['Short Circuit', 'Plus', 'Ground Shock'],
        otherFormes: ['Raichu-Alola'],
        bs: { hp: 60, at: 90, df: 55, sa: 90, sd: 80, sp: 115 }
    },
    'Sandshrew': {
        id: 27,
        abilities: ['Sand Veil', 'Stamina', 'Sand Stream'],
        innates: ['Lets Roll', 'Sand Rush', 'Battle Armor'],
        otherFormes: ['Sandshrew-Alola']
    },
    'Sandslash': {
        id: 28,
        abilities: ['Battle Armor', 'Stamina', 'Sand Stream'],
        innates: ['Lets Roll', 'Sand Rush', 'Tough Claws'],
        otherFormes: ['Sandslash-Alola'],
        bs: { hp: 95, at: 100, df: 110, sa: 45, sd: 55, sp: 65 }
    },
    'Nidoran-F': {
        id: 29,
        abilities: ['Poison Point', 'Hustle', 'Hustle'],
        innates: ['Rivalry']
    },
    'Nidorina': {
        id: 30,
        abilities: ['Poison Point', 'Hustle', 'Hustle'],
        innates: ['Rivalry']
    },
    'Nidoqueen': {
        id: 31,
        abilities: ['Poison Point', 'Hustle', 'Poisonate'],
        innates: ['Rivalry', 'Thick Fat', 'Queenly Majesty']
    },
    'Nidoran-M': {
        id: 32,
        abilities: ['Poison Point', 'Hustle', 'Hustle'],
        innates: ['Rivalry']
    },
    'Nidorino': {
        id: 33,
        abilities: ['Poison Point', 'Hustle', 'Hustle'],
        innates: ['Rivalry']
    },
    'Nidoking': {
        id: 34,
        abilities: ['Sheer Force', 'Hustle', 'Poisonate'],
        innates: ['Rivalry', 'Poison Point', 'Rampage']
    },
    'Clefairy': {
        id: 35,
        abilities: ['Unaware', 'Magic Guard', 'Fluffy'],
        innates: ['Cute Charm', 'Healer', 'Natural Cure']
    },
    'Clefable': {
        id: 36,
        abilities: ['Unaware', 'Magic Guard', 'Fluffy'],
        innates: ['Cute Charm', 'Healer', 'Natural Cure']
    },
    'Vulpix': {
        id: 37,
        abilities: ['Flash Fire', 'Pyromancy', 'Drought'],
        innates: ['Quick Feet', 'Burnate'],
        otherFormes: ['Vulpix-Alola']
    },
    'Ninetales': {
        id: 38,
        'types': ['Fire', 'Fairy'],
        abilities: ['Flaming Soul', 'Pixilate', 'Drought'],
        innates: ['Queenly Majesty', 'Pyromancy', 'Flash Fire'],
        otherFormes: ['Ninetales-Alola'],
        bs: { hp: 73, at: 76, df: 75, sa: 91, sd: 100, sp: 100 }
    },
    'Jigglypuff': {
        id: 39,
        abilities: ['Sweet Dreams', 'Competitive', 'Magic Guard'],
        innates: ['Cute Charm', 'Inflatable', 'Lets Roll'],
        bs: { hp: 105, at: 45, df: 20, sa: 65, sd: 35, sp: 20 }
    },
    'Wigglytuff': {
        id: 40,
        abilities: ['Sweet Dreams', 'Competitive', 'Magic Guard'],
        innates: ['Cute Charm', 'Inflatable', 'Fluffy'],
        bs: { hp: 120, at: 70, df: 45, sa: 105, sd: 60, sp: 45 }
    },
    'Zubat': {
        id: 41,
        abilities: ['Inner Focus', 'Infiltrator', 'Opportunist'],
        innates: ['Sniper', 'Nocturnal']
    },
    'Golbat': {
        id: 42,
        abilities: ['Mountaineer', 'Scavenger', 'Opportunist'],
        innates: ['Infiltrator', 'Sniper', 'Nocturnal']
    },
    'Oddish': {
        id: 43,
        abilities: ['Poison Absorb', 'Chloroplast', 'Sweet Veil'],
        innates: ['Regenerator', 'Grass Pelt', 'Natural Cure']
    },
    'Gloom': {
        id: 44,
        abilities: ['Poison Absorb', 'Chloroplast', 'Sweet Veil'],
        innates: ['Regenerator', 'Grass Pelt', 'Natural Cure']
    },
    'Vileplume': {
        id: 45,
        abilities: ['Poison Absorb', 'Chloroplast', 'Sweet Veil'],
        innates: ['Regenerator', 'Grass Pelt', 'Natural Cure'],
        bs: { hp: 85, at: 60, df: 95, sa: 120, sd: 100, sp: 50 }
    },
    'Paras': {
        id: 46,
        abilities: ['Overcoat', 'Overcoat', 'Overcoat'],
        innates: ['Effect Spore', 'Dry Skin']
    },
    'Parasect': {
        id: 47,
        abilities: ['Self Sufficient', 'Shadow Tag', 'Soul Eater'],
        innates: ['Effect Spore', 'Phantom', 'Opportunist'],
        bs: { hp: 80, at: 100, df: 95, sa: 70, sd: 140, sp: 30 }
    },
    'Venonat': {
        id: 48,
        abilities: ['Tinted Lens', 'Tinted Lens', 'Tinted Lens'],
        innates: ['Compound Eyes', 'Nocturnal', 'Magical Dust']
    },
    'Venomoth': {
        id: 49,
        abilities: ['Tinted Lens', 'Magical Dust', 'Magic Guard'],
        innates: ['Compound Eyes', 'Majestic Moth', 'Levitate'],
        bs: { hp: 70, at: 65, df: 60, sa: 85, sd: 75, sp: 100 }
    },
    'Diglett': {
        id: 50,
        abilities: ['Sand Force', 'Arena Trap', 'Earthbound'],
        innates: ['Sand Rush'],
        otherFormes: ['Diglett-Alola']
    },
    'Dugtrio': {
        id: 51,
        abilities: ['Sand Rush', 'Arena Trap', 'Earthbound'],
        innates: ['Multi Headed', 'Sand Force', 'Speed Force'],
        otherFormes: ['Dugtrio-Alola'],
        heads: 3
    },
    'Meowth': {
        id: 52,
        abilities: ['Sniper', 'Limber', 'Prankster'],
        innates: ['Perfectionist', 'Technician', 'Opportunist'],
        otherFormes: ['Meowth-Alola', 'Meowth-Galarian']
    },
    'Persian': {
        id: 53,
        abilities: ['Sniper', 'Limber', 'Skill Link'],
        innates: ['Perfectionist', 'Technician', 'Opportunist'],
        otherFormes: ['Persian-Alola'],
        bs: { hp: 65, at: 85, df: 60, sa: 105, sd: 65, sp: 115 }
    },
    'Psyduck': {
        id: 54,
        abilities: ['Insomnia', 'Cloud Nine', 'Drizzle'],
        innates: ['Weather Control', 'Psychic Mind', 'Damp']
    },
    'Golduck': {
        id: 55,
        'types': ['Water', 'Psychic'],
        abilities: ['Tough Claws', 'Sage Power', 'Drizzle'],
        innates: ['Weather Control', 'Psychic Mind', 'Swift Swim'],
        bs: { hp: 80, at: 92, df: 78, sa: 105, sd: 80, sp: 85 }
    },
    'Mankey': {
        id: 56,
        abilities: ['Moxie', 'Gorilla Tactics', 'No Guard'],
        innates: ['Anger Point', 'Hyper Aggressive']
    },
    'Primeape': {
        id: 57,
        abilities: ['Moxie', 'Gorilla Tactics', 'No Guard'],
        innates: ['Anger Point', 'Hyper Aggressive', 'Violent Rush']
    },
    'Growlithe': {
        id: 58,
        abilities: ['Intimidate', 'Strong Jaw', 'Burnate'],
        innates: ['Fur Coat', 'Flash Fire']
    },
    'Arcanine': {
        id: 59,
        abilities: ['Intimidate', 'Strong Jaw', 'Burnate'],
        innates: ['Fur Coat', 'Flash Fire', 'Predator']
    },
    'Poliwag': {
        id: 60,
        abilities: ['Hydrate', 'Damp', 'Damp'],
        innates: ['Hypnotist', 'Swift Swim', 'Hydration']
    },
    'Poliwhirl': {
        id: 61,
        abilities: ['Hydrate', 'Damp', 'Damp'],
        innates: ['Hypnotist', 'Swift Swim', 'Hydration']
    },
    'Poliwrath': {
        id: 62,
        abilities: ['Precise Fist', 'Iron Fist', 'Power Fists'],
        innates: ['Hypnotist', 'Swift Swim', 'Hydration'],
        bs: { hp: 90, at: 115, df: 95, sa: 75, sd: 90, sp: 70 }
    },
    'Abra': {
        id: 63,
        abilities: ['Mystic Power', 'Trace', 'Exploit Weakness'],
        innates: ['Psychic Mind', 'Hypnotist', 'Magic Guard']
    },
    'Kadabra': {
        id: 64,
        abilities: ['Mystic Power', 'Trace', 'Exploit Weakness'],
        innates: ['Psychic Mind', 'Hypnotist', 'Magic Guard']
    },
    'Alakazam': {
        id: 65,
        abilities: ['Mystic Power', 'Trace', 'Exploit Weakness'],
        innates: ['Psychic Mind', 'Hypnotist', 'Magic Guard'],
        otherFormes: ['Alakazam-Mega']
    },
    'Machop': {
        id: 66,
        abilities: ['Iron Fist', 'Iron Fist', 'Sheer Force'],
        innates: ['No Guard']
    },
    'Machoke': {
        id: 67,
        abilities: ['Iron Fist', 'Power Fists', 'Sheer Force'],
        innates: ['No Guard', 'Steadfast', 'Guts']
    },
    'Machamp': {
        id: 68,
        abilities: ['Precise Fist', 'Power Fists', 'Sheer Force'],
        innates: ['No Guard', 'Iron Fist', 'Guts'],
        otherFormes: ['Machamp-Mega']
    },
    'Bellsprout': {
        id: 69,
        abilities: ['Chloroplast', 'Harvest', 'Harvest'],
        innates: ['Chlorophyll', 'Gluttony']
    },
    'Weepinbell': {
        id: 70,
        abilities: ['Chloroplast', 'Harvest', 'Arena Trap'],
        innates: ['Chlorophyll', 'Gluttony', 'Corrosion']
    },
    'Victreebel': {
        id: 71,
        abilities: ['Chloroplast', 'Harvest', 'Arena Trap'],
        innates: ['Chlorophyll', 'Gluttony', 'Corrosion']
    },
    'Tentacool': {
        id: 72,
        abilities: ['Liquid Ooze', 'Neuroforce', 'Neuroforce'],
        innates: ['Clear Body', 'Poison Touch', 'Water Absorb']
    },
    'Tentacruel': {
        id: 73,
        abilities: ['Liquid Ooze', 'Neuroforce', 'Water Veil'],
        innates: ['Clear Body', 'Poison Touch', 'Water Absorb']
    },
    'Geodude': {
        id: 74,
        abilities: ['Rock Head', 'Sand Force', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Solid Rock'],
        otherFormes: ['Geodude-Alola']
    },
    'Graveler': {
        id: 75,
        abilities: ['Rock Head', 'Sand Force', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Solid Rock'],
        otherFormes: ['Graveler-Alola']
    },
    'Golem': {
        id: 76,
        abilities: ['Rock Head', 'Sand Force', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Solid Rock'],
        otherFormes: ['Golem-Alola'],
        bs: { hp: 90, at: 135, df: 130, sa: 55, sd: 65, sp: 45 }
    },
    'Ponyta': {
        id: 77,
        abilities: ['Reckless', 'Turboblaze', 'Striker'],
        innates: ['Speed Force', 'Flash Fire', 'Flame Body'],
        otherFormes: ['Ponyta-Galarian']
    },
    'Rapidash': {
        id: 78,
        abilities: ['Reckless', 'Turboblaze', 'Striker'],
        innates: ['Burnate', 'Speed Force', 'Flame Body'],
        otherFormes: ['Rapidash-Galarian'],
        bs: { hp: 85, at: 110, df: 70, sa: 75, sd: 80, sp: 120 }
    },
    'Slowpoke': {
        id: 79,
        abilities: ['Regenerator', 'Unaware', 'Unaware'],
        innates: ['Oblivious', 'Own Tempo'],
        otherFormes: ['Slowpoke-Galarian']
    },
    'Slowbro': {
        id: 80,
        abilities: ['Regenerator', 'Unaware', 'Twisted Dimension'],
        innates: ['Oblivious', 'Own Tempo', 'Shell Armor'],
        otherFormes: ['Slowbro-Mega', 'Slowbro-Galarian']
    },
    'Magnemite': {
        id: 81,
        abilities: ['Analytic', 'Full Metal Body', 'Download'],
        innates: ['Galvanize', 'Sturdy', 'Magnet Pull']
    },
    'Magneton': {
        id: 82,
        abilities: ['Analytic', 'Full Metal Body', 'Download'],
        innates: ['Galvanize', 'Multi Headed', 'Magnet Pull'],
        heads: 3
    },
    'Farfetchd': {
        id: 83,
        'types': ['Fighting', 'Flying'],
        abilities: ['Super Luck', 'Fighting Spirit', 'Defiant'],
        innates: ['Keen Eye', 'Field Explorer', 'Keen Edge'],
        otherFormes: ['Farfetchd-Galarian'],
        bs: { hp: 52, at: 90, df: 55, sa: 58, sd: 62, sp: 100 }
    },
    'Doduo': {
        id: 84,
        abilities: ['Speed Force', 'Moxie', 'Big Pecks'],
        innates: ['Multi Headed', 'Grounded', 'Early Bird'],
        heads: 2
    },
    'Dodrio': {
        id: 85,
        abilities: ['Speed Force', 'Moxie', 'Big Pecks'],
        innates: ['Multi Headed', 'Grounded', 'Moody'],
        bs: { hp: 90, at: 110, df: 70, sa: 60, sd: 60, sp: 120 },
        heads: 3
    },
    'Seel': {
        id: 86,
        abilities: ['Water Veil', 'Swift Swim', 'Swift Swim'],
        innates: ['Thick Fat', 'Fur Coat'],
        bs: { hp: 65, at: 45, df: 45, sa: 55, sd: 75, sp: 45 }
    },
    'Dewgong': {
        id: 87,
        abilities: ['Fur Coat', 'Ice Scales', 'Permafrost'],
        innates: ['Thick Fat', 'Water Veil', 'North Wind'],
        otherFormes: ['Dewgong-Mega'],
        bs: { hp: 90, at: 90, df: 60, sa: 95, sd: 95, sp: 90 }
    },
    'Grimer': {
        id: 88,
        abilities: ['Poison Touch', 'Regenerator', 'Self Sufficient'],
        innates: ['Liquified', 'Stench', 'Sticky Hold'],
        otherFormes: ['Grimer-Alola']
    },
    'Muk': {
        id: 89,
        abilities: ['Poison Touch', 'Regenerator', 'Self Sufficient'],
        innates: ['Liquified', 'Stench', 'Sticky Hold'],
        otherFormes: ['Muk-Alola'],
        bs: { hp: 105, at: 125, df: 75, sa: 65, sd: 100, sp: 50 }
    },
    'Shellder': {
        id: 90,
        abilities: ['Impenetrable', 'Skill Link', 'Weak Armor'],
        innates: ['Shell Armor', 'Hydrate', 'Sturdy']
    },
    'Cloyster': {
        id: 91,
        abilities: ['Impenetrable', 'Skill Link', 'Weak Armor'],
        innates: ['Shell Armor', 'Hydrate', 'Sturdy']
    },
    'Gastly': {
        id: 92,
        abilities: ['Vengeance', 'Scare', 'Prankster'],
        innates: ['Levitate', 'Cursed Body', 'Haunted Spirit']
    },
    'Haunter': {
        id: 93,
        abilities: ['Vengeance', 'Scare', 'Prankster'],
        innates: ['Levitate', 'Cursed Body', 'Haunted Spirit'],
        bs: { hp: 45, at: 75, df: 45, sa: 115, sd: 55, sp: 95 }
    },
    'Gengar': {
        id: 94,
        abilities: ['Vengeance', 'Scare', 'Prankster'],
        innates: ['Levitate', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Gengar-Mega'],
        bs: { hp: 60, at: 115, df: 60, sa: 130, sd: 75, sp: 110 }
    },
    'Onix': {
        id: 95,
        abilities: ['Rock Head', 'Stamina', 'Sand Stream'],
        innates: ['Solid Rock', 'Rough Skin', 'Sturdy']
    },
    'Drowzee': {
        id: 96,
        abilities: ['Magic Bounce', 'Psychic Mind', 'Psychic Mind'],
        innates: ['Hypnotist', 'Dreamcatcher', 'Insomnia']
    },
    'Hypno': {
        id: 97,
        abilities: ['Magic Bounce', 'Psychic Mind', 'Psychic Surge'],
        innates: ['Hypnotist', 'Dreamcatcher', 'Insomnia'],
        bs: { hp: 95, at: 73, df: 70, sa: 115, sd: 115, sp: 67 }
    },
    'Krabby': {
        id: 98,
        abilities: ['Swift Swim', 'Technician', 'Self Sufficient'],
        innates: ['Shell Armor', 'Hyper Cutter', 'Grip Pincer']
    },
    'Kingler': {
        id: 99,
        abilities: ['Swift Swim', 'Technician', 'Self Sufficient'],
        innates: ['Shell Armor', 'Hyper Cutter', 'Grip Pincer'],
        otherFormes: ['Kingler-Mega'],
        bs: { hp: 80, at: 130, df: 115, sa: 50, sd: 50, sp: 75 }
    },
    'Voltorb': {
        id: 100,
        abilities: ['Soundproof', 'Download', 'Volt Absorb'],
        innates: ['Speed Force', 'Short Circuit', 'Momentum']
    },
    'Electrode': {
        id: 101,
        abilities: ['Volt Absorb', 'Download', 'Momentum'],
        innates: ['Aftermath', 'Electric Surge', 'Soundproof']
    },
    'Exeggcute': {
        id: 102,
        abilities: ['Magic Bounce', 'Chloroplast', 'Natural Cure'],
        innates: ['Solar Power', 'Chlorophyll']
    },
    'Exeggutor': {
        id: 103,
        abilities: ['Magic Bounce', 'Chloroplast', 'Solar Power'],
        innates: ['Harvest', 'Multi Headed', 'Chlorophyll'],
        otherFormes: ['Exeggutor-Alola'],
        heads: 3
    },
    'Cubone': {
        id: 104,
        abilities: ['Technician', 'Guts', 'Guts'],
        innates: ['Bone Zone', 'Battle Armor', 'Rock Head']
    },
    'Marowak': {
        id: 105,
        abilities: ['Technician', 'Stamina', 'Skill Link'],
        innates: ['Bone Zone', 'Battle Armor', 'Rock Head'],
        otherFormes: ['Marowak-Alola'],
        bs: { hp: 75, at: 80, df: 110, sa: 50, sd: 80, sp: 45 }
    },
    'Hitmonlee': {
        id: 106,
        abilities: ['Unburden', 'Fatal Precision', 'Violent Rush'],
        innates: ['Limber', 'Reckless', 'Striker'],
        otherFormes: ['Hitmonlee-Mega'],
        bs: { hp: 80, at: 120, df: 53, sa: 35, sd: 110, sp: 87 }
    },
    'Hitmonchan': {
        id: 107,
        abilities: ['Precise Fist', 'Blitz Boxer', 'Raging Boxer'],
        innates: ['Inner Focus', 'Fatal Precision', 'Perfectionist'],
        otherFormes: ['Hitmonchan-Mega'],
        bs: { hp: 80, at: 105, df: 79, sa: 35, sd: 110, sp: 76 }
    },
    'Lickitung': {
        id: 108,
        abilities: ['Simple', 'Regenerator', 'Unaware'],
        innates: ['Gluttony', 'Thick Fat', 'Own Tempo']
    },
    'Koffing': {
        id: 109,
        abilities: ['Poison Absorb', 'Neutralizing Gas', 'Stench'],
        innates: ['Levitate', 'Inflatable']
    },
    'Weezing': {
        id: 110,
        abilities: ['Poison Absorb', 'Neutralizing Gas', 'Stench'],
        innates: ['Levitate', 'Multi Headed', 'Inflatable'],
        otherFormes: ['Weezing-Galarian'],
        bs: { hp: 65, at: 90, df: 120, sa: 95, sd: 70, sp: 60 },
        heads: 2
    },
    'Rhyhorn': {
        id: 111,
        abilities: ['Lightning Rod', 'Reckless', 'Reckless'],
        innates: ['Solid Rock', 'Rock Head']
    },
    'Rhydon': {
        id: 112,
        abilities: ['Lightning Rod', 'Reckless', 'Fort Knox'],
        innates: ['Solid Rock', 'Rock Head', 'Rough Skin']
    },
    'Chansey': {
        id: 113,
        abilities: ['Regenerator', 'Regenerator', 'Triage'],
        innates: ['Healer', 'Natural Cure', 'Serene Grace']
    },
    'Tangela': {
        id: 114,
        abilities: ['Chlorophyll', 'Battle Armor', 'Leaf Guard'],
        innates: ['Regenerator', 'Seaweed', 'Tangling Hair']
    },
    'Kangaskhan': {
        id: 115,
        abilities: ['Iron Fist', 'Technician', 'Guts'],
        innates: ['Parental Bond', 'Scrappy', 'Avenger'],
        otherFormes: ['Kangaskhan-Mega']
    },
    'Horsea': {
        id: 116,
        abilities: ['Swift Swim', 'Immunity', 'Immunity'],
        innates: ['Poison Point', 'Sniper']
    },
    'Seadra': {
        id: 117,
        abilities: ['Swift Swim', 'Immunity', 'Poison Heal'],
        innates: ['Poison Point', 'Sniper', 'Mega Launcher']
    },
    'Goldeen': {
        id: 118,
        abilities: ['Multiscale', 'Water Veil', 'Water Veil'],
        innates: ['Lightning Rod', 'Swift Swim', 'Field Explorer']
    },
    'Seaking': {
        id: 119,
        abilities: ['Multiscale', 'Water Veil', 'Hustle'],
        innates: ['Lightning Rod', 'Swift Swim', 'Field Explorer'],
        bs: { hp: 80, at: 112, df: 65, sa: 65, sd: 100, sp: 98 }
    },
    'Staryu': {
        id: 120,
        abilities: ['Swift Swim', 'Swift Swim', 'Illuminate'],
        innates: ['Natural Cure', 'Regenerator', 'Analytic']
    },
    'Starmie': {
        id: 121,
        abilities: ['Swift Swim', 'Mystic Power', 'Illuminate'],
        innates: ['Natural Cure', 'Analytic', 'Victory Star']
    },
    'Mr-Mime': {
        id: 122,
        'types': ['Psychic', 'Fairy'],
        abilities: ['Filter', 'Unnerve', 'Screen Cleaner'],
        innates: ['Magic Bounce', 'Soundproof', 'Hypnotist'],
        otherFormes: ['Mr-Mime-Galarian'],
        bs: { hp: 40, at: 45, df: 65, sa: 120, sd: 120, sp: 90 }
    },
    'Scyther': {
        id: 123,
        abilities: ['Perfectionist', 'Technician', 'Aerodynamics'],
        innates: ['Keen Edge', 'Swarm', 'Aerilate']
    },
    'Jynx': {
        id: 124,
        abilities: ['Psychic Mind', 'Psychic Mind', 'Psychic Surge'],
        innates: ['Dry Skin', 'Refrigerate', 'Amplifier'],
        bs: { hp: 65, at: 50, df: 35, sa: 115, sd: 95, sp: 115 }
    },
    'Electabuzz': {
        id: 125,
        abilities: ['Power Fists', 'Short Circuit', 'Electric Surge'],
        innates: ['Vital Spirit', 'Hyper Aggressive', 'Motor Drive']
    },
    'Magmar': {
        id: 126,
        abilities: ['Pyromancy', 'Flaming Soul', 'Power Fists'],
        innates: ['Molten Down', 'Flame Body', 'Flash Fire']
    },
    'Pinsir': {
        id: 127,
        abilities: ['Anger Point', 'Violent Rush', 'Moxie'],
        innates: ['Swarm', 'Hyper Cutter', 'Grip Pincer'],
        otherFormes: ['Pinsir-Mega']
    },
    'Tauros': {
        id: 128,
        abilities: ['Violent Rush', 'Rock Head', 'Rampage'],
        innates: ['Hyper Aggressive', 'Anger Point', 'Scrappy'],
        bs: { hp: 95, at: 120, df: 95, sa: 40, sd: 70, sp: 110 }
    },
    'Magikarp': {
        id: 129,
        abilities: ['Marvel Scale', 'Marvel Scale', 'Rattled'],
        innates: ['Swift Swim', 'Limber']
    },
    'Gyarados': {
        id: 130,
        'types': ['Water', 'Dragon'],
        abilities: ['Intimidate', 'Moxie', 'Overwhelm'],
        innates: ['Levitate', 'Aerilate', 'Sea Guardian'],
        otherFormes: ['Gyarados-Mega'],
        bs: { hp: 95, at: 125, df: 79, sa: 100, sd: 100, sp: 81 }
    },
    'Lapras': {
        id: 131,
        abilities: ['Regenerator', 'Snow Warning', 'Permafrost'],
        innates: ['Half Drake', 'Shell Armor', 'Self Sufficient'],
        otherFormes: ['Lapras-Mega'],
        bs: { hp: 130, at: 85, df: 80, sa: 95, sd: 95, sp: 60 }
    },
    'Ditto': {
        id: 132,
        abilities: ['Prankster', 'Limber', 'Imposter'],
        innates: ['Liquified']
    },
    'Eevee': {
        id: 133,
        abilities: ['Prankster', 'Adaptability', 'Unaware'],
        innates: ['Cute Charm']
    },
    'Vaporeon': {
        id: 134,
        abilities: ['Rain Dish', 'Regenerator', 'Drizzle'],
        innates: ['Water Veil', 'Water Absorb', 'Hydration']
    },
    'Jolteon': {
        id: 135,
        abilities: ['Speed Boost', 'Electric Burst', 'Electric Surge'],
        innates: ['Short Circuit', 'Lightning Rod', 'Illuminate']
    },
    'Flareon': {
        id: 136,
        abilities: ['Reckless', 'Guts', 'Flaming Soul'],
        innates: ['Flash Fire', 'Quick Feet', 'Rivalry'],
        bs: { hp: 95, at: 130, df: 60, sa: 65, sd: 65, sp: 110 }
    },
    'Porygon': {
        id: 137,
        abilities: ['Download', 'Trace', 'Twisted Dimension'],
        innates: ['Analytic']
    },
    'Omanyte': {
        id: 138,
        abilities: ['Weak Armor', 'Swift Swim', 'Swift Swim'],
        innates: ['Fossilized', 'Rain Dish', 'Shell Armor']
    },
    'Omastar': {
        id: 139,
        abilities: ['Weak Armor', 'Swift Swim', 'Water Compaction'],
        innates: ['Fossilized', 'Rain Dish', 'Shell Armor']
    },
    'Kabuto': {
        id: 140,
        abilities: ['Swift Swim', 'Battle Armor', 'Adaptability'],
        innates: ['Fossilized']
    },
    'Kabutops': {
        id: 141,
        abilities: ['Swift Swim', 'Hyper Cutter', 'Perfectionist'],
        innates: ['Fossilized', 'Battle Armor', 'Keen Edge']
    },
    'Aerodactyl': {
        id: 142,
        abilities: ['Speed Force', 'Predator', 'Fatal Precision'],
        innates: ['Fossilized', 'Rock Head', 'Half Drake'],
        otherFormes: ['Aerodactyl-Mega']
    },
    'Snorlax': {
        id: 143,
        abilities: ['Lets Roll', 'Oblivious', 'Comatose'],
        innates: ['Field Explorer', 'Thick Fat', 'Gluttony']
    },
    'Articuno': {
        id: 144,
        abilities: ['North Wind', 'Snow Warning', 'Ice Scales'],
        innates: ['Antarctic Bird', 'Majestic Bird', 'Permafrost'],
        otherFormes: ['Articuno-Galarian']
    },
    'Zapdos': {
        id: 145,
        abilities: ['Overcharge', 'Gale Wings', 'Drizzle'],
        innates: ['Volt Absorb', 'Ground Shock', 'Static'],
        otherFormes: ['Zapdos-Galarian']
    },
    'Moltres': {
        id: 146,
        abilities: ['Air Blower', 'Flaming Soul', 'Drought'],
        innates: ['Flash Fire', 'Molten Down', 'Pyromancy'],
        otherFormes: ['Moltres-Galarian']
    },
    'Dratini': {
        id: 147,
        abilities: ['Regenerator', 'Regenerator', 'Regenerator'],
        innates: ['Multiscale', 'Marvel Scale', 'Shed Skin']
    },
    'Dragonair': {
        id: 148,
        abilities: ['Regenerator', 'Regenerator', 'Regenerator'],
        innates: ['Multiscale', 'Marvel Scale', 'Shed Skin']
    },
    'Dragonite': {
        id: 149,
        abilities: ['Dragons Maw', 'Aerilate', 'Prism Scales'],
        innates: ['Multiscale', 'Overwhelm', 'Rampage'],
        otherFormes: ['Dragonite-Mega']
    },
    'Mewtwo': {
        id: 150,
        abilities: ['Mystic Power', 'Psychic Surge', 'Soul Eater'],
        innates: ['Psychic Mind', 'Pressure', 'Fatal Precision'],
        otherFormes: ['Mewtwo-Mega-X', 'Mewtwo-Mega-Y']
    },
    'Mew': {
        id: 151,
        abilities: ['Magic Guard', 'Mystic Power', 'Imposter'],
        innates: ['Psychic Mind', 'Unaware', 'Prankster']
    },
    'Chikorita': {
        id: 152,
        abilities: ['Regenerator', 'Pixilate', 'Grassy Surge'],
        innates: ['Grass Pelt', 'Sweet Dreams', 'Natural Cure']
    },
    'Bayleef': {
        id: 153,
        abilities: ['Regenerator', 'Pixilate', 'Grassy Surge'],
        innates: ['Grass Pelt', 'Sweet Dreams', 'Natural Cure']
    },
    'Meganium': {
        id: 154,
        'types': ['Grass', 'Fairy'],
        abilities: ['Regenerator', 'Triage', 'Grassy Surge'],
        innates: ['Overgrow', 'Big Leaves', 'Pixilate'],
        bs: { hp: 80, at: 82, df: 100, sa: 93, sd: 100, sp: 80 }
    },
    'Cyndaquil': {
        id: 155,
        abilities: ['Flame Body', 'Berserk', 'Pyromancy'],
        innates: ['Blaze', 'Sand Rush', 'Sand Song']
    },
    'Quilava': {
        id: 156,
        'types': ['Fire', 'Ground'],
        abilities: ['Earthbound', 'Sand Rush', 'Pyromancy'],
        innates: ['Blaze', 'Berserk', 'Sand Song']
    },
    'Typhlosion': {
        id: 157,
        'types': ['Fire', 'Ground'],
        abilities: ['Earthbound', 'Berserk', 'Pyromancy'],
        innates: ['Blaze', 'Sand Rush', 'Flaming Soul']
    },
    'Totodile': {
        id: 158,
        abilities: ['Intimidate', 'Predator', 'Violent Rush'],
        innates: ['Torrent', 'Strong Jaw', 'Rough Skin']
    },
    'Croconaw': {
        id: 159,
        abilities: ['Intimidate', 'Predator', 'Violent Rush'],
        innates: ['Torrent', 'Strong Jaw', 'Rough Skin']
    },
    'Feraligatr': {
        id: 160,
        'types': ['Water', 'Dark'],
        abilities: ['Intimidate', 'Predator', 'Violent Rush'],
        innates: ['Torrent', 'Strong Jaw', 'Rough Skin'],
        bs: { hp: 85, at: 125, df: 100, sa: 49, sd: 83, sp: 88 }
    },
    'Sentret': {
        id: 161,
        abilities: ['Run Away', 'Sap Sipper', 'Quick Feet'],
        innates: ['Keen Eye', 'Field Explorer', 'Fur Coat']
    },
    'Furret': {
        id: 162,
        abilities: ['Momentum', 'Normalize', 'Adaptability'],
        innates: ['Scrappy', 'Field Explorer', 'Fur Coat'],
        bs: { hp: 85, at: 86, df: 64, sa: 40, sd: 70, sp: 115 }
    },
    'Hoothoot': {
        id: 163,
        'types': ['Psychic', 'Flying'],
        abilities: ['Tinted Lens', 'Aerilate', 'Aerilate'],
        innates: ['Nocturnal', 'Keen Eye', 'Early Bird']
    },
    'Noctowl': {
        id: 164,
        'types': ['Psychic', 'Flying'],
        abilities: ['Tinted Lens', 'Aerilate', 'Air Blower'],
        innates: ['Nocturnal', 'Insomnia', 'Majestic Bird'],
        bs: { hp: 100, at: 50, df: 70, sa: 76, sd: 96, sp: 70 }
    },
    'Ledyba': {
        id: 165,
        abilities: ['Run Away', 'Rattled', 'Rattled'],
        innates: ['Swarm', 'Early Bird'],
        bs: { hp: 40, at: 40, df: 30, sa: 20, sd: 80, sp: 55 }
    },
    'Ledian': {
        id: 166,
        'types': ['Bug', 'Fighting'],
        abilities: ['Aerilate', 'Buginize', 'Aerodynamics'],
        innates: ['Raging Boxer', 'Iron Fist', 'Levitate'],
        bs: { hp: 55, at: 95, df: 50, sa: 35, sd: 110, sp: 105 }
    },
    'Spinarak': {
        id: 167,
        abilities: ['Infiltrator', 'Prankster', 'No Guard'],
        innates: ['Spider Lair', 'Merciless']
    },
    'Ariados': {
        id: 168,
        abilities: ['Poison Touch', 'Sniper', 'Exploit Weakness'],
        innates: ['Spider Lair', 'Merciless', 'Opportunist'],
        bs: { hp: 80, at: 110, df: 80, sa: 60, sd: 80, sp: 80 }
    },
    'Crobat': {
        id: 169,
        abilities: ['Mountaineer', 'Scavenger', 'Tinted Lens'],
        innates: ['Infiltrator', 'Soundproof', 'Nocturnal'],
        otherFormes: ['Crobat-Mega'],
        bs: { hp: 85, at: 90, df: 80, sa: 80, sd: 80, sp: 130 }
    },
    'Chinchou': {
        id: 170,
        abilities: ['Swift Swim', 'Illuminate', 'Short Circuit'],
        innates: ['Plus', 'Water Absorb', 'Volt Absorb']
    },
    'Lanturn': {
        id: 171,
        abilities: ['Swift Swim', 'Illuminate', 'Drizzle'],
        innates: ['Plus', 'Water Absorb', 'Volt Absorb'],
        bs: { hp: 125, at: 58, df: 58, sa: 86, sd: 86, sp: 67 }
    },
    'Pichu': {
        id: 172,
        abilities: ['Electrocytes', 'Static', 'Electric Burst'],
        innates: ['Short Circuit', 'Plus', 'Ground Shock'],
        otherFormes: ['Pichu-Spiky-Eared']
    },
    'Cleffa': {
        id: 173,
        abilities: ['Unaware', 'Magic Guard', 'Friend Guard'],
        innates: ['Cute Charm', 'Healer', 'Natural Cure']
    },
    'Igglybuff': {
        id: 174,
        abilities: ['Sweet Dreams', 'Competitive', 'Magic Guard'],
        innates: ['Cute Charm', 'Inflatable', 'Lets Roll']
    },
    'Togepi': {
        id: 175,
        abilities: ['Serene Grace', 'Hustle', 'Hustle'],
        innates: ['Super Luck']
    },
    'Togetic': {
        id: 176,
        abilities: ['Regenerator', 'Self Sufficient', 'Soul-Heart'],
        innates: ['Super Luck', 'Serene Grace', 'Pixilate']
    },
    'Natu': {
        id: 177,
        abilities: ['Forewarn', 'Early Bird', 'Synchronize'],
        innates: ['Keen Eye']
    },
    'Xatu': {
        id: 178,
        abilities: ['Forewarn', 'Early Bird', 'Synchronize'],
        innates: ['Keen Eye', 'Dreamcatcher', 'Magic Bounce'],
        bs: { hp: 65, at: 75, df: 70, sa: 115, sd: 70, sp: 105 }
    },
    'Mareep': {
        id: 179,
        abilities: ['Static', 'Static', 'Static'],
        innates: ['Minus', 'Fluffy']
    },
    'Flaaffy': {
        id: 180,
        abilities: ['Static', 'Static', 'Static'],
        innates: ['Minus', 'Fluffy']
    },
    'Ampharos': {
        id: 181,
        'types': ['Electric', 'Dragon'],
        abilities: ['Short Circuit', 'Lightning Rod', 'Electric Surge'],
        innates: ['Dazzling', 'Illuminate', 'Overwhelm'],
        otherFormes: ['Ampharos-Mega'],
        bs: { hp: 110, at: 75, df: 85, sa: 115, sd: 90, sp: 55 }
    },
    'Bellossom': {
        id: 182,
        abilities: ['Chloroplast', 'Harvest', 'Triage'],
        innates: ['Chlorophyll', 'Healer', 'Leaf Guard'],
        bs: { hp: 90, at: 60, df: 105, sa: 110, sd: 100, sp: 50 }
    },
    'Marill': {
        id: 183,
        abilities: ['Sap Sipper', 'Swift Swim', 'Swift Swim'],
        innates: ['Thick Fat', 'Hydration', 'Huge Power']
    },
    'Azumarill': {
        id: 184,
        abilities: ['Sap Sipper', 'Swift Swim', 'Water Veil'],
        innates: ['Thick Fat', 'Hydration', 'Huge Power'],
        bs: { hp: 100, at: 65, df: 90, sa: 110, sd: 90, sp: 60 }
    },
    'Sudowoodo': {
        id: 185,
        'types': ['Rock', 'Grass'],
        abilities: ['Juggernaut', 'Rock Head', 'Water Compaction'],
        innates: ['Raw Wood', 'Fort Knox', 'Sturdy'],
        bs: { hp: 70, at: 110, df: 125, sa: 30, sd: 65, sp: 30 }
    },
    'Politoed': {
        id: 186,
        'types': ['Water', 'Normal'],
        abilities: ['Storm Drain', 'Unaware', 'Hydrate'],
        innates: ['Damp', 'Hydration', 'Drizzle'],
        bs: { hp: 110, at: 75, df: 75, sa: 100, sd: 100, sp: 70 }
    },
    'Hoppip': {
        id: 187,
        abilities: ['Leaf Guard', 'Infiltrator', 'Aerilate'],
        innates: ['Chlorophyll', 'Aerodynamics']
    },
    'Skiploom': {
        id: 188,
        abilities: ['Leaf Guard', 'Infiltrator', 'Aerilate'],
        innates: ['Chlorophyll', 'Aerodynamics']
    },
    'Jumpluff': {
        id: 189,
        abilities: ['Leaf Guard', 'Infiltrator', 'Aerilate'],
        innates: ['Chlorophyll', 'Aerodynamics', 'Cotton Down'],
        bs: { hp: 75, at: 75, df: 70, sa: 55, sd: 95, sp: 130 }
    },
    'Aipom': {
        id: 190,
        abilities: ['Super Luck', 'Normalize', 'Simple'],
        innates: ['Technician', 'Skill Link', 'Moody']
    },
    'Sunkern': {
        id: 191,
        abilities: ['Chloroplast', 'Solar Power', 'Solar Power'],
        innates: ['Chlorophyll']
    },
    'Sunflora': {
        id: 192,
        'types': ['Grass', 'Fire'],
        abilities: ['Chloroplast', 'Grassy Surge', 'Drought'],
        innates: ['Chlorophyll', 'Solar Power', 'Early Bird'],
        bs: { hp: 95, at: 75, df: 55, sa: 125, sd: 85, sp: 30 }
    },
    'Yanma': {
        id: 193,
        abilities: ['Aerodynamics', 'Infiltrator', 'Tinted Lens'],
        innates: ['Speed Boost', 'Compound Eyes', 'Swarm']
    },
    'Wooper': {
        id: 194,
        abilities: ['Oblivious', 'Oblivious', 'Rain Dish'],
        innates: ['Unaware', 'Water Absorb']
    },
    'Quagsire': {
        id: 195,
        abilities: ['Hydrate', 'Groundate', 'Water Veil'],
        innates: ['Unaware', 'Water Absorb', 'Regenerator'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 35 },
        otherFormes: ['Quagsire-Mega']
    },
    'Espeon': {
        id: 196,
        abilities: ['Soul-Heart', 'Sage Power', 'Psychic Surge'],
        innates: ['Magic Bounce', 'Avenger', 'Psychic Mind']
    },
    'Umbreon': {
        id: 197,
        abilities: ['Bad Luck', 'Self Sufficient', 'Soul Linker'],
        innates: ['Predator', 'Nocturnal', 'Dark Aura']
    },
    'Murkrow': {
        id: 198,
        abilities: ['Moody', 'Super Luck', 'Prankster'],
        innates: ['Big Pecks', 'Nocturnal', 'Bad Luck'],
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 101 }
    },
    'Slowking': {
        id: 199,
        abilities: ['Regenerator', 'Unaware', 'Twisted Dimension'],
        innates: ['Oblivious', 'Own Tempo', 'Battle Armor'],
        otherFormes: ['Slowking-Galarian']
    },
    'Misdreavus': {
        id: 200,
        'types': ['Ghost', 'Fairy'],
        abilities: ['Perish Body', 'Shadow Tag', 'Pixilate'],
        innates: ['Levitate', 'Cursed Body', 'Vengeance']
    },
    'Unown': {
        id: 201,
        abilities: ['Mystic Power', 'Mystic Power', 'Mystic Power'],
        innates: ['Levitate']
    },
    'Wobbuffet': {
        id: 202,
        abilities: ['Shadow Tag', 'Soul Linker', 'Screen Cleaner'],
        innates: ['Sticky Hold', 'Inflatable', 'Limber']
    },
    'Girafarig': {
        id: 203,
        abilities: ['Scare', 'Contrary', 'Sap Sipper'],
        innates: ['Multi Headed', 'Nocturnal', 'Strong Jaw'],
        bs: { hp: 70, at: 100, df: 65, sa: 90, sd: 65, sp: 105 },
        heads: 2
    },
    'Pineco': {
        id: 204,
        abilities: ['Sturdy', 'Sturdy', 'Stamina'],
        innates: ['Overcoat']
    },
    'Forretress': {
        id: 205,
        abilities: ['Sturdy', 'Fort Knox', 'Stamina'],
        innates: ['Overcoat', 'Lead Coat', 'Heatproof'],
        bs: { hp: 75, at: 100, df: 140, sa: 60, sd: 80, sp: 20 }
    },
    'Dunsparce': {
        id: 206,
        abilities: ['Serene Grace', 'Field Explorer', 'Unaware'],
        innates: ['Super Luck', 'Run Away', 'Rattled'],
        bs: { hp: 110, at: 80, df: 80, sa: 65, sd: 75, sp: 45 }
    },
    'Gligar': {
        id: 207,
        abilities: ['Immunity', 'Battle Armor', 'Poison Heal'],
        innates: ['Hyper Cutter', 'Sand Veil', 'Rough Skin']
    },
    'Steelix': {
        id: 208,
        abilities: ['Fort Knox', 'Impenetrable', 'Coil Up'],
        innates: ['Lead Coat', 'Groundate', 'Strong Jaw'],
        otherFormes: ['Steelix-Mega'],
        bs: { hp: 75, at: 105, df: 200, sa: 55, sd: 75, sp: 20 }
    },
    'Snubbull': {
        id: 209,
        abilities: ['Intimidate', 'Pixilate', 'Rattled'],
        innates: ['Quick Feet']
    },
    'Granbull': {
        id: 210,
        'types': ['Fairy', 'Dark'],
        abilities: ['Intimidate', 'Guts', 'Violent Rush'],
        innates: ['Fighting Spirit', 'Strong Jaw', 'Quick Feet'],
        bs: { hp: 90, at: 130, df: 75, sa: 60, sd: 60, sp: 65 }
    },
    'Qwilfish': {
        id: 211,
        abilities: ['Innards Out', 'Poisonate', 'Intimidate'],
        innates: ['Swift Swim', 'Inflatable', 'Poison Point'],
        bs: { hp: 65, at: 95, df: 115, sa: 55, sd: 55, sp: 85 }
    },
    'Scizor': {
        id: 212,
        abilities: ['Regenerator', 'Grip Pincer', 'Intimidate'],
        innates: ['Technician', 'Hyper Cutter', 'Buginize'],
        otherFormes: ['Scizor-Mega']
    },
    'Shuckle': {
        id: 213,
        abilities: ['Moody', 'Regenerator', 'Contrary'],
        innates: ['Shell Armor', 'Fort Knox', 'Solid Rock'],
        otherFormes: ['Shuckle-Mega']
    },
    'Heracross': {
        id: 214,
        abilities: ['Skill Link', 'Violent Rush', 'Moxie'],
        innates: ['Swarm', 'Battle Armor', 'Guts'],
        otherFormes: ['Heracross-Mega']
    },
    'Sneasel': {
        id: 215,
        abilities: ['Hyper Aggressive', 'Technician', 'Fatal Precision'],
        innates: ['Tough Claws', 'Inner Focus', 'Infiltrator'],
        bs: { hp: 55, at: 75, df: 55, sa: 35, sd: 75, sp: 115 }
    },
    'Teddiursa': {
        id: 216,
        abilities: ['Scrappy', 'Tough Claws', 'Tough Claws'],
        innates: ['Guts', 'Quick Feet', 'Fur Coat']
    },
    'Ursaring': {
        id: 217,
        abilities: ['Intimidate', 'Tough Claws', 'Predator'],
        innates: ['Guts', 'Quick Feet', 'Fur Coat'],
        bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 75 }
    },
    'Slugma': {
        id: 218,
        abilities: ['Simple', 'Flame Body', 'Flame Body'],
        innates: ['Molten Down', 'Flash Fire']
    },
    'Magcargo': {
        id: 219,
        abilities: ['Simple', 'Mountaineer', 'Shell Armor'],
        innates: ['Molten Down', 'Flash Fire', 'Magma Armor']
    },
    'Swinub': {
        id: 220,
        abilities: ['Oblivious', 'Sheer Force', 'Sheer Force'],
        innates: ['Slush Rush', 'Snow Cloak']
    },
    'Piloswine': {
        id: 221,
        abilities: ['Fur Coat', 'Sheer Force', 'Mountaineer'],
        innates: ['Slush Rush', 'Thick Fat', 'Growing Tooth']
    },
    'Corsola': {
        id: 222,
        abilities: ['Sturdy', 'Rough Skin', 'Water Veil'],
        innates: ['Regenerator', 'Natural Cure', 'Solid Rock'],
        otherFormes: ['Corsola-Galarian'],
        bs: { hp: 85, at: 55, df: 95, sa: 85, sd: 95, sp: 35 }
    },
    'Remoraid': {
        id: 223,
        abilities: ['Hustle', 'Sniper', 'Moody'],
        innates: ['Artillery', 'Swift Swim']
    },
    'Octillery': {
        id: 224,
        'types': ['Water', 'Ground'],
        abilities: ['Suction Cups', 'Sniper', 'Moody'],
        innates: ['Artillery', 'Swift Swim', 'Mega Launcher'],
        bs: { hp: 75, at: 65, df: 95, sa: 125, sd: 95, sp: 45 }
    },
    'Delibird': {
        id: 225,
        'types': ['Ice'],
        abilities: ['Adaptability', 'Prankster', 'Slush Rush'],
        innates: ['Thick Fat', 'Magic Bounce', 'Christmas Spirit'],
        bs: { hp: 80, at: 105, df: 55, sa: 65, sd: 55, sp: 95 }
    },
    'Mantine': {
        id: 226,
        abilities: ['Regenerator', 'Water Veil', 'Drizzle'],
        innates: ['Rain Dish', 'Water Absorb', 'Giant Wings']
    },
    'Skarmory': {
        id: 227,
        abilities: ['Mirror Armor', 'Sturdy', 'Lead Coat'],
        innates: ['Giant Wings', 'Full Metal Body', 'Battle Armor'],
        otherFormes: ['Skarmory-Mega']
    },
    'Houndour': {
        id: 228,
        abilities: ['Flame Body', 'Pyromancy', 'Pyromancy'],
        innates: ['Nocturnal', 'Solenoglyphs']
    },
    'Houndoom': {
        id: 229,
        abilities: ['Strong Jaw', 'Molten Down', 'Solar Power'],
        innates: ['Nocturnal', 'Solenoglyphs', 'Soul Eater'],
        otherFormes: ['Houndoom-Mega'],
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 105 }
    },
    'Kingdra': {
        id: 230,
        abilities: ['Swift Swim', 'Sniper', 'Torrent'],
        innates: ['Prism Scales', 'Mega Launcher', 'Marvel Scale'],
        otherFormes: ['Kingdra-Mega']
    },
    'Phanpy': {
        id: 231,
        abilities: ['Sheer Force', 'Thick Fat', 'Stamina'],
        innates: ['Lets Roll', 'Rough Skin']
    },
    'Donphan': {
        id: 232,
        abilities: ['Sheer Force', 'Thick Fat', 'Stamina'],
        innates: ['Lets Roll', 'Rough Skin', 'Battle Armor'],
        bs: { hp: 90, at: 130, df: 130, sa: 60, sd: 60, sp: 50 }
    },
    'Porygon2': {
        id: 233,
        abilities: ['Download', 'Trace', 'Twisted Dimension'],
        innates: ['Analytic', 'Regenerator', 'Levitate']
    },
    'Stantler': {
        id: 234,
        abilities: ['Quick Feet', 'Rivalry', 'Intimidate'],
        innates: ['Sap Sipper', 'Violent Rush', 'Hypnotist'],
        bs: { hp: 73, at: 115, df: 62, sa: 85, sd: 65, sp: 95 }
    },
    'Smeargle': {
        id: 235,
        abilities: ['Prankster', 'Simple', 'Moody'],
        innates: ['Own Tempo', 'Technician', 'Skill Link']
    },
    'Tyrogue': {
        id: 236,
        abilities: ['Steadfast', 'Steadfast', 'Steadfast'],
        innates: ['Guts', 'Vital Spirit']
    },
    'Hitmontop': {
        id: 237,
        abilities: ['Steadfast', 'Fighting Spirit', 'Contrary'],
        innates: ['Technician', 'Intimidate'],
        otherFormes: ['Hitmontop-Mega'],
        bs: { hp: 80, at: 95, df: 95, sa: 35, sd: 110, sp: 70 }
    },
    'Smoochum': {
        id: 238,
        abilities: ['Oblivious', 'Forewarn', 'Hydration'],
        innates: ['Dry Skin']
    },
    'Elekid': {
        id: 239,
        abilities: ['Static', 'Static', 'Vital Spirit'],
        innates: ['Minus']
    },
    'Magby': {
        id: 240,
        abilities: ['Flame Body', 'Flame Body', 'Vital Spirit'],
        innates: ['Flash Fire']
    },
    'Miltank': {
        id: 241,
        abilities: ['Self Sufficient', 'Scrappy', 'Stamina'],
        innates: ['Thick Fat', 'Sap Sipper', 'Juggernaut']
    },
    'Blissey': {
        id: 242,
        abilities: ['Regenerator', 'Serene Grace', 'Self Sufficient'],
        innates: ['Natural Cure', 'Healer', 'Super Luck']
    },
    'Raikou': {
        id: 243,
        abilities: ['Transistor', 'Ground Shock', 'Drizzle'],
        innates: ['Overcharge', 'Beast Boost', 'Electric Surge']
    },
    'Entei': {
        id: 244,
        abilities: ['Avenger', 'Flaming Soul', 'Drought'],
        innates: ['Strong Jaw', 'Beast Boost', 'Molten Down']
    },
    'Suicune': {
        id: 245,
        abilities: ['North Wind', 'Prism Scales', 'Drizzle'],
        innates: ['Aurora Borealis', 'Water Veil', 'Sea Guardian']
    },
    'Larvitar': {
        id: 246,
        abilities: ['Guts', 'Sand Force', 'Moxie'],
        innates: ['Solid Rock', 'Mountaineer', 'Rough Skin']
    },
    'Pupitar': {
        id: 247,
        abilities: ['Shed Skin', 'Sand Veil', 'Battle Armor'],
        innates: ['Solid Rock', 'Mountaineer', 'Rough Skin']
    },
    'Tyranitar': {
        id: 248,
        abilities: ['Strong Jaw', 'Moxie', 'Sand Stream'],
        innates: ['Impenetrable', 'Juggernaut', 'Rough Skin'],
        otherFormes: ['Tyranitar-Mega']
    },
    'Lugia': {
        id: 249,
        'types': ['Water', 'Psychic'],
        abilities: ['Multiscale', 'Weather Control', 'Air Blower'],
        innates: ['Levitate', 'Sea Guardian', 'Psychic Mind']
    },
    'Ho-Oh': {
        id: 250,
        'types': ['Fire', 'Fairy'],
        abilities: ['Delta Stream', 'Magic Guard', 'Self Sufficient'],
        innates: ['Levitate', 'Majestic Bird', 'Prism Scales']
    },
    'Celebi': {
        id: 251,
        'types': ['Grass', 'Fairy'],
        abilities: ['Self Sufficient', 'Avenger', 'Grassy Surge'],
        innates: ['Psychic Mind', 'Natural Cure', 'Grass Pelt']
    },
    'Treecko': {
        id: 252,
        abilities: ['Chloroplast', 'Unburden', 'Speed Force'],
        innates: ['Overgrow', 'Sticky Hold', 'Inner Focus']
    },
    'Grovyle': {
        id: 253,
        abilities: ['Chloroplast', 'Keen Edge', 'Speed Force'],
        innates: ['Overgrow', 'Skill Link', 'Inner Focus']
    },
    'Sceptile': {
        id: 254,
        'types': ['Grass', 'Dragon'],
        abilities: ['Chloroplast', 'Protean', 'Speed Force'],
        innates: ['Overgrow', 'Skill Link', 'Keen Edge'],
        otherFormes: ['Sceptile-Mega'],
        bs: { hp: 70, at: 105, df: 65, sa: 85, sd: 85, sp: 120 }
    },
    'Torchic': {
        id: 255,
        abilities: ['Iron Fist', 'Aerodynamics', 'Speed Boost'],
        innates: ['Blaze', 'Flame Body', 'Avenger']
    },
    'Combusken': {
        id: 256,
        abilities: ['Iron Fist', 'Aerodynamics', 'Speed Boost'],
        innates: ['Blaze', 'Flame Body', 'Striker']
    },
    'Blaziken': {
        id: 257,
        abilities: ['Iron Fist', 'Aerodynamics', 'Speed Boost'],
        innates: ['Blaze', 'Flame Body', 'Striker'],
        otherFormes: ['Blaziken-Mega']
    },
    'Mudkip': {
        id: 258,
        abilities: ['Swift Swim', 'Field Explorer', 'Rivalry'],
        innates: ['Torrent', 'Dry Skin']
    },
    'Marshtomp': {
        id: 259,
        abilities: ['Swift Swim', 'Field Explorer', 'Stamina'],
        innates: ['Torrent', 'Dry Skin', 'Battle Armor']
    },
    'Swampert': {
        id: 260,
        abilities: ['Swift Swim', 'Field Explorer', 'Stamina'],
        innates: ['Torrent', 'Dry Skin', 'Regenerator'],
        otherFormes: ['Swampert-Mega']
    },
    'Poochyena': {
        id: 261,
        abilities: ['Moxie', 'Intimidate', 'Rattled'],
        innates: ['Predator', 'Strong Jaw', 'Nocturnal'],
        bs: { hp: 35, at: 65, df: 35, sa: 30, sd: 30, sp: 65 }
    },
    'Mightyena': {
        id: 262,
        abilities: ['Moxie', 'Intimidate', 'Opportunist'],
        innates: ['Predator', 'Strong Jaw', 'Stakeout'],
        bs: { hp: 70, at: 110, df: 70, sa: 60, sd: 80, sp: 105 }
    },
    'Zigzagoon': {
        id: 263,
        abilities: ['Pickup', 'Run Away', 'Limber'],
        innates: ['Gluttony', 'Quick Feet'],
        otherFormes: ['Zigzagoon-Galarian']
    },
    'Linoone': {
        id: 264,
        abilities: ['Pickup', 'Run Away', 'Limber'],
        innates: ['Gluttony', 'Quick Feet', 'Field Explorer'],
        otherFormes: ['Linoone-Galarian'],
        bs: { hp: 78, at: 100, df: 61, sa: 50, sd: 61, sp: 110 }
    },
    'Wurmple': {
        id: 265,
        abilities: ['Shield Dust', 'Suction Cups', 'Poison Point'],
        innates: ['Swarm', 'Run Away', 'Sap Sipper']
    },
    'Silcoon': {
        id: 266,
        abilities: ['Shed Skin', 'Shed Skin', 'Poison Point'],
        innates: ['Swarm', 'Battle Armor', 'Sap Sipper']
    },
    'Beautifly': {
        id: 267,
        'types': ['Bug', 'Fairy'],
        abilities: ['Shield Dust', 'Compound Eyes', 'Aerodynamics'],
        innates: ['Majestic Moth', 'Pixilate', 'Levitate'],
        bs: { hp: 60, at: 50, df: 60, sa: 85, sd: 60, sp: 85 }
    },
    'Cascoon': {
        id: 268,
        abilities: ['Shed Skin', 'Shed Skin', 'Poison Point'],
        innates: ['Swarm', 'Battle Armor', 'Sap Sipper'],
        otherFormes: ['Cascoon-Primal']
    },
    'Dustox': {
        id: 269,
        abilities: ['Poison Touch', 'Compound Eyes', 'Aerodynamics'],
        innates: ['Majestic Moth', 'Nocturnal', 'Levitate'],
        bs: { hp: 80, at: 30, df: 90, sa: 70, sd: 90, sp: 65 }
    },
    'Lotad': {
        id: 270,
        abilities: ['Swift Swim', 'Chlorophyll', 'Own Tempo'],
        innates: ['Seaweed', 'Rain Dish', 'Hydration']
    },
    'Lombre': {
        id: 271,
        abilities: ['Swift Swim', 'Chlorophyll', 'Own Tempo'],
        innates: ['Seaweed', 'Rain Dish', 'Hydration']
    },
    'Ludicolo': {
        id: 272,
        abilities: ['Swift Swim', 'Chlorophyll', 'Own Tempo'],
        innates: ['Seaweed', 'Rain Dish', 'Hydration'],
        bs: { hp: 80, at: 70, df: 70, sa: 100, sd: 100, sp: 80 }
    },
    'Seedot': {
        id: 273,
        abilities: ['Early Bird', 'Early Bird', 'Defiant'],
        innates: ['Overgrow', 'Chlorophyll']
    },
    'Nuzleaf': {
        id: 274,
        abilities: ['Early Bird', 'Moxie', 'Defiant'],
        innates: ['Overgrow', 'Chlorophyll', 'Nocturnal']
    },
    'Shiftry': {
        id: 275,
        abilities: ['Early Bird', 'Moxie', 'Defiant'],
        innates: ['Overgrow', 'Chlorophyll', 'Nocturnal'],
        bs: { hp: 90, at: 110, df: 60, sa: 100, sd: 60, sp: 80 }
    },
    'Taillow': {
        id: 276,
        abilities: ['Tangled Feet', 'Tangled Feet', 'Scrappy'],
        innates: ['Flock', 'Keen Eye', 'Guts']
    },
    'Swellow': {
        id: 277,
        abilities: ['Gale Wings', 'Air Blower', 'Scrappy'],
        innates: ['Flock', 'Keen Eye', 'Guts'],
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 50, sp: 125 }
    },
    'Wingull': {
        id: 278,
        abilities: ['Hydration', 'Hydration', 'Hydration'],
        innates: ['Keen Eye', 'Rain Dish', 'Flock']
    },
    'Pelipper': {
        id: 279,
        abilities: ['Drizzle', 'Hydration', 'Air Blower'],
        innates: ['Keen Eye', 'Rain Dish', 'Flock']
    },
    'Ralts': {
        id: 280,
        abilities: ['Telepathy', 'Trace', 'Synchronize']
    },
    'Kirlia': {
        id: 281,
        abilities: ['Psychic Mind', 'Trace', 'Synchronize'],
        innates: ['Serene Grace']
    },
    'Gardevoir': {
        id: 282,
        abilities: ['Queenly Majesty', 'Soul-Heart', 'Psychic Surge'],
        innates: ['Serene Grace', 'Magic Guard', 'Dreamcatcher'],
        otherFormes: ['Gardevoir-Mega'],
        bs: { hp: 68, at: 60, df: 65, sa: 125, sd: 115, sp: 100 }
    },
    'Surskit': {
        id: 283,
        abilities: ['Swift Swim', 'Swift Swim', 'Rain Dish'],
        innates: ['Compound Eyes']
    },
    'Masquerain': {
        id: 284,
        'types': ['Bug', 'Water'],
        abilities: ['Intimidate', 'Scare', 'Unnerve'],
        innates: ['Compound Eyes', 'Majestic Moth', 'Levitate'],
        bs: { hp: 70, at: 60, df: 72, sa: 75, sd: 82, sp: 80 }
    },
    'Shroomish': {
        id: 285,
        abilities: ['Poison Heal', 'Poison Heal', 'Poison Heal'],
        innates: ['Effect Spore', 'Toxic Boost', 'Quick Feet']
    },
    'Breloom': {
        id: 286,
        abilities: ['Poison Heal', 'Precise Fist', 'Long Reach'],
        innates: ['Effect Spore', 'Toxic Boost', 'Technician'],
        otherFormes: ['Breloom-Mega']
    },
    'Slakoth': {
        id: 287,
        abilities: ['Truant', 'Truant', 'Truant'],
        innates: ['Comatose', 'Unaware']
    },
    'Vigoroth': {
        id: 288,
        abilities: ['Sheer Force', 'Moxie', 'Scrappy'],
        innates: ['Anger Point', 'Hyper Aggressive', 'Vital Spirit']
    },
    'Slaking': {
        id: 289,
        abilities: ['Truant', 'Truant', 'Stall'],
        innates: ['Comatose', 'Unaware', 'Mold Breaker'],
        otherFormes: ['Slaking-Mega'],
        bs: { hp: 130, at: 150, df: 100, sa: 75, sd: 95, sp: 100 }
    },
    'Nincada': {
        id: 290,
        abilities: ['Rattled', 'Rattled', 'Run Away'],
        innates: ['Compound Eyes', 'Shed Skin', 'Dry Skin']
    },
    'Ninjask': {
        id: 291,
        abilities: ['Aerodynamics', 'Speed Force', 'Aerilate'],
        innates: ['Compound Eyes', 'Infiltrator', 'Speed Boost'],
        bs: { hp: 61, at: 100, df: 45, sa: 50, sd: 50, sp: 160 }
    },
    'Shedinja': {
        id: 292,
        abilities: ['Wonder Guard', 'Wonder Guard', 'Wonder Guard'],
        innates: ['Wonder Skin', 'Levitate', 'Cursed Body'],
        bs: { hp: 1, at: 90, df: 45, sa: 70, sd: 30, sp: 40 }
    },
    'Whismur': {
        id: 293,
        abilities: ['Soundproof', 'Soundproof', 'Rattled'],
        innates: ['Scrappy']
    },
    'Loudred': {
        id: 294,
        abilities: ['Soundproof', 'Soundproof', 'Sheer Force'],
        innates: ['Scrappy', 'Loud Bang', 'Amplifier']
    },
    'Exploud': {
        id: 295,
        abilities: ['Punk Rock', 'Competitive', 'Sheer Force'],
        innates: ['Scrappy', 'Loud Bang', 'Amplifier'],
        bs: { hp: 104, at: 91, df: 63, sa: 111, sd: 83, sp: 68 }
    },
    'Makuhita': {
        id: 296,
        abilities: ['Iron Fist', 'Iron Fist', 'Iron Fist'],
        innates: ['Thick Fat', 'Guts', 'Rivalry']
    },
    'Hariyama': {
        id: 297,
        abilities: ['Iron Fist', 'Skill Link', 'Stamina'],
        innates: ['Thick Fat', 'Guts', 'Rivalry'],
        bs: { hp: 144, at: 130, df: 70, sa: 40, sd: 70, sp: 50 }
    },
    'Azurill': {
        id: 298,
        abilities: ['Huge Power', 'Huge Power', 'Sap Sipper'],
        innates: ['Thick Fat']
    },
    'Nosepass': {
        id: 299,
        abilities: ['Sturdy', 'Magnet Pull', 'Rock Head'],
        innates: ['Solid Rock', 'Sand Force']
    },
    'Skitty': {
        id: 300,
        abilities: ['Normalize', 'Friend Guard', 'Wonder Skin'],
        innates: ['Cute Charm']
    },
    'Delcatty': {
        id: 301,
        abilities: ['Dazzling', 'Soundproof', 'Speed Force'],
        innates: ['Wonder Skin', 'Feline Prowess', 'Nocturnal'],
        bs: { hp: 70, at: 85, df: 65, sa: 55, sd: 55, sp: 110 }
    },
    'Sableye': {
        id: 302,
        abilities: ['Hypnotist', 'Soul Linker', 'Prankster'],
        innates: ['Analytic', 'Wonder Skin', 'Nocturnal'],
        otherFormes: ['Sableye-Mega'],
        bs: { hp: 70, at: 75, df: 80, sa: 65, sd: 70, sp: 50 }
    },
    'Mawile': {
        id: 303,
        abilities: ['Adaptability', 'Intimidate', 'Scare'],
        innates: ['Multi Headed', 'Strong Jaw', 'Grip Pincer'],
        otherFormes: ['Mawile-Mega'],
        bs: { hp: 70, at: 85, df: 95, sa: 55, sd: 55, sp: 50 },
        heads: 2
    },
    'Aron': {
        id: 304,
        abilities: ['Sturdy', 'Rock Head', 'Iron Barbs'],
        innates: ['Lead Coat']
    },
    'Lairon': {
        id: 305,
        abilities: ['Sturdy', 'Rock Head', 'Iron Barbs'],
        innates: ['Lead Coat', 'Juggernaut', 'Impenetrable']
    },
    'Aggron': {
        id: 306,
        abilities: ['Juggernaut', 'Heatproof', 'Iron Barbs'],
        innates: ['Lead Coat', 'Filter', 'Impenetrable'],
        otherFormes: ['Aggron-Mega']
    },
    'Meditite': {
        id: 307,
        abilities: ['Pure Power', 'Pure Power', 'Technician'],
        innates: ['Psychic Mind']
    },
    'Medicham': {
        id: 308,
        abilities: ['Pure Power', 'Pure Power', 'Technician'],
        innates: ['Psychic Mind', 'Striker', 'Limber'],
        otherFormes: ['Medicham-Mega']
    },
    'Electrike': {
        id: 309,
        abilities: ['Static', 'Lightning Rod', 'Lightning Rod'],
        innates: ['Plus', 'Quick Feet']
    },
    'Manectric': {
        id: 310,
        abilities: ['Static', 'Illuminate', 'Electric Burst'],
        innates: ['Plus', 'Lightning Rod', 'Overcharge'],
        otherFormes: ['Manectric-Mega'],
        bs: { hp: 70, at: 100, df: 60, sa: 125, sd: 60, sp: 105 }
    },
    'Plusle': {
        id: 311,
        'types': ['Electric', 'Fairy'],
        abilities: ['Transistor', 'Transistor', 'Lightning Rod'],
        innates: ['Plus', 'Pixilate', 'Speed Boost'],
        bs: { hp: 60, at: 50, df: 50, sa: 105, sd: 75, sp: 105 }
    },
    'Minun': {
        id: 312,
        'types': ['Electric', 'Fairy'],
        abilities: ['Transistor', 'Transistor', 'Lightning Rod'],
        innates: ['Minus', 'Pixilate', 'Speed Boost'],
        bs: { hp: 60, at: 105, df: 50, sa: 50, sd: 75, sp: 105 }
    },
    'Volbeat': {
        id: 313,
        'types': ['Bug', 'Electric'],
        abilities: ['Galvanize', 'Tinted Lens', 'Prankster'],
        innates: ['Swarm', 'Illuminate', 'Electrocytes'],
        bs: { hp: 65, at: 73, df: 85, sa: 47, sd: 85, sp: 115 }
    },
    'Illumise': {
        id: 314,
        'types': ['Bug', 'Fairy'],
        abilities: ['Pixilate', 'Tinted Lens', 'Prankster'],
        innates: ['Swarm', 'Nocturnal', 'Cute Charm'],
        bs: { hp: 65, at: 47, df: 75, sa: 93, sd: 85, sp: 105 }
    },
    'Roselia': {
        id: 315,
        abilities: ['Leaf Guard', 'Long Reach', 'Technician'],
        innates: ['Natural Cure', 'Chlorophyll', 'Poison Point']
    },
    'Gulpin': {
        id: 316,
        abilities: ['Liquid Ooze', 'Pickup', 'Gooey'],
        innates: ['Sticky Hold', 'Liquified', 'Gluttony']
    },
    'Swalot': {
        id: 317,
        abilities: ['Poison Absorb', 'Regenerator', 'Gluttony'],
        innates: ['Sticky Hold', 'Liquified', 'Unaware'],
        bs: { hp: 100, at: 83, df: 93, sa: 83, sd: 93, sp: 55 }
    },
    'Carvanha': {
        id: 318,
        abilities: ['Weak Armor', 'Weak Armor', 'Speed Boost'],
        innates: ['Strong Jaw', 'Swift Swim', 'Rough Skin']
    },
    'Sharpedo': {
        id: 319,
        abilities: ['Speed Force', 'Hyper Aggressive', 'Speed Boost'],
        innates: ['Strong Jaw', 'Swift Swim', 'Predator'],
        otherFormes: ['Sharpedo-Mega'],
        bs: { hp: 70, at: 120, df: 40, sa: 115, sd: 40, sp: 95 }
    },
    'Wailmer': {
        id: 320,
        abilities: ['Water Veil', 'Stamina', 'Drizzle'],
        innates: ['Liquid Voice', 'Thick Fat']
    },
    'Wailord': {
        id: 321,
        abilities: ['Water Veil', 'Stamina', 'Drizzle'],
        innates: ['Liquid Voice', 'Thick Fat', 'Pressure'],
        bs: { hp: 170, at: 90, df: 65, sa: 90, sd: 65, sp: 60 }
    },
    'Numel': {
        id: 322,
        abilities: ['Stamina', 'Stamina', 'Simple'],
        innates: ['Own Tempo']
    },
    'Camerupt': {
        id: 323,
        abilities: ['Stamina', 'Anger Point', 'Sheer Force'],
        innates: ['Magma Armor', 'Solid Rock', 'Molten Down'],
        otherFormes: ['Camerupt-Mega'],
        bs: { hp: 90, at: 100, df: 80, sa: 105, sd: 85, sp: 40 }
    },
    'Torkoal': {
        id: 324,
        abilities: ['Stamina', 'Impenetrable', 'Drought'],
        innates: ['Shell Armor', 'White Smoke', 'Mountaineer']
    },
    'Spoink': {
        id: 325,
        abilities: ['Magic Bounce', 'Magic Bounce', 'Own Tempo'],
        innates: ['Gluttony']
    },
    'Grumpig': {
        id: 326,
        abilities: ['Magic Bounce', 'Magic Bounce', 'Own Tempo'],
        innates: ['Gluttony', 'Thick Fat', 'Fur Coat'],
        bs: { hp: 100, at: 45, df: 55, sa: 100, sd: 110, sp: 80 }
    },
    'Spinda': {
        id: 327,
        abilities: ['Contrary', 'Competitive', 'Dancer'],
        innates: ['Unaware', 'Simple', 'Field Explorer'],
        bs: { hp: 60, at: 90, df: 60, sa: 90, sd: 60, sp: 90 }
    },
    'Trapinch': {
        id: 328,
        'types': ['Ground', 'Bug'],
        abilities: ['Sheer Force', 'Arena Trap', 'Arena Trap'],
        innates: ['Hyper Cutter', 'Strong Jaw']
    },
    'Vibrava': {
        id: 329,
        'types': ['Ground', 'Bug'],
        abilities: ['Groundate', 'Sand Force', 'Sand Stream'],
        innates: ['Dragonfly', 'Sand Song']
    },
    'Flygon': {
        id: 330,
        'types': ['Ground', 'Bug'],
        abilities: ['Sand Rush', 'Sand Force', 'Sand Stream'],
        innates: ['Dragonfly', 'Sand Song', 'Earthbound'],
        otherFormes: ['Flygon-Mega'],
        bs: { hp: 80, at: 100, df: 80, sa: 100, sd: 80, sp: 100 }
    },
    'Cacnea': {
        id: 331,
        abilities: ['Sand Rush', 'Sand Veil', 'Prankster'],
        innates: ['Nocturnal', 'Water Absorb']
    },
    'Cacturne': {
        id: 332,
        abilities: ['Sand Rush', 'Bad Luck', 'Scare'],
        innates: ['Nocturnal', 'Rough Skin', 'Soul Eater'],
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 85 }
    },
    'Swablu': {
        id: 333,
        abilities: ['Cotton Down', 'Serene Grace', 'Cute Charm'],
        innates: ['Natural Cure', 'Fluffy']
    },
    'Altaria': {
        id: 334,
        abilities: ['Cotton Down', 'Serene Grace', 'Cloud Nine'],
        innates: ['Natural Cure', 'Fluffy', 'Sweet Dreams'],
        otherFormes: ['Altaria-Mega'],
        bs: { hp: 75, at: 90, df: 90, sa: 70, sd: 105, sp: 80 }
    },
    'Zangoose': {
        id: 335,
        abilities: ['Anger Point', 'Speed Force', 'Hyper Aggressive'],
        innates: ['Toxic Boost', 'Fatal Precision', 'Tough Claws'],
        bs: { hp: 73, at: 115, df: 70, sa: 60, sd: 70, sp: 105 }
    },
    'Seviper': {
        id: 336,
        'types': ['Poison', 'Dark'],
        abilities: ['Merciless', 'Opportunist', 'Hyper Aggressive'],
        innates: ['Strong Jaw', 'Solenoglyphs', 'Coil Up'],
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 100 }
    },
    'Lunatone': {
        id: 337,
        abilities: ['Sturdy', 'Sage Power', 'Dreamcatcher'],
        innates: ['Levitate', 'Nocturnal', 'Lunar Eclipse'],
        bs: { hp: 90, at: 55, df: 65, sa: 125, sd: 115, sp: 70 }
    },
    'Solrock': {
        id: 338,
        abilities: ['Victory Star', 'Drought', 'Sun Worship'],
        innates: ['Levitate', 'Sturdy', 'Solar Flare'],
        bs: { hp: 90, at: 125, df: 115, sa: 55, sd: 65, sp: 70 }
    },
    'Barboach': {
        id: 339,
        abilities: ['Oblivious', 'Hydration', 'Sheer Force'],
        innates: ['Electrocytes', 'Galvanize']
    },
    'Whiscash': {
        id: 340,
        abilities: ['Unaware', 'Water Absorb', 'Sheer Force'],
        innates: ['Electrocytes', 'Galvanize', 'Predator'],
        bs: { hp: 110, at: 98, df: 73, sa: 76, sd: 71, sp: 60 }
    },
    'Corphish': {
        id: 341,
        abilities: ['Swift Swim', 'Swift Swim', 'Adaptability'],
        innates: ['Hyper Cutter', 'Shell Armor', 'Self Sufficient']
    },
    'Crawdaunt': {
        id: 342,
        abilities: ['Swift Swim', 'Hyper Aggressive', 'Adaptability'],
        innates: ['Hyper Cutter', 'Shell Armor', 'Grip Pincer']
    },
    'Baltoy': {
        id: 343,
        abilities: ['Telepathy', 'Sand Veil', 'Sand Veil'],
        innates: ['Levitate', 'Ancient Idol']
    },
    'Claydol': {
        id: 344,
        abilities: ['Mystic Power', 'Soul Linker', 'Twisted Dimension'],
        innates: ['Levitate', 'Ancient Idol', 'Sand Force'],
        bs: { hp: 70, at: 70, df: 105, sa: 90, sd: 120, sp: 75 }
    },
    'Lileep': {
        id: 345,
        abilities: ['Battle Armor', 'Regenerator', 'Storm Drain'],
        innates: ['Fossilized', 'Amphibious', 'Seaweed']
    },
    'Cradily': {
        id: 346,
        abilities: ['Battle Armor', 'Regenerator', 'Storm Drain'],
        innates: ['Fossilized', 'Amphibious', 'Seaweed'],
        bs: { hp: 96, at: 81, df: 97, sa: 91, sd: 107, sp: 43 }
    },
    'Anorith': {
        id: 347,
        abilities: ['Battle Armor', 'Keen Edge', 'Keen Edge'],
        innates: ['Fossilized', 'Amphibious']
    },
    'Armaldo': {
        id: 348,
        abilities: ['Battle Armor', 'Keen Edge', 'Impenetrable'],
        innates: ['Fossilized', 'Amphibious', 'Hyper Cutter'],
        bs: { hp: 75, at: 125, df: 120, sa: 70, sd: 80, sp: 45 }
    },
    'Feebas': {
        id: 349,
        abilities: ['Swift Swim', 'Oblivious', 'Scrappy'],
        innates: ['Marvel Scale']
    },
    'Milotic': {
        id: 350,
        otherFormes: ['Milotic-Mega'],
        'types': ['Water', 'Fairy'],
        abilities: ['Self Sufficient', 'Competitive', 'Marvel Scale'],
        innates: ['Prism Scales', 'Adaptability', 'Sea Guardian']
    },
    'Castform': {
        id: 351,
        abilities: ['Forecast', 'Forecast', 'Forecast'],
        innates: ['Levitate', 'Weather Control', 'Limber'],
        otherFormes: ['Castform-Sunny', 'Castform-Rainy', 'Castform-Snowy'],
        bs: { hp: 70, at: 70, df: 70, sa: 100, sd: 70, sp: 100 }
    },
    'Kecleon': {
        id: 352,
        abilities: ['Limber', 'Limber', 'Limber'],
        innates: ['Color Change', 'Protean'],
        bs: { hp: 60, at: 90, df: 70, sa: 90, sd: 120, sp: 40 }
    },
    'Shuppet': {
        id: 353,
        'types': ['Ghost', 'Normal'],
        abilities: ['Cursed Body', 'Scare', 'Insomnia'],
        innates: ['Vengeance', 'Haunted Spirit', 'Levitate']
    },
    'Banette': {
        id: 354,
        'types': ['Ghost', 'Normal'],
        abilities: ['Cursed Body', 'Vengeance', 'Insomnia'],
        innates: ['Scare', 'Haunted Spirit', 'Soul Eater'],
        otherFormes: ['Banette-Mega'],
        bs: { hp: 84, at: 125, df: 85, sa: 65, sd: 83, sp: 93 }
    },
    'Duskull': {
        id: 355,
        abilities: ['Cursed Body', 'Cursed Body', 'Cursed Body'],
        innates: ['Levitate', 'Nocturnal']
    },
    'Dusclops': {
        id: 356,
        abilities: ['Bad Luck', 'Impenetrable', 'Soul Linker'],
        innates: ['Iron Fist', 'Nocturnal', 'Soul Eater']
    },
    'Tropius': {
        id: 357,
        'types': ['Grass', 'Dragon'],
        abilities: ['Aerilate', 'Air Blower', 'Grass Pelt'],
        innates: ['Levitate', 'Giant Wings', 'Big Leaves'],
        bs: { hp: 99, at: 88, df: 93, sa: 72, sd: 97, sp: 51 }
    },
    'Chimecho': {
        id: 358,
        'types': ['Psychic', 'Fairy'],
        abilities: ['Magic Guard', 'Limber', 'Mystic Power'],
        innates: ['Levitate', 'Dreamcatcher', 'Metallic'],
        bs: { hp: 85, at: 50, df: 90, sa: 95, sd: 100, sp: 65 }
    },
    'Absol': {
        id: 359,
        'types': ['Dark', 'Fairy'],
        abilities: ['Avenger', 'Pixilate', 'Scare'],
        innates: ['Super Luck', 'Mountaineer', 'Keen Edge'],
        otherFormes: ['Absol-Mega'],
        bs: { hp: 65, at: 130, df: 65, sa: 75, sd: 65, sp: 85 }
    },
    'Wynaut': {
        id: 360,
        abilities: ['Shadow Tag', 'Shadow Tag', 'Screen Cleaner'],
        innates: ['Sticky Hold']
    },
    'Snorunt': {
        id: 361,
        abilities: ['Refrigerate', 'Refrigerate', 'Moody'],
        innates: ['Ice Body']
    },
    'Glalie': {
        id: 362,
        abilities: ['Refrigerate', 'Rock Head', 'Whiteout'],
        innates: ['Ice Body', 'Moody', 'Looter'],
        otherFormes: ['Glalie-Mega'],
        bs: { hp: 80, at: 100, df: 70, sa: 80, sd: 70, sp: 100 }
    },
    'Spheal': {
        id: 363,
        abilities: ['Sheer Force', 'Refrigerate', 'Oblivious'],
        innates: ['Thick Fat', 'Ice Body', 'Lets Roll']
    },
    'Sealeo': {
        id: 364,
        abilities: ['Sheer Force', 'Refrigerate', 'Oblivious'],
        innates: ['Thick Fat', 'Ice Body', 'Lets Roll']
    },
    'Walrein': {
        id: 365,
        abilities: ['Sheer Force', 'Refrigerate', 'Snow Warning'],
        innates: ['Thick Fat', 'Ice Body', 'Growing Tooth']
    },
    'Clamperl': {
        id: 366,
        abilities: ['Rattled', 'Rattled', 'Run Away'],
        innates: ['Shell Armor']
    },
    'Huntail': {
        id: 367,
        abilities: ['Water Veil', 'Hydration', 'Illuminate'],
        innates: ['Swift Swim', 'Strong Jaw', 'Predator'],
        bs: { hp: 55, at: 114, df: 105, sa: 94, sd: 75, sp: 72 }
    },
    'Gorebyss': {
        id: 368,
        'types': ['Water', 'Fairy'],
        abilities: ['Water Veil', 'Hydration', 'Color Change'],
        innates: ['Swift Swim', 'Adaptability', 'Predator'],
        bs: { hp: 55, at: 84, df: 65, sa: 104, sd: 40, sp: 72 }
    },
    'Relicanth': {
        id: 369,
        abilities: ['Sturdy', 'Fort Knox', 'Rough Skin'],
        innates: ['Fossilized', 'Impenetrable', 'Primal Armor'],
        bs: { hp: 100, at: 110, df: 130, sa: 45, sd: 65, sp: 55 },
        otherFormes: ['Relicanth-Mega']
    },
    'Luvdisc': {
        id: 370,
        'types': ['Water', 'Fairy'],
        abilities: ['Unaware', 'Swift Swim', 'Shield Dust'],
        innates: ['Soul-Heart', 'Multiscale', 'Serene Grace'],
        bs: { hp: 43, at: 30, df: 55, sa: 80, sd: 65, sp: 97 }
    },
    'Bagon': {
        id: 371,
        abilities: ['Intimidate', 'Burnate', 'Moxie'],
        innates: ['Rock Head', 'Anger Point', 'Reckless']
    },
    'Shelgon': {
        id: 372,
        abilities: ['Intimidate', 'Burnate', 'Moxie'],
        innates: ['Shell Armor', 'Overcoat', 'Impenetrable']
    },
    'Salamence': {
        id: 373,
        abilities: ['Intimidate', 'Predator', 'Moxie'],
        innates: ['Overwhelm', 'Anger Point', 'Rampage'],
        otherFormes: ['Salamence-Mega']
    },
    'Beldum': {
        id: 374,
        abilities: ['Steelworker', 'Magnet Pull', 'Psychic Mind'],
        innates: ['Levitate', 'Full Metal Body']
    },
    'Metang': {
        id: 375,
        abilities: ['Fatal Precision', 'Predator', 'Lead Coat'],
        innates: ['Levitate', 'Download', 'Full Metal Body']
    },
    'Metagross': {
        id: 376,
        abilities: ['Fatal Precision', 'Predator', 'Lead Coat'],
        innates: ['Prism Armor', 'Download', 'Full Metal Body'],
        otherFormes: ['Metagross-Mega']
    },
    'Regirock': {
        id: 377,
        abilities: ['Iron Fist', 'Fort Knox', 'Sand Stream'],
        innates: ['Power Core', 'Impenetrable', 'Self Sufficient']
    },
    'Regice': {
        id: 378,
        abilities: ['Sighting System', 'Heatproof', 'Snow Warning'],
        innates: ['Power Core', 'Impenetrable', 'Self Sufficient']
    },
    'Registeel': {
        id: 379,
        abilities: ['Sighting System', 'Heatproof', 'Steely Spirit'],
        innates: ['Power Core', 'Impenetrable', 'Self Sufficient']
    },
    'Latias': {
        id: 380,
        abilities: ['Mirror Armor', 'Regenerator', 'Illusion'],
        innates: ['Levitate', 'Prism Armor', 'Mystic Power'],
        otherFormes: ['Latias-Mega']
    },
    'Latios': {
        id: 381,
        abilities: ['Avenger', 'Neuroforce', 'Speed Boost'],
        innates: ['Levitate', 'Violent Rush', 'Mystic Power'],
        otherFormes: ['Latios-Mega']
    },
    'Kyogre': {
        id: 382,
        abilities: ['Swift Swim', 'Aurora Borealis', 'Predator'],
        innates: ['Drizzle', 'Self Sufficient', 'Sea Guardian'],
        otherFormes: ['Kyogre-Primal']
    },
    'Groudon': {
        id: 383,
        'types': ['Ground', 'Fire'],
        abilities: ['Tough Claws', 'Molten Down', 'Solar Power'],
        innates: ['Drought', 'Self Sufficient', 'Sun Worship'],
        otherFormes: ['Groudon-Primal']
    },
    'Rayquaza': {
        id: 384,
        abilities: ['Dragons Maw', 'Air Blower', 'Violent Rush'],
        innates: ['Air Lock', 'Weather Control', 'Rampage'],
        otherFormes: ['Rayquaza-Mega']
    },
    'Jirachi': {
        id: 385,
        abilities: ['Comatose', 'Regenerator', 'Serene Grace'],
        innates: ['Steely Spirit', 'Victory Star', 'Levitate']
    },
    'Deoxys': {
        id: 386,
        abilities: ['Pressure', 'Levitate', 'Speed Boost'],
        innates: ['Inner Focus', 'Fatal Precision', 'Psychic Mind'],
        otherFormes: ['Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Turtwig': {
        id: 387,
        abilities: ['Rough Skin', 'Stamina', 'Sheer Force'],
        innates: ['Overgrow', 'Shell Armor', 'Chloroplast']
    },
    'Grotle': {
        id: 388,
        abilities: ['Rough Skin', 'Stamina', 'Sheer Force'],
        innates: ['Overgrow', 'Shell Armor', 'Chloroplast']
    },
    'Torterra': {
        id: 389,
        abilities: ['Rough Skin', 'Stamina', 'Sheer Force'],
        innates: ['Overgrow', 'Impenetrable', 'Big Leaves'],
        bs: { hp: 95, at: 119, df: 134, sa: 55, sd: 95, sp: 36 },
        otherFormes: ['Torterra-mega']
    },
    'Chimchar': {
        id: 390,
        abilities: ['Iron Fist', 'Power Fists', 'Gorilla Tactics'],
        innates: ['Blaze', 'Prankster', 'Defiant']
    },
    'Monferno': {
        id: 391,
        abilities: ['Iron Fist', 'Power Fists', 'Gorilla Tactics'],
        innates: ['Blaze', 'Prankster', 'Defiant']
    },
    'Infernape': {
        id: 392,
        abilities: ['Iron Fist', 'Power Fists', 'Gorilla Tactics'],
        innates: ['Blaze', 'Prankster', 'Defiant'],
        otherFormes: ['Infernape-Mega']
    },
    'Piplup': {
        id: 393,
        abilities: ['Competitive', 'Defiant', 'Big Pecks'],
        innates: ['Torrent', 'Thick Fat', 'Swift Swim']
    },
    'Prinplup': {
        id: 394,
        abilities: ['Competitive', 'Defiant', 'Big Pecks'],
        innates: ['Torrent', 'Antarctic Bird', 'Swift Swim']
    },
    'Empoleon': {
        id: 395,
        abilities: ['Competitive', 'Defiant', 'Slush Rush'],
        innates: ['Torrent', 'Antarctic Bird', 'Swift Swim'],
        otherFormes: ['Empoleon-Mega']
    },
    'Starly': {
        id: 396,
        abilities: ['Intimidate', 'Reckless', 'Reckless'],
        innates: ['Flock', 'Keen Eye']
    },
    'Staravia': {
        id: 397,
        abilities: ['Intimidate', 'Reckless', 'Violent Rush'],
        innates: ['Flock', 'Keen Eye', 'Guts']
    },
    'Staraptor': {
        id: 398,
        abilities: ['Intimidate', 'Guts', 'Violent Rush'],
        innates: ['Predator', 'Reckless', 'Giant Wings']
    },
    'Bidoof': {
        id: 399,
        abilities: ['Simple', 'Looter', 'Moody'],
        innates: ['Unaware', 'Growing Tooth', 'Field Explorer']
    },
    'Bibarel': {
        id: 400,
        abilities: ['Simple', 'Looter', 'Moody'],
        innates: ['Unaware', 'Growing Tooth', 'Field Explorer'],
        bs: { hp: 89, at: 85, df: 80, sa: 55, sd: 60, sp: 71 }
    },
    'Kricketot': {
        id: 401,
        'types': ['Bug', 'Normal'],
        abilities: ['Shed Skin', 'Run Away', 'Run Away'],
        innates: ['Swarm']
    },
    'Kricketune': {
        id: 402,
        'types': ['Bug', 'Normal'],
        abilities: ['Soundproof', 'Perfectionist', 'Drizzle'],
        innates: ['Mountaineer', 'Technician', 'Buginize'],
        bs: { hp: 77, at: 65, df: 51, sa: 65, sd: 51, sp: 85 }
    },
    'Shinx': {
        id: 403,
        abilities: ['Intimidate', 'Electric Burst', 'Electric Burst'],
        innates: ['Short Circuit', 'Illuminate', 'Guts']
    },
    'Luxio': {
        id: 404,
        abilities: ['Intimidate', 'Electric Burst', 'Predator'],
        innates: ['Short Circuit', 'Illuminate', 'Guts']
    },
    'Luxray': {
        id: 405,
        'types': ['Electric', 'Dark'],
        abilities: ['Intimidate', 'Electric Burst', 'Guts'],
        innates: ['Short Circuit', 'Bad Luck', 'Predator'],
        bs: { hp: 90, at: 120, df: 79, sa: 75, sd: 79, sp: 90 }
    },
    'Budew': {
        id: 406,
        abilities: ['Poison Point', 'Poison Point', 'Leaf Guard'],
        innates: ['Natural Cure', 'Chlorophyll']
    },
    'Roserade': {
        id: 407,
        abilities: ['Technician', 'Merciless', 'Predator'],
        innates: ['Natural Cure', 'Chlorophyll', 'Poison Point']
    },
    'Cranidos': {
        id: 408,
        abilities: ['Mold Breaker', 'Rampage', 'Predator'],
        innates: ['Rock Head', 'Reckless', 'Fossilized']
    },
    'Rampardos': {
        id: 409,
        abilities: ['Mold Breaker', 'Sheer Force', 'Predator'],
        innates: ['Fossilized', 'Reckless', 'Rock Head'],
        bs: { hp: 97, at: 165, df: 80, sa: 65, sd: 50, sp: 58 }
    },
    'Shieldon': {
        id: 410,
        abilities: ['Sturdy', 'Stamina', 'Rock Head'],
        innates: ['Fossilized', 'Impenetrable', 'Primal Armor']
    },
    'Bastiodon': {
        id: 411,
        abilities: ['Battle Armor', 'Stamina', 'Iron Barbs'],
        innates: ['Dauntless Shield', 'Impenetrable', 'Primal Armor'],
        bs: { hp: 80, at: 52, df: 168, sa: 47, sd: 138, sp: 30 }
    },
    'Burmy': {
        id: 412,
        abilities: ['Shed Skin', 'Shed Skin', 'Overcoat'],
        innates: ['Swarm'],
        otherFormes: ['Burmy-Sandy-Cloak', 'Burmy-Trash-Cloak']
    },
    'Wormadam': {
        id: 413,
        abilities: ['Anticipation', 'Analytic', 'Overcoat'],
        innates: ['Swarm', 'Battle Armor', 'Buginize'],
        otherFormes: ['Wormadam-Sandy-Cloak', 'Wormadam-Trash-Cloak'],
        bs: { hp: 80, at: 59, df: 85, sa: 99, sd: 105, sp: 36 }
    },
    'Mothim': {
        id: 414,
        abilities: ['Overcoat', 'Looter', 'Tinted Lens'],
        innates: ['Swarm', 'Majestic Moth', 'Compound Eyes'],
        bs: { hp: 70, at: 54, df: 70, sa: 84, sd: 70, sp: 86 }
    },
    'Combee': {
        id: 415,
        abilities: ['Regenerator', 'Regenerator', 'Regenerator'],
        innates: ['Swarm', 'Multi Headed']
    },
    'Vespiquen': {
        id: 416,
        abilities: ['Regenerator', 'Stamina', 'Queenly Majesty'],
        innates: ['Poison Point', 'Parental Bond', 'Self Sufficient'],
        bs: { hp: 70, at: 80, df: 112, sa: 80, sd: 112, sp: 40 }
    },
    'Pachirisu': {
        id: 417,
        abilities: ['Gluttony', 'Quick Feet', 'Electric Surge'],
        innates: ['Fur Coat', 'Regenerator', 'Volt Absorb'],
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 110, sp: 95 }
    },
    'Buizel': {
        id: 418,
        abilities: ['Swift Swim', 'Technician', 'No Guard'],
        innates: ['Field Explorer', 'Pickup']
    },
    'Floatzel': {
        id: 419,
        abilities: ['Technician', 'Hydrate', 'Looter'],
        innates: ['Swift Swim', 'Field Explorer', 'Inflatable'],
        bs: { hp: 85, at: 115, df: 55, sa: 100, sd: 50, sp: 115 }
    },
    'Cherubi': {
        id: 420,
        'types': ['Grass', 'Fairy'],
        abilities: ['Leaf Guard', 'Leaf Guard', 'Leaf Guard'],
        innates: ['Chlorophyll'],
        bs: { hp: 45, at: 62, df: 45, sa: 62, sd: 53, sp: 35 }
    },
    'Cherrim': {
        id: 421,
        'types': ['Grass', 'Fairy'],
        abilities: ['Leaf Guard', 'Flower Gift', 'Flower Gift'],
        innates: ['Chlorophyll', 'Solar Power', 'Solar Flare'],
        otherFormes: ['Cherrim-Sunshine'],
        bs: { hp: 70, at: 100, df: 70, sa: 87, sd: 78, sp: 85 }
    },
    'Shellos': {
        id: 422,
        abilities: ['Shell Armor', 'Storm Drain', 'Regenerator'],
        innates: ['Sticky Hold', 'Self Sufficient', 'Limber'],
        otherFormes: ['Shellos-East-Sea']
    },
    'Gastrodon': {
        id: 423,
        abilities: ['Shell Armor', 'Storm Drain', 'Regenerator'],
        innates: ['Sticky Hold', 'Self Sufficient', 'Groundate'],
        otherFormes: ['Gastrodon-East-Sea']
    },
    'Ambipom': {
        id: 424,
        abilities: ['Run Away', 'Pickup', 'Limber'],
        innates: ['Skill Link', 'Technician', 'Quick Feet'],
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 125 }
    },
    'Drifloon': {
        id: 425,
        abilities: ['Aftermath', 'Nocturnal', 'Unburden'],
        innates: ['Inflatable', 'Flare Boost', 'Soul Eater']
    },
    'Drifblim': {
        id: 426,
        abilities: ['Aftermath', 'Nocturnal', 'Unburden'],
        innates: ['Inflatable', 'Flare Boost', 'Soul Eater'],
        bs: { hp: 150, at: 80, df: 54, sa: 90, sd: 74, sp: 80 }
    },
    'Buneary': {
        id: 427,
        abilities: ['Normalize', 'Run Away', 'Quick Feet'],
        innates: ['Limber', 'Fur Coat']
    },
    'Lopunny': {
        id: 428,
        'types': ['Normal', 'Fighting'],
        abilities: ['Normalize', 'Fighting Spirit', 'Technician'],
        innates: ['Limber', 'Fur Coat', 'Striker'],
        otherFormes: ['Lopunny-Mega'],
        bs: { hp: 65, at: 76, df: 64, sa: 54, sd: 96, sp: 115 }
    },
    'Mismagius': {
        id: 429,
        'types': ['Ghost', 'Fairy'],
        abilities: ['Bad Luck', 'Prankster', 'Shadow Tag'],
        innates: ['Levitate', 'Pixilate', 'Bad Dreams'],
        bs: { hp: 60, at: 60, df: 60, sa: 110, sd: 110, sp: 110 }
    },
    'Honchkrow': {
        id: 430,
        abilities: ['Super Luck', 'Scare', 'Moxie'],
        innates: ['Big Pecks', 'Overcoat', 'Bad Luck'],
        bs: { hp: 100, at: 105, df: 52, sa: 105, sd: 52, sp: 71 }
    },
    'Glameow': {
        id: 431,
        abilities: ['Run Away', 'Run Away', 'Rattled'],
        innates: ['Hypnotist', 'Limber', 'Quick Feet']
    },
    'Purugly': {
        id: 432,
        abilities: ['Intimidate', 'Defiant', 'Moxie'],
        innates: ['Hyper Aggressive', 'Fur Coat', 'Thick Fat'],
        bs: { hp: 71, at: 102, df: 64, sa: 64, sd: 69, sp: 112 }
    },
    'Chingling': {
        id: 433,
        abilities: ['Magic Guard', 'Magic Guard', 'Magic Guard'],
        innates: ['Levitate']
    },
    'Stunky': {
        id: 434,
        abilities: ['Poison Point', 'Anticipation', 'Run Away'],
        innates: ['Aftermath', 'Stench', 'Keen Eye']
    },
    'Skuntank': {
        id: 435,
        abilities: ['Poison Point', 'Anticipation', 'Run Away'],
        innates: ['Aftermath', 'Stench', 'Keen Eye'],
        bs: { hp: 103, at: 113, df: 67, sa: 71, sd: 61, sp: 84 }
    },
    'Bronzor': {
        id: 436,
        abilities: ['Battle Armor', 'Lead Coat', 'Sturdy'],
        innates: ['Levitate']
    },
    'Bronzong': {
        id: 437,
        abilities: ['Battle Armor', 'Lead Coat', 'Twisted Dimension'],
        innates: ['Steely Spirit', 'Heatproof', 'Bulletproof']
    },
    'Bonsly': {
        id: 438,
        'types': ['Rock', 'Grass'],
        abilities: ['Sturdy', 'Rock Head', 'Water Compaction'],
        innates: ['Raw Wood']
    },
    'Mime-Jr': {
        id: 439,
        'types': ['Psychic', 'Fairy'],
        abilities: ['Filter', 'Unnerve', 'Magic Bounce'],
        innates: ['Soundproof', 'Technician'],
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 }
    },
    'Happiny': {
        id: 440,
        abilities: ['Regenerator', 'Serene Grace', 'Serene Grace'],
        innates: ['Natural Cure', 'Healer', 'Super Luck']
    },
    'Chatot': {
        id: 441,
        abilities: ['Opportunist', 'Prankster', 'Cloud Nine'],
        innates: ['Adaptability', 'Amplifier', 'Mold Breaker'],
        bs: { hp: 76, at: 65, df: 45, sa: 102, sd: 42, sp: 101 }
    },
    'Spiritomb': {
        id: 442,
        abilities: ['Hypnotist', 'Twisted Dimension', 'Soul Linker'],
        innates: ['Soul Eater', 'Bad Dreams', 'Shadow Shield'],
        bs: { hp: 70, at: 108, df: 108, sa: 108, sd: 108, sp: 35 }
    },
    'Gible': {
        id: 443,
        abilities: ['Strong Jaw', 'Earthbound', 'Field Explorer'],
        innates: ['Hyper Aggressive', 'Sand Veil', 'Rough Skin']
    },
    'Gabite': {
        id: 444,
        abilities: ['Opportunist', 'Looter', 'Groundate'],
        innates: ['Hyper Aggressive', 'Sand Force', 'Rough Skin']
    },
    'Garchomp': {
        id: 445,
        abilities: ['Overwhelm', 'Predator', 'Keen Edge'],
        innates: ['Hyper Aggressive', 'Speed Force', 'Rough Skin'],
        otherFormes: ['Garchomp-Mega']
    },
    'Munchlax': {
        id: 446,
        abilities: ['Lets Roll', 'Oblivious', 'Oblivious'],
        innates: ['Immunity', 'Thick Fat', 'Gluttony']
    },
    'Riolu': {
        id: 447,
        abilities: ['Steadfast', 'Steadfast', 'Prankster'],
        innates: ['Inner Focus', 'Quick Feet']
    },
    'Lucario': {
        id: 448,
        abilities: ['Fighting Spirit', 'Competitive', 'Power Fists'],
        innates: ['Inner Focus', 'Fatal Precision', 'Vital Spirit'],
        otherFormes: ['Lucario-Mega']
    },
    'Hippopotas': {
        id: 449,
        abilities: ['Sand Stream', 'Rivalry', 'Intimidate'],
        innates: ['Sand Force', 'Battle Armor', 'Stamina']
    },
    'Hippowdon': {
        id: 450,
        abilities: ['Sand Stream', 'Growing Tooth', 'Hyper Aggressive'],
        innates: ['Sand Force', 'Predator', 'Strong Jaw']
    },
    'Skorupi': {
        id: 451,
        abilities: ['Poison Touch', 'Fatal Precision', 'Looter'],
        innates: ['Shell Armor', 'Grip Pincer', 'Grounded']
    },
    'Drapion': {
        id: 452,
        abilities: ['Poison Touch', 'Fatal Precision', 'Looter'],
        innates: ['Shell Armor', 'Grip Pincer', 'Nocturnal'],
        bs: { hp: 70, at: 100, df: 120, sa: 60, sd: 75, sp: 95 }
    },
    'Croagunk': {
        id: 453,
        abilities: ['Poison Touch', 'Opportunist', 'Poison Absorb'],
        innates: ['Dry Skin', 'Amphibious']
    },
    'Toxicroak': {
        id: 454,
        abilities: ['Poison Touch', 'Hydrate', 'Fighting Spirit'],
        innates: ['Dry Skin', 'Amphibious', 'Opportunist'],
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 95 }
    },
    'Carnivine': {
        id: 455,
        abilities: ['Chlorophyll', 'Grip Pincer', 'Arena Trap'],
        innates: ['Levitate', 'Strong Jaw', 'Scavenger'],
        bs: { hp: 74, at: 100, df: 92, sa: 90, sd: 92, sp: 46 }
    },
    'Finneon': {
        id: 456,
        abilities: ['Storm Drain', 'Storm Drain', 'Water Veil'],
        innates: ['Swift Swim', 'Illuminate']
    },
    'Lumineon': {
        id: 457,
        abilities: ['Storm Drain', 'Storm Drain', 'Water Veil'],
        innates: ['Swift Swim', 'Illuminate', 'Nocturnal'],
        bs: { hp: 69, at: 69, df: 76, sa: 109, sd: 86, sp: 91 }
    },
    'Mantyke': {
        id: 458,
        abilities: ['Swift Swim', 'Water Absorb', 'Water Veil'],
        innates: ['Rain Dish', 'Hydration']
    },
    'Snover': {
        id: 459,
        abilities: ['Snow Warning', 'Whiteout', 'Mountaineer'],
        innates: ['Ice Body', 'Snow Cloak', 'Permafrost']
    },
    'Abomasnow': {
        id: 460,
        abilities: ['Snow Warning', 'North Wind', 'Mountaineer'],
        innates: ['Ice Body', 'Overcoat', 'Permafrost'],
        otherFormes: ['Abomasnow-Mega'],
        bs: { hp: 90, at: 102, df: 75, sa: 102, sd: 85, sp: 60 }
    },
    'Weavile': {
        id: 461,
        abilities: ['Hyper Aggressive', 'Violent Rush', 'Fatal Precision'],
        innates: ['Tough Claws', 'Predator', 'Technician'],
        bs: { hp: 70, at: 100, df: 65, sa: 45, sd: 85, sp: 125 }
    },
    'Magnezone': {
        id: 462,
        abilities: ['Sighting System', 'Overcharge', 'Download'],
        innates: ['Galvanize', 'Multi Headed', 'Magnet Pull'],
        heads: 3
    },
    'Lickilicky': {
        id: 463,
        abilities: ['Cloud Nine', 'Regenerator', 'Long Reach'],
        innates: ['Thick Fat', 'Own Tempo', 'Unaware'],
        bs: { hp: 110, at: 95, df: 95, sa: 90, sd: 95, sp: 50 }
    },
    'Rhyperior': {
        id: 464,
        abilities: ['Lightning Rod', 'Battle Armor', 'Stamina'],
        innates: ['Solid Rock', 'Rock Head', 'Rough Skin']
    },
    'Tangrowth': {
        id: 465,
        abilities: ['Chlorophyll', 'Battle Armor', 'Long Reach'],
        innates: ['Regenerator', 'Seaweed', 'Self Sufficient']
    },
    'Electivire': {
        id: 466,
        'types': ['Electric', 'Fighting'],
        abilities: ['Power Fists', 'Ground Shock', 'Electric Surge'],
        innates: ['Vital Spirit', 'Transistor', 'Motor Drive']
    },
    'Magmortar': {
        id: 467,
        abilities: ['Pyromancy', 'Flash Fire', 'Power Fists'],
        innates: ['Molten Down', 'Flame Body', 'Mega Launcher'],
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 85, sp: 93 }
    },
    'Togekiss': {
        id: 468,
        abilities: ['Regenerator', 'Self Sufficient', 'Soul-Heart'],
        innates: ['Super Luck', 'Serene Grace', 'Pixilate']
    },
    'Yanmega': {
        id: 469,
        abilities: ['Giant Wings', 'Compound Eyes', 'Tinted Lens'],
        innates: ['Speed Boost', 'Hyper Aggressive', 'Predator'],
        bs: { hp: 86, at: 76, df: 86, sa: 126, sd: 56, sp: 95 }
    },
    'Leafeon': {
        id: 470,
        abilities: ['Keen Edge', 'Avenger', 'Grassy Surge'],
        innates: ['Big Leaves', 'Feline Prowess', 'Natural Cure']
    },
    'Glaceon': {
        id: 471,
        abilities: ['Ice Scales', 'Whiteout', 'Frozen Soul'],
        innates: ['Ice Body', 'Refrigerate', 'Slush Rush']
    },
    'Gliscor': {
        id: 472,
        abilities: ['Predator', 'Rough Skin', 'Poison Heal'],
        innates: ['Hyper Cutter', 'Grip Pincer', 'Solenoglyphs']
    },
    'Mamoswine': {
        id: 473,
        abilities: ['Permafrost', 'Sheer Force', 'Whiteout'],
        innates: ['Slush Rush', 'Thick Fat', 'Growing Tooth']
    },
    'Porygon-Z': {
        id: 474,
        'types': ['Normal', 'Electric'],
        abilities: ['Download', 'Sighting System', 'Twisted Dimension'],
        innates: ['Analytic', 'Adaptability', 'Levitate']
    },
    'Gallade': {
        id: 475,
        abilities: ['Speed Force', 'Perfectionist', 'Sheer Force'],
        innates: ['Keen Edge', 'Fatal Precision', 'Avenger'],
        otherFormes: ['Gallade-Mega'],
        bs: { hp: 68, at: 125, df: 65, sa: 60, sd: 115, sp: 100 }
    },
    'Probopass': {
        id: 476,
        abilities: ['Impenetrable', 'Magnet Pull', 'Steelworker'],
        innates: ['Solid Rock', 'Sand Force', 'Multi Headed'],
        bs: { hp: 60, at: 55, df: 145, sa: 95, sd: 150, sp: 40 },
        heads: 3
    },
    'Dusknoir': {
        id: 477,
        abilities: ['Twisted Dimension', 'Iron Fist', 'Opportunist'],
        innates: ['Cursed Body', 'Shadow Shield', 'Soul Eater'],
        bs: { hp: 45, at: 120, df: 135, sa: 60, sd: 135, sp: 45 }
    },
    'Froslass': {
        id: 478,
        abilities: ['Bad Luck', 'Refrigerate', 'Whiteout'],
        innates: ['Ice Body', 'Cursed Body', 'Slush Rush'],
        bs: { hp: 70, at: 70, df: 70, sa: 110, sd: 70, sp: 110 }
    },
    'Rotom': {
        id: 479,
        abilities: ['Cursed Body', 'Cursed Body', 'Cursed Body'],
        innates: ['Levitate', 'Minus', 'Volt Absorb'],
        otherFormes: ['Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow']
    },
    'Uxie': {
        id: 480,
        abilities: ['Magic Guard', 'Soul Linker', 'Sage Power'],
        innates: ['Levitate', 'Psychic Mind', 'Natural Cure']
    },
    'Mesprit': {
        id: 481,
        abilities: ['Magic Guard', 'Power Core', 'Sage Power'],
        innates: ['Levitate', 'Psychic Mind', 'Natural Cure']
    },
    'Azelf': {
        id: 482,
        abilities: ['Magic Guard', 'Neuroforce', 'Sage Power'],
        innates: ['Levitate', 'Psychic Mind', 'Natural Cure']
    },
    'Dialga': {
        id: 483,
        abilities: ['Bulletproof', 'Stamina', 'Lead Coat'],
        innates: ['Primal Armor', 'Impenetrable', 'Power Core']
    },
    'Palkia': {
        id: 484,
        abilities: ['Rampage', 'Swift Swim', 'Drizzle'],
        innates: ['Primal Armor', 'Sea Guardian', 'Power Core']
    },
    'Heatran': {
        id: 485,
        abilities: ['Steelworker', 'Mountaineer', 'Drought'],
        innates: ['Magma Armor', 'Molten Down', 'Flash Fire']
    },
    'Regigigas': {
        id: 486,
        abilities: ['Adaptability', 'Primal Armor', 'Raging Boxer'],
        innates: ['Power Core', 'Impenetrable', 'Juggernaut'],
        bs: { hp: 140, at: 160, df: 120, sa: 70, sd: 120, sp: 60 }
    },
    'Giratina': {
        id: 487,
        abilities: ['Intimidate', 'Scare', 'Twisted Dimension'],
        innates: ['Shadow Shield', 'Shadow Tag', 'Soul Eater'],
        otherFormes: ['Giratina-Origin']
    },
    'Cresselia': {
        id: 488,
        abilities: ['Prism Scales', 'Mystic Power', 'Magic Bounce'],
        innates: ['Levitate', 'Sweet Dreams', 'Lunar Eclipse'],
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 }
    },
    'Phione': {
        id: 489,
        abilities: ['Hydration', 'Friend Guard', 'Healer'],
        innates: ['Levitate', 'Water Veil', 'Inflatable']
    },
    'Manaphy': {
        id: 490,
        abilities: ['Swift Swim', 'Friend Guard', 'Healer'],
        innates: ['Levitate', 'Water Veil', 'Hydration']
    },
    'Darkrai': {
        id: 491,
        abilities: ['Soul Eater', 'Bad Dreams', 'Dark Aura'],
        innates: ['Levitate', 'Phantom', 'Dreamcatcher']
    },
    'Shaymin': {
        id: 492,
        abilities: ['Magic Bounce', 'Regenerator', 'Pixilate'],
        innates: ['Natural Cure', 'Harvest', 'Grass Pelt'],
        otherFormes: ['Shaymin-Sky']
    },
    'Arceus': {
        id: 493,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Mystic Power'],
        otherFormes: ['Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Victini': {
        id: 494,
        abilities: ['Turboblaze', 'Solar Flare', 'Power Spot'],
        innates: ['Victory Star', 'Magic Guard', 'Psychic Mind']
    },
    'Snivy': {
        id: 495,
        abilities: ['Chloroplast', 'Opportunist', 'Contrary'],
        innates: ['Overgrow', 'Shed Skin', 'Chlorophyll']
    },
    'Servine': {
        id: 496,
        abilities: ['Chloroplast', 'Opportunist', 'Contrary'],
        innates: ['Overgrow', 'Shed Skin', 'Chlorophyll']
    },
    'Serperior': {
        id: 497,
        'types': ['Grass', 'Dragon'],
        abilities: ['Chloroplast', 'Opportunist', 'Contrary'],
        innates: ['Overgrow', 'Shed Skin', 'Chlorophyll']
    },
    'Tepig': {
        id: 498,
        abilities: ['Reckless', 'Avenger', 'Flame Body'],
        innates: ['Blaze', 'Thick Fat', 'Gluttony']
    },
    'Pignite': {
        id: 499,
        abilities: ['Reckless', 'Avenger', 'Flame Body'],
        innates: ['Blaze', 'Thick Fat', 'Gluttony']
    },
    'Emboar': {
        id: 500,
        abilities: ['Reckless', 'Avenger', 'Violent Rush'],
        innates: ['Blaze', 'Thick Fat', 'Juggernaut'],
        bs: { hp: 110, at: 123, df: 80, sa: 70, sd: 80, sp: 65 }
    },
    'Oshawott': {
        id: 501,
        abilities: ['Swift Swim', 'Violent Rush', 'Fatal Precision'],
        innates: ['Torrent', 'Shell Armor', 'Keen Edge']
    },
    'Dewott': {
        id: 502,
        'types': ['Water', 'Fighting'],
        abilities: ['Swift Swim', 'Violent Rush', 'Fatal Precision'],
        innates: ['Torrent', 'Shell Armor', 'Keen Edge']
    },
    'Samurott': {
        id: 503,
        'types': ['Water', 'Fighting'],
        abilities: ['Swift Swim', 'Violent Rush', 'Fatal Precision'],
        innates: ['Torrent', 'Shell Armor', 'Keen Edge']
    },
    'Patrat': {
        id: 504,
        abilities: ['Run Away', 'Quick Feet', 'Quick Feet'],
        innates: ['Keen Eye', 'Analytic']
    },
    'Watchog': {
        id: 505,
        abilities: ['Run Away', 'Quick Feet', 'Field Explorer'],
        innates: ['Keen Eye', 'Analytic', 'Illuminate'],
        bs: { hp: 75, at: 95, df: 79, sa: 60, sd: 79, sp: 77 }
    },
    'Lillipup': {
        id: 506,
        abilities: ['Vital Spirit', 'Pickup', 'Run Away'],
        innates: ['Overcoat']
    },
    'Herdier': {
        id: 507,
        abilities: ['Intimidate', 'Sand Rush', 'Scrappy'],
        innates: ['Overcoat', 'Fur Coat', 'Filter']
    },
    'Stoutland': {
        id: 508,
        abilities: ['Intimidate', 'Sand Rush', 'Scrappy'],
        innates: ['Overcoat', 'Fur Coat', 'Filter'],
        bs: { hp: 85, at: 120, df: 70, sa: 45, sd: 90, sp: 80 }
    },
    'Purrloin': {
        id: 509,
        abilities: ['Unburden', 'Sniper', 'Moody'],
        innates: ['Limber', 'Prankster']
    },
    'Liepard': {
        id: 510,
        abilities: ['Unburden', 'Sniper', 'Moody'],
        innates: ['Limber', 'Prankster', 'Opportunist'],
        bs: { hp: 64, at: 98, df: 50, sa: 98, sd: 50, sp: 106 }
    },
    'Pansage': {
        id: 511,
        abilities: ['Sap Sipper', 'Sap Sipper', 'Guts'],
        innates: ['Overgrow', 'Prankster']
    },
    'Simisage': {
        id: 512,
        abilities: ['Sap Sipper', 'Sage Power', 'Guts'],
        innates: ['Overgrow', 'Prankster', 'Gluttony'],
        bs: { hp: 75, at: 108, df: 63, sa: 108, sd: 63, sp: 101 }
    },
    'Pansear': {
        id: 513,
        abilities: ['Flash Fire', 'Flash Fire', 'Hustle'],
        innates: ['Blaze', 'Prankster']
    },
    'Simisear': {
        id: 514,
        abilities: ['Flash Fire', 'Sage Power', 'Hustle'],
        innates: ['Blaze', 'Prankster', 'Gluttony'],
        bs: { hp: 75, at: 108, df: 63, sa: 108, sd: 63, sp: 101 }
    },
    'Panpour': {
        id: 515,
        abilities: ['Storm Drain', 'Storm Drain', 'Healer'],
        innates: ['Torrent', 'Prankster']
    },
    'Simipour': {
        id: 516,
        abilities: ['Storm Drain', 'Sage Power', 'Healer'],
        innates: ['Torrent', 'Prankster', 'Gluttony'],
        bs: { hp: 75, at: 108, df: 63, sa: 108, sd: 63, sp: 101 }
    },
    'Munna': {
        id: 517,
        abilities: ['Forewarn', 'Synchronize', 'Synchronize'],
        innates: ['Dreamcatcher', 'Sweet Dreams', 'Levitate']
    },
    'Musharna': {
        id: 518,
        abilities: ['Neuroforce', 'Sweet Dreams', 'Psychic Surge'],
        innates: ['Dreamcatcher', 'Comatose', 'Levitate'],
        bs: { hp: 116, at: 55, df: 85, sa: 117, sd: 95, sp: 29 }
    },
    'Pidove': {
        id: 519,
        abilities: ['Super Luck', 'Super Luck', 'Super Luck'],
        innates: ['Keen Eye', 'Big Pecks', 'Rivalry']
    },
    'Tranquill': {
        id: 520,
        abilities: ['Super Luck', 'Super Luck', 'Super Luck'],
        innates: ['Keen Eye', 'Big Pecks', 'Rivalry']
    },
    'Unfezant': {
        id: 521,
        abilities: ['Super Luck', 'Super Luck', 'Super Luck'],
        innates: ['Keen Eye', 'Big Pecks', 'Rivalry'],
        bs: { hp: 100, at: 95, df: 80, sa: 65, sd: 55, sp: 93 }
    },
    'Blitzle': {
        id: 522,
        abilities: ['Reckless', 'Speed Force', 'Momentum'],
        innates: ['Illuminate', 'Motor Drive', 'Sap Sipper']
    },
    'Zebstrika': {
        id: 523,
        abilities: ['Reckless', 'Speed Force', 'Momentum'],
        innates: ['Illuminate', 'Motor Drive', 'Sap Sipper'],
        bs: { hp: 85, at: 110, df: 63, sa: 80, sd: 63, sp: 116 }
    },
    'Roggenrola': {
        id: 524,
        abilities: ['Sturdy', 'Weak Armor', 'Sand Force'],
        innates: ['Power Core', 'Impenetrable'],
        bs: { hp: 55, at: 25, df: 85, sa: 75, sd: 25, sp: 15 }
    },
    'Boldore': {
        id: 525,
        abilities: ['Sturdy', 'Weak Armor', 'Sand Force'],
        innates: ['Power Core', 'Impenetrable'],
        bs: { hp: 70, at: 50, df: 105, sa: 105, sd: 40, sp: 20 }
    },
    'Gigalith': {
        id: 526,
        abilities: ['Impenetrable', 'Sand Stream', 'Solar Power'],
        innates: ['Power Core', 'Sturdy', 'Sand Force'],
        bs: { hp: 85, at: 60, df: 130, sa: 135, sd: 80, sp: 25 }
    },
    'Woobat': {
        id: 527,
        abilities: ['Aerodynamics', 'Aerodynamics', 'Simple'],
        innates: ['Unaware', 'Soundproof']
    },
    'Swoobat': {
        id: 528,
        abilities: ['Aerodynamics', 'Aerodynamics', 'Simple'],
        innates: ['Unaware', 'Soundproof', 'Loud Bang'],
        bs: { hp: 67, at: 57, df: 55, sa: 97, sd: 55, sp: 114 }
    },
    'Drilbur': {
        id: 529,
        abilities: ['Mold Breaker', 'Field Explorer', 'Violent Rush'],
        innates: ['Sand Rush', 'Sand Force']
    },
    'Excadrill': {
        id: 530,
        abilities: ['Mold Breaker', 'Tough Claws', 'Violent Rush'],
        innates: ['Sand Rush', 'Sand Force', 'Earthbound']
    },
    'Audino': {
        id: 531,
        abilities: ['Cute Charm', 'Cute Charm', 'Serene Grace'],
        innates: ['Healer', 'Regenerator'],
        otherFormes: ['Audino-Mega'],
        bs: { hp: 103, at: 60, df: 96, sa: 80, sd: 96, sp: 50 }
    },
    'Timburr': {
        id: 532,
        abilities: ['Sheer Force', 'Sheer Force', 'Sheer Force'],
        innates: ['Guts', 'Iron Fist']
    },
    'Gurdurr': {
        id: 533,
        abilities: ['Sheer Force', 'Anger Point', 'Anger Point'],
        innates: ['Guts', 'Iron Fist']
    },
    'Conkeldurr': {
        id: 534,
        abilities: ['Sheer Force', 'Anger Point', 'Stamina'],
        innates: ['Guts', 'Iron Fist', 'Juggernaut']
    },
    'Tympole': {
        id: 535,
        abilities: ['Swift Swim', 'Swift Swim', 'Immunity'],
        innates: ['Water Absorb', 'Hydration']
    },
    'Palpitoad': {
        id: 536,
        abilities: ['Swift Swim', 'Swift Swim', 'Immunity'],
        innates: ['Water Absorb', 'Hydration']
    },
    'Seismitoad': {
        id: 537,
        abilities: ['Swift Swim', 'Earthbound', 'Immunity'],
        innates: ['Water Absorb', 'Amplifier', 'Poison Touch'],
        bs: { hp: 105, at: 105, df: 75, sa: 105, sd: 75, sp: 74 }
    },
    'Throh': {
        id: 538,
        abilities: ['Guts', 'Technician', 'Mold Breaker'],
        innates: ['Inner Focus', 'Thick Fat', 'Iron Fist']
    },
    'Sawk': {
        id: 539,
        abilities: ['Guts', 'Technician', 'Mold Breaker'],
        innates: ['Inner Focus', 'Limber', 'Iron Fist']
    },
    'Sewaddle': {
        id: 540,
        abilities: ['Leaf Guard', 'Leaf Guard', 'Leaf Guard'],
        innates: ['Swarm', 'Chlorophyll', 'Overcoat']
    },
    'Swadloon': {
        id: 541,
        abilities: ['Leaf Guard', 'Leaf Guard', 'Leaf Guard'],
        innates: ['Swarm', 'Chlorophyll', 'Overcoat']
    },
    'Leavanny': {
        id: 542,
        abilities: ['Leaf Guard', 'Leaf Guard', 'Keen Edge'],
        innates: ['Swarm', 'Chlorophyll', 'Overcoat'],
        bs: { hp: 75, at: 113, df: 80, sa: 70, sd: 80, sp: 102 }
    },
    'Venipede': {
        id: 543,
        abilities: ['Poison Point', 'Exploit Weakness', 'Speed Boost'],
        innates: ['Swarm', 'Solenoglyphs', 'Hyper Aggressive']
    },
    'Whirlipede': {
        id: 544,
        abilities: ['Poison Point', 'Exploit Weakness', 'Speed Boost'],
        innates: ['Lets Roll', 'Coil Up', 'Shell Armor']
    },
    'Scolipede': {
        id: 545,
        abilities: ['Poison Point', 'Predator', 'Speed Boost'],
        innates: ['Lets Roll', 'Solenoglyphs', 'Hyper Aggressive']
    },
    'Cottonee': {
        id: 546,
        abilities: ['Prankster', 'Sticky Hold', 'Leaf Guard'],
        innates: ['Infiltrator', 'Chlorophyll', 'Cotton Down']
    },
    'Whimsicott': {
        id: 547,
        abilities: ['Prankster', 'Pixilate', 'Leaf Guard'],
        innates: ['Infiltrator', 'Chlorophyll', 'Cotton Down']
    },
    'Petilil': {
        id: 548,
        'types': ['Grass', 'Fairy'],
        abilities: ['Solar Power', 'Leaf Guard', 'Chloroplast'],
        innates: ['Chlorophyll', 'Natural Cure']
    },
    'Lilligant': {
        id: 549,
        'types': ['Grass', 'Fairy'],
        abilities: ['Solar Power', 'Leaf Guard', 'Chloroplast'],
        innates: ['Chlorophyll', 'Natural Cure', 'Overgrow']
    },
    'Basculin': {
        id: 550,
        abilities: ['Mold Breaker', 'Strong Jaw', 'Predator'],
        innates: ['Reckless', 'Adaptability', 'Hyper Aggressive'],
        otherFormes: ['Basculin-Blue-Striped'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 118 }
    },
    'Sandile': {
        id: 551,
        abilities: ['Intimidate', 'Moxie', 'Anger Point'],
        innates: ['Sand Rush', 'Scavenger']
    },
    'Krokorok': {
        id: 552,
        abilities: ['Intimidate', 'Moxie', 'Anger Point'],
        innates: ['Sand Rush', 'Scavenger', 'Strong Jaw']
    },
    'Krookodile': {
        id: 553,
        abilities: ['Intimidate', 'Moxie', 'Anger Point'],
        innates: ['Hyper Aggressive', 'Predator', 'Strong Jaw']
    },
    'Darumaka': {
        id: 554,
        abilities: ['Hustle', 'Hustle', 'Inner Focus'],
        innates: ['Flame Body'],
        otherFormes: ['Darumaka-Galarian']
    },
    'Darmanitan': {
        id: 555,
        abilities: ['Gorilla Tactics', 'Sheer Force', 'Zen Mode'],
        innates: ['Flame Body', 'Iron Fist', 'Turboblaze'],
        otherFormes: ['Darmanitan-Zen-Mode', 'Darmanitan-Galarian', 'Darmanitan-Zen-Mode-Galarian']
    },
    'Maractus': {
        id: 556,
        abilities: ['Water Absorb', 'Huge Power', 'Storm Drain'],
        innates: ['Rough Skin', 'Chlorophyll', 'Sand Force'],
        bs: { hp: 75, at: 56, df: 87, sa: 106, sd: 87, sp: 60 }
    },
    'Dwebble': {
        id: 557,
        abilities: ['Sturdy', 'No Guard', 'Weak Armor'],
        innates: ['Solid Rock', 'Shell Armor']
    },
    'Crustle': {
        id: 558,
        abilities: ['Sturdy', 'No Guard', 'Weak Armor'],
        innates: ['Solid Rock', 'Shell Armor', 'Grip Pincer'],
        bs: { hp: 70, at: 115, df: 135, sa: 65, sd: 75, sp: 45 }
    },
    'Scraggy': {
        id: 559,
        abilities: ['Rivalry', 'Moxie', 'Intimidate'],
        innates: ['Shed Skin', 'Rock Head', 'Reckless']
    },
    'Scrafty': {
        id: 560,
        abilities: ['Iron Fist', 'Moxie', 'Intimidate'],
        innates: ['Shed Skin', 'Rock Head', 'Reckless']
    },
    'Sigilyph': {
        id: 561,
        abilities: ['Magic Guard', 'Dreamcatcher', 'Sage Power'],
        innates: ['Wonder Skin', 'Tinted Lens', 'Phantom']
    },
    'Yamask': {
        id: 562,
        abilities: ['Mummy', 'Mummy', 'Mummy'],
        innates: ['Vengeance', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Yamask-Galarian']
    },
    'Cofagrigus': {
        id: 563,
        'types': ['Ghost', 'Steel'],
        abilities: ['Mummy', 'Shadow Shield', 'Shadow Tag'],
        innates: ['Vengeance', 'Cursed Body', 'Haunted Spirit']
    },
    'Tirtouga': {
        id: 564,
        abilities: ['Opportunist', 'Swift Swim', 'Predator'],
        innates: ['Fossilized', 'Shell Armor', 'Solid Rock']
    },
    'Carracosta': {
        id: 565,
        abilities: ['Opportunist', 'Swift Swim', 'Predator'],
        innates: ['Strong Jaw', 'Shell Armor', 'Solid Rock'],
        bs: { hp: 74, at: 128, df: 133, sa: 83, sd: 65, sp: 32 }
    },
    'Archen': {
        id: 566,
        abilities: ['Defeatist', 'Defeatist', 'Defeatist'],
        innates: ['Fossilized', 'Rock Head']
    },
    'Archeops': {
        id: 567,
        abilities: ['Defeatist', 'Defeatist', 'Defeatist'],
        innates: ['Fossilized', 'Rock Head', 'Predator']
    },
    'Trubbish': {
        id: 568,
        abilities: ['Poison Touch', 'Weak Armor', 'Aftermath'],
        innates: ['Stench', 'Adaptability', 'Poison Absorb']
    },
    'Garbodor': {
        id: 569,
        'types': ['Poison', 'Steel'],
        abilities: ['Poison Touch', 'Weak Armor', 'Aftermath'],
        innates: ['Stench', 'Sticky Hold', 'Poison Absorb'],
        bs: { hp: 80, at: 95, df: 102, sa: 60, sd: 82, sp: 75 }
    },
    'Zorua': {
        id: 570,
        abilities: ['Illusion', 'Illusion', 'Illusion'],
        innates: ['Prankster', 'Insomnia'],
        bs: { hp: 40, at: 50, df: 40, sa: 65, sd: 40, sp: 65 }
    },
    'Zoroark': {
        id: 571,
        abilities: ['Illusion', 'Illusion', 'Illusion'],
        innates: ['Prankster', 'Insomnia', 'Opportunist'],
        bs: { hp: 60, at: 90, df: 60, sa: 100, sd: 60, sp: 105 }
    },
    'Minccino': {
        id: 572,
        abilities: ['Perfectionist', 'Overcoat', 'Skill Link'],
        innates: ['Technician', 'Cute Charm', 'Limber']
    },
    'Cinccino': {
        id: 573,
        abilities: ['Perfectionist', 'Overcoat', 'Skill Link'],
        innates: ['Technician', 'Cute Charm', 'Limber']
    },
    'Gothita': {
        id: 574,
        abilities: ['Frisk', 'Competitive', 'Shadow Tag'],
        innates: ['Nocturnal', 'Psychic Mind']
    },
    'Gothorita': {
        id: 575,
        abilities: ['Frisk', 'Competitive', 'Shadow Tag'],
        innates: ['Nocturnal', 'Psychic Mind']
    },
    'Gothitelle': {
        id: 576,
        abilities: ['Frisk', 'Competitive', 'Shadow Tag'],
        innates: ['Nocturnal', 'Psychic Mind', 'Magic Bounce']
    },
    'Solosis': {
        id: 577,
        abilities: ['Overcoat', 'Overcoat', 'Twisted Dimension'],
        innates: ['Regenerator', 'Liquified']
    },
    'Duosion': {
        id: 578,
        abilities: ['Overcoat', 'Neuroforce', 'Twisted Dimension'],
        innates: ['Regenerator', 'Liquified', 'Magic Guard']
    },
    'Reuniclus': {
        id: 579,
        abilities: ['Overcoat', 'Neuroforce', 'Twisted Dimension'],
        innates: ['Regenerator', 'Liquified', 'Magic Guard']
    },
    'Ducklett': {
        id: 580,
        abilities: ['Hydration', 'Rivalry', 'Rivalry'],
        innates: ['Flock', 'Keen Eye', 'Big Pecks']
    },
    'Swanna': {
        id: 581,
        abilities: ['Hydration', 'Giant Wings', 'Majestic Bird'],
        innates: ['Flock', 'Keen Eye', 'Big Pecks'],
        bs: { hp: 75, at: 87, df: 63, sa: 77, sd: 63, sp: 103 }
    },
    'Vanillite': {
        id: 582,
        abilities: ['Refrigerate', 'Snow Warning', 'Weak Armor'],
        innates: ['Permafrost', 'Ice Body', 'Slush Rush']
    },
    'Vanillish': {
        id: 583,
        abilities: ['Refrigerate', 'Snow Warning', 'Weak Armor'],
        innates: ['Permafrost', 'Ice Body', 'Slush Rush']
    },
    'Vanilluxe': {
        id: 584,
        abilities: ['Refrigerate', 'Snow Warning', 'Weak Armor'],
        innates: ['Multi Headed', 'Ice Body', 'Slush Rush'],
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 95 },
        heads: 2
    },
    'Deerling': {
        id: 585,
        abilities: ['Chlorophyll', 'Chlorophyll', 'Serene Grace'],
        innates: ['Sap Sipper', 'Violent Rush'],
        otherFormes: ['Deerling-Summer', 'Deerling-Autumn', 'Deerling-Winter']
    },
    'Sawsbuck': {
        id: 586,
        abilities: ['Chlorophyll', 'Chlorophyll', 'Serene Grace'],
        innates: ['Sap Sipper', 'Violent Rush', 'Rivalry'],
        otherFormes: ['Sawsbuck-Summer', 'Sawsbuck-Autumn', 'Sawsbuck-Winter']
    },
    'Emolga': {
        id: 587,
        abilities: ['Static', 'Gluttony', 'Electrocytes'],
        innates: ['Plus', 'Motor Drive', 'Aerilate'],
        bs: { hp: 55, at: 75, df: 60, sa: 105, sd: 60, sp: 113 }
    },
    'Karrablast': {
        id: 588,
        abilities: ['No Guard', 'Hydration', 'Unburden'],
        innates: ['Swarm', 'Shed Skin', 'Sticky Hold']
    },
    'Escavalier': {
        id: 589,
        abilities: ['No Guard', 'Overcoat', 'Full Metal Body'],
        innates: ['Swarm', 'Shell Armor', 'Speed Boost'],
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 60 }
    },
    'Foongus': {
        id: 590,
        abilities: ['Infiltrator', 'Infiltrator', 'Adaptability'],
        innates: ['Regenerator', 'Effect Spore', 'Dry Skin']
    },
    'Amoonguss': {
        id: 591,
        abilities: ['Infiltrator', 'Infiltrator', 'Adaptability'],
        innates: ['Regenerator', 'Effect Spore', 'Dry Skin']
    },
    'Frillish': {
        id: 592,
        abilities: ['Cursed Body', 'Clear Body', 'Immunity'],
        innates: ['Water Absorb', 'Limber', 'Poison Touch']
    },
    'Jellicent': {
        id: 593,
        abilities: ['Cursed Body', 'Clear Body', 'Immunity'],
        innates: ['Water Bubble', 'Soul Eater', 'Poison Touch'],
        bs: { hp: 120, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        otherFormes: ['Jellicent-Mega']
    },
    'Alomomola': {
        id: 594,
        abilities: ['Hydration', 'Natural Cure', 'Water Veil'],
        innates: ['Healer', 'Regenerator', 'Self Sufficient']
    },
    'Joltik': {
        id: 595,
        abilities: ['Minus', 'Run Away', 'Spider Lair'],
        innates: ['Opportunist', 'Swarm', 'Compound Eyes']
    },
    'Galvantula': {
        id: 596,
        abilities: ['Compound Eyes', 'Looter', 'Spider Lair'],
        innates: ['Immunity', 'Swarm', 'Overcoat'],
        bs: { hp: 70, at: 77, df: 60, sa: 107, sd: 60, sp: 108 }
    },
    'Ferroseed': {
        id: 597,
        abilities: ['Impenetrable', 'Bulletproof', 'Fort Knox'],
        innates: ['Iron Barbs', 'Lets Roll', 'Battle Armor']
    },
    'Ferrothorn': {
        id: 598,
        abilities: ['Impenetrable', 'Bulletproof', 'Fort Knox'],
        innates: ['Iron Barbs', 'Lets Roll', 'Battle Armor']
    },
    'Klink': {
        id: 599,
        abilities: ['Steelworker', 'Steelworker', 'Steelworker'],
        innates: ['Plus', 'Multi Headed', 'Full Metal Body'],
        heads: 2
    },
    'Klang': {
        id: 600,
        abilities: ['Steelworker', 'Steelworker', 'Galvanize'],
        innates: ['Plus', 'Multi Headed', 'Full Metal Body'],
        heads: 3
    },
    'Klinklang': {
        id: 601,
        abilities: ['Steelworker', 'Electric Surge', 'Galvanize'],
        innates: ['Iron Barbs', 'Multi Headed', 'Impenetrable'],
        bs: { hp: 60, at: 100, df: 115, sa: 100, sd: 85, sp: 90 },
        heads: 3
    },
    'Tynamo': {
        id: 602,
        abilities: ['Electrocytes', 'Hydrate', 'Swift Swim'],
        innates: ['Plus', 'Levitate', 'Aquatic']
    },
    'Eelektrik': {
        id: 603,
        abilities: ['Electrocytes', 'Hydrate', 'Swift Swim'],
        innates: ['Plus', 'Levitate', 'Aquatic']
    },
    'Eelektross': {
        id: 604,
        'types': ['Electric', 'Water'],
        abilities: ['Predator', 'Hydrate', 'Swift Swim'],
        innates: ['Levitate', 'Electrocytes', 'Artillery'],
        bs: { hp: 85, at: 115, df: 90, sa: 105, sd: 90, sp: 50 }
    },
    'Elgyem': {
        id: 605,
        abilities: ['Neuroforce', 'Twisted Dimension', 'Psychic Surge'],
        innates: ['Analytic', 'Psychic Mind']
    },
    'Beheeyem': {
        id: 606,
        abilities: ['Neuroforce', 'Twisted Dimension', 'Psychic Surge'],
        innates: ['Analytic', 'Psychic Mind']
    },
    'Litwick': {
        id: 607,
        abilities: ['Flame Body', 'Infiltrator', 'Haunted Spirit'],
        innates: ['Flash Fire', 'Soul Eater']
    },
    'Lampent': {
        id: 608,
        abilities: ['Flash Fire', 'Infiltrator', 'Haunted Spirit'],
        innates: ['Levitate', 'Soul Eater', 'Illuminate']
    },
    'Chandelure': {
        id: 609,
        abilities: ['Flash Fire', 'Infiltrator', 'Soul Eater'],
        innates: ['Levitate', 'Pyromancy', 'Illuminate'],
        bs: { hp: 80, at: 55, df: 90, sa: 145, sd: 90, sp: 80 }
    },
    'Axew': {
        id: 610,
        abilities: ['Intimidate', 'Growing Tooth', 'Moxie'],
        innates: ['Rivalry', 'Mold Breaker']
    },
    'Fraxure': {
        id: 611,
        abilities: ['Intimidate', 'Keen Edge', 'Moxie'],
        innates: ['Rivalry', 'Mold Breaker', 'Shell Armor']
    },
    'Haxorus': {
        id: 612,
        abilities: ['Intimidate', 'Keen Edge', 'Sheer Force'],
        innates: ['Beast Boost', 'Predator', 'Discipline']
    },
    'Cubchoo': {
        id: 613,
        abilities: ['Snow Cloak', 'Looter', 'Swift Swim'],
        innates: ['Slush Rush']
    },
    'Beartic': {
        id: 614,
        'types': ['Ice', 'Fighting'],
        abilities: ['Tough Claws', 'Predator', 'Intimidate'],
        innates: ['Slush Rush', 'Aquatic', 'Swift Swim'],
        bs: { hp: 95, at: 120, df: 80, sa: 70, sd: 80, sp: 70 }
    },
    'Cryogonal': {
        id: 615,
        abilities: ['North Wind', 'Refrigerate', 'Regenerator'],
        innates: ['Levitate', 'Ice Body', 'Permafrost']
    },
    'Shelmet': {
        id: 616,
        'types': ['Bug', 'Steel'],
        abilities: ['Hydration', 'Poison Touch', 'Clear Body'],
        innates: ['Swarm', 'Shell Armor', 'Overcoat']
    },
    'Accelgor': {
        id: 617,
        'types': ['Bug', 'Dark'],
        abilities: ['Momentum', 'Poison Touch', 'Unburden'],
        innates: ['Swarm', 'Perfectionist', 'Protean']
    },
    'Stunfisk': {
        id: 618,
        abilities: ['Arena Trap', 'Static', 'Electric Surge'],
        innates: ['Unaware', 'Amphibious', 'Dry Skin'],
        otherFormes: ['Stunfisk-Galarian']
    },
    'Mienfoo': {
        id: 619,
        abilities: ['Iron Fist', 'Limber', 'Regenerator'],
        innates: ['Inner Focus', 'Reckless', 'Speed Force']
    },
    'Mienshao': {
        id: 620,
        abilities: ['Iron Fist', 'Limber', 'Regenerator'],
        innates: ['Inner Focus', 'Scrappy', 'Striker']
    },
    'Druddigon': {
        id: 621,
        'types': ['Dragon', 'Rock'],
        abilities: ['Impenetrable', 'Strong Jaw', 'Sheer Force'],
        innates: ['Rough Skin', 'Solid Rock', 'Predator'],
        bs: { hp: 97, at: 120, df: 90, sa: 60, sd: 90, sp: 48 }
    },
    'Golett': {
        id: 622,
        abilities: ['Power Fists', 'Shadow Shield', 'Haunted Spirit'],
        innates: ['Power Core', 'No Guard']
    },
    'Golurk': {
        id: 623,
        abilities: ['Power Fists', 'No Guard', 'Haunted Spirit'],
        innates: ['Power Core', 'Shadow Shield', 'Iron Fist'],
        bs: { hp: 89, at: 134, df: 90, sa: 55, sd: 90, sp: 55 }
    },
    'Pawniard': {
        id: 624,
        abilities: ['Defiant', 'Hyper Cutter', 'Hyper Cutter'],
        innates: ['Inner Focus', 'Keen Edge', 'Battle Armor']
    },
    'Bisharp': {
        id: 625,
        abilities: ['Defiant', 'Hyper Cutter', 'Opportunist'],
        innates: ['No Guard', 'Keen Edge', 'Battle Armor']
    },
    'Bouffalant': {
        id: 626,
        abilities: ['Anger Point', 'Rampage', 'Reckless'],
        innates: ['Violent Rush', 'Fur Coat', 'Rock Head']
    },
    'Rufflet': {
        id: 627,
        abilities: ['Sheer Force', 'Defiant', 'Rivalry'],
        innates: ['Flock', 'Keen Eye']
    },
    'Braviary': {
        id: 628,
        abilities: ['Sheer Force', 'Defiant', 'Gale Wings'],
        innates: ['Flock', 'Giant Wings', 'Big Pecks']
    },
    'Vullaby': {
        id: 629,
        abilities: ['Big Pecks', 'Weak Armor', 'Overcoat'],
        innates: ['Flock', 'Keen Eye', 'Scavenger']
    },
    'Mandibuzz': {
        id: 630,
        abilities: ['Big Pecks', 'Giant Wings', 'Air Blower'],
        innates: ['Flock', 'Keen Eye', 'Scavenger']
    },
    'Heatmor': {
        id: 631,
        'types': ['Fire', 'Steel'],
        abilities: ['Burnate', 'White Smoke', 'Steelworker'],
        innates: ['Unaware', 'Tough Claws', 'Fatal Precision'],
        bs: { hp: 85, at: 97, df: 96, sa: 85, sd: 96, sp: 65 }
    },
    'Durant': {
        id: 632,
        abilities: ['Hustle', 'Compound Eyes', 'Steelworker'],
        innates: ['Swarm', 'Strong Jaw', 'Looter'],
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 78, sp: 109 }
    },
    'Deino': {
        id: 633,
        abilities: ['Hustle', 'Sheer Force', 'Moody'],
        innates: ['Gluttony', 'Hyper Aggressive']
    },
    'Zweilous': {
        id: 634,
        abilities: ['Hustle', 'Sheer Force', 'Moody'],
        innates: ['Multi Headed', 'Gluttony', 'Predator'],
        heads: 2
    },
    'Hydreigon': {
        id: 635,
        abilities: ['Scare', 'Mega Launcher', 'Beast Boost'],
        innates: ['Multi Headed', 'Levitate', 'Predator'],
        heads: 3
    },
    'Larvesta': {
        id: 636,
        abilities: ['Compound Eyes', 'Compound Eyes', 'Compound Eyes'],
        innates: ['Swarm', 'Flame Body']
    },
    'Volcarona': {
        id: 637,
        abilities: ['Compound Eyes', 'Flash Fire', 'Drought'],
        innates: ['Swarm', 'Majestic Moth', 'Levitate']
    },
    'Cobalion': {
        id: 638,
        abilities: ['Justified', 'Fighting Spirit', 'Dragonslayer'],
        innates: ['Inner Focus', 'Avenger', 'Full Metal Body']
    },
    'Terrakion': {
        id: 639,
        abilities: ['Justified', 'Fighting Spirit', 'Dragonslayer'],
        innates: ['Inner Focus', 'Avenger', 'Solid Rock']
    },
    'Virizion': {
        id: 640,
        abilities: ['Justified', 'Fighting Spirit', 'Dragonslayer'],
        innates: ['Inner Focus', 'Avenger', 'Keen Edge']
    },
    'Tornadus': {
        id: 641,
        abilities: ['Air Blower', 'Cloud Nine', 'Speed Boost'],
        innates: ['Prankster', 'Weather Control', 'Keen Eye'],
        otherFormes: ['Tornadus-Therian']
    },
    'Thundurus': {
        id: 642,
        abilities: ['Electrocytes', 'Teravolt', 'Ground Shock'],
        innates: ['Overcharge', 'Weather Control', 'Volt Absorb'],
        otherFormes: ['Thundurus-Therian']
    },
    'Reshiram': {
        id: 643,
        abilities: ['Beast Boost', 'Burnate', 'Drought'],
        innates: ['Turboblaze', 'Pyromancy', 'White Smoke']
    },
    'Zekrom': {
        id: 644,
        abilities: ['Beast Boost', 'Galvanize', 'Electric Surge'],
        innates: ['Teravolt', 'Transistor', 'Clear Body']
    },
    'Landorus': {
        id: 645,
        abilities: ['Sheer Force', 'Aerilate', 'Moxie'],
        innates: ['Sand Force', 'Intimidate', 'Regenerator'],
        otherFormes: ['Landorus-Therian']
    },
    'Kyurem': {
        id: 646,
        abilities: ['Beast Boost', 'Refrigerate', 'Snow Warning'],
        innates: ['Ice Scales', 'Permafrost', 'Whiteout'],
        otherFormes: ['Kyurem-White', 'Kyurem-Black']
    },
    'Keldeo': {
        id: 647,
        abilities: ['Justified', 'Fighting Spirit', 'Dragonslayer'],
        innates: ['Inner Focus', 'Avenger', 'Keen Edge'],
        otherFormes: ['Keldeo-Resolute']
    },
    'Meloetta': {
        id: 648,
        abilities: ['Queenly Majesty', 'Competitive', 'Sage Power'],
        innates: ['Serene Grace', 'Inner Focus', 'Prankster'],
        otherFormes: ['Meloetta-Pirouette']
    },
    'Genesect': {
        id: 649,
        abilities: ['Download', 'Fatal Precision', 'Sighting System'],
        innates: ['Mega Launcher', 'Predator', 'Full Metal Body'],
        otherFormes: ['Genesect-Douse-Drive', 'Genesect-Shock-Drive', 'Genesect-Burn-Drive', 'Genesect-Chill-Drive']
    },
    'Chespin': {
        id: 650,
        abilities: ['Lets Roll', 'Stamina', 'Rough Skin'],
        innates: ['Overgrow', 'Shell Armor', 'Bulletproof']
    },
    'Quilladin': {
        id: 651,
        abilities: ['Lets Roll', 'Stamina', 'Rough Skin'],
        innates: ['Overgrow', 'Shell Armor', 'Bulletproof']
    },
    'Chesnaught': {
        id: 652,
        abilities: ['Lets Roll', 'Stamina', 'Iron Barbs'],
        innates: ['Overgrow', 'Shell Armor', 'Bulletproof']
    },
    'Fennekin': {
        id: 653,
        abilities: ['Burnate', 'Inner Focus', 'Magic Guard'],
        innates: ['Blaze', 'Pyromancy', 'Psychic Mind']
    },
    'Braixen': {
        id: 654,
        abilities: ['Burnate', 'Inner Focus', 'Magic Guard'],
        innates: ['Blaze', 'Pyromancy', 'Psychic Mind']
    },
    'Delphox': {
        id: 655,
        abilities: ['Burnate', 'Neuroforce', 'Magic Guard'],
        innates: ['Blaze', 'Pyromancy', 'Psychic Mind']
    },
    'Froakie': {
        id: 656,
        abilities: ['Limber', 'Aerodynamics', 'Protean'],
        innates: ['Torrent', 'Skill Link', 'Long Reach']
    },
    'Frogadier': {
        id: 657,
        abilities: ['Limber', 'Aerodynamics', 'Protean'],
        innates: ['Torrent', 'Skill Link', 'Long Reach']
    },
    'Greninja': {
        id: 658,
        abilities: ['Fatal Precision', 'Speed Boost', 'Protean'],
        innates: ['Torrent', 'Skill Link', 'Long Reach'],
        otherFormes: ['Greninja-Battle-Bond', 'Greninja-Ash']
    },
    'Bunnelby': {
        id: 659,
        abilities: ['Pickup', 'Groundate', 'Cheek Pouch'],
        innates: ['Huge Power', 'Growing Tooth', 'Quick Feet']
    },
    'Diggersby': {
        id: 660,
        abilities: ['Pickup', 'Groundate', 'Cheek Pouch'],
        innates: ['Huge Power', 'Growing Tooth', 'Sheer Force']
    },
    'Fletchling': {
        id: 661,
        abilities: ['Flame Body', 'Flame Body', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye']
    },
    'Fletchinder': {
        id: 662,
        abilities: ['Flame Body', 'Speed Force', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye']
    },
    'Talonflame': {
        id: 663,
        abilities: ['Predator', 'Speed Force', 'Big Pecks'],
        innates: ['Flock', 'Violent Rush', 'Gale Wings']
    },
    'Scatterbug': {
        id: 664,
        abilities: ['Friend Guard', 'Friend Guard', 'Friend Guard'],
        innates: ['Shield Dust', 'Compound Eyes']
    },
    'Spewpa': {
        id: 665,
        abilities: ['Battle Armor', 'Battle Armor', 'Battle Armor'],
        innates: ['Shield Dust', 'Compound Eyes', 'Shed Skin']
    },
    'Vivillon': {
        id: 666,
        abilities: ['Swarm', 'Tinted Lens', 'Effect Spore'],
        innates: ['Shield Dust', 'Compound Eyes', 'Majestic Moth'],
        otherFormes: ['Vivillon-Polar', 'Vivillon-Tundra', 'Vivillon-Continental', 'Vivillon-Garden', 'Vivillon-Elegant', 'Vivillon-Meadow', 'Vivillon-Modern', 'Vivillon-Marine', 'Vivillon-Archipelago', 'Vivillon-High-Plains', 'Vivillon-Sandstorm', 'Vivillon-River', 'Vivillon-Monsoon', 'Vivillon-Savanna', 'Vivillon-Sun', 'Vivillon-Ocean', 'Vivillon-Jungle', 'Vivillon-Fancy', 'Vivillon-Poke-Ball']
    },
    'Litleo': {
        id: 667,
        abilities: ['Unnerve', 'Competitive', 'Moxie'],
        innates: ['Rivalry']
    },
    'Pyroar': {
        id: 668,
        abilities: ['Intimidate', 'Competitive', 'Soul-Heart'],
        innates: ['Rivalry', 'Opportunist', 'Predator'],
        bs: { hp: 86, at: 68, df: 72, sa: 119, sd: 66, sp: 106 }
    },
    'Flabebe': {
        id: 669,
        'types': ['Fairy'],
        abilities: ['Flower Veil', 'Flower Veil', 'Symbiosis'],
        innates: ['Natural Cure', 'Regenerator', 'Self Sufficient'],
        otherFormes: ['Flabebe-Yellow-Flower', 'Flabebe-Orange-Flower', 'Flabebe-Blue-Flower', 'Flabebe-White-Flower'],
        bs: { hp: 44, at: 38, df: 39, sa: 61, sd: 79, sp: 42 }
    },
    'Floette': {
        id: 670,
        abilities: ['Flower Veil', 'Flower Veil', 'Symbiosis'],
        innates: ['Natural Cure', 'Regenerator', 'Self Sufficient'],
        otherFormes: ['Floette-Yellow-Flower', 'Floette-Orange-Flower', 'Floette-Blue-Flower', 'Floette-White-Flower', 'Floette-Eternal-Flower']
    },
    'Florges': {
        id: 671,
        abilities: ['Harvest', 'Misty Surge', 'Fairy Aura'],
        innates: ['Natural Cure', 'Regenerator', 'Self Sufficient'],
        otherFormes: ['Florges-Yellow-Flower', 'Florges-Orange-Flower', 'Florges-Blue-Flower', 'Florges-White-Flower'],
        bs: { hp: 88, at: 55, df: 88, sa: 112, sd: 154, sp: 55 }
    },
    'Skiddo': {
        id: 672,
        abilities: ['Grass Pelt', 'Grass Pelt', 'Chlorophyll'],
        innates: ['Sap Sipper', 'Mountaineer', 'Fur Coat']
    },
    'Gogoat': {
        id: 673,
        abilities: ['Grass Pelt', 'Violent Rush', 'Chlorophyll'],
        innates: ['Sap Sipper', 'Mountaineer', 'Fur Coat'],
        bs: { hp: 123, at: 100, df: 62, sa: 79, sd: 81, sp: 95 }
    },
    'Pancham': {
        id: 674,
        abilities: ['Iron Fist', 'Mold Breaker', 'Mold Breaker'],
        innates: ['Scrappy']
    },
    'Pangoro': {
        id: 675,
        abilities: ['Iron Fist', 'Mold Breaker', 'Precise Fist'],
        innates: ['Scrappy', 'Anger Point', 'Hyper Aggressive']
    },
    'Furfrou': {
        id: 676,
        abilities: ['Cute Charm', 'Cute Charm', 'Cute Charm'],
        innates: ['Fur Coat', 'Overcoat', 'Run Away']
    },
    'Espurr': {
        id: 677,
        abilities: ['Infiltrator', 'Infiltrator', 'Infiltrator'],
        innates: ['Keen Eye', 'Own Tempo']
    },
    'Meowstic': {
        id: 678,
        abilities: ['Infiltrator', 'Competitive', 'Sage Power'],
        innates: ['Psychic Mind', 'Psychic Surge', 'Soul-Heart'],
        otherFormes: ['Meowstic-Female'],
        bs: { hp: 94, at: 48, df: 76, sa: 93, sd: 81, sp: 104 }
    },
    'Honedge': {
        id: 679,
        abilities: ['No Guard', 'No Guard', 'No Guard'],
        innates: ['Levitate', 'Keen Edge', 'Soul Eater']
    },
    'Doublade': {
        id: 680,
        abilities: ['No Guard', 'No Guard', 'No Guard'],
        innates: ['Levitate', 'Keen Edge', 'Multi Headed'],
        heads: 2
    },
    'Aegislash': {
        id: 681,
        'types': ['Steel', 'Ghost'],
        abilities: ['Shadow Shield', 'Dragonslayer', 'Soul Eater'],
        innates: ['Levitate', 'Keen Edge', 'Stance Change'],
        otherFormes: ['Aegislash-Blade'],
        bs: { hp: 60, at: 50, df: 140, sa: 50, sd: 140, sp: 60 }
    },
    'Spritzee': {
        id: 682,
        abilities: ['Aroma Veil', 'Sweet Veil', 'Sweet Veil'],
        innates: ['Healer', 'Pixilate']
    },
    'Aromatisse': {
        id: 683,
        abilities: ['Aroma Veil', 'Sweet Veil', 'Fairy Aura'],
        innates: ['Healer', 'Pixilate', 'Sweet Dreams']
    },
    'Swirlix': {
        id: 684,
        abilities: ['Sweet Veil', 'Sweet Veil', 'Unburden'],
        innates: ['Gooey', 'Pixilate', 'Sticky Hold']
    },
    'Slurpuff': {
        id: 685,
        abilities: ['Sweet Veil', 'Sweet Veil', 'Unburden'],
        innates: ['Gooey', 'Pixilate', 'Sticky Hold']
    },
    'Inkay': {
        id: 686,
        abilities: ['Suction Cups', 'Suction Cups', 'Infiltrator'],
        innates: ['Hypnotist', 'Contrary', 'Illuminate']
    },
    'Malamar': {
        id: 687,
        abilities: ['Suction Cups', 'Contrary', 'Infiltrator'],
        innates: ['Hypnotist', 'Illuminate', 'Big Pecks']
    },
    'Binacle': {
        id: 688,
        abilities: ['Pickpocket', 'Limber', 'Sand Force'],
        innates: ['Multi Headed', 'Tough Claws', 'Sniper'],
        heads: 2
    },
    'Barbaracle': {
        id: 689,
        abilities: ['Pickpocket', 'Limber', 'Sand Force'],
        innates: ['Multi Headed', 'Tough Claws', 'Sniper'],
        heads: 3
    },
    'Skrelp': {
        id: 690,
        abilities: ['Swift Swim', 'Swift Swim', 'Propeller Tail'],
        innates: ['Adaptability', 'Poison Touch']
    },
    'Dragalge': {
        id: 691,
        abilities: ['Swift Swim', 'Overwhelm', 'Contrary'],
        innates: ['Adaptability', 'Corrosion', 'Aquatic'],
        bs: { hp: 85, at: 97, df: 90, sa: 97, sd: 123, sp: 44 }
    },
    'Clauncher': {
        id: 692,
        abilities: ['Swift Swim', 'Swift Swim', 'Swift Swim'],
        innates: ['Hyper Cutter', 'Shell Armor']
    },
    'Clawitzer': {
        id: 693,
        abilities: ['Swift Swim', 'Rampage', 'Artillery'],
        innates: ['Hydrate', 'Shell Armor', 'Mega Launcher'],
        bs: { hp: 90, at: 73, df: 98, sa: 130, sd: 89, sp: 50 }
    },
    'Helioptile': {
        id: 694,
        abilities: ['Lightning Rod', 'Lightning Rod', 'Solar Power'],
        innates: ['Plus', 'Dry Skin', 'Sand Veil']
    },
    'Heliolisk': {
        id: 695,
        abilities: ['Lightning Rod', 'Plus', 'Solar Power'],
        innates: ['Dry Skin', 'Electrocytes', 'Sand Rush'],
        bs: { hp: 62, at: 55, df: 52, sa: 119, sd: 94, sp: 109 }
    },
    'Tyrunt': {
        id: 696,
        abilities: ['Predator', 'Rock Head', 'Rough Skin'],
        innates: ['Fossilized', 'Strong Jaw', 'Hyper Aggressive']
    },
    'Tyrantrum': {
        id: 697,
        abilities: ['Predator', 'Juggernaut', 'Rough Skin'],
        innates: ['Rock Head', 'Strong Jaw', 'Hyper Aggressive'],
        bs: { hp: 82, at: 121, df: 119, sa: 69, sd: 69, sp: 81 }
    },
    'Amaura': {
        id: 698,
        abilities: ['Refrigerate', 'Solid Rock', 'Snow Warning'],
        innates: ['Fossilized', 'Primal Armor', 'Permafrost']
    },
    'Aurorus': {
        id: 699,
        abilities: ['Refrigerate', 'Solid Rock', 'Snow Warning'],
        innates: ['Fossilized', 'Ice Body', 'Permafrost'],
        bs: { hp: 123, at: 77, df: 72, sa: 119, sd: 92, sp: 58 }
    },
    'Sylveon': {
        id: 700,
        abilities: ['Fairy Aura', 'Serene Grace', 'Misty Surge'],
        innates: ['Pixilate', 'Dragonslayer', 'Opportunist']
    },
    'Hawlucha': {
        id: 701,
        abilities: ['Unburden', 'Aerilate', 'Mold Breaker'],
        innates: ['Limber', 'No Guard', 'Aerodynamics']
    },
    'Dedenne': {
        id: 702,
        abilities: ['Cheek Pouch', 'Galvanize', 'Pixilate'],
        innates: ['Minus', 'Electrocytes', 'Gluttony'],
        bs: { hp: 67, at: 58, df: 57, sa: 101, sd: 87, sp: 101 }
    },
    'Carbink': {
        id: 703,
        abilities: ['Sturdy', 'Solid Rock', 'Power Spot'],
        innates: ['Clear Body', 'Impenetrable', 'Mountaineer']
    },
    'Goomy': {
        id: 704,
        abilities: ['Sap Sipper', 'Gooey', 'Gooey'],
        innates: ['Amphibious', 'Poison Heal', 'Hydrate']
    },
    'Sliggoo': {
        id: 705,
        abilities: ['Sap Sipper', 'Gooey', 'Corrosion'],
        innates: ['Amphibious', 'Poison Heal', 'Sticky Hold']
    },
    'Goodra': {
        id: 706,
        abilities: ['Sap Sipper', 'Gooey', 'Corrosion'],
        innates: ['Amphibious', 'Poison Heal', 'Hydrate'],
        bs: { hp: 90, at: 100, df: 85, sa: 110, sd: 135, sp: 80 }
    },
    'Klefki': {
        id: 707,
        abilities: ['Magic Guard', 'Magic Guard', 'Magician'],
        innates: ['Prankster', 'Full Metal Body', 'Iron Barbs']
    },
    'Phantump': {
        id: 708,
        abilities: ['Vengeance', 'Cursed Body', 'Grassy Surge'],
        innates: ['Natural Cure', 'Harvest', 'Haunted Spirit']
    },
    'Trevenant': {
        id: 709,
        abilities: ['Vengeance', 'Cursed Body', 'Grassy Surge'],
        innates: ['Tough Claws', 'Harvest', 'Haunted Spirit'],
        bs: { hp: 85, at: 100, df: 86, sa: 65, sd: 92, sp: 56 }
    },
    'Pumpkaboo': {
        id: 710,
        abilities: ['Frisk', 'Flare Boost', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Pumpkaboo-Small', 'Pumpkaboo-Large', 'Pumpkaboo-Super'],
        bs: { hp: 49, at: 44, df: 70, sa: 66, sd: 55, sp: 51 }
    },
    'Gourgeist': {
        id: 711,
        abilities: ['Flare Boost', 'Harvest', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Gourgeist-Small', 'Gourgeist-Large', 'Gourgeist-Super'],
        bs: { hp: 65, at: 58, df: 122, sa: 90, sd: 75, sp: 84 }
    },
    'Bergmite': {
        id: 712,
        abilities: ['Sturdy', 'Regenerator', 'Battle Armor'],
        innates: ['Permafrost', 'Impenetrable', 'Self Sufficient'],
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 55, sp: 28 }
    },
    'Avalugg': {
        id: 713,
        abilities: ['Sturdy', 'Regenerator', 'Fort Knox'],
        innates: ['Permafrost', 'Impenetrable', 'Self Sufficient'],
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 86, sp: 28 }
    },
    'Noibat': {
        id: 714,
        abilities: ['Mountaineer', 'Infiltrator', 'Infiltrator'],
        innates: ['Loud Bang', 'Hyper Aggressive', 'Nocturnal'],
        bs: { hp: 50, at: 30, df: 45, sa: 75, sd: 50, sp: 95 }
    },
    'Noivern': {
        id: 715,
        abilities: ['Frisk', 'Infiltrator', 'Aerodynamics'],
        innates: ['Loud Bang', 'Nocturnal', 'Hyper Aggressive']
    },
    'Xerneas': {
        id: 716,
        abilities: ['Pixilate', 'Competitive', 'Self Sufficient'],
        innates: ['Fairy Aura', 'Illuminate', 'Soul-Heart'],
        otherFormes: ['Xerneas-Active']
    },
    'Yveltal': {
        id: 717,
        abilities: ['Opportunist', 'Bad Luck', 'Scare'],
        innates: ['Dark Aura', 'Air Blower', 'Giant Wings']
    },
    'Zygarde': {
        id: 718,
        abilities: ['Aura Break', 'Regenerator', 'Power Construct'],
        innates: ['Primal Armor', 'Earthbound', 'Power Core'],
        otherFormes: ['Zygarde-10', 'Zygarde-10-Power-Construct', 'Zygarde-50-Power-Construct', 'Zygarde-Complete']
    },
    'Diancie': {
        id: 719,
        abilities: ['Pixilate', 'Magic Guard', 'Regenerator'],
        innates: ['Clear Body', 'Levitate', 'Mountaineer'],
        otherFormes: ['Diancie-Mega']
    },
    'Hoopa': {
        id: 720,
        abilities: ['Mystic Power', 'Illusion', 'Twisted Dimension'],
        innates: ['Prankster', 'Vengeance', 'Hypnotist'],
        otherFormes: ['Hoopa-Unbound']
    },
    'Volcanion': {
        id: 721,
        abilities: ['Drizzle', 'Drought', 'Mountaineer'],
        innates: ['Artillery', 'Storm Drain', 'Flash Fire']
    },
    'Rowlet': {
        id: 722,
        abilities: ['Sniper', 'Serene Grace', 'Super Luck'],
        innates: ['Overgrow', 'Nocturnal', 'Chlorophyll']
    },
    'Dartrix': {
        id: 723,
        abilities: ['Sniper', 'Serene Grace', 'Super Luck'],
        innates: ['Overgrow', 'Fatal Precision', 'Keen Edge']
    },
    'Decidueye': {
        id: 724,
        abilities: ['Sniper', 'Keen Edge', 'Opportunist'],
        innates: ['Overgrow', 'Deadeye', 'Long Reach'],
        bs: { hp: 78, at: 107, df: 75, sa: 70, sd: 90, sp: 110 }
    },
    'Litten': {
        id: 725,
        abilities: ['Bad Luck', 'Moody', 'Intimidate'],
        innates: ['Blaze', 'Flame Body']
    },
    'Torracat': {
        id: 726,
        abilities: ['Bad Luck', 'Moody', 'Intimidate'],
        innates: ['Blaze', 'Flame Body', 'Striker']
    },
    'Incineroar': {
        id: 727,
        abilities: ['Hyper Aggressive', 'Anger Point', 'Intimidate'],
        innates: ['Blaze', 'Iron Fist', 'Striker']
    },
    'Popplio': {
        id: 728,
        abilities: ['Cute Charm', 'Pixilate', 'Prankster'],
        innates: ['Torrent', 'Serene Grace', 'Dancer']
    },
    'Brionne': {
        id: 729,
        abilities: ['Competitive', 'Amplifier', 'Prankster'],
        innates: ['Torrent', 'Pixilate', 'Dancer']
    },
    'Primarina': {
        id: 730,
        abilities: ['Competitive', 'Amplifier', 'Prankster'],
        innates: ['Torrent', 'Liquid Voice', 'Serene Grace']
    },
    'Pikipek': {
        id: 731,
        abilities: ['Pickup', 'Gluttony', 'Sheer Force'],
        innates: ['Flock', 'Keen Eye', 'Skill Link']
    },
    'Trumbeak': {
        id: 732,
        abilities: ['Pickup', 'Super Luck', 'Sheer Force'],
        innates: ['Flock', 'Keen Eye', 'Skill Link']
    },
    'Toucannon': {
        id: 733,
        abilities: ['Burnate', 'Super Luck', 'Sheer Force'],
        innates: ['Flock', 'Keen Eye', 'Skill Link'],
        bs: { hp: 80, at: 120, df: 95, sa: 75, sd: 95, sp: 60 },
        otherFormes: ['Toucannon-Mega']
    },
    'Yungoos': {
        id: 734,
        abilities: ['Stakeout', 'Stakeout', 'Stakeout'],
        innates: ['Strong Jaw', 'Adaptability', 'Predator']
    },
    'Gumshoos': {
        id: 735,
        abilities: ['Stakeout', 'Stakeout', 'Stakeout'],
        innates: ['Strong Jaw', 'Adaptability', 'Predator'],
        bs: { hp: 88, at: 110, df: 80, sa: 55, sd: 80, sp: 45 }
    },
    'Grubbin': {
        id: 736,
        abilities: ['Pickup', 'Pickup', 'Pickup'],
        innates: ['Swarm', 'Sap Sipper']
    },
    'Charjabug': {
        id: 737,
        abilities: ['Shell Armor', 'Galvanize', 'Galvanize'],
        innates: ['Swarm', 'Battery', 'Minus'],
        bs: { hp: 57, at: 102, df: 95, sa: 55, sd: 75, sp: 36 }
    },
    'Vikavolt': {
        id: 738,
        abilities: ['Speed Boost', 'Aerodynamics', 'Overcharge'],
        innates: ['Swarm', 'Levitate', 'Electrocytes'],
        bs: { hp: 77, at: 95, df: 99, sa: 145, sd: 75, sp: 109 }
    },
    'Crabrawler': {
        id: 739,
        abilities: ['Hyper Cutter', 'Iron Fist', 'Defiant'],
        innates: ['Grip Pincer', 'Anger Point', 'Moxie']
    },
    'Crabominable': {
        id: 740,
        abilities: ['Hyper Cutter', 'Iron Fist', 'Raging Boxer'],
        innates: ['Grip Pincer', 'Anger Point', 'Permafrost'],
        bs: { hp: 97, at: 132, df: 97, sa: 62, sd: 87, sp: 43 }
    },
    'Oricorio': {
        id: 741,
        abilities: ['Dancer', 'Dancer', 'Dancer'],
        innates: ['Keen Eye', 'Flash Fire', 'Flock'],
        otherFormes: ['Oricorio-Pom-Pom', 'Oricorio-Pau', 'Oricorio-Sensu'],
        bs: { hp: 75, at: 70, df: 70, sa: 108, sd: 70, sp: 103 }
    },
    'Cutiefly': {
        id: 742,
        abilities: ['Run Away', 'Cute Charm', 'Sweet Veil'],
        innates: ['Levitate', 'Shield Dust', 'Effect Spore']
    },
    'Ribombee': {
        id: 743,
        abilities: ['Compound Eyes', 'Cute Charm', 'Sweet Veil'],
        innates: ['Levitate', 'Shield Dust', 'Effect Spore']
    },
    'Rockruff': {
        id: 744,
        abilities: ['Steadfast', 'Vital Spirit', 'Own Tempo'],
        innates: ['Keen Eye', 'Opportunist', 'Rock Head'],
        otherFormes: ['Rockruff-Own-Tempo']
    },
    'Lycanroc': {
        id: 745,
        'types': ['Rock', 'Ground'],
        abilities: ['Speed Force', 'Fatal Precision', 'Violent Rush'],
        innates: ['Opportunist', 'Sand Rush', 'Rock Head'],
        otherFormes: ['Lycanroc-Midnight', 'Lycanroc-Dusk'],
        bs: { hp: 75, at: 125, df: 70, sa: 55, sd: 70, sp: 112 }
    },
    'Wishiwashi': {
        id: 746,
        abilities: ['Schooling', 'Schooling', 'Schooling'],
        innates: ['Water Veil', 'Regenerator', 'Multiscale'],
        otherFormes: ['Wishiwashi-School']
    },
    'Mareanie': {
        id: 747,
        abilities: ['Looter', 'Limber', 'Exploit Weakness'],
        innates: ['Poison Point', 'Regenerator', 'Merciless']
    },
    'Toxapex': {
        id: 748,
        abilities: ['Rough Skin', 'Fort Knox', 'Exploit Weakness'],
        innates: ['Poison Touch', 'Regenerator', 'Merciless']
    },
    'Mudbray': {
        id: 749,
        abilities: ['Own Tempo', 'Striker', 'Sheer Force'],
        innates: ['Stamina']
    },
    'Mudsdale': {
        id: 750,
        abilities: ['Own Tempo', 'Striker', 'Sheer Force'],
        innates: ['Stamina', 'Battle Armor', 'Water Compaction']
    },
    'Dewpider': {
        id: 751,
        abilities: ['Water Bubble', 'Water Bubble', 'Water Bubble'],
        innates: ['Water Absorb', 'Spider Lair']
    },
    'Araquanid': {
        id: 752,
        abilities: ['Water Veil', 'Opportunist', 'Water Absorb'],
        innates: ['Water Bubble', 'Spider Lair', 'Predator'],
        bs: { hp: 68, at: 90, df: 92, sa: 50, sd: 132, sp: 42 }
    },
    'Fomantis': {
        id: 753,
        'types': ['Grass', 'Bug'],
        abilities: ['Keen Edge', 'Leaf Guard', 'Contrary'],
        innates: ['Chlorophyll', 'Opportunist']
    },
    'Lurantis': {
        id: 754,
        'types': ['Grass', 'Bug'],
        abilities: ['Keen Edge', 'Chloroplast', 'Contrary'],
        innates: ['Chlorophyll', 'Opportunist', 'Hyper Cutter']
    },
    'Morelull': {
        id: 755,
        abilities: ['Rain Dish', 'Rain Dish', 'Natural Cure'],
        innates: ['Effect Spore', 'Dry Skin', 'Illuminate']
    },
    'Shiinotic': {
        id: 756,
        abilities: ['Fairy Aura', 'Twisted Dimension', 'Poison Heal'],
        innates: ['Poison Absorb', 'Dreamcatcher', 'Bad Dreams'],
        bs: { hp: 80, at: 45, df: 80, sa: 90, sd: 100, sp: 30 }
    },
    'Salandit': {
        id: 757,
        abilities: ['Poison Absorb', 'Competitive', 'Exploit Weakness'],
        innates: ['Corrosion', 'Poison Touch']
    },
    'Salazzle': {
        id: 758,
        abilities: ['Merciless', 'Competitive', 'Exploit Weakness'],
        innates: ['Corrosion', 'Queenly Majesty', 'Half Drake']
    },
    'Stufful': {
        id: 759,
        abilities: ['Cute Charm', 'Unaware', 'Sheer Force'],
        innates: ['Fluffy', 'Guts']
    },
    'Bewear': {
        id: 760,
        abilities: ['Unnerve', 'Unaware', 'Sheer Force'],
        innates: ['Fluffy', 'Guts', 'Discipline']
    },
    'Bounsweet': {
        id: 761,
        abilities: ['Oblivious', 'Oblivious', 'Sweet Veil'],
        innates: ['Leaf Guard']
    },
    'Steenee': {
        id: 762,
        abilities: ['Oblivious', 'Oblivious', 'Sweet Veil'],
        innates: ['Leaf Guard', 'Reckless']
    },
    'Tsareena': {
        id: 763,
        'types': ['Grass', 'Fighting'],
        abilities: ['Oblivious', 'Hyper Aggressive', 'Sweet Veil'],
        innates: ['Keen Edge', 'Striker', 'Queenly Majesty'],
        bs: { hp: 72, at: 120, df: 90, sa: 50, sd: 90, sp: 108 }
    },
    'Comfey': {
        id: 764,
        abilities: ['Flower Veil', 'Triage', 'Grassy Surge'],
        innates: ['Natural Cure', 'Healer', 'Regenerator']
    },
    'Oranguru': {
        id: 765,
        abilities: ['Friend Guard', 'Sage Power', 'Twisted Dimension'],
        innates: ['Inner Focus', 'Psychic Mind', 'Healer']
    },
    'Passimian': {
        id: 766,
        abilities: ['Receiver', 'Receiver', 'Receiver'],
        innates: ['Harvest', 'Avenger', 'Defiant']
    },
    'Wimpod': {
        id: 767,
        abilities: ['Wimp Out', 'Wimp Out', 'Run Away'],
        innates: ['Shell Armor', 'Poison Point', 'Looter']
    },
    'Golisopod': {
        id: 768,
        abilities: ['Emergency Exit', 'Tough Claws', 'Predator'],
        innates: ['Shell Armor', 'Poison Point', 'Hyper Cutter']
    },
    'Sandygast': {
        id: 769,
        abilities: ['Fort Knox', 'Arena Trap', 'Sand Stream'],
        innates: ['Water Compaction', 'Sand Force', 'Sand Veil']
    },
    'Palossand': {
        id: 770,
        abilities: ['Fort Knox', 'Arena Trap', 'Sand Stream'],
        innates: ['Water Compaction', 'Sand Force', 'Self Sufficient'],
        bs: { hp: 85, at: 75, df: 120, sa: 100, sd: 85, sp: 35 }
    },
    'Pyukumuku': {
        id: 771,
        abilities: ['Corrosion', 'Innards Out', 'Triage'],
        innates: ['Unaware', 'Pressure', 'Perish Body']
    },
    'Type-Null': {
        id: 772,
        'types': ['Normal'],
        abilities: ['Adaptability', 'Adaptability', 'Adaptability'],
        innates: ['Battle Armor'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 59 }
    },
    'Silvally': {
        id: 773,
        abilities: ['Rks System', 'Protean', 'Unaware'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Minior': {
        id: 774,
        'types': ['Rock', 'Psychic'],
        abilities: ['Shields Down', 'Shields Down', 'Shields Down'],
        innates: ['Levitate', 'Power Core'],
        otherFormes: ['Minior-Meteor'],
        bs: { hp: 60, at: 60, df: 100, sa: 60, sd: 100, sp: 60 }
    },
    'Komala': {
        id: 775,
        abilities: ['Comatose', 'Comatose', 'Comatose'],
        innates: ['Immunity', 'Poison Absorb', 'Sap Sipper'],
        bs: { hp: 65, at: 115, df: 95, sa: 55, sd: 95, sp: 65 }
    },
    'Turtonator': {
        id: 776,
        abilities: ['Flame Body', 'Filter', 'Aftermath'],
        innates: ['Shell Armor', 'Iron Barbs', 'Dauntless Shield'],
        bs: { hp: 60, at: 78, df: 135, sa: 111, sd: 85, sp: 36 }
    },
    'Togedemaru': {
        id: 777,
        abilities: ['Sturdy', 'Lead Coat', 'Impenetrable'],
        innates: ['Iron Barbs', 'Lightning Rod', 'Electrocytes'],
        bs: { hp: 65, at: 108, df: 83, sa: 40, sd: 73, sp: 106 }
    },
    'Mimikyu': {
        id: 778,
        abilities: ['Disguise', 'Disguise', 'Disguise'],
        innates: ['Vengeance', 'Avenger', 'Haunted Spirit'],
        otherFormes: ['Mimikyu-Busted']
    },
    'Bruxish': {
        id: 779,
        abilities: ['Dazzling', 'Defiant', 'Predator'],
        innates: ['Strong Jaw', 'Wonder Skin', 'Psychic Mind'],
        otherFormes: ['Bruxish-Mega']
    },
    'Drampa': {
        id: 780,
        abilities: ['Berserk', 'Anger Point', 'Cloud Nine'],
        innates: ['Mountaineer', 'Sap Sipper', 'Avenger']
    },
    'Dhelmise': {
        id: 781,
        abilities: ['Water Absorb', 'Soul Eater', 'Sheer Force'],
        innates: ['Metallic', 'Seaweed', 'Steelworker'],
        bs: { hp: 70, at: 131, df: 120, sa: 76, sd: 90, sp: 40 }
    },
    'Jangmo-O': {
        id: 782,
        'types': ['Dragon'],
        abilities: ['Bulletproof', 'Soundproof', 'Rough Skin'],
        innates: ['Overcoat', 'Battle Armor', 'Mountaineer'],
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 }
    },
    'Hakamo-O': {
        id: 783,
        'types': ['Dragon', 'Fighting'],
        abilities: ['Bulletproof', 'Soundproof', 'Rough Skin'],
        innates: ['Overcoat', 'Battle Armor', 'Mountaineer'],
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 }
    },
    'Kommo-O': {
        id: 784,
        'types': ['Dragon', 'Fighting'],
        abilities: ['Bulletproof', 'Soundproof', 'Rough Skin'],
        innates: ['Prism Scales', 'Battle Armor', 'Prism Armor'],
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 }
    },
    'Tapu Koko': {
        id: 785,
        'types': ['Electric', 'Fairy'],
        abilities: ['Speed Boost', 'Electric Burst', 'Overcharge'],
        innates: ['Levitate', 'Electric Surge', 'Drizzle'],
        bs: { hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130 }
    },
    'Tapu Lele': {
        id: 786,
        'types': ['Psychic', 'Fairy'],
        abilities: ['Prism Scales', 'Unaware', 'Majestic Moth'],
        innates: ['Berserk', 'Psychic Surge', 'Multiscale'],
        bs: { hp: 70, at: 85, df: 75, sa: 130, sd: 115, sp: 95 }
    },
    'Tapu Bulu': {
        id: 787,
        'types': ['Grass', 'Fairy'],
        abilities: ['Grass Pelt', 'Chloroplast', 'Harvest'],
        innates: ['Mighty Horn', 'Grassy Surge', 'Regenerator'],
        bs: { hp: 70, at: 130, df: 115, sa: 85, sd: 95, sp: 75 }
    },
    'Tapu Fini': {
        id: 788,
        'types': ['Water', 'Fairy'],
        abilities: ['Water Veil', 'Regenerator', 'Drizzle'],
        innates: ['Avenger', 'Misty Surge', 'Shell Armor'],
        bs: { hp: 70, at: 75, df: 115, sa: 95, sd: 130, sp: 85 }
    },
    'Cosmog': {
        id: 789,
        abilities: ['Unaware', 'Unaware', 'Unaware'],
        innates: ['Levitate']
    },
    'Cosmoem': {
        id: 790,
        abilities: ['Sturdy', 'Sturdy', 'Sturdy'],
        innates: ['Levitate', 'Power Core', 'Shell Armor']
    },
    'Solgaleo': {
        id: 791,
        abilities: ['Illuminate', 'Illuminate', 'Illuminate'],
        innates: ['Solar Flare', 'Full Metal Body', 'Prism Armor']
    },
    'Lunala': {
        id: 792,
        abilities: ['Nocturnal', 'Nocturnal', 'Nocturnal'],
        innates: ['Lunar Eclipse', 'Shadow Shield', 'Dreamcatcher']
    },
    'Nihilego': {
        id: 793,
        abilities: ['Rough Skin', 'Corrosion', 'Soul Eater'],
        innates: ['Beast Boost', 'Poison Touch', 'Hyper Aggressive']
    },
    'Buzzwole': {
        id: 794,
        abilities: ['Sheer Force', 'Compound Eyes', 'Defiant'],
        innates: ['Beast Boost', 'Iron Fist', 'Raging Boxer']
    },
    'Pheromosa': {
        id: 795,
        abilities: ['Limber', 'Speed Force', 'Fatal Precision'],
        innates: ['Beast Boost', 'Speed Boost', 'Striker']
    },
    'Xurkitree': {
        id: 796,
        abilities: ['Electrocytes', 'Lightning Rod', 'Ground Shock'],
        innates: ['Beast Boost', 'Illuminate', 'Infiltrator']
    },
    'Celesteela': {
        id: 797,
        abilities: ['Clear Body', 'Mirror Armor', 'Regenerator'],
        innates: ['Beast Boost', 'Battle Armor', 'Lead Coat']
    },
    'Kartana': {
        id: 798,
        abilities: ['Keen Edge', 'Aerodynamics', 'Violent Rush'],
        innates: ['Beast Boost', 'Hyper Cutter', 'Deadeye']
    },
    'Guzzlord': {
        id: 799,
        abilities: ['Intimidate', 'Strong Jaw', 'Predator'],
        innates: ['Beast Boost', 'Thick Fat', 'Grip Pincer']
    },
    'Necrozma': {
        id: 800,
        abilities: ['Neuroforce', 'Rampage', 'Mega Launcher'],
        innates: ['Prism Armor', 'Metallic', 'Filter'],
        otherFormes: ['Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Necrozma-Ultra']
    },
    'Magearna': {
        id: 801,
        abilities: ['Steelworker', 'Pixilate', 'Mirror Armor'],
        innates: ['Clear Body', 'Soul-Heart', 'Power Core'],
        otherFormes: ['Magearna-Original-Color']
    },
    'Marshadow': {
        id: 802,
        abilities: ['Technician', 'Opportunist', 'Fatal Precision'],
        innates: ['Iron Fist', 'Precise Fist', 'Cursed Body']
    },
    'Poipole': {
        id: 803,
        abilities: ['Poison Point', 'Poison Point', 'Poison Point'],
        innates: ['Beast Boost', 'Levitate', 'Analytic']
    },
    'Naganadel': {
        id: 804,
        abilities: ['Corrosion', 'Sniper', 'Spider Lair'],
        innates: ['Beast Boost', 'Levitate', 'Merciless']
    },
    'Stakataka': {
        id: 805,
        abilities: ['Solid Rock', 'Sturdy', 'Juggernaut'],
        innates: ['Beast Boost', 'Lead Coat', 'Fort Knox']
    },
    'Blacephalon': {
        id: 806,
        abilities: ['Pyromancy', 'Cursed Body', 'Prankster'],
        innates: ['Beast Boost', 'Vengeance', 'Aftermath']
    },
    'Zeraora': {
        id: 807,
        abilities: ['Iron Fist', 'Power Fists', 'Speed Boost'],
        innates: ['Speed Force', 'Volt Absorb', 'Tough Claws']
    },
    'Meltan': {
        id: 808,
        abilities: ['Magnet Pull', 'Magnet Pull', 'Magnet Pull'],
        innates: ['Sturdy', 'Galvanize']
    },
    'Melmetal': {
        id: 809,
        abilities: ['Iron Fist', 'Steelworker', 'Stamina'],
        innates: ['Magnet Pull', 'Galvanize', 'Juggernaut']
    },
    'Grookey': {
        id: 810,
        abilities: ['Grassy Surge', 'Intimidate', 'Intimidate'],
        innates: ['Overgrow', 'Soundproof', 'Violent Rush']
    },
    'Thwackey': {
        id: 811,
        abilities: ['Grassy Surge', 'Intimidate', 'Intimidate'],
        innates: ['Overgrow', 'Soundproof', 'Violent Rush']
    },
    'Rillaboom': {
        id: 812,
        abilities: ['Violent Rush', 'Intimidate', 'Grass Pelt'],
        innates: ['Overgrow', 'Soundproof', 'Grassy Surge']
    },
    'Scorbunny': {
        id: 813,
        abilities: ['Keen Eye', 'Libero', 'Libero'],
        innates: ['Blaze', 'Striker', 'Limber']
    },
    'Raboot': {
        id: 814,
        abilities: ['Keen Eye', 'Libero', 'Libero'],
        innates: ['Blaze', 'Striker', 'Limber']
    },
    'Cinderace': {
        id: 815,
        abilities: ['Keen Eye', 'Libero', 'Pyromancy'],
        innates: ['Blaze', 'Striker', 'Limber']
    },
    'Sobble': {
        id: 816,
        abilities: ['Sniper', 'Rattled', 'Rattled'],
        innates: ['Torrent', 'Immunity', 'Run Away']
    },
    'Drizzile': {
        id: 817,
        abilities: ['Sniper', 'Opportunist', 'Opportunist'],
        innates: ['Torrent', 'Immunity', 'Deadeye']
    },
    'Inteleon': {
        id: 818,
        abilities: ['Sniper', 'Opportunist', 'Overcharge'],
        innates: ['Torrent', 'Momentum', 'Deadeye']
    },
    'Rookidee': {
        id: 821,
        abilities: ['Keen Eye', 'Reckless', 'Field Explorer'],
        innates: ['Intimidate', 'Flock']
    },
    'Corvisquire': {
        id: 822,
        abilities: ['Keen Eye', 'Reckless', 'Field Explorer'],
        innates: ['Intimidate', 'Flock']
    },
    'Corviknight': {
        id: 823,
        abilities: ['Stakeout', 'Reckless', 'Field Explorer'],
        innates: ['Intimidate', 'Unnerve', 'Mirror Armor']
    },
    'Yamper': {
        id: 835,
        abilities: ['Rattled', 'Rattled', 'Rattled'],
        innates: ['Run Away', 'Electrocytes']
    },
    'Boltund': {
        id: 836,
        abilities: ['Short Circuit', 'Scare', 'Overcoat'],
        innates: ['Strong Jaw', 'Speed Boost', 'Defiant']
    },
    'Rolycoly': {
        id: 837,
        abilities: ['Flame Body', 'Solid Rock', 'Mountaineer'],
        innates: ['Steam Engine', 'Juggernaut', 'Magma Armor']
    },
    'Carkol': {
        id: 838,
        abilities: ['Flame Body', 'Solid Rock', 'Mountaineer'],
        innates: ['Steam Engine', 'Juggernaut', 'Magma Armor']
    },
    'Coalossal': {
        id: 839,
        abilities: ['Flame Body', 'Galvanize', 'Mountaineer'],
        innates: ['Steam Engine', 'Juggernaut', 'Magma Armor']
    },
    'Applin': {
        id: 840,
        abilities: ['Ripen', 'Hustle', 'Bulletproof'],
        innates: ['Gluttony', 'Shell Armor']
    },
    'Flapple': {
        id: 841,
        abilities: ['Ripen', 'Aerodynamics', 'Unburden'],
        innates: ['Levitate', 'Regenerator', 'Corrosion'],
        bs: { hp: 70, at: 120, df: 90, sa: 105, sd: 60, sp: 95 }
    },
    'Appletun': {
        id: 842,
        abilities: ['Ripen', 'Predator', 'Solar Flare'],
        innates: ['Harvest', 'Unaware', 'Thick Fat'],
        bs: { hp: 110, at: 100, df: 110, sa: 100, sd: 90, sp: 30 }
    },
    'Toxel': {
        id: 848,
        abilities: ['Rattled', 'Static', 'Klutz'],
        innates: ['Plus', 'Water Absorb', 'Poison Touch']
    },
    'Toxtricity': {
        id: 849,
        abilities: ['Punk Rock', 'Amplifier', 'Technician'],
        innates: ['Plus', 'Water Absorb', 'Merciless'],
        otherFormes: ['Toxtricity-Low-Key']
    },
    'Sizzlipede': {
        id: 850,
        abilities: ['Magma Armor', 'Coil Up', 'Solar Power'],
        innates: ['Flash Fire', 'White Smoke']
    },
    'Centiskorch': {
        id: 851,
        abilities: ['Magma Armor', 'Coil Up', 'Solar Power'],
        innates: ['Flash Fire', 'White Smoke', 'Molten Down']
    },
    'Sinistea': {
        id: 854,
        abilities: ['Weak Armor', 'Dancer', 'Aroma Veil'],
        innates: ['Cursed Body', 'Self Sufficient', 'Water Absorb'],
        otherFormes: ['Sinistea-Antique']
    },
    'Polteageist': {
        id: 855,
        abilities: ['Weak Armor', 'Dancer', 'Aroma Veil'],
        innates: ['Cursed Body', 'Self Sufficient', 'Water Absorb'],
        otherFormes: ['Polteageist-Antique']
    },
    'Hatenna': {
        id: 856,
        abilities: ['Healer', 'Anticipation', 'Magic Bounce'],
        innates: ['Pixilate']
    },
    'Hattrem': {
        id: 857,
        abilities: ['Healer', 'Anticipation', 'Magic Bounce'],
        innates: ['Pixilate', 'Hyper Aggressive']
    },
    'Hatterene': {
        id: 858,
        abilities: ['Healer', 'Twisted Dimension', 'Rampage'],
        innates: ['Pixilate', 'Magic Bounce', 'Hyper Aggressive']
    },
    'Impidimp': {
        id: 859,
        abilities: ['Prankster', 'Pickpocket', 'Frisk'],
        innates: ['Scare']
    },
    'Morgrem': {
        id: 860,
        abilities: ['Prankster', 'Pickpocket', 'Tangling Hair'],
        innates: ['Scare']
    },
    'Grimmsnarl': {
        id: 861,
        abilities: ['Prankster', 'Soul Eater', 'Tangling Hair'],
        innates: ['Fur Coat', 'Intimidate', 'Scare']
    },
    'Obstagoon': {
        id: 862,
        abilities: ['Fighting Spirit', 'Stamina', 'Poison Heal'],
        innates: ['Reckless', 'Guts', 'Defiant']
    },
    'Perrserker': {
        id: 863,
        abilities: ['Fur Coat', 'Looter', 'Iron Barbs'],
        innates: ['Battle Armor', 'Tough Claws', 'Steely Spirit']
    },
    'Sirfetch\u2019d': {
        id: 865,
        'types': ['Fighting'],
        abilities: ['Hyper Cutter', 'Dauntless Shield', 'Chlorophyll'],
        innates: ['Scrappy', 'Keen Edge', 'Rampage'],
        bs: { hp: 92, at: 125, df: 95, sa: 68, sd: 92, sp: 65 }
    },
    'Runerigus': {
        id: 867,
        abilities: ['Wandering Spirit', 'Shadow Shield', 'Ancient Idol'],
        innates: ['Haunted Spirit', 'Cursed Body', 'Vengeance']
    },
    'Dracozolt': {
        id: 880,
        abilities: ['Strong Jaw', 'Surge Surfer', 'Sand Rush'],
        innates: ['Fossilized', 'Dragons Maw', 'Volt Absorb']
    },
    'Arctozolt': {
        id: 881,
        abilities: ['Strong Jaw', 'Surge Surfer', 'Slush Rush'],
        innates: ['Fossilized', 'Volt Absorb', 'Ice Body']
    },
    'Dracovish': {
        id: 882,
        abilities: ['Strong Jaw', 'Swift Swim', 'Sand Rush'],
        innates: ['Fossilized', 'Dragons Maw', 'Water Absorb']
    },
    'Arctovish': {
        id: 883,
        abilities: ['Strong Jaw', 'Swift Swim', 'Slush Rush'],
        innates: ['Fossilized', 'Water Absorb', 'Ice Body']
    },
    'Dreepy': {
        id: 885,
        abilities: ['Keen Eye', 'Infiltrator', 'Infiltrator'],
        innates: ['Levitate', 'Clear Body', 'Cursed Body']
    },
    'Drakloak': {
        id: 886,
        abilities: ['Keen Eye', 'Infiltrator', 'Parental Bond'],
        innates: ['Levitate', 'Clear Body', 'Cursed Body']
    },
    'Dragapult': {
        id: 887,
        abilities: ['Artillery', 'Speed Boost', 'Parental Bond'],
        innates: ['Levitate', 'Clear Body', 'Haunted Spirit']
    },
    'Glastrier': {
        id: 896,
        abilities: ['Chilling Neigh', 'Chilling Neigh', 'Chilling Neigh']
    },
    'Spectrier': {
        id: 897,
        abilities: ['Grim Neigh', 'Grim Neigh', 'Grim Neigh']
    },
    'Calyrex': {
        id: 898,
        abilities: ['Unnerve', 'Unnerve', 'Unnerve'],
        otherFormes: ['Calyrex-Ice-Rider', 'Calyrex-Shadow-Rider']
    },
    'Venusaur-Mega': {
        id: 899,
        abilities: ['Big Leaves', 'Big Leaves', 'Big Leaves'],
        innates: ['Overgrow', 'Thick Fat', 'Poison Touch'],
        otherFormes: ['Venusaur']
    },
    'Charizard-Mega-X': {
        id: 900,
        abilities: ['Tough Claws', 'Tough Claws', 'Tough Claws'],
        innates: ['Blaze', 'Levitate', 'Intimidate'],
        otherFormes: ['Charizard', 'Charizard-Mega-Y']
    },
    'Charizard-Mega-Y': {
        id: 901,
        'types': ['Fire', 'Dragon'],
        abilities: ['Drought', 'Drought', 'Drought'],
        innates: ['Blaze', 'Levitate', 'Solar Power'],
        otherFormes: ['Charizard', 'Charizard-Mega-X']
    },
    'Blastoise-Mega': {
        id: 902,
        'types': ['Water', 'Steel'],
        abilities: ['Artillery', 'Artillery', 'Artillery'],
        innates: ['Torrent', 'Shell Armor', 'Mega Launcher'],
        otherFormes: ['Blastoise']
    },
    'Beedrill-Mega': {
        id: 903,
        abilities: ['Adaptability', 'Adaptability', 'Adaptability'],
        innates: ['Hyper Aggressive', 'Merciless', 'Levitate'],
        otherFormes: ['Beedrill'],
        bs: { hp: 65, at: 160, df: 70, sa: 15, sd: 90, sp: 175 }
    },
    'Pidgeot-Mega': {
        id: 904,
        abilities: ['No Guard', 'Majestic Bird', 'Big Pecks'],
        innates: ['Flock', 'Keen Eye', 'Giant Wings'],
        otherFormes: ['Pidgeot'],
        bs: { hp: 83, at: 115, df: 95, sa: 115, sd: 80, sp: 121 }
    },
    'Alakazam-Mega': {
        id: 905,
        abilities: ['Mystic Power', 'Mystic Power', 'Mystic Power'],
        innates: ['Psychic Mind', 'Inner Focus', 'Magic Guard'],
        otherFormes: ['Alakazam']
    },
    'Slowbro-Mega': {
        id: 906,
        abilities: ['Unaware', 'Unaware', 'Unaware'],
        innates: ['Regenerator', 'Fort Knox', 'Shell Armor'],
        otherFormes: ['Slowbro', 'Slowbro-Galarian']
    },
    'Gengar-Mega': {
        id: 907,
        abilities: ['Shadow Tag', 'Shadow Tag', 'Shadow Tag'],
        innates: ['Vengeance', 'Soul Eater', 'Haunted Spirit'],
        otherFormes: ['Gengar'],
        bs: { hp: 60, at: 140, df: 80, sa: 170, sd: 95, sp: 130 }
    },
    'Kangaskhan-Mega': {
        id: 908,
        abilities: ['Tough Claws', 'Tough Claws', 'Tough Claws'],
        innates: ['Parental Bond', 'Scrappy', 'Avenger'],
        otherFormes: ['Kangaskhan']
    },
    'Pinsir-Mega': {
        id: 909,
        abilities: ['Hyper Aggressive', 'Hyper Aggressive', 'Hyper Aggressive'],
        innates: ['Hyper Cutter', 'Grip Pincer', 'Aerilate'],
        otherFormes: ['Pinsir']
    },
    'Gyarados-Mega': {
        id: 910,
        abilities: ['Hyper Aggressive', 'Hyper Aggressive', 'Hyper Aggressive'],
        innates: ['Mold Breaker', 'Beast Boost', 'Levitate'],
        otherFormes: ['Gyarados'],
        bs: { hp: 95, at: 155, df: 109, sa: 130, sd: 130, sp: 81 }
    },
    'Aerodactyl-Mega': {
        id: 911,
        abilities: ['Speed Force', 'Predator', 'Fatal Precision'],
        innates: ['Fossilized', 'Rock Head', 'Tough Claws'],
        otherFormes: ['Aerodactyl']
    },
    'Mewtwo-Mega-X': {
        id: 912,
        abilities: ['Opportunist', 'Opportunist', 'Opportunist'],
        innates: ['Psychic Mind', 'Raging Boxer', 'Fatal Precision'],
        otherFormes: ['Mewtwo', 'Mewtwo-Mega-Y']
    },
    'Mewtwo-Mega-Y': {
        id: 913,
        abilities: ['Mystic Power', 'Mystic Power', 'Mystic Power'],
        innates: ['Psychic Mind', 'Levitate', 'Fatal Precision'],
        otherFormes: ['Mewtwo', 'Mewtwo-Mega-X']
    },
    'Ampharos-Mega': {
        id: 914,
        abilities: ['Transistor', 'Transistor', 'Transistor'],
        innates: ['Fluffy', 'Illuminate', 'Overwhelm'],
        otherFormes: ['Ampharos'],
        bs: { hp: 110, at: 95, df: 105, sa: 165, sd: 110, sp: 45 }
    },
    'Steelix-Mega': {
        id: 915,
        abilities: ['Primal Armor', 'Primal Armor', 'Primal Armor'],
        innates: ['Lead Coat', 'Impenetrable', 'Strong Jaw'],
        otherFormes: ['Steelix'],
        bs: { hp: 75, at: 145, df: 230, sa: 55, sd: 105, sp: 20 }
    },
    'Scizor-Mega': {
        id: 916,
        abilities: ['Technician', 'Technician', 'Technician'],
        innates: ['Buginize', 'Tough Claws', 'Levitate'],
        otherFormes: ['Scizor']
    },
    'Heracross-Mega': {
        id: 917,
        abilities: ['Skill Link', 'Skill Link', 'Skill Link'],
        innates: ['Compound Eyes', 'Battle Armor', 'Guts'],
        otherFormes: ['Heracross']
    },
    'Houndoom-Mega': {
        id: 918,
        abilities: ['Solar Power', 'Solar Power', 'Solar Power'],
        innates: ['Nocturnal', 'Molten Down', 'Soul Eater'],
        otherFormes: ['Houndoom'],
        bs: { hp: 75, at: 120, df: 90, sa: 140, sd: 90, sp: 115 }
    },
    'Tyranitar-Mega': {
        id: 919,
        abilities: ['Primal Armor', 'Primal Armor', 'Primal Armor'],
        innates: ['Impenetrable', 'Juggernaut', 'Rough Skin'],
        otherFormes: ['Tyranitar']
    },
    'Sceptile-Mega': {
        id: 920,
        abilities: ['Big Leaves', 'Big Leaves', 'Big Leaves'],
        innates: ['Overgrow', 'Speed Force', 'Keen Edge'],
        otherFormes: ['Sceptile'],
        bs: { hp: 70, at: 145, df: 75, sa: 110, sd: 85, sp: 145 }
    },
    'Blaziken-Mega': {
        id: 921,
        abilities: ['Speed Boost', 'Speed Boost', 'Speed Boost'],
        innates: ['Blaze', 'Iron Fist', 'Striker'],
        otherFormes: ['Blaziken']
    },
    'Swampert-Mega': {
        id: 922,
        abilities: ['Swift Swim', 'Swift Swim', 'Swift Swim'],
        innates: ['Torrent', 'Stamina', 'Regenerator'],
        otherFormes: ['Swampert']
    },
    'Gardevoir-Mega': {
        id: 923,
        abilities: ['Pixilate', 'Pixilate', 'Pixilate'],
        innates: ['Serene Grace', 'Magic Guard', 'Soul-Heart'],
        otherFormes: ['Gardevoir'],
        bs: { hp: 68, at: 85, df: 80, sa: 165, sd: 135, sp: 100 }
    },
    'Sableye-Mega': {
        id: 924,
        abilities: ['Magic Bounce', 'Magic Bounce', 'Magic Bounce'],
        innates: ['Analytic', 'Prankster', 'Nocturnal'],
        otherFormes: ['Sableye'],
        bs: { hp: 70, at: 85, df: 130, sa: 85, sd: 120, sp: 20 }
    },
    'Mawile-Mega': {
        id: 925,
        abilities: ['Huge Power', 'Huge Power', 'Huge Power'],
        innates: ['Multi Headed', 'Strong Jaw', 'Grip Pincer'],
        otherFormes: ['Mawile'],
        bs: { hp: 70, at: 105, df: 130, sa: 55, sd: 100, sp: 50 },
        heads: 3
    },
    'Aggron-Mega': {
        id: 926,
        abilities: ['Juggernaut', 'Heatproof', 'Iron Barbs'],
        innates: ['Lead Coat', 'Primal Armor', 'Impenetrable'],
        otherFormes: ['Aggron']
    },
    'Medicham-Mega': {
        id: 927,
        abilities: ['Pure Power', 'Pure Power', 'Pure Power'],
        innates: ['Psychic Mind', 'Striker', 'Technician'],
        otherFormes: ['Medicham']
    },
    'Manectric-Mega': {
        id: 928,
        abilities: ['Intimidate', 'Intimidate', 'Intimidate'],
        innates: ['Short Circuit', 'Ground Shock', 'Overcharge'],
        otherFormes: ['Manectric'],
        bs: { hp: 70, at: 110, df: 90, sa: 135, sd: 90, sp: 135 }
    },
    'Sharpedo-Mega': {
        id: 929,
        abilities: ['Hyper Aggressive', 'Hyper Aggressive', 'Hyper Aggressive'],
        innates: ['Strong Jaw', 'Swift Swim', 'Predator'],
        otherFormes: ['Sharpedo'],
        bs: { hp: 70, at: 150, df: 70, sa: 120, sd: 65, sp: 115 }
    },
    'Camerupt-Mega': {
        id: 930,
        abilities: ['Drought', 'Drought', 'Drought'],
        innates: ['Magma Armor', 'Artillery', 'Molten Down'],
        otherFormes: ['Camerupt'],
        bs: { hp: 90, at: 120, df: 110, sa: 145, sd: 115, sp: 20 }
    },
    'Altaria-Mega': {
        id: 931,
        abilities: ['Pixilate', 'Pixilate', 'Pixilate'],
        innates: ['Natural Cure', 'Fluffy', 'Levitate'],
        otherFormes: ['Altaria'],
        bs: { hp: 75, at: 110, df: 110, sa: 110, sd: 105, sp: 100 }
    },
    'Banette-Mega': {
        id: 932,
        'types': ['Ghost', 'Normal'],
        abilities: ['Prankster', 'Prankster', 'Prankster'],
        innates: ['Intimidate', 'Magic Guard', 'Soul Eater'],
        otherFormes: ['Banette'],
        bs: { hp: 84, at: 165, df: 105, sa: 75, sd: 103, sp: 103 }
    },
    'Absol-Mega': {
        id: 933,
        'types': ['Dark', 'Fairy'],
        abilities: ['Dark Aura', 'Dark Aura', 'Dark Aura'],
        innates: ['Super Luck', 'Keen Edge', 'Magic Guard'],
        otherFormes: ['Absol'],
        bs: { hp: 65, at: 160, df: 60, sa: 125, sd: 60, sp: 115 }
    },
    'Glalie-Mega': {
        id: 934,
        abilities: ['Moody', 'Rock Head', 'Whiteout'],
        innates: ['Snow Warning', 'Refrigerate', 'Levitate'],
        otherFormes: ['Glalie'],
        bs: { hp: 80, at: 130, df: 80, sa: 120, sd: 80, sp: 110 }
    },
    'Salamence-Mega': {
        id: 935,
        abilities: ['Beast Boost', 'Beast Boost', 'Beast Boost'],
        innates: ['Overwhelm', 'Aerilate', 'Predator'],
        otherFormes: ['Salamence']
    },
    'Metagross-Mega': {
        id: 936,
        abilities: ['Tough Claws', 'Tough Claws', 'Tough Claws'],
        innates: ['Predator', 'Full Metal Body', 'Levitate'],
        otherFormes: ['Metagross']
    },
    'Latias-Mega': {
        id: 937,
        abilities: ['Mirror Armor', 'Mirror Armor', 'Mirror Armor'],
        innates: ['Levitate', 'Prism Armor', 'Mystic Power'],
        otherFormes: ['Latias']
    },
    'Latios-Mega': {
        id: 938,
        abilities: ['Speed Boost', 'Speed Boost', 'Speed Boost'],
        innates: ['Levitate', 'Multiscale', 'Mystic Power'],
        otherFormes: ['Latios']
    },
    'Lopunny-Mega': {
        id: 939,
        abilities: ['Scrappy', 'Scrappy', 'Scrappy'],
        innates: ['Limber', 'Fur Coat', 'Striker'],
        otherFormes: ['Lopunny'],
        bs: { hp: 65, at: 136, df: 74, sa: 64, sd: 96, sp: 135 }
    },
    'Garchomp-Mega': {
        id: 940,
        abilities: ['Keen Edge', 'Keen Edge', 'Keen Edge'],
        innates: ['Hyper Aggressive', 'Predator', 'Rough Skin'],
        otherFormes: ['Garchomp'],
        bs: { hp: 108, at: 170, df: 110, sa: 120, sd: 90, sp: 102 }
    },
    'Lucario-Mega': {
        id: 941,
        abilities: ['Adaptability', 'Adaptability', 'Adaptability'],
        innates: ['Inner Focus', 'Fatal Precision', 'Precise Fist'],
        otherFormes: ['Lucario']
    },
    'Abomasnow-Mega': {
        id: 942,
        abilities: ['Snow Warning', 'Snow Warning', 'Snow Warning'],
        innates: ['Ice Body', 'Whiteout', 'Permafrost'],
        otherFormes: ['Abomasnow'],
        bs: { hp: 90, at: 142, df: 105, sa: 142, sd: 105, sp: 30 }
    },
    'Gallade-Mega': {
        id: 943,
        abilities: ['Intrepid Sword', 'Intrepid Sword', 'Intrepid Sword'],
        innates: ['Keen Edge', 'Fatal Precision', 'Inner Focus'],
        otherFormes: ['Gallade'],
        bs: { hp: 68, at: 135, df: 95, sa: 65, sd: 125, sp: 115 }
    },
    'Audino-Mega': {
        id: 944,
        abilities: ['Healer', 'Healer', 'Healer'],
        innates: ['Natural Cure', 'Regenerator', 'Serene Grace'],
        otherFormes: ['Audino'],
        bs: { hp: 103, at: 60, df: 126, sa: 120, sd: 126, sp: 50 }
    },
    'Diancie-Mega': {
        id: 945,
        abilities: ['Magic Bounce', 'Magic Bounce', 'Magic Bounce'],
        innates: ['Clear Body', 'Levitate', 'Magic Guard'],
        otherFormes: ['Diancie']
    },
    'Rayquaza-Mega': {
        id: 946,
        abilities: ['Dragons Maw', 'Deadeye', 'Mold Breaker'],
        innates: ['Delta Stream', 'Weather Control', 'Aerilate'],
        otherFormes: ['Rayquaza']
    },
    'Kyogre-Primal': {
        id: 947,
        abilities: ['Artillery', 'Artillery', 'Artillery'],
        innates: ['Swift Swim', 'Primal Armor', 'Primordial Sea'],
        otherFormes: ['Kyogre']
    },
    'Groudon-Primal': {
        id: 948,
        abilities: ['Tough Claws', 'Tough Claws', 'Tough Claws'],
        innates: ['Molten Down', 'Primal Armor', 'Desolate Land'],
        otherFormes: ['Groudon']
    },
    'Rattata-Alola': {
        id: 949,
        'types': ['Dark', 'Normal'],
        abilities: ['Hustle', 'Cheek Pouch', 'Looter'],
        innates: ['Thick Fat', 'Run Away', 'Gluttony'],
        otherFormes: ['Rattata'],
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 }
    },
    'Raticate-Alola': {
        id: 950,
        'types': ['Dark', 'Normal'],
        abilities: ['Hustle', 'Cheek Pouch', 'Looter'],
        innates: ['Thick Fat', 'Gluttony', 'Growing Tooth'],
        otherFormes: ['Raticate'],
        bs: { hp: 75, at: 86, df: 80, sa: 40, sd: 80, sp: 77 }
    },
    'Raichu-Alola': {
        id: 951,
        'types': ['Electric', 'Psychic'],
        abilities: ['Psychic Mind', 'Short Circuit', 'Electric Surge'],
        innates: ['Surge Surfer', 'Levitate', 'Ground Shock'],
        otherFormes: ['Raichu'],
        bs: { hp: 60, at: 85, df: 50, sa: 95, sd: 85, sp: 115 }
    },
    'Sandshrew-Alola': {
        id: 952,
        'types': ['Ice', 'Steel'],
        abilities: ['Snow Cloak', 'Stamina', 'Mountaineer'],
        innates: ['Lets Roll', 'Slush Rush', 'Battle Armor'],
        otherFormes: ['Sandshrew'],
        bs: { hp: 50, at: 75, df: 90, sa: 10, sd: 35, sp: 40 }
    },
    'Sandslash-Alola': {
        id: 953,
        'types': ['Ice', 'Steel'],
        abilities: ['Slush Rush', 'Stamina', 'Mountaineer'],
        innates: ['Lets Roll', 'Tough Claws', 'Iron Barbs'],
        otherFormes: ['Sandslash'],
        bs: { hp: 95, at: 100, df: 120, sa: 25, sd: 65, sp: 65 }
    },
    'Vulpix-Alola': {
        id: 954,
        'types': ['Ice'],
        abilities: ['Ice Dew', 'Ice Body', 'Snow Warning'],
        innates: ['Quick Feet', 'Refrigerate'],
        otherFormes: ['Vulpix'],
        bs: { hp: 38, at: 41, df: 40, sa: 50, sd: 65, sp: 65 }
    },
    'Ninetales-Alola': {
        id: 955,
        'types': ['Ice', 'Fairy'],
        abilities: ['Frozen Soul', 'North Wind', 'Snow Warning'],
        innates: ['Queenly Majesty', 'Refrigerate', 'Ice Dew'],
        otherFormes: ['Ninetales'],
        bs: { hp: 73, at: 67, df: 75, sa: 91, sd: 100, sp: 109 }
    },
    'Diglett-Alola': {
        id: 956,
        'types': ['Ground', 'Steel'],
        abilities: ['Sand Force', 'Arena Trap', 'Steelworker'],
        innates: ['Tangling Hair', 'Sand Rush'],
        otherFormes: ['Diglett'],
        bs: { hp: 10, at: 55, df: 30, sa: 35, sd: 45, sp: 90 }
    },
    'Dugtrio-Alola': {
        id: 957,
        'types': ['Ground', 'Steel'],
        abilities: ['Sand Rush', 'Arena Trap', 'Steelworker'],
        innates: ['Multi Headed', 'Sand Force', 'Speed Force'],
        otherFormes: ['Dugtrio'],
        bs: { hp: 35, at: 100, df: 60, sa: 50, sd: 70, sp: 110 },
        heads: 3
    },
    'Meowth-Alola': {
        id: 958,
        'types': ['Dark'],
        abilities: ['Sniper', 'Limber', 'Prankster'],
        innates: ['Perfectionist', 'Technician', 'Opportunist'],
        otherFormes: ['Meowth', 'Meowth-Galarian'],
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 90 }
    },
    'Persian-Alola': {
        id: 959,
        'types': ['Dark'],
        abilities: ['Sniper', 'Opportunist', 'Prankster'],
        innates: ['Perfectionist', 'Technician', 'Fur Coat'],
        otherFormes: ['Persian'],
        bs: { hp: 65, at: 75, df: 70, sa: 105, sd: 65, sp: 115 }
    },
    'Geodude-Alola': {
        id: 960,
        'types': ['Rock', 'Electric'],
        abilities: ['Magnet Pull', 'Rock Head', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Galvanize'],
        otherFormes: ['Geodude'],
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 }
    },
    'Graveler-Alola': {
        id: 961,
        'types': ['Rock', 'Electric'],
        abilities: ['Magnet Pull', 'Rock Head', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Galvanize'],
        otherFormes: ['Graveler'],
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 }
    },
    'Golem-Alola': {
        id: 962,
        'types': ['Rock', 'Electric'],
        abilities: ['Magnet Pull', 'Ground Shock', 'Fort Knox'],
        innates: ['Lets Roll', 'Sturdy', 'Galvanize'],
        otherFormes: ['Golem'],
        bs: { hp: 90, at: 135, df: 130, sa: 55, sd: 65, sp: 45 }
    },
    'Grimer-Alola': {
        id: 963,
        'types': ['Poison', 'Dark'],
        abilities: ['Regenerator', 'Sticky Hold', 'Poison Absorb'],
        innates: ['Poison Touch', 'Liquified', 'Gluttony'],
        otherFormes: ['Grimer'],
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 }
    },
    'Muk-Alola': {
        id: 964,
        'types': ['Poison', 'Dark'],
        abilities: ['Regenerator', 'Sticky Hold', 'Self Sufficient'],
        innates: ['Poison Touch', 'Liquified', 'Gluttony'],
        otherFormes: ['Muk'],
        bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 }
    },
    'Exeggutor-Alola': {
        id: 965,
        'types': ['Grass', 'Dragon'],
        abilities: ['Natural Cure', 'Chloroplast', 'Solar Power'],
        innates: ['Harvest', 'Multi Headed', 'Skill Link'],
        otherFormes: ['Exeggutor'],
        bs: { hp: 95, at: 105, df: 85, sa: 125, sd: 75, sp: 45 },
        heads: 3
    },
    'Marowak-Alola': {
        id: 966,
        'types': ['Fire', 'Ghost'],
        abilities: ['Flame Body', 'Lightning Rod', 'Skill Link'],
        innates: ['Bone Zone', 'Vengeance', 'Rock Head'],
        otherFormes: ['Marowak'],
        bs: { hp: 75, at: 80, df: 110, sa: 50, sd: 80, sp: 60 }
    },
    'Meowth-Galarian': {
        id: 967,
        'types': ['Steel'],
        abilities: ['Sniper', 'Rough Skin', 'Unnerve'],
        innates: ['Tough Claws', 'Opportunist', 'Perfectionist'],
        otherFormes: ['Meowth', 'Meowth-Alola'],
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 }
    },
    'Ponyta-Galarian': {
        id: 968,
        'types': ['Fire', 'Fairy'],
        abilities: ['Run Away', 'Pastel Veil', 'Anticipation'],
        innates: ['Quick Feet', 'Psychic Mind', 'Natural Cure'],
        otherFormes: ['Ponyta'],
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 }
    },
    'Rapidash-Galarian': {
        id: 969,
        'types': ['Fire', 'Fairy'],
        abilities: ['Dazzling', 'Pastel Veil', 'Keen Edge'],
        innates: ['Pixilate', 'Psychic Mind', 'Striker'],
        otherFormes: ['Rapidash'],
        bs: { hp: 85, at: 110, df: 70, sa: 75, sd: 80, sp: 120 }
    },
    'Slowpoke-Galarian': {
        id: 970,
        'types': ['Psychic'],
        abilities: ['Gluttony', 'Own Tempo', 'Regenerator'],
        otherFormes: ['Slowpoke'],
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 }
    },
    'Slowbro-Galarian': {
        id: 971,
        'types': ['Poison', 'Psychic'],
        abilities: ['Quick Draw', 'Poison Touch', 'Regenerator'],
        innates: ['Oblivious', 'Own Tempo', 'Unaware'],
        otherFormes: ['Slowbro', 'Slowbro-Mega'],
        bs: { hp: 115, at: 100, df: 105, sa: 100, sd: 90, sp: 30 }
    },
    'Farfetchd-Galarian': {
        id: 972,
        'types': ['Fighting'],
        abilities: ['Steadfast', 'Steadfast', 'Steadfast'],
        innates: ['Scrappy', 'Sniper'],
        otherFormes: ['Farfetchd'],
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 }
    },
    'Weezing-Galarian': {
        id: 973,
        'types': ['Poison', 'Fairy'],
        abilities: ['Levitate', 'Neutralizing Gas', 'Misty Surge'],
        otherFormes: ['Weezing'],
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        heads: 2
    },
    'Mr-Mime-Galarian': {
        id: 974,
        'types': ['Ice', 'Psychic'],
        abilities: ['Vital Spirit', 'Screen Cleaner', 'Ice Body'],
        otherFormes: ['Mr-Mime'],
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 }
    },
    'Articuno-Galarian': {
        id: 975,
        'types': ['Psychic', 'Flying'],
        abilities: ['Competitive', 'Intimidate', 'Scare'],
        innates: ['Aurora Borealis', 'Permafrost', 'Refrigerate'],
        otherFormes: ['Articuno'],
        bs: { hp: 90, at: 85, df: 85, sa: 125, sd: 100, sp: 95 }
    },
    'Zapdos-Galarian': {
        id: 976,
        'types': ['Fighting', 'Flying'],
        abilities: ['Defiant', 'Aerodynamics', 'Scrappy'],
        innates: ['Striker', 'Lightning Rod', 'Galvanize'],
        otherFormes: ['Zapdos'],
        bs: { hp: 90, at: 125, df: 90, sa: 85, sd: 90, sp: 100 }
    },
    'Moltres-Galarian': {
        id: 977,
        'types': ['Dark', 'Flying'],
        abilities: ['Berserk', 'Soul Eater', 'Giant Wings'],
        innates: ['Dark Aura', 'Shadow Shield', 'Burnate'],
        otherFormes: ['Moltres'],
        bs: { hp: 90, at: 85, df: 90, sa: 100, sd: 125, sp: 90 }
    },
    'Slowking-Galarian': {
        id: 978,
        'types': ['Poison', 'Psychic'],
        abilities: ['Curious Medicine', 'Own Tempo', 'Regenerator'],
        otherFormes: ['Slowking'],
        bs: { hp: 95, at: 65, df: 80, sa: 110, sd: 110, sp: 30 }
    },
    'Corsola-Galarian': {
        id: 979,
        'types': ['Ghost'],
        abilities: ['Weak Armor', 'Weak Armor', 'Cursed Body'],
        otherFormes: ['Corsola'],
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 }
    },
    'Zigzagoon-Galarian': {
        id: 980,
        'types': ['Dark', 'Normal'],
        abilities: ['Pickup', 'Gluttony', 'Quick Feet'],
        innates: ['Scrappy'],
        otherFormes: ['Zigzagoon'],
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 }
    },
    'Linoone-Galarian': {
        id: 981,
        'types': ['Dark', 'Normal'],
        abilities: ['Pickup', 'Gluttony', 'Quick Feet'],
        innates: ['Scrappy', 'Hyper Aggressive'],
        otherFormes: ['Linoone'],
        bs: { hp: 78, at: 100, df: 61, sa: 50, sd: 61, sp: 110 }
    },
    'Darumaka-Galarian': {
        id: 982,
        'types': ['Ice'],
        abilities: ['Hustle', 'Inner Focus', 'Inner Focus'],
        innates: ['Mold Breaker'],
        otherFormes: ['Darumaka'],
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 }
    },
    'Darmanitan-Galarian': {
        id: 983,
        'types': ['Ice'],
        abilities: ['Gorilla Tactics', 'Sheer Force', 'Zen Mode'],
        innates: ['Mold Breaker', 'Iron Fist', 'Heatproof'],
        otherFormes: ['Darmanitan', 'Darmanitan-Zen-Mode', 'Darmanitan-Zen-Mode-Galarian'],
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 }
    },
    'Yamask-Galarian': {
        id: 984,
        'types': ['Ground', 'Ghost'],
        abilities: ['Wandering Spirit', 'Wandering Spirit', 'Wandering Spirit'],
        innates: ['Haunted Spirit', 'Cursed Body'],
        otherFormes: ['Yamask'],
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 }
    },
    'Stunfisk-Galarian': {
        id: 985,
        'types': ['Ground', 'Steel'],
        abilities: ['Mimicry', 'Mimicry', 'Mimicry'],
        otherFormes: ['Stunfisk'],
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 }
    },
    'Castform-Sunny': {
        id: 1028,
        abilities: ['Forecast', 'Forecast', 'Forecast'],
        innates: ['Levitate', 'Weather Control', 'Limber'],
        otherFormes: ['Castform', 'Castform-Rainy', 'Castform-Snowy'],
        bs: { hp: 70, at: 70, df: 70, sa: 100, sd: 70, sp: 100 }
    },
    'Castform-Rainy': {
        id: 1029,
        abilities: ['Forecast', 'Forecast', 'Forecast'],
        innates: ['Levitate', 'Weather Control', 'Limber'],
        otherFormes: ['Castform', 'Castform-Sunny', 'Castform-Snowy'],
        bs: { hp: 70, at: 70, df: 70, sa: 100, sd: 70, sp: 100 }
    },
    'Castform-Snowy': {
        id: 1030,
        abilities: ['Forecast', 'Forecast', 'Forecast'],
        innates: ['Levitate', 'Weather Control', 'Limber'],
        otherFormes: ['Castform', 'Castform-Sunny', 'Castform-Rainy'],
        bs: { hp: 70, at: 70, df: 70, sa: 100, sd: 70, sp: 100 }
    },
    'Deoxys-Attack': {
        id: 1031,
        abilities: ['Pressure', 'Levitate', 'Speed Boost'],
        innates: ['Inner Focus', 'Fatal Precision', 'Psychic Mind'],
        otherFormes: ['Deoxys', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Deoxys-Defense': {
        id: 1032,
        abilities: ['Sturdy', 'Levitate', 'Fort Knox'],
        innates: ['Inner Focus', 'Stamina', 'Regenerator'],
        otherFormes: ['Deoxys', 'Deoxys-Attack', 'Deoxys-Speed']
    },
    'Deoxys-Speed': {
        id: 1033,
        abilities: ['Pressure', 'Inner Focus', 'Speed Boost'],
        innates: ['Levitate', 'Fatal Precision', 'Psychic Mind'],
        otherFormes: ['Deoxys', 'Deoxys-Attack', 'Deoxys-Defense']
    },
    'Burmy-Sandy-Cloak': {
        id: 1034,
        'types': ['Bug'],
        abilities: ['Shed Skin', 'Shed Skin', 'Overcoat'],
        innates: ['Swarm'],
        otherFormes: ['Burmy', 'Burmy-Trash-Cloak'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 }
    },
    'Burmy-Trash-Cloak': {
        id: 1035,
        'types': ['Bug'],
        abilities: ['Shed Skin', 'Shed Skin', 'Overcoat'],
        innates: ['Swarm'],
        otherFormes: ['Burmy', 'Burmy-Sandy-Cloak'],
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 }
    },
    'Wormadam-Sandy-Cloak': {
        id: 1036,
        'types': ['Bug', 'Ground'],
        abilities: ['Anticipation', 'Rock Head', 'Overcoat'],
        innates: ['Swarm', 'Battle Armor', 'Groundate'],
        otherFormes: ['Wormadam', 'Wormadam-Trash-Cloak'],
        bs: { hp: 80, at: 99, df: 105, sa: 59, sd: 85, sp: 36 }
    },
    'Wormadam-Trash-Cloak': {
        id: 1037,
        'types': ['Bug', 'Steel'],
        abilities: ['Anticipation', 'Weak Armor', 'Overcoat'],
        innates: ['Swarm', 'Battle Armor', 'Corrosion'],
        otherFormes: ['Wormadam', 'Wormadam-Sandy-Cloak'],
        bs: { hp: 80, at: 69, df: 105, sa: 69, sd: 105, sp: 36 }
    },
    'Cherrim-Sunshine': {
        id: 1038,
        'types': ['Grass', 'Fairy'],
        abilities: ['Leaf Guard', 'Flower Gift', 'Flower Gift'],
        innates: ['Chlorophyll', 'Solar Power', 'Solar Flare'],
        otherFormes: ['Cherrim'],
        bs: { hp: 70, at: 100, df: 70, sa: 87, sd: 78, sp: 85 }
    },
    'Rotom-Heat': {
        id: 1041,
        abilities: ['Flash Fire', 'Flash Fire', 'Motor Drive'],
        innates: ['Levitate', 'Minus', 'Phantom'],
        otherFormes: ['Rotom', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow'],
        bs: { hp: 50, at: 65, df: 107, sa: 115, sd: 107, sp: 86 }
    },
    'Rotom-Wash': {
        id: 1042,
        abilities: ['Water Absorb', 'Water Absorb', 'Motor Drive'],
        innates: ['Levitate', 'Minus', 'Phantom'],
        otherFormes: ['Rotom', 'Rotom-Heat', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow'],
        bs: { hp: 50, at: 65, df: 107, sa: 115, sd: 107, sp: 86 }
    },
    'Rotom-Frost': {
        id: 1043,
        abilities: ['Ice Dew', 'Ice Dew', 'Motor Drive'],
        innates: ['Levitate', 'Minus', 'Phantom'],
        otherFormes: ['Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Fan', 'Rotom-Mow'],
        bs: { hp: 50, at: 65, df: 107, sa: 115, sd: 107, sp: 86 }
    },
    'Rotom-Fan': {
        id: 1044,
        abilities: ['Volt Absorb', 'Volt Absorb', 'Motor Drive'],
        innates: ['Air Blower', 'Minus', 'Phantom'],
        otherFormes: ['Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Mow'],
        bs: { hp: 50, at: 65, df: 107, sa: 115, sd: 107, sp: 86 }
    },
    'Rotom-Mow': {
        id: 1045,
        abilities: ['Sap Sipper', 'Sap Sipper', 'Motor Drive'],
        innates: ['Levitate', 'Minus', 'Phantom'],
        otherFormes: ['Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan'],
        bs: { hp: 50, at: 65, df: 107, sa: 115, sd: 107, sp: 86 }
    },
    'Giratina-Origin': {
        id: 1046,
        abilities: ['Intimidate', 'Scare', 'Twisted Dimension'],
        innates: ['Levitate', 'Shadow Tag', 'Soul Eater'],
        otherFormes: ['Giratina']
    },
    'Shaymin-Sky': {
        id: 1047,
        abilities: ['Magic Bounce', 'Aerodynamics', 'Pixilate'],
        innates: ['Natural Cure', 'Serene Grace', 'Speed Boost'],
        otherFormes: ['Shaymin']
    },
    'Arceus-Fighting': {
        id: 1048,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Flying': {
        id: 1049,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Poison': {
        id: 1050,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Ground': {
        id: 1051,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Rock': {
        id: 1052,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Bug': {
        id: 1053,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Ghost': {
        id: 1054,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Steel': {
        id: 1055,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Fire': {
        id: 1056,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Water': {
        id: 1057,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Grass': {
        id: 1058,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Electric': {
        id: 1059,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Psychic': {
        id: 1060,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Ice': {
        id: 1061,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Dragon', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Dragon': {
        id: 1062,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dark', 'Arceus-Fairy']
    },
    'Arceus-Dark': {
        id: 1063,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Fairy']
    },
    'Arceus-Fairy': {
        id: 1064,
        abilities: ['Multitype', 'Multitype', 'Multitype'],
        innates: ['Power Core', 'Pressure', 'Levitate'],
        otherFormes: ['Arceus', 'Arceus-Fighting', 'Arceus-Flying', 'Arceus-Poison', 'Arceus-Ground', 'Arceus-Rock', 'Arceus-Bug', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Fire', 'Arceus-Water', 'Arceus-Grass', 'Arceus-Electric', 'Arceus-Psychic', 'Arceus-Ice', 'Arceus-Dragon', 'Arceus-Dark']
    },
    'Basculin-Blue-Striped': {
        id: 1065,
        abilities: ['Mold Breaker', 'Strong Jaw', 'Predator'],
        innates: ['Rock Head', 'Adaptability', 'Hyper Aggressive'],
        otherFormes: ['Basculin'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 118 }
    },
    'Darmanitan-Zen-Mode': {
        id: 1066,
        'types': ['Fire', 'Psychic'],
        abilities: ['Sheer Force', 'Psychic Mind', 'Zen Mode'],
        innates: ['Inner Focus', 'Impenetrable', 'Clear Body'],
        otherFormes: ['Darmanitan', 'Darmanitan-Galarian', 'Darmanitan-Zen-Mode-Galarian'],
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 }
    },
    'Darmanitan-Zen-Mode-Galarian': {
        id: 1067,
        'types': ['Ice', 'Fire'],
        abilities: ['Gorilla Tactics', 'Sheer Force', 'Zen Mode'],
        innates: ['Mold Breaker', 'Power Fists', 'Heatproof'],
        otherFormes: ['Darmanitan', 'Darmanitan-Zen-Mode', 'Darmanitan-Galarian'],
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 }
    },
    'Tornadus-Therian': {
        id: 1074,
        abilities: ['Air Blower', 'Cloud Nine', 'Speed Boost'],
        innates: ['Prankster', 'Weather Control', 'Keen Eye'],
        otherFormes: ['Tornadus']
    },
    'Thundurus-Therian': {
        id: 1075,
        abilities: ['Electrocytes', 'Teravolt', 'Ground Shock'],
        innates: ['Overcharge', 'Weather Control', 'Volt Absorb'],
        otherFormes: ['Thundurus']
    },
    'Landorus-Therian': {
        id: 1076,
        abilities: ['Sheer Force', 'Aerilate', 'Moxie'],
        innates: ['Sand Force', 'Intimidate', 'Regenerator'],
        otherFormes: ['Landorus']
    },
    'Kyurem-White': {
        id: 1077,
        abilities: ['Beast Boost', 'Refrigerate', 'Snow Warning'],
        innates: ['Turboblaze', 'Permafrost', 'Whiteout'],
        otherFormes: ['Kyurem', 'Kyurem-Black']
    },
    'Kyurem-Black': {
        id: 1078,
        abilities: ['Beast Boost', 'Refrigerate', 'Snow Warning'],
        innates: ['Teravolt', 'Permafrost', 'Multiscale'],
        otherFormes: ['Kyurem', 'Kyurem-White']
    },
    'Keldeo-Resolute': {
        id: 1079,
        abilities: ['Justified', 'Fighting Spirit', 'Dragonslayer'],
        innates: ['Inner Focus', 'Avenger', 'Keen Edge'],
        otherFormes: ['Keldeo']
    },
    'Meloetta-Pirouette': {
        id: 1080,
        abilities: ['Fighting Spirit', 'Defiant', 'Super Luck'],
        innates: ['Serene Grace', 'Inner Focus', 'Striker'],
        otherFormes: ['Meloetta']
    },
    'Genesect-Douse-Drive': {
        id: 1081,
        'types': ['Bug', 'Steel'],
        abilities: ['Download', 'Fatal Precision', 'Sighting System'],
        innates: ['Full Metal Body', 'Predator', 'Mega Launcher'],
        otherFormes: ['Genesect', 'Genesect-Shock-Drive', 'Genesect-Burn-Drive', 'Genesect-Chill-Drive'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 }
    },
    'Genesect-Shock-Drive': {
        id: 1082,
        'types': ['Bug', 'Steel'],
        abilities: ['Download', 'Fatal Precision', 'Sighting System'],
        innates: ['Full Metal Body', 'Predator', 'Mega Launcher'],
        otherFormes: ['Genesect', 'Genesect-Douse-Drive', 'Genesect-Burn-Drive', 'Genesect-Chill-Drive'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 }
    },
    'Genesect-Burn-Drive': {
        id: 1083,
        'types': ['Bug', 'Steel'],
        abilities: ['Download', 'Fatal Precision', 'Sighting System'],
        innates: ['Full Metal Body', 'Predator', 'Mega Launcher'],
        otherFormes: ['Genesect', 'Genesect-Douse-Drive', 'Genesect-Shock-Drive', 'Genesect-Chill-Drive'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 }
    },
    'Genesect-Chill-Drive': {
        id: 1084,
        'types': ['Bug', 'Steel'],
        abilities: ['Download', 'Fatal Precision', 'Sighting System'],
        innates: ['Full Metal Body', 'Predator', 'Mega Launcher'],
        otherFormes: ['Genesect', 'Genesect-Douse-Drive', 'Genesect-Shock-Drive', 'Genesect-Burn-Drive'],
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 }
    },
    'Greninja-Battle-Bond': {
        id: 1085,
        'types': ['Water', 'Dark'],
        abilities: ['Battle Bond', 'Battle Bond', 'Battle Bond'],
        innates: ['Torrent', 'Skill Link', 'Fatal Precision'],
        otherFormes: ['Greninja', 'Greninja-Ash'],
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 }
    },
    'Greninja-Ash': {
        id: 1086,
        abilities: ['Battle Bond', 'Battle Bond', 'Battle Bond'],
        innates: ['Torrent', 'Skill Link', 'Fatal Precision'],
        otherFormes: ['Greninja', 'Greninja-Battle-Bond']
    },
    'Meowstic-Female': {
        id: 1128,
        'types': ['Psychic'],
        abilities: ['Infiltrator', 'Competitive', 'Sage Power'],
        innates: ['Psychic Mind', 'Psychic Surge', 'Hyper Aggressive'],
        otherFormes: ['Meowstic'],
        bs: { hp: 74, at: 48, df: 76, sa: 103, sd: 81, sp: 104 }
    },
    'Aegislash-Blade': {
        id: 1129,
        abilities: ['Shadow Shield', 'Dragonslayer', 'Soul Eater'],
        innates: ['Levitate', 'Keen Edge', 'Stance Change'],
        otherFormes: ['Aegislash']
    },
    'Pumpkaboo-Small': {
        id: 1130,
        abilities: ['Frisk', 'Flare Boost', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Pumpkaboo', 'Pumpkaboo-Large', 'Pumpkaboo-Super'],
        bs: { hp: 49, at: 44, df: 70, sa: 66, sd: 55, sp: 51 }
    },
    'Pumpkaboo-Large': {
        id: 1131,
        abilities: ['Frisk', 'Flare Boost', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Pumpkaboo', 'Pumpkaboo-Small', 'Pumpkaboo-Super'],
        bs: { hp: 49, at: 44, df: 70, sa: 66, sd: 55, sp: 51 }
    },
    'Pumpkaboo-Super': {
        id: 1132,
        abilities: ['Frisk', 'Flare Boost', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Pumpkaboo', 'Pumpkaboo-Small', 'Pumpkaboo-Large'],
        bs: { hp: 49, at: 44, df: 70, sa: 66, sd: 55, sp: 51 }
    },
    'Gourgeist-Small': {
        id: 1133,
        abilities: ['Flare Boost', 'Harvest', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Gourgeist', 'Gourgeist-Large', 'Gourgeist-Super'],
        bs: { hp: 55, at: 58, df: 122, sa: 85, sd: 75, sp: 99 }
    },
    'Gourgeist-Large': {
        id: 1134,
        abilities: ['Flare Boost', 'Harvest', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Gourgeist', 'Gourgeist-Small', 'Gourgeist-Super'],
        bs: { hp: 75, at: 58, df: 122, sa: 95, sd: 75, sp: 69 }
    },
    'Gourgeist-Super': {
        id: 1135,
        abilities: ['Flare Boost', 'Harvest', 'Moody'],
        innates: ['Insomnia', 'Cursed Body', 'Haunted Spirit'],
        otherFormes: ['Gourgeist', 'Gourgeist-Small', 'Gourgeist-Large'],
        bs: { hp: 85, at: 58, df: 122, sa: 100, sd: 75, sp: 54 }
    },
    'Xerneas-Active': {
        id: 1136,
        'types': ['Fairy'],
        abilities: ['Pixilate', 'Competitive', 'Self Sufficient'],
        innates: ['Fairy Aura', 'Illuminate', 'Soul-Heart'],
        otherFormes: ['Xerneas'],
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 }
    },
    'Zygarde-10': {
        id: 1137,
        'types': ['Dragon', 'Ground'],
        abilities: ['Aura Break', 'Hyper Aggressive', 'Power Construct'],
        innates: ['Primal Armor', 'Earthbound', 'Power Core'],
        otherFormes: ['Zygarde', 'Zygarde-10-Power-Construct', 'Zygarde-50-Power-Construct', 'Zygarde-Complete'],
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 }
    },
    'Zygarde-10-Power-Construct': {
        id: 1138,
        'types': ['Dragon', 'Ground'],
        abilities: ['Aura Break', 'Hyper Aggressive', 'Power Construct'],
        innates: ['Primal Armor', 'Earthbound', 'Power Core'],
        otherFormes: ['Zygarde', 'Zygarde-10', 'Zygarde-50-Power-Construct', 'Zygarde-Complete'],
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 }
    },
    'Zygarde-50-Power-Construct': {
        id: 1139,
        'types': ['Dragon', 'Ground'],
        abilities: ['Aura Break', 'Regenerator', 'Power Construct'],
        innates: ['Primal Armor', 'Earthbound', 'Power Core'],
        otherFormes: ['Zygarde', 'Zygarde-10', 'Zygarde-10-Power-Construct', 'Zygarde-Complete'],
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 }
    },
    'Zygarde-Complete': {
        id: 1140,
        abilities: ['Power Construct', 'Power Construct', 'Power Construct'],
        innates: ['Primal Armor', 'Earthbound', 'Power Core'],
        otherFormes: ['Zygarde', 'Zygarde-10', 'Zygarde-10-Power-Construct', 'Zygarde-50-Power-Construct']
    },
    'Hoopa-Unbound': {
        id: 1141,
        abilities: ['Magician', 'Magician', 'Magician'],
        innates: ['Soul Eater', 'Hyper Aggressive', 'Infiltrator'],
        otherFormes: ['Hoopa']
    },
    'Oricorio-Pom-Pom': {
        id: 1142,
        abilities: ['Dancer', 'Dancer', 'Dancer'],
        innates: ['Keen Eye', 'Lightning Rod', 'Flock'],
        otherFormes: ['Oricorio', 'Oricorio-Pau', 'Oricorio-Sensu'],
        bs: { hp: 75, at: 70, df: 70, sa: 108, sd: 70, sp: 103 }
    },
    'Oricorio-Pau': {
        id: 1143,
        'types': ['Psychic', 'Flying'],
        abilities: ['Dancer', 'Dancer', 'Dancer'],
        innates: ['Keen Eye', 'Psychic Mind', 'Flock'],
        otherFormes: ['Oricorio', 'Oricorio-Pom-Pom', 'Oricorio-Sensu'],
        bs: { hp: 75, at: 70, df: 70, sa: 108, sd: 70, sp: 103 }
    },
    'Oricorio-Sensu': {
        id: 1144,
        abilities: ['Dancer', 'Dancer', 'Dancer'],
        innates: ['Keen Eye', 'Cursed Body', 'Flock'],
        otherFormes: ['Oricorio', 'Oricorio-Pom-Pom', 'Oricorio-Pau'],
        bs: { hp: 75, at: 70, df: 70, sa: 108, sd: 70, sp: 103 }
    },
    'Rockruff-Own-Tempo': {
        id: 1145,
        'types': ['Rock'],
        abilities: ['Own Tempo', 'Own Tempo', 'Own Tempo'],
        innates: ['Keen Eye', 'Opportunist', 'Rock Head'],
        otherFormes: ['Rockruff'],
        bs: { hp: 45, at: 65, df: 40, sa: 30, sd: 40, sp: 60 }
    },
    'Lycanroc-Midnight': {
        id: 1146,
        'types': ['Rock', 'Dark'],
        abilities: ['Tough Claws', 'Lunar Eclipse', 'Predator'],
        innates: ['No Guard', 'Nocturnal', 'Hyper Aggressive'],
        otherFormes: ['Lycanroc', 'Lycanroc-Dusk'],
        bs: { hp: 95, at: 115, df: 85, sa: 55, sd: 75, sp: 82 }
    },
    'Lycanroc-Dusk': {
        id: 1147,
        abilities: ['Tough Claws', 'Moxie', 'Predator'],
        innates: ['Opportunist', 'Fatal Precision', 'Rock Head'],
        otherFormes: ['Lycanroc', 'Lycanroc-Midnight'],
        bs: { hp: 75, at: 127, df: 70, sa: 55, sd: 70, sp: 110 }
    },
    'Wishiwashi-School': {
        id: 1148,
        abilities: ['Schooling', 'Schooling', 'Schooling'],
        innates: ['Water Veil', 'Regenerator', 'Multiscale'],
        otherFormes: ['Wishiwashi']
    },
    'Silvally-Fighting': {
        id: 1149,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Flying': {
        id: 1150,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Poison': {
        id: 1151,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Ground': {
        id: 1152,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Rock': {
        id: 1153,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Bug': {
        id: 1154,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Ghost': {
        id: 1155,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Steel': {
        id: 1156,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Fire': {
        id: 1157,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Water': {
        id: 1158,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Grass': {
        id: 1159,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Electric': {
        id: 1160,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Psychic': {
        id: 1161,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Ice': {
        id: 1162,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Dragon', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Dragon': {
        id: 1163,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dark', 'Silvally-Fairy']
    },
    'Silvally-Dark': {
        id: 1164,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Fairy']
    },
    'Silvally-Fairy': {
        id: 1165,
        abilities: ['Rks System', 'Rks System', 'Rks System'],
        innates: ['Adaptability', 'Anger Point', 'Primal Armor'],
        otherFormes: ['Silvally', 'Silvally-Fighting', 'Silvally-Flying', 'Silvally-Poison', 'Silvally-Ground', 'Silvally-Rock', 'Silvally-Bug', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Fire', 'Silvally-Water', 'Silvally-Grass', 'Silvally-Electric', 'Silvally-Psychic', 'Silvally-Ice', 'Silvally-Dragon', 'Silvally-Dark']
    },
    'Mimikyu-Busted': {
        id: 1179,
        abilities: ['Disguise', 'Disguise', 'Disguise'],
        innates: ['Vengeance', 'Avenger', 'Haunted Spirit'],
        otherFormes: ['Mimikyu']
    },
    'Necrozma-Dusk-Mane': {
        id: 1180,
        abilities: ['Neuroforce', 'Rampage', 'Mega Launcher'],
        innates: ['Solar Flare', 'Impenetrable', 'Prism Armor'],
        otherFormes: ['Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Ultra']
    },
    'Necrozma-Dawn-Wings': {
        id: 1181,
        abilities: ['Neuroforce', 'Rampage', 'Mega Launcher'],
        innates: ['Lunar Eclipse', 'Shadow Shield', 'Levitate'],
        otherFormes: ['Necrozma', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra']
    },
    'Necrozma-Ultra': {
        id: 1182,
        abilities: ['Soul Eater', 'Rampage', 'Mega Launcher'],
        innates: ['Beast Boost', 'Neuroforce', 'Levitate'],
        otherFormes: ['Necrozma', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings']
    },
    'Magearna-Original-Color': {
        id: 1183,
        'types': ['Steel', 'Fairy'],
        abilities: ['Steelworker', 'Pixilate', 'Mirror Armor'],
        innates: ['Clear Body', 'Soul-Heart', 'Power Core'],
        otherFormes: ['Magearna'],
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 }
    },
    'Cramorant-Gulping': {
        id: 1184,
        abilities: ['Gulp Missile', 'Gulp Missile', 'Gulp Missile'],
        otherFormes: ['Cramorant', 'Cramorant-Gorging']
    },
    'Cramorant-Gorging': {
        id: 1185,
        abilities: ['Gulp Missile', 'Gulp Missile', 'Gulp Missile'],
        otherFormes: ['Cramorant', 'Cramorant-Gulping']
    },
    'Toxtricity-Low-Key': {
        id: 1186,
        abilities: ['Punk Rock', 'Amplifier', 'Technician'],
        innates: ['Minus', 'Water Absorb', 'Merciless'],
        otherFormes: ['Toxtricity']
    },
    'Sinistea-Antique': {
        id: 1187,
        abilities: ['Weak Armor', 'Weak Armor', 'Cursed Body'],
        otherFormes: ['Sinistea']
    },
    'Polteageist-Antique': {
        id: 1188,
        abilities: ['Weak Armor', 'Weak Armor', 'Cursed Body'],
        otherFormes: ['Polteageist']
    },
    'Eiscue-Noice-Face': {
        id: 1197,
        'types': ['Ice'],
        abilities: ['Ice Face', 'Ice Face', 'Ice Face'],
        otherFormes: ['Eiscue'],
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 }
    },
    'Indeedee-Female': {
        id: 1198,
        'types': ['Psychic', 'Normal'],
        abilities: ['Own Tempo', 'Synchronize', 'Psychic Surge'],
        otherFormes: ['Indeedee'],
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 }
    },
    'Morpeko-Hangry': {
        id: 1199,
        abilities: ['Hunger Switch', 'Hunger Switch', 'Hunger Switch'],
        otherFormes: ['Morpeko']
    },
    'Zacian-Crowned-Sword': {
        id: 1200,
        'types': ['Fairy', 'Steel'],
        abilities: ['Intrepid Sword', 'Intrepid Sword', 'Intrepid Sword'],
        otherFormes: ['Zacian'],
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 }
    },
    'Zamazenta-Crowned-Shield': {
        id: 1201,
        'types': ['Fighting', 'Steel'],
        abilities: ['Dauntless Shield', 'Dauntless Shield', 'Dauntless Shield'],
        otherFormes: ['Zamazenta'],
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 }
    },
    'Eternatus-Eternamax': {
        id: 1202,
        abilities: ['Pressure', 'Pressure', 'Pressure'],
        otherFormes: ['Eternatus']
    },
    'Urshifu-Rapid-Strike-Style': {
        id: 1203,
        'types': ['Fighting', 'Water'],
        abilities: ['Unseen Fist', 'Unseen Fist', 'Unseen Fist'],
        otherFormes: ['Urshifu'],
        bs: { hp: 100, at: 130, df: 100, sa: 63, sd: 60, sp: 97 }
    },
    'Zarude-Dada': {
        id: 1204,
        abilities: ['Leaf Guard', 'Leaf Guard', 'Leaf Guard'],
        otherFormes: ['Zarude']
    },
    'Calyrex-Ice-Rider': {
        id: 1205,
        'types': ['Psychic', 'Ice'],
        abilities: ['As One Ice Rider', 'As One Ice Rider', 'As One Ice Rider'],
        innates: ['Permafrost', 'Stamina', 'Whiteout'],
        otherFormes: ['Calyrex', 'Calyrex-Shadow-Rider'],
        bs: { hp: 100, at: 165, df: 150, sa: 85, sd: 130, sp: 50 }
    },
    'Calyrex-Shadow-Rider': {
        id: 1206,
        'types': ['Psychic', 'Ghost'],
        abilities: ['As One Shadow Rider', 'As One Shadow Rider', 'As One Shadow Rider'],
        innates: ['Shadow Shield', 'Scare', 'Speed Boost'],
        otherFormes: ['Calyrex', 'Calyrex-Ice-Rider'],
        bs: { hp: 100, at: 85, df: 80, sa: 165, sd: 100, sp: 150 }
    },
    'Milotic-Mega': {
        id: 1207,
        'types': ['Water', 'Fairy'],
        abilities: ['Self Sufficient', 'Self Sufficient', 'Self Sufficient'],
        innates: ['Prism Scales', 'Adaptability', 'Sea Guardian'],
        bs: { hp: 95, at: 70, df: 109, sa: 130, sd: 155, sp: 81 },
        weightkg: 162,
        otherFormes: ['Milotic']
    },
    'Butterfree-Mega': {
        id: 1208,
        'types': ['Bug', 'Psychic'],
        otherFormes: ['Butterfree'],
        weightkg: 32,
        abilities: ['Tinted Lens', 'Tinted Lens', 'Tinted Lens'],
        innates: ['Magical Dust', 'Compound Eyes', 'Levitate'],
        bs: { hp: 60, at: 15, df: 60, sa: 140, sd: 120, sp: 110 }
    },
    'Machamp-Mega': {
        id: 1209,
        'types': ['Fighting'],
        abilities: ['Raging Boxer', 'Raging Boxer', 'Raging Boxer'],
        innates: ['No Guard', 'Iron Fist', 'Anger Point'],
        bs: { hp: 90, at: 170, df: 100, sa: 65, sd: 105, sp: 75 },
        weightkg: 130,
        otherFormes: ['Machamp']
    },
    'Kingler-Mega': {
        id: 1210,
        'types': ['Water'],
        abilities: ['Tough Claws', 'Tough Claws', 'Tough Claws'],
        innates: ['Swift Swim', 'Hyper Cutter', 'Grip Pincer'],
        bs: { hp: 80, at: 170, df: 135, sa: 50, sd: 80, sp: 85 },
        weightkg: 60,
        otherFormes: ['Kingler']
    },
    'Lapras-Mega': {
        id: 1211,
        'types': ['Water', 'Ice'],
        abilities: ['Liquid Voice', 'Liquid Voice', 'Liquid Voice'],
        innates: ['Ice Scales', 'Shell Armor', 'Self Sufficient'],
        bs: { hp: 130, at: 105, df: 110, sa: 125, sd: 125, sp: 50 },
        weightkg: 220,
        otherFormes: ['Lapras']
    },
    'Flygon-Mega': {
        id: 1212,
        'types': ['Ground', 'Bug'],
        abilities: ['Tinted Lens', 'Tinted Lens', 'Tinted Lens'],
        innates: ['Dragonfly', 'Sand Song', 'Sand Rush'],
        bs: { hp: 80, at: 130, df: 100, sa: 120, sd: 100, sp: 110 },
        weightkg: 82,
        otherFormes: ['Flygon']
    },
    'Kingdra-Mega': {
        id: 1213,
        'types': ['Water', 'Dragon'],
        abilities: ['Swift Swim', 'Swift Swim', 'Swift Swim'],
        innates: ['Sea Guardian', 'Mega Launcher', 'Marvel Scale'],
        bs: { hp: 75, at: 105, df: 100, sa: 145, sd: 100, sp: 115 },
        weightkg: 152,
        otherFormes: ['Kingdra']
    },
    'Dewgong-Mega': {
        id: 1214,
        'types': ['Water', 'Ice'],
        abilities: ['Hardened Sheath', 'Lightning Rod', 'Cold Rebound'],
        innates: ['Arctic Fur', 'Water Veil', 'Hydrate'],
        otherFormes: ['Dewgong'],
        bs: { hp: 90, at: 105, df: 105, sa: 125, sd: 105, sp: 90 },
        weightkg: 120
    },
    'Hitmonchan-Mega': {
        id: 1215,
        'types': ['Fighting'],
        abilities: ['Low Blow', 'Low Blow', 'Low Blow'],
        innates: ['Inner Focus', 'Fatal Precision', 'Perfectionist'],
        otherFormes: ['Hitmonchan'],
        bs: { hp: 80, at: 105, df: 79, sa: 35, sd: 110, sp: 76 },
        weightkg: 52
    },
    'Hitmonlee-Mega': {
        id: 1216,
        'types': ['Fighting'],
        abilities: ['Unburden', 'Fatal Precision', 'Violent Rush'],
        innates: ['Limber', 'Reckless', 'Striker'],
        bs: { hp: 80, at: 120, df: 53, sa: 35, sd: 110, sp: 87 },
        otherFormes: ['Hitmonlee'],
        weightkg: 49.8
    },
    'Hitmontop-Mega': {
        id: 1217,
        'types': ['Fighting'],
        abilities: ['Steadfast', 'Fighting Spirit', 'Contrary'],
        innates: ['Technician', 'Intimidate'],
        bs: { hp: 80, at: 95, df: 95, sa: 35, sd: 110, sp: 70 },
        weightkg: 48,
        otherFormes: ['Hitmontop']
    },
    'Crobat-Mega': {
        id: 1218,
        'types': ['Poison', 'Flying'],
        abilities: ['Nosferatu', 'Nosferatu', 'Amplifier'],
        innates: ['Infiltrator', 'Soundproof', 'Nocturnal'],
        otherFormes: ['Crobat'],
        bs: { hp: 85, at: 90, df: 80, sa: 80, sd: 80, sp: 130 },
        weightkg: 75
    },
    'Skarmory-Mega': {
        id: 1219,
        'types': ['Steel', 'Flying'],
        abilities: ['Mirror Armor', 'Sturdy', 'Lead Coat'],
        innates: ['Giant Wings', 'Full Metal Body', 'Battle Armor'],
        otherFormes: ['Skarmory'],
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        weightkg: 50.5
    },
    'Bruxish-Mega': {
        id: 1220,
        'types': ['Water', 'Psychic'],
        abilities: ['Dazzling', 'Defiant', 'Predator'],
        innates: ['Strong Jaw', 'Wonder Skin', 'Psychic Mind'],
        bs: { hp: 68, at: 105, df: 70, sa: 70, sd: 70, sp: 92 },
        otherFormes: ['Bruxish'],
        weightkg: 19
    },
    'Torterra-Mega': {
        id: 1221,
        'types': ['Grass', 'Ground'],
        abilities: ['Rough Skin', 'Stamina', 'Sheer Force'],
        innates: ['Overgrow', 'Impenetrable', 'Big Leaves'],
        bs: { hp: 95, at: 119, df: 134, sa: 55, sd: 95, sp: 36 },
        weightkg: 310,
        otherFormes: ['Torterra']
    },
    'Infernape-Mega': {
        id: 1222,
        'types': ['Fire', 'Fighting'],
        abilities: ['Iron Fist', 'Power Fists', 'Gorilla Tactics'],
        innates: ['Blaze', 'Prankster', 'Defiant'],
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        weightkg: 55,
        otherFormes: ['Infernape']
    },
    'Empoleon-Mega': {
        id: 1223,
        'types': ['Water', 'Steel'],
        abilities: ['Competitive', 'Defiant', 'Slush Rush'],
        innates: ['Torrent', 'Antarctic Bird', 'Swift Swim'],
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        weightkg: 84.5,
        otherFormes: ['Empoleon']
    },
    'Shuckle-Mega': {
        id: 1224,
        'types': ['Bug', 'Rock'],
        abilities: ['Moody', 'Regenerator', 'Contrary'],
        innates: ['Shell Armor', 'Fort Knox', 'Solid Rock'],
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        weightkg: 20.5,
        otherFormes: ['Shuckle']
    },
    'Relicanth-Mega': {
        id: 1225,
        'types': ['Water', 'Rock'],
        abilities: ['Sturdy', 'Fort Knox', 'Rough Skin'],
        innates: ['Fossilized', 'Impenetrable', 'Primal Armor'],
        bs: { hp: 100, at: 110, df: 130, sa: 45, sd: 65, sp: 55 },
        weightkg: 23.4,
        otherFormes: ['Relicanth']
    },
    'Quagsire-Mega': {
        id: 1226,
        'types': ['Water', 'Ground'],
        abilities: ['Hydrate', 'Groundate', 'Water Veil'],
        innates: ['Unaware', 'Water Absorb', 'Regenerator'],
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 35 },
        weightkg: 75,
        otherFormes: ['Quagsire']
    },
    'Jellicent-Mega': {
        id: 1227,
        'types': ['Water', 'Ghost'],
        abilities: ['Cursed Body', 'Clear Body', 'Immunity'],
        innates: ['Water Bubble', 'Soul Eater', 'Poison Touch'],
        bs: { hp: 120, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        weightkg: 135,
        otherFormes: ['Jellicent']
    },
    'Toucannon-Mega': {
        id: 1228,
        'types': ['Normal', 'Flying'],
        abilities: ['Burnate', 'Super Luck', 'Sheer Force'],
        innates: ['Flock', 'Keen Eye', 'Skill Link'],
        bs: { hp: 80, at: 120, df: 95, sa: 75, sd: 95, sp: 60 },
        weightkg: 26,
        otherFormes: ['Toucannon']
    },
    'Dragonite-Mega': {
        id: 1229,
        'types': ['Dragon', 'Electric'],
        abilities: ['Galvanize', 'Galvanize', 'Galvanize'],
        innates: ['Multiscale', 'Discipline', 'Thundercall'],
        bs: { hp: 91, at: 159, df: 120, sa: 125, sd: 125, sp: 80 },
        weightkg: 210,
        otherFormes: ['Dragonite']
    },
    'Breloom-Mega': {
        id: 1230,
        'types': ['Grass', 'Fighting'],
        abilities: ['Poison Heal', 'Precise Fist', 'Long Reach'],
        innates: ['Effect Spore', 'Toxic Boost', 'Technician'],
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        weightkg: 39.2,
        otherFormes: ['Breloom']
    },
    'Slaking-Mega': {
        id: 1231,
        'types': ['Normal'],
        abilities: ['Lethargy', 'Lethargy', 'Lethargy'],
        innates: ['Comatose', 'Unaware', 'Mold Breaker'],
        otherFormes: ['Slaking'],
        bs: { hp: 130, at: 150, df: 100, sa: 75, sd: 95, sp: 100 },
        weightkg: 130.5
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH, REDUX_PATCH);
delete SS['Pikachu-Starter'];
delete SS['Eevee-Starter'];
var PLA_PATCH = {
    Arcanine: { otherFormes: ['Arcanine-Hisui'] },
    Avalugg: { otherFormes: ['Avalugg-Hisui'] },
    Basculin: { otherFormes: ['Basculin-Blue-Striped', 'Basculin-White-Striped'] },
    Braviary: { otherFormes: ['Braviary-Hisui'] },
    Decidueye: { otherFormes: ['Decidueye-Hisui'] },
    Dialga: { otherFormes: ['Dialga-Origin'] },
    Electrode: { otherFormes: ['Electrode-Hisui'] },
    Goodra: { otherFormes: ['Goodra-Hisui'] },
    Growlithe: { otherFormes: ['Growlithe-Hisui'] },
    Lilligant: { otherFormes: ['Lilligant-Hisui'] },
    Palkia: { otherFormes: ['Palkia-Origin'] },
    Qwilfish: { otherFormes: ['Qwilfish-Hisui'] },
    Samurott: { otherFormes: ['Samurott-Hisui'] },
    Sliggoo: { otherFormes: ['Sliggoo-Hisui'] },
    Sneasel: { otherFormes: ['Sneasel-Hisui'] },
    Stantler: { nfe: true },
    Typhlosion: { otherFormes: ['Typhlosion-Hisui'] },
    Ursaring: { nfe: true },
    Voltorb: { otherFormes: ['Voltorb-Hisui'] },
    Zoroark: { otherFormes: ['Zoroark-Hisui'] },
    Zorua: { otherFormes: ['Zorua-Hisui'] },
    'Arcanine-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 95, at: 115, df: 80, sa: 95, sd: 80, sp: 90 },
        weightkg: 168,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Arcanine'
    },
    'Avalugg-Hisui': {
        types: ['Ice', 'Rock'],
        bs: { hp: 95, at: 127, df: 184, sa: 34, sd: 36, sp: 38 },
        weightkg: 262.4,
        abilities: { 0: 'Strong Jaw' },
        baseSpecies: 'Avalugg'
    },
    Basculegion: {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 112, df: 65, sa: 80, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        otherFormes: ['Basculegion-F']
    },
    'Basculegion-F': {
        types: ['Water', 'Ghost'],
        bs: { hp: 120, at: 92, df: 65, sa: 100, sd: 75, sp: 78 },
        weightkg: 110,
        abilities: { 0: 'Swift Swim' },
        baseSpecies: 'Basculegion'
    },
    'Basculin-White-Striped': {
        types: ['Water'],
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        weightkg: 18,
        abilities: { 0: 'Rattled' },
        baseSpecies: 'Basculin',
        nfe: true
    },
    'Braviary-Hisui': {
        types: ['Psychic', 'Flying'],
        bs: { hp: 110, at: 83, df: 70, sa: 112, sd: 70, sp: 65 },
        weightkg: 43.4,
        abilities: { 0: 'Keen Eye' },
        baseSpecies: 'Braviary'
    },
    'Decidueye-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 88, at: 112, df: 80, sa: 95, sd: 95, sp: 60 },
        weightkg: 37,
        abilities: { 0: 'Overgrow' },
        baseSpecies: 'Decidueye'
    },
    'Dialga-Origin': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 100, at: 100, df: 120, sa: 150, sd: 120, sp: 90 },
        weightkg: 850,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Dialga'
    },
    'Electrode-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 60, at: 50, df: 70, sa: 80, sd: 80, sp: 150 },
        weightkg: 71,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Electrode'
    },
    Enamorus: {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 70, sa: 135, sd: 80, sp: 106 },
        weightkg: 48,
        abilities: { 0: 'Cute Charm' },
        otherFormes: ['Enamorus-Therian']
    },
    'Enamorus-Therian': {
        types: ['Fairy', 'Flying'],
        bs: { hp: 74, at: 115, df: 110, sa: 135, sd: 100, sp: 46 },
        weightkg: 48,
        abilities: { 0: 'Overcoat' },
        baseSpecies: 'Enamorus'
    },
    'Goodra-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 80, at: 100, df: 100, sa: 110, sd: 150, sp: 60 },
        weightkg: 334.1,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Goodra'
    },
    'Growlithe-Hisui': {
        types: ['Fire', 'Rock'],
        bs: { hp: 60, at: 75, df: 45, sa: 65, sd: 50, sp: 55 },
        weightkg: 22.7,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Growlithe',
        nfe: true
    },
    Kleavor: {
        types: ['Bug', 'Rock'],
        bs: { hp: 70, at: 135, df: 95, sa: 45, sd: 70, sp: 85 },
        weightkg: 89,
        abilities: { 0: 'Swarm' }
    },
    'Lilligant-Hisui': {
        types: ['Grass', 'Fighting'],
        bs: { hp: 70, at: 105, df: 75, sa: 50, sd: 75, sp: 105 },
        weightkg: 19.2,
        abilities: { 0: 'Chlorophyll' },
        baseSpecies: 'Lilligant'
    },
    Overqwil: {
        types: ['Dark', 'Poison'],
        bs: { hp: 85, at: 115, df: 95, sa: 65, sd: 65, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' }
    },
    'Palkia-Origin': {
        types: ['Water', 'Dragon'],
        bs: { hp: 90, at: 100, df: 100, sa: 150, sd: 120, sp: 120 },
        weightkg: 660,
        gender: 'N',
        abilities: { 0: 'Pressure' },
        baseSpecies: 'Palkia'
    },
    'Qwilfish-Hisui': {
        types: ['Dark', 'Poison'],
        bs: { hp: 65, at: 95, df: 85, sa: 55, sd: 55, sp: 85 },
        weightkg: 3.9,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Qwilfish',
        nfe: true
    },
    'Samurott-Hisui': {
        types: ['Water', 'Dark'],
        bs: { hp: 90, at: 108, df: 80, sa: 100, sd: 65, sp: 85 },
        weightkg: 58.2,
        abilities: { 0: 'Torrent' },
        baseSpecies: 'Samurott'
    },
    'Sliggoo-Hisui': {
        types: ['Steel', 'Dragon'],
        bs: { hp: 58, at: 75, df: 83, sa: 83, sd: 113, sp: 40 },
        weightkg: 68.5,
        abilities: { 0: 'Sap Sipper' },
        baseSpecies: 'Sliggoo',
        nfe: true
    },
    'Sneasel-Hisui': {
        types: ['Fighting', 'Poison'],
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        weightkg: 27,
        abilities: { 0: 'Inner Focus' },
        baseSpecies: 'Sneasel',
        nfe: true
    },
    Sneasler: {
        types: ['Fighting', 'Poison'],
        bs: { hp: 80, at: 130, df: 60, sa: 40, sd: 80, sp: 120 },
        weightkg: 43,
        abilities: { 0: 'Pressure' }
    },
    'Typhlosion-Hisui': {
        types: ['Fire', 'Ghost'],
        bs: { hp: 73, at: 84, df: 78, sa: 119, sd: 85, sp: 95 },
        weightkg: 69.8,
        abilities: { 0: 'Blaze' },
        baseSpecies: 'Typhlosion'
    },
    Ursaluna: {
        types: ['Ground', 'Normal'],
        bs: { hp: 130, at: 140, df: 105, sa: 45, sd: 80, sp: 50 },
        weightkg: 290,
        abilities: { 0: 'Guts' }
    },
    'Voltorb-Hisui': {
        types: ['Electric', 'Grass'],
        bs: { hp: 40, at: 30, df: 50, sa: 55, sd: 55, sp: 100 },
        weightkg: 13,
        gender: 'N',
        abilities: { 0: 'Soundproof' },
        baseSpecies: 'Voltorb',
        nfe: true
    },
    Wyrdeer: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 103, at: 105, df: 72, sa: 105, sd: 75, sp: 65 },
        weightkg: 95.1,
        abilities: { 0: 'Intimidate' }
    },
    'Zoroark-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 55, at: 100, df: 60, sa: 125, sd: 60, sp: 110 },
        weightkg: 73,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zoroark'
    },
    'Zorua-Hisui': {
        types: ['Normal', 'Ghost'],
        bs: { hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70 },
        weightkg: 12.5,
        abilities: { 0: 'Illusion' },
        baseSpecies: 'Zorua',
        nfe: true
    }
};
var SV_PATCH = {
    Bisharp: { nfe: true },
    Cresselia: { bs: { df: 110, sd: 120 } },
    Dunsparce: { nfe: true },
    Girafarig: { nfe: true },
    Primeape: { nfe: true },
    Tauros: { otherFormes: ['Tauros-Paldea-Aqua', 'Tauros-Paldea-Blaze', 'Tauros-Paldea-Combat'] },
    Wooper: { otherFormes: ['Wooper-Paldea'] },
    Zacian: { bs: { at: 120 } },
    'Zacian-Crowned': { bs: { at: 150 } },
    Zamazenta: { bs: { at: 120 } },
    'Zamazenta-Crowned': { bs: { at: 120, df: 140, sd: 140 } },
    Annihilape: {
        types: ['Fighting', 'Ghost'],
        bs: { hp: 110, at: 115, df: 80, sa: 50, sd: 90, sp: 90 },
        weightkg: 56,
        abilities: { 0: 'Vital Spirit' }
    },
    Arboliva: {
        types: ['Grass', 'Normal'],
        bs: { hp: 78, at: 69, df: 90, sa: 125, sd: 109, sp: 39 },
        weightkg: 48.2,
        abilities: { 0: 'Seed Sower' }
    },
    Arctibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 90, at: 95, df: 66, sa: 45, sd: 65, sp: 62 },
        weightkg: 30,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Armarouge: {
        types: ['Fire', 'Psychic'],
        bs: { hp: 85, at: 60, df: 100, sa: 125, sd: 80, sp: 75 },
        weightkg: 85,
        abilities: { 0: 'Flash Fire' }
    },
    Baxcalibur: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 115, at: 145, df: 92, sa: 75, sd: 86, sp: 87 },
        weightkg: 210,
        abilities: { 0: 'Thermal Exchange' }
    },
    Bellibolt: {
        types: ['Electric'],
        bs: { hp: 109, at: 64, df: 91, sa: 103, sd: 83, sp: 45 },
        weightkg: 113,
        abilities: { 0: 'Electromorphosis' }
    },
    Bombirdier: {
        types: ['Flying', 'Dark'],
        bs: { hp: 70, at: 103, df: 85, sa: 60, sd: 85, sp: 82 },
        weightkg: 42.9,
        abilities: { 0: 'Big Pecks' }
    },
    Brambleghast: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 55, at: 115, df: 70, sa: 80, sd: 70, sp: 90 },
        weightkg: 6,
        abilities: { 0: 'Wind Rider' }
    },
    Bramblin: {
        types: ['Grass', 'Ghost'],
        bs: { hp: 40, at: 65, df: 30, sa: 45, sd: 35, sp: 60 },
        weightkg: 0.6,
        abilities: { 0: 'Wind Rider' },
        nfe: true
    },
    'Brute Bonnet': {
        types: ['Grass', 'Dark'],
        bs: { hp: 111, at: 127, df: 99, sa: 79, sd: 99, sp: 55 },
        weightkg: 21,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Capsakid: {
        types: ['Grass'],
        bs: { hp: 52, at: 62, df: 40, sa: 62, sd: 40, sp: 50 },
        weightkg: 3,
        abilities: { 0: 'Chlorophyll' },
        nfe: true
    },
    Ceruledge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 75, at: 125, df: 80, sa: 60, sd: 100, sp: 85 },
        weightkg: 62,
        abilities: { 0: 'Flash Fire' }
    },
    Cetitan: {
        types: ['Ice'],
        bs: { hp: 170, at: 113, df: 65, sa: 45, sd: 55, sp: 73 },
        weightkg: 700,
        abilities: { 0: 'Thick Fat' }
    },
    Cetoddle: {
        types: ['Ice'],
        bs: { hp: 108, at: 68, df: 45, sa: 30, sd: 40, sp: 43 },
        weightkg: 45,
        abilities: { 0: 'Thick Fat' },
        nfe: true
    },
    Charcadet: {
        types: ['Fire'],
        bs: { hp: 40, at: 50, df: 40, sa: 50, sd: 40, sp: 35 },
        weightkg: 10.5,
        abilities: { 0: 'Flash Fire' },
        nfe: true
    },
    'Chi-Yu': {
        types: ['Dark', 'Fire'],
        bs: { hp: 55, at: 80, df: 80, sa: 135, sd: 120, sp: 100 },
        weightkg: 4.9,
        gender: 'N',
        abilities: { 0: 'Beads of Ruin' }
    },
    'Chien-Pao': {
        types: ['Dark', 'Ice'],
        bs: { hp: 80, at: 120, df: 80, sa: 90, sd: 65, sp: 135 },
        weightkg: 152.2,
        gender: 'N',
        abilities: { 0: 'Sword of Ruin' }
    },
    Clodsire: {
        types: ['Poison', 'Ground'],
        bs: { hp: 130, at: 75, df: 60, sa: 45, sd: 100, sp: 20 },
        weightkg: 223,
        abilities: { 0: 'Poison Point' }
    },
    Crocalor: {
        types: ['Fire'],
        bs: { hp: 81, at: 55, df: 78, sa: 90, sd: 58, sp: 49 },
        weightkg: 30.7,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Cyclizar: {
        types: ['Dragon', 'Normal'],
        bs: { hp: 70, at: 95, df: 65, sa: 85, sd: 65, sp: 121 },
        weightkg: 63,
        abilities: { 0: 'Shed Skin' }
    },
    Dachsbun: {
        types: ['Fairy'],
        bs: { hp: 57, at: 80, df: 115, sa: 50, sd: 80, sp: 95 },
        weightkg: 14.9,
        abilities: { 0: 'Well-Baked Body' }
    },
    Dolliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 52, at: 53, df: 60, sa: 78, sd: 78, sp: 33 },
        weightkg: 11.9,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Dondozo: {
        types: ['Water'],
        bs: { hp: 150, at: 100, df: 115, sa: 65, sd: 65, sp: 35 },
        weightkg: 220,
        abilities: { 0: 'Unaware' }
    },
    Dudunsparce: {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 39.2,
        abilities: { 0: 'Serene Grace' },
        otherFormes: ['Dudunsparce-Three-Segment']
    },
    'Dudunsparce-Three-Segment': {
        types: ['Normal'],
        bs: { hp: 125, at: 100, df: 80, sa: 85, sd: 75, sp: 55 },
        weightkg: 47.4,
        abilities: { 0: 'Serene Grace' },
        baseSpecies: 'Dudunsparce'
    },
    Espathra: {
        types: ['Psychic'],
        bs: { hp: 95, at: 60, df: 60, sa: 101, sd: 60, sp: 105 },
        weightkg: 90,
        abilities: { 0: 'Opportunist' }
    },
    Farigiraf: {
        types: ['Normal', 'Psychic'],
        bs: { hp: 120, at: 90, df: 70, sa: 110, sd: 70, sp: 60 },
        weightkg: 160,
        abilities: { 0: 'Cud Chew' }
    },
    Fidough: {
        types: ['Fairy'],
        bs: { hp: 37, at: 55, df: 70, sa: 30, sd: 55, sp: 65 },
        weightkg: 10.9,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Finizen: {
        types: ['Water'],
        bs: { hp: 70, at: 45, df: 40, sa: 45, sd: 40, sp: 75 },
        weightkg: 60.2,
        abilities: { 0: 'Water Veil' },
        nfe: true
    },
    Flamigo: {
        types: ['Flying', 'Fighting'],
        bs: { hp: 82, at: 115, df: 74, sa: 75, sd: 64, sp: 90 },
        weightkg: 37,
        abilities: { 0: 'Scrappy' }
    },
    Flittle: {
        types: ['Psychic'],
        bs: { hp: 30, at: 35, df: 30, sa: 55, sd: 30, sp: 75 },
        weightkg: 1.5,
        abilities: { 0: 'Anticipation' },
        nfe: true
    },
    Floragato: {
        types: ['Grass'],
        bs: { hp: 61, at: 80, df: 63, sa: 60, sd: 63, sp: 83 },
        weightkg: 12.2,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    'Flutter Mane': {
        types: ['Ghost', 'Fairy'],
        bs: { hp: 55, at: 55, df: 55, sa: 135, sd: 135, sp: 135 },
        weightkg: 4,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Frigibax: {
        types: ['Dragon', 'Ice'],
        bs: { hp: 65, at: 75, df: 45, sa: 35, sd: 45, sp: 55 },
        weightkg: 17,
        abilities: { 0: 'Thermal Exchange' },
        nfe: true
    },
    Fuecoco: {
        types: ['Fire'],
        bs: { hp: 67, at: 45, df: 59, sa: 63, sd: 40, sp: 36 },
        weightkg: 9.8,
        abilities: { 0: 'Blaze' },
        nfe: true
    },
    Garganacl: {
        types: ['Rock'],
        bs: { hp: 100, at: 100, df: 130, sa: 45, sd: 90, sp: 35 },
        weightkg: 240,
        abilities: { 0: 'Purifying Salt' }
    },
    Gholdengo: {
        types: ['Steel', 'Ghost'],
        bs: { hp: 87, at: 60, df: 95, sa: 133, sd: 91, sp: 84 },
        weightkg: 30,
        gender: 'N',
        abilities: { 0: 'Good as Gold' }
    },
    Gimmighoul: {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 70, sa: 75, sd: 70, sp: 10 },
        weightkg: 5,
        gender: 'N',
        abilities: { 0: 'Rattled' },
        nfe: true,
        otherFormes: ['Gimmighoul-Roaming']
    },
    'Gimmighoul-Roaming': {
        types: ['Ghost'],
        bs: { hp: 45, at: 30, df: 25, sa: 75, sd: 45, sp: 80 },
        weightkg: 0.1,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true,
        baseSpecies: 'Gimmighoul'
    },
    Glimmet: {
        types: ['Rock', 'Poison'],
        bs: { hp: 48, at: 35, df: 42, sa: 105, sd: 60, sp: 60 },
        weightkg: 8,
        abilities: { 0: 'Toxic Debris' },
        nfe: true
    },
    Glimmora: {
        types: ['Rock', 'Poison'],
        bs: { hp: 83, at: 55, df: 90, sa: 130, sd: 81, sp: 86 },
        weightkg: 45,
        abilities: { 0: 'Toxic Debris' }
    },
    Grafaiai: {
        types: ['Poison', 'Normal'],
        bs: { hp: 63, at: 95, df: 65, sa: 80, sd: 72, sp: 110 },
        weightkg: 27.2,
        abilities: { 0: 'Unburden' }
    },
    'Great Tusk': {
        types: ['Ground', 'Fighting'],
        bs: { hp: 115, at: 131, df: 131, sa: 53, sd: 53, sp: 87 },
        weightkg: 320,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Greavard: {
        types: ['Ghost'],
        bs: { hp: 50, at: 61, df: 60, sa: 30, sd: 55, sp: 34 },
        weightkg: 35,
        abilities: { 0: 'Pickup' },
        nfe: true
    },
    Hemogoblin: {
        types: ['Fairy', 'Fire'],
        bs: { hp: 90, at: 99, df: 89, sa: 99, sd: 97, sp: 55 },
        weightkg: 85,
        abilities: { 0: 'Pixilate' }
    },
    Houndstone: {
        types: ['Ghost'],
        bs: { hp: 72, at: 101, df: 100, sa: 50, sd: 97, sp: 68 },
        weightkg: 15,
        abilities: { 0: 'Sand Rush' }
    },
    'Iron Bundle': {
        types: ['Ice', 'Water'],
        bs: { hp: 56, at: 80, df: 114, sa: 124, sd: 60, sp: 136 },
        weightkg: 11,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Hands': {
        types: ['Fighting', 'Electric'],
        bs: { hp: 154, at: 140, df: 108, sa: 50, sd: 68, sp: 50 },
        weightkg: 380.7,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Jugulis': {
        types: ['Dark', 'Flying'],
        bs: { hp: 94, at: 80, df: 86, sa: 122, sd: 80, sp: 108 },
        weightkg: 111,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Leaves': {
        types: ['Grass', 'Psychic'],
        bs: { hp: 90, at: 130, df: 88, sa: 70, sd: 108, sp: 104 },
        weightkg: 125,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Moth': {
        types: ['Fire', 'Poison'],
        bs: { hp: 80, at: 70, df: 60, sa: 140, sd: 110, sp: 110 },
        weightkg: 36,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Thorns': {
        types: ['Rock', 'Electric'],
        bs: { hp: 100, at: 134, df: 110, sa: 70, sd: 84, sp: 72 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Treads': {
        types: ['Ground', 'Steel'],
        bs: { hp: 90, at: 112, df: 120, sa: 72, sd: 70, sp: 106 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    'Iron Valiant': {
        types: ['Fairy', 'Fighting'],
        bs: { hp: 74, at: 130, df: 90, sa: 120, sd: 60, sp: 116 },
        weightkg: 35,
        gender: 'N',
        abilities: { 0: 'Quark Drive' }
    },
    Kilowattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 70, at: 70, df: 60, sa: 105, sd: 60, sp: 125 },
        weightkg: 38.6,
        abilities: { 0: 'Wind Power' }
    },
    Kingambit: {
        types: ['Dark', 'Steel'],
        bs: { hp: 100, at: 135, df: 120, sa: 60, sd: 85, sp: 50 },
        weightkg: 120,
        abilities: { 0: 'Defiant' }
    },
    Klawf: {
        types: ['Rock'],
        bs: { hp: 70, at: 100, df: 115, sa: 35, sd: 55, sp: 75 },
        weightkg: 79,
        abilities: { 0: 'Anger Shell' }
    },
    Koraidon: {
        types: ['Fighting', 'Dragon'],
        bs: { hp: 100, at: 135, df: 115, sa: 85, sd: 100, sp: 135 },
        weightkg: 303,
        gender: 'N',
        abilities: { 0: 'Orichalcum Pulse' }
    },
    Lechonk: {
        types: ['Normal'],
        bs: { hp: 54, at: 45, df: 40, sa: 35, sd: 45, sp: 35 },
        weightkg: 10.2,
        abilities: { 0: 'Aroma Veil' },
        nfe: true
    },
    Lokix: {
        types: ['Bug', 'Dark'],
        bs: { hp: 71, at: 102, df: 78, sa: 52, sd: 55, sp: 92 },
        weightkg: 17.5,
        abilities: { 0: 'Swarm' }
    },
    Mabosstiff: {
        types: ['Dark'],
        bs: { hp: 80, at: 120, df: 90, sa: 60, sd: 70, sp: 85 },
        weightkg: 61,
        abilities: { 0: 'Intimidate' }
    },
    Maschiff: {
        types: ['Dark'],
        bs: { hp: 60, at: 78, df: 60, sa: 40, sd: 51, sp: 51 },
        weightkg: 16,
        abilities: { 0: 'Intimidate' },
        nfe: true
    },
    Maushold: {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.3,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        otherFormes: ['Maushold-Four']
    },
    'Maushold-Four': {
        types: ['Normal'],
        bs: { hp: 74, at: 75, df: 70, sa: 65, sd: 75, sp: 111 },
        weightkg: 2.8,
        gender: 'N',
        abilities: { 0: 'Friend Guard' },
        baseSpecies: 'Maushold'
    },
    Meowscarada: {
        types: ['Grass', 'Dark'],
        bs: { hp: 76, at: 110, df: 70, sa: 81, sd: 70, sp: 123 },
        weightkg: 31.2,
        abilities: { 0: 'Overgrow' }
    },
    Miraidon: {
        types: ['Electric', 'Dragon'],
        bs: { hp: 100, at: 85, df: 100, sa: 135, sd: 115, sp: 135 },
        weightkg: 240,
        gender: 'N',
        abilities: { 0: 'Hadron Engine' }
    },
    Nacli: {
        types: ['Rock'],
        bs: { hp: 55, at: 55, df: 75, sa: 35, sd: 35, sp: 25 },
        weightkg: 16,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Naclstack: {
        types: ['Rock'],
        bs: { hp: 60, at: 60, df: 100, sa: 35, sd: 65, sp: 35 },
        weightkg: 105,
        abilities: { 0: 'Purifying Salt' },
        nfe: true
    },
    Nymble: {
        types: ['Bug'],
        bs: { hp: 33, at: 46, df: 40, sa: 21, sd: 25, sp: 45 },
        weightkg: 1,
        abilities: { 0: 'Swarm' },
        nfe: true
    },
    Oinkologne: {
        types: ['Normal'],
        bs: { hp: 110, at: 100, df: 75, sa: 59, sd: 80, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Lingering Aroma' },
        otherFormes: ['Oinkologne-F']
    },
    'Oinkologne-F': {
        types: ['Normal'],
        bs: { hp: 115, at: 90, df: 70, sa: 59, sd: 90, sp: 65 },
        weightkg: 120,
        abilities: { 0: 'Aroma Veil' },
        baseSpecies: 'Oinkologne'
    },
    Orthworm: {
        types: ['Steel'],
        bs: { hp: 70, at: 85, df: 145, sa: 60, sd: 55, sp: 65 },
        weightkg: 310,
        abilities: { 0: 'Earth Eater' }
    },
    Palafin: {
        types: ['Water'],
        bs: { hp: 100, at: 70, df: 72, sa: 53, sd: 62, sp: 100 },
        weightkg: 60.2,
        abilities: { 0: 'Zero to Hero' },
        otherFormes: ['Palafin-Hero']
    },
    'Palafin-Hero': {
        types: ['Water'],
        bs: { hp: 100, at: 160, df: 97, sa: 106, sd: 87, sp: 100 },
        weightkg: 97.4,
        abilities: { 0: 'Zero to Hero' },
        baseSpecies: 'Palafin'
    },
    Pawmi: {
        types: ['Electric'],
        bs: { hp: 45, at: 50, df: 20, sa: 40, sd: 25, sp: 60 },
        weightkg: 2.5,
        abilities: { 0: 'Static' },
        nfe: true
    },
    Pawmo: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 60, at: 75, df: 40, sa: 50, sd: 40, sp: 85 },
        weightkg: 6.5,
        abilities: { 0: 'Volt Absorb' },
        nfe: true
    },
    Pawmot: {
        types: ['Electric', 'Fighting'],
        bs: { hp: 70, at: 115, df: 70, sa: 70, sd: 60, sp: 105 },
        weightkg: 41,
        abilities: { 0: 'Volt Absorb' }
    },
    Quaquaval: {
        types: ['Water', 'Fighting'],
        bs: { hp: 85, at: 120, df: 80, sa: 85, sd: 75, sp: 85 },
        weightkg: 61.9,
        abilities: { 0: 'Torrent' }
    },
    Quaxly: {
        types: ['Water'],
        bs: { hp: 55, at: 65, df: 45, sa: 50, sd: 45, sp: 50 },
        weightkg: 6.1,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Quaxwell: {
        types: ['Water'],
        bs: { hp: 70, at: 85, df: 65, sa: 65, sd: 60, sp: 65 },
        weightkg: 21.5,
        abilities: { 0: 'Torrent' },
        nfe: true
    },
    Rabsca: {
        types: ['Bug', 'Psychic'],
        bs: { hp: 75, at: 50, df: 85, sa: 115, sd: 100, sp: 45 },
        weightkg: 3.5,
        abilities: { 0: 'Synchronize' }
    },
    Rellor: {
        types: ['Bug'],
        bs: { hp: 41, at: 50, df: 60, sa: 31, sd: 58, sp: 30 },
        weightkg: 1,
        abilities: { 0: 'Compound Eyes' },
        nfe: true
    },
    Revavroom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 80, at: 119, df: 90, sa: 54, sd: 67, sp: 90 },
        weightkg: 120,
        abilities: { 0: 'Overcoat' }
    },
    'Roaring Moon': {
        types: ['Dragon', 'Dark'],
        bs: { hp: 105, at: 139, df: 71, sa: 55, sd: 101, sp: 119 },
        weightkg: 380,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    'Sandy Shocks': {
        types: ['Electric', 'Ground'],
        bs: { hp: 85, at: 81, df: 97, sa: 121, sd: 85, sp: 101 },
        weightkg: 60,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Scovillain: {
        types: ['Grass', 'Fire'],
        bs: { hp: 65, at: 108, df: 65, sa: 108, sd: 65, sp: 75 },
        weightkg: 15,
        abilities: { 0: 'Chlorophyll' }
    },
    'Scream Tail': {
        types: ['Fairy', 'Psychic'],
        bs: { hp: 115, at: 65, df: 99, sa: 65, sd: 115, sp: 111 },
        weightkg: 8,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Shroodle: {
        types: ['Poison', 'Normal'],
        bs: { hp: 40, at: 65, df: 35, sa: 40, sd: 35, sp: 75 },
        weightkg: 0.7,
        abilities: { 0: 'Unburden' },
        nfe: true
    },
    Skeledirge: {
        types: ['Fire', 'Ghost'],
        bs: { hp: 104, at: 75, df: 100, sa: 110, sd: 75, sp: 66 },
        weightkg: 326.5,
        abilities: { 0: 'Blaze' }
    },
    'Slither Wing': {
        types: ['Bug', 'Fighting'],
        bs: { hp: 85, at: 135, df: 79, sa: 85, sd: 105, sp: 81 },
        weightkg: 92,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Smoliv: {
        types: ['Grass', 'Normal'],
        bs: { hp: 41, at: 35, df: 45, sa: 58, sd: 51, sp: 30 },
        weightkg: 6.5,
        abilities: { 0: 'Early Bird' },
        nfe: true
    },
    Spidops: {
        types: ['Bug'],
        bs: { hp: 60, at: 79, df: 92, sa: 52, sd: 86, sp: 35 },
        weightkg: 16.5,
        abilities: { 0: 'Insomnia' }
    },
    Sprigatito: {
        types: ['Grass'],
        bs: { hp: 40, at: 61, df: 54, sa: 45, sd: 45, sp: 65 },
        weightkg: 4.1,
        abilities: { 0: 'Overgrow' },
        nfe: true
    },
    Squawkabilly: {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        otherFormes: ['Squawkabilly-Blue', 'Squawkabilly-White', 'Squawkabilly-Yellow']
    },
    'Squawkabilly-Blue': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-White': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    'Squawkabilly-Yellow': {
        types: ['Normal', 'Flying'],
        bs: { hp: 82, at: 96, df: 51, sa: 45, sd: 51, sp: 92 },
        weightkg: 2.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Squawkabilly'
    },
    Tadbulb: {
        types: ['Electric'],
        bs: { hp: 61, at: 31, df: 41, sa: 59, sd: 35, sp: 45 },
        weightkg: 0.4,
        abilities: { 0: 'Own Tempo' },
        nfe: true
    },
    Tandemaus: {
        types: ['Normal'],
        bs: { hp: 50, at: 50, df: 45, sa: 40, sd: 45, sp: 75 },
        weightkg: 1.8,
        gender: 'N',
        abilities: { 0: 'Run Away' },
        nfe: true
    },
    Tarountula: {
        types: ['Bug'],
        bs: { hp: 35, at: 41, df: 45, sa: 29, sd: 40, sp: 20 },
        weightkg: 4,
        abilities: { 0: 'Insomnia' },
        nfe: true
    },
    Tatsugiri: {
        types: ['Dragon', 'Water'],
        bs: { hp: 68, at: 50, df: 60, sa: 120, sd: 95, sp: 82 },
        weightkg: 8,
        abilities: { 0: 'Commander' }
    },
    'Tauros-Paldea-Aqua': {
        types: ['Fighting', 'Water'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Blaze': {
        types: ['Fighting', 'Fire'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Tauros-Paldea-Combat': {
        types: ['Fighting'],
        bs: { hp: 75, at: 110, df: 105, sa: 30, sd: 70, sp: 100 },
        weightkg: 88.4,
        abilities: { 0: 'Intimidate' },
        baseSpecies: 'Tauros'
    },
    'Ting-Lu': {
        types: ['Dark', 'Ground'],
        bs: { hp: 155, at: 110, df: 125, sa: 55, sd: 80, sp: 45 },
        weightkg: 699.7,
        gender: 'N',
        abilities: { 0: 'Vessel of Ruin' }
    },
    Tinkatink: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 64, sp: 58 },
        weightkg: 8.9,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Tinkaton: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 85, at: 75, df: 77, sa: 70, sd: 105, sp: 94 },
        weightkg: 112.8,
        abilities: { 0: 'Mold Breaker' }
    },
    Tinkatuff: {
        types: ['Fairy', 'Steel'],
        bs: { hp: 65, at: 55, df: 55, sa: 45, sd: 82, sp: 78 },
        weightkg: 59.1,
        abilities: { 0: 'Mold Breaker' },
        nfe: true
    },
    Toedscool: {
        types: ['Ground', 'Grass'],
        bs: { hp: 40, at: 40, df: 35, sa: 50, sd: 100, sp: 70 },
        weightkg: 33,
        abilities: { 0: 'Mycelium Might' },
        nfe: true
    },
    Toedscruel: {
        types: ['Ground', 'Grass'],
        bs: { hp: 80, at: 70, df: 65, sa: 80, sd: 120, sp: 100 },
        weightkg: 58,
        abilities: { 0: 'Mycelium Might' }
    },
    Varoom: {
        types: ['Steel', 'Poison'],
        bs: { hp: 45, at: 70, df: 63, sa: 30, sd: 45, sp: 47 },
        weightkg: 35,
        abilities: { 0: 'Overcoat' },
        nfe: true
    },
    Veluza: {
        types: ['Water', 'Psychic'],
        bs: { hp: 90, at: 102, df: 73, sa: 78, sd: 65, sp: 70 },
        weightkg: 90,
        abilities: { 0: 'Mold Breaker' }
    },
    'Walking Wake': {
        types: ['Water', 'Dragon'],
        bs: { hp: 99, at: 83, df: 91, sa: 125, sd: 83, sp: 109 },
        weightkg: 280,
        gender: 'N',
        abilities: { 0: 'Protosynthesis' }
    },
    Wattrel: {
        types: ['Electric', 'Flying'],
        bs: { hp: 40, at: 40, df: 35, sa: 55, sd: 40, sp: 70 },
        weightkg: 3.6,
        abilities: { 0: 'Wind Power' },
        nfe: true
    },
    Wiglett: {
        types: ['Water'],
        bs: { hp: 10, at: 55, df: 25, sa: 35, sd: 25, sp: 95 },
        weightkg: 1.8,
        abilities: { 0: 'Gooey' },
        nfe: true
    },
    'Wo-Chien': {
        types: ['Dark', 'Grass'],
        bs: { hp: 85, at: 85, df: 100, sa: 95, sd: 135, sp: 70 },
        weightkg: 74.2,
        gender: 'N',
        abilities: { 0: 'Tablets of Ruin' }
    },
    'Wooper-Paldea': {
        types: ['Poison', 'Ground'],
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        weightkg: 8.5,
        abilities: { 0: 'Poison Point' },
        baseSpecies: 'Wooper',
        nfe: true
    },
    Wugtrio: {
        types: ['Water'],
        bs: { hp: 35, at: 100, df: 50, sa: 50, sd: 70, sp: 120 },
        weightkg: 5.4,
        abilities: { 0: 'Gooey' }
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH, PLA_PATCH);
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = SPECIES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        var baseStats = {};
        baseStats.hp = data.bs.hp;
        baseStats.atk = data.bs.at;
        baseStats.def = data.bs.df;
        baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
        baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
        baseStats.spe = data.bs.sp;
        this.baseStats = baseStats;
        if (data.otherFormes) {
            this.otherFormes = data.otherFormes;
            if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
                this.otherFormes = this.otherFormes.filter(function (f) { return !f.endsWith('-Gmax'); });
                if (!this.otherFormes.length)
                    this.otherFormes = undefined;
                if (this.otherFormes)
                    this.otherFormes = __spreadArray([], __read(new Set(this.otherFormes)), false);
            }
        }
        (0, util_1.assignWithout)(this, data, Specie.EXCLUDE);
    }
    Specie.EXCLUDE = new Set(['bs', 'otherFormes']);
    return Specie;
}());
var SPECIES_BY_ID = [];
var gen = 0;
try {
    for (var SPECIES_1 = __values(exports.SPECIES), SPECIES_1_1 = SPECIES_1.next(); !SPECIES_1_1.done; SPECIES_1_1 = SPECIES_1.next()) {
        var species = SPECIES_1_1.value;
        var map = {};
        for (var specie in species) {
            if (gen >= 2 && species[specie].bs.sl)
                delete species[specie].bs.sl;
            var m = new Specie(specie, species[specie]);
            map[m.id] = m;
        }
        SPECIES_BY_ID.push(map);
        gen++;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (SPECIES_1_1 && !SPECIES_1_1.done && (_a = SPECIES_1["return"])) _a.call(SPECIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=species.js.map