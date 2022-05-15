import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Address from '../models/address.model';

const getAddresses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const addresses = await Address.find();
        return res.status(200).json(addresses);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleAddress = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = req.params.addressId;

    try {
        const address = await Address.findById(addressId);
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addAddress = async (req: Request, res: Response, next: NextFunction) => {
    const newAddress = new Address(req.body);

    try {
        const address = await newAddress.save();
        return res.status(201).json(address);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateAddress = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = req.params.addressId;
    const updateAddress = req.body;

    try {
        const address = await Address.findByIdAndUpdate(addressId, updateAddress, { new: true });
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteAddress = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = req.params.addressId;

    try {
        const address = await Address.findByIdAndDelete(addressId);
        return res.status(200).json(address);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getAddresses, getSingleAddress, addAddress, updateAddress, deleteAddress };
