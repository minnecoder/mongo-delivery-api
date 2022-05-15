import mongoose, { Document, Schema } from 'mongoose';

export interface IOrganization {
    name: string;
    email: string;
    country: string;
    organizationAdmins: number;
}

export interface IOrganizationModel extends IOrganization, Document {}

const OrganizationSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        country: { type: String, required: true },
        organizationAdmins: [{ body: Number }]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrganizationModel>('Organization', OrganizationSchema);
