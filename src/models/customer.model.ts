import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomer {
    organizationId: number;
    name: string;
    addressId: number;
    phone: number;
    email: string;
}

export interface ICustomerModel extends ICustomer, Document {}

const CustomerSchema: Schema = new Schema(
    {
        organizationId: { type: Number, required: true, ref: 'Organization' },
        name: { type: String, required: true },
        addressId: { type: Schema.Types.ObjectId, required: true, ref: 'Address' },
        phone: { type: Number, required: true },
        email: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerModel>('Customer', CustomerSchema);
