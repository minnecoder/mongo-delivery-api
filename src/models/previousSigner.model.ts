import mongoose, { Document, Schema } from 'mongoose';

export interface IPreviousSigners {
    customerId: number;
    firstName: string;
    lastName: string;
}

export interface IPreviousSignersModel extends IPreviousSigners, Document {}

const PreviousSignersSchema: Schema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IPreviousSignersModel>('PreviousSigners', PreviousSignersSchema);
