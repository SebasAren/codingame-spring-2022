import { LocationBase } from '../../entities/interfaces.entity';
import { GameState } from '../../gamepipes';
import { BaseStrategy } from "../interfaces.strategy";

export default class GeneralWindStrategy implements BaseStrategy {
  constructor(public name: string, private gameState: GameState) {}

  public debugInfo = 'WIND';

  public target: LocationBase = {
    x: 10,
    y: 10
  };

  public get power() {
    return 10;
  }

  public execute() {
    return `CAST WIND ${this.target.x} ${this.target.y} ${this.debugInfo}`;
  }
}
