import { BaseStrategy } from '../strategies/interfaces.strategy';

export interface Entity extends LocationBase {
  id: number;
  health: number;
  vx: number;
  vy: number;
  nearBase: number;
  threatFor: number;
  speed: number;
}

export interface LocationBase {
  x: number;
  y: number;
}

export interface Hero extends Entity {
  strategy?: BaseStrategy;
  strategies: BaseStrategy[];
}

export interface Monster extends Entity {
  baseThreat: number;
}

export interface Base extends LocationBase {
  health: number;
  mana: number;
}
