const { Router } = require("express");
const postRouter = Router();
const cts = require("../controllers/activityCtrl");

postRouter.use("/", async(req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
     // Verificar si algún campo es null
    try {
        const newActivity = await cts.postActivity(name, difficulty, duration, season, countries);
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = postRouter;