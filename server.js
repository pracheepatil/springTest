const express = require('express');
const router = require('./routes');


const models = require('./models');
const port = 4000;

const app = express();

app.use(express.json());
app.use('/api', router);

models.sequelize.sync({alter: true}).then(() => {
    app.listen(port, () => {
        console.log("Server Started")
    })
})
.catch(err => console.log(err));