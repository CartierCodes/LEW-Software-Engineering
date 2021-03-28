const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/'));

app.get('/', (req,res) => res.render('index'));
app.get('/dice-roller', (req,res) => res.render('dice-roller'));
app.get('/course-syllabus', (req,res) => res.render('course-syllabus'));
app.get('/regexp', (req,res) => res.render('regexp'));

app.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))