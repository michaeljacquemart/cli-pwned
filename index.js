#!/usr/bin/env node
const chalk = require("chalk");
const figlet = require("figlet");
const axios = require('axios');
const { getCode, getName } = require('country-list');

const init = () => {
    console.log(
      chalk.white(
        figlet.textSync("Holidates", {
          font: "3D-ASCII",
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
    console.log("Welcome to Holidates !");
  };

  console.log(getNames());


  init();