import {
  inicialPage,
  alunosPage,
  cursosPage,
  contatoPage,
  notFoundPage,
} from './views.js';

export function route(requisicao, resposta) {
  if (requisicao.method === 'GET' && requisicao.url === '/inicial') {
    resposta.writeHead(200, { 'Content-Type': 'text/html' });
    resposta.end(inicialPage());
    return;
  }

  if (requisicao.method === 'GET' && requisicao.url === '/alunos') {
    resposta.writeHead(200, { 'Content-Type': 'text/html' });
    resposta.end(alunosPage());
    return;
  }

  if (requisicao.method === 'GET' && requisicao.url === '/cursos') {
    resposta.writeHead(200, { 'Content-Type': 'text/html' });
    resposta.end(cursosPage());
    return;
  }
  if (requisicao.method === 'GET' && requisicao.url === '/contato') {
    resposta.writeHead(200, { 'Content-Type': 'text/html' });
    resposta.end(contatoPage());
    return;
  }

  resposta.writeHead(404, { 'Content-Type': 'text/html' });
  resposta.end(notFoundPage());
}