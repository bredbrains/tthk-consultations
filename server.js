const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

app.use(limiter);

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/.*/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`Application listening on port: ${port}`)