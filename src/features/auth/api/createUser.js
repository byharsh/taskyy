export const createUser = async (userData) => {
  const response = await fetch("/api/auth/create-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData }),
  });

  if (!response.ok) {
    throw new Error("user creation failed");
  }

  return;
};
