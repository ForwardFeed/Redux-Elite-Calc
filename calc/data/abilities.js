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
var e_1, _a, e_2, _b;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = [];
var GSC = [];
var ADV = [
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
var DPP = ADV.concat([
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
var BW = DPP.concat([
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
var XY = BW.concat([
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
var SM = XY.concat();
var SS = ["-------", "Stench", "Drizzle", "Speed Boost", "Battle Armor", "Sturdy", "Damp", "Limber", "Sand Veil", "Static", "Volt Absorb", "Water Absorb", "Oblivious", "Cloud Nine", "Compound Eyes", "Insomnia", "Color Change", "Immunity", "Flash Fire", "Shield Dust", "Own Tempo", "Suction Cups", "Intimidate", "Shadow Tag", "Rough Skin", "Wonder Guard", "Levitate", "Effect Spore", "Synchronize", "Clear Body", "Natural Cure", "Lightning Rod", "Serene Grace", "Swift Swim", "Chlorophyll", "Illuminate", "Trace", "Huge Power", "Poison Point", "Inner Focus", "Magma Armor", "Water Veil", "Magnet Pull", "Soundproof", "Rain Dish", "Sand Stream", "Pressure", "Thick Fat", "Early Bird", "Flame Body", "Run Away", "Keen Eye", "Hyper Cutter", "Pickup", "Truant", "Hustle", "Cute Charm", "Plus", "Minus", "Forecast", "Sticky Hold", "Shed Skin", "Guts", "Marvel Scale", "Liquid Ooze", "Overgrow", "Blaze", "Torrent", "Swarm", "Rock Head", "Drought", "Arena Trap", "Vital Spirit", "White Smoke", "Pure Power", "Shell Armor", "Air Lock", "Tangled Feet", "Motor Drive", "Rivalry", "Steadfast", "Snow Cloak", "Gluttony", "Anger Point", "Unburden", "Heatproof", "Simple", "Dry Skin", "Download", "Iron Fist", "Poison Heal", "Adaptability", "Skill Link", "Hydration", "Solar Power", "Quick Feet", "Normalize", "Sniper", "Magic Guard", "No Guard", "Stall", "Technician", "Leaf Guard", "Klutz", "Mold Breaker", "Super Luck", "Aftermath", "Anticipation", "Forewarn", "Unaware", "Tinted Lens", "Filter", "Slow Start", "Scrappy", "Storm Drain", "Ice Body", "Solid Rock", "Snow Warning", "Honey Gather", "Frisk", "Reckless", "Multitype", "Flower Gift", "Bad Dreams", "Pickpocket", "Sheer Force", "Contrary", "Unnerve", "Defiant", "Defeatist", "Cursed Body", "Healer", "Friend Guard", "Weak Armor", "Heavy Metal", "Light Metal", "Multiscale", "Toxic Boost", "Flare Boost", "Harvest", "Telepathy", "Moody", "Overcoat", "Poison Touch", "Regenerator", "Big Pecks", "Sand Rush", "Wonder Skin", "Analytic", "Illusion", "Imposter", "Infiltrator", "Mummy", "Moxie", "Justified", "Rattled", "Magic Bounce", "Sap Sipper", "Prankster", "Sand Force", "Iron Barbs", "Zen Mode", "Victory Star", "Turboblaze", "Teravolt", "Aroma Veil", "Flower Veil", "Cheek Pouch", "Protean", "Fur Coat", "Magician", "Bulletproof", "Competitive", "Strong Jaw", "Refrigerate", "Sweet Veil", "Stance Change", "Gale Wings", "Mega Launcher", "Grass Pelt", "Symbiosis", "Tough Claws", "Pixilate", "Gooey", "Aerilate", "Parental Bond", "Dark Aura", "Fairy Aura", "Aura Break", "Primordial Sea", "Desolate Land", "Delta Stream", "Stamina", "Wimp Out", "Emergency Exit", "Water Compaction", "Merciless", "Shields Down", "Stakeout", "Water Bubble", "Steelworker", "Berserk", "Slush Rush", "Long Reach", "Liquid Voice", "Triage", "Galvanize", "Surge Surfer", "Schooling", "Disguise", "Battle Bond", "Power Construct", "Corrosion", "Comatose", "Queenly Majesty", "Innards Out", "Dancer", "Battery", "Fluffy", "Dazzling", "Soul-Heart", "Tangling Hair", "Receiver", "Power of Alchemy", "Beast Boost", "RKS System", "Electro Surge", "Psychic Surge", "Misty Surge", "Grassy Surge", "Full Metal Body", "Shadow Shield", "Prism Armor", "Neuroforce", "Intrepid Sword", "Dauntless Shield", "Libero", "Ball Fetch", "Cotton Down", "Propeller Tail", "Mirror Armor", "Gulp Missile", "Stalwart", "Steam Engine", "Punk Rock", "Sand Spit", "Ice Scales", "Ripen", "Ice Face", "Power Spot", "Mimicry", "ScreenCleanr", "SteelySpirit", "Perish Body", "WandrngSprit", "Gorilla Tactics", "Neutralizing Gas", "Pastel Veil", "HungerSwitch", "Quick Draw", "Unseen Fist", "CuriusMedicn", "Transistor", "Dragon's Maw", "ChillngNeigh", "Grim Neigh", "As One", "As One", "Chloroplast", "Whiteout", "Pyromancy", "Keen Edge", "Prism Scales", "Power Fists", "Sand Song", "Rampage", "Vengeance", "Blitz Boxer", "Antarctic Bird", "Immolate", "Crystallize", "Electrocytes", "Aerodynamics", "Christmas Spirit", "Exploit Weakness", "Ground Shock", "Ancient Idol", "Mystic Power", "Perfectionist", "Growing Tooth", "Inflatable", "Aurora Borealis", "Avenger", "Let's Roll", "Aquatic", "Loud Bang", "Lead Coat", "Coil Up", "Amphibious", "Grounded", "Earthbound", "Fighting Spirit", "Feline Prowess", "Fossilized", "Magical Dust", "Dreamcatcher", "Nocturnal", "Self Sufficient", "Tectonize", "Ice Age", "Half Drake", "Liquified", "Dragonfly", "Dragonslayer", "Mountaineer", "Hydrate", "Metallic", "Permafrost", "Primal Armor", "Raging Boxer", "Air Blower", "Juggernaut", "Short Circuit", "Majestic Bird", "Phantom", "Intoxicate", "Impenetrable", "Hypnotist", "Overwhelm", "Scare", "Majestic Moth", "Soul Eater", "Soul Linker", "Sweet Dreams", "Bad Luck", "Haunted Spirit", "Electric Burst", "Raw Wood", "Solenoglyphs", "Spider Lair", "Fatal Precision", "Fort Knox", "Seaweed", "Psychic Mind", "Poison Absorb", "Scavenger", "Twist. Dimension", "Multi Headed", "North Wind", "Overcharge", "Violent Rush", "Flaming Soul", "Sage Power", "Bone Zone", "Weather Control", "Speed Force", "Sea Guardian", "Molten Down", "Hyper Aggressive", "Flock", "Field Explorer", "Striker", "Frozen Soul", "Predator", "Looter", "Lunar Eclipse", "Solar Flare", "Power Core", "Sighting System", "Bad Company", "Opportunist", "Giant Wings", "Momentum", "Grip Pincer", "Big Leaves", "Precise Fist", "Deadeye", "Artillery", "Amplifier", "Ice Dew", "Sun Worship", "Pollinate", "Volcano Rage", "Cold Rebound", "Low Blow", "Nosferatu", "Spectral Shroud", "Discipline", "Thundercall", "Marine Apex", "Mighty Horn", "Hardened Sheath", "Arctic Fur", "Lethargy", "Iron Barrage", "Steel Barrel", "Pyro Shells", "Fungal Infection", "Parry", "Scrapyard", "Loose Quills", "Toxic Debris", "Roundhouse", "Mineralize", "Loose Rocks", "Spinning Top", "Retribution Blow", "Fearmonger", "King's Wrath", "Queen's Mourning", "Toxic Spill", "Desert Cloak", "Draconize", "Pretty Princess", "Self Repair", "Atomic Burst", "Hellblaze", "Riptide", "Forest Rage", "Primal Maw", "Sweeping Edge", "Gifted Mind", "Hydro Circuit", "Equinox", "Absorbant", "Clueless", "Cheating Death", "Cheap Tactics", "Coward", "Spectralize", "Volt Rush", "Dune Terror", "Infernal Rage", "Dual Wield", "Elemental Charge", "Ambush", "Atlas", "Radiance", "Jaws of Carnage", "Angel's Wrath", "Prismatic Fur", "Shocking Jaws", "Fae Hunter"];
var SV = SS;
exports.ABILITIES = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Abilities = (function () {
    function Abilities(gen) {
        this.gen = gen;
    }
    Abilities.prototype.get = function (id) {
        return ABILITIES_BY_ID[this.gen][id];
    };
    Abilities.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = ABILITIES_BY_ID[this.gen];
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
    return Abilities;
}());
exports.Abilities = Abilities;
var Ability = (function () {
    function Ability(name) {
        this.kind = 'Ability';
        this.id = (0, util_1.toID)(name);
        this.name = name;
    }
    return Ability;
}());
var ABILITIES_BY_ID = [];
try {
    for (var ABILITIES_1 = __values(exports.ABILITIES), ABILITIES_1_1 = ABILITIES_1.next(); !ABILITIES_1_1.done; ABILITIES_1_1 = ABILITIES_1.next()) {
        var abilities = ABILITIES_1_1.value;
        var map = {};
        try {
            for (var abilities_1 = (e_2 = void 0, __values(abilities)), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                var ability = abilities_1_1.value;
                var a = new Ability(ability);
                map[a.id] = a;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (abilities_1_1 && !abilities_1_1.done && (_b = abilities_1["return"])) _b.call(abilities_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        ABILITIES_BY_ID.push(map);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ABILITIES_1_1 && !ABILITIES_1_1.done && (_a = ABILITIES_1["return"])) _a.call(ABILITIES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=abilities.js.map