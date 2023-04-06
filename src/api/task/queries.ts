import {
    QueryGetTasksArgs,
    QueryGetTaskArgs,
    Task
} from '../../generated/types';
import {find, findAll} from '../../database';

export const taskQueries = {
    getTasks: (_parent: unknown, args: QueryGetTasksArgs): Task[] => {
        const tasks = findAll('task') as Task[];
        return tasks.filter(el => Number(el.phaseId) === Number(args.phaseId));
    },
    getTask: (_parent: unknown, args: QueryGetTaskArgs): Task => {
        return find('task', 'id', args.taskId) as Task;
    },
};