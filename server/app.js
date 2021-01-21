require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
let calc = require('./controllers/calculatorcontroller');

sequelize.sync();
// sequelize.sync({force:true}) //to delete rows in pgAdmin

app.use("/calculator", calc);
app.use(require('./middleware/headers'));
app.use(express.json());

/****
 *  EXPOSED route *
 ****/
app.use('/user', user);

/****
 *  PROTECTED route * - need a token
 ****/
app.use('/journal', journal);

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})

// localhost:3000

// localhost:3000/test