import {
    MutationCreateTaskArgs,
    MutationCompleteTaskArgs,
} from '../../generated/types';
import {save} from '../../database';

export const taskMutations = {
    createTask: async (_parent: unknown, args: MutationCreateTaskArgs) => {
        save('task', {
            phaseId    : args.phaseId,
            title      : args.title,
            description: args.description,
            completed  : false
        });
        return true; // mimics how Sequelize says if update/delete worked or not
    },
    completeTask: async (_parent: unknown, args: MutationCompleteTaskArgs) => {
        save('task', {completed: true}, Number(args.taskId));
        return true;
    },
};
