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
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cadastros
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="/cadastroPessoas">Cadastro de Pessoas</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#">Cadastro de Fornecedores</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="/#">Cadastro de Clientes</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#">Cadastro de Produtos</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/logout">Sair</a>
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
                            <label for="NomePessoa" class="form-label">Apelido</label>
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

    if(nome && sobrenome && nomePessoa && cidade && uf && cep){
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
                                                    <label for="nomePessoa" class="form-label">Nome da Pessoa</label>
                                                    <div class="input-group"> ` ;
                                                if (!nomePessoa){
                                                    conteudo = conteudo + `
                                                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                        <input type="text" class="form-control" id="nomePessoa" name="nomePessoa" aria-describedby="inputGroupPrepend" required>
                                                                        <span class="text-danger">Informe o apelido!!</span>`;
                                                }
                                                else{
                                                    conteudo = conteudo + `
                                                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                                        <input type="text" class="form-control" id="nomePessoa" name="nomePessoa" value="${nomePessoa}" aria-describedby="inputGroupPrepend" required>`;
                                                }
                                                    conteudo = conteudo + ` 
                                                                        </div>
                                                                        </div>
                                                                        <div class="col-md-6"> `;
                                                    if(!cidade){
                                                        conteudo = conteudo + 
                                                                            `<label for="cidade" class="form-label">Sua cidade</label>
                                                                            <input type="text" class="form-control" id="cidade" name="cidade" required>
                                                                            <span class="text-danger">Por favor informe a cidade!!</span>`;
                                                    }
                                                    else{
                                                        conteudo = conteudo + `
                                                                        <label for="cidade" class="form-label">Sua cidade</label>
                                                                        <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}"required>`;
                                                    }

                                                    conteudo = conteudo + `
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <label for="uf" class="form-label">Seu estado - UF</label>`;
                                                    if(!uf){
                                                        conteudo = conteudo + `
                                                                        <select class="form-select" id="uf" name="uf" required>
                                                                        <option selected disabled value="">Escolha seu estado...</option>
                                                                            <option value="SP">SP</option>
                                                                            <option value="MS">MS</option>
                                                                            <option value="MG">MG</option>
                                                                        </select>`;
                                                    }
                                                    else{
                                                        conteudo = conteudo + `
                                                                            <select class="form-select" id="uf" name="uf" required>
                                                                                <option disabled value="">Escolha seu estado...</option>
                                                                                <option ${uf == 'SP' ? 'selected': ''} value="SP">SP</option>
                                                                                <option ${uf == 'MS' ? 'selected': ''} value="MS">MS</option>
                                                                                <option ${uf == 'MG' ? 'selected': ''} value="MG">MG</option>
                                                                            </select>
                                                        `;
                                                    }
                                                    conteudo = conteudo + `
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <label for="cep" class="form-label">Seu CEP</label>`;
                                                    if(!cep){
                                                        conteudo = conteudo + `
                                                                        <input type="text" class="form-control" id="cep" name="cep" required>
                                                                        <span class="text-danger">Informe o cep, por favor!!</span>`;
                                                    }
                                                    else{
                                                        conteudo = conteudo + `
                                                                                <input type="text" class="form-control" id="cep" name="cep" value=${cep} required>
                                                        `;
                                                    }
                                                    conteudo = conteudo + `
                                                                    </div>                           
                                                                    <div class="col-12">
                                                                        <button class="btn btn-primary" type="submit">Cadastre-se</button>
                                                                        <a class="btn btn-secondary" href="/">Voltar</a>
                            </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>`;
    resposta.send(conteudo);
    resposta.end();
    }
});

