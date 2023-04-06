import dotenv from 'dotenv';
import NodeCache from 'node-cache';

dotenv.config();

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these variables or not setup a .env file at all
interface DotenvFile {
    APP_PORT: string|undefined;
    NODE_ENV: string|undefined,
}

// Decorators
const required = (_target: unknown, propertyKey: string): void => {
    if (process.env[propertyKey] === undefined) {
        throw new Error(`[REQUIRED ENV VARIABLE MISSING] ${propertyKey}`);
    }
};

class Config {
    @required
    APP_PORT: number;
    @required
    NODE_ENV: string;
    db: NodeCache;

    constructor (env: DotenvFile) {
        this.APP_PORT = Number(env.APP_PORT);
        this.NODE_ENV = String(env.NODE_ENV);
        this.db = new NodeCache({checkperiod: 0});
    }
}

export const config = new Config({
    APP_PORT: process.env.APP_PORT,
    NODE_ENV: process.env.NODE_ENV,
});
