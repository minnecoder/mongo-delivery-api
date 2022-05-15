import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomerHours {
    customerId: number;
    mondayOpen: string;
    mondayClose: string;
    tuesdayOpen: string;
    tuesdayClose: string;
    wednesdayOpen: string;
    wednesdayClose: string;
    thursdayOpen: string;
    thursdayClose: string;
    fridayOpen: string;
    fridayClose: string;
    saturdayOpen: string;
    saturdayClose: string;
    sundayOpen: string;
    sundayClose: string;
}

export interface ICustomerHoursModel extends ICustomerHours, Document {}

const CustomerHoursSchema: Schema = new Schema(
    {
        customerId: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
        mondayOpen: { type: String, default: '8:00' },
        mondayClose: { type: String, default: '17:00' },
        tuesdayOpen: { type: String, default: '8:00' },
        tuesdayClose: { type: String, default: '17:00' },
        wednesdayOpen: { type: String, default: '8:00' },
        wednesdayClose: { type: String, default: '17:00' },
        thursdayOpen: { type: String, default: '8:00' },
        thursdayClose: { type: String, default: '17:00' },
        fridayOpen: { type: String, default: '8:00' },
        fridayClose: { type: String, default: '17:00' },
        saturdayOpen: { type: String, default: '8:00' },
        saturdayClose: { type: String, default: '17:00' },
        sundayOpen: { type: String, default: '8:00' },
        sundayClose: { type: String, default: '17:00' }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerHoursModel>('CustomerHours', CustomerHoursSchema);
