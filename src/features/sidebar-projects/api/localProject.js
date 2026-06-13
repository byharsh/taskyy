export const getProjects = () => {
  return JSON.parse(localStorage.getItem("projects")) || [];
};

export const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const removeLocalTodo = (projectId) => {
  const projects = getProjects();

  const updatedProjects = projects.filter(
    (project) => project.id !== projectId,
  );

  saveProjects(updatedProjects);
};
