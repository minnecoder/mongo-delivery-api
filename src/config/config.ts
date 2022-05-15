import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test';
const JWT_SECRET = process.env.JWT_SECRET || '';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
    secret: JWT_SECRET,
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
