import { Request, Response, NextFunction } from 'express';
import Team from '../models/team.model';

const getTeams = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teams = await Team.find();
        return res.status(200).json(teams);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleTeam = async (req: Request, res: Response, next: NextFunction) => {
    const teamId = req.params.teamId;

    try {
        const team = await Team.findById(teamId);
        return res.status(200).json(team);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addTeam = async (req: Request, res: Response, next: NextFunction) => {
    const newTeam = new Team(req.body);

    try {
        const team = await newTeam.save();
        return res.status(201).json(team);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateTeam = async (req: Request, res: Response, next: NextFunction) => {
    const teamId = req.params.teamId;
    const updateTeam = req.body;

    try {
        const team = await Team.findByIdAndUpdate(teamId, updateTeam, { new: true });
        return res.status(200).json(team);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
    const teamId = req.params.teamId;

    try {
        const team = await Team.findByIdAndDelete(teamId);
        return res.status(200).json(team);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getTeams, getSingleTeam, addTeam, updateTeam, deleteTeam };
