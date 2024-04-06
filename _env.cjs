const fs = require('fs');
const path = require('path');
require('dotenv').config({ override: true });

fs.writeFileSync(path.join(__dirname, '_env.json'), JSON.stringify(process.env));
