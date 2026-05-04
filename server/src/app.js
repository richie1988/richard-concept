import express from "express";
import cors from "cors";
import path from "path";

import projectRoutes from "./routes/projectRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root test
app.get("/", (req, res) => {
  res.send("Richard Portfolio API is running");
});

// API routes
app.use("/api/projects", projectRoutes);

// ===============================
// FIXED STATIC FILE SERVING (Render-safe)
// ===============================

// IMPORTANT: use process.cwd() (works on Render + local)
const imagesPath = path.join(process.cwd(), "public/images");

app.use("/images", express.static(imagesPath));

export default app;