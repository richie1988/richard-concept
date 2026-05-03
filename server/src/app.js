import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Richard Portfolio API is running");
});

app.use("/api/projects", projectRoutes);

export default app;