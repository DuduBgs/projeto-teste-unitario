export function isValidEmail(email: string): boolean {
  return email.includes("@");
}

export function isValidPassword(password: string): boolean {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);

  return hasMinLength && hasNumber && hasUpperCase;
}