require('colors');
const { writeFile } = require('./fs');
const { resolve } = require('path');
const mockData = require('./mock-data');
module.exports = async (schemas, filename) => {
  let script = '';
  for (const schema of schemas) {
    const mock = mockData(schema.name, 2, schemas);
    const name = schema.name.startsWith('I') && schema.name[1] && schema.name[1].match(/[A-Z]/) ? toCamel(schema.name.slice(1)) : toCamel(schema.name);
    script += `export const ${name} = ${mock}\n`;
  }
  await writeFile(resolve(filename + '.ts'), script);
  console.log(`生成${filename}.ts`.green);
};
function toCamel(pascal) {
  return pascal[0].toLowerCase() + pascal.slice(1);
}
