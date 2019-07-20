require('colors');
const { readFile } = require('./fs');
const { resolve } = require('path');
const nameReg = /[a-zA-Z_\$][a-zA-Z_\$\d]*/g;
const parentReg = new RegExp(` +extends +${nameReg}`);
const propertyReg = new RegExp(` *(?<key>${nameReg.source})\??\: *(?<type>[^;]+); *`);
const reg = new RegExp(`interface +(?<name>${nameReg.source}) *(?<parent>${parentReg.source})? *\{(${propertyReg.source})*\}`);
module.exports = async filename => {
  let input = await readFile(resolve(filename));
  input = input.toString().replace(/[\n\r]/g, '');
  const structures = input.match(new RegExp(reg, 'g'));
  const schemas = [];
  if (structures) {
    for (const interface of structures) {
      const matched = interface.match(reg);
      if (matched) {
        const { name, parent } = matched.groups;
        const schema = {
          name,
          parent,
          properties: [],
        };
        const properties = interface.match(new RegExp(propertyReg, 'g'));
        if (properties) {
          for (const property of properties) {
            let [key, type] = property.replace(';', '').split(':');
            key = key.trim();
            type = type.trim();
            schema.properties.push({
              key,
              type,
            });
          }
        } else {
          console.log(`${name} 没有匹配的字段`.yellow);
        }
        schemas.push(schema);
      } else {
        console.log(`接口二次匹配失败`.yellow);
      }
    }
  } else {
    console.log(`${filename} 没有匹配的接口`.red);
  }
  return schemas;
};