import { inicialPage, alunosPage, cursosPage, notFoundPage, contatoPage } from "./views.js"

export function route(req, res) {
    if(req.method === "GET" && req.url === "/inicial"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(inicialPage())
        return
    }
    if(req.method === "GET" && req.url === "/cursos"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(cursosPage())
        return
    }
    if(req.method === "GET" && req.url === "/alunos"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(alunosPage())
        return
    }
    if(req.method === "GET" && req.url === "/contato"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end(contatoPage())
        return
    }
    res.writeHead(404, {"Content-Type": "text/html"})
    res.end(notFoundPage())
}