const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.port || 5000;

const courseCategory = require('./data/Coursecategory.json');
const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send('My server is running');
})

app.get('/categories', (req, res) => {
    res.send(courseCategory);
})

app.get('/categories/:id', (req, res) => {
    const categoryCourses = courses.filter((course) => parseInt(course.categoryId) === parseInt(req.params.id));
    res.send(categoryCourses);
})

app.get('/courses/:id', (req, res) => {
    const specificCourse = courses.find((course) => parseInt(course._id) === parseInt(req.params.id));
    res.send(specificCourse);
})

app.listen(Port, () => {
    console.log('port is running on', Port);
})

