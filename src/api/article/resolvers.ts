// import {ArticleModel, CommentModel, ChildCommentModel, UserModel} from '../../database/models';
// import {ArticleCommentsArgs} from '../../generated/types';
// import {LooseObject} from '../../interfaces';

export const articleResolvers = {
    commentCount: async (_parent: unknown) => {
        // const query: LooseObject = {
        //     where: {articleId: parent.id},
        // };

        // return CommentModel.count(query);
    },
};
