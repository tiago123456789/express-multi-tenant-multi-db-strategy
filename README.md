Instructions for run application:
======================================

- Clone repository
- Create **.env** file based **.env.example**
- Execute command **docker-compose up -d** for create one container with postgres and another container with pgadmin(client for postgres database)
- Execute command **npm i**
- Execute command **npm run migrate:up** to run migrations
- Execute command **npm run migrate:down** to run seeds
- Execute command **npm run start:dev** to run application
