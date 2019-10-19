import express from "express";
import dotenv from "dotenv";

// Load env vars
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
