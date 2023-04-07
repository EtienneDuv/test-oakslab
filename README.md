# Oak's lab test

- [Assignment](./assignment.pdf)

Every  startup  goes  through  several  stages.  In  every  stage,  there  are 
necessary steps to be accomplished. Create a simple application that documents this progress.

**Requirements - Backend:**
- Implement a GraphQL using Node.js
- Store the progress in memory (not database)
- Design a database schema to store the data

**Tech stack**
- Node.js
- GraphQL
- Typescript
- GitHub
- Express
- Apollo GraphQL

# Choices

Based on the assumption that we were logged in the company account, all the information accessible through this API belongs to us. Therefore, no additional verification is required. In a real app would of course have more safety locks.

To reopen a task, I choose to change Task.completed field to status, so we have more flexibility. That way we can extend the system and add more statuses if we ever need to.

# Dev tools

## Codegen

When dev api is running (port 3000), `npm run codegen` generates the types from exposed graphQL schema.

These generated types (`src/generated/types.ts`) are used to type arguments of all resolvers. 

# Run api

**Install dependencies**
`npm i`

**Run the api**
`npm run start:dev`

**Access sandbox** 
`localhost:3000`. You can play around and see documentation
