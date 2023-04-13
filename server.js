'use strict'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server berjalan di:  http://localhost:${PORT}`);
})
