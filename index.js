import http from "http"
import{ route } from "./routes.js"

const server = http.createServer(route)

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
    
})