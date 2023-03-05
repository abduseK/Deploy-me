const { rmSync } = require('fs')
const http = require('http')

// const hostname = '0.0.0.0'
const PORT = process.env.PORT || 3300;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Deploy Me')
})

server.listen(PORT, () => {
    console.log('Server running at port: 3300')
})