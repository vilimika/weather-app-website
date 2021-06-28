const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=6b56be649a269e32f4ed817c6312e700&query=' + latitude + ',' + longitude;

  request ({ url, json:true}, (error, { body }) => {
    if(error){
      callback('unable to connect to weather services', undefined);
    } else if (body.success === false) {
      callback('unable to find location try another search', undefined)
    } else {
      callback(undefined, {
        weather: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
