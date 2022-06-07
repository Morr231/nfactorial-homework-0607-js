#!/usr/bin/env node

const { program } = require("commander");

const greet = (name) => {
    console.log(`Hello ${name}!`);
}

program
    .command('greet')
    .argument('<string>', 'name')
    .description('Greet user')
    .action(greet)

program.parse()
