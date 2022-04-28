import { map, pipe, mergeMap, from } from 'rxjs';
import { Base, Hero, Monster } from '../entities/interfaces.entity';
import { findBestStrategy } from './strategy.findbest';
import { populateStrategies } from './strategy.populate';
import { resetStrategies } from './strategy.reset';
import { sortMonsters } from './threat.pipe';

export interface GameState {
  turnNumber: number;
  enemyHeroes: Hero[];
  monsters: Monster[];
  ownHeroes: Hero[];
  entityCount: number;
  base: Base;
  enemyBase: Base;
  heroesPerPlayer: number;
}

export function playGame() {
  return pipe(
    sortMonsters(),
    populateStrategies(),
    findBestStrategy(),
    resetStrategies(),
    findBestStrategy(),
    mergeMap((gameState) => {
      return from(gameState.ownHeroes).pipe(
        map((hero) => {
          return hero.strategy?.execute() || 'WAIT';
        })
      );
    })
  );
}
