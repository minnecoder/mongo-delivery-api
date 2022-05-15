import mongoose, { Document, Schema } from 'mongoose';

export interface IOrderItems {
    orderId: number;
    productId: number;
    quantity: number;
}

export interface IOrderItemsModel extends IOrderItems, Document {}

const OrderItemsSchema: Schema = new Schema(
    {
        orderId: { type: Schema.Types.ObjectId, required: true, ref: 'Order' },
        productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
        quantity: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderItemsModel>('OrderItems', OrderItemsSchema);
