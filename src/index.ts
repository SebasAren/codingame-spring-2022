import { from } from 'rxjs';
import { playGame } from './gamepipes';
import { createGame } from './gamepipes/create.pipe';

const ATTACK_RADIUS = 5000;
const DAMAGE_RADIUS = 300;

from(createGame())
  .pipe(playGame())
  .subscribe((command) => {
    console.log(command);
  });
