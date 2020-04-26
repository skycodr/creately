import { App } from './App';
import { Bot } from './entities';
import { PositionData, GridData } from './models';
import { Direction } from './enums';
import { BotAction as actions } from './actions';

import { printInstruction } from './helpers';

const M = 'M',
  L = 'L',
  R = 'R';

// Create an instance of a vacuum bot wht the starting
// position and heading. Bind the actions to be executed
// depending on the instruction
const position = PositionData({ x: 2, y: 1 });
const heading = Direction.NORTH;

const bot = Bot({ position, heading, actions }, printInstruction);

// Create the grid
const grid = GridData({ width: 6, height: 6 });

// Create the application & execute instructions
App.init({ grid, bot });
App.execute([M, L, L, M, R, M, R, R, M, M, R, M, M]);
