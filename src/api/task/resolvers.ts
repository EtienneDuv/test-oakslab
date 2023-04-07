import {findAll} from '../../database';
import {Task, Status} from 'src/generated/types';

export const taskResolvers = {
    status: (parent: Task) => {
        const statusId = parent.statusId;
        const statuses = findAll('status') as Status[];
        return statuses.find(el => el.id === statusId);
    },
};
