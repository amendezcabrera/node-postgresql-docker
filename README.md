Project to create a Docker container with NodeJS, PostgreSQL, PGAdmin 4 and some NodeJS libraries

# Usage

* Clone this repo
* Create a `db_data` folder in the project root, next to the `docker-compose.yml` file
* Build it with `docker-compose build`
* Run it using `docker-compose up`
* (Optional) Create a `node_tutorial_db` in PostgreSQL through [PGAdmin](http://localhost:5050) (see `Documentation` for credentials) or whatever client do you prefer
  * Create an `users` table inside the previously created database and insert some dummy data

If you don't follow this last two steps you will see some errors in the console

After doing this you can modify the NodeJS project files in the app folder and thanks to `nodemon` you should automatically see your changes by loading the [web server URL](http://localhost:81) in your browser

## Documentation

After composing the included containers you are going to have some services listening and binded to your host, access them through:

* Web server (NodeJS): [http://localhost:81](http://localhost:81)
* PostgreSQL database engine:  [http://localhost:5432](http://localhost:5432)
* PGAdmin 4: [http://localhost:5050](http://localhost:5050)
  * User: `pgadmin4@pgadmin.org`
  * Password: `admin`

NodeJS included libraries:

* [Angular](https://www.npmjs.com/package/angular)
* [Express](https://www.npmjs.com/package/express)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Pg](https://www.npmjs.com/package/pg)
* [Sequelize](https://www.npmjs.com/package/sequelize)
