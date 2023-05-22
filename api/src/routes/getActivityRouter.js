const { Router } = require("express");
const getRouter = Router();
const cts = require("../controllers/activityCtrl");

getRouter.use("/", async(req, res) => {
    try {
        const getActivities = await cts.getActivities();
        //console.log(getActivities);
        getActivities.length ? res.status(200).json(getActivities) : res.status(404).json({error: "activities not found"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = getRouter;