import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]),
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("Invalid evironment variables", _env.error.format());
  throw new Error("give error bro");
}

export const env = _env.data;
