import dotenv from 'dotenv';
dotenv.config();

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these variables or not setup a .env file at all

interface Env {
  APP_PORT: number|undefined;
  NODE_ENV: string|undefined,
}

interface Config {
  APP_PORT: number;
  NODE_ENV: string,
}

// Loading process.env as Env interface
const getConfig = (): Env => {
    return {
        APP_PORT: Number(process.env.APP_PORT),
        NODE_ENV: process.env.NODE_ENV,
    };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.
const getSanitizedConfig = (config: Env): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();
const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
