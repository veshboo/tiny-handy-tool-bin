#!/usr/bin/env node

var jacoco = require("jacoco-parse");
jacoco.parseFile(process.argv[1],
                 function(err, result) {
                   if (err) console.log(err);
                 });
