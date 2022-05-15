import { Request, Response, NextFunction } from 'express';
import OrderItem from '../models/orderItem.model';

const getOrderItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderItems = await OrderItem.find();
        return res.status(200).json(orderItems);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    const orderItemId = req.params.orderItemId;

    try {
        const orderItem = await OrderItem.findById(orderItemId);
        return res.status(200).json(orderItem);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    const newOrderItem = new OrderItem(req.body);

    try {
        const orderItem = await newOrderItem.save();
        return res.status(201).json(orderItem);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    const orderItemId = req.params.orderItemId;
    const updateOrderItem = req.body;

    try {
        const orderItem = await OrderItem.findByIdAndUpdate(orderItemId, updateOrderItem, { new: true });
        return res.status(200).json(orderItem);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    const orderItemId = req.params.orderItemId;

    try {
        const orderItem = await OrderItem.findByIdAndDelete(orderItemId);
        return res.status(200).json(orderItem);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getOrderItems, getSingleOrderItem, addOrderItem, updateOrderItem, deleteOrderItem };
