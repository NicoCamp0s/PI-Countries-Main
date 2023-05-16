const {Router} = require("express");
const getRouter = Router();
const cts = require("../controllers/countryCtrl");

//?peticion por "name" y muestra de todos
getRouter.get("/", async(req, res) => {
    const { name } = req.query;
    //console.log(name);
    try {
        //* por name...
        if(name) {
            //console.log(name);
            const countryByName = await cts.getCountryByName(name);
            if(countryByName) {
                res.status(200).json(countryByName);
            } else {
                res.status(404).json({error: "Country not found"});
            }
        } else {
            //* me traigo todos...
            const allCountries = await cts.getCountries();
            //console.log(allCountries);
            if(allCountries) {
                res.status(200).json(allCountries);
            } else {
                res.status(404).json({error: "countries not found"})
            }
        }
    } catch (error) {
            res.status(500).json({error: error.message})
    }
})

//?peticion por "id"
getRouter.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const countryById = await cts.getCountryById(id);
        if (countryById) {
            res.status(200).json(countryById);
        } else {
            res.status(404).json({error: "ID country not found"});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = getRouter
