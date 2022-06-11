import express from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const app = express();

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
    app.use((req, res, next) => {
        // Log the request
        Logging.info(`Incoming -> Method: [${req.method}] URL: [${req.url}] IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            // Log the response
            Logging.info(`Response -> Method: [${req.method}] URL: [${req.url}] IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`);
        });
        next();
    });

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // API Rules
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PAST, DELETE');
            return res.status(200).json({});
        }
        next();
    });

    // API Routes
    const addresses = require('./routes/address.route');
    const customers = require('./routes/customer.route');
    const customerHours = require('./routes/customerHours.route');
    const customerNotes = require('./routes/customerNote.route');
    const drivers = require('./routes/driver.route');
    const driverReports = require('./routes/driverReport.route');
    const hubs = require('./routes/hub.route');
    const orders = require('./routes/order.route');
    const orderItems = require('./routes/orderItem.route');
    const organizations = require('./routes/organization.route');
    const packages = require('./routes/package.route');
    const previousSigners = require('./routes/previousSigner.route');
    const products = require('./routes/product.route');
    const stops = require('./routes/stop.route');
    const teams = require('./routes/team.route');
    const users = require('./routes/user.route');
    const vehicles = require('./routes/vehicle.route');

    app.use('/api/v1/addresses', addresses);
    app.use('/api/v1/customers', customers);
    app.use('/api/v1/customerHours', customerHours);
    app.use('/api/v1/customerNotes', customerNotes);
    app.use('/api/v1/drivers', drivers);
    app.use('/api/v1/driverReports', driverReports);
    app.use('/api/v1/hubs', hubs);
    app.use('/api/v1/orders', orders);
    app.use('/api/v1/orderItems', orderItems);
    app.use('/api/v1/organizations', organizations);
    app.use('/api/v1/packages', packages);
    app.use('/api/v1/previousSigners', previousSigners);
    app.use('/api/v1/products', products);
    app.use('/api/v1/stops', stops);
    app.use('/api/v1/teams', teams);
    app.use('/api/v1/users', users);
    app.use('/api/v1/vehicles', vehicles);

    // Health Check
    app.get('/health', (req, res, next) => res.status(200).json({ message: 'OK' }));

    // Error Handling
    app.use((req, res, next) => {
        const error = new Error('Not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    // Start the server
    app.listen(config.server.port, () => Logging.info(`Server started on port ${config.server.port}`));
};
