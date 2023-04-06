import {phaseMutations, phaseQueries, phaseResolvers} from './phase';
import {taskMutations, taskQueries, taskResolvers} from './task';
import {getGraphqlTypeDefString} from '../services/fileService';

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${getGraphqlTypeDefString()}
`;

export const resolvers = {
    Query: {
        ...phaseQueries,
        ...taskQueries,
    },
    Mutation: {
        ...phaseMutations,
        ...taskMutations,
    },
    Phase: phaseResolvers,
    Task : taskResolvers,
};
