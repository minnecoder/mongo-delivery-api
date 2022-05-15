import { Request, Response, NextFunction } from 'express';
import Vehicle from '../models/vehicle.model';

const getVehicles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const vehicles = await Vehicle.find();
        return res.status(200).json(vehicles);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const vehicleId = req.params.vehicleId;

    try {
        const vehicle = await Vehicle.findById(vehicleId);
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const newVehicle = new Vehicle(req.body);

    try {
        const vehicle = await newVehicle.save();
        return res.status(201).json(vehicle);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const vehicleId = req.params.vehicleId;
    const updateVehicle = req.body;

    try {
        const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, updateVehicle, { new: true });
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
    const vehicleId = req.params.vehicleId;

    try {
        const vehicle = await Vehicle.findByIdAndDelete(vehicleId);
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getVehicles, getSingleVehicle, addVehicle, updateVehicle, deleteVehicle };
