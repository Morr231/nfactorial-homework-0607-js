#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs.usage("Usage: -n <your name>").option("n", {
    alias: "name",
    describe: "Enter your name",
    type: "string",
    demandOption: true,
}).argv;

const option2 = yargs.usage("Usage: -y <your age>").option("y", {
    alias: "age",
    describe: "Enter your age",
    type: "number",
    demandOption: true,
}).argv;

const greeting = `Greetings, ${options.name}!`;

console.log(greeting);

const age = `You are, ${options2.age} old!`;

console.log(age);
