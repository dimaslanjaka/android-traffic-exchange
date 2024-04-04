import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pathName = require.resolve('jquery-form-saver');
console.log(pathName);
