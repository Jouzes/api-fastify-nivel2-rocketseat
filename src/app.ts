import fastify from "fastify";
import { registerUser } from "./http/controllers/register.controller.js";
import { appRoutes } from "./http/routes.js";

export const app = fastify();
app.register(appRoutes);
