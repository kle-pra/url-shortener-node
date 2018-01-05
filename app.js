const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const Url = require('./models/url');
const shortid = require('shortid');

//setup static folder and body parser for express
app.use(express.static(path.join(__dirname, 'static')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL ||  config.db);

//index route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

//create short url route
app.post('/url', (req, res) => {
    let longUrl = req.body.url;
    let shortUrl = '';
    let host = req.protocol + '://' + req.get('host');
    console.log(host);
    // if already in db use it else create new
    Url.findOne({ long_url: longUrl }, function (err, doc) {
        if (err) { throw err; }

        if (doc) {
            res.send({ 'shortUrl': host + '/' +doc.short_url });
        } else {
            shortUrl = shortid.generate();
            let url = new Url({
                long_url: longUrl,
                short_url: shortUrl
            });

            url.save((err) => {
                if (err) { throw err }
                res.send({ 'shortUrl': host + '/' + shortUrl });
            });
        }
    });
});

//redirect route
app.get('/:shortUrl', function (req, res) {
    Url.findOne({ short_url: req.params.shortUrl }, function (err, doc) {
        if (doc) {
            res.redirect(doc.long_url);
        } else {
            res.redirect(config.host);
        }
    });
});

let server = app.listen(process.env.PORT || 3000, () => {
    console.log("App is running on port 3000");
});