app.get("/listadeUsuarios", (requisicao, resposta) => {
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
                        for(let i = 0; i < listadeUsuarios.length; i++){
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
                    <a class="btn btn-secondary" href="/cadastroPessoas">Seguir Cadastrando....</a>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>`
    resposta.send(conteudo);
    resposta.end();
});
app.get("/login", (requisicao, resposta)=>{
    resposta.send(`
        <html lang="pt-br">
            <head>
                <meta charset="UFT-8">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
                    <title>Login do Sistema</title>
                    <style>
                        body {
                            padding-top: 90px;
                        }
                        .panel-login {
                            border-color: #ccc;
                            -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                            -moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                            box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
                        }
                        .panel-login>.panel-heading {
                            color: #00415d;
                            background-color: #fff;
                            border-color: #fff;
                            text-align:center;
                        }
                        .panel-login>.panel-heading a{
                            text-decoration: none;
                            color: #666;
                            font-weight: bold;
                            font-size: 15px;
                            -webkit-transition: all 0.1s linear;
                            -moz-transition: all 0.1s linear;
                            transition: all 0.1s linear;
                        }
                        .panel-login>.panel-heading a.active{
                            color: #029f5b;
                            font-size: 18px;
                        }
                        .panel-login>.panel-heading hr{
                            margin-top: 10px;
                            margin-bottom: 0px;
                            clear: both;
                            border: 0;
                            height: 1px;
                            background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
                            background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
                            background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
                            background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
                        }
                        .panel-login input[type="text"],.panel-login input[type="email"],.panel-login input[type="password"] {
                            height: 45px;
                            border: 1px solid #ddd;
                            font-size: 16px;
                            -webkit-transition: all 0.1s linear;
                            -moz-transition: all 0.1s linear;
                            transition: all 0.1s linear;
                        }
                        .panel-login input:hover,
                        .panel-login input:focus {
                            outline:none;
                            -webkit-box-shadow: none;
                            -moz-box-shadow: none;
                            box-shadow: none;
                            border-color: #ccc;
                        }
                        .btn-login {
                            background-color: #59B2E0;
                            outline: none;
                            color: #fff;
                            font-size: 14px;
                            height: auto;
                            font-weight: normal;
                            padding: 14px 0;
                            text-transform: uppercase;
                            border-color: #59B2E6;
                        }
                        .btn-login:hover,
                        .btn-login:focus {
                            color: #fff;
                            background-color: #53A3CD;
                            border-color: #53A3CD;
                        }
                        .forgot-password {
                            text-decoration: underline;
                            color: #888;
                        }
                        .forgot-password:hover,
                        .forgot-password:focus {
                            text-decoration: underline;
                            color: #666;
                        }

                        .btn-register {
                            background-color: #1CB94E;
                            outline: none;
                            color: #fff;
                            font-size: 14px;
                            height: auto;
                            font-weight: normal;
                            padding: 14px 0;
                            text-transform: uppercase;
                            border-color: #1CB94A;
                        }
                        .btn-register:hover,
                        .btn-register:focus {
                            color: #fff;
                            background-color: #1CA347;
                            border-color: #1CA347;
                        }
                    </style>
            </head>
            <body>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="panel panel-login">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <a href="#" class="active" id="login-form-link">Conecte-se</a>
                                        </div>
                                        <div class="col-xs-6">
                                            <a href="#" id="register-form-link">Registre-se aqui</a>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <form id="login-form" action="" method="post" role="form" style="display: block;">
                                                <div class="form-group">
                                                    <input type="text" name="usuario" id="usuario" tabindex="1" class="form-control" placeholder="Usuario" value="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" name="senha" id="senha" tabindex="2" class="form-control" placeholder="Senha">
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-sm-offset-3">
                                                            <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Entrar">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="text-center">
                                                                <a href="https://phpoll.com/recover" tabindex="5" class="forgot-password">Esqueceu a senha</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style="display: none;">
                                                <div class="form-group">
                                                    <input type="text" name="usuario" id="usuario" tabindex="1" class="form-control" placeholder="Usuario" value="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="">
                                                </div>
                                                <div class="form-group">
                                                    <input type="senha" name="senha" id="password" tabindex="2" class="form-control" placeholder="Senha">
                                                </div>
                                                <div class="form-group">
                                                    <input type="confirmar-senha" name="confirmar-senha" id="confirmar-senha" tabindex="2" class="form-control" placeholder="Confirmar Senha">
                                                </div>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-sm-offset-3">
                                                            <input type="Registrar Agora" name="Registrar Agora" id="Registrar Agora" tabindex="4" class="form-control btn btn-register" value="Registrar Agora">
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        </html>
    `);
});

app.post("/login", (requisicao, resposta) =>{
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    //realizar validaçao
    resposta.redirect("/");
});

app.get("/logout", (requisicao, resposta)=>{
    resposta.send("<p>Você fez o logout do sistema!!</p>")
});

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}/`);
});
