const { Sequelize } = require("sequelize");
const { Activity, Country } = require("../db");

const getActivities = async() => {
    try {
        let activity = await Activity.findAll({});
        return activity;
    } catch (error) {
        console.log(error.message + " getActivity");
    }
}

const postActivity = async(name, difficulty, duration, season, countries) => {
    try {
        const newActivity = await Activity.create({name, difficulty, duration, season});
        //console.log(newActivity);
        const selectCountry = await Country.findAll({
            where: {
                name: countries
            }
        });
        //devuelvo mi nueva actividad y la agrego a los paises seleccionados
        return newActivity.addCountry(selectCountry)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getActivities,
    postActivity
}