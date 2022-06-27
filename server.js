const http = require('http');

const server = http.createServer(function (req, res) {
    if(req.url === '/'){
        res.end('welcome')
    }
    else{
        res.end('bye')
    }
})


module.exports = {
    server
}

