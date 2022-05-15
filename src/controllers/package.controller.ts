import { Request, Response, NextFunction } from 'express';
import Package from '../models/package.model';

const getPackages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const packages = await Package.find();
        return res.status(200).json(packages);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSinglePackage = async (req: Request, res: Response, next: NextFunction) => {
    const packageId = req.params.packageId;

    try {
        const carton = await Package.findById(packageId);
        return res.status(200).json(carton);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addPackage = async (req: Request, res: Response, next: NextFunction) => {
    const newPackage = new Package(req.body);

    try {
        const carton = await newPackage.save();
        return res.status(201).json(carton);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePackage = async (req: Request, res: Response, next: NextFunction) => {
    const packageId = req.params.packageId;
    const updatePackage = req.body;

    try {
        const carton = await Package.findByIdAndUpdate(packageId, updatePackage, { new: true });
        return res.status(200).json(carton);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePackage = async (req: Request, res: Response, next: NextFunction) => {
    const packageId = req.params.packageId;

    try {
        const carton = await Package.findByIdAndDelete(packageId);
        return res.status(200).json(carton);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getPackages, getSinglePackage, addPackage, updatePackage, deletePackage };
