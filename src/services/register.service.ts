import { hash } from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { PrismaUsersRepository } from "../repositores/prisma-users-repository.js";

interface registerServiceParams {
  name: string,
  email: string,
  password: string
}

export async function registerService({ name, email, password }: registerServiceParams) {
  const password_hash = await hash(password, 6);
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    } });

  if (userWithSameEmail) {
    throw new Error("E-mail already exists");
  }
  
  await PrismaUsersRepository.create({
    name,
    email,
    password,
  });
}
