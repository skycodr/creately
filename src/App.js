import { BotController } from './controllers';
import { isDefined } from './helpers';

export const App = (() => {
  let controller = null;
  return {
    /**
     * Initialize the app with a instance of grid data
     * and a instance of a vacuum bot. 
     *
     * @param {object} param0 Grid data object and a Bot instance
     */
    init: ({ grid, bot }) => {
        controller = BotController({ grid, bot });
    },

    /**
     * Inform the controller to execute a given string
     * instructions.
     *
     */
    execute: (instructions) => {
      isDefined(controller) && controller.execute(instructions);
    },
  };
})();
