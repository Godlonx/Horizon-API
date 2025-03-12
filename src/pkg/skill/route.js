import express from "express";
import * as skillController from "./controller.js";


const skillRouter = express.Router();

skillRouter.get("/",skillController.GetSkills);
skillRouter.get("/:id", skillController.GetSkillById);
skillRouter.post("/", skillController.createSkill);
skillRouter.put("/:id", skillController.updateSkill);
skillRouter.delete("/:id", skillController.deleteSkill);

export default skillRouter;
