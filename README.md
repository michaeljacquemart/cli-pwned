# holidate

Command line tool that will verify the given parameter is a well-formatted country name, transform it into a two-letters country code, then perform an HTTP request to the API of the nager.date service, returning all official holidays in that country. You can add the year as a second parameter to the command line, as such ;

```
$ holidate country [year]
```

([ ] indicates that the argument is optional, the default value beeing the current year)



## install
### Node.js and npm
 Simply go to the official [Node.JS website](https://nodejs.org/en/) and follow the instructions (for Ubuntu/Debian, the instructions are [here](https://github.com/nodesource/distributions/blob/master/README.md)).

### npm packages to use

[country-list](https://www.npmjs.com/package/country-list), to convert the country name onto a country code
[axios](https://www.npmjs.com/package/axios), to perform HTTP requests
[chalk](https://www.npmjs.com/package/chalk), to add some colors in your terminal
[figlet](https://www.npmjs.com/package/figlet), add some style to your terminal













run the following command line ;

```
npm -install michaeljacquemart/holidate

```

You are ready to go !
