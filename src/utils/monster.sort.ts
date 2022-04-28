import { map, pipe } from 'rxjs';
import { GameState } from '@/state/game.state';

export function sortMonsters() {
  return pipe(
    map((gameState: GameState) => {
      gameState.monsters.sort((monster, otherMonster) => {
        return monster.baseThreat - otherMonster.baseThreat;
      });
      return gameState;
    })
  );
}
