import express from "express";
import * as characterController from "./controller.js";


const characterRouter = express.Router();

characterRouter.get("/",characterController.GetCharacters);
characterRouter.get("/:id", characterController.GetCharacterById);
characterRouter.post("/", characterController.CreateCharacter);
characterRouter.put("/:id", characterController.UpdateCharacter);
characterRouter.delete("/:id", characterController.DeleteCharacter);

export default characterRouter;

