const axios = require('axios');
const fs = require('fs');
const process = require('process');
require('dotenv').config();


// Get the command line arguments
const [,, make, model, year, filePath] = process.argv;

// Set up the API request
const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {make: make, model: model, year: year},
  headers: {
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY
  }
};

// Make the API request using axios
axios.request(options)
  .then(response => {
    const data = response.data;
    console.log(data); // Display the content

    // Save the data to a text file
    fs.writeFile(filePath, JSON.stringify(data), err => {
      if (err) throw err;
      console.log(`Data written to ${filePath}`);
    });
  })
  .catch(error => {
    console.log(`Error fetching data: ${error}`);
  });