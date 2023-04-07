import {
    MutationCreateTaskArgs,
    MutationCompleteTaskArgs,
    Task
} from '../../generated/types';
import {save, findAll} from '../../database';

export const taskMutations = {
    createTask: async (_parent: unknown, args: MutationCreateTaskArgs) => {
        save('task', {
            phaseId    : args.phaseId,
            title      : args.title,
            description: args.description||'',
            completed  : false
        });
        return true; // mimics how Sequelize says if update/delete worked or not
    },
    completeTask: async (_parent: unknown, args: MutationCompleteTaskArgs) => {
        const tasks = findAll('task') as Task[];
        tasks.sort((a, b) => {
            const n = a.phaseId - b.phaseId;
            if (n !== 0) return n;

            return a.id - b.id;
        });

        const taskIndex = tasks.findIndex(el => el.id === args.taskId);
        const previousTasksCompleted = tasks
            .slice(0, taskIndex)
            .every(el => el.completed === true);
        if (!previousTasksCompleted) throw new Error('Can not mark task as completed: previous tasks are not completed.');

        save('task', {completed: true}, args.taskId);
        return true;
    },
};
