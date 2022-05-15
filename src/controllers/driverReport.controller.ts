import { Request, Response, NextFunction } from 'express';
import DriverReport from '../models/driverReport.model';

const getDriverReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const driverReports = await DriverReport.find();
        return res.status(200).json(driverReports);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleDriverReport = async (req: Request, res: Response, next: NextFunction) => {
    const driverReportId = req.params.driverReportId;

    try {
        const driverReport = await DriverReport.findById(driverReportId);
        return res.status(200).json(driverReport);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const addDriverReport = async (req: Request, res: Response, next: NextFunction) => {
    const newDriverReport = new DriverReport(req.body);

    try {
        const driverReport = await newDriverReport.save();
        return res.status(201).json(driverReport);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateDriverReport = async (req: Request, res: Response, next: NextFunction) => {
    const driverReportId = req.params.driverReportId;
    const updateDriverReport = req.body;

    try {
        const driverReport = await DriverReport.findByIdAndUpdate(driverReportId, updateDriverReport, { new: true });
        return res.status(200).json(driverReport);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteDriverReport = async (req: Request, res: Response, next: NextFunction) => {
    const driverReportId = req.params.driverReportId;

    try {
        const driverReport = await DriverReport.findByIdAndDelete(driverReportId);
        return res.status(200).json(driverReport);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { getDriverReports, getSingleDriverReport, addDriverReport, updateDriverReport, deleteDriverReport };
