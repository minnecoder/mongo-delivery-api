import mongoose, { Document, Schema } from 'mongoose';

export interface IVehicle {
    vehicleYear: number;
    vehicleMake: string;
    vehicleModel: string;
    licensePlate: string;
    tabRenewalDate: string;
    vehicleStatus: string;
}

export interface IVehicleModel extends IVehicle, Document {}

const VehicleSchema: Schema = new Schema(
    {
        vehicleYear: { type: Number, required: true },
        vehicleMake: { type: String, required: true },
        vehicleModel: { type: String, required: true },
        licensePlate: { type: String, required: true },
        tabRenewalDate: { type: String, required: true },
        vehicleStatus: { type: String, enum: ['operational', 'being repaired', 'in the lot'], default: 'operational' }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IVehicleModel>('Vehicle', VehicleSchema);
