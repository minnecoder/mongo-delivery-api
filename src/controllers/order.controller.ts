import { Request, Response, NextFunction } from 'express';
import Order from '../models/order.model';

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;

    try {
        const order = await Order.findById(orderId);
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addOrder = async (req: Request, res: Response, next: NextFunction) => {
    const newOrder = new Order(req.body);

    try {
        const order = await newOrder.save();
        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;
    const updateOrder = req.body;

    try {
        const order = await Order.findByIdAndUpdate(orderId, updateOrder, { new: true });
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;

    try {
        const order = await Order.findByIdAndDelete(orderId);
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getOrders, getSingleOrder, addOrder, updateOrder, deleteOrder };
