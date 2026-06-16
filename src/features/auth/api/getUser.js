import { USERS_API_URL } from "../../../utils/services";

export const getUserByEmail = async (email) => {
  const response = await fetch(
    `${USERS_API_URL}?email=${encodeURIComponent(email)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to look up user");
  }

  const data = await response.json();

  return Array.isArray(data) && data.length > 0 ? data[0] : null;
};

export const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  const { password: _password, ...safeUser } = user;

  return safeUser;
};
