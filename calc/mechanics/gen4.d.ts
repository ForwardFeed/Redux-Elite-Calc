import { Generation } from '../data/interface';
import { Field } from '../field';
import { Move } from '../move';
import { Pokemon } from '../pokemon';
import { Result } from '../result';
export declare function calculateDPP(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field, defenderFriend?: Pokemon): Result;