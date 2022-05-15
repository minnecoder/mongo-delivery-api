import mongoose, { Document, Schema } from 'mongoose';

export interface IStop {
    customerId: number;
    orderId: number;
    vehicleId: number;
    driverId: number;
    isDelivered: boolean;
    isSigned: boolean;
    state: string;
    reasonCode: string;
    signerName: string;
    startTime: string;
    endTime: string;
    averageTime: string;
    isReturnStop: boolean;
}

export interface IStopModel extends IStop, Document {}

const StopSchema: Schema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
        orderId: { type: Schema.Types.ObjectId, required: true, ref: 'Order' },
        vehicleId: { type: Schema.Types.ObjectId, required: true, ref: 'Vehicle' },
        driverId: { type: Schema.Types.ObjectId, required: true, ref: 'Driver' },
        isDelivered: { type: Boolean, default: false },
        isSigned: { type: Boolean, default: false },
        state: { type: String, required: true },
        reasonCode: {
            type: String,
            enum: [
                'Business Closed',
                'Customer Not Available',
                'Address Problem',
                'Holiday Closed',
                'Requested Re-delivery',
                'Damaged',
                'Refused By Customer',
                'Secured Building-Access Denied',
                'Undeliverable Address',
                'Ran Out Of Time',
                'Truck Breakdown',
                'Weather',
                'Placed on Wrong Truck'
            ]
        },
        signerName: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        averageTime: { type: String, required: true },
        isReturnStop: { type: Boolean, default: false }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IStopModel>('Stop', StopSchema);
