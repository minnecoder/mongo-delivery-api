import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const router = express();

// Connect to MongoDB
mongoose
    .connect(config.mongo.url)
    .then(() => {
        Logging.info('Connected to MongoDB');
        StartServer();
    })
    .catch((error) => {
        Logging.error('Error connecting to MongoDB');
        Logging.error(error);
    });

// Only start the server if MongoDB is connected
const StartServer = () => {
    router.use((req, res, next) => {
        // Log the request
        Logging.info(`Incoming -> Method: [${req.method}] URL: [${req.url}] IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            // Log the response
            Logging.info(`Response -> Method: [${req.method}] URL: [${req.url}] IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`);
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    // API Rules
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PAST, DELETE');
            return res.status(200).json({});
        }
        next();
    });

    // API Routes

    // Health Check
    router.get('/health', (req, res, next) => res.status(200).json({ message: 'OK' }));

    // Error Handling
    router.use((req, res, next) => {
        const error = new Error('Not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    // Start the server
    http.createServer(router).listen(config.server.port, () => Logging.info(`Server started on port ${config.server.port}`));
};
