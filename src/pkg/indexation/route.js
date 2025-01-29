import express from "express";
import * as indexationController from "./controller.js";


const indexationRouter = express.Router();

indexationRouter.get("/",indexationController.GetIndexations);
indexationRouter.get("/:id", indexationController.GetIndexationById);
indexationRouter.post("/", indexationController.CreateIndexation);
indexationRouter.put("/:id", indexationController.UpdateIndexation);
indexationRouter.delete("/:id", indexationController.DeleteIndexation);

export default indexationRouter;

