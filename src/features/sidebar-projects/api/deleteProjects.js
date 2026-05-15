import { API_BASE_URL } from "../../../utils/services";

export const deleteProject = async (projectId) => {
  const response = await fetch(
    `${API_BASE_URL}?project_id=${encodeURIComponent(projectId)}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete project");
  }

  return response.json();
};
