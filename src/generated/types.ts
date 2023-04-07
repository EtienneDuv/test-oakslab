import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTask: Scalars['Boolean'];
  createPhase?: Maybe<Scalars['Boolean']>;
  createTask: Scalars['Boolean'];
  deletePhase?: Maybe<Scalars['Boolean']>;
  reopenTask: Scalars['Boolean'];
  updatePhase?: Maybe<Scalars['Boolean']>;
};


export type MutationCompleteTaskArgs = {
  taskId: Scalars['Int'];
};


export type MutationCreatePhaseArgs = {
  name: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  description?: InputMaybe<Scalars['String']>;
  phaseId: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationDeletePhaseArgs = {
  phaseId: Scalars['Int'];
};


export type MutationReopenTaskArgs = {
  taskId: Scalars['Int'];
};


export type MutationUpdatePhaseArgs = {
  name: Scalars['String'];
  phaseId: Scalars['Int'];
};

export type Phase = {
  __typename?: 'Phase';
  completed: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  tasks: Array<Maybe<Task>>;
};

export type Query = {
  __typename?: 'Query';
  getPhase: Phase;
  getPhases: Array<Phase>;
  getTask: Task;
  getTasks: Array<Task>;
};


export type QueryGetPhaseArgs = {
  phaseId: Scalars['Int'];
};


export type QueryGetPhasesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTaskArgs = {
  taskId: Scalars['Int'];
};


export type QueryGetTasksArgs = {
  phaseId: Scalars['Int'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  description: Scalars['String'];
  id: Scalars['Int'];
  phaseId: Scalars['Int'];
  status: Status;
  statusId: Scalars['Int'];
  title: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Phase: ResolverTypeWrapper<Phase>;
  Query: ResolverTypeWrapper<{}>;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Task: ResolverTypeWrapper<Task>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Phase: Phase;
  Query: {};
  Status: Status;
  String: Scalars['String'];
  Task: Task;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  completeTask?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCompleteTaskArgs, 'taskId'>>;
  createPhase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCreatePhaseArgs, 'name'>>;
  createTask?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'phaseId' | 'title'>>;
  deletePhase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePhaseArgs, 'phaseId'>>;
  reopenTask?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationReopenTaskArgs, 'taskId'>>;
  updatePhase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdatePhaseArgs, 'name' | 'phaseId'>>;
};

export type PhaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Phase'] = ResolversParentTypes['Phase']> = {
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPhase?: Resolver<ResolversTypes['Phase'], ParentType, ContextType, RequireFields<QueryGetPhaseArgs, 'phaseId'>>;
  getPhases?: Resolver<Array<ResolversTypes['Phase']>, ParentType, ContextType, Partial<QueryGetPhasesArgs>>;
  getTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<QueryGetTaskArgs, 'taskId'>>;
  getTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryGetTasksArgs, 'phaseId'>>;
};

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phaseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  statusId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Phase?: PhaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
};

