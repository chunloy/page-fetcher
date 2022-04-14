//import modules
const request = require('request');
const fs = require('fs');

const URL = process.argv[2]; //first parameter from CLI
const localPath = process.argv[3]; //secont parameter from CLI

//make HTTP request to server
request(URL, (error, response, body) => {
  if (error) console.log('error:', error); //print error if one occurred
  console.log('statusCode:', response && response.statusCode); //print the status responce code if a response was received
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.log('Error writing to file!'); //print error if any
      return;
    }
    console.log("Wrote to file!");
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});