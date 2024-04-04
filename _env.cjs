const fs = require('fs');
const path = require('path');
require('dotenv').config();

fs.writeFileSync(path.join(__dirname, '_env.json'), JSON.stringify(process.env));
