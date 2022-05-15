import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomerNotes {
    customerId: number;
    note: string;
}

export interface ICustomerNotesModel extends ICustomerNotes, Document {}

const CustomerNotesSchema: Schema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
        note: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerNotesModel>('CustomerNotes', CustomerNotesSchema);
