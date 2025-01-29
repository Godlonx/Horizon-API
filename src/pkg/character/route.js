import express from "express";
import * as characterController from "./controller.js";


const characterRouter = express.Router();

characterRouter.get("/",characterController.GetCharacters);
characterRouter.get("/:id", characterController.GetCharacterById);
characterRouter.post("/", characterController.createCharacter);
characterRouter.put("/:id", characterController.updateCharacter);
characterRouter.delete("/:id", characterController.deleteCharacter);

export default characterRouter;

