import { v4 as uuidv4 } from "uuid";
import { DEMO_PROJECTS } from "../../../utils/PROJECTS";

export const createProject = (data) => {
  const name = data.project_name.trim();
  if (!name) return;

  const randomProject =
    DEMO_PROJECTS[Math.floor(Math.random() * DEMO_PROJECTS.length)];

  const newProject = {
    id: uuidv4(),
    project_name: data.project_name,
    Icon: randomProject.Icon,
    accent: randomProject.accent,
  };

  localStorage.setItem("projects", JSON.stringify(["New Project", newProject]));

  return newProject;
};
