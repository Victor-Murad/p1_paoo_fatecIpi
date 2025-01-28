const axios = require("axios")
require("dotenv").config();
const {
    APPID, Q, LIMIT, URLBASE, URLBASE2, UNIT
} = process.env

const temp =()=>{
    const nome = process.env.Q
    const url = `${URLBASE}?q=${Q}&limit=${LIMIT}&appid=${APPID}`
    axios.get(url)
    .then(res=>{
        const latitude = res.data[0].lat
        const longitude = res.data[0].lon
        console.log(`${nome}:latitude:${latitude},longitude:${longitude}`)
    const url2 = `${URLBASE2}?lat=${latitude}&lon=${longitude}&units=${UNIT}&appid=${APPID}`
    axios.get(url2)
    .then(res=>{
        const feels_like = res.data.main.feels_like
        const description = res.data.weather[0].description
        console.log(`sensação térmica:${feels_like},\ndescription:${description}`)
    })
    })
}
temp()