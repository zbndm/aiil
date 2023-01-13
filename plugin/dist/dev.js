"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDevEnvVariables = void 0;
const path_1 = __importDefault(require("path"));
function forceEnvVar(env, key) {
    if (env[key] === undefined) {
        throw new Error(`Missing ${key} in .env`);
    }
    process.env[key] = env[key];
}
// In dev env, yarn netlify build inherits of the env vars set in Netlify's UI.
// We need to manually override them.
function loadDevEnvVariables() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dotenv = require('dotenv');
    const filePath = path_1.default.join(__dirname, '..', '..', '.env');
    const env = dotenv.config({ path: filePath }).parsed;
    forceEnvVar(env, 'ALGOLIA_API_KEY');
    forceEnvVar(env, 'ALGOLIA_BASE_URL');
}
exports.loadDevEnvVariables = loadDevEnvVariables;
