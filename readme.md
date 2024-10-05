<!-- This package install -->
 body-parser,dotenv,express,mariadb,mysql2,sequelize,sequelize-cli
npx sequelize-cli init

<!-- This will create the following folders:

config: Database configuration.
models: Sequelize models.
migrations: Database migration files.
seeders: Seed data. -->

<!-- Edit config/config.json to configure your database:
{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "postgres" // change to mysql or sqlite if necessary
  }
} -->

<!-- Generate the User model and migration: -->
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
 
                              Question Ask
    <!-- sequlize create profile migraton with user_id, age image link -->
<!-- This will generate a new migration file in your migrations folder. -->
npx sequelize-cli migration:generate --name create-profile

<!-- Use the Sequelize CLI to generate a new migration for adding the token field: -->
npx sequelize-cli migration:generate --name add-token-to-profiles



<!-- Run Migrations -->
npx sequelize-cli db:migrate
<!-- This will create the Users table in your database. -->

<!-- This command is used for Seeder -->
npx sequelize-cli seed:generate --name insert-courses


<!-- After defining the seeder, run the following command to execute it and insert the data -->
npx sequelize-cli db:seed:all

<!-- This is command for specific entry -->
npx sequelize-cli db:seed --seed 20241001093510-demo-emi-seed.js


<!-- Rollback
If you need to undo the seeding -->
npx sequelize-cli db:seed:undo

<!-- This will run the down function of the last seeder, removing the inserted rows. If you want to undo all seeders -->
npx sequelize-cli db:seed:undo:all

