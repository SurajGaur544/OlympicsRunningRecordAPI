const express = require('express');
require('./database/dbConnect');
const router = require('./routers/route')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Welcome to page');
})

app.listen(port , () => {
    console.log(`Connection is live at port no: ${port}`);
})