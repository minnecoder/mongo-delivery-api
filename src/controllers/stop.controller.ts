import { Request, Response, NextFunction } from 'express';
import Stop from '../models/stop.model';

const getStops = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stops = await Stop.find();
        return res.status(200).json(stops);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleStop = async (req: Request, res: Response, next: NextFunction) => {
    const stopId = req.params.stopId;

    try {
        const stop = await Stop.findById(stopId);
        return res.status(200).json(stop);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addStop = async (req: Request, res: Response, next: NextFunction) => {
    const newStop = new Stop(req.body);

    try {
        const stop = await newStop.save();
        return res.status(201).json(stop);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateStop = async (req: Request, res: Response, next: NextFunction) => {
    const stopId = req.params.stopId;
    const updateStop = req.body;

    try {
        const stop = await Stop.findByIdAndUpdate(stopId, updateStop, { new: true });
        return res.status(200).json(stop);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteStop = async (req: Request, res: Response, next: NextFunction) => {
    const stopId = req.params.stopId;

    try {
        const stop = await Stop.findByIdAndDelete(stopId);
        return res.status(200).json(stop);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getStops, getSingleStop, addStop, updateStop, deleteStop };
