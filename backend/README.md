

## build
```bash
$ git https://github.com/michael199619/task-2-ts_nest_pg_typeorm.git
$ cd task-2-ts_nest_pg_typeorm
$ cp .env.example .env # Update database 
$ yarn install
```

### fixtures ./src/db/fixures.ts

## start

```bash
$ yarn build
$ yarn start 
```
Server started at http://localhost:3000/

## start docker
```bash
$ cp .env.example .env
$ docker-compose up 
```

Server started at http://localhost:3000/ \
Docs started at http://localhost:3000/docs

## tests
```bash
$ yarn test
```

## debug
```bash
$ npm run debug
```

After connect to 9229
