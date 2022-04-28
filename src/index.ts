import { from } from 'rxjs';
import { playGame } from '@/state/game.play';
import { createGame } from '@/state/game.create';

from(createGame())
  .pipe(playGame())
  .subscribe((command) => {
    console.log(command);
  });
