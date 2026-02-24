import { hash, compare } from "bcrypt-ts"

export async function encryptPassword(password: string): Promise<string> {
  const hashPassword = await hash(password, 10)
  return hashPassword
}

export async function comparePassword(
  password: string,
  hashPassword: string,
): Promise<boolean> {
  return await compare(password, hashPassword)
}
