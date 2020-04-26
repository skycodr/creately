import { Instruction } from '../enums';

import { MOVE_CACHE, TURN_CACHE } from '../vars';
import { BotData } from '../models';

// Vacuum bot actions are actions needed to be taken
// when a specific instruction is given

export const BotAction = {
  [Instruction.MOVE]: ({ position, heading }) => {
    const movedTo = MOVE_CACHE[heading](position);
    return BotData({ position: movedTo, heading });
  },
  [Instruction.TURN_LEFT]: ({ position, heading }) => {
    const headingTo = TURN_CACHE[Instruction.TURN_LEFT][heading];
    return BotData({ position, heading: headingTo });
  },
  [Instruction.TURN_RIGHT]: ({ position, heading }) => {
    const headingTo = TURN_CACHE[Instruction.TURN_RIGHT][heading];
    return BotData({ position, heading: headingTo });
  },
};
