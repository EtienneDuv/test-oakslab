import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import {json} from 'body-parser';
import express from 'express';

import {typeDefs, resolvers} from './api';
import {config} from './config';
import {seedData} from './database';

const main = async () => {
    const app = express();
    const httpServer = http.createServer(app);

    // SET UP APOLLO SERVER
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();

    app.use(
        cors(),
        json(),
        express.urlencoded({extended: true}),
        expressMiddleware(server, {
            // Adds userId in Context if valid jwt provided
        }),
    );

    const {APP_PORT} = config;
    httpServer.listen({port: APP_PORT}, () => {
        console.log(`Example app listening at http://localhost:${APP_PORT}`);
    });

    seedData();
};

main();
