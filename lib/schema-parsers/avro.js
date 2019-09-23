
const avro = require('avsc')
const avroParser = require('avro-parser');

module.exports = ({ message, defaultSchemaFormat }) => {

  schema = avro.parse(message.payload);
  /*avroParser.loadSchema(schema.name);

  console.log(schema);

  const transformed = avroParser.jsonToAvroJson(message.payload, schema.name);*/

  message['x-parser-original-schema-format'] = message.schemaFormat || defaultSchemaFormat;
  message['x-parser-original-payload'] = message.payload;
  message.payload = schema;
  delete message.schemaFormat;
};