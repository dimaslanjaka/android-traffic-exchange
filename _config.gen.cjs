const paths = require('./config/paths.cjs');
const path = require('upath');
const fs = require('fs');

fs.writeFileSync(path.join(__dirname, '_config.json'), JSON.stringify({ paths }));

require('./_env.cjs');
