import http from 'http'
import users from './users.js'
import { findUserById, removeUrlSlash } from './methods.js'

const about = {
    message: "this is an api made to test node, without any frameworks"
}

const welcome = {
    message: "welcome! you are in the main page, go to /about or /users to get more data"
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    // removes last item of url if "/"
    removeUrlSlash(req)

    switch (true) {
        case (req.url === "/api/users"):
            res.statusCode = 200
            res.write(JSON.stringify(users))
            res.end()
        break;

        case (req.url.startsWith("/api/users/")):
            let userId = req.url.slice(11, req.url.length)
            res.statusCode = 200
            res.write(findUserById(users, userId))
            res.end()
        break;

        case (req.url === "/api/about"):
            res.statusCode = 200
            res.write(JSON.stringify(about))
            res.end()
        break;

        case(req.url === "/api"):
            res.statusCode = 200
            res.write(JSON.stringify(welcome))
            res.end()
        break;

        default:
            res.statusCode = 404
            res.write(JSON.stringify({message: "page not found"}))
            res.end()
        break;
    }
})

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))