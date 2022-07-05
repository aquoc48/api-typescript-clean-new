# api-typescript-clean

API, TypeScript, PostgreSQL, clean architect

# run project

- npm install
  - to install dependencies
- npx sequelize db:migrate
  - to generate database schema
- npx sequelize db:seed:all
  - optional
  - to insert first data to database
- npm run build
  - to generate compiled project
- npm start
  - to run the project
- npm run dev
  - to be responsive during development

global packages:

- ts-node
- prettier
- typescript
- nodemon

sequelizer model setup

- copy .sequelizerc and paste in folder, check the paths
- npx sequelize-cli init:
  - this will generate sequelize folder with config, migrations, models, seeders folders in data-access folder
  - the config.js file is generated with default json format, copy paste the config.js file from this project to replace the format
  - data-access/sequelize/models: put "require("dotenv").config();" without "" on top of the file after "use strict" line
  - note: if not put the environment will always be development instead of using the environment from .env file
  - run to create table: npx sequelize model:create --name User --attributes name:string,email:string,password:string
  - the command will generate a model file and a migration file, config them if need
