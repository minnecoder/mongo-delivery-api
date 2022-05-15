import { Request, Response, NextFunction } from 'express';
import CustomerHours from '../models/customerHours.model';

const getCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customerHours = await CustomerHours.find();
        return res.status(200).json(customerHours);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
    const customerHoursId = req.params.customerHoursId;

    try {
        const customerHours = await CustomerHours.findById(customerHoursId);
        return res.status(200).json(customerHours);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
    const newCustomerHours = new CustomerHours(req.body);

    try {
        const customerHours = await newCustomerHours.save();
        return res.status(201).json(customerHours);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
    const customerHoursId = req.params.customerHoursId;
    const updateCustomerHours = req.body;

    try {
        const customerHours = await CustomerHours.findByIdAndUpdate(customerHoursId, updateCustomerHours, { new: true });
        return res.status(200).json(customerHours);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
    const customerHoursId = req.params.customerHoursId;

    try {
        const customerHours = await CustomerHours.findByIdAndDelete(customerHoursId);
        return res.status(200).json(customerHours);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getCustomerHours, getSingleCustomerHours, addCustomerHours, updateCustomerHours, deleteCustomerHours };
