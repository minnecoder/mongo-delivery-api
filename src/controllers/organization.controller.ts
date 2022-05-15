import { Request, Response, NextFunction } from 'express';
import Organization from '../models/organization.model';

const getOrganizations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const organizations = await Organization.find();
        return res.status(200).json(organizations);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const organizationId = req.params.organizationId;

    try {
        const organization = await Organization.findById(organizationId);
        return res.status(200).json(organization);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const newOrganization = new Organization(req.body);

    try {
        const organization = await newOrganization.save();
        return res.status(201).json(organization);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const organizationId = req.params.organizationId;
    const updateOrganization = req.body;

    try {
        const organization = await Organization.findByIdAndUpdate(organizationId, updateOrganization, { new: true });
        return res.status(200).json(organization);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteOrganization = async (req: Request, res: Response, next: NextFunction) => {
    const organizationId = req.params.organizationId;

    try {
        const organization = await Organization.findByIdAndDelete(organizationId);
        return res.status(200).json(organization);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getOrganizations, getSingleOrganization, addOrganization, updateOrganization, deleteOrganization };
