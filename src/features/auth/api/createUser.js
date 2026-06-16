import { v4 as uuidv4 } from "uuid";

import { USERS_API_URL } from "../../../utils/services";
import { getUserByEmail } from "./getUser";

export const createUser = async ({ name, email, password }) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("An account with this email already exists");
  }

  const newUser = {
    user_id: uuidv4(),
    name,
    email,
    password,
    created_at: new Date().toISOString(),
  };

  const response = await fetch(USERS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to create account");
  }

  const { password: _password, ...safeUser } = newUser;

  return safeUser;
};
