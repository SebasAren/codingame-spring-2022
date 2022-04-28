interface BaseSpell {
  name: string;
  manaCost: number;
}

interface TargetedSpell extends BaseSpell {
  entityId: number;
}

interface LocationSpell extends BaseSpell {
  x: number;
  y: number;
}

type TargetedLocationSpell = LocationSpell & TargetedSpell;

export type WindSpell = LocationSpell;

export type ShieldSpell = TargetedSpell;

export type ControlSpell = TargetedLocationSpell;
