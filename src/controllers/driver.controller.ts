import { Request, Response, NextFunction } from 'express';
import Driver from '../models/driver.model';

const getDrivers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const drivers = await Driver.find();
        return res.status(200).json(drivers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleDriver = async (req: Request, res: Response, next: NextFunction) => {
    const driverId = req.params.driverId;

    try {
        const driver = await Driver.findById(driverId);
        return res.status(200).json(driver);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addDriver = async (req: Request, res: Response, next: NextFunction) => {
    const newDriver = new Driver(req.body);

    try {
        const driver = await newDriver.save();
        return res.status(201).json(driver);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateDriver = async (req: Request, res: Response, next: NextFunction) => {
    const driverId = req.params.driverId;
    const updateDriver = req.body;

    try {
        const driver = await Driver.findByIdAndUpdate(driverId, updateDriver, { new: true });
        return res.status(200).json(driver);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteDriver = async (req: Request, res: Response, next: NextFunction) => {
    const driverId = req.params.driverId;

    try {
        const driver = await Driver.findByIdAndDelete(driverId);
        return res.status(200).json(driver);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getDrivers, getSingleDriver, addDriver, updateDriver, deleteDriver };
