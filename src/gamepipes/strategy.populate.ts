import { map, pipe } from 'rxjs';
import { GameState } from '.';
import { AttackStrategy } from '../strategies/attack.strategy';

export function populateStrategies() {
  return pipe(
    map((gameState: GameState) => {
      for (const hero of gameState.ownHeroes) {
        for (const monster of gameState.monsters) {
          hero.strategies.push(new AttackStrategy(monster, hero, gameState));
        }
      }
      return gameState;
    })
  );
}
