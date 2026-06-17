import { v4 as uuidv4 } from "uuid";

import { API_USER_URL } from "../../../utils/services";
import { getUserByEmail } from "./getUser";

export const createUser = async ({ name, email, password }) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("An account with this email already exists");
  }

  const newUser = {
    user_id: uuidv4(),
    user_name: name,
    user_email: email,
    user_password: password,
    created_at: new Date().toISOString(),
  };

  const response = await fetch(API_USER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to create account");
  }

  const { user_password: _password, user_id: _userId, ...safeUser } = newUser;

  return safeUser;
};
