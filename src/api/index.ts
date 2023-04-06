import {articleMutations, articleQueries, articleResolvers} from './article';
import {getGraphqlTypeDefString} from '../services/fileService';

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${getGraphqlTypeDefString()}
`;

export const resolvers = {
    Query: {
        ...articleQueries,
    },
    Mutation: {
        ...articleMutations,
    },
    Article: articleResolvers,
};
