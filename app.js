const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Load the Aarti data once, at the top of the file
const aartiData = require('./Aarti/aarti-main'); // Adjust the path if necessary
const { title } = require('process');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render 'aarti/ram' and pass the aartiData to the EJS template
app.get('/aarti/ram', (req, res) => {
    res.render('show', {title: "Ram Aarti", aartiData: aartiData });
});

app.get('/aarti/mataji', (req, res) => {
    res.render('show', { title: "Mataji Aarti", aartiData: aartiData });
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).render('error');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
