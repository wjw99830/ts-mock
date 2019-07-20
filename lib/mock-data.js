const stack = [];
module.exports = function mockData(type, indent = 2, schemas = []) {
  if (!Array.isArray(schemas)) {
    throw new Error('schemas passed into mockData should be an array');
  }
  const subTypes = type.split('|').map(subType => subType.trim());
  type = subTypes[Math.floor(subTypes.length * Math.random())];
  let result;
  if (stack.includes(type)) {
    return stack.includes('[]') ? '[]' : '{}';
  }
  stack.push(type);
  const valueType = ['number', 'string', 'void', 'undefined', 'null', 'Symbol', 'boolean'];
  if (valueType.includes(type.toLowerCase())) {
    switch (type) {
      case 'number': result = mockNumber(); break;
      case 'string': result = mockString(); break;
      case 'void':
      case 'undefined': result = undefined; break;
      case 'null': result = null; break;
      case 'Symbol': result = Symbol(); break;
      case 'boolean': result = Math.random > 0.5; break;
    }
  } else if (!isNaN(Number(type)) || type.match(/^[\'\"\`].*[\'\"\`]$/)) {
    result = type;
  } else if (type.startsWith('Record') || type === 'object') {
    result = '{}';
  } else if (type.endsWith('[]')) {
    let itemsLiteral = '';
    const length = Math.floor(Math.random() * 10);
    for (let i = 0; i < length; i++) {
      itemsLiteral += mockData(type.replace('[]', ''), indent, schemas) + ', ';
    }
    result = `[${itemsLiteral}]`;
  } else if (type === 'any') {
    result = mockData(valueType[Math.floor(valueType.length * Math.random())], indent + 2, schemas);
  } else {
    let propertiesLiteral = '';
    const schema = schemas.find(schema => schema.name === type);
    if (schema) {
      for (const property of schema.properties) {
        if (property.type !== type) {
          propertiesLiteral += `\n${' '.repeat(indent)}${property.key}: ${mockData(property.type, indent + 2, schemas)},`;
        }
      }
      if (propertiesLiteral) {
        propertiesLiteral += `\n${' '.repeat(indent - 2)}`;
      }
      result = `{${propertiesLiteral}}`;
    } else {
      result = `{}`;
    }
  }
  stack.pop();
  return result;
};
function mockNumber() {
  return Math.floor(Math.random() * 1000);
}
function mockString() {
  const charset = 'qwertyuiopasdfghjklzxcvbnm     ';
  const length = Math.floor(Math.random() * 30);
  let mock = '';
  for (let i = 0; i < length; i++) {
    mock += charset[Math.floor(Math.random() * charset.length)];
  }
  return `'${mock}'`;
}
