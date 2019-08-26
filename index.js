#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const axios = require('axios');
const { getCode, getName } = require('country-list');
const [,, ...args] = process.argv;
const country_code = getCode(args[0]);
const current_year = new Date().getFullYear();

const init = () => {
    console.log(
      chalk.white(
        figlet.textSync("Holidate", {
          font: "3D-ASCII",
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
    console.log("Welcome to Holidate !");
  };

   
async function getHolidays( country_code, year) {
    try {
      const response = await axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${country_code}`);
      console.log("\n");
      
      response.data.forEach(holiday => {
          console.log(holiday.name,"(",holiday.date,")");
      });
    } catch (error) {
      console.error(error);
    }
  }




 init();

 console.log('Use : holidate country [year]');
 console.log('([] indicates that the argument is optional, the default value is the current year)');


if(args.length === 2){ 
    getHolidays(country_code, args[1]);
} else if( args.length === 1){
    getHolidays(country_code, current_year);
}
 
