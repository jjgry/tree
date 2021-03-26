const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const testData = require('./test-data.json');

app.get('/api/v1/parents', (req, res) => {
    res.json(testData.parents);
});

app.get('/api/v1/children', (req, res) => {
    res.json(testData.children);
});

app.get('/api/v1/siblings', (req, res) => {
    res.json(testData.siblings);
});

app.get('/api/v1/users/:[id]', (req, res) => {
    res.json(testData.focus);
});

app.get('/api/v1/spouses', (req, res) => {
    res.json(testData.spouses);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
