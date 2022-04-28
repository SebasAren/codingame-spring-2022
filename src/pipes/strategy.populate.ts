import { map, pipe } from 'rxjs';
import { GameState } from '@/state/game.state';
import { AttackStrategy } from '@/strategies/attack/base.attack';

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
