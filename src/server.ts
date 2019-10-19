import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bootcampsRouter from "./routes/bootcamps";
import { loggerMiddleware } from "./middleware";
import morgan from "morgan";
import connectDB from "../config/db";

// Load env vars
dotenv.config({ path: "./config/config.env" });

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "development") {
  // my solution is only for exmaple purpuses
  // app.use(loggerMiddleware);
  app.use(morgan("dev"));
}

// Mount routes
app.use("/api/v1/bootcamps", bootcampsRouter);

const server = app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: any, promise: Promise<any>) => {
  console.log(`ERROR: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
