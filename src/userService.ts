import { isValidEmail, isValidPassword } from "./validators";

interface User {
  name: string;
  email: string;
  password: string;
}

const users: User[] = [];

export function createUser(user: User): string {
  if (!user.name.trim()) {
    throw new Error("Nome inválido");
  }

  if (!isValidEmail(user.email)) {
    throw new Error("Email inválido");
  }

  if (!isValidPassword(user.password)) {
    throw new Error("Senha inválida");
  }

  const emailExists = users.some(u => u.email === user.email);

  if (emailExists) {
    throw new Error("Email já cadastrado");
  }

  users.push(user);

  return "Usuário cadastrado com sucesso";
}