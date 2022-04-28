import { GameState } from '@/state/game.state';
import rfdc from 'rfdc';

const clone = rfdc();

export function copyGameState(gameState: GameState) {
  return clone(gameState);
}
