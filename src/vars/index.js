import { Direction, Instruction } from '../enums';

// Facing direction is calculated depending on the
// currently facing direction. Therefore,
// TURN_CACHE[L|R][CUR_HEADING] = NEW_HEADING
export const TURN_CACHE = {
  [Instruction.TURN_LEFT]: {
    [Direction.NORTH]: Direction.WEST,
    [Direction.EAST]: Direction.NORTH,
    [Direction.SOUTH]: Direction.EAST,
    [Direction.WEST]: Direction.SOUTH,
  },
  [Instruction.TURN_RIGHT]: {
    [Direction.NORTH]: Direction.EAST,
    [Direction.EAST]: Direction.SOUTH,
    [Direction.SOUTH]: Direction.WEST,
    [Direction.WEST]: Direction.NORTH,
  },
};

// Next movement is calculated depending on the
// facing direction of the bot. Therefore,
// MOVE_CACHE[CUR_HEADING](CUR_POS) = NEW_POS
export const MOVE_CACHE = {
  [Direction.NORTH]: (pos) => pos.add({ x: 0, y: 1 }),
  [Direction.EAST]: (pos) => pos.add({ x: 1, y: 0 }),
  [Direction.SOUTH]: (pos) => pos.add({ x: 0, y: -1 }),
  [Direction.WEST]: (pos) => pos.add({ x: -1, y: 0 }),
};

export const INSTRUCTION_MAP = {
  M: Instruction.MOVE,
  L: Instruction.TURN_LEFT,
  R: Instruction.TURN_RIGHT,
};

// Not required by the real app. Just for logging
export const DIRECTION_MAP = {
  [Direction.NORTH]: 'North',
  [Direction.EAST]: 'East',
  [Direction.SOUTH]: 'South',
  [Direction.WEST]: 'West',
};

export const COMMAND_MAP = {
  [Instruction.MOVE]: 'Move',
  [Instruction.TURN_LEFT]: 'Turn Left',
  [Instruction.TURN_RIGHT]: 'Turn Right',
};
