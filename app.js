require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

// Get command line arguments
const [,, make, model, year, filePath] = process.argv;

// Set API request options
const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {make: make, model: model, year: year},
  headers: {
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
  }
};

// Make API request and write response to file
axios.request(options).then(function (response) {
  const data = response.data;
  console.log(JSON.stringify(data, null, 2));

  fs.writeFile(filePath, JSON.stringify(data, null, 2), function (err) {
    if (err) throw err;
    console.log('Data written to file');
  });
}).catch(function (error) {
  console.error(error);
});



