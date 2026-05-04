import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import projectRoutes from "./routes/projectRoutes.js";

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Richard Portfolio API is running");
});

// API routes
app.use("/api/projects", projectRoutes);

// ===============================
// FIX: Proper static image serving for Render
// ===============================

// Required to resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve images correctly in production
app.use(
  "/images",
  express.static(path.join(__dirname, "../public/images"))
);

export default app;