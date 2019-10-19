// @desc    Get All bootcamps
// @route   GET /api/v1/bootcamps
// @access  Pubilic
import { Request, Response } from "express";
export const bootcampsRouter = (req: Request, res: Response) => {
  res.json({ success: true, msg: "Get all bootcamps" });
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps:id
// @access  Pubilic
export const getBootcamp = (req: Request, res: Response) => {
  res.json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = (req: Request, res: Response) => {
  res.json({ success: true, msg: "Create new bootcamp" });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps:id
// @access  Private
export const updateBootcamp = (req: Request, res: Response) => {
  res.json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc    Detlete bootcamp
// @route   DELETE /api/v1/bootcamps:id
// @access  Private
export const deleteBootcamp = (req: Request, res: Response) => {
  res.json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
