import {
    QueryGetPhasesArgs,
    QueryGetPhaseArgs,
} from '../../generated/types';
import {find, findAll} from '../../database';

export const phaseQueries = {
    getPhases: (_parent: unknown, args: QueryGetPhasesArgs) => {
        const phases = findAll('phase') ;
        if (args.limit) {
            return phases.slice(0, args.limit);
        }
        return phases;
    },
    getPhase: (_parent: unknown, args: QueryGetPhaseArgs) => {
        return find('phase', 'id', args.phaseId);
    },
};