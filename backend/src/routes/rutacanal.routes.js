import {Router} from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res) => {
    res.json({ "aplicacion": "gmail"})
});

rutacanal.get("/canal", (req, res) => {
    res.json({
        "msg":"hola mundo",
        "user": "carlos",
        "aplicacion": "gmail",
        "type": "Backend"

    })
});


export default rutacanal;
