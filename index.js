const axios = require("axios")
require("dotenv").config();
const {
    APPID, Q, LIMIT, URLBASE,
} = process.env

const temp =()=>{
    const nome = process.env.Q
    const url = `${URLBASE}?q=${Q}&limit=${LIMIT}&appid=${APPID}`
    axios.get(url)
    .then(res=>{
        const latitude = res.data[0].lat
        const longitude = res.data[0].lon
        console.log(`${nome}:latitude:${latitude},longitude:${longitude}`)
    })
}
temp()