const express = require('express');

const app = express();

app.get('/name', (req,res) => {
	res.send('Syuzanna');
});

app.get('/email', (req,res) => {
	res.send('syuzie.ss@gmail.com');
});

app.get('/age', (req,res) => {
	res.send('27');
})

app.listen(3000);