const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const countryRouter = require("./getCountryRouter");
const activitiesRouter = require("./getActivityRouter");
const activityRouter = require("./activityRouter")
 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countryRouter);
router.use("/activities", activitiesRouter);
router.use("/activity", activityRouter);

module.exports = router;
