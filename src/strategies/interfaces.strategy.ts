export interface BaseStrategy {
  name: string;
  debugInfo: string;
  execute: () => string;
  power: number;
}
