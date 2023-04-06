import {findAll} from '../../database';
import {Task, Phase} from 'src/generated/types';

export const phaseResolvers = {
    completed: (parent: Phase): boolean => {
        const phaseId = parent.id;
        const tasks = findAll('task') as Task[];
        const childTasks = tasks.filter(el => el.phaseId === phaseId);

        return childTasks.every(el => el.completed === true);
    },
    tasks: (parent: Phase): Task[] => {
        const phaseId = parent.id;
        const tasks = findAll('task') as Task[];
        const childTasks = tasks.filter(el => el.phaseId === phaseId);
        return childTasks;
    },
};
