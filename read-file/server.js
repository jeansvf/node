import fs from 'fs/promises'
import url from 'url'
import path from 'path'
import { createServer } from 'http'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = createServer( async (req, res) => {
    res.setHeader("Content-Type", "text/html")
    const homePage = await fs.readFile(path.join(__dirname, "index.html"))
    res.write(homePage)
    res.end()
})

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))