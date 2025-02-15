const parser = require('./parser');
const openapiSchemaParser = require('./schema-parsers/openapi');
const avroSchemaParser = require('./schema-parsers/avro');

const noop = () => {}; // No operation

parser.registerSchemaParser([
  'application/vnd.aai.asyncapi;version=2.0.0',
  'application/vnd.aai.asyncapi+json;version=2.0.0',
  'application/vnd.aai.asyncapi+yaml;version=2.0.0',
  'application/schema;version=draft-07',
  'application/schema+json;version=draft-07',
  'application/schema+yaml;version=draft-07',
], noop);

parser.registerSchemaParser([
  'application/vnd.oai.openapi;version=3.0.0',
  'application/vnd.oai.openapi+json;version=3.0.0',
  'application/vnd.oai.openapi+yaml;version=3.0.0',
], openapiSchemaParser);

parser.registerSchemaParser([
  'application/avro'
], avroSchemaParser);

module.exports = parser;
