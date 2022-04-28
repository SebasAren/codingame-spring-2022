import { map, pipe, mergeMap, from } from 'rxjs';
import { findBestStrategy } from '@/pipes/strategy.findbest';
import { populateStrategies } from '@/pipes/strategy.populate';
import { resetStrategies } from '@/pipes/strategy.reset';
import { sortMonsters } from '@/utils/monster.sort';

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
