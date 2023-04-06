// import {PhaseModel, CommentModel, ChildCommentModel, UserModel} from '../../database/models';
// import {PhaseCommentsArgs} from '../../generated/types';
// import {LooseObject} from '../../interfaces';

export const phaseResolvers = {
    completed: (parent: object): boolean => {
        // check child tasks
        return true;
    },
};
