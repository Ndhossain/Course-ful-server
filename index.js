const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('My server is running')
})

app.listen(Port, () => {
    console.log('port is running on', Port);
})

