# Forum

Avaliation test

## How to run it

Have sure that MySQL is running at your machine (or remote database, as you want) <br>
Create a database with the name `forum` <br>
Remove the comment from `Forum.sync ({force: true});` found in `forum/Forum.js` to create a table in the database, `after the created table you have to comment again so as not to recreate the table`.<br>
We can run the project with `yarn dev` to run in development mode <br>
using the endpoint `http://localhost:3000/` we go to the project's home page
<br>


## Libs

**Dependencies**
<br>
ExpresJS: `https://expressjs.com/pt-br/` <br>
Sequelize: `https://sequelize.org/ `<br>
MySQL2: `https://www.npmjs.com/package/mysql2`<br>
Body-Parser: `https://github.com/expressjs/body-parser#readme`<br>
EJS: `https://github.com/mde/ejs`<br>
Slugify: `https://github.com/simov/slugify`<br>
tinyMCE: `https://www.tiny.cloud/get-tiny/self-hosted/`<br>

**Developer Dependencies**
<br>
ESLint: `https://eslint.org/`<br>
Nodemon: `https://nodemon.io/`<br>
Prettier: `https://prettier.io/` <br>
Sucrase: `https://www.npmjs.com/package/sucrase` <br>

<br>
Enjoy
