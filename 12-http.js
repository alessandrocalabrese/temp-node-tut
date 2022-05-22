const http = require('http')

const server = http.createServer((request, response) => {
    const html = "<h1/>";
    response.writeHead(200, { 'Content-Type':'text/html'})
    if (request.url === '/') {
        response.end('Welcome')
    }
    if (request.url === '/about') {
        response.end('This is about page')
    }
    
    response.end(html)
})

server.listen(5000)