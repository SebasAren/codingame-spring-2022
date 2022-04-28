import { Base, Hero, Monster } from "@/entities/interfaces.entity";

export interface GameState {
  turnNumber: number;
  enemyHeroes: Hero[];
  monsters: Monster[];
  ownHeroes: Hero[];
  entityCount: number;
  base: Base;
  enemyBase: Base;
  heroesPerPlayer: number;
}
