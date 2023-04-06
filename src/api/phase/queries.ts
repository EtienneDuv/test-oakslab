import {
    QueryGetPhasesArgs,
    QueryGetPhaseArgs,
    Phase
} from '../../generated/types';
import {find, findAll} from '../../database';

export const phaseQueries = {
    getPhases: (_parent: unknown, args: QueryGetPhasesArgs): Phase[] => {
        const phases = findAll('phase') as Phase[];
        if (args.limit) {
            return phases.slice(0, args.limit);
        }
        return phases;
    },
    getPhase: (_parent: unknown, args: QueryGetPhaseArgs): Phase => {
        return find('phase', 'id', args.phaseId) as Phase;
    },
};