import { DEMO_PROJECTS } from "../utils/PROJECTS";

export const projectLoader = async ({ params }) => {
  const { projectId } = params;

  const project = DEMO_PROJECTS.filter((p) => p.id === projectId);
  if (project.length === 0) {
    throw new Response("Project not found", { status: 404 });
  }
  return project[0];
};
