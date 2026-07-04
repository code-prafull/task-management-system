import express from "express";
import taskRoute from "./routes/task.route.js";
import authRoute from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());



app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true
  })
);


app.use("/api/", taskRoute);

app.use("/api/auth", authRoute);


export default app;