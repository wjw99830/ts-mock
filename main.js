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
    const fullname = cmd.input.endsWith('.ts') ? cmd.input : cmd.input + '.ts';
    const schemas = await require('./lib/parse')(fullname);
    if (!cmd.output || cmd.output.match(/[(ts)(js)]$/)) {
      require('./lib/write-script')(schemas, cmd.output || fullname.replace('.ts', '-mock.ts'));
    } else if (cmd.output.endsWith('json')) {
      require('./lib/write-json')(schemas, cmd.output);
    } else {
      console.error(`不支持${filename}的文件类型`);
    }
  }
})();
