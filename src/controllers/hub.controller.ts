import { Request, Response, NextFunction } from 'express';
import Hub from '../models/hub.model';

const getHubs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hubs = await Hub.find();
        return res.status(200).json(hubs);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleHub = async (req: Request, res: Response, next: NextFunction) => {
    const hubId = req.params.hubId;

    try {
        const hub = await Hub.findById(hubId);
        return res.status(200).json(hub);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addHub = async (req: Request, res: Response, next: NextFunction) => {
    const newHub = new Hub(req.body);

    try {
        const hub = await newHub.save();
        return res.status(201).json(hub);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateHub = async (req: Request, res: Response, next: NextFunction) => {
    const hubId = req.params.hubId;
    const updateHub = req.body;

    try {
        const hub = await Hub.findByIdAndUpdate(hubId, updateHub, { new: true });
        return res.status(200).json(hub);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteHub = async (req: Request, res: Response, next: NextFunction) => {
    const hubId = req.params.hubId;

    try {
        const hub = await Hub.findByIdAndDelete(hubId);
        return res.status(200).json(hub);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getHubs, getSingleHub, addHub, updateHub, deleteHub };
