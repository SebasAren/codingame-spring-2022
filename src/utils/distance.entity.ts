import { LocationBase } from '@/entities/interfaces.entity';

export function distanceToEachother(
  entity: LocationBase,
  otherEntity: LocationBase
): number {
  return Math.sqrt(
    Math.abs(otherEntity.x - entity.x) ** 2 +
      Math.abs(otherEntity.y - entity.y) ** 2
  );
}
