import { Router } from "express";
import * as controllers from "../controllers/bootcamps";
const bootcampsRouter = Router();
bootcampsRouter
  .route("/")
  .get(controllers.getBootcamps)
  .post(controllers.createBootcamp);

bootcampsRouter
  .route("/:id")
  .get(controllers.getBootcamp)
  .put(controllers.updateBootcamp)
  .delete(controllers.deleteBootcamp);
export default bootcampsRouter;
