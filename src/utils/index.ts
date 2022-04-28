import { Entity, LocationBase } from '../entities/interfaces.entity';

export function endPosition(entity: Entity): [number, number] {
  return [
    entity.x + entity.vx * entity.speed,
    entity.y + entity.vy * entity.speed
  ];
}

export function distanceToEachother(
  entity: LocationBase,
  otherEntity: LocationBase
): number {
  return Math.sqrt(
    Math.abs(otherEntity.x - entity.x) ** 2 +
      Math.abs(otherEntity.y - entity.y) ** 2
  );
}
