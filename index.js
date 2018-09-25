const http = require('http')

const hostname = 'localhost'
const port = 3008

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello world</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})