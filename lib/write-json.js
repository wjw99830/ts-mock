require('colors');
const { writeFile } = require('./fs');
const { resolve } = require('path');
const toCamel = require('./to-camel');
const mockData = require('./mock-data');
module.exports = async (schemas, filename) => {
  let json = '';
  for (const [index, schema] of schemas.entries()) {
    const mock = mockData(schema.name, 4, schemas, true);
    const name = schema.name.startsWith('I') && schema.name[1] && schema.name[1].match(/[A-Z]/) ? toCamel(schema.name.slice(1)) : toCamel(schema.name);
    json += `  "${name}": ${mock}`;
    if (index !== schemas.length - 1) {
      json += ',';
    }
    json += '\n';
  }
  json = `{\n${json}}`;
  await writeFile(resolve(filename), json);
  console.log(`生成${filename}`.green);
};
