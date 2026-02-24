import { hash, compare } from "bcrypt-ts";
export async function encryptPassword(password) {
    const hashPassword = await hash(password, 10);
    return hashPassword;
}
export async function comparePassword(password, hashPassword) {
    return await compare(password, hashPassword);
}
//# sourceMappingURL=utils.js.map