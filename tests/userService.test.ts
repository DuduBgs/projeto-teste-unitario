import { createUser } from "../src/userService";

describe("Cadastro de usuário", () => {
  test("deve cadastrar usuário com dados válidos", () => {
    const result = createUser({
      name: "Eduardo",
      email: "edu@email.com",
      password: "Senha123"
    });

    expect(result).toBe("Usuário cadastrado com sucesso");
  });

  test("deve falhar se nome estiver vazio", () => {
    expect(() =>
      createUser({
        name: "",
        email: "edu@email.com",
        password: "Senha123"
      })
    ).toThrow("Nome inválido");
  });

  test("deve falhar para email inválido", () => {
    expect(() =>
      createUser({
        name: "Eduardo",
        email: "email.com",
        password: "Senha123"
      })
    ).toThrow("Email inválido");
  });

  test("deve falhar para senha fraca", () => {
    expect(() =>
      createUser({
        name: "Eduardo",
        email: "edu@email.com",
        password: "abc"
      })
    ).toThrow("Senha inválida");
  });

  test("deve impedir email duplicado", () => {
    createUser({
      name: "Eduardo",
      email: "dup@email.com",
      password: "Senha123"
    });

    expect(() =>
      createUser({
        name: "Outro",
        email: "dup@email.com",
        password: "Senha123"
      })
    ).toThrow("Email já cadastrado");
  });
});