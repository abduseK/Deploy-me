const { rmSync } = require('fs')
const http = require('http')

const hostname = '0.0.0.0'
const port = 3300

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Deploy Me')
})

server.listen(port, hostname, () => {
    console.log('Server running at port: 3300')
})