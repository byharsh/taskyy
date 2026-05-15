import { API_BASE_URL } from "../../../utils/services";

export const updateProject = async ({ projectId, projectName }) => {
  const response = await fetch(
    `${API_BASE_URL}?project_id=${encodeURIComponent(projectId)}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        project_name: projectName,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update project");
  }

  return response.json();
};
