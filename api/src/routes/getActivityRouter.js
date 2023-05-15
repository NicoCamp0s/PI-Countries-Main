const { Router } = require("express");
const getRouter = Router();
const cts = require("../controllers/activityCtrl");

getRouter.use("/", async(req, res) => {
    try {
        const getActivities = await cts.getActivities();
       !getActivities.length ? res.status(200).json(getActivities) : res.status(404).json({error: "activities not found"})
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = getRouter;