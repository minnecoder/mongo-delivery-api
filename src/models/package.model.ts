import mongoose, { Document, Schema } from 'mongoose';

export interface IPackage {
    orderId: number;
    orderItemId: number;
    productId: number;
    packageStatus: string;
    packageBarcode: number;
}

export interface IPackageModel extends IPackage, Document {}

const PackageSchema: Schema = new Schema(
    {
        orderId: { type: Schema.Types.ObjectId, required: true, ref: 'Order' },
        orderItemId: { type: Schema.Types.ObjectId, required: true, ref: 'OrderItem' },
        productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
        packageStatus: {
            type: String,
            enum: ['not started', 'picked', 'scanned', 'on truck', 'delivered', 'damaged', 'returned'],
            default: 'not started',
            required: true
        },
        packageBarcode: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IPackageModel>('Package', PackageSchema);
