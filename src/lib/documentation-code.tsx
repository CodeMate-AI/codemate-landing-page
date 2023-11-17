export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://app.codemate.ai',
    data: {
      features1: 'Simple, Fast, Reliable',
      features2: 'Easy to use, Easy to learn',
    },
    headers: {
      'Authorization': 'YOUR_SUPPORT',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`


export const python = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://app.codemate.ai',
    data: {
      features1: 'Simple, Fast, Reliable',
      features2: 'Easy to use, Easy to learn',
    },
    headers: {
      'Authorization': 'YOUR_SUPPORT',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`
