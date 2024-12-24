import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";

const findUserByEmail = async (email: string) => {
  try {
    const exists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return exists;
  } catch (err) {
    console.log(err);
  }
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export default {
  findUserByEmail,
  verifyPassword,
};
