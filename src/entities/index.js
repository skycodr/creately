import { BotData } from '../models';
import { isDefined } from '../helpers';

/**
 * @typedef {object} Position
 * @property {number} x
 * @property {number} y
 * @property {function} add
 *
 * @typedef {object} BotParams
 * @property {Position} position
 * @property {number} heading
 * @property {object} actions
 */
/**
 * The Vacuum bot entity
 *
 * @param {BotParams} param0 Requires an initial position, heading and actions
 */
export function Bot({ position, heading, actions }, logger = null) {
  const data = BotData({ position, heading });
  return {
    /**
     * The interface method to execute a given instruction.
     * Note: The controller will convert the string instructions
     * to enumerable instruction. Upon undefined instruction, isExecutable
     * interface, action or non-executable instruction then skip
     *
     * @param {object} param0 Enumerable instruction
     *
     */
    execute: ({ instruction, isExecutable }) => {
      if (
        isDefined(instruction) &&
        isDefined(actions[instruction]) &&
        isDefined(isExecutable)
      ) {
        const next = actions[instruction](data);
        const isExecuted = isExecutable(next);
        if (isExecuted) {
          Object.keys(next).forEach((key) => {
            data[key] = next[key];
          });
        }

        logger && logger(instruction, data, isExecuted);
      }
    },
    /**
     * Return the current bot data
     *
     */
    getData: () => data,
  };
}
