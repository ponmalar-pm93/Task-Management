const weather = require('weather-js');
function getWeather() {
    const options = {
    search: 'New York, NY',
      degreeType: 'F'
    };
    
    weather.find(options, function(err, result) {
      if(err) console.log(err);
      
      console.log(JSON.stringify(result, null, 2));
    });
  }
  setInterval(getWeather, 300000); // 300000 milliseconds = 5 minutes
