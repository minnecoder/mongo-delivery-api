import mongoose, { Document, Schema } from 'mongoose';

export interface IDrivers {
    organizationId: number;
    firstName: string;
    lastName: string;
    addressId: number;
    phone: number;
    email: string;
    birthday: string;
    hireDate: string;
    team: number;
    vehicleId: number;
}

export interface IDriversModel extends IDrivers, Document {}

const DriversSchema: Schema = new Schema(
    {
        organizationId: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        addressId: { type: Schema.Types.ObjectId, required: true, ref: 'Address' },
        phone: { type: Number, required: true },
        email: { type: String, required: true },
        birthday: { type: String, required: true },
        hireDate: { type: String, required: true },
        team: { type: Number, required: true },
        vehicleId: { type: Schema.Types.ObjectId, required: true, ref: 'Vehicle' }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IDriversModel>('Drivers', DriversSchema);
