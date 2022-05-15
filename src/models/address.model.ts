import mongoose, { Document, Schema } from 'mongoose';

export interface IAddress {
    number: number;
    street: string;
    apartment: string;
    suite: number;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

export interface IAddressModel extends IAddress, Document {}

const AddressSchema: Schema = new Schema(
    {
        number: { type: Number, required: true },
        street: { type: String, required: true },
        apartment: { type: String, required: false },
        suite: { type: Number, required: false },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: Number, required: true },
        country: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IAddressModel>('Address', AddressSchema);
