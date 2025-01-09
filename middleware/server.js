import { createServer } from 'http'

const PORT = process.env.PORT

const server = createServer((req, res) => {
    // res.setHeader("Content-Type", "application/json")

    // switch(true) {
    //     case (req.url) :
        
    //     break;

    //     default:
    //         break;
    // }
    
    res.write("hi")
    res.end()
})


server.listen(PORT, () => console.log(`server is running on port ${PORT}`))