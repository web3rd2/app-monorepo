#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const path = require('path');

const terminalWidth = process.stdout.columns;

yargs(hideBin(process.argv))
  .scriptName('e2e-framework')
  .parserConfiguration({
    'boolean-negation': true,
    'camel-case-expansion': false,
    'dot-notation': false,
    'duplicate-arguments-array': false,
    'populate--': true,
  })
  .commandDir(path.join(__dirname, 'commands'), {
    exclude: (filePath) => /\.test\.js$/.test(filePath),
  })
  .demandCommand()
  .recommendCommands()
  .help()
  .wrap(terminalWidth * 0.9)
  .fail((msg, err, program) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exit(1);
    }

    if (msg) {
      console.error('Error:', msg);
      program.showHelp();
    }
  })
  .parse();
