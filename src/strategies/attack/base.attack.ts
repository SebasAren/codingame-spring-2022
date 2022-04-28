import { Hero, Monster } from '@/entities/interfaces.entity';
import { GameState } from '@/state/game.state';
import { BaseStrategy } from '@/strategies/interfaces.strategy';

export class AttackStrategy implements BaseStrategy {
  constructor(
    private monster: Monster,
    private hero: Hero,
    private gameState: GameState
  ) {
    this.name = `Attack ${this.monster.id}`;
  }

  public get power() {
    let power = this.monster.baseThreat;
    for (const hero of this.gameState.ownHeroes) {
      if (hero !== this.hero) {
        if (hero.strategy?.name === this.name) {
          power = 0;
        }
      }
    }
    return power;
  }

  public name = 'Attack';
  public debugInfo = `ATK ${this.monster.id}`;

  execute() {
    return `MOVE ${this.monster.x} ${this.monster.y} ${this.debugInfo}`;
  }
}
