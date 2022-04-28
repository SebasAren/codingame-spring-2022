import { map, pipe } from 'rxjs';
import { GameState } from '.';

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
