import { MAX_DISTANCE } from '@/constants/game.constants';
import { GameStateInit } from '@/state/game.state';
import { distanceToEachother } from '@/utils/distance.entity';

export function calculateThreat(gameState: GameStateInit): number {
  let totalThreat = 0;
  for (const monster of gameState.monsters) {
    totalThreat += monster.baseThreat;
    totalThreat +=
      (distanceToEachother(monster, gameState.base) / MAX_DISTANCE) * 100;
  }
  return totalThreat;
}
