import * as I from '../data/interface';
export interface MoveData {
    readonly name?: string;
    readonly type: I.TypeName;
    readonly category?: I.MoveCategory;
    readonly secondaries?: boolean;
    readonly target?: I.MoveTarget;
    readonly recoil?: [number, number];
    readonly hasCrashDamage?: boolean;
    readonly mindBlownRecoil?: boolean;
    readonly struggleRecoil?: boolean;
    readonly willCrit?: boolean;
    readonly drain?: [number, number];
    readonly priority?: number;
    readonly self?: I.SelfOrSecondaryEffect | null;
    readonly ignoreDefensive?: boolean;
    readonly ignoreAbility?: boolean;
    readonly overrideOffensiveStat?: I.StatIDExceptHP;
    readonly overrideDefensiveStat?: I.StatIDExceptHP;
    readonly overrideOffensivePokemon?: 'target' | 'source';
    readonly overrideDefensivePokemon?: 'target' | 'source';
    readonly breaksProtect?: boolean;
    readonly isZ?: boolean;
    readonly isMax?: boolean;
    readonly multihit?: number | number[];
    readonly powUp?: boolean;
    readonly acc?: number;
    readonly bp: number;
    readonly zp?: number;
    readonly maxPower?: number;
    readonly chance?: number;
    readonly makesContact?: boolean;
    readonly isKick?: boolean;
    readonly isHorn?: boolean;
    readonly isBone?: boolean;
    readonly isPunch?: boolean;
    readonly isBite?: boolean;
    readonly isBullet?: boolean;
    readonly isSound?: boolean;
    readonly isPulse?: boolean;
    readonly isSlicing?: boolean;
    readonly isWind?: boolean;
    readonly isField?: boolean;
    readonly isAir?: boolean;
    readonly isWeather?: boolean;
}
export declare const MOVES: {
    [name: string]: MoveData;
}[];
export declare class Moves implements I.Moves {
    private readonly gen;
    constructor(gen: I.GenerationNum);
    get(id: I.ID): Move;
    [Symbol.iterator](): Generator<Move, void, unknown>;
}
declare class Move implements I.Move {
    readonly kind: 'Move';
    readonly id: I.ID;
    readonly name: I.MoveName;
    readonly basePower: number;
    readonly type: I.TypeName;
    readonly category?: I.MoveCategory;
    readonly flags: I.MoveFlags;
    readonly secondaries?: boolean;
    readonly target?: I.MoveTarget;
    readonly recoil?: [number, number];
    readonly hasCrashDamage?: boolean;
    readonly mindBlownRecoil?: boolean;
    readonly struggleRecoil?: boolean;
    readonly willCrit?: boolean;
    readonly drain?: [number, number];
    readonly priority?: number;
    readonly self?: I.SelfOrSecondaryEffect | null;
    readonly ignoreDefensive?: boolean;
    readonly overrideOffensiveStat?: I.StatIDExceptHP;
    readonly overrideDefensiveStat?: I.StatIDExceptHP;
    readonly overrideOffensivePokemon?: 'target' | 'source';
    readonly overrideDefensivePokemon?: 'target' | 'source';
    readonly breaksProtect?: boolean;
    readonly isZ?: boolean;
    readonly zMove?: {
        basePower?: number;
    };
    readonly isMax?: boolean;
    readonly maxMove?: {
        basePower: number;
    };
    readonly zp?: number;
    readonly maxPower?: number;
    readonly multihit?: number | number[];
    private static readonly FLAGS;
    constructor(name: string, data: MoveData, gen: number);
}
export {};
