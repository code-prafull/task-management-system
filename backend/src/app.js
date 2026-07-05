import express from "express";
import taskRoute from "./routes/task.route.js";
import authRoute from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());



app.use(
  cors({
    origin: `https://task-management-system-q9hp5t4jt-prafull-singhs-projects.vercel.app/`,
    credentials: true
  })
);


app.use("/api/", taskRoute);

app.use("/api/auth", authRoute);


export default app;