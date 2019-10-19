import { Router } from "express";
const bootcampsRouter = Router();
bootcampsRouter.get("/", (req, res) => {
  res.json({ success: true, msg: "Get all bootcamps" });
});
bootcampsRouter.get("/:id", (req, res) => {
  res.json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});
bootcampsRouter.put("/v1/bootcamps/:id", (req, res) => {
  res.json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});
bootcampsRouter.post("/", (req, res) => {
  res.json({ success: true, msg: "Create new bootcamp" });
});
bootcampsRouter.delete("/:id", (req, res) => {
  res.json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});
export default bootcampsRouter;
