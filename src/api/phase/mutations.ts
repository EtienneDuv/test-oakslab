import {
    MutationCreatePhaseArgs,
    MutationDeletePhaseArgs,
    MutationUpdatePhaseArgs,
} from '../../generated/types';
import {save} from '../../database';

export const phaseMutations = {
    createPhase: async (_parent: unknown, args: MutationCreatePhaseArgs) => {
        save('phase', {name: args.name});
        return true; // mimics how Sequelize says if update/delete worked or not
    },
    updatePhase: async (_parent: unknown, args: MutationUpdatePhaseArgs) => {
        save('phase', {name: args.name}, Number(args.phaseId));
        return true;
    },
    deletePhase: async (_parent: unknown, _args: MutationDeletePhaseArgs) => {
        // TODO
        // I would use args.phaseId to find the key and remove it `db.del(key)`, like in updated
        return false;
    },
};
