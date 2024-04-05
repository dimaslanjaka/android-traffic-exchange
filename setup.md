# Tailwind Frontend Project

## Framework used
- vite
- reactjs
- tailwind
- flowbite
- flowbite-react

## Installation

### create `.env` file

```properties
# this is your backend used by ajax
BASE_API=http://yourdomain.com
```

### run env builder

generate `_env.json` by

```bash
node -r dotenv/config --es-module-specifier-resolution=node --no-warnings _env.cjs
```

### Start server

```bash
yarn start
```