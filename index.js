// require your server and launch it here
const server = require('./api/server')

const port = 5000

server.listen(port, () => {
    console.log(`\n server on http://localhost:${port} \n`)
})