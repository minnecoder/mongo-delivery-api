import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    item: string;
    description: string;
    cost: number;
    price: number;
    onHand: number;
    productStatus: string;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        item: { type: String, required: true },
        description: { type: String, required: true },
        cost: { type: Number, required: true },
        price: { type: Number, required: true },
        onHand: { type: Number, required: true },
        productStatus: {
            type: String,
            enum: ['out of stock', 'in stock', 'running low'],
            default: 'in stock'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);
