const { Sequelize } = require("sequelize");
const { Activity, Country } = require("../db");
const axios = require("axios");
const {Op} = require("sequelize");

//! SI NO FUNCA PROBAR CON PROMISE.ALL 
//! DROPEAR LA TABLA DE COUNTRY PARA EFECTUAR LOS CAMBIOS
//! Y PONER FORCE FALSE
const getCountries = async() => {
    
    let DbCountries = await Country.findAll({
        include: [Activity]
    })
    try {
        
        if(!DbCountries.length) {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            //console.log(response);
            console.log(response);
            const countries = response.data.map(country => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags.png,
                    continent: country.continents,
                    capital: country.capital ? country.capital[0] : "capital not found", // puedo poner null y manejarlo en el front
                    subregion: country.subregion ? country.subregion : "sub-region not found", // puedo poner null y manejarlo en el front
                    area: country.area,
                    population: country.population,
                    //!agregar despues de terminar
                    languages: country.languages ? Object.values(country.languages) : null
                }
            })
            
            countries.map((country) => {
                Country.findOrCreate({
                    where: {
                        id: country.id,
                        name: country.name,
                        flags: country.flags,
                        continent: country.continent,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                        languages: country.languages
                    }      
                })
            })
            //console.log(countries);
            return countries;
        } else {
            return DbCountries;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getCountryByName = async(name) => {
    try {
        const countryName = await Country.findAll({
            where: {
                name: {
                    //? operador ilike, no hay error en mayus y minus 
                    [Op.iLike]: `%${name}%`
                }
            },
           include: [Activity]
        })
        //console.log(countryName);
        return countryName;
    } catch (error) {
        console.log(error.message);
    }
}

const getCountryById = async(id) => {
    try {
        const countryId = await Country.findByPk(id, {
           include: [Activity]
        })
        //console.log(countryId);
        return countryId;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getCountries,
    getCountryByName,
    getCountryById
}