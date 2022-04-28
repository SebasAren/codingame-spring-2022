import { GameState } from '.';
import {
  HIGH_THREAT,
  LOW_THREAT,
  MEDIUM_THREAT,
  NO_ATTACK
} from '../constants/threat.constants';
import { Base, Entity, Hero, Monster } from '../entities/interfaces.entity';

export function* createGame(): Generator<GameState> {
  let inputs: string[] = readline().split(' ');
  const baseInit = {
    x: parseInt(inputs[0]),
    y: parseInt(inputs[1])
  };
  const enemyBaseInit = {
    x: baseInit.x,
    y: baseInit.y
  };
  const heroesPerPlayer: number = parseInt(readline()); // Always 3
  let enemyBase!: Base;
  let base!: Base;

  let turnNumber = 0;
  while (true) {
    turnNumber += 1;
    const ownHeroes: Hero[] = [];
    const enemyHeroes: Hero[] = [];
    const monsters: Monster[] = [];
    for (let i = 0; i < 2; i++) {
      inputs = readline().split(' ');
      const health: number = parseInt(inputs[0]); // Each player's base health
      const mana: number = parseInt(inputs[1]); // Ignore in the first league; Spend ten mana to cast a spell
      if (i === 0) {
        base = {
          ...baseInit,
          health,
          mana
        };
      } else {
        enemyBase = {
          ...enemyBaseInit,
          health,
          mana
        };
      }
    }
    const entityCount: number = parseInt(readline()); // Amount of heros and monsters you can see
    for (let i = 0; i < entityCount; i++) {
      inputs = readline().split(' ');
      const id: number = parseInt(inputs[0]); // Unique identifier
      const type: number = parseInt(inputs[1]); // 0=monster, 1=your hero, 2=opponent hero
      const entity: Entity = {
        id,
        x: parseInt(inputs[2]),
        y: parseInt(inputs[3]),
        health: parseInt(inputs[6]),
        vx: parseInt(inputs[7]),
        vy: parseInt(inputs[8]),
        nearBase: parseInt(inputs[10]),
        threatFor: parseInt(inputs[10]),
        speed: type === 0 ? 400 : 800
      };
      if (type === 0) {
        let baseThreat: number;
        if (entity.nearBase === 1 && entity.threatFor === 1) {
          baseThreat = HIGH_THREAT;
        } else if (
          (entity.nearBase === 1 && entity.threatFor === 2) ||
          (entity.nearBase === 0 && entity.threatFor === 2)
        ) {
          baseThreat = NO_ATTACK;
        } else if (entity.nearBase === 0 && entity.threatFor === 1) {
          baseThreat = MEDIUM_THREAT;
        } else {
          baseThreat = LOW_THREAT;
        }
        monsters.push({
          ...entity,
          baseThreat
        });
      } else if (type === 1) {
        ownHeroes.push({
          ...entity,
          strategies: []
        });
      } else {
        enemyHeroes.push({
          ...entity,
          strategies: []
        });
      }
    }
    yield {
      turnNumber,
      enemyHeroes,
      monsters,
      ownHeroes,
      entityCount,
      base,
      enemyBase,
      heroesPerPlayer
    };
  }
}
