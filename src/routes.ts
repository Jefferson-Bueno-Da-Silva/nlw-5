import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

//settings
const settingsController = new SettingsController();
routes.post( "/settings", settingsController.create )
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

//users
const usersController = new UsersController();
routes.post( "/users", usersController.create );

// Messages
const messagesController = new MessagesController();
routes.post( "/messages", messagesController.create );
routes.get("/messages/:id", messagesController.showByUser);

export { routes };