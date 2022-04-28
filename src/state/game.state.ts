import { Base, Hero, Monster } from '@/entities/interfaces.entity';

export interface GameStateInit {
  turnNumber: number;
  enemyHeroes: Hero[];
  monsters: Monster[];
  ownHeroes: Hero[];
  entityCount: number;
  base: Base;
  enemyBase: Base;
  heroesPerPlayer: number;
}

export interface GameState extends GameStateInit {
  threat: number;
}
