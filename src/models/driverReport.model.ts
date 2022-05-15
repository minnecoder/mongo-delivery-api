import mongoose, { Document, Schema } from 'mongoose';

export interface IDriverReport {
    driverId: number;
    vehicleId: number;
    startMileage: number;
    firstStopMileage: number;
    lastStopMileage: number;
    finalMileage: number;
    break1Start: string;
    break1End: string;
    break2Start: string;
    break2End: string;
    lunchStart: string;
    lunchEnd: string;
    stopsCompleted: number;
    stopsRemaining: number;
    numberSignatureStops: number;
}

export interface IDriverReportModel extends IDriverReport, Document {}

const DriverReportSchema: Schema = new Schema(
    {
        driverId: { type: Schema.Types.ObjectId, required: true, ref: 'Driver' },
        vehicleId: { type: Schema.Types.ObjectId, required: true, ref: 'Vehicle' },
        startMileage: Number,
        firstStopMileage: Number,
        lastStopMileage: Number,
        finalMileage: Number,
        break1Start: String,
        break1End: String,
        break2Start: String,
        break2End: String,
        lunchStart: String,
        lunchEnd: String,
        stopsCompleted: Number,
        stopsRemaining: Number,
        numberSignatureStops: Number
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IDriverReportModel>('DriverReport', DriverReportSchema);
