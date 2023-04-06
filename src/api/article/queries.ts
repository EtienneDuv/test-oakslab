// import {ArticleModel} from '../../database/models';
// import {
//     QueryGetArticlesArgs,
//     QueryGetArticleArgs
// } from '../../generated/types';

export const articleQueries = {
    getArticles: async (_parent: unknown, args: any) => {
        let {limit} = args;
        if (!limit || limit > 50) limit = 50;

        // return ArticleModel.findAll({
        //     limit
        // });
    },
    getArticle: async (_parent: unknown, args: any) => {
        // return ArticleModel.findOneOrFail({
        //     where: {id: args.articleId}
        // });
    },
};