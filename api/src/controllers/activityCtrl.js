const {Op } = require("sequelize");
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
        const newActivity = await Activity.create({name, difficulty, duration, season, countries});
        
        const AAA = await Promise.all(
            countries.map(async (c) => {
              const country = await Country.findAll({
                where: {
                  name: {
                    [Op.iLike]: `${c}`
                  }
                }
              });
              //ya que esta limitado en el modelo
              return country.map((c) => c.id); // Extraer solo el ID del país
            })
          );
          const flattenedAAA = AAA.flat();
        //?devuelvo mi nueva actividad y la agrego a los paises seleccionados
        return newActivity.addCountry(flattenedAAA);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getActivities,
    postActivity
}

        // const selectCountry = await Country.findAll({
        //     where: {
        //         name: {
        //             [Op.iLike]: `${countries}`
        //         }
        //     }
        // });