import express from "express";
import * as spellController from "./controller.js";

const spellRouter = express.Router();

spellRouter.get("/",spellController.GetSpells);
spellRouter.get("/:id", spellController.GetSpellById);
spellRouter.post("/", spellController.CreateSpell);
spellRouter.put("/:id", spellController.UpdateSpell);
spellRouter.delete("/:id", spellController.DeleteSpell);

export default spellRouter;
