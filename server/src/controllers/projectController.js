import pool from "../config/db.js";

export const getAllProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM projects ORDER BY id ASC"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching projects:", error.message);
    res.status(500).json({ message: "Server error while fetching projects" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM projects WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching project:", error.message);
    res.status(500).json({ message: "Server error while fetching project" });
  }
};