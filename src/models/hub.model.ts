import mongoose, { Document, Schema } from 'mongoose';

export interface IHub {
    name: string;
    location: string;
    addressId: number;
    teams: number;
}

export interface IHubModel extends IHub, Document {}

const HubSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        addressId: { type: Schema.Types.ObjectId, required: true, ref: 'Address' },
        teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IHubModel>('Hub', HubSchema);
