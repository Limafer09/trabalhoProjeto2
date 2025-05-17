import express from "express";

//assegure que essa porta não esteja sendo usada por aplicação no seu computador

const host = "0.0.0.0"; //todas as interfaces
const port = 3000;
var listadeUsuarios = [];

//aplicação servidora
const app = express();

//processamento do formulario
app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) =>{
    resposta.send(`
            <html lang="pt-br">
                <head>
                    <meta charset="UFT-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                    <title>Página inicial do aplicativo</title>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Menu do Sistema</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cadastros
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="/cadastroPessoas">Cadastro de Pessoas</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
            </html>
        `);
        resposta.end();
});

app.get("/cadastroPessoas", (requisicao, resposta) =>{
    resposta.send(`
        <html lang="pt-br">
            <head>
                <meta charset="UFT-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                    <title>Página inicial do aplicativo</title>
            </head>
            <body>
                <div class="container w-75 mb-5 mt-5">
                    <form method="POST" action="/cadastroPessoas" class="row g-3 border p-2" novalidate>
                        <fieldset>
                            <legend class="text-center">Cadastro de Pessoas</legend>
                        </fieldset>
                        <div class="col-md-4">
                            <label for="nome" class="form-label">Seu primeiro nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" required>
                        </div>
                        <div class="col-md-4">
                            <label for="sobrenome" class="form-label">Seu sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" required>
                        </div>
                        <div class="col-md-4">
                            <label for="NomePessoa" class="form-label">Nome da Pessoa</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="nomePessoa" name="nomePessoa" aria-describedby="inputGroupPrepend" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="cidade" class="form-label">Sua cidade</label>
                            <input type="text" class="form-control" id="cidade" name="cidade" required>
                        </div>
                        <div class="col-md-3">
                            <label for="uf" class="form-label">Seu estado - UF</label>
                            <select class="form-select" id="uf" name="uf" required>
                            <option selected disabled value="">Escolha seu estado...</option>
                                <option>SP</option>
                                <option>MS</option>
                                <option>MG</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="cep" class="form-label">Seu CEP</label>
                            <input type="text" class="form-control" id="cep" name="cep" required>
                        </div>                           
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cadastre-se</button>
                            <a class="btn btn-secondary" href="/">Voltar</a>
                        </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>
`);
    resposta.end();
});

app.post("/cadastroPessoas", (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const sobrenome = requisicao.body.sobrenome;
    const nomePessoa = requisicao.body.nomePessoa;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;

    if(nome && sobrenome && nomePessoas && cidade && uf && cep){
        listadeUsuarios.push({
            nome: nome,
            sobrenome: sobrenome,
            nomePessoa: nomePessoa,
            cidade: cidade,
            uf: uf,
            cep: cep
        });
        resposta.redirect("/listadeUsuarios");
    }
    else{
    
    let conteudo = `
        <html lang="pt-br">
            <head>
                <meta charset="UFT-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                    <title>Página inicial do aplicativo</title>
            </head>
            <body>
                <div class="container w-75 mb-5 mt-5">
                    <form method="POST" action="/cadastroPessoas" class="row g-3 border p-2" novalidate>
                        <fieldset>
                            <legend class="text-center">Cadastro de Pessoas</legend>
                        </fieldset>
                        <div class="col-md-4"> `;
                        if(!nome){
                            conteudo = conteudo + `<label for="nome" class="form-label">Seu primeiro nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" required>
                            <span class="text-danger">Informe o nome</span>`;
                        }
                        else{
                            conteudo = conteudo + `
                            <label for="nome" class="form-label">Seu primeiro nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" value="${nome}" required>
                            `;
                        }
                            
                        conteudo = conteudo + `</div>
                        <div class="col-md-4"> `;
                        if(!sobrenome){
                            conteudo = conteudo + `
                            <label for="sobrenome" class="form-label">Seu sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" required>
                            <span class="text-danger">Informe o sobrenome</span>`;
                        }
                        else{
                            conteudo = conteudo + `
                            <label for="sobrenome" class="form-label">Seu sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}"required>
                            `;
                        }
                            
                        conteudo = conteudo + `</div>
                        <div class="col-md-4">
                            <label for="NomePessoa" class="form-label">Nome da Pessoa</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="nomePessoa" name="nomePessoa" value="${nomePessoa}"aria-describedby="inputGroupPrepend" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="cidade" class="form-label">Sua cidade</label>
                            <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}"required>
                        </div>
                        <div class="col-md-3">
                            <label for="uf" class="form-label">Seu estado - UF</label>
                            <select class="form-select" id="uf" name="uf" required>
                            <option selected disabled value="">Escolha seu estado...</option>
                                <option value="SP">SP</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="cep" class="form-label">Seu CEP</label>
                            <input type="text" class="form-control" id="cep" name="cep" value="${cep} required>
                        </div>                           
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Cadastre-se</button>
                            <a class="btn btn-secondary" href="/">Voltar</a>
                        </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>
    `;
    resposta.send(conteudo);
    resposta.end();
    }
});

app.get("/listadePessoas", (requisicao, resposta) => {
    let conteudo= `
        <html lang="pt-br">
            <head>
                <meta charset="UFT-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                    <title>Página inicial do aplicativo</title>
            </head>
            <body>
                <div class="container w-75 mb-5 mt-5">
                    <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">Nome da Pessoa</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Estado(UF)</th>
                                <th scope="col">CEP</th>
                            </tr>
                        </thead>
                        <tbody> `;
                        for(let i = 0; i < listadeUsuarios.lenght; i++){
                            conteudo = conteudo + `
                                <tr>
                                    <td>${listadeUsuarios[i].nome}</td>
                                    <td>${listadeUsuarios[i].sobrenome}</td>
                                    <td>${listadeUsuarios[i].nomePessoa}</td>
                                    <td>${listadeUsuarios[i].cidade}</td>
                                    <td>${listadeUsuarios[i].uf}</td>
                                    <td>${listadeUsuarios[i].cep}</td>
                                </tr>
                            `;
                        }
conteudo = conteudo + ` </tbody>
                    </table>
                    <a class="btn btn-secondary" href="/cadastroPessoas">Seguir Cadastrando....</>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>`
    resposta.send(conteudo);
    resposta.end();
});

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}/`);
});
