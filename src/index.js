const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/styles', (req, res) => res.send('Hello World!'));

app.listen(1337, () => console.log('Example app listening on port 1337!'));