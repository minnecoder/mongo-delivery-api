import { Request, Response, NextFunction } from 'express';
import Product from '../models/product.model';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;

    try {
        const product = await Product.findById(productId);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    const newProduct = new Product(req.body);

    try {
        const product = await newProduct.save();
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;
    const updateProduct = req.body;

    try {
        const product = await Product.findByIdAndUpdate(productId, updateProduct, { new: true });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;

    try {
        const product = await Product.findByIdAndDelete(productId);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getProducts, getSingleProduct, addProduct, updateProduct, deleteProduct };
