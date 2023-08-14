//local module exercise

const student = require('./student')


var http = require('http')
var port = 3033

const student1={
    'name':student.getName(),
    'age':student.age(),
    'university':student.university()
}

var server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end()
}).listen(port)

if (server.listening) {
    console.log('server started at port: ' + port)
}

// console.log(student1)