const express = require('express');
const { urlencoded } = require('express');
const app = express();

// const PORT = 8081;
const PORT = 8081;
// const KEY = process.env.KEY
const KEY = '88e6351981ab46cf81964adbc5ddb21b'
// const BASE_URL = process.env.BASE_URL;
const BASE_URL = 'http://api.weatherbit.io/v2.0/current'

app.use(express.json());
app.use(urlencoded({extended: true}))

app.use('/api/weather', async ( req, res) => {
    const result = await import ('got')
    const {got } = result;
    

try {
    const {latitude, longitude} = req.query

    if (!latitude) {
       return res.status(400).json({message: 'no latitude !!!!!!!!'})        
    }
    if (!longitude) {
      return  res.status(400).json({message: 'no longitude !!!!!!!!'})        
    }
    const responce = await got(BASE_URL, {searchParams:{
        key: KEY,
        // lat: '50.427107',
        // lon: '30.567437',
        lat: latitude,
        lon: longitude,
    }, responseType: 'json'});

const  [weatherData] = responce.body.data;

 const {city_name,
    weather: {description},
    temp,
    } = weatherData

res.json({city_name, description, temp});

 } catch (error) { 
   res.status(500).json({message: error.message})
}
});


app.listen(PORT, (err) =>{   
     if (err) {
        console.error('error server rrrr', err)
    }
console.log(`server run on port ${PORT}`);
});

