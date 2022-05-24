import mongoose, { Document, Schema } from 'mongoose';

export interface ITeam {
    name: string;
    workers: number;
    managers: number;
    hubId: number;
}

export interface ITeamModel extends ITeam, Document {}

const TeamSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        workers: [{ body: Schema.Types.ObjectId, ref: 'User' }],
        managers: [{ body: Schema.Types.ObjectId, ref: 'User' }],
        hubId: { type: Schema.Types.ObjectId, required: true, ref: 'Hub' }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ITeamModel>('Team', TeamSchema);
