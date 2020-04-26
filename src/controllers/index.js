import { isDefined, convertToEnum } from '../helpers';

/**
 * @typedef {Object} Grid
 * @property {number} width
 * @property {number} height
 * @property {function} isCell
 *
 * @typedef {object} Bot
 * @property {Position} position
 * @property {number} heading
 *
 *
 * @typedef {object} BotControllerParams
 * @property {Grid} grid
 * @property {Bot} bot
 */
/**
 * Controller to control the bot. Parses and executes instructions
 *
 * @param {BotControllerParams} param0 Requires grid data and a bot to operate
 *
 */
export const BotController = ({ grid = null, bot = null } = {}) => {
  return {
    /**
     * Interface method to execute a given instruction set. If instructions
     * are non-enumerable or invalid instructions are skipped. The initial
     * bot cell can't fall outside of the grid.
     *
     * @param {string[]} instructions Array of string instructions ['L','M', 'R']
     *
     */
    execute: (instructions) => {
      if (
        !(
          isDefined(bot) &&
          isDefined(grid) &&
          isDefined(instructions) &&
          grid.isCell(bot.getData())
        )
      ) {
        return;
      }

      // Loop through all the instructions. and convert the instruction to enums,
      // If it is a valid instruction then ask the bot to execute the instruction.
      // Provide a isExecutable interface for the bot in order to determine if the
      // given instruction is executable. The other alternative is to calculate
      // the isExecutable instruction at the controller level and set the data by
      // using bot.setData(). But if bots can have multiple ways to handle the
      // instruction this will need a lot of if else statement.
      instructions.forEach((strInstruction) => {
        const instruction = convertToEnum(strInstruction);
        bot.execute({ instruction, isExecutable: grid.isCell });
      });
    },
  };
};
