export function  getAllNotes  (req,res)  {
    res.status(200).send("test")

}

export function  createNotes (req,res) {
    res.status(201).send("created the notes")
}


export function  updateNotes (req,res) {

    res.status(201).send("you just created a updateNotes")
}

export function  deleteNotes (req,res) {

    res.status(201).send("you just created a deleteNotes")
}






