import { Request, Response, NextFunction } from 'express';
import CustomerNote from '../models/customerNote.model';

const getCustomerNotes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customerNotes = await CustomerNote.find();
        return res.status(200).json(customerNotes);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
    const customerNoteId = req.params.customerNoteId;

    try {
        const customerNote = await CustomerNote.findById(customerNoteId);
        return res.status(200).json(customerNote);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
    const newCustomerNote = new CustomerNote(req.body);

    try {
        const customerNote = await newCustomerNote.save();
        return res.status(201).json(customerNote);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
    const customerNoteId = req.params.customerNoteId;
    const updateCustomerNote = req.body;

    try {
        const customerNote = await CustomerNote.findByIdAndUpdate(customerNoteId, updateCustomerNote, { new: true });
        return res.status(200).json(customerNote);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
    const customerNoteId = req.params.customerNoteId;

    try {
        const customerNote = await CustomerNote.findByIdAndDelete(customerNoteId);
        return res.status(200).json(customerNote);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getCustomerNotes, getSingleCustomerNote, addCustomerNote, updateCustomerNote, deleteCustomerNote };
