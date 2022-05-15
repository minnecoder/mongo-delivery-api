import { Request, Response, NextFunction } from 'express';
import PreviousSigner from '../models/previousSigner.model';

const getPreviousSigners = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const previousSigners = await PreviousSigner.find();
        return res.status(200).json(previousSigners);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSinglePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
    const previousSignerId = req.params.previousSignerId;

    try {
        const previousSigner = await PreviousSigner.findById(previousSignerId);
        return res.status(200).json(previousSigner);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addPreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
    const newPreviousSigner = new PreviousSigner(req.body);

    try {
        const previousSigner = await newPreviousSigner.save();
        return res.status(201).json(previousSigner);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
    const previousSignerId = req.params.previousSignerId;
    const updatePreviousSigner = req.body;

    try {
        const previousSigner = await PreviousSigner.findByIdAndUpdate(previousSignerId, updatePreviousSigner, { new: true });
        return res.status(200).json(previousSigner);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
    const previousSignerId = req.params.previousSignerId;

    try {
        const previousSigner = await PreviousSigner.findByIdAndDelete(previousSignerId);
        return res.status(200).json(previousSigner);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getPreviousSigners, getSinglePreviousSigner, addPreviousSigner, updatePreviousSigner, deletePreviousSigner };
