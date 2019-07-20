#!/usr/bin/env node

const cmd = require('commander');
cmd
.option('-i, --input <filename>', 'ts file including interface.')
.option('-o, --output <filename>', 'output filename.')
.option('--ts', 'specified generate .ts file.', true)
.option('--js', 'specified generate .js file.')
.option('--json', 'specified generate .json file.')
.parse(process.argv);

(async () => {
  if (cmd.input) {
    const schemas = await require('./lib/parse')(cmd.input + '.ts');
    require('./lib/write-ts')(schemas, cmd.output || cmd.input + '-mock.ts');
  }
})();
