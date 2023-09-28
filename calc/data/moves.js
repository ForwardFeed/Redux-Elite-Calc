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
var RBY = {
    '(No Move)': { bp: 0, category: 'Status', type: 'Normal' },
    Absorb: { bp: 20, type: 'Grass', drain: [1, 2] },
    Acid: { bp: 40, type: 'Poison' },
    Amnesia: { bp: 0, category: 'Status', type: 'Psychic' },
    'Aurora Beam': { bp: 65, type: 'Ice' },
    Barrage: { bp: 15, type: 'Normal', multihit: [2, 5] },
    Bide: { bp: 0, type: '???' },
    Bind: { bp: 15, type: 'Normal' },
    Bite: { bp: 60, type: 'Normal' },
    Blizzard: { bp: 120, type: 'Ice' },
    Bonemerang: { bp: 50, type: 'Ground', multihit: 2 },
    Bubble: { bp: 20, type: 'Water' },
    'Bubble Beam': { bp: 65, type: 'Water' },
    Clamp: { bp: 35, type: 'Water' },
    'Comet Punch': { bp: 18, type: 'Normal', multihit: [2, 5] },
    Constrict: { bp: 10, type: 'Normal' },
    Conversion: { bp: 0, category: 'Status', type: 'Normal' },
    Counter: { bp: 1, type: 'Fighting' },
    Crabhammer: { bp: 90, type: 'Water' },
    'Defense Curl': { bp: 0, category: 'Status', type: 'Normal' },
    Dig: { bp: 100, type: 'Ground' },
    Disable: { bp: 0, category: 'Status', type: 'Normal' },
    'Dizzy Punch': { bp: 70, type: 'Normal' },
    'Double-Edge': { bp: 100, type: 'Normal', recoil: [25, 100] },
    'Double Kick': { bp: 30, type: 'Fighting', multihit: 2 },
    'Double Slap': { bp: 15, type: 'Normal', multihit: [2, 5] },
    'Dragon Rage': { bp: 1, type: 'Dragon' },
    'Dream Eater': { bp: 100, type: 'Psychic', drain: [1, 2] },
    Earthquake: { bp: 100, type: 'Ground' },
    Explosion: { bp: 170, type: 'Normal' },
    'Fire Blast': { bp: 120, type: 'Fire' },
    'Fire Spin': { bp: 15, type: 'Fire' },
    Fissure: { bp: 0, type: 'Ground' },
    Fly: { bp: 70, type: 'Flying' },
    'Focus Energy': { bp: 0, category: 'Status', type: 'Normal' },
    'Fury Attack': { bp: 15, type: 'Normal', multihit: [2, 5] },
    'Fury Swipes': { bp: 18, type: 'Normal', multihit: [2, 5] },
    Glare: { bp: 0, category: 'Status', type: 'Normal' },
    Growth: { bp: 0, category: 'Status', type: 'Normal' },
    Guillotine: { bp: 0, type: 'Normal' },
    Gust: { bp: 40, type: 'Normal' },
    Haze: { bp: 0, category: 'Status', type: 'Ice' },
    'High Jump Kick': { bp: 85, type: 'Fighting', hasCrashDamage: true },
    'Horn Drill': { bp: 0, type: 'Normal' },
    'Hyper Beam': { bp: 150, type: 'Normal' },
    'Jump Kick': { bp: 70, type: 'Fighting', hasCrashDamage: true },
    'Karate Chop': { bp: 50, type: 'Normal' },
    'Leech Seed': { bp: 0, category: 'Status', type: 'Grass' },
    'Light Screen': { bp: 0, category: 'Status', type: 'Psychic' },
    Metronome: { bp: 0, category: 'Status', type: 'Normal' },
    Mimic: { bp: 0, category: 'Status', type: 'Normal' },
    Minimize: { bp: 0, category: 'Status', type: 'Normal' },
    'Mirror Move': { bp: 0, category: 'Status', type: 'Flying' },
    Mist: { bp: 0, category: 'Status', type: 'Ice' },
    'Night Shade': { bp: 1, type: 'Ghost' },
    'Petal Dance': { bp: 70, type: 'Grass' },
    'Pin Missile': { bp: 14, type: 'Bug', multihit: [2, 5] },
    'Poison Sting': { bp: 15, type: 'Poison' },
    Psychic: { bp: 90, type: 'Psychic' },
    Psywave: { bp: 1, type: 'Psychic' },
    Rage: { bp: 20, type: 'Normal' },
    'Razor Leaf': { bp: 55, type: 'Grass' },
    'Razor Wind': { bp: 80, type: 'Normal' },
    Recover: { bp: 0, category: 'Status', type: 'Normal' },
    Reflect: { bp: 0, category: 'Status', type: 'Psychic' },
    Rest: { bp: 0, category: 'Status', type: 'Psychic' },
    Roar: { bp: 0, category: 'Status', type: 'Normal' },
    'Rock Slide': { bp: 75, type: 'Rock' },
    'Rock Throw': { bp: 50, type: 'Rock' },
    'Sand Attack': { bp: 0, category: 'Status', type: 'Normal' },
    'Seismic Toss': { bp: 1, type: 'Fighting' },
    'Self-Destruct': { bp: 130, type: 'Normal' },
    'Skull Bash': { bp: 100, type: 'Normal' },
    Slash: { bp: 70, type: 'Normal' },
    Sludge: { bp: 65, type: 'Poison' },
    'Soft-Boiled': { bp: 0, category: 'Status', type: 'Normal' },
    'Solar Beam': { bp: 120, type: 'Grass' },
    'Sonic Boom': { bp: 1, type: 'Normal' },
    'Spike Cannon': { bp: 20, type: 'Normal', multihit: [2, 5] },
    Stomp: { bp: 65, type: 'Normal' },
    Struggle: { bp: 50, type: 'Normal', recoil: [1, 2] },
    'Stun Spore': { bp: 0, category: 'Status', type: 'Grass' },
    Submission: { bp: 80, type: 'Fighting', recoil: [1, 4] },
    Substitute: { bp: 0, category: 'Status', type: 'Normal' },
    'Super Fang': { bp: 1, type: 'Normal' },
    Swift: { bp: 60, type: 'Normal' },
    'Take Down': { bp: 90, type: 'Normal', recoil: [1, 4] },
    Thrash: { bp: 90, type: 'Normal' },
    Thunder: { bp: 120, type: 'Electric' },
    'Thunder Wave': { bp: 0, category: 'Status', type: 'Electric' },
    Transform: { bp: 0, category: 'Status', type: 'Normal' },
    'Tri Attack': { bp: 80, type: 'Normal' },
    Twineedle: { bp: 25, type: 'Bug', multihit: 2 },
    Whirlwind: { bp: 0, category: 'Status', type: 'Normal' },
    'Wing Attack': { bp: 35, type: 'Flying' },
    Wrap: { bp: 15, type: 'Normal' },
    Growl: { bp: 0, category: 'Status', type: 'Normal' },
    Leer: { bp: 0, category: 'Status', type: 'Normal' },
    'Low Kick': { bp: 50, type: 'Fighting' },
    'Poison Gas': { bp: 0, category: 'Status', type: 'Poison' },
    'Poison Powder': { bp: 0, category: 'Status', type: 'Poison' },
    'Sky Attack': { bp: 140, type: 'Flying' },
    'String Shot': { bp: 0, category: 'Status', type: 'Bug' },
    Surf: { bp: 95, type: 'Water' },
    'Tail Whip': { bp: 0, category: 'Status', type: 'Normal' },
    Toxic: { bp: 0, category: 'Status', type: 'Poison' },
    Flash: { bp: 0, category: 'Status', type: 'Normal' },
    Hypnosis: { bp: 0, category: 'Status', type: 'Psychic' },
    'Leech Life': { bp: 20, type: 'Bug', drain: [1, 2] },
    'Mega Drain': { bp: 40, type: 'Grass', drain: [1, 2] },
    'Vine Whip': { bp: 35, type: 'Grass' },
    Waterfall: { bp: 80, type: 'Water' },
    Tackle: { bp: 35, type: 'Normal' },
    'Acid Armor': { bp: 0, category: 'Status', type: 'Poison' },
    Barrier: { bp: 0, category: 'Status', type: 'Psychic' },
    'Body Slam': { bp: 85, type: 'Normal' },
    Flamethrower: { bp: 95, type: 'Fire' },
    'Hydro Pump': { bp: 120, type: 'Water' },
    'Ice Beam': { bp: 95, type: 'Ice' },
    Lick: { bp: 20, type: 'Ghost' },
    Screech: { bp: 0, category: 'Status', type: 'Normal' },
    Sing: { bp: 0, category: 'Status', type: 'Normal' },
    'Sleep Powder': { bp: 0, category: 'Status', type: 'Grass' },
    Smog: { bp: 20, type: 'Poison' },
    Spore: { bp: 0, category: 'Status', type: 'Grass' },
    Supersonic: { bp: 0, category: 'Status', type: 'Normal' },
    'Swords Dance': { bp: 0, category: 'Status', type: 'Normal' },
    Thunderbolt: { bp: 95, type: 'Electric' },
    'Bone Club': { bp: 65, type: 'Ground' },
    'Egg Bomb': { bp: 100, type: 'Normal' },
    'Hyper Fang': { bp: 80, type: 'Normal' },
    Kinesis: { bp: 0, category: 'Status', type: 'Psychic' },
    'Lovely Kiss': { bp: 0, category: 'Status', type: 'Normal' },
    Meditate: { bp: 0, category: 'Status', type: 'Psychic' },
    'Rolling Kick': { bp: 60, type: 'Fighting' },
    Sharpen: { bp: 0, category: 'Status', type: 'Normal' },
    Teleport: { bp: 0, category: 'Status', type: 'Psychic' },
    Agility: { bp: 0, category: 'Status', type: 'Psychic' },
    'Confuse Ray': { bp: 0, category: 'Status', type: 'Ghost' },
    Confusion: { bp: 50, type: 'Psychic' },
    Cut: { bp: 50, type: 'Normal' },
    'Double Team': { bp: 0, category: 'Status', type: 'Normal' },
    'Drill Peck': { bp: 80, type: 'Flying' },
    Ember: { bp: 40, type: 'Fire' },
    'Fire Punch': { bp: 75, type: 'Fire' },
    Harden: { bp: 0, category: 'Status', type: 'Normal' },
    Headbutt: { bp: 70, type: 'Normal' },
    'Horn Attack': { bp: 65, type: 'Normal' },
    'Ice Punch': { bp: 75, type: 'Ice' },
    'Mega Kick': { bp: 120, type: 'Normal' },
    'Mega Punch': { bp: 80, type: 'Normal' },
    'Paleo Wave': { bp: 85, type: 'Rock' },
    'Pay Day': { bp: 40, type: 'Normal' },
    Peck: { bp: 35, type: 'Flying' },
    Pound: { bp: 40, type: 'Normal' },
    Psybeam: { bp: 65, type: 'Psychic' },
    'Quick Attack': { bp: 40, type: 'Normal', priority: 1 },
    Scratch: { bp: 40, type: 'Normal' },
    'Shadow Strike': { bp: 80, type: 'Ghost' },
    Slam: { bp: 80, type: 'Normal' },
    Smokescreen: { bp: 0, category: 'Status', type: 'Normal' },
    Splash: { bp: 0, category: 'Status', type: 'Normal' },
    Strength: { bp: 80, type: 'Normal' },
    'Thunder Punch': { bp: 75, type: 'Electric' },
    'Thunder Shock': { bp: 40, type: 'Electric' },
    'Vise Grip': { bp: 55, type: 'Normal' },
    'Water Gun': { bp: 40, type: 'Water' },
    Withdraw: { bp: 0, category: 'Status', type: 'Water' }
};
var GSC_PATCH = {
    Bide: { type: 'Normal' },
    Counter: { bp: 0 },
    Dig: { bp: 60 },
    'Double-Edge': { bp: 120 },
    Explosion: { bp: 250 },
    Gust: { type: 'Flying' },
    'Karate Chop': { type: 'Fighting' },
    Psywave: { bp: 0 },
    'Self-Destruct': { bp: 200 },
    Struggle: { recoil: [1, 4] },
    'Dragon Rage': { bp: 0 },
    Bite: { type: 'Dark' },
    'Night Shade': { bp: 0 },
    'Sand Attack': { type: 'Ground' },
    'Seismic Toss': { bp: 0 },
    'Sonic Boom': { bp: 0 },
    'Super Fang': { bp: 0 },
    'Wing Attack': { bp: 60 },
    Aeroblast: { bp: 100, type: 'Flying' },
    Attract: { bp: 0, category: 'Status', type: 'Normal' },
    'Beat Up': { bp: 10, type: 'Dark' },
    'Belly Drum': { bp: 0, category: 'Status', type: 'Normal' },
    'Conversion 2': { bp: 0, category: 'Status', type: 'Normal' },
    'Cross Chop': { bp: 100, type: 'Fighting' },
    Curse: { bp: 0, category: 'Status', type: '???' },
    'Destiny Bond': { bp: 0, category: 'Status', type: 'Ghost' },
    Detect: { bp: 0, category: 'Status', type: 'Fighting', priority: 2 },
    Encore: { bp: 0, category: 'Status', type: 'Normal' },
    Endure: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    Flail: { bp: 0, type: 'Normal' },
    Foresight: { bp: 0, category: 'Status', type: 'Normal' },
    'Future Sight': { bp: 80, type: 'Psychic' },
    'Heal Bell': { bp: 0, category: 'Status', type: 'Normal' },
    'Icy Wind': { bp: 55, type: 'Ice' },
    'Lock-On': { bp: 0, category: 'Status', type: 'Normal' },
    'Mind Reader': { bp: 0, category: 'Status', type: 'Normal' },
    'Mirror Coat': { bp: 0, type: 'Psychic' },
    Moonlight: { bp: 0, category: 'Status', type: 'Normal' },
    'Morning Sun': { bp: 0, category: 'Status', type: 'Normal' },
    Nightmare: { bp: 0, category: 'Status', type: 'Ghost' },
    Outrage: { bp: 90, type: 'Dragon' },
    'Powder Snow': { bp: 40, type: 'Ice' },
    Present: { bp: 0, type: 'Normal' },
    Protect: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    'Psych Up': { bp: 0, category: 'Status', type: 'Normal' },
    Pursuit: { bp: 40, type: 'Dark' },
    'Rain Dance': { bp: 0, category: 'Status', type: 'Water' },
    Reversal: { bp: 0, type: 'Fighting' },
    Safeguard: { bp: 0, category: 'Status', type: 'Normal' },
    Sandstorm: { bp: 0, category: 'Status', type: 'Rock' },
    Sketch: { bp: 0, category: 'Status', type: 'Normal' },
    'Sleep Talk': { bp: 0, category: 'Status', type: 'Normal' },
    Spikes: { bp: 0, category: 'Status', type: 'Ground' },
    Spite: { bp: 0, category: 'Status', type: 'Ghost' },
    'Sunny Day': { bp: 0, category: 'Status', type: 'Fire' },
    Swagger: { bp: 0, category: 'Status', type: 'Normal' },
    'Sweet Scent': { bp: 0, category: 'Status', type: 'Normal' },
    Synthesis: { bp: 0, category: 'Status', type: 'Grass' },
    Thief: { bp: 40, type: 'Dark' },
    'Triple Kick': { bp: 10, type: 'Fighting', multihit: [1, 3] },
    Twister: { bp: 40, type: 'Dragon' },
    'Ancient Power': { bp: 60, type: 'Rock' },
    'Bone Rush': { bp: 25, type: 'Ground', multihit: [2, 5] },
    Crunch: { bp: 80, type: 'Dark' },
    'Feint Attack': { bp: 60, type: 'Dark' },
    'Giga Drain': { bp: 60, type: 'Grass', drain: [1, 2] },
    'Hidden Power': { bp: 0, type: 'Normal' },
    'Mean Look': { bp: 0, category: 'Status', type: 'Normal' },
    'Rapid Spin': { bp: 20, type: 'Normal' },
    'Rock Smash': { bp: 20, type: 'Fighting' },
    'Spider Web': { bp: 0, category: 'Status', type: 'Bug' },
    Whirlpool: { bp: 15, type: 'Water' },
    'Zap Cannon': { bp: 100, type: 'Electric' },
    'Cotton Spore': { bp: 0, category: 'Status', type: 'Grass' },
    'Extreme Speed': { bp: 80, type: 'Normal', priority: 1 },
    'Fury Cutter': { bp: 10, type: 'Bug' },
    Magnitude: { bp: 0, type: 'Ground' },
    'Milk Drink': { bp: 0, category: 'Status', type: 'Normal' },
    'Scary Face': { bp: 0, category: 'Status', type: 'Normal' },
    Charm: { bp: 0, category: 'Status', type: 'Normal' },
    'Hidden Power Bug': { bp: 70, type: 'Bug' },
    'Hidden Power Dark': { bp: 70, type: 'Dark' },
    'Hidden Power Dragon': { bp: 70, type: 'Dragon' },
    'Hidden Power Electric': { bp: 70, type: 'Electric' },
    'Hidden Power Fighting': { bp: 70, type: 'Fighting' },
    'Hidden Power Fire': { bp: 70, type: 'Fire' },
    'Hidden Power Flying': { bp: 70, type: 'Flying' },
    'Hidden Power Ghost': { bp: 70, type: 'Ghost' },
    'Hidden Power Grass': { bp: 70, type: 'Grass' },
    'Hidden Power Ground': { bp: 70, type: 'Ground' },
    'Hidden Power Ice': { bp: 70, type: 'Ice' },
    'Hidden Power Poison': { bp: 70, type: 'Poison' },
    'Hidden Power Psychic': { bp: 70, type: 'Psychic' },
    'Hidden Power Rock': { bp: 70, type: 'Rock' },
    'Hidden Power Steel': { bp: 70, type: 'Steel' },
    'Hidden Power Water': { bp: 70, type: 'Water' },
    'Perish Song': { bp: 0, category: 'Status', type: 'Normal' },
    Snore: { bp: 40, type: 'Normal' },
    'Sweet Kiss': { bp: 0, category: 'Status', type: 'Normal' },
    Rollout: { bp: 30, type: 'Rock' },
    Frustration: { bp: 0, type: 'Normal' },
    Return: { bp: 0, type: 'Normal' },
    'Sacred Fire': { bp: 100, type: 'Fire' },
    'Baton Pass': { bp: 0, category: 'Status', type: 'Normal' },
    'Dragon Breath': { bp: 60, type: 'Dragon' },
    'Dynamic Punch': { bp: 100, type: 'Fighting' },
    'False Swipe': { bp: 40, type: 'Normal' },
    'Flame Wheel': { bp: 60, type: 'Fire' },
    'Iron Tail': { bp: 100, type: 'Steel' },
    'Mach Punch': { bp: 40, type: 'Fighting', priority: 1 },
    Megahorn: { bp: 120, type: 'Bug' },
    'Metal Claw': { bp: 50, type: 'Steel' },
    'Mud-Slap': { bp: 20, type: 'Ground' },
    Octazooka: { bp: 65, type: 'Water' },
    'Pain Split': { bp: 0, category: 'Status', type: 'Normal' },
    'Shadow Ball': { bp: 80, type: 'Ghost' },
    'Sludge Bomb': { bp: 90, type: 'Poison' },
    Spark: { bp: 65, type: 'Electric' },
    'Steel Wing': { bp: 70, type: 'Steel' },
    'Vital Throw': { bp: 70, type: 'Fighting' }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Acid: { target: 'allAdjacentFoes' },
    'Ancient Power': { makesContact: true },
    Bide: { makesContact: true },
    Bind: { makesContact: true },
    Blizzard: { target: 'allAdjacentFoes' },
    Clamp: { makesContact: true },
    'Comet Punch': { makesContact: true },
    Counter: { makesContact: true },
    Crunch: { makesContact: true },
    Detect: { priority: 3 },
    Endure: { priority: 4 },
    Protect: { priority: 3 },
    Dig: { makesContact: true },
    'Double Kick': { makesContact: true },
    'Double Slap': { makesContact: true },
    Explosion: { target: 'allAdjacent' },
    Flail: { makesContact: true },
    Fly: { makesContact: true },
    'Fury Attack': { makesContact: true },
    'Fury Swipes': { makesContact: true },
    'High Jump Kick': { makesContact: true },
    'Jump Kick': { makesContact: true },
    'Leech Life': { makesContact: true },
    Outrage: { makesContact: true },
    'Petal Dance': { makesContact: true },
    Pursuit: { makesContact: true },
    Rage: { makesContact: true },
    'Rapid Spin': { makesContact: true },
    'Razor Wind': { target: 'allAdjacentFoes' },
    Reversal: { makesContact: true },
    'Rock Smash': { makesContact: true },
    'Self-Destruct': { target: 'allAdjacent' },
    'Skull Bash': { makesContact: true },
    Stomp: { makesContact: true },
    Struggle: { makesContact: true },
    Surf: { target: 'allAdjacentFoes' },
    Thief: { makesContact: true },
    Thrash: { makesContact: true },
    'Triple Kick': { makesContact: true, multihit: 3 },
    'Vine Whip': { makesContact: true },
    Waterfall: { makesContact: true },
    Wrap: { makesContact: true },
    Crabhammer: { makesContact: true },
    'Double-Edge': { recoil: [1, 3], makesContact: true },
    Earthquake: { target: 'allAdjacent' },
    'Extreme Speed': { makesContact: true },
    'Fury Cutter': { makesContact: true },
    'Heal Bell': { isSound: true },
    Magnitude: { target: 'allAdjacent' },
    Roar: { isSound: true },
    Submission: { makesContact: true },
    Tackle: { makesContact: true },
    'Take Down': { makesContact: true },
    Twister: { target: 'allAdjacentFoes' },
    'Body Slam': { makesContact: true },
    Bubble: { target: 'allAdjacentFoes' },
    Growl: { isSound: true, target: 'allAdjacentFoes' },
    Lick: { makesContact: true },
    'Perish Song': { isSound: true },
    Screech: { isSound: true },
    Sing: { isSound: true },
    Snore: { isSound: true },
    'String Shot': { target: 'allAdjacentFoes' },
    Supersonic: { isSound: true },
    'Sweet Scent': { target: 'allAdjacentFoes' },
    Rollout: { makesContact: true },
    Constrict: { makesContact: true },
    'Dizzy Punch': { makesContact: true },
    Frustration: { makesContact: true },
    'Hyper Fang': { makesContact: true },
    'Karate Chop': { makesContact: true },
    'Low Kick': { bp: 0, makesContact: true },
    Return: { makesContact: true },
    'Rolling Kick': { makesContact: true },
    Bite: { makesContact: true },
    'Cross Chop': { makesContact: true },
    Cut: { makesContact: true },
    'Drill Peck': { makesContact: true },
    'Dynamic Punch': { makesContact: true },
    'False Swipe': { makesContact: true },
    'Fire Punch': { makesContact: true },
    'Flame Wheel': { makesContact: true },
    Guillotine: { makesContact: true },
    Headbutt: { makesContact: true },
    'Horn Attack': { makesContact: true },
    'Horn Drill': { makesContact: true },
    'Ice Punch': { makesContact: true },
    'Icy Wind': { target: 'allAdjacentFoes' },
    'Iron Tail': { makesContact: true },
    Leer: { target: 'allAdjacentFoes' },
    'Mach Punch': { makesContact: true },
    Megahorn: { makesContact: true },
    'Mega Kick': { makesContact: true },
    'Mega Punch': { makesContact: true },
    'Metal Claw': { makesContact: true },
    Peck: { makesContact: true },
    Pound: { makesContact: true },
    'Powder Snow': { target: 'allAdjacentFoes' },
    'Quick Attack': { makesContact: true },
    'Razor Leaf': { target: 'allAdjacentFoes' },
    'Rock Slide': { target: 'allAdjacentFoes' },
    Scratch: { makesContact: true },
    'Seismic Toss': { makesContact: true },
    'Shadow Strike': { makesContact: true },
    Slam: { makesContact: true },
    Slash: { makesContact: true },
    Spark: { makesContact: true },
    'Steel Wing': { makesContact: true },
    Strength: { makesContact: true },
    'Super Fang': { makesContact: true },
    Swift: { target: 'allAdjacentFoes' },
    'Tail Whip': { target: 'allAdjacentFoes' },
    'Thunder Punch': { makesContact: true },
    'Vise Grip': { makesContact: true },
    'Vital Throw': { makesContact: true },
    'Wing Attack': { makesContact: true },
    'Arm Thrust': {
        bp: 15,
        type: 'Fighting',
        multihit: [2, 5],
        makesContact: true
    },
    Assist: { bp: 0, category: 'Status', type: 'Normal' },
    Astonish: { bp: 30, type: 'Ghost', makesContact: true },
    Block: { bp: 0, category: 'Status', type: 'Normal' },
    Bounce: { bp: 85, type: 'Flying', makesContact: true },
    'Bullet Seed': { bp: 10, type: 'Grass', multihit: [2, 5] },
    Camouflage: { bp: 0, category: 'Status', type: 'Normal' },
    Charge: { bp: 0, category: 'Status', type: 'Electric' },
    Covet: { bp: 40, type: 'Normal' },
    Dive: { bp: 60, type: 'Water', makesContact: true },
    'Doom Desire': { bp: 120, type: 'Steel' },
    Extrasensory: { bp: 80, type: 'Psychic' },
    'Fake Out': { bp: 40, type: 'Normal', priority: 1 },
    'Follow Me': { bp: 0, category: 'Status', type: 'Normal', priority: 3 },
    Hail: { bp: 0, category: 'Status', type: 'Ice' },
    'Icicle Spear': { bp: 10, type: 'Ice', multihit: [2, 5] },
    Ingrain: { bp: 0, category: 'Status', type: 'Grass' },
    'Knock Off': { bp: 20, type: 'Dark', makesContact: true },
    'Leaf Blade': { bp: 70, type: 'Grass', makesContact: true },
    'Magic Coat': { bp: 0, category: 'Status', type: 'Psychic', priority: 4 },
    Memento: { bp: 0, category: 'Status', type: 'Dark' },
    'Nature Power': { bp: 0, category: 'Status', type: 'Normal' },
    'Needle Arm': { bp: 60, type: 'Grass', makesContact: true },
    'Odor Sleuth': { bp: 0, category: 'Status', type: 'Normal' },
    Overheat: { bp: 140, type: 'Fire', self: { boosts: { spa: -2 } }, makesContact: true },
    Revenge: { bp: 60, type: 'Fighting', makesContact: true },
    'Rock Blast': { bp: 25, type: 'Rock', multihit: [2, 5] },
    'Role Play': { bp: 0, category: 'Status', type: 'Psychic' },
    'Sand Tomb': { bp: 15, type: 'Ground' },
    'Skill Swap': { bp: 0, category: 'Status', type: 'Psychic' },
    'Smelling Salts': { bp: 60, type: 'Normal', makesContact: true },
    'Spit Up': { bp: 0, type: 'Normal' },
    Stockpile: { bp: 0, category: 'Status', type: 'Normal' },
    Swallow: { bp: 0, category: 'Status', type: 'Normal' },
    Taunt: { bp: 0, category: 'Status', type: 'Dark' },
    'Teeter Dance': { bp: 0, category: 'Status', type: 'Normal', target: 'allAdjacent' },
    Tickle: { bp: 0, category: 'Status', type: 'Normal' },
    Trick: { bp: 0, category: 'Status', type: 'Psychic' },
    Uproar: { bp: 50, type: 'Normal', isSound: true },
    'Volt Tackle': { bp: 120, type: 'Electric', recoil: [1, 3], makesContact: true },
    'Weather Ball': { bp: 50, type: 'Normal' },
    Aromatherapy: { bp: 0, category: 'Status', type: 'Grass' },
    'Brick Break': { bp: 75, type: 'Fighting', makesContact: true },
    Endeavor: { bp: 0, type: 'Normal', makesContact: true },
    'Focus Punch': { bp: 150, type: 'Fighting', makesContact: true },
    Imprison: { bp: 0, category: 'Status', type: 'Psychic' },
    'Mud Sport': { bp: 0, category: 'Status', type: 'Ground' },
    Recycle: { bp: 0, category: 'Status', type: 'Normal' },
    'Secret Power': { bp: 70, type: 'Normal' },
    'Sky Uppercut': { bp: 85, type: 'Fighting', makesContact: true },
    'Slack Off': { bp: 0, category: 'Status', type: 'Normal' },
    Snatch: { bp: 0, category: 'Status', type: 'Dark', priority: 4 },
    'Tail Glow': { bp: 0, category: 'Status', type: 'Bug' },
    Torment: { bp: 0, category: 'Status', type: 'Dark' },
    'Water Sport': { bp: 0, category: 'Status', type: 'Water' },
    Wish: { bp: 0, category: 'Status', type: 'Normal' },
    'Air Cutter': { bp: 55, type: 'Flying', target: 'allAdjacentFoes' },
    Facade: { bp: 70, type: 'Normal', makesContact: true },
    'Grass Whistle': { bp: 0, category: 'Status', type: 'Grass', isSound: true },
    'Heat Wave': { bp: 100, type: 'Fire', target: 'allAdjacentFoes' },
    'Hyper Voice': { bp: 90, type: 'Normal', isSound: true, target: 'allAdjacentFoes' },
    'Metal Sound': { bp: 0, category: 'Status', type: 'Steel', isSound: true },
    'Meteor Mash': { bp: 100, type: 'Steel', makesContact: true },
    'Muddy Water': { bp: 95, type: 'Water', target: 'allAdjacentFoes' },
    'Poison Fang': { bp: 50, type: 'Poison', makesContact: true },
    'Rock Tomb': { bp: 50, type: 'Rock' },
    'Will-O-Wisp': { bp: 0, category: 'Status', type: 'Fire' },
    'Ice Ball': { bp: 30, type: 'Ice', makesContact: true },
    'Sheer Cold': { bp: 0, type: 'Ice' },
    Howl: { bp: 0, category: 'Status', type: 'Normal' },
    'Luster Purge': { bp: 70, type: 'Psychic' },
    'Mist Ball': { bp: 70, type: 'Psychic' },
    'Psycho Boost': { bp: 140, type: 'Psychic', self: { boosts: { spa: -2 } } },
    Refresh: { bp: 0, category: 'Status', type: 'Normal' },
    'Signal Beam': { bp: 75, type: 'Bug' },
    'Silver Wind': { bp: 60, type: 'Bug' },
    'Aerial Ace': { bp: 60, type: 'Flying', makesContact: true },
    'Blast Burn': { bp: 150, type: 'Fire' },
    'Blaze Kick': { bp: 85, type: 'Fire', makesContact: true },
    'Bulk Up': { bp: 0, category: 'Status', type: 'Fighting' },
    'Calm Mind': { bp: 0, category: 'Status', type: 'Psychic' },
    'Cosmic Power': { bp: 0, category: 'Status', type: 'Psychic' },
    'Crush Claw': { bp: 75, type: 'Normal', makesContact: true },
    'Dragon Claw': { bp: 80, type: 'Dragon', makesContact: true },
    'Dragon Dance': { bp: 0, category: 'Status', type: 'Dragon' },
    Eruption: { bp: 150, type: 'Fire', target: 'allAdjacentFoes' },
    'Fake Tears': { bp: 0, category: 'Status', type: 'Dark' },
    'Feather Dance': { bp: 0, category: 'Status', type: 'Flying' },
    Flatter: { bp: 0, category: 'Status', type: 'Dark' },
    'Frenzy Plant': { bp: 150, type: 'Grass' },
    Grudge: { bp: 0, category: 'Status', type: 'Ghost' },
    'Helping Hand': { bp: 0, category: 'Status', type: 'Normal', priority: 5 },
    'Hydro Cannon': { bp: 150, type: 'Water' },
    'Iron Defense': { bp: 0, category: 'Status', type: 'Steel' },
    'Magical Leaf': { bp: 60, type: 'Grass' },
    'Mud Shot': { bp: 55, type: 'Ground' },
    'Poison Tail': { bp: 50, type: 'Poison', makesContact: true },
    'Shadow Punch': { bp: 60, type: 'Ghost', makesContact: true },
    'Shock Wave': { bp: 60, type: 'Electric' },
    Superpower: { bp: 120, type: 'Fighting', self: { boosts: { atk: -1, def: -1 } }, makesContact: true },
    'Water Pulse': { bp: 60, type: 'Water' },
    'Water Spout': { bp: 150, type: 'Water', target: 'allAdjacentFoes' },
    Yawn: { bp: 0, category: 'Status', type: 'Normal' }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Absorb: { category: 'Special' },
    'Arm Thrust': { category: 'Physical' },
    Barrage: { category: 'Physical' },
    'Beat Up': { category: 'Physical' },
    Bide: { priority: 1, category: 'Physical' },
    Bind: { category: 'Physical' },
    'Bone Rush': { category: 'Physical' },
    Bonemerang: { category: 'Physical' },
    Bounce: { category: 'Physical' },
    'Brick Break': { category: 'Physical' },
    'Bullet Seed': { category: 'Physical' },
    Clamp: { category: 'Physical' },
    'Comet Punch': { isPunch: true, category: 'Physical' },
    Counter: { category: 'Physical' },
    Covet: { makesContact: true, category: 'Physical' },
    Crabhammer: { category: 'Physical' },
    Dig: { bp: 80, category: 'Physical' },
    Dive: { bp: 80, category: 'Physical' },
    'Doom Desire': { category: 'Special' },
    'Double-Edge': { category: 'Physical' },
    'Double Kick': { category: 'Physical' },
    'Double Slap': { category: 'Physical' },
    'Dream Eater': { category: 'Special' },
    Earthquake: { category: 'Physical' },
    Endeavor: { category: 'Physical' },
    Explosion: { category: 'Physical' },
    'Extreme Speed': { category: 'Physical' },
    'Fake Out': { makesContact: true, category: 'Physical' },
    'Fire Spin': { category: 'Special' },
    Flail: { category: 'Physical' },
    Fly: { bp: 90, category: 'Physical' },
    'Focus Punch': { isPunch: true, category: 'Physical' },
    'Fury Attack': { category: 'Physical' },
    'Fury Cutter': { category: 'Physical' },
    'Fury Swipes': { category: 'Physical' },
    'Future Sight': { category: 'Special' },
    'Giga Drain': { category: 'Special' },
    Gust: { category: 'Special' },
    'High Jump Kick': { bp: 100, category: 'Physical' },
    'Icicle Spear': { category: 'Physical' },
    'Jump Kick': { bp: 85, category: 'Physical' },
    'Knock Off': { category: 'Physical' },
    'Leech Life': { category: 'Physical' },
    Magnitude: { category: 'Physical' },
    'Mega Drain': { category: 'Special' },
    'Mirror Coat': { category: 'Special' },
    Outrage: { bp: 120, category: 'Physical' },
    'Petal Dance': { bp: 90, category: 'Special' },
    'Pin Missile': { category: 'Physical' },
    Psywave: { category: 'Special' },
    Pursuit: { category: 'Physical' },
    'Rapid Spin': { category: 'Physical' },
    'Razor Wind': { category: 'Special' },
    Revenge: { category: 'Physical' },
    Reversal: { category: 'Physical' },
    'Rock Blast': { category: 'Physical' },
    'Sand Tomb': { category: 'Physical' },
    'Secret Power': { category: 'Physical' },
    'Self-Destruct': { category: 'Physical' },
    'Sky Uppercut': { isPunch: true, category: 'Physical' },
    'Smelling Salts': { category: 'Physical' },
    'Solar Beam': { category: 'Special' },
    'Spike Cannon': { category: 'Physical' },
    'Spit Up': { category: 'Special' },
    Stomp: { category: 'Physical' },
    Struggle: { category: 'Physical', struggleRecoil: true },
    Submission: { category: 'Physical' },
    Surf: { target: 'allAdjacent', category: 'Special' },
    Tackle: { category: 'Physical' },
    'Take Down': { category: 'Physical' },
    Thief: { category: 'Physical' },
    Thrash: { category: 'Physical' },
    Thunder: { category: 'Special' },
    'Triple Kick': { category: 'Physical' },
    Twineedle: { category: 'Physical' },
    Twister: { category: 'Special' },
    Uproar: { category: 'Special' },
    'Volt Tackle': { category: 'Physical' },
    Whirlpool: { category: 'Special' },
    Wrap: { category: 'Physical' },
    'Air Cutter': { category: 'Special' },
    Blizzard: { category: 'Special' },
    'Body Slam': { category: 'Physical' },
    Bubble: { category: 'Special' },
    Extrasensory: { category: 'Special' },
    Facade: { category: 'Physical' },
    'Fire Blast': { category: 'Special' },
    Flamethrower: { category: 'Special' },
    'Heat Wave': { category: 'Special' },
    'Hidden Power': { category: 'Special' },
    'Hidden Power Bug': { category: 'Special' },
    'Hidden Power Dark': { category: 'Special' },
    'Hidden Power Dragon': { category: 'Special' },
    'Hidden Power Electric': { category: 'Special' },
    'Hidden Power Fighting': { category: 'Special' },
    'Hidden Power Fire': { category: 'Special' },
    'Hidden Power Flying': { category: 'Special' },
    'Hidden Power Ghost': { category: 'Special' },
    'Hidden Power Grass': { category: 'Special' },
    'Hidden Power Ground': { category: 'Special' },
    'Hidden Power Ice': { category: 'Special' },
    'Hidden Power Poison': { category: 'Special' },
    'Hidden Power Psychic': { category: 'Special' },
    'Hidden Power Rock': { category: 'Special' },
    'Hidden Power Steel': { category: 'Special' },
    'Hidden Power Water': { category: 'Special' },
    'Hydro Pump': { category: 'Special' },
    'Hyper Voice': { category: 'Special' },
    'Ice Beam': { category: 'Special' },
    Lick: { category: 'Physical' },
    'Meteor Mash': { isPunch: true, category: 'Physical' },
    'Muddy Water': { category: 'Special' },
    Overheat: { category: 'Special', makesContact: false },
    'Poison Fang': { isBite: true, category: 'Physical' },
    'Rock Tomb': { category: 'Physical' },
    'Skull Bash': { category: 'Physical' },
    Smog: { category: 'Special' },
    Snore: { category: 'Special' },
    Thunderbolt: { category: 'Special' },
    'Vine Whip': { category: 'Physical' },
    'Weather Ball': { category: 'Special' },
    'Ice Ball': { category: 'Physical' },
    Rollout: { category: 'Physical' },
    'Sheer Cold': { category: 'Special' },
    Aeroblast: { category: 'Special' },
    'Bone Club': { category: 'Physical' },
    Constrict: { category: 'Physical' },
    'Dizzy Punch': { isPunch: true, category: 'Physical' },
    'Dragon Rage': { category: 'Special' },
    'Egg Bomb': { category: 'Physical' },
    'Feint Attack': { makesContact: true, category: 'Physical' },
    Frustration: { category: 'Physical' },
    'Hyper Fang': { isBite: true, category: 'Physical' },
    'Karate Chop': { category: 'Physical' },
    'Low Kick': { category: 'Physical' },
    'Luster Purge': { category: 'Special' },
    'Mist Ball': { category: 'Special' },
    'Needle Arm': { category: 'Physical' },
    'Psycho Boost': { category: 'Special' },
    Rage: { category: 'Physical' },
    Return: { category: 'Physical' },
    'Rolling Kick': { category: 'Physical' },
    'Sacred Fire': { category: 'Physical' },
    'Signal Beam': { category: 'Special' },
    'Silver Wind': { category: 'Special' },
    'Sonic Boom': { category: 'Special' },
    Acid: { category: 'Special' },
    'Aerial Ace': { category: 'Physical' },
    'Ancient Power': { category: 'Special', makesContact: false },
    Astonish: { category: 'Physical' },
    'Aurora Beam': { category: 'Special' },
    Bite: { isBite: true, category: 'Physical' },
    'Blast Burn': { category: 'Special' },
    'Blaze Kick': { category: 'Physical' },
    'Bubble Beam': { category: 'Special' },
    Confusion: { category: 'Special' },
    'Cross Chop': { category: 'Physical' },
    Crunch: { isBite: true, category: 'Physical' },
    'Crush Claw': { category: 'Physical' },
    Cut: { category: 'Physical' },
    'Dragon Breath': { category: 'Special' },
    'Dragon Claw': { category: 'Physical' },
    'Drill Peck': { category: 'Physical' },
    'Dynamic Punch': { isPunch: true, category: 'Physical' },
    Ember: { category: 'Special' },
    Eruption: { category: 'Special' },
    'False Swipe': { category: 'Physical' },
    'Fire Punch': { isPunch: true, category: 'Physical' },
    Fissure: { category: 'Physical' },
    'Flame Wheel': { category: 'Physical' },
    'Frenzy Plant': { category: 'Special' },
    Guillotine: { category: 'Physical' },
    Headbutt: { category: 'Physical' },
    'Horn Attack': { category: 'Physical' },
    'Horn Drill': { category: 'Physical' },
    'Hydro Cannon': { category: 'Special' },
    'Hyper Beam': { category: 'Special' },
    'Ice Punch': { isPunch: true, category: 'Physical' },
    'Icy Wind': { category: 'Special' },
    'Iron Tail': { category: 'Physical' },
    'Leaf Blade': { bp: 90, category: 'Physical' },
    'Mach Punch': { isPunch: true, category: 'Physical' },
    'Magical Leaf': { category: 'Special' },
    Megahorn: { category: 'Physical' },
    'Mega Kick': { category: 'Physical' },
    'Mega Punch': { isPunch: true, category: 'Physical' },
    'Metal Claw': { category: 'Physical' },
    'Mud Shot': { category: 'Special' },
    'Mud-Slap': { category: 'Special' },
    'Night Shade': { category: 'Special' },
    Octazooka: { category: 'Special' },
    'Paleo Wave': { category: 'Special' },
    'Pay Day': { category: 'Physical' },
    Peck: { category: 'Physical' },
    'Poison Sting': { category: 'Physical' },
    'Poison Tail': { category: 'Physical' },
    Pound: { category: 'Physical' },
    'Powder Snow': { category: 'Special' },
    Present: { category: 'Physical' },
    Psybeam: { category: 'Special' },
    Psychic: { category: 'Special' },
    'Quick Attack': { category: 'Physical' },
    'Razor Leaf': { category: 'Physical' },
    'Rock Slide': { category: 'Physical' },
    'Rock Smash': { bp: 40, category: 'Physical' },
    'Rock Throw': { category: 'Physical' },
    Scratch: { category: 'Physical' },
    'Seismic Toss': { category: 'Physical' },
    'Shadow Ball': { category: 'Special' },
    'Shadow Punch': { isPunch: true, category: 'Physical' },
    'Shadow Strike': { category: 'Physical' },
    'Shock Wave': { category: 'Special' },
    'Sky Attack': { category: 'Physical' },
    Slam: { category: 'Physical' },
    Slash: { category: 'Physical' },
    Sludge: { category: 'Special' },
    'Sludge Bomb': { category: 'Special' },
    Spark: { category: 'Physical' },
    'Steel Wing': { category: 'Physical' },
    Strength: { category: 'Physical' },
    'Super Fang': { category: 'Physical' },
    Superpower: { category: 'Physical' },
    Swift: { category: 'Special' },
    'Thunder Punch': { isPunch: true, category: 'Physical' },
    'Thunder Shock': { category: 'Special' },
    'Tri Attack': { category: 'Special' },
    'Vise Grip': { category: 'Physical' },
    'Vital Throw': { category: 'Physical' },
    Waterfall: { category: 'Physical' },
    'Water Gun': { category: 'Special' },
    'Water Pulse': { category: 'Special' },
    'Water Spout': { category: 'Special' },
    'Wing Attack': { category: 'Physical' },
    'Zap Cannon': { bp: 120, category: 'Special' },
    Acupressure: { bp: 0, type: 'Normal' },
    'Aqua Ring': { bp: 0, type: 'Water' },
    Assurance: {
        bp: 50,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    Avalanche: {
        bp: 60,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Brave Bird': {
        bp: 120,
        type: 'Flying',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Bug Bite': {
        bp: 60,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    Chatter: { bp: 60, type: 'Flying', isSound: true, category: 'Special' },
    Copycat: { bp: 0, type: 'Normal' },
    'Crush Grip': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    Defog: { bp: 0, type: 'Flying' },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    'Drain Punch': {
        bp: 60,
        type: 'Fighting',
        drain: [1, 2],
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    Embargo: { bp: 0, type: 'Dark' },
    Feint: {
        bp: 50,
        type: 'Normal',
        priority: 2,
        breaksProtect: true,
        category: 'Physical'
    },
    'Fire Fang': {
        bp: 65,
        type: 'Fire',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    Fling: { bp: 0, type: 'Dark', category: 'Physical' },
    Gravity: { bp: 0, type: 'Psychic' },
    'Head Smash': {
        bp: 150,
        type: 'Rock',
        recoil: [1, 2],
        makesContact: true,
        category: 'Physical'
    },
    'Heal Block': { bp: 0, type: 'Psychic', target: 'allAdjacentFoes' },
    'Healing Wish': { bp: 0, type: 'Psychic' },
    'Heal Order': { bp: 0, type: 'Bug' },
    'Last Resort': {
        bp: 130,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Lucky Chant': { bp: 0, type: 'Normal' },
    'Lunar Dance': { bp: 0, type: 'Psychic' },
    'Magma Storm': { bp: 120, type: 'Fire', category: 'Special' },
    'Magnet Rise': { bp: 0, type: 'Electric' },
    'Me First': { bp: 0, type: 'Normal' },
    'Metal Burst': { bp: 0, type: 'Steel', category: 'Physical' },
    'Miracle Eye': { bp: 0, type: 'Psychic' },
    'Natural Gift': { bp: 0, type: 'Normal', category: 'Physical' },
    Payback: {
        bp: 50,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    Pluck: {
        bp: 60,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Power Trick': { bp: 0, type: 'Psychic' },
    Roost: { bp: 0, type: 'Flying' },
    'Stealth Rock': { bp: 0, type: 'Rock' },
    'Sucker Punch': {
        bp: 80,
        type: 'Dark',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    Switcheroo: { bp: 0, type: 'Dark' },
    Tailwind: { bp: 0, type: 'Flying' },
    'Toxic Spikes': { bp: 0, type: 'Poison' },
    'Trick Room': { bp: 0, type: 'Psychic' },
    'U-turn': {
        bp: 70,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Wake-Up Slap': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Worry Seed': { bp: 0, type: 'Grass' },
    'Wring Out': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Special'
    },
    'Air Slash': { bp: 75, type: 'Flying', category: 'Special' },
    'Aura Sphere': { bp: 90, type: 'Fighting', category: 'Special' },
    'Bug Buzz': { bp: 90, type: 'Bug', isSound: true, category: 'Special' },
    'Draco Meteor': { bp: 140, type: 'Dragon', self: { boosts: { spa: -2 } }, category: 'Special' },
    'Dragon Pulse': { bp: 90, type: 'Dragon', category: 'Special' },
    'Dragon Rush': {
        bp: 100,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical'
    },
    'Energy Ball': { bp: 80, type: 'Grass', category: 'Special' },
    'Gunk Shot': { bp: 120, type: 'Poison', category: 'Physical' },
    'Gyro Ball': {
        bp: 0,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Leaf Storm': { bp: 140, type: 'Grass', self: { boosts: { spa: -2 } }, category: 'Special' },
    'Power Gem': { bp: 70, type: 'Rock', category: 'Special' },
    'Psycho Shift': { bp: 0, type: 'Psychic' },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        breaksProtect: true,
        makesContact: true,
        category: 'Physical'
    },
    'Dark Void': { bp: 0, type: 'Dark', target: 'allAdjacentFoes' },
    'Gastro Acid': { bp: 0, type: 'Poison' },
    Captivate: { bp: 0, type: 'Normal', target: 'allAdjacentFoes' },
    'Grass Knot': {
        bp: 0,
        type: 'Grass',
        makesContact: true,
        category: 'Special'
    },
    'Heart Swap': { bp: 0, type: 'Psychic' },
    Judgment: { bp: 100, type: 'Normal', category: 'Special' },
    'Magnet Bomb': { bp: 60, type: 'Steel', category: 'Physical' },
    'Mirror Shot': { bp: 65, type: 'Steel', category: 'Special' },
    'Mud Bomb': { bp: 65, type: 'Ground', category: 'Special' },
    'Ominous Wind': { bp: 60, type: 'Ghost', category: 'Special' },
    Punishment: {
        bp: 0,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Roar of Time': { bp: 150, type: 'Dragon', category: 'Special' },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Seed Flare': { bp: 120, type: 'Grass', category: 'Special' },
    'Spacial Rend': { bp: 100, type: 'Dragon', category: 'Special' },
    'Trump Card': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Special'
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Attack Order': { bp: 90, type: 'Bug', category: 'Physical' },
    Brine: { bp: 65, type: 'Water', category: 'Special' },
    'Bullet Punch': {
        bp: 40,
        type: 'Steel',
        priority: 1,
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Charge Beam': { bp: 50, type: 'Electric', category: 'Special' },
    'Close Combat': {
        bp: 120,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Dark Pulse': { bp: 80, type: 'Dark', category: 'Special' },
    'Defend Order': { bp: 0, type: 'Bug' },
    Discharge: {
        bp: 80,
        type: 'Electric',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Earth Power': { bp: 90, type: 'Ground', category: 'Special' },
    'Flash Cannon': { bp: 80, type: 'Steel', category: 'Special' },
    'Focus Blast': { bp: 120, type: 'Fighting', category: 'Special' },
    'Force Palm': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Guard Swap': { bp: 0, type: 'Psychic' },
    'Hammer Arm': {
        bp: 100,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Ice Shard': { bp: 40, type: 'Ice', priority: 1, category: 'Physical' },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Nasty Plot': { bp: 0, type: 'Dark' },
    'Night Slash': {
        bp: 70,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Power Swap': { bp: 0, type: 'Psychic' },
    'Power Whip': {
        bp: 120,
        type: 'Grass',
        makesContact: true,
        category: 'Physical'
    },
    'Psycho Cut': { bp: 70, type: 'Psychic', category: 'Physical' },
    'Rock Polish': { bp: 0, type: 'Rock' },
    'Rock Wrecker': { bp: 150, type: 'Rock', category: 'Physical' },
    'Seed Bomb': { bp: 80, type: 'Grass', category: 'Physical' },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical'
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Stone Edge': { bp: 100, type: 'Rock', category: 'Physical' },
    'Thunder Fang': {
        bp: 65,
        type: 'Electric',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Vacuum Wave': {
        bp: 40,
        type: 'Fighting',
        priority: 1,
        category: 'Special'
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical'
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Air Slash': { secondaries: true },
    Blizzard: { secondaries: true },
    'Body Slam': { secondaries: true },
    Bounce: { secondaries: true },
    Bubble: { secondaries: true },
    'Brave Bird': { recoil: [33, 100] },
    'Bug Buzz': { secondaries: true },
    Chatter: { secondaries: true },
    Covet: { bp: 60 },
    'Dragon Rush': { secondaries: true },
    'Drain Punch': { bp: 75 },
    'Energy Ball': { secondaries: true },
    Extrasensory: { secondaries: true },
    Feint: { bp: 30 },
    Detect: { priority: 4 },
    'Double-Edge': { recoil: [33, 100] },
    Protect: { priority: 4 },
    'Fire Blast': { secondaries: true },
    'Fire Spin': { bp: 35 },
    Flamethrower: { secondaries: true },
    'Fury Cutter': { bp: 20 },
    'Future Sight': { bp: 100, type: 'Psychic' },
    'Giga Drain': { bp: 75 },
    'Gunk Shot': { secondaries: true },
    'Heat Wave': { secondaries: true },
    'Ice Beam': { secondaries: true },
    Lick: { secondaries: true },
    'Meteor Mash': { secondaries: true },
    'Muddy Water': { secondaries: true },
    Overheat: {},
    'Poison Fang': { secondaries: true },
    'Poison Gas': { target: 'allAdjacentFoes' },
    'Rock Tomb': { secondaries: true },
    'Sand Tomb': { bp: 35 },
    'Secret Power': { secondaries: true },
    Smog: { secondaries: true },
    Snore: { secondaries: true },
    Stomp: { secondaries: true },
    Thunder: { secondaries: true },
    Thunderbolt: { secondaries: true },
    Uproar: { bp: 90 },
    Whirlpool: { bp: 35 },
    'Petal Dance': { bp: 120 },
    Tackle: { bp: 50 },
    Thrash: { bp: 120 },
    'Bone Club': { secondaries: true },
    Constrict: { secondaries: true },
    'Dizzy Punch': { secondaries: true },
    'Hyper Fang': { secondaries: true },
    'Jump Kick': { bp: 100 },
    'Luster Purge': { secondaries: true },
    'Mirror Shot': { secondaries: true },
    'Mist Ball': { secondaries: true },
    'Mud Bomb': { secondaries: true },
    'Needle Arm': { secondaries: true },
    'Ominous Wind': { secondaries: true },
    'Rock Climb': { secondaries: true },
    'Rolling Kick': { secondaries: true },
    'Sacred Fire': { secondaries: true },
    'Seed Flare': { secondaries: true },
    'Signal Beam': { secondaries: true },
    'Silver Wind': { secondaries: true },
    Twineedle: { secondaries: true },
    Acid: { secondaries: true },
    'Ancient Power': { secondaries: true },
    Astonish: { secondaries: true },
    'Aurora Beam': { secondaries: true },
    'Beat Up': { bp: 0 },
    Bite: { secondaries: true },
    'Blaze Kick': { secondaries: true },
    'Bubble Beam': { secondaries: true },
    'Bullet Seed': { bp: 25 },
    'Charge Beam': { secondaries: true },
    Confusion: { secondaries: true },
    'Cross Poison': { secondaries: true },
    Crunch: { secondaries: true },
    'Crush Claw': { secondaries: true },
    Curse: { type: 'Ghost' },
    'Dark Pulse': { secondaries: true },
    Discharge: { secondaries: true },
    'Doom Desire': { bp: 140 },
    'Dragon Breath': { secondaries: true },
    'Dynamic Punch': { secondaries: true },
    'Earth Power': { secondaries: true },
    'Extreme Speed': { priority: 2 },
    Ember: { secondaries: true },
    'Fake Out': { secondaries: true, priority: 3 },
    'Fire Fang': { secondaries: true },
    'Fire Punch': { secondaries: true },
    'Flame Wheel': { secondaries: true },
    'Flare Blitz': { secondaries: true, recoil: [33, 100] },
    'Flash Cannon': { secondaries: true },
    'Focus Blast': { secondaries: true },
    'Force Palm': { secondaries: true },
    Headbutt: { secondaries: true },
    'High Jump Kick': { bp: 130 },
    'Ice Fang': { secondaries: true },
    'Ice Punch': { secondaries: true },
    'Icicle Spear': { bp: 25 },
    'Icy Wind': { secondaries: true },
    'Iron Head': { secondaries: true },
    'Iron Tail': { secondaries: true },
    'Last Resort': { bp: 140 },
    'Lava Plume': { secondaries: true },
    'Metal Claw': { secondaries: true },
    'Mud Shot': { secondaries: true },
    'Mud-Slap': { secondaries: true },
    Octazooka: { secondaries: true },
    'Paleo Wave': { secondaries: true },
    'Poison Jab': { secondaries: true },
    'Poison Sting': { secondaries: true },
    'Poison Tail': { secondaries: true },
    'Powder Snow': { secondaries: true },
    Psybeam: { secondaries: true },
    Psychic: { secondaries: true },
    'Rock Slide': { secondaries: true },
    'Rock Smash': { secondaries: true },
    'Shadow Ball': { secondaries: true },
    'Shadow Strike': { secondaries: true },
    'Sky Attack': { secondaries: true },
    Sludge: { secondaries: true },
    'Sludge Bomb': { secondaries: true },
    Spark: { secondaries: true },
    'Steel Wing': { secondaries: true },
    'Thunder Fang': { secondaries: true },
    'Thunder Punch': { secondaries: true },
    'Thunder Shock': { secondaries: true },
    'Tri Attack': { secondaries: true },
    Twister: { secondaries: true },
    'Volt Tackle': { secondaries: true, recoil: [33, 100] },
    'Wood Hammer': { recoil: [33, 100] },
    Waterfall: { secondaries: true },
    'Water Pulse': { secondaries: true },
    'Zap Cannon': { secondaries: true },
    'Zen Headbutt': { secondaries: true },
    Autotomize: { bp: 0, type: 'Steel' },
    Bestow: { bp: 0, type: 'Normal' },
    'Echoed Voice': { bp: 40, type: 'Normal', powUp: true, isSound: true, category: 'Special' },
    'Electro Ball': { bp: 0, type: 'Electric', category: 'Special' },
    Entrainment: { bp: 0, type: 'Normal' },
    'Final Gambit': {
        bp: 0,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Fire Pledge': { bp: 50, type: 'Fire', category: 'Special' },
    'Frost Breath': { bp: 40, type: 'Ice', willCrit: true, category: 'Special' },
    'Grass Pledge': { bp: 50, type: 'Grass', category: 'Special' },
    'Heal Pulse': { bp: 0, type: 'Psychic' },
    'Heat Crash': {
        bp: 0,
        type: 'Fire',
        makesContact: true,
        category: 'Physical'
    },
    Hex: { bp: 50, type: 'Ghost', category: 'Special' },
    'Horn Leech': {
        bp: 75,
        type: 'Grass',
        drain: [1, 2],
        makesContact: true,
        category: 'Physical'
    },
    Hurricane: {
        bp: 120,
        type: 'Flying',
        category: 'Special',
        secondaries: true
    },
    Incinerate: { bp: 30, type: 'Fire', target: 'allAdjacentFoes', category: 'Special' },
    'Low Sweep': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Magic Room': { bp: 0, type: 'Psychic' },
    'Quick Guard': { bp: 0, type: 'Fighting', priority: 3 },
    'Rage Powder': { bp: 0, type: 'Bug', priority: 3 },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Round: { bp: 60, type: 'Normal', isSound: true, category: 'Special' },
    'Sacred Sword': {
        bp: 90,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true
    },
    Scald: {
        bp: 80,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    'Simple Beam': { bp: 0, type: 'Normal' },
    'Sky Drop': {
        bp: 60,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    Snarl: {
        bp: 55,
        type: 'Dark',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Soak: { bp: 0, type: 'Water' },
    Steamroller: {
        bp: 65,
        type: 'Bug',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Storm Throw': {
        bp: 40,
        type: 'Fighting',
        willCrit: true,
        makesContact: true,
        category: 'Physical'
    },
    'Struggle Bug': {
        bp: 30,
        type: 'Bug',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Synchronoise: {
        bp: 70,
        type: 'Psychic',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Techno Blast': { bp: 85, type: 'Normal', category: 'Special' },
    Telekinesis: { bp: 0, type: 'Psychic' },
    'Water Pledge': { bp: 50, type: 'Water', category: 'Special' },
    'Wide Guard': { bp: 0, type: 'Rock', priority: 3 },
    'Wonder Room': { bp: 0, type: 'Psychic' },
    'Ally Switch': { bp: 0, type: 'Psychic', priority: 1 },
    'Flame Burst': { bp: 70, type: 'Fire', category: 'Special' },
    'Heavy Slam': {
        bp: 0,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Reflect Type': { bp: 0, type: 'Normal' },
    'Volt Switch': { bp: 70, type: 'Electric', category: 'Special' },
    'Chip Away': {
        bp: 70,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true
    },
    'Fiery Dance': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Head Charge': {
        bp: 120,
        type: 'Normal',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Heart Stamp': {
        bp: 60,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Quash: { bp: 0, type: 'Dark' },
    'Searing Shot': {
        bp: 100,
        type: 'Fire',
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true
    },
    'Acid Spray': {
        bp: 40,
        type: 'Poison',
        category: 'Special',
        secondaries: true
    },
    Acrobatics: {
        bp: 55,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'After You': { bp: 0, type: 'Normal' },
    'Blue Flare': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Bolt Strike': {
        bp: 130,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Bulldoze: {
        bp: 60,
        type: 'Ground',
        target: 'allAdjacent',
        category: 'Physical',
        secondaries: true
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Clear Smog': { bp: 50, type: 'Poison', category: 'Special' },
    Coil: { bp: 0, type: 'Poison' },
    'Cotton Guard': { bp: 0, type: 'Grass' },
    'Dragon Tail': {
        bp: 60,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical'
    },
    'Drill Run': {
        bp: 80,
        type: 'Ground',
        makesContact: true,
        category: 'Physical'
    },
    'Dual Chop': {
        bp: 40,
        type: 'Dragon',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    Electroweb: {
        bp: 55,
        type: 'Electric',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    'Flame Charge': {
        bp: 50,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        overrideOffensivePokemon: 'target'
    },
    'Freeze Shock': {
        bp: 140,
        type: 'Ice',
        category: 'Physical',
        secondaries: true
    },
    'Fusion Bolt': { bp: 100, type: 'Electric', category: 'Physical' },
    'Fusion Flare': { bp: 100, type: 'Fire', category: 'Special' },
    'Gear Grind': {
        bp: 50,
        type: 'Steel',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    Glaciate: {
        bp: 65,
        type: 'Ice',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    'Guard Split': { bp: 0, type: 'Psychic' },
    'Hone Claws': { bp: 0, type: 'Dark' },
    'Ice Burn': {
        bp: 140,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Icicle Crash': {
        bp: 85,
        type: 'Ice',
        category: 'Physical',
        secondaries: true
    },
    Inferno: {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Leaf Tornado': {
        bp: 65,
        type: 'Grass',
        category: 'Special',
        secondaries: true
    },
    'Night Daze': {
        bp: 85,
        type: 'Dark',
        category: 'Special',
        secondaries: true
    },
    'Power Split': { bp: 0, type: 'Psychic' },
    Psyshock: {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    Psystrike: {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    'Quiver Dance': { bp: 0, type: 'Bug' },
    'Razor Shell': {
        bp: 75,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Retaliate: {
        bp: 70,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Secret Sword': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    'Shell Smash': { bp: 0, type: 'Normal' },
    'Shift Gear': { bp: 0, type: 'Steel' },
    'Sludge Wave': {
        bp: 95,
        type: 'Poison',
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true
    },
    'Smack Down': { bp: 50, type: 'Rock', category: 'Physical' },
    'Stored Power': { bp: 20, type: 'Psychic', category: 'Special' },
    'Tail Slap': {
        bp: 25,
        type: 'Normal',
        multihit: [2, 5],
        makesContact: true,
        category: 'Physical'
    },
    'V-create': {
        bp: 180,
        type: 'Fire',
        makesContact: true,
        category: 'Physical'
    },
    Venoshock: { bp: 65, type: 'Poison', category: 'Special' },
    'Wild Charge': {
        bp: 90,
        type: 'Electric',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Work Up': { bp: 0, type: 'Normal' }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Faint Attack'];
var XY_PATCH = {
    'Ice Ball': { isBullet: true },
    'Knock Off': { bp: 65 },
    Thief: { bp: 60 },
    Barrage: { isBullet: true },
    Bubble: { bp: 40 },
    Chatter: { bp: 65 },
    'Egg Bomb': { isBullet: true },
    'Follow Me': { priority: 2 },
    Hurricane: { bp: 110 },
    'Hidden Power': { bp: 60 },
    'Hidden Power Bug': { bp: 60 },
    'Hidden Power Dark': { bp: 60 },
    'Hidden Power Dragon': { bp: 60 },
    'Hidden Power Electric': { bp: 60 },
    'Hidden Power Fighting': { bp: 60 },
    'Hidden Power Fire': { bp: 60 },
    'Hidden Power Flying': { bp: 60 },
    'Hidden Power Ghost': { bp: 60 },
    'Hidden Power Grass': { bp: 60 },
    'Hidden Power Ground': { bp: 60 },
    'Hidden Power Ice': { bp: 60 },
    'Hidden Power Poison': { bp: 60 },
    'Hidden Power Psychic': { bp: 60 },
    'Hidden Power Rock': { bp: 60 },
    'Hidden Power Steel': { bp: 60 },
    'Hidden Power Water': { bp: 60 },
    'Magma Storm': { bp: 100 },
    'Magnet Bomb': { isBullet: true },
    'Mist Ball': { isBullet: true },
    Moonlight: { type: 'Fairy' },
    'Mud Bomb': { isBullet: true },
    'Searing Shot': { isBullet: true },
    'Smelling Salts': { bp: 70 },
    Synchronoise: { bp: 120 },
    'Techno Blast': { bp: 120 },
    Thunder: { bp: 110 },
    'Wake-Up Slap': { bp: 70 },
    'Acid Spray': { isBullet: true },
    'Air Cutter': { bp: 60 },
    'Ancient Power': {},
    Assurance: { bp: 60 },
    'Aura Sphere': { bp: 80, isBullet: true, isPulse: true },
    Blizzard: { bp: 110 },
    'Bullet Seed': { isBullet: true },
    Charm: { type: 'Fairy' },
    'Cotton Spore': { target: 'allAdjacentFoes' },
    Crabhammer: { bp: 100 },
    'Dark Pulse': { isPulse: true },
    'Draco Meteor': { bp: 130 },
    'Dragon Pulse': { bp: 85, isPulse: true },
    'Electro Ball': { isBullet: true },
    'Energy Ball': { bp: 90, isBullet: true },
    'Final Gambit': { makesContact: false },
    'Fire Blast': { bp: 110 },
    'Fire Pledge': { bp: 80 },
    Flamethrower: { bp: 90 },
    'Focus Blast': { isBullet: true },
    'Frost Breath': { bp: 60 },
    'Fury Cutter': { bp: 40 },
    'Future Sight': { bp: 120 },
    'Grass Pledge': { bp: 80 },
    'Gyro Ball': { isBullet: true },
    'Heal Pulse': { isPulse: true },
    'Heat Wave': { bp: 95 },
    Hex: { bp: 65 },
    'Hydro Pump': { bp: 110 },
    'Ice Beam': { bp: 90 },
    Incinerate: { bp: 60 },
    'Leaf Storm': { bp: 130 },
    Lick: { bp: 30 },
    'Low Sweep': { bp: 65 },
    'Meteor Mash': { bp: 90 },
    'Muddy Water': { bp: 90 },
    Octazooka: { isBullet: true },
    Overheat: { bp: 130 },
    'Pin Missile': { bp: 25 },
    'Power Gem': { bp: 80 },
    'Rage Powder': { priority: 2 },
    'Rock Tomb': { bp: 60 },
    'Rock Wrecker': { isBullet: true },
    'Seed Bomb': { isBullet: true },
    'Shadow Ball': { isBullet: true },
    'Skull Bash': { bp: 130 },
    'Sludge Bomb': { isBullet: true },
    Smog: { bp: 30 },
    Snore: { bp: 50 },
    'Storm Throw': { bp: 60 },
    'Struggle Bug': { bp: 50 },
    Surf: { bp: 90 },
    'Sweet Kiss': { type: 'Fairy' },
    Thunderbolt: { bp: 90 },
    'Vine Whip': { bp: 45 },
    'Water Pledge': { bp: 80 },
    'Water Pulse': { isPulse: true },
    'Weather Ball': { isBullet: true },
    'Zap Cannon': { isBullet: true },
    'Diamond Storm': {
        bp: 100,
        type: 'Rock',
        target: 'allAdjacentFoes',
        category: 'Physical',
        secondaries: true
    },
    'Fell Stinger': {
        bp: 30,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Flying Press': {
        bp: 80,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Hyperspace Fury': {
        bp: 100,
        type: 'Dark',
        breaksProtect: true,
        category: 'Physical'
    },
    'Hyperspace Hole': {
        bp: 80,
        type: 'Psychic',
        breaksProtect: true,
        category: 'Special'
    },
    'King\'s Shield': { bp: 0, type: 'Steel', priority: 4 },
    'Misty Terrain': { bp: 0, type: 'Fairy' },
    'Mystical Fire': {
        bp: 65,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Parabolic Charge': {
        bp: 50,
        type: 'Electric',
        drain: [1, 2],
        target: 'allAdjacent',
        category: 'Special'
    },
    'Parting Shot': { bp: 0, type: 'Dark', isSound: true },
    'Phantom Force': {
        bp: 90,
        type: 'Ghost',
        breaksProtect: true,
        makesContact: true,
        category: 'Physical'
    },
    Powder: { bp: 0, type: 'Bug', priority: 1 },
    'Spiky Shield': { bp: 0, type: 'Grass', priority: 4 },
    'Thousand Arrows': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Thousand Waves': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Water Shuriken': {
        bp: 15,
        type: 'Water',
        multihit: [2, 5],
        priority: 1,
        category: 'Physical'
    },
    'Dragon Ascent': {
        bp: 120,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Electric Terrain': { bp: 0, type: 'Electric' },
    Geomancy: { bp: 0, type: 'Fairy' },
    'Grassy Terrain': { bp: 0, type: 'Grass' },
    'Ion Deluge': { bp: 0, type: 'Electric', priority: 1 },
    'Land\'s Wrath': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Light of Ruin': { bp: 140, type: 'Fairy', recoil: [1, 2], category: 'Special' },
    'Oblivion Wing': {
        bp: 80,
        type: 'Flying',
        drain: [3, 4],
        category: 'Special'
    },
    'Origin Pulse': {
        bp: 110,
        type: 'Water',
        target: 'allAdjacentFoes',
        category: 'Special',
        isPulse: true
    },
    'Precipice Blades': {
        bp: 120,
        type: 'Ground',
        target: 'allAdjacentFoes',
        category: 'Physical'
    },
    Rototiller: { bp: 0, type: 'Ground' },
    'Steam Eruption': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    'Aromatic Mist': { bp: 0, type: 'Fairy' },
    'Baby-Doll Eyes': { bp: 0, type: 'Fairy', priority: 1 },
    Belch: { bp: 120, type: 'Poison', category: 'Special' },
    Boomburst: {
        bp: 140,
        type: 'Normal',
        isSound: true,
        target: 'allAdjacent',
        category: 'Special'
    },
    Celebrate: { bp: 0, type: 'Normal' },
    Confide: { bp: 0, type: 'Normal', isSound: true },
    'Crafty Shield': { bp: 0, type: 'Fairy', priority: 3 },
    'Dazzling Gleam': { bp: 80, type: 'Fairy', target: 'allAdjacentFoes', category: 'Special' },
    'Disarming Voice': {
        bp: 40,
        type: 'Fairy',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special'
    },
    'Draining Kiss': {
        bp: 50,
        type: 'Fairy',
        drain: [3, 4],
        makesContact: true,
        category: 'Special'
    },
    'Eerie Impulse': { bp: 0, type: 'Electric' },
    Electrify: { bp: 0, type: 'Electric' },
    'Fairy Lock': { bp: 0, type: 'Fairy' },
    'Fairy Wind': { bp: 40, type: 'Fairy', category: 'Special' },
    'Flower Shield': { bp: 0, type: 'Fairy' },
    'Forest\'s Curse': { bp: 0, type: 'Grass' },
    'Freeze-Dry': {
        bp: 70,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Happy Hour': { bp: 0, type: 'Normal' },
    'Hold Back': {
        bp: 40,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Hold Hands': { bp: 0, type: 'Normal' },
    Infestation: { bp: 20, type: 'Bug', makesContact: true, category: 'Special' },
    'Magnetic Flux': { bp: 0, type: 'Electric' },
    'Mat Block': { bp: 0, type: 'Fighting' },
    Moonblast: {
        bp: 95,
        type: 'Fairy',
        category: 'Special',
        secondaries: true
    },
    'Noble Roar': { bp: 0, type: 'Normal', isSound: true },
    Nuzzle: {
        bp: 20,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Petal Blizzard': {
        bp: 90,
        type: 'Grass',
        target: 'allAdjacent',
        category: 'Physical'
    },
    'Play Nice': { bp: 0, type: 'Normal' },
    'Play Rough': {
        bp: 90,
        type: 'Fairy',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Power-Up Punch': {
        bp: 40,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true
    },
    'Sticky Web': { bp: 0, type: 'Bug' },
    'Topsy-Turvy': { bp: 0, type: 'Dark' },
    'Trick-or-Treat': { bp: 0, type: 'Ghost' },
    'Venom Drench': { bp: 0, type: 'Poison', target: 'allAdjacentFoes' }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {
    'Ally Switch': { priority: 2 },
    Aeroblast: { zp: 180 },
    Barrage: { zp: 100 },
    Bide: { zp: 100 },
    'Bone Club': { zp: 120 },
    Bonemerang: { zp: 100 },
    Bubble: { zp: 100 },
    Chatter: { zp: 120 },
    'Chip Away': { zp: 140 },
    Clamp: { zp: 100 },
    'Comet Punch': { zp: 100 },
    Constrict: { zp: 100 },
    'Crush Grip': { zp: 190 },
    'Diamond Storm': { zp: 180 },
    'Dizzy Punch': { zp: 140 },
    'Double Slap': { zp: 100 },
    'Dragon Ascent': { zp: 190 },
    'Dragon Rage': { zp: 100 },
    'Egg Bomb': { zp: 180 },
    'Feint Attack': { zp: 120 },
    'Fiery Dance': { zp: 160 },
    'Flame Burst': { zp: 140 },
    Frustration: { zp: 160 },
    'Grass Knot': { zp: 160 },
    'Head Charge': { zp: 190 },
    'Heart Stamp': { zp: 120 },
    'Heat Crash': { zp: 160 },
    'Heavy Slam': { zp: 160 },
    Hurricane: { zp: 185 },
    'Hidden Power': { zp: 120 },
    'Hidden Power Bug': { zp: 120 },
    'Hidden Power Dark': { zp: 120 },
    'Hidden Power Dragon': { zp: 120 },
    'Hidden Power Electric': { zp: 120 },
    'Hidden Power Fighting': { zp: 120 },
    'Hidden Power Fire': { zp: 120 },
    'Hidden Power Flying': { zp: 120 },
    'Hidden Power Ghost': { zp: 120 },
    'Hidden Power Grass': { zp: 120 },
    'Hidden Power Ground': { zp: 120 },
    'Hidden Power Ice': { zp: 120 },
    'Hidden Power Poison': { zp: 120 },
    'Hidden Power Psychic': { zp: 120 },
    'Hidden Power Rock': { zp: 120 },
    'Hidden Power Steel': { zp: 120 },
    'Hidden Power Water': { zp: 120 },
    'Hyper Fang': { zp: 160 },
    'Hyperspace Fury': { zp: 180 },
    'Hyperspace Hole': { zp: 160 },
    'Ice Ball': { zp: 100 },
    Judgment: { zp: 180 },
    'Jump Kick': { zp: 180 },
    'Karate Chop': { zp: 100 },
    'Knock Off': { zp: 120 },
    'Land\'s Wrath': { zp: 185 },
    'Light of Ruin': { zp: 200 },
    'Low Kick': { zp: 160 },
    'Luster Purge': { zp: 140 },
    'Magma Storm': { zp: 180 },
    'Magnet Bomb': { zp: 120 },
    Magnitude: { zp: 140 },
    'Mirror Shot': { zp: 120 },
    'Mist Ball': { zp: 140 },
    'Mud Bomb': { zp: 120 },
    'Natural Gift': { zp: 160 },
    'Needle Arm': { zp: 120 },
    'Oblivion Wing': { zp: 160 },
    'Ominous Wind': { zp: 120 },
    'Origin Pulse': { zp: 185 },
    'Precipice Blades': { zp: 190 },
    'Psycho Boost': { zp: 200 },
    Psywave: { zp: 100 },
    Punishment: { zp: 160 },
    Pursuit: { zp: 100 },
    Rage: { zp: 100 },
    'Rapid Spin': { zp: 100 },
    'Razor Wind': { zp: 160 },
    'Relic Song': { zp: 140 },
    Return: { zp: 160 },
    'Roar of Time': { zp: 200 },
    'Rock Climb': { zp: 175 },
    'Rolling Kick': { zp: 120 },
    'Sacred Fire': { zp: 180 },
    'Searing Shot': { zp: 180 },
    'Secret Power': { zp: 140 },
    'Seed Flare': { zp: 190 },
    'Shadow Force': { zp: 190 },
    'Signal Beam': { zp: 140 },
    'Silver Wind': { zp: 120 },
    'Sky Drop': { zp: 120 },
    'Sky Uppercut': { zp: 160 },
    'Smelling Salts': { zp: 140 },
    'Solar Beam': { zp: 190 },
    'Sonic Boom': { zp: 100 },
    'Spacial Rend': { zp: 180 },
    'Spike Cannon': { zp: 120 },
    'Steam Eruption': { zp: 185 },
    Steamroller: { zp: 120 },
    Synchronoise: { zp: 190 },
    'Techno Blast': { zp: 190 },
    'Thousand Arrows': { zp: 180 },
    'Thousand Waves': { zp: 175 },
    'Trump Card': { zp: 160 },
    Thunder: { zp: 185 },
    Twineedle: { zp: 100 },
    'Wake-Up Slap': { zp: 140 },
    'Wring Out': { zp: 190 },
    Absorb: { zp: 100 },
    Acid: { zp: 100 },
    'Acid Spray': { zp: 100 },
    Acrobatics: { zp: 100 },
    'Aerial Ace': { zp: 120 },
    'Air Cutter': { zp: 120 },
    'Air Slash': { zp: 140 },
    'Ancient Power': { zp: 120 },
    'Aqua Jet': { zp: 100 },
    'Aqua Tail': { zp: 175 },
    'Arm Thrust': { zp: 100 },
    Assurance: { zp: 120 },
    Astonish: { zp: 100 },
    'Attack Order': { zp: 175 },
    'Aura Sphere': { zp: 160 },
    'Aurora Beam': { zp: 120 },
    Avalanche: { zp: 120 },
    'Beat Up': { zp: 100 },
    Belch: { zp: 190 },
    Bind: { zp: 100 },
    Bite: { zp: 120 },
    'Blast Burn': { zp: 200 },
    'Blaze Kick': { zp: 160 },
    Blizzard: { zp: 185 },
    'Blue Flare': { zp: 195 },
    'Body Slam': { zp: 160 },
    'Bolt Strike': { zp: 195 },
    'Bone Rush': { zp: 140 },
    Boomburst: { zp: 200 },
    Bounce: { zp: 160 },
    'Brave Bird': { zp: 190 },
    'Brick Break': { zp: 140 },
    Brine: { zp: 120 },
    'Bubble Beam': { zp: 120 },
    'Bug Bite': { zp: 120 },
    'Bug Buzz': { zp: 175 },
    Bulldoze: { zp: 120 },
    'Bullet Punch': { zp: 100 },
    'Bullet Seed': { zp: 140 },
    'Charge Beam': { zp: 100 },
    'Circle Throw': { zp: 120 },
    'Clear Smog': { zp: 100 },
    'Close Combat': { zp: 190 },
    Confusion: { zp: 100 },
    Counter: { zp: 100 },
    Covet: { zp: 120 },
    Crabhammer: { zp: 180 },
    'Cross Chop': { zp: 180 },
    'Cross Poison': { zp: 140 },
    Crunch: { zp: 160 },
    'Crush Claw': { zp: 140 },
    Cut: { zp: 100 },
    'Dark Pulse': { zp: 160 },
    'Dazzling Gleam': { zp: 160 },
    Dig: { zp: 160 },
    'Disarming Voice': { zp: 100 },
    Discharge: { zp: 160 },
    Dive: { zp: 160 },
    'Doom Desire': { zp: 200 },
    'Double-Edge': { zp: 190 },
    'Double Hit': { zp: 140 },
    'Double Kick': { zp: 100 },
    'Draco Meteor': { zp: 195 },
    'Dragon Breath': { zp: 120 },
    'Dragon Claw': { zp: 160 },
    'Dragon Pulse': { zp: 160 },
    'Dragon Rush': { zp: 180 },
    'Dragon Tail': { zp: 120 },
    'Draining Kiss': { zp: 100 },
    'Drain Punch': { zp: 140 },
    'Dream Eater': { zp: 180 },
    'Drill Peck': { zp: 160 },
    'Drill Run': { zp: 160 },
    'Dual Chop': { zp: 100 },
    'Dynamic Punch': { zp: 180 },
    'Earth Power': { zp: 175 },
    Earthquake: { zp: 180 },
    'Echoed Voice': { zp: 100 },
    'Electro Ball': { zp: 160 },
    Electroweb: { zp: 100 },
    Ember: { zp: 100 },
    Endeavor: { zp: 160 },
    'Energy Ball': { zp: 175 },
    Eruption: { zp: 200 },
    Explosion: { zp: 200 },
    Extrasensory: { zp: 160 },
    'Extreme Speed': { zp: 160 },
    Facade: { zp: 140 },
    'Fairy Wind': { zp: 100 },
    'Fake Out': { zp: 100 },
    'False Swipe': { zp: 100 },
    Feint: { zp: 100 },
    'Fell Stinger': { bp: 50, zp: 100 },
    'Final Gambit': { zp: 180 },
    'Fire Blast': { zp: 185 },
    'Fire Fang': { zp: 120 },
    'Fire Pledge': { zp: 160 },
    'Fire Punch': { zp: 140 },
    'Fire Spin': { zp: 100 },
    Fissure: { zp: 180 },
    Flail: { zp: 160 },
    'Flame Charge': { zp: 100 },
    'Flame Wheel': { zp: 120 },
    Flamethrower: { zp: 175 },
    'Flare Blitz': { zp: 190 },
    'Flash Cannon': { zp: 160 },
    Fling: { zp: 100 },
    Fly: { zp: 175 },
    'Flying Press': { bp: 100, zp: 170 },
    'Focus Blast': { zp: 190 },
    'Focus Punch': { zp: 200 },
    'Force Palm': { zp: 120 },
    'Foul Play': { zp: 175 },
    'Freeze-Dry': { zp: 140 },
    'Freeze Shock': { zp: 200 },
    'Frenzy Plant': { zp: 200 },
    'Frost Breath': { zp: 120 },
    'Fury Attack': { zp: 100 },
    'Fury Cutter': { zp: 100 },
    'Fury Swipes': { zp: 100 },
    'Fusion Bolt': { zp: 180 },
    'Fusion Flare': { zp: 180 },
    'Future Sight': { zp: 190 },
    'Gear Grind': { zp: 180 },
    'Giga Drain': { zp: 140 },
    'Giga Impact': { zp: 200 },
    Glaciate: { zp: 120 },
    'Grass Pledge': { zp: 160 },
    Guillotine: { zp: 180 },
    'Gunk Shot': { zp: 190 },
    Gust: { zp: 100 },
    'Gyro Ball': { zp: 160 },
    'Hammer Arm': { zp: 180 },
    Headbutt: { zp: 140 },
    'Head Smash': { zp: 200 },
    'Heat Wave': { zp: 175 },
    Hex: { zp: 160 },
    'High Jump Kick': { zp: 195 },
    'Hold Back': { zp: 100 },
    'Horn Attack': { zp: 120 },
    'Horn Drill': { zp: 180 },
    'Horn Leech': { zp: 140 },
    'Hydro Cannon': { zp: 200 },
    'Hydro Pump': { zp: 185 },
    'Hyper Beam': { zp: 200 },
    'Hyper Voice': { zp: 175 },
    'Ice Beam': { zp: 175 },
    'Ice Burn': { zp: 200 },
    'Ice Fang': { zp: 120 },
    'Ice Punch': { zp: 140 },
    'Ice Shard': { zp: 100 },
    'Icicle Crash': { zp: 160 },
    'Icicle Spear': { zp: 140 },
    'Icy Wind': { zp: 100 },
    Incinerate: { zp: 120 },
    Inferno: { zp: 180 },
    Infestation: { zp: 100 },
    'Iron Head': { zp: 160 },
    'Iron Tail': { zp: 180 },
    'Last Resort': { zp: 200 },
    'Lava Plume': { zp: 160 },
    'Leaf Blade': { zp: 175 },
    'Leaf Storm': { zp: 195 },
    'Leaf Tornado': { zp: 120 },
    'Leech Life': { bp: 80, zp: 160 },
    Lick: { zp: 100 },
    'Low Sweep': { zp: 120 },
    'Mach Punch': { zp: 100 },
    'Magical Leaf': { zp: 120 },
    'Mega Drain': { zp: 120 },
    Megahorn: { zp: 190 },
    'Mega Kick': { zp: 190 },
    'Mega Punch': { zp: 160 },
    'Metal Burst': { zp: 100 },
    'Metal Claw': { zp: 100 },
    'Meteor Mash': { zp: 175 },
    'Mirror Coat': { zp: 100 },
    Moonblast: { zp: 175 },
    'Mud Shot': { zp: 100 },
    'Mud-Slap': { zp: 100 },
    'Muddy Water': { zp: 175 },
    'Mystical Fire': { bp: 75, zp: 140 },
    'Night Daze': { zp: 160 },
    'Night Shade': { zp: 100 },
    'Night Slash': { zp: 140 },
    Nuzzle: { zp: 100 },
    Octazooka: { zp: 120 },
    Outrage: { zp: 190 },
    Overheat: { zp: 195 },
    'Paleo Wave': { zp: 160 },
    'Parabolic Charge': { bp: 65, zp: 120 },
    Payback: { zp: 100 },
    'Pay Day': { zp: 100 },
    Peck: { zp: 100 },
    'Petal Blizzard': { zp: 175 },
    'Petal Dance': { zp: 190 },
    'Phantom Force': { zp: 175 },
    'Pin Missile': { zp: 140 },
    'Play Rough': { zp: 175 },
    Pluck: { zp: 120 },
    'Poison Fang': { zp: 100 },
    'Poison Jab': { zp: 160 },
    'Poison Sting': { zp: 100 },
    'Poison Tail': { zp: 100 },
    Pound: { zp: 100 },
    'Powder Snow': { zp: 100 },
    'Power Gem': { zp: 160 },
    'Power-Up Punch': { zp: 100 },
    'Power Whip': { zp: 190 },
    Present: { zp: 100 },
    Psybeam: { zp: 120 },
    Psychic: { zp: 175 },
    'Psycho Cut': { zp: 140 },
    Psyshock: { zp: 160 },
    Psystrike: { zp: 180 },
    'Quick Attack': { zp: 100 },
    'Razor Leaf': { zp: 100 },
    'Razor Shell': { zp: 140 },
    Retaliate: { zp: 140 },
    Revenge: { zp: 120 },
    Reversal: { zp: 160 },
    'Rock Blast': { isBullet: true, zp: 140 },
    'Rock Slide': { zp: 140 },
    'Rock Smash': { zp: 100 },
    'Rock Throw': { zp: 100 },
    'Rock Tomb': { zp: 120 },
    'Rock Wrecker': { zp: 200 },
    Rollout: { zp: 100 },
    Round: { zp: 120 },
    'Sacred Sword': { zp: 175 },
    'Sand Tomb': { zp: 100 },
    Scald: { zp: 160 },
    Scratch: { zp: 100 },
    'Secret Sword': { zp: 160 },
    'Seed Bomb': { zp: 160 },
    'Seismic Toss': { zp: 100 },
    'Self-Destruct': { zp: 200 },
    'Shadow Ball': { zp: 160 },
    'Shadow Claw': { zp: 140 },
    'Shadow Punch': { zp: 120 },
    'Shadow Sneak': { zp: 100 },
    'Shadow Strike': { zp: 160 },
    'Sheer Cold': { zp: 180 },
    'Shock Wave': { zp: 120 },
    'Skull Bash': { zp: 195 },
    'Sky Attack': { zp: 200 },
    Slam: { zp: 160 },
    Slash: { zp: 140 },
    Sludge: { zp: 120 },
    'Sludge Bomb': { zp: 175 },
    'Sludge Wave': { zp: 175 },
    'Smack Down': { zp: 100 },
    Smog: { zp: 100 },
    Snarl: { zp: 100 },
    Snore: { zp: 100 },
    Spark: { zp: 120 },
    'Spit Up': { zp: 100 },
    'Steel Wing': { zp: 140 },
    Stomp: { zp: 120 },
    'Stone Edge': { zp: 180 },
    'Stored Power': { zp: 160 },
    'Storm Throw': { zp: 120 },
    Strength: { zp: 160 },
    'Struggle Bug': { zp: 100 },
    Submission: { zp: 160 },
    'Sucker Punch': { bp: 70, zp: 140 },
    'Super Fang': { zp: 100 },
    Superpower: { zp: 190 },
    Surf: { zp: 175 },
    Swift: { zp: 120 },
    Tackle: { bp: 40, zp: 100 },
    'Tail Slap': { zp: 140 },
    'Take Down': { zp: 175 },
    Thief: { zp: 120 },
    Thrash: { zp: 190 },
    Thunderbolt: { zp: 175 },
    'Thunder Fang': { zp: 120 },
    'Thunder Punch': { zp: 140 },
    'Thunder Shock': { zp: 100 },
    'Tri Attack': { zp: 160 },
    'Triple Kick': { zp: 120 },
    Twister: { zp: 100 },
    'U-turn': { zp: 140 },
    Uproar: { zp: 175 },
    'Vacuum Wave': { zp: 100 },
    'V-create': { zp: 220 },
    Venoshock: { zp: 120 },
    'Vine Whip': { zp: 100 },
    'Vise Grip': { zp: 100 },
    'Vital Throw': { zp: 140 },
    'Volt Switch': { zp: 140 },
    'Volt Tackle': { zp: 190 },
    Waterfall: { zp: 160 },
    'Water Gun': { zp: 100 },
    'Water Pledge': { zp: 160 },
    'Water Pulse': { zp: 120 },
    'Water Shuriken': { category: 'Special', zp: 100 },
    'Water Spout': { zp: 200 },
    'Weather Ball': { zp: 160 },
    Whirlpool: { zp: 100 },
    'Wild Charge': { zp: 175 },
    'Wing Attack': { zp: 120 },
    'Wood Hammer': { zp: 190 },
    Wrap: { zp: 100 },
    'X-Scissor': { zp: 160 },
    'Zap Cannon': { zp: 190 },
    'Zen Headbutt': { zp: 160 },
    '10,000,000 Volt Thunderbolt': { bp: 195, type: 'Electric', category: 'Special', isZ: true },
    'Acid Downpour': { bp: 1, type: 'Poison', category: 'Physical', isZ: true },
    'All-Out Pummeling': { bp: 1, type: 'Fighting', category: 'Physical', isZ: true },
    'Baddy Bad': { bp: 90, type: 'Dark', category: 'Special', zp: 175 },
    'Baneful Bunker': { bp: 0, type: 'Poison', priority: 4 },
    'Beak Blast': {
        bp: 100,
        type: 'Flying',
        category: 'Physical',
        isBullet: true,
        zp: 180
    },
    'Black Hole Eclipse': { bp: 1, type: 'Dark', category: 'Physical', isZ: true },
    'Bloom Doom': { bp: 1, type: 'Grass', category: 'Physical', isZ: true },
    'Bouncy Bubble': {
        bp: 90,
        type: 'Water',
        drain: [1, 2],
        category: 'Special',
        zp: 175
    },
    'Breakneck Blitz': { bp: 1, type: 'Normal', category: 'Physical', isZ: true },
    'Buzzy Buzz': {
        bp: 90,
        type: 'Electric',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    Catastropika: {
        bp: 210,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Clangorous Soulblaze': {
        bp: 185,
        type: 'Dragon',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Continental Crush': { bp: 1, type: 'Rock', category: 'Physical', isZ: true },
    'Core Enforcer': {
        bp: 100,
        type: 'Dragon',
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 140
    },
    'Corkscrew Crash': { bp: 1, type: 'Steel', category: 'Physical', isZ: true },
    'Devastating Drake': { bp: 1, type: 'Dragon', category: 'Physical', isZ: true },
    'Double Iron Bash': {
        bp: 60,
        type: 'Steel',
        multihit: 2,
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true,
        zp: 180
    },
    'Dragon Hammer': {
        bp: 90,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Extreme Evoboost': { bp: 0, type: 'Normal', isZ: true },
    'Fleur Cannon': {
        bp: 130,
        type: 'Fairy',
        self: { boosts: { spa: -2 } },
        category: 'Special',
        zp: 195
    },
    'Floral Healing': { bp: 0, type: 'Fairy' },
    'Freezy Frost': { bp: 90, type: 'Ice', category: 'Special', zp: 175 },
    'Genesis Supernova': {
        bp: 185,
        type: 'Psychic',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Gigavolt Havoc': { bp: 1, type: 'Electric', category: 'Physical', isZ: true },
    'Glitzy Glow': { bp: 90, type: 'Psychic', category: 'Special', zp: 175 },
    'Guardian of Alola': { bp: 0, type: 'Fairy', category: 'Special', isZ: true },
    'Hydro Vortex': { bp: 1, type: 'Water', category: 'Physical', isZ: true },
    'Ice Hammer': {
        bp: 100,
        type: 'Ice',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        zp: 180
    },
    'Inferno Overdrive': { bp: 1, type: 'Fire', category: 'Physical', isZ: true },
    Instruct: { bp: 0, type: 'Psychic' },
    'Let\'s Snuggle Forever': {
        bp: 190,
        type: 'Fairy',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Light That Burns the Sky': {
        bp: 200,
        type: 'Psychic',
        category: 'Special',
        isZ: true
    },
    'Malicious Moonsault': {
        bp: 180,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Menacing Moonraze Maelstrom': { bp: 200, type: 'Ghost', category: 'Special', isZ: true },
    'Mind Blown': {
        bp: 150,
        type: 'Fire',
        mindBlownRecoil: true,
        target: 'allAdjacent',
        category: 'Special',
        zp: 200
    },
    'Multi-Attack': {
        bp: 90,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        zp: 185
    },
    'Nature\'s Madness': { bp: 0, type: 'Fairy', category: 'Special', zp: 100 },
    'Never-Ending Nightmare': { bp: 1, type: 'Ghost', category: 'Physical', isZ: true },
    'Oceanic Operetta': { bp: 195, type: 'Water', category: 'Special', isZ: true },
    'Psychic Terrain': { bp: 0, type: 'Psychic' },
    'Pulverizing Pancake': {
        bp: 210,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Revelation Dance': { bp: 90, type: 'Normal', category: 'Special', zp: 175 },
    'Sappy Seed': { bp: 90, type: 'Grass', category: 'Physical', zp: 175 },
    'Savage Spin-Out': { bp: 1, type: 'Bug', category: 'Physical', isZ: true },
    'Searing Sunraze Smash': {
        bp: 200,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Shadow Bone': {
        bp: 85,
        type: 'Ghost',
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Shattered Psyche': { bp: 1, type: 'Psychic', category: 'Physical', isZ: true },
    'Shore Up': { bp: 0, type: 'Ground' },
    'Sinister Arrow Raid': { bp: 180, type: 'Ghost', category: 'Physical', isZ: true },
    'Sizzly Slide': {
        bp: 90,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 175
    },
    'Solar Blade': {
        bp: 125,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        zp: 190
    },
    'Soul-Stealing 7-Star Strike': {
        bp: 195,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Sparkly Swirl': { bp: 90, type: 'Fairy', category: 'Special', zp: 175 },
    'Splintered Stormshards': { bp: 190, type: 'Rock', category: 'Physical', isZ: true },
    Spotlight: { bp: 0, type: 'Normal', priority: 3 },
    'Stoked Sparksurfer': {
        bp: 175,
        type: 'Electric',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Subzero Slammer': { bp: 1, type: 'Ice', category: 'Physical', isZ: true },
    'Supersonic Skystrike': { bp: 1, type: 'Flying', category: 'Physical', isZ: true },
    'Tectonic Rage': { bp: 1, type: 'Ground', category: 'Physical', isZ: true },
    'Throat Chop': {
        bp: 80,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Toxic Thread': { bp: 0, type: 'Poison' },
    'Twinkle Tackle': { bp: 1, type: 'Fairy', category: 'Physical', isZ: true },
    'Zippy Zap': {
        bp: 50,
        type: 'Electric',
        willCrit: true,
        priority: 2,
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    Accelerock: {
        bp: 40,
        type: 'Rock',
        priority: 1,
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    'Anchor Shot': {
        bp: 80,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Aurora Veil': { bp: 0, type: 'Ice' },
    'Brutal Swing': {
        bp: 60,
        type: 'Dark',
        makesContact: true,
        target: 'allAdjacent',
        category: 'Physical',
        zp: 120
    },
    'Burn Up': { bp: 130, type: 'Fire', category: 'Special', zp: 195 },
    'Clanging Scales': {
        bp: 110,
        type: 'Dragon',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 185
    },
    'Darkest Lariat': {
        bp: 85,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true,
        zp: 160
    },
    'Fire Lash': {
        bp: 80,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'First Impression': {
        bp: 90,
        type: 'Bug',
        priority: 2,
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Floaty Fall': {
        bp: 90,
        type: 'Flying',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 175
    },
    'Gear Up': { bp: 0, type: 'Steel' },
    'High Horsepower': {
        bp: 95,
        type: 'Ground',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Laser Focus': { bp: 0, type: 'Normal' },
    Leafage: { bp: 40, type: 'Grass', category: 'Physical', zp: 100 },
    Liquidation: {
        bp: 85,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    Lunge: {
        bp: 80,
        type: 'Bug',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Moongeist Beam': { bp: 100, type: 'Ghost', category: 'Special', zp: 180 },
    'Photon Geyser': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        zp: 180
    },
    'Pika Papow': { bp: 0, type: 'Electric', category: 'Special', zp: 100 },
    'Plasma Fists': {
        bp: 100,
        type: 'Electric',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        zp: 180
    },
    'Pollen Puff': {
        bp: 90,
        type: 'Bug',
        category: 'Special',
        isBullet: true,
        zp: 175
    },
    'Power Trip': {
        bp: 20,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        zp: 160
    },
    'Prismatic Laser': { bp: 160, type: 'Psychic', category: 'Special', zp: 200 },
    'Psychic Fangs': {
        bp: 85,
        type: 'Psychic',
        makesContact: true,
        isBite: true,
        category: 'Physical',
        zp: 160
    },
    Purify: { bp: 0, type: 'Poison' },
    'Shell Trap': {
        bp: 150,
        type: 'Fire',
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 200
    },
    'Smart Strike': {
        bp: 70,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 140
    },
    'Sparkling Aria': {
        bp: 90,
        type: 'Water',
        isSound: true,
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    'Spectral Thief': {
        bp: 90,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Speed Swap': { bp: 0, type: 'Psychic' },
    'Spirit Shackle': {
        bp: 80,
        type: 'Ghost',
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Splishy Splash': {
        bp: 90,
        type: 'Water',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    'Stomping Tantrum': {
        bp: 75,
        type: 'Ground',
        makesContact: true,
        category: 'Physical',
        zp: 140
    },
    'Strength Sap': { bp: 0, type: 'Grass' },
    'Sunsteel Strike': {
        bp: 100,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 180
    },
    'Tearful Look': { bp: 0, type: 'Normal' },
    'Trop Kick': {
        bp: 70,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 140
    },
    'Veevee Volley': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    'Zing Zap': {
        bp: 80,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {
    '(No Move)': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal'
    },
    'Absorb': {
        'bp': 35,
        'type': 'Grass',
        'drain': [
            1,
            2
        ],
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Acid': {
        'bp': 40,
        'type': 'Poison',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Amnesia': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Aurora Beam': {
        'bp': 65,
        'type': 'Ice',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Barrage': {
        'bp': 25,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'isBullet': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Bide': {
        'bp': 1,
        'type': 'Normal',
        'makesContact': true,
        'priority': 1,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'acc': 0
    },
    'Bind': {
        'bp': 25,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 85
    },
    'Bite': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Blizzard': {
        'bp': 110,
        'type': 'Ice',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 10,
        'priority': 0,
        'acc': 80,
        isWeather: true
    },
    'Bonemerang': {
        'bp': 50,
        'type': 'Ground',
        'multihit': 2,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isBone': true,
        'acc': 100
    },
    'Bubble': {
        'bp': 40,
        'type': 'Water',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Bubble Beam': {
        'bp': 65,
        'type': 'Water',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Clamp': {
        'bp': 60,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 85
    },
    'Comet Punch': {
        'bp': 25,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 1,
        'acc': 100
    },
    'Constrict': {
        'bp': 55,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Conversion': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Counter': {
        'bp': 1,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 75,
        'chance': 0,
        'priority': -5,
        'acc': 100
    },
    'Crabhammer': {
        'bp': 100,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Defense Curl': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Dig': {
        'bp': 110,
        'type': 'Ground',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Disable': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dizzy Punch': {
        'bp': 70,
        'type': 'Normal',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Double-Edge': {
        'bp': 120,
        'type': 'Normal',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Double Kick': {
        'bp': 30,
        'type': 'Fighting',
        'multihit': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 80,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Double Slap': {
        'bp': 25,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dragon Rage': {
        'bp': 1,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dream Eater': {
        'bp': 120,
        'type': 'Psychic',
        'drain': [
            1,
            2
        ],
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Earthquake': {
        'bp': 100,
        'type': 'Ground',
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Explosion': {
        'bp': 250,
        'type': 'Normal',
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Fire Blast': {
        'bp': 110,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 20,
        'priority': 0,
        'acc': 85
    },
    'Fire Spin': {
        'bp': 50,
        'type': 'Fire',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 90
    },
    'Fissure': {
        'bp': 120,
        'type': 'Ground',
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'target': 'allAdjacentFoes',
        'acc': 85
    },
    'Fly': {
        'bp': 110,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Focus Energy': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Fury Attack': {
        'bp': 25,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 100
    },
    'Fury Swipes': {
        'bp': 20,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Glare': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Growth': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Guillotine': {
        'bp': 120,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 80
    },
    'Gust': {
        'bp': 60,
        'type': 'Flying',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Haze': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ice',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'High Jump Kick': {
        'bp': 130,
        'type': 'Fighting',
        'hasCrashDamage': true,
        'makesContact': true,
        'category': 'Physical',
        'zp': 195,
        'maxPower': 95,
        'chance': 0,
        'priority': 0,
        'recoil': [
            33,
            100
        ],
        'isKick': true,
        'acc': 90
    },
    'Horn Drill': {
        'bp': 120,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'ignoreDefensive': true,
        'acc': 90
    },
    'Hyper Beam': {
        'bp': 150,
        'type': 'Normal',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 90
    },
    'Jump Kick': {
        'bp': 100,
        'type': 'Fighting',
        'hasCrashDamage': true,
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'recoil': [
            33,
            100
        ],
        'isKick': true,
        'acc': 95
    },
    'Karate Chop': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 75,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Leech Seed': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Light Screen': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Metronome': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mimic': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Minimize': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mirror Move': {
        'bp': 0,
        'category': 'Status',
        'type': 'Flying',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mist': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ice',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Night Shade': {
        'bp': 1,
        'type': 'Ghost',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Petal Dance': {
        'bp': 120,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Pin Missile': {
        'bp': 25,
        'type': 'Bug',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Poison Sting': {
        'bp': 40,
        'type': 'Poison',
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Psychic': {
        'bp': 90,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Psywave': {
        'bp': 1,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Rage': {
        'bp': 40,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Razor Leaf': {
        'bp': 55,
        'type': 'Grass',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Razor Wind': {
        'bp': 90,
        'type': 'Flying',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Recover': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Reflect': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Rest': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Roar': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': -6,
        'acc': 0
    },
    'Rock Slide': {
        'bp': 75,
        'type': 'Rock',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Rock Throw': {
        'bp': 50,
        'type': 'Rock',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Sand Attack': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ground',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Seismic Toss': {
        'bp': 1,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 75,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Self-Destruct': {
        'bp': 200,
        'type': 'Normal',
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Skull Bash': {
        'bp': 130,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 195,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Slash': {
        'bp': 70,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Sludge': {
        'bp': 65,
        'type': 'Poison',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 85,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Soft-Boiled': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Solar Beam': {
        'bp': 120,
        'type': 'Grass',
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100,
        isWeather: true
    },
    'Sonic Boom': {
        'bp': 1,
        'type': 'Normal',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Spike Cannon': {
        'bp': 25,
        'type': 'Water',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'zp': 120,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Stomp': {
        'bp': 65,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Struggle': {
        'bp': 50,
        'type': 'Normal',
        'recoil': [
            1,
            4
        ],
        'makesContact': true,
        'category': 'Physical',
        'struggleRecoil': true,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Stun Spore': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 75
    },
    'Submission': {
        'bp': 150,
        'type': 'Fighting',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 80
    },
    'Substitute': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Super Fang': {
        'bp': 1,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'isBite': true,
        'acc': 90
    },
    'Swift': {
        'bp': 60,
        'type': 'Normal',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Take Down': {
        'bp': 95,
        'type': 'Normal',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Thrash': {
        'bp': 120,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Thunder': {
        'bp': 110,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 75,
        isWeather: true
    },
    'Thunder Wave': {
        'bp': 0,
        'category': 'Status',
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Transform': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Tri Attack': {
        'bp': 90,
        'type': 'Normal',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Twineedle': {
        'bp': 45,
        'type': 'Bug',
        'multihit': 2,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 50,
        'priority': 0,
        'makesContact': true,
        'acc': 100
    },
    'Whirlwind': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': -6,
        'acc': 0,
        'isAir': true
    },
    'Wing Attack': {
        'bp': 80,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Wrap': {
        'bp': 25,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 95
    },
    'Growl': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Leer': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Low Kick': {
        'bp': 1,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Poison Gas': {
        'bp': 0,
        'category': 'Status',
        'type': 'Poison',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Poison Powder': {
        'bp': 0,
        'category': 'Status',
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'acc': 75
    },
    'Sky Attack': {
        'bp': 140,
        'type': 'Flying',
        'category': 'Physical',
        'secondaries': true,
        'zp': 200,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 90
    },
    'String Shot': {
        'bp': 0,
        'category': 'Status',
        'type': 'Bug',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 95
    },
    'Surf': {
        'bp': 90,
        'type': 'Water',
        'target': 'allAdjacent',
        'category': 'Special',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Tail Whip': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Toxic': {
        'bp': 0,
        'category': 'Status',
        'type': 'Poison',
        'chance': 100,
        'priority': 0,
        'acc': 90
    },
    'Flash': {
        'bp': 60,
        'category': 'Special',
        'type': 'Electric',
        'chance': 50,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Hypnosis': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 60
    },
    'Leech Life': {
        'bp': 80,
        'type': 'Bug',
        'drain': [
            1,
            2
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isBite': true,
        'acc': 100
    },
    'Mega Drain': {
        'bp': 60,
        'type': 'Grass',
        'drain': [
            1,
            2
        ],
        'category': 'Special',
        'zp': 120,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Vine Whip': {
        'bp': 45,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Waterfall': {
        'bp': 85,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Tackle': {
        'bp': 40,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Acid Armor': {
        'bp': 0,
        'category': 'Status',
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Barrier': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Body Slam': {
        'bp': 85,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Flamethrower': {
        'bp': 90,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Hydro Pump': {
        'bp': 110,
        'type': 'Water',
        'category': 'Special',
        'zp': 185,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 80
    },
    'Ice Beam': {
        'bp': 90,
        'type': 'Ice',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Lick': {
        'bp': 60,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Screech': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Sing': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 55
    },
    'Sleep Powder': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 75
    },
    'Smog': {
        'bp': 50,
        'type': 'Poison',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 50,
        'priority': 0,
        'acc': 70
    },
    'Spore': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Supersonic': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 55
    },
    'Swords Dance': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Thunderbolt': {
        'bp': 90,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Bone Club': {
        'bp': 75,
        'type': 'Ground',
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'isBone': true,
        'acc': 95
    },
    'Egg Bomb': {
        'bp': 100,
        'type': 'Fire',
        'category': 'Physical',
        'isBullet': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 90
    },
    'Hyper Fang': {
        'bp': 75,
        'type': 'Normal',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Kinesis': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 80
    },
    'Lovely Kiss': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Meditate': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Rolling Kick': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 80,
        'chance': 30,
        'priority': 0,
        'isKick': true,
        'acc': 85
    },
    'Sharpen': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Teleport': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': -6,
        'acc': 0
    },
    'Agility': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Confuse Ray': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Confusion': {
        'bp': 50,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Cut': {
        'bp': 60,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100,
        'isField': true
    },
    'Double Team': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Drill Peck': {
        'bp': 90,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 100
    },
    'Ember': {
        'bp': 40,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Fire Punch': {
        'bp': 75,
        'type': 'Fire',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Harden': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Headbutt': {
        'bp': 70,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Horn Attack': {
        'bp': 80,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 100
    },
    'Ice Punch': {
        'bp': 75,
        'type': 'Ice',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Mega Kick': {
        'bp': 95,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Mega Punch': {
        'bp': 95,
        'type': 'Normal',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Paleo Wave': {
        'bp': 85,
        'type': 'Rock',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130
    },
    'Pay Day': {
        'bp': 60,
        'type': 'Normal',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Peck': {
        'bp': 25,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 100
    },
    'Pound': {
        'bp': 40,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Psybeam': {
        'bp': 65,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Quick Attack': {
        'bp': 40,
        'type': 'Normal',
        'priority': 1,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Scratch': {
        'bp': 40,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Shadow Strike': {
        'bp': 80,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130
    },
    'Slam': {
        'bp': 90,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Smokescreen': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Splash': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Strength': {
        'bp': 100,
        'type': 'Rock',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Thunder Punch': {
        'bp': 75,
        'type': 'Electric',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Thunder Shock': {
        'bp': 40,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Vise Grip': {
        'bp': 70,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Water Gun': {
        'bp': 40,
        'type': 'Water',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Withdraw': {
        'bp': 0,
        'category': 'Status',
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Aeroblast': {
        'bp': 100,
        'type': 'Flying',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Attract': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Beat Up': {
        'bp': 1,
        'type': 'Dark',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Belly Drum': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Conversion 2': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Cross Chop': {
        'bp': 100,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 80
    },
    'Curse': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Destiny Bond': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Detect': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fighting',
        'priority': 4,
        'chance': 0,
        'acc': 0
    },
    'Encore': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Endure': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'priority': 4,
        'chance': 0,
        'acc': 0
    },
    'Flail': {
        'bp': 1,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Foresight': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Future Sight': {
        'bp': 120,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Heal Bell': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Icy Wind': {
        'bp': 60,
        'type': 'Ice',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Lock-On': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mind Reader': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mirror Coat': {
        'bp': 1,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': -5,
        'acc': 100
    },
    'Moonlight': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Morning Sun': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Nightmare': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Outrage': {
        'bp': 120,
        'type': 'Dragon',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Powder Snow': {
        'bp': 40,
        'type': 'Ice',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Present': {
        'bp': 1,
        'type': 'Normal',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Protect': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'priority': 4,
        'chance': 0,
        'acc': 0
    },
    'Psych Up': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Pursuit': {
        'bp': 50,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Rain Dance': {
        'bp': 0,
        'category': 'Status',
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Reversal': {
        'bp': 1,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Safeguard': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Sandstorm': {
        'bp': 0,
        'category': 'Status',
        'type': 'Rock',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Sketch': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Sleep Talk': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Spikes': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ground',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Spite': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Sunny Day': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fire',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Swagger': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 100,
        'priority': 0,
        'acc': 85
    },
    'Sweet Scent': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Synthesis': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Thief': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Triple Kick': {
        'bp': 25,
        'type': 'Fighting',
        'multihit': 3,
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 80,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 90
    },
    'Twister': {
        'bp': 50,
        'type': 'Dragon',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 20,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Ancient Power': {
        'bp': 60,
        'type': 'Rock',
        'makesContact': true,
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Bone Rush': {
        'bp': 15,
        'type': 'Ground',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 1,
        'isBone': true,
        'acc': 100
    },
    'Crunch': {
        'bp': 80,
        'type': 'Dark',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Feint Attack': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Giga Drain': {
        'bp': 75,
        'type': 'Grass',
        'drain': [
            1,
            2
        ],
        'category': 'Special',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Mean Look': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Rapid Spin': {
        'bp': 60,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'secondaries': true,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Rock Smash': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Spider Web': {
        'bp': 0,
        'category': 'Status',
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Whirlpool': {
        'bp': 40,
        'type': 'Water',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 85,
        'isField': true
    },
    'Zap Cannon': {
        'bp': 120,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 190,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 50
    },
    'Cotton Spore': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Extreme Speed': {
        'bp': 80,
        'type': 'Normal',
        'priority': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'acc': 100
    },
    'Fury Cutter': {
        'bp': 40,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 95
    },
    'Magnitude': {
        'bp': 1,
        'type': 'Ground',
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 140,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Milk Drink': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Scary Face': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Charm': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Hidden Power': {
        'bp': 60,
        'type': 'Normal',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Bug': {
        'bp': 60,
        'type': 'Bug',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Dark': {
        'bp': 60,
        'type': 'Dark',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Dragon': {
        'bp': 60,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Electric': {
        'bp': 60,
        'type': 'Electric',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Fighting': {
        'bp': 60,
        'type': 'Fighting',
        'category': 'Special',
        'zp': 120,
        'maxPower': 80,
        'acc': 100
    },
    'Hidden Power Fire': {
        'bp': 60,
        'type': 'Fire',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Flying': {
        'bp': 60,
        'type': 'Flying',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Ghost': {
        'bp': 60,
        'type': 'Ghost',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Grass': {
        'bp': 60,
        'type': 'Grass',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Ground': {
        'bp': 60,
        'type': 'Ground',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Ice': {
        'bp': 60,
        'type': 'Ice',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Poison': {
        'bp': 60,
        'type': 'Poison',
        'category': 'Special',
        'zp': 120,
        'maxPower': 80,
        'acc': 100
    },
    'Hidden Power Psychic': {
        'bp': 60,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Rock': {
        'bp': 60,
        'type': 'Rock',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Steel': {
        'bp': 60,
        'type': 'Steel',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Hidden Power Water': {
        'bp': 60,
        'type': 'Water',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'acc': 100
    },
    'Perish Song': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Snore': {
        'bp': 50,
        'type': 'Normal',
        'isSound': true,
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Sweet Kiss': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'acc': 75
    },
    'Rollout': {
        'bp': 30,
        'type': 'Rock',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Frustration': {
        'bp': 95,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Return': {
        'bp': 95,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Sacred Fire': {
        'bp': 100,
        'type': 'Fire',
        'category': 'Physical',
        'secondaries': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Baton Pass': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Dragon Breath': {
        'bp': 70,
        'type': 'Dragon',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Dynamic Punch': {
        'bp': 100,
        'type': 'Fighting',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 180,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 50
    },
    'False Swipe': {
        'bp': 80,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Flame Wheel': {
        'bp': 65,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Iron Tail': {
        'bp': 90,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 90
    },
    'Mach Punch': {
        'bp': 40,
        'type': 'Fighting',
        'priority': 1,
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 70,
        'chance': 0,
        'acc': 100
    },
    'Megahorn': {
        'bp': 120,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'ignoreDefensive': true,
        'acc': 85
    },
    'Metal Claw': {
        'bp': 75,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Mud-Slap': {
        'bp': 20,
        'type': 'Ground',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Octazooka': {
        'bp': 100,
        'type': 'Water',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 50
    },
    'Pain Split': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Shadow Ball': {
        'bp': 85,
        'type': 'Ghost',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Sludge Bomb': {
        'bp': 90,
        'type': 'Poison',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 175,
        'maxPower': 90,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Spark': {
        'bp': 65,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Steel Wing': {
        'bp': 90,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 20,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Vital Throw': {
        'bp': 70,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 85,
        'chance': 0,
        'priority': -1,
        'acc': 0
    },
    'Arm Thrust': {
        'bp': 20,
        'type': 'Fighting',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 70,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Assist': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Astonish': {
        'bp': 40,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Block': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Bounce': {
        'bp': 85,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 90
    },
    'Bullet Seed': {
        'bp': 25,
        'type': 'Grass',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'isBullet': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Camouflage': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Charge': {
        'bp': 0,
        'category': 'Status',
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Covet': {
        'bp': 60,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Dive': {
        'bp': 110,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Doom Desire': {
        'bp': 140,
        'type': 'Steel',
        'category': 'Special',
        'zp': 200,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Extrasensory': {
        'bp': 90,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Fake Out': {
        'bp': 40,
        'type': 'Normal',
        'priority': 3,
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'acc': 100
    },
    'Follow Me': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'priority': 2,
        'chance': 0,
        'acc': 100
    },
    'Hail': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ice',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Icicle Spear': {
        'bp': 25,
        'type': 'Ice',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Ingrain': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Knock Off': {
        'bp': 65,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Leaf Blade': {
        'bp': 90,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Magic Coat': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'priority': 4,
        'chance': 0,
        'acc': 100
    },
    'Memento': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Nature Power': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Needle Arm': {
        'bp': 95,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 30,
        'priority': 0,
        'isPunch': true,
        'acc': 100
    },
    'Odor Sleuth': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Overheat': {
        'bp': 130,
        'type': 'Fire',
        'self': {
            'boosts': {
                'spa': -2
            }
        },
        'makesContact': true,
        'category': 'Special',
        'zp': 195,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Revenge': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 80,
        'chance': 0,
        'priority': -4,
        'acc': 100
    },
    'Rock Blast': {
        'bp': 25,
        'type': 'Rock',
        'multihit': [
            2,
            5
        ],
        'category': 'Physical',
        'isBullet': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Role Play': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Sand Tomb': {
        'bp': 50,
        'type': 'Ground',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 85
    },
    'Skill Swap': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Smelling Salts': {
        'bp': 70,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Spit Up': {
        'bp': 1,
        'type': 'Normal',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Stockpile': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Swallow': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Taunt': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Teeter Dance': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'target': 'allAdjacent',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Tickle': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Trick': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Uproar': {
        'bp': 90,
        'type': 'Normal',
        'isSound': true,
        'category': 'Special',
        'zp': 175,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Volt Tackle': {
        'bp': 120,
        'type': 'Electric',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 190,
        'maxPower': 140,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Weather Ball': {
        'bp': 50,
        'type': 'Normal',
        'category': 'Special',
        'isBullet': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true,
        isWeather: true
    },
    'Aromatherapy': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Brick Break': {
        'bp': 85,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Endeavor': {
        'bp': 1,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Focus Punch': {
        'bp': 150,
        'type': 'Fighting',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 200,
        'maxPower': 100,
        'chance': 0,
        'priority': -3,
        'acc': 100
    },
    'Imprison': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Mud Sport': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ground',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Recycle': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Secret Power': {
        'bp': 70,
        'type': 'Normal',
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100,
        'isField': true
    },
    'Sky Uppercut': {
        'bp': 95,
        'type': 'Fighting',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Slack Off': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Snatch': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'priority': 4,
        'chance': 0,
        'acc': 100
    },
    'Tail Glow': {
        'bp': 0,
        'category': 'Status',
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Torment': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Water Sport': {
        'bp': 0,
        'category': 'Status',
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Wish': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Air Cutter': {
        'bp': 70,
        'type': 'Flying',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Facade': {
        'bp': 70,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Grass Whistle': {
        'bp': 0,
        'category': 'Status',
        'type': 'Grass',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 55
    },
    'Heat Wave': {
        'bp': 95,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 90,
        'isAir': true
    },
    'Hyper Voice': {
        'bp': 100,
        'type': 'Normal',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Metal Sound': {
        'bp': 0,
        'category': 'Status',
        'type': 'Steel',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Meteor Mash': {
        'bp': 90,
        'type': 'Steel',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 90
    },
    'Muddy Water': {
        'bp': 90,
        'type': 'Ground',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Poison Fang': {
        'bp': 70,
        'type': 'Poison',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 75,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Rock Tomb': {
        'bp': 60,
        'type': 'Rock',
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Will-O-Wisp': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fire',
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Ice Ball': {
        'bp': 30,
        'type': 'Ice',
        'makesContact': true,
        'category': 'Physical',
        'isBullet': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Sheer Cold': {
        'bp': 100,
        'type': 'Ice',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 80
    },
    'Howl': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Luster Purge': {
        'bp': 95,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Mist Ball': {
        'bp': 95,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Psycho Boost': {
        'bp': 140,
        'type': 'Psychic',
        'self': {
            'boosts': {
                'spa': -2
            }
        },
        'category': 'Special',
        'zp': 200,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Refresh': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Signal Beam': {
        'bp': 75,
        'type': 'Bug',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Silver Wind': {
        'bp': 60,
        'type': 'Bug',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 10,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Aerial Ace': {
        'bp': 60,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 0
    },
    'Blast Burn': {
        'bp': 150,
        'type': 'Fire',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Blaze Kick': {
        'bp': 85,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Bulk Up': {
        'bp': 0,
        'category': 'Status',
        'type': 'Fighting',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Calm Mind': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Cosmic Power': {
        'bp': 0,
        'category': 'Status',
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Crush Claw': {
        'bp': 75,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Dragon Claw': {
        'bp': 80,
        'type': 'Dragon',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Dragon Dance': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dragon',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Eruption': {
        'bp': 150,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Fake Tears': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Feather Dance': {
        'bp': 0,
        'category': 'Status',
        'type': 'Flying',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Flatter': {
        'bp': 0,
        'category': 'Status',
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Frenzy Plant': {
        'bp': 150,
        'type': 'Grass',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 90
    },
    'Grudge': {
        'bp': 0,
        'category': 'Status',
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Helping Hand': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'priority': 5,
        'chance': 0,
        'acc': 100
    },
    'Hydro Cannon': {
        'bp': 150,
        'type': 'Water',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 90
    },
    'Iron Defense': {
        'bp': 0,
        'category': 'Status',
        'type': 'Steel',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Magical Leaf': {
        'bp': 60,
        'type': 'Grass',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mud Shot': {
        'bp': 55,
        'type': 'Ground',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Poison Tail': {
        'bp': 80,
        'type': 'Poison',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 75,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Shadow Punch': {
        'bp': 90,
        'type': 'Ghost',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Shock Wave': {
        'bp': 65,
        'type': 'Electric',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Superpower': {
        'bp': 120,
        'type': 'Fighting',
        'self': {
            'boosts': {
                'atk': -1,
                'def': -1
            }
        },
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 95,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Water Pulse': {
        'bp': 80,
        'type': 'Water',
        'category': 'Special',
        'secondaries': true,
        'isPulse': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Water Spout': {
        'bp': 150,
        'type': 'Water',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Yawn': {
        'bp': 0,
        'category': 'Status',
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Acupressure': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Aqua Ring': {
        'bp': 0,
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Assurance': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Avalanche': {
        'bp': 60,
        'type': 'Ice',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': -4,
        'target': 'allAdjacentFoes',
        'acc': 100
    },
    'Brave Bird': {
        'bp': 120,
        'type': 'Flying',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Bug Bite': {
        'bp': 60,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'isBite': true,
        'acc': 100
    },
    'Chatter': {
        'bp': 90,
        'type': 'Flying',
        'isSound': true,
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Copycat': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Crush Grip': {
        'bp': 1,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Defog': {
        'bp': 0,
        'type': 'Flying',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Double Hit': {
        'bp': 35,
        'type': 'Normal',
        'multihit': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Drain Punch': {
        'bp': 75,
        'type': 'Fighting',
        'drain': [
            1,
            2
        ],
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Embargo': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Feint': {
        'bp': 30,
        'type': 'Normal',
        'priority': 2,
        'breaksProtect': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'acc': 100
    },
    'Fire Fang': {
        'bp': 70,
        'type': 'Fire',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Flare Blitz': {
        'bp': 120,
        'type': 'Fire',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 190,
        'maxPower': 140,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Fling': {
        'bp': 1,
        'type': 'Dark',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Gravity': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Head Smash': {
        'bp': 150,
        'type': 'Rock',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Heal Block': {
        'bp': 0,
        'type': 'Psychic',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Healing Wish': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Heal Order': {
        'bp': 0,
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Last Resort': {
        'bp': 140,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 200,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Lucky Chant': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Lunar Dance': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Magma Storm': {
        'bp': 100,
        'type': 'Fire',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 90
    },
    'Magnet Rise': {
        'bp': 0,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Me First': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Metal Burst': {
        'bp': 0,
        'type': 'Steel',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Miracle Eye': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Natural Gift': {
        'bp': 1,
        'type': 'Normal',
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Payback': {
        'bp': 50,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Pluck': {
        'bp': 60,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'isBite': true,
        'acc': 100
    },
    'Power Trick': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Roost': {
        'bp': 0,
        'type': 'Flying',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Stealth Rock': {
        'bp': 0,
        'type': 'Rock',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Sucker Punch': {
        'bp': 70,
        'type': 'Dark',
        'priority': 1,
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'isPunch': true,
        'acc': 100
    },
    'Switcheroo': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Tailwind': {
        'bp': 0,
        'type': 'Flying',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0,
        'isAir': true
    },
    'Toxic Spikes': {
        'bp': 0,
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Trick Room': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': -7,
        'category': 'Status',
        'acc': 0
    },
    'U-turn': {
        'bp': 70,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Wake-Up Slap': {
        'bp': 80,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 85,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Wood Hammer': {
        'bp': 120,
        'type': 'Grass',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Worry Seed': {
        'bp': 0,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Wring Out': {
        'bp': 0,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Air Slash': {
        'bp': 75,
        'type': 'Flying',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'isSlicing': true,
        'acc': 100,
        'isAir': true
    },
    'Aura Sphere': {
        'bp': 80,
        'type': 'Fighting',
        'category': 'Special',
        'isBullet': true,
        'isPulse': true,
        'zp': 160,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Bug Buzz': {
        'bp': 90,
        'type': 'Bug',
        'isSound': true,
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Draco Meteor': {
        'bp': 130,
        'type': 'Dragon',
        'self': {
            'boosts': {
                'spa': -2
            }
        },
        'category': 'Special',
        'zp': 195,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Dragon Pulse': {
        'bp': 90,
        'type': 'Dragon',
        'category': 'Special',
        'isPulse': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dragon Rush': {
        'bp': 95,
        'type': 'Dragon',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 95
    },
    'Energy Ball': {
        'bp': 90,
        'type': 'Grass',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Gunk Shot': {
        'bp': 120,
        'type': 'Poison',
        'category': 'Physical',
        'secondaries': true,
        'zp': 190,
        'maxPower': 95,
        'chance': 30,
        'priority': 0,
        'isPulse': true,
        'acc': 80
    },
    'Gyro Ball': {
        'bp': 1,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'isBullet': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Leaf Storm': {
        'bp': 130,
        'type': 'Grass',
        'self': {
            'boosts': {
                'spa': -2
            }
        },
        'category': 'Special',
        'zp': 195,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Power Gem': {
        'bp': 90,
        'type': 'Rock',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Psycho Shift': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Shadow Force': {
        'bp': 120,
        'type': 'Ghost',
        'breaksProtect': true,
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dark Void': {
        'bp': 0,
        'type': 'Dark',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 80
    },
    'Gastro Acid': {
        'bp': 0,
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Captivate': {
        'bp': 0,
        'type': 'Normal',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Grass Knot': {
        'bp': 1,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Heart Swap': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Judgment': {
        'bp': 100,
        'type': 'Normal',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Magnet Bomb': {
        'bp': 60,
        'type': 'Steel',
        'category': 'Special',
        'isBullet': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Mirror Shot': {
        'bp': 65,
        'type': 'Steel',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'isPulse': true,
        'acc': 85
    },
    'Mud Bomb': {
        'bp': 65,
        'type': 'Ground',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Ominous Wind': {
        'bp': 60,
        'type': 'Ghost',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 10,
        'priority': 0,
        'target': 'allAdjacentFoes',
        'acc': 100,
        'isAir': true
    },
    'Punishment': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Roar of Time': {
        'bp': 90,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': -6,
        'acc': 100
    },
    'Rock Climb': {
        'bp': 90,
        'type': 'Rock',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 90,
        'isField': true
    },
    'Seed Flare': {
        'bp': 120,
        'type': 'Grass',
        'category': 'Special',
        'secondaries': true,
        'zp': 190,
        'maxPower': 140,
        'chance': 40,
        'priority': 0,
        'acc': 85
    },
    'Spacial Rend': {
        'bp': 100,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Trump Card': {
        'bp': 0,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Aqua Jet': {
        'bp': 40,
        'type': 'Water',
        'priority': 1,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Aqua Tail': {
        'bp': 95,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Attack Order': {
        'bp': 120,
        'type': 'Bug',
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Brine': {
        'bp': 65,
        'type': 'Water',
        'category': 'Special',
        'zp': 120,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Bullet Punch': {
        'bp': 40,
        'type': 'Steel',
        'priority': 1,
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Charge Beam': {
        'bp': 50,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Close Combat': {
        'bp': 120,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 95,
        'chance': 100,
        'priority': 0,
        'isPunch': true,
        'acc': 100
    },
    'Cross Poison': {
        'bp': 90,
        'type': 'Poison',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 85,
        'chance': 10,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Dark Pulse': {
        'bp': 85,
        'type': 'Dark',
        'category': 'Special',
        'secondaries': true,
        'isPulse': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Defend Order': {
        'bp': 0,
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Discharge': {
        'bp': 80,
        'type': 'Electric',
        'target': 'allAdjacent',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Earth Power': {
        'bp': 90,
        'type': 'Ground',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Flash Cannon': {
        'bp': 90,
        'type': 'Steel',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Focus Blast': {
        'bp': 120,
        'type': 'Fighting',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 190,
        'maxPower': 95,
        'chance': 10,
        'priority': 0,
        'isPulse': true,
        'acc': 70
    },
    'Force Palm': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 80,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Giga Impact': {
        'bp': 150,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Guard Swap': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Hammer Arm': {
        'bp': 100,
        'type': 'Fighting',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Ice Fang': {
        'bp': 70,
        'type': 'Ice',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Ice Shard': {
        'bp': 40,
        'type': 'Ice',
        'priority': 1,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Iron Head': {
        'bp': 80,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Lava Plume': {
        'bp': 80,
        'type': 'Fire',
        'target': 'allAdjacent',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Nasty Plot': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Night Slash': {
        'bp': 70,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Poison Jab': {
        'bp': 80,
        'type': 'Poison',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 90,
        'chance': 30,
        'priority': 0,
        'isPunch': true,
        'isHorn': true,
        'acc': 100
    },
    'Power Swap': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Power Whip': {
        'bp': 120,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Psycho Cut': {
        'bp': 70,
        'type': 'Psychic',
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Rock Polish': {
        'bp': 0,
        'type': 'Rock',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Rock Wrecker': {
        'bp': 150,
        'type': 'Rock',
        'category': 'Physical',
        'isBullet': true,
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Seed Bomb': {
        'bp': 90,
        'type': 'Grass',
        'category': 'Physical',
        'isBullet': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Shadow Claw': {
        'bp': 80,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Shadow Sneak': {
        'bp': 40,
        'type': 'Ghost',
        'priority': 1,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Stone Edge': {
        'bp': 100,
        'type': 'Rock',
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 85
    },
    'Thunder Fang': {
        'bp': 70,
        'type': 'Electric',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Vacuum Wave': {
        'bp': 40,
        'type': 'Fighting',
        'priority': 1,
        'category': 'Special',
        'zp': 100,
        'maxPower': 70,
        'chance': 0,
        'isPulse': true,
        'acc': 100
    },
    'X-Scissor': {
        'bp': 90,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Zen Headbutt': {
        'bp': 80,
        'type': 'Psychic',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 95,
        'isField': true
    },
    'Autotomize': {
        'bp': 0,
        'type': 'Steel',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Bestow': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Echoed Voice': {
        'bp': 40,
        'type': 'Normal',
        'powUp': true,
        'isSound': true,
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Electro Ball': {
        'bp': 1,
        'type': 'Electric',
        'category': 'Special',
        'isBullet': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Entrainment': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Final Gambit': {
        'bp': 1,
        'type': 'Fighting',
        'makesContact': false,
        'category': 'Special',
        'zp': 180,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Fire Pledge': {
        'bp': 90,
        'type': 'Fire',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Frost Breath': {
        'bp': 60,
        'type': 'Ice',
        'willCrit': true,
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Grass Pledge': {
        'bp': 90,
        'type': 'Grass',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Heal Pulse': {
        'bp': 0,
        'type': 'Psychic',
        'isPulse': true,
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Heat Crash': {
        'bp': 1,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Hex': {
        'bp': 65,
        'type': 'Ghost',
        'category': 'Special',
        'zp': 160,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Horn Leech': {
        'bp': 75,
        'type': 'Grass',
        'drain': [
            1,
            2
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'ignoreDefensive': true,
        'acc': 100
    },
    'Hurricane': {
        'bp': 110,
        'type': 'Flying',
        'category': 'Special',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 75,
        'isAir': true,
        isWeather: true
    },
    'Incinerate': {
        'bp': 60,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Low Sweep': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 85,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Magic Room': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Quick Guard': {
        'bp': 0,
        'type': 'Fighting',
        'priority': 3,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Rage Powder': {
        'bp': 0,
        'type': 'Bug',
        'priority': 2,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Relic Song': {
        'bp': 85,
        'type': 'Normal',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Round': {
        'bp': 60,
        'type': 'Normal',
        'isSound': true,
        'category': 'Special',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Sacred Sword': {
        'bp': 90,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'ignoreDefensive': true,
        'zp': 175,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Scald': {
        'bp': 80,
        'type': 'Water',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Simple Beam': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Sky Drop': {
        'bp': 60,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Snarl': {
        'bp': 55,
        'type': 'Dark',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Soak': {
        'bp': 0,
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Steamroller': {
        'bp': 65,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Storm Throw': {
        'bp': 60,
        'type': 'Fighting',
        'willCrit': true,
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 80,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Struggle Bug': {
        'bp': 50,
        'type': 'Bug',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Synchronoise': {
        'bp': 120,
        'type': 'Psychic',
        'target': 'allAdjacent',
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Techno Blast': {
        'bp': 120,
        'type': 'Normal',
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Telekinesis': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Water Pledge': {
        'bp': 90,
        'type': 'Water',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Wide Guard': {
        'bp': 0,
        'type': 'Rock',
        'priority': 3,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Wonder Room': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Ally Switch': {
        'bp': 0,
        'type': 'Psychic',
        'priority': 2,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Flame Burst': {
        'bp': 70,
        'type': 'Fire',
        'category': 'Special',
        'zp': 140,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Heavy Slam': {
        'bp': 1,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Reflect Type': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Volt Switch': {
        'bp': 70,
        'type': 'Electric',
        'category': 'Special',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Chip Away': {
        'bp': 75,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'ignoreDefensive': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Fiery Dance': {
        'bp': 80,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Head Charge': {
        'bp': 120,
        'type': 'Normal',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Heart Stamp': {
        'bp': 60,
        'type': 'Psychic',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Quash': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Searing Shot': {
        'bp': 100,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Acid Spray': {
        'bp': 40,
        'type': 'Poison',
        'category': 'Special',
        'secondaries': true,
        'isBullet': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Acrobatics': {
        'bp': 55,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'After You': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Blue Flare': {
        'bp': 130,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 195,
        'maxPower': 140,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Bolt Strike': {
        'bp': 130,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 195,
        'maxPower': 140,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Bulldoze': {
        'bp': 60,
        'type': 'Ground',
        'target': 'allAdjacent',
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Circle Throw': {
        'bp': 60,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 80,
        'chance': 0,
        'priority': -6,
        'acc': 100
    },
    'Clear Smog': {
        'bp': 50,
        'type': 'Poison',
        'category': 'Special',
        'zp': 100,
        'maxPower': 75,
        'chance': 100,
        'priority': 0,
        'acc': 0
    },
    'Coil': {
        'bp': 0,
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Cotton Guard': {
        'bp': 0,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Dragon Tail': {
        'bp': 60,
        'type': 'Dragon',
        'makesContact': true,
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': -6,
        'acc': 100
    },
    'Drill Run': {
        'bp': 85,
        'type': 'Ground',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 100
    },
    'Dual Chop': {
        'bp': 45,
        'type': 'Dragon',
        'multihit': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Electroweb': {
        'bp': 55,
        'type': 'Electric',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 100,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Flame Charge': {
        'bp': 50,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 100,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Foul Play': {
        'bp': 95,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'overrideOffensivePokemon': 'target',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Freeze Shock': {
        'bp': 140,
        'type': 'Ice',
        'category': 'Physical',
        'secondaries': true,
        'zp': 200,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 90
    },
    'Fusion Bolt': {
        'bp': 100,
        'type': 'Electric',
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Fusion Flare': {
        'bp': 100,
        'type': 'Fire',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Gear Grind': {
        'bp': 50,
        'type': 'Steel',
        'multihit': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Glaciate': {
        'bp': 80,
        'type': 'Ice',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Guard Split': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Hone Claws': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Ice Burn': {
        'bp': 140,
        'type': 'Ice',
        'category': 'Special',
        'secondaries': true,
        'zp': 200,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 90
    },
    'Icicle Crash': {
        'bp': 85,
        'type': 'Ice',
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Inferno': {
        'bp': 120,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 50
    },
    'Leaf Tornado': {
        'bp': 65,
        'type': 'Grass',
        'category': 'Special',
        'secondaries': true,
        'zp': 120,
        'maxPower': 120,
        'chance': 50,
        'priority': 0,
        'acc': 90
    },
    'Night Daze': {
        'bp': 85,
        'type': 'Dark',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 40,
        'priority': 0,
        'acc': 95
    },
    'Power Split': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Psyshock': {
        'bp': 80,
        'type': 'Psychic',
        'category': 'Special',
        'overrideDefensiveStat': 'def',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Psystrike': {
        'bp': 100,
        'type': 'Psychic',
        'category': 'Special',
        'overrideDefensiveStat': 'def',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Quiver Dance': {
        'bp': 0,
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Razor Shell': {
        'bp': 75,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 50,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Retaliate': {
        'bp': 75,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Secret Sword': {
        'bp': 85,
        'type': 'Fighting',
        'category': 'Special',
        'overrideDefensiveStat': 'def',
        'zp': 160,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Shell Smash': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Shift Gear': {
        'bp': 0,
        'type': 'Steel',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Sludge Wave': {
        'bp': 95,
        'type': 'Poison',
        'target': 'allAdjacent',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 90,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Smack Down': {
        'bp': 70,
        'type': 'Rock',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Stored Power': {
        'bp': 20,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Tail Slap': {
        'bp': 25,
        'type': 'Normal',
        'multihit': [
            2,
            5
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'V-create': {
        'bp': 180,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'zp': 220,
        'maxPower': 150,
        'chance': 100,
        'priority': 0,
        'acc': 95
    },
    'Venoshock': {
        'bp': 65,
        'type': 'Poison',
        'category': 'Special',
        'zp': 120,
        'maxPower': 85,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Wild Charge': {
        'bp': 90,
        'type': 'Electric',
        'recoil': [
            33,
            100
        ],
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Work Up': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Diamond Storm': {
        'bp': 100,
        'type': 'Rock',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Fell Stinger': {
        'bp': 60,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Flying Press': {
        'bp': 100,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'zp': 170,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Hyperspace Fury': {
        'bp': 100,
        'type': 'Dark',
        'breaksProtect': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 0
    },
    'Hyperspace Hole': {
        'bp': 100,
        'type': 'Ghost',
        'breaksProtect': true,
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 1,
        'acc': 0
    },
    'King\'s Shield': {
        'bp': 0,
        'type': 'Steel',
        'priority': 4,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Misty Terrain': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Mystical Fire': {
        'bp': 80,
        'type': 'Fire',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Parabolic Charge': {
        'bp': 90,
        'type': 'Electric',
        'drain': [
            1,
            2
        ],
        'target': 'allAdjacent',
        'category': 'Special',
        'zp': 120,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Parting Shot': {
        'bp': 0,
        'type': 'Dark',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'isPulse': true,
        'acc': 100
    },
    'Phantom Force': {
        'bp': 90,
        'type': 'Ghost',
        'breaksProtect': true,
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Powder': {
        'bp': 0,
        'type': 'Bug',
        'priority': 1,
        'chance': 0,
        'category': 'Status',
        'acc': 100
    },
    'Spiky Shield': {
        'bp': 0,
        'type': 'Grass',
        'priority': 4,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Thousand Arrows': {
        'bp': 90,
        'type': 'Ground',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Thousand Waves': {
        'bp': 90,
        'type': 'Ground',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Water Shuriken': {
        'bp': 15,
        'type': 'Water',
        'multihit': [
            2,
            5
        ],
        'priority': 1,
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Dragon Ascent': {
        'bp': 120,
        'type': 'Flying',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Electric Terrain': {
        'bp': 0,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Geomancy': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Grassy Terrain': {
        'bp': 0,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Ion Deluge': {
        'bp': 0,
        'type': 'Electric',
        'priority': 1,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Land\'s Wrath': {
        'bp': 90,
        'type': 'Ground',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 185,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Light of Ruin': {
        'bp': 140,
        'type': 'Fairy',
        'recoil': [
            33,
            100
        ],
        'category': 'Special',
        'zp': 200,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Oblivion Wing': {
        'bp': 80,
        'type': 'Flying',
        'drain': [
            3,
            4
        ],
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Origin Pulse': {
        'bp': 110,
        'type': 'Water',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'isPulse': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Precipice Blades': {
        'bp': 130,
        'type': 'Ground',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'makesContact': true,
        'acc': 100
    },
    'Rototiller': {
        'bp': 0,
        'type': 'Ground',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Steam Eruption': {
        'bp': 110,
        'type': 'Water',
        'category': 'Special',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'isPulse': true,
        'acc': 95
    },
    'Aromatic Mist': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Baby-Doll Eyes': {
        'bp': 0,
        'type': 'Fairy',
        'priority': 1,
        'chance': 0,
        'category': 'Status',
        'acc': 100
    },
    'Belch': {
        'bp': 120,
        'type': 'Poison',
        'category': 'Special',
        'zp': 190,
        'maxPower': 95,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Boomburst': {
        'bp': 130,
        'type': 'Normal',
        'isSound': true,
        'target': 'allAdjacent',
        'category': 'Special',
        'zp': 200,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Celebrate': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Confide': {
        'bp': 0,
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Crafty Shield': {
        'bp': 0,
        'type': 'Fairy',
        'priority': 3,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Dazzling Gleam': {
        'bp': 80,
        'type': 'Fairy',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Disarming Voice': {
        'bp': 60,
        'type': 'Fairy',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Draining Kiss': {
        'bp': 75,
        'type': 'Fairy',
        'drain': [
            3,
            4
        ],
        'makesContact': true,
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Eerie Impulse': {
        'bp': 0,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Electrify': {
        'bp': 0,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Fairy Lock': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Fairy Wind': {
        'bp': 40,
        'type': 'Fairy',
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'isAir': true
    },
    'Flower Shield': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Forest\'s Curse': {
        'bp': 0,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Freeze-Dry': {
        'bp': 70,
        'type': 'Ice',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Happy Hour': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Hold Back': {
        'bp': 40,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Hold Hands': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Infestation': {
        'bp': 50,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Special',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Magnetic Flux': {
        'bp': 0,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Mat Block': {
        'bp': 0,
        'type': 'Fighting',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Moonblast': {
        'bp': 95,
        'type': 'Fairy',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Noble Roar': {
        'bp': 0,
        'type': 'Normal',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Nuzzle': {
        'bp': 20,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Petal Blizzard': {
        'bp': 90,
        'type': 'Grass',
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Play Nice': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Play Rough': {
        'bp': 90,
        'type': 'Fairy',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 10,
        'priority': 0,
        'acc': 100
    },
    'Power-Up Punch': {
        'bp': 40,
        'type': 'Fighting',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 100,
        'maxPower': 70,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Sticky Web': {
        'bp': 0,
        'type': 'Bug',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Topsy-Turvy': {
        'bp': 0,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Trick-or-Treat': {
        'bp': 0,
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'category': 'Status'
    },
    'Venom Drench': {
        'bp': 0,
        'type': 'Poison',
        'target': 'allAdjacentFoes',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    '10,000,000 Volt Thunderbolt': {
        'bp': 195,
        'type': 'Electric',
        'category': 'Special',
        'isZ': true,
        'maxPower': 1
    },
    'Acid Downpour': {
        'bp': 1,
        'type': 'Poison',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'All-Out Pummeling': {
        'bp': 1,
        'type': 'Fighting',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Baneful Bunker': {
        'bp': 0,
        'type': 'Poison',
        'priority': 4,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Beak Blast': {
        'bp': 100,
        'type': 'Flying',
        'category': 'Physical',
        'isBullet': true,
        'zp': 180,
        'maxPower': 130,
        'chance': 30,
        'priority': -3,
        'acc': 100
    },
    'Black Hole Eclipse': {
        'bp': 1,
        'type': 'Dark',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Bloom Doom': {
        'bp': 1,
        'type': 'Grass',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Breakneck Blitz': {
        'bp': 1,
        'type': 'Normal',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Catastropika': {
        'bp': 210,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Clangorous Soulblaze': {
        'bp': 185,
        'type': 'Dragon',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'isZ': true,
        'maxPower': 1
    },
    'Continental Crush': {
        'bp': 1,
        'type': 'Rock',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Core Enforcer': {
        'bp': 100,
        'type': 'Dragon',
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Corkscrew Crash': {
        'bp': 1,
        'type': 'Steel',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Devastating Drake': {
        'bp': 1,
        'type': 'Dragon',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Double Iron Bash': {
        'bp': 60,
        'type': 'Steel',
        'multihit': 2,
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 180,
        'maxPower': 140,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Dragon Hammer': {
        'bp': 100,
        'type': 'Dragon',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Extreme Evoboost': {
        'bp': 0,
        'type': 'Normal',
        'isZ': true
    },
    'Fleur Cannon': {
        'bp': 130,
        'type': 'Fairy',
        'self': {
            'boosts': {
                'spa': -2
            }
        },
        'category': 'Special',
        'zp': 195,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Floral Healing': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Genesis Supernova': {
        'bp': 185,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'isZ': true,
        'maxPower': 1
    },
    'Gigavolt Havoc': {
        'bp': 1,
        'type': 'Electric',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Guardian of Alola': {
        'bp': 0,
        'type': 'Fairy',
        'category': 'Special',
        'isZ': true,
        'maxPower': 1
    },
    'Hydro Vortex': {
        'bp': 1,
        'type': 'Water',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Ice Hammer': {
        'bp': 100,
        'type': 'Ice',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Inferno Overdrive': {
        'bp': 1,
        'type': 'Fire',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Instruct': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Let\'s Snuggle Forever': {
        'bp': 190,
        'type': 'Fairy',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Light That Burns the Sky': {
        'bp': 200,
        'type': 'Psychic',
        'category': 'Special',
        'isZ': true,
        'maxPower': 1
    },
    'Malicious Moonsault': {
        'bp': 180,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Menacing Moonraze Maelstrom': {
        'bp': 200,
        'type': 'Ghost',
        'category': 'Special',
        'isZ': true,
        'maxPower': 1
    },
    'Mind Blown': {
        'bp': 150,
        'type': 'Fire',
        'mindBlownRecoil': true,
        'target': 'allAdjacent',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Multi-Attack': {
        'bp': 120,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'zp': 185,
        'maxPower': 95,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Nature\'s Madness': {
        'bp': 1,
        'type': 'Fairy',
        'category': 'Special',
        'zp': 100,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'makesContact': true,
        'acc': 90
    },
    'Never-Ending Nightmare': {
        'bp': 1,
        'type': 'Ghost',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Oceanic Operetta': {
        'bp': 195,
        'type': 'Water',
        'category': 'Special',
        'isZ': true,
        'maxPower': 1
    },
    'Psychic Terrain': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Pulverizing Pancake': {
        'bp': 210,
        'type': 'Normal',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Revelation Dance': {
        'bp': 100,
        'type': 'Normal',
        'category': 'Special',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Savage Spin-Out': {
        'bp': 1,
        'type': 'Bug',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Searing Sunraze Smash': {
        'bp': 200,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Shadow Bone': {
        'bp': 90,
        'type': 'Ghost',
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'isBone': true,
        'acc': 100
    },
    'Shattered Psyche': {
        'bp': 1,
        'type': 'Psychic',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Shore Up': {
        'bp': 0,
        'type': 'Ground',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Sinister Arrow Raid': {
        'bp': 180,
        'type': 'Ghost',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Solar Blade': {
        'bp': 125,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Soul-Stealing 7-Star Strike': {
        'bp': 195,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Splintered Stormshards': {
        'bp': 190,
        'type': 'Rock',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Spotlight': {
        'bp': 0,
        'type': 'Normal',
        'priority': 3,
        'chance': 0,
        'category': 'Status',
        'acc': 0
    },
    'Stoked Sparksurfer': {
        'bp': 175,
        'type': 'Electric',
        'category': 'Special',
        'secondaries': true,
        'isZ': true,
        'maxPower': 1
    },
    'Subzero Slammer': {
        'bp': 1,
        'type': 'Ice',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Supersonic Skystrike': {
        'bp': 1,
        'type': 'Flying',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Tectonic Rage': {
        'bp': 1,
        'type': 'Ground',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Throat Chop': {
        'bp': 80,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Toxic Thread': {
        'bp': 0,
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Twinkle Tackle': {
        'bp': 1,
        'type': 'Fairy',
        'category': 'Physical',
        'isZ': true,
        'maxPower': 1
    },
    'Accelerock': {
        'bp': 40,
        'type': 'Rock',
        'priority': 1,
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'acc': 100
    },
    'Anchor Shot': {
        'bp': 80,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Aurora Veil': {
        'bp': 0,
        'type': 'Ice',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Brutal Swing': {
        'bp': 60,
        'type': 'Dark',
        'makesContact': true,
        'target': 'allAdjacent',
        'category': 'Physical',
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Burn Up': {
        'bp': 130,
        'type': 'Fire',
        'category': 'Special',
        'zp': 195,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Clanging Scales': {
        'bp': 110,
        'type': 'Dragon',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 185,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Darkest Lariat': {
        'bp': 95,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'ignoreDefensive': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Fire Lash': {
        'bp': 80,
        'type': 'Fire',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'First Impression': {
        'bp': 90,
        'type': 'Bug',
        'priority': 2,
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'acc': 100
    },
    'Gear Up': {
        'bp': 0,
        'type': 'Steel',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'High Horsepower': {
        'bp': 95,
        'type': 'Ground',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Laser Focus': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Leafage': {
        'bp': 40,
        'type': 'Grass',
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Liquidation': {
        'bp': 85,
        'type': 'Water',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Lunge': {
        'bp': 80,
        'type': 'Bug',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Moongeist Beam': {
        'bp': 100,
        'type': 'Ghost',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Photon Geyser': {
        'bp': 100,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'target': 'allAdjacent',
        'isPulse': true,
        'acc': 100
    },
    'Plasma Fists': {
        'bp': 100,
        'type': 'Electric',
        'makesContact': true,
        'isPunch': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Pollen Puff': {
        'bp': 90,
        'type': 'Bug',
        'category': 'Special',
        'isBullet': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Power Trip': {
        'bp': 20,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Prismatic Laser': {
        'bp': 160,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Psychic Fangs': {
        'bp': 85,
        'type': 'Psychic',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Purify': {
        'bp': 0,
        'type': 'Poison',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Shell Trap': {
        'bp': 150,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': -3,
        'acc': 100
    },
    'Smart Strike': {
        'bp': 70,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'isHorn': true,
        'acc': 0
    },
    'Sparkling Aria': {
        'bp': 100,
        'type': 'Water',
        'isSound': true,
        'target': 'allAdjacent',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Spectral Thief': {
        'bp': 90,
        'type': 'Ghost',
        'makesContact': true,
        'category': 'Physical',
        'zp': 175,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Speed Swap': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Spirit Shackle': {
        'bp': 90,
        'type': 'Ghost',
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Stomping Tantrum': {
        'bp': 75,
        'type': 'Ground',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Strength Sap': {
        'bp': 0,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Sunsteel Strike': {
        'bp': 100,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Tearful Look': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Trop Kick': {
        'bp': 75,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Zing Zap': {
        'bp': 80,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Apple Acid': {
        'bp': 80,
        'type': 'Grass',
        'category': 'Special',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Astral Barrage': {
        'bp': 120,
        'type': 'Ghost',
        'category': 'Special',
        'target': 'allAdjacentFoes',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Aura Wheel': {
        'bp': 110,
        'type': 'Electric',
        'category': 'Physical',
        'secondaries': true,
        'zp': 185,
        'maxPower': 140,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Behemoth Bash': {
        'bp': 100,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Behemoth Blade': {
        'bp': 100,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Body Press': {
        'bp': 80,
        'type': 'Fighting',
        'makesContact': true,
        'category': 'Physical',
        'overrideOffensiveStat': 'def',
        'zp': 160,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Bolt Beak': {
        'bp': 85,
        'type': 'Electric',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Branch Poke': {
        'bp': 40,
        'type': 'Grass',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Breaking Swipe': {
        'bp': 60,
        'type': 'Dragon',
        'makesContact': true,
        'target': 'allAdjacentFoes',
        'category': 'Physical',
        'secondaries': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 100,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Burning Jealousy': {
        'bp': 70,
        'type': 'Fire',
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 50,
        'priority': 0,
        'acc': 100
    },
    'Clangorous Soul': {
        'bp': 0,
        'type': 'Dragon',
        'isSound': true,
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Coaching': {
        'bp': 0,
        'type': 'Fighting',
        'category': 'Status',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Corrosive Gas': {
        'bp': 0,
        'type': 'Poison',
        'category': 'Status',
        'target': 'allAdjacent',
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Court Change': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Decorate': {
        'bp': 0,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Dragon Darts': {
        'bp': 50,
        'type': 'Dragon',
        'multihit': 2,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Dragon Energy': {
        'bp': 150,
        'type': 'Dragon',
        'category': 'Special',
        'target': 'allAdjacentFoes',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Drum Beating': {
        'bp': 80,
        'type': 'Grass',
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Dual Wingbeat': {
        'bp': 45,
        'type': 'Flying',
        'category': 'Physical',
        'makesContact': true,
        'multihit': 2,
        'zp': 100,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 95,
        'isAir': true
    },
    'Dynamax Cannon': {
        'bp': 100,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Eerie Spell': {
        'bp': 80,
        'type': 'Psychic',
        'category': 'Special',
        'isSound': true,
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Eternabeam': {
        'bp': 160,
        'type': 'Dragon',
        'category': 'Special',
        'zp': 200,
        'maxPower': 150,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 90
    },
    'Expanding Force': {
        'bp': 80,
        'type': 'Psychic',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'False Surrender': {
        'bp': 80,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Fiery Wrath': {
        'bp': 95,
        'type': 'Dark',
        'category': 'Special',
        'target': 'allAdjacentFoes',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Fishious Rend': {
        'bp': 85,
        'type': 'Water',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Flip Turn': {
        'bp': 60,
        'type': 'Water',
        'category': 'Physical',
        'makesContact': true,
        'zp': 120,
        'maxPower': 110,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Freezing Glare': {
        'bp': 95,
        'type': 'Psychic',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Glacial Lance': {
        'bp': 130,
        'type': 'Ice',
        'category': 'Physical',
        'target': 'allAdjacentFoes',
        'zp': 195,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'G-Max Befuddle': {
        'bp': 10,
        'type': 'Bug',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Centiferno': {
        'bp': 10,
        'type': 'Fire',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Cannonade': {
        'bp': 10,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Chi Strike': {
        'bp': 10,
        'type': 'Fighting',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Cuddle': {
        'bp': 10,
        'type': 'Normal',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Depletion': {
        'bp': 10,
        'type': 'Dragon',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Drum Solo': {
        'bp': 160,
        'type': 'Grass',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Fireball': {
        'bp': 160,
        'type': 'Fire',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Finale': {
        'bp': 10,
        'type': 'Fairy',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Foam Burst': {
        'bp': 10,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Gold Rush': {
        'bp': 10,
        'type': 'Normal',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Gravitas': {
        'bp': 10,
        'type': 'Psychic',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Hydrosnipe': {
        'bp': 160,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Malodor': {
        'bp': 10,
        'type': 'Poison',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Meltdown': {
        'bp': 10,
        'type': 'Steel',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max One Blow': {
        'bp': 10,
        'type': 'Dark',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Rapid Flow': {
        'bp': 10,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Replenish': {
        'bp': 10,
        'type': 'Normal',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Resonance': {
        'bp': 10,
        'type': 'Ice',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Sandblast': {
        'bp': 10,
        'type': 'Ground',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Smite': {
        'bp': 10,
        'type': 'Fairy',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Snooze': {
        'bp': 10,
        'type': 'Dark',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Steelsurge': {
        'bp': 10,
        'type': 'Steel',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Stonesurge': {
        'bp': 10,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Stun Shock': {
        'bp': 10,
        'type': 'Electric',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Sweetness': {
        'bp': 10,
        'type': 'Grass',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Tartness': {
        'bp': 10,
        'type': 'Grass',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Terror': {
        'bp': 10,
        'type': 'Ghost',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Vine Lash': {
        'bp': 10,
        'type': 'Grass',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Volcalith': {
        'bp': 10,
        'type': 'Rock',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Volt Crash': {
        'bp': 10,
        'type': 'Electric',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Wildfire': {
        'bp': 10,
        'type': 'Fire',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'G-Max Wind Rage': {
        'bp': 10,
        'type': 'Flying',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Grassy Glide': {
        'bp': 70,
        'type': 'Grass',
        'category': 'Physical',
        'makesContact': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Grav Apple': {
        'bp': 80,
        'type': 'Grass',
        'category': 'Physical',
        'secondaries': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Jaw Lock': {
        'bp': 90,
        'type': 'Fighting',
        'makesContact': true,
        'isBite': true,
        'category': 'Physical',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Jungle Healing': {
        'bp': 0,
        'type': 'Grass',
        'category': 'Status',
        'chance': 0,
        'priority': 0,
        'acc': 0
    },
    'Lash Out': {
        'bp': 75,
        'type': 'Dark',
        'makesContact': true,
        'category': 'Physical',
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Life Dew': {
        'bp': 0,
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Magic Powder': {
        'bp': 0,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Max Airstream': {
        'bp': 10,
        'type': 'Flying',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Darkness': {
        'bp': 10,
        'type': 'Dark',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Flare': {
        'bp': 100,
        'type': 'Fire',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Flutterby': {
        'bp': 10,
        'type': 'Bug',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Geyser': {
        'bp': 10,
        'type': 'Water',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Guard': {
        'bp': 0,
        'type': 'Normal',
        'priority': 4,
        'isMax': true
    },
    'Max Hailstorm': {
        'bp': 10,
        'type': 'Ice',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Knuckle': {
        'bp': 10,
        'type': 'Fighting',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Lightning': {
        'bp': 10,
        'type': 'Electric',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Mindstorm': {
        'bp': 10,
        'type': 'Psychic',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Ooze': {
        'bp': 10,
        'type': 'Poison',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Overgrowth': {
        'bp': 10,
        'type': 'Grass',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Phantasm': {
        'bp': 10,
        'type': 'Ghost',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Quake': {
        'bp': 10,
        'type': 'Ground',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Rockfall': {
        'bp': 10,
        'type': 'Rock',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Starfall': {
        'bp': 10,
        'type': 'Fairy',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Steelspike': {
        'bp': 10,
        'type': 'Steel',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Strike': {
        'bp': 10,
        'type': 'Normal',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Max Wyrmwind': {
        'bp': 10,
        'type': 'Dragon',
        'category': 'Physical',
        'isMax': true,
        'maxPower': 1
    },
    'Meteor Assault': {
        'bp': 150,
        'type': 'Fighting',
        'category': 'Physical',
        'zp': 200,
        'maxPower': 100,
        'chance': 0,
        'priority': 0,
        'isSlicing': true,
        'acc': 100
    },
    'Meteor Beam': {
        'bp': 120,
        'type': 'Rock',
        'category': 'Special',
        'zp': 190,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Misty Explosion': {
        'bp': 100,
        'type': 'Fairy',
        'category': 'Special',
        'target': 'allAdjacent',
        'zp': 180,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'No Retreat': {
        'bp': 0,
        'type': 'Fighting',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Obstruct': {
        'bp': 0,
        'type': 'Dark',
        'priority': 4,
        'chance': 0,
        'category': 'Status',
        'acc': 100
    },
    'Octolock': {
        'bp': 0,
        'type': 'Fighting',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 100
    },
    'Overdrive': {
        'bp': 85,
        'type': 'Electric',
        'isSound': true,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Poltergeist': {
        'bp': 110,
        'type': 'Ghost',
        'category': 'Physical',
        'zp': 185,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 90
    },
    'Pyro Ball': {
        'bp': 120,
        'type': 'Fire',
        'category': 'Physical',
        'secondaries': true,
        'isBullet': true,
        'zp': 190,
        'maxPower': 140,
        'chance': 10,
        'priority': 0,
        'isKick': true,
        'acc': 90
    },
    'Rising Voltage': {
        'bp': 70,
        'type': 'Electric',
        'category': 'Special',
        'zp': 140,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Scale Shot': {
        'bp': 25,
        'type': 'Dragon',
        'category': 'Physical',
        'multihit': [
            2,
            5
        ],
        'zp': 140,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Shell Side Arm': {
        'bp': 100,
        'type': 'Poison',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 90,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Snap Trap': {
        'bp': 100,
        'type': 'Steel',
        'makesContact': true,
        'category': 'Physical',
        'zp': 100,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'acc': 85
    },
    'Snipe Shot': {
        'bp': 90,
        'type': 'Water',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Scorching Sands': {
        'bp': 75,
        'type': 'Ground',
        'category': 'Special',
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 30,
        'priority': 0,
        'acc': 100
    },
    'Skitter Smack': {
        'bp': 70,
        'type': 'Bug',
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true,
        'zp': 140,
        'maxPower': 120,
        'chance': 100,
        'priority': 0,
        'acc': 90
    },
    'Spirit Break': {
        'bp': 75,
        'type': 'Fairy',
        'makesContact': true,
        'category': 'Physical',
        'secondaries': true,
        'zp': 140,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 100
    },
    'Steel Beam': {
        'bp': 140,
        'type': 'Steel',
        'mindBlownRecoil': true,
        'category': 'Special',
        'zp': 200,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isPulse': true,
        'acc': 100
    },
    'Steel Roller': {
        'bp': 130,
        'type': 'Steel',
        'category': 'Physical',
        'makesContact': true,
        'zp': 195,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Strange Steam': {
        'bp': 90,
        'type': 'Fairy',
        'category': 'Special',
        'secondaries': true,
        'zp': 175,
        'maxPower': 130,
        'chance': 20,
        'priority': 0,
        'acc': 100
    },
    'Surging Strikes': {
        'bp': 25,
        'type': 'Water',
        'category': 'Physical',
        'makesContact': true,
        'willCrit': true,
        'isPunch': true,
        'multihit': 3,
        'zp': 140,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Terrain Pulse': {
        'bp': 50,
        'type': 'Normal',
        'category': 'Special',
        'isPulse': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Triple Axel': {
        'bp': 20,
        'type': 'Ice',
        'category': 'Physical',
        'makesContact': true,
        'multihit': 3,
        'zp': 120,
        'maxPower': 140,
        'chance': 0,
        'priority': 0,
        'isKick': true,
        'acc': 90
    },
    'Wicked Blow': {
        'bp': 70,
        'type': 'Dark',
        'category': 'Physical',
        'makesContact': true,
        'willCrit': true,
        'isPunch': true,
        'zp': 160,
        'maxPower': 130,
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Stuff Cheeks': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Tar Shot': {
        'bp': 0,
        'type': 'Rock',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'isPulse': true,
        'acc': 100
    },
    'Teatime': {
        'bp': 0,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'category': 'Status',
        'acc': 0
    },
    'Thunder Cage': {
        'bp': 80,
        'type': 'Electric',
        'category': 'Special',
        'zp': 160,
        'maxPower': 130,
        'chance': 100,
        'priority': 0,
        'acc': 90
    },
    'Thunderous Kick': {
        'bp': 95,
        'type': 'Fighting',
        'category': 'Physical',
        'secondaries': true,
        'makesContact': true,
        'zp': 175,
        'maxPower': 90,
        'chance': 100,
        'priority': 0,
        'isKick': true,
        'acc': 100
    },
    'Wave Crash': {
        'bp': 120,
        'type': 'Water',
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'makesContact': true,
        'recoil': [
            33,
            100
        ],
        'chance': 0,
        'priority': 0,
        'acc': 100
    },
    'Deathroll': {
        'bp': 100,
        'type': 'Water',
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'makesContact': true,
        'chance': 20,
        'isBite': true,
        'ignoreDefensive': true,
        'secondaries': true,
        'priority': 0,
        'acc': 95
    },
    'Aqua Fang': {
        'bp': 80,
        'type': 'Water',
        'category': 'Physical',
        'zp': 190,
        'chance': 10,
        'secondaries': true,
        'isBite': true,
        'maxPower': 140,
        'makesContact': true,
        'priority': 0,
        'acc': 100
    },
    'Excalibur': {
        'bp': 120,
        'type': 'Steel',
        'category': 'Physical',
        'zp': 190,
        'maxPower': 140,
        'makesContact': true,
        'isSlicing': true,
        'chance': 0,
        'priority': 0,
        'acc': 80
    },
    'Trick Or Treat': {
        'bp': 0,
        'type': 'Ghost',
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'category': 'Status'
    },
    'Zippy Zap': {
        'bp': 80,
        'type': 'Electric',
        'chance': 100,
        'priority': 2,
        'acc': 100,
        willCrit: true,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true
    },
    'Splishy Splash': {
        'bp': 90,
        'type': 'Water',
        'chance': 30,
        'priority': 0,
        'acc': 100,
        'target': 'allAdjacentFoes',
        'category': 'Special',
        'secondaries': true
    },
    'Floaty Fall': {
        'bp': 90,
        'type': 'Flying',
        'chance': 30,
        'priority': 0,
        'acc': 95,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true
    },
    'Pika Papow': {
        'bp': 1,
        'type': 'Electric',
        'chance': 0,
        'priority': 0,
        'acc': 0,
        'category': 'Special'
    },
    'Bouncy Bubble': {
        'bp': 60,
        'type': 'Water',
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'category': 'Special',
        drain: [1, 1]
    },
    'Buzzy Buzz': {
        'bp': 60,
        'type': 'Electric',
        'chance': 100,
        'priority': 0,
        'acc': 100,
        'category': 'Special'
    },
    'Sizzly Slide': {
        'bp': 60,
        'type': 'Fire',
        'chance': 100,
        'priority': 0,
        'acc': 100,
        'category': 'Physical',
        'makesContact': true
    },
    'Glitzy Glow': {
        'bp': 80,
        'type': 'Psychic',
        'chance': 0,
        'priority': 0,
        'acc': 95,
        'category': 'Special'
    },
    'Baddy Bad': {
        'bp': 80,
        'type': 'Dark',
        'chance': 0,
        'priority': 0,
        'acc': 95,
        'category': 'Special'
    },
    'Sappy Seed': {
        'bp': 100,
        'type': 'Grass',
        'chance': 0,
        'priority': 0,
        'acc': 90,
        'category': 'Physical'
    },
    'Freezy Frost': {
        'bp': 100,
        'type': 'Ice',
        'chance': 0,
        'priority': 0,
        'acc': 90,
        'category': 'Special'
    },
    'Sparkly Swirl': {
        'bp': 120,
        'type': 'Fairy',
        'chance': 0,
        'priority': 0,
        'acc': 85,
        'category': 'Special'
    },
    'Veevee Volley': {
        'bp': 1,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 0,
        'category': 'Physical',
        'makesContact': true
    },
    'Smite': {
        'bp': 120,
        'type': 'Electric',
        'chance': 100,
        'priority': 0,
        'acc': 80,
        'category': 'Physical',
        'makesContact': true
    },
    'Iron Fangs': {
        'bp': 75,
        'type': 'Steel',
        'chance': 10,
        'priority': 0,
        'acc': 95,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true,
        'isBite': true
    },
    'Fairy Fang': {
        'bp': 75,
        'type': 'Fairy',
        'chance': 10,
        'priority': 0,
        'acc': 95,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true,
        'isBite': true
    },
    'Shadow Fang': {
        'bp': 75,
        'type': 'Ghost',
        'chance': 10,
        'priority': 0,
        'acc': 95,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true,
        'isBite': true
    },
    'Seismic Fist': {
        'bp': 90,
        'type': 'Ground',
        'chance': 100,
        'priority': 0,
        'acc': 100,
        'category': 'Physical',
        'makesContact': true
    },
    'Jagged Fang': {
        'bp': 75,
        'type': 'Rock',
        'chance': 10,
        'priority': 0,
        'acc': 95,
        'category': 'Physical',
        'makesContact': true,
        'secondaries': true,
        'isBite': true
    },
    'Burning Ground': {
        'bp': 100,
        'type': 'Fire',
        'chance': 10,
        'priority': 0,
        'acc': 100,
        'category': 'Special',
        'makesContact': true
    },
    'Outburst': {
        'bp': 250,
        'type': 'Normal',
        'chance': 0,
        'priority': 0,
        'acc': 100,
        'target': 'allAdjacent',
        'category': 'Special'
    }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var LGPE_MOVES = [
    'Baddy Bad',
    'Bouncy Bubble',
    'Buzzy Buzz',
    'Freezy Frost',
    'Glitzy Glow',
    'Sappy Seed',
    'Sizzly Slide',
    'Sparkly Swirl',
    'Zippy Zap',
    'Floaty Fall',
    'Pika Papow',
    'Splishy Splash',
    'Veevee Volley',
];
try {
    for (var LGPE_MOVES_1 = __values(LGPE_MOVES), LGPE_MOVES_1_1 = LGPE_MOVES_1.next(); !LGPE_MOVES_1_1.done; LGPE_MOVES_1_1 = LGPE_MOVES_1.next()) {
        var m = LGPE_MOVES_1_1.value;
        delete SS[m];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (LGPE_MOVES_1_1 && !LGPE_MOVES_1_1.done && (_a = LGPE_MOVES_1["return"])) _a.call(LGPE_MOVES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var SV_PATCH = {
    'Aerial Ace': { isSlicing: true },
    'Air Cutter': { isSlicing: true, isWind: true },
    'Air Slash': { isSlicing: true },
    'Behemoth Blade': { isSlicing: true },
    Blizzard: { isWind: true },
    'Cross Poison': { isSlicing: true },
    Cut: { isSlicing: true },
    'Fairy Wind': { isWind: true },
    'Fury Cutter': { isSlicing: true },
    'Glacial Lance': { bp: 120, zp: 190 },
    'Grassy Glide': { bp: 60, zp: 120, maxPower: 110 },
    Gust: { isWind: true },
    'Heat Wave': { isWind: true },
    Hurricane: { isWind: true },
    'Icy Wind': { isWind: true },
    'Leaf Blade': { isSlicing: true },
    'Night Slash': { isSlicing: true },
    'Petal Blizzard': { isWind: true },
    'Psycho Cut': { isSlicing: true },
    'Razor Leaf': { isSlicing: true },
    'Razor Shell': { isSlicing: true },
    'Sacred Sword': { isSlicing: true },
    Sandstorm: { isWind: true },
    Slash: { isSlicing: true },
    'Solar Blade': { isSlicing: true },
    Tailwind: { isWind: true },
    Twister: { isWind: true },
    Whirlwind: { isWind: true },
    'Wicked Blow': { bp: 75, zp: 140 },
    'X-Scissor': { isSlicing: true },
    'Aqua Cutter': {
        bp: 70,
        type: 'Water',
        category: 'Physical',
        zp: 140,
        maxPower: 120,
        isSlicing: true
    },
    'Aqua Step': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        makesContact: true
    },
    'Armor Cannon': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Axe Kick': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        zp: 190,
        maxPower: 95,
        secondaries: true,
        hasCrashDamage: true,
        makesContact: true
    },
    'Barb Barrage': {
        bp: 60,
        type: 'Poison',
        category: 'Physical',
        zp: 120,
        maxPower: 80,
        secondaries: true
    },
    'Bitter Blade': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        zp: 175,
        maxPower: 130,
        makesContact: true,
        isSlicing: true,
        drain: [1, 2]
    },
    'Bitter Malice': {
        bp: 75,
        type: 'Ghost',
        category: 'Special',
        zp: 140,
        maxPower: 130,
        secondaries: true
    },
    'Blazing Torque': {
        bp: 80,
        type: 'Fire',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Bleakwind Storm': {
        bp: 100,
        type: 'Flying',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Ceaseless Edge': {
        bp: 65,
        type: 'Dark',
        category: 'Physical',
        zp: 120,
        maxPower: 120,
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    'Chilling Water': {
        bp: 50,
        type: 'Water',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        secondaries: true
    },
    'Chilly Reception': {
        bp: 0,
        type: 'Ice',
        category: 'Status'
    },
    'Chloroblast': {
        bp: 150,
        type: 'Grass',
        mindBlownRecoil: true,
        category: 'Special',
        zp: 200,
        maxPower: 150
    },
    'Collision Course': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        makesContact: true
    },
    'Combat Torque': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        secondaries: true
    },
    Comeuppance: {
        bp: 0,
        type: 'Dark',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    Doodle: {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Double Shock': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true
    },
    'Dire Claw': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        zp: 160,
        maxPower: 90,
        makesContact: true,
        secondaries: true
    },
    'Electro Drift': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        makesContact: true
    },
    'Esper Wing': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Fillet Away': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Flower Trick': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        willCrit: true,
        zp: 140,
        maxPower: 120
    },
    'Gigaton Hammer': {
        bp: 160,
        type: 'Steel',
        category: 'Physical',
        zp: 200,
        maxPower: 150
    },
    'Glaive Rush': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true
    },
    'Headlong Rush': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true,
        isPunch: true
    },
    'Hydro Steam': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Hyper Drill': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        makesContact: true,
        breaksProtect: true
    },
    'Ice Spinner': {
        bp: 80,
        type: 'Ice',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true
    },
    'Infernal Parade': {
        bp: 60,
        type: 'Ghost',
        category: 'Special',
        zp: 120,
        maxPower: 110,
        secondaries: true
    },
    'Jet Punch': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        zp: 120,
        maxPower: 110,
        makesContact: true,
        isPunch: true,
        priority: 1
    },
    'Kowtow Cleave': {
        bp: 85,
        type: 'Dark',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true,
        isSlicing: true
    },
    'Last Respects': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
        zp: 100,
        maxPower: 100
    },
    'Lumina Crash': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Lunar Blessing': {
        bp: 0,
        type: 'Psychic',
        category: 'Status'
    },
    'Magical Torque': {
        bp: 100,
        type: 'Fairy',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        secondaries: true
    },
    'Make It Rain': {
        bp: 120,
        type: 'Steel',
        category: 'Special',
        zp: 190,
        maxPower: 140,
        target: 'allAdjacentFoes',
        self: { boosts: { spa: -1 } }
    },
    'Mortal Spin': {
        bp: 30,
        type: 'Poison',
        category: 'Physical',
        zp: 100,
        maxPower: 70,
        makesContact: true,
        secondaries: true,
        target: 'allAdjacentFoes'
    },
    'Mountain Gale': {
        bp: 100,
        type: 'Ice',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        secondaries: true
    },
    'Mystical Power': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        zp: 140,
        maxPower: 120,
        secondaries: true
    },
    'Noxious Torque': {
        bp: 100,
        type: 'Poison',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        secondaries: true
    },
    'Order Up': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        isPulse: true
    },
    'Population Bomb': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        makesContact: true,
        isSlicing: true,
        multihit: 10
    },
    Pounce: {
        bp: 50,
        type: 'Bug',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true,
        secondaries: true
    },
    'Power Shift': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Psyblade: {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true,
        isSlicing: true
    },
    'Psyshield Bash': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        zp: 140,
        maxPower: 120,
        makesContact: true,
        secondaries: true
    },
    'Rage Fist': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true,
        isPunch: true
    },
    'Raging Bull': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        zp: 175,
        maxPower: 130,
        makesContact: true
    },
    'Raging Fury': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        zp: 190,
        maxPower: 140
    },
    'Revival Blessing': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Ruination: {
        bp: 0,
        type: 'Dark',
        category: 'Special',
        zp: 100,
        maxPower: 100
    },
    'Salt Cure': {
        bp: 40,
        type: 'Rock',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        secondaries: true
    },
    'Sandsear Storm': {
        bp: 100,
        type: 'Ground',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Shed Tail': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Shelter: {
        bp: 0,
        type: 'Steel',
        category: 'Status'
    },
    'Silk Trap': {
        bp: 0,
        type: 'Bug',
        category: 'Status',
        priority: 4
    },
    Snowscape: {
        bp: 0,
        type: 'Ice',
        category: 'Status'
    },
    'Spicy Extract': {
        bp: 0,
        type: 'Grass',
        category: 'Status'
    },
    'Spin Out': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        makesContact: true
    },
    'Springtide Storm': {
        bp: 100,
        type: 'Fairy',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Stone Axe': {
        bp: 65,
        type: 'Rock',
        category: 'Physical',
        zp: 120,
        maxPower: 120,
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    'Take Heart': {
        bp: 0,
        type: 'Psychic',
        category: 'Status'
    },
    'Tera Blast': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Tidy Up': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Torch Song': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        isSound: true
    },
    Trailblaze: {
        bp: 50,
        type: 'Grass',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        secondaries: true,
        makesContact: true
    },
    'Triple Arrows': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        zp: 175,
        maxPower: 90,
        secondaries: true
    },
    'Triple Dive': {
        bp: 30,
        type: 'Water',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        makesContact: true,
        multihit: 3
    },
    'Twin Beam': {
        bp: 40,
        type: 'Psychic',
        category: 'Special',
        zp: 100,
        maxPower: 90,
        multihit: 2
    },
    'Victory Dance': {
        bp: 0,
        type: 'Fighting',
        category: 'Status'
    },
    'Wave Crash': {
        bp: 120,
        type: 'Water',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true,
        recoil: [33, 100]
    },
    'Wicked Torque': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Wildbolt Storm': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH);
exports.MOVES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Moves = (function () {
    function Moves(gen) {
        this.gen = gen;
    }
    Moves.prototype.get = function (id) {
        return MOVES_BY_ID[this.gen][id];
    };
    Moves.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = MOVES_BY_ID[this.gen];
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
    return Moves;
}());
exports.Moves = Moves;
var Move = (function () {
    function Move(name, data, gen) {
        this.kind = 'Move';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        this.flags = {};
        if (data.makesContact)
            this.flags.contact = 1;
        if (data.isKick)
            this.flags.kick = 1;
        if (data.isHorn)
            this.flags.horn = 1;
        if (data.isBone)
            this.flags.bone = 1;
        if (data.isPunch)
            this.flags.punch = 1;
        if (data.isBite)
            this.flags.bite = 1;
        if (data.isBullet)
            this.flags.bullet = 1;
        if (data.isSound)
            this.flags.sound = 1;
        if (data.isPulse)
            this.flags.pulse = 1;
        if (data.isSlicing)
            this.flags.slicing = 1;
        if (data.isWind)
            this.flags.wind = 1;
        if (data.isField)
            this.flags.field = 1;
        if (data.isAir)
            this.flags.air = 1;
        if (data.isWeather)
            this.flags.weather = 1;
        (0, util_1.assignWithout)(this, data, Move.FLAGS);
        this.basePower = data.bp;
        if (data.zp)
            this.zMove = { basePower: data.zp };
        if (data.maxPower)
            this.maxMove = { basePower: data.maxPower };
        if (!this.category && gen >= 4)
            this.category = 'Status';
        if (this.struggleRecoil)
            delete this.recoil;
    }
    Move.FLAGS = new Set([
        'bp',
        'makesContact',
        'isKick',
        'isHorn',
        'isBone',
        'isPunch',
        'isBite',
        'isBullet',
        'isSound',
        'isPulse',
        'zp',
        'maxPower',
        'isSlicing',
        'isWind',
        'isField',
        'isAir',
        'isWeather',
    ]);
    return Move;
}());
var MOVES_BY_ID = [];
var gen = 0;
try {
    for (var MOVES_1 = __values(exports.MOVES), MOVES_1_1 = MOVES_1.next(); !MOVES_1_1.done; MOVES_1_1 = MOVES_1.next()) {
        var moves = MOVES_1_1.value;
        var map = {};
        for (var move in moves) {
            var data = moves[move];
            var m = new Move(move, data, gen);
            map[m.id] = m;
        }
        MOVES_BY_ID.push(map);
        gen++;
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (MOVES_1_1 && !MOVES_1_1.done && (_b = MOVES_1["return"])) _b.call(MOVES_1);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=moves.js.map