const paths = require('./config/paths.cjs');
const path = require('upath');
const fs = require('fs');
const yaml = require('yaml');

// transform _config.yml to _config.json
const yml = yaml.parse(fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8'));
fs.writeFileSync(path.join(__dirname, '_config.json'), JSON.stringify(Object.assign({ paths }, yml)));

require('./_env.cjs');
