import {phaseMutations, phaseQueries, phaseResolvers} from './phase';
import {getGraphqlTypeDefString} from '../services/fileService';

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${getGraphqlTypeDefString()}
`;

export const resolvers = {
    Query: {
        ...phaseQueries,
    },
    Mutation: {
        ...phaseMutations,
    },
    Phase: phaseResolvers,
};
