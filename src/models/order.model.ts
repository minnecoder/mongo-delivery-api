import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder {
    customerId: number;
    orderStatus: string;
    orderTotal: number;
    isGrouped: boolean;
    previousOrderNumber: number;
}

export interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
        orderStatus: { type: String, required: true },
        orderTotal: { type: Number, required: true },
        isGrouped: { type: Boolean, default: false },
        previousOrderNumber: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderModel>('Order', OrderSchema);
