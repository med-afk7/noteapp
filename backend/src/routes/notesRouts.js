import express from "express"
import { getAllNotes , createNotes , deleteNotes , updateNotes} from "../controllers/notesController.js"



const router = express.Router();


router.get("/", getAllNotes)

router.post("/",createNotes )

router.delete("/:id",deleteNotes)

router.put("/:id",updateNotes )

export default router
