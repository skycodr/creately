import { INSTRUCTION_MAP, DIRECTION_MAP, COMMAND_MAP } from '../vars';
import { Instruction } from '../enums';

/**
 * Check if any given variable is defined. Only a shallow compare
 * Properties inside objects are not detected
 *
 * @param {any} value Value to be checked
 *
 * @returns {boolean}
 */
export const isDefined = (value) => !(value === undefined || value === null);

/**
 * Checks if the value is within a specified range. Boundaries are not
 * included
 *
 * @param {number} value Value to be checked
 * @param {number} min Min value in range
 * @param {max} max Max value in range
 *
 * @returns {boolean}
 */
export const isInRange = (value, min, max) => value > min && value < max;

/**
 * Converts a given string instruction to the corresponding enumeration.
 * Returns null if not found
 *
 * @param {string} instruction String value of instruction
 *
 * @returns {string}
 */
export const convertToEnum = (instruction) => {
  const mapped = INSTRUCTION_MAP[instruction];
  const parsed = isDefined(mapped) && mapped.toString();
  return parsed || null;
};

/**
 *
 * @param {string} instruction
 * @param {BotData} data
 * @param {boolean} isExecutable
 */
export const printInstruction = (instruction, data, isExecutable) => {
  const { log: print } = console; // For the fun of it

  let value = 'SKIPPED';

  if (isExecutable) {
    const {
      position: { x, y },
      heading,
    } = data;

    const instruct = parseInt(instruction, 10);
    const dir = DIRECTION_MAP[heading];
    value =
      instruct === Instruction.MOVE
        ? `${dir}, (x: ${x}, y: ${y})`
        : `-> face: ${dir}`;
  }

  print(COMMAND_MAP[instruction], value);
};
