import { map, pipe } from 'rxjs';
import { GameState } from '.';
import { populateStrategies } from './strategy.populate';

export function resetStrategies() {
  return pipe(
    map((gameState: GameState) => {
      for (const hero of gameState.ownHeroes) {
        hero.strategies = [];
      }
      return gameState;
    }),
    populateStrategies()
  );
}
