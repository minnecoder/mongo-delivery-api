import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer.model';

const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customers = await Customer.find();
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.customerId;

    try {
        const customer = await Customer.findById(customerId);
        return res.status(200).json(customer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const newCustomer = new Customer(req.body);

    try {
        const customer = await newCustomer.save();
        return res.status(201).json(customer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.customerId;
    const updateCustomer = req.body;

    try {
        const customer = await Customer.findByIdAndUpdate(customerId, updateCustomer, { new: true });
        return res.status(200).json(customer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.customerId;

    try {
        const customer = await Customer.findByIdAndDelete(customerId);
        return res.status(200).json(customer);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getCustomers, getSingleCustomer, addCustomer, updateCustomer, deleteCustomer };
