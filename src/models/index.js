import { isInRange } from '../helpers';

/**
 * @typedef {object} Coords
 * @property {number} x
 * @property {number} n
 *
 * @typedef {object} Position
 * @property {number} x
 * @property {number} y
 * @property {function} add
 *
 * @typedef {object} Dimension
 * @property {number} width
 * @property {number} height
 *
 * @typedef {Object} Grid
 * @property {number} width
 * @property {number} height
 * @property {function} isCell
 *
 * @typedef {object} BotInfo
 * @property {Position} position
 * @property {number} heading
 */

/**
 * Creates a position data structure. Similar to a Vector
 * @param {Coords} param0 Accepts and x and y property
 *
 * @returns {Position}
 */
export const PositionData = ({ x, y }) => ({
  x,
  y,
  add: ({ x: nX, y: nY }) => PositionData({ x: x + nX, y: y + nY }),
});

/**
 * Data structure used by the bot
 * @param {BotInfo} param0 a position and a heading
 *
 * @returns {BotInfo}
 */
export const BotData = ({ position, heading }) => ({ position, heading });

/**
 * Determine if a given position is a cell in the grid
 * @param {Dimension} param0 width and height property to be sent
 *
 * @returns {Grid}
 */
export const GridData = ({ width = -1, height = -1 } = {}) => ({
  width,
  height,
  isCell: ({ position: { x, y } }) =>
    isInRange(x, -1, width) && isInRange(y, -1, height),
});
