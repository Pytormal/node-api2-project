// implement your server here
// require your posts router and connect it here
const express = require('express')


const server = express();
const Router = require('./posts/posts-router.js')

server.use(express.json())
server.use('/api/posts',Router)

server.get('/', (req, res) => {
    res.json({ hello: 'posts'})
})

module.exports = server;