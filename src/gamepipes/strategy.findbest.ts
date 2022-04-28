import { map, pipe } from 'rxjs';
import { GameState } from '.';

export function findBestStrategy() {
  return pipe(
    map((gameState: GameState) => {
      for (const hero of gameState.ownHeroes) {
        for (const strategy of hero.strategies) {
          if (hero.strategy) {
            if (strategy.power > hero.strategy.power) {
              hero.strategy = strategy;
            }
          } else {
            hero.strategy = strategy;
          }
        }
      }
      return gameState;
    })
  );
}
