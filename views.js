function layout(title, content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  </head>
  <body>
  <nav> 
  <a href="/inicial">Home</a>
  <a href="/alunos">Alunos</a>
  <a href="/cursos">Cursos</a>
  <a href="/contato">Contatos</a>
  </nav> 
  ${content}
  </body>
  </html>
  
  `
}

export function inicialPage() {
  return layout("Home","<h1>Bem vindo à Página Inicial</h1>")
}
export function notFoundPage() {
  return layout("Not Found","<h1>Page Not Found</h1>")
}
export function contatoPage() {
  return layout("Contatos","<h1>Página de contatos</h1>")
}


//MOCK -> código que simula o dado real...
const listCursos =[
  { name: "Inglês", curso: 350},
  { name: "Espanhol", curso: 280},
  { name: "Alemão", curso: 400},
]
const listAlunos =[
  { name: "Ana", matricula: 150100},
  { name: "Miguel", matricula: 955880},
  { name: "João", matricula: 345480},
]

export function alunosPage() {
    const rows = listAlunos.map((p) => `<tr>
  <td>${p.name}</td>
  <td>${p.matricula}</td>
    </tr>`)
    .join(" ")
  return layout("Alunos",`
    <h1>Alunos</h1> 
    <table>
    <tr>
    <th>Alunos</th> 
    <th>Matrícula</th>
    <tr>
    ${rows}
    </table> `)
}
export function cursosPage() {

  const rows = listCursos.map((p) => `<tr>
  <td>${p.name}</td>
  <td>${p.curso}</td>
    </tr>`)
    .join(" ")
  return layout("Cursos",`
    <h1>Cursos</h1> 
    <table>
    <tr>
    <th>Nome do Curso</th> 
    <th>Valor</th>
    <tr>
    ${rows}
    </table> `)
}
