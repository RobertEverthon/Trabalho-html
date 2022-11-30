//pegar/capturar botão:
var bot_salvar = document.querySelector("#submit");

//Evento pra chamar a função, quando o botão for clicado:
bot_salvar.addEventListener("click", function (event) {
    event.preventDefault();
    //Trazer o form pra o html
    var usuario = document.querySelector("#form");

    if (validaNome() == false){return;}
    if (validaCPF() == false){return;}
    if (validaNomeUser() == false){return;}
    if (validaSenha() == false){return;}
    if (validaTelefone() == false){return;}
    if (validaEndereco() == false){return;}
    if (validaEmailVazio() == false){return;}
    if (validaEmail() == false){return;}
    if (validaPerfil() == false){return;}

    //criar tr:
    var linha = document.createElement("tr");

    //criar td:
    var nome = document.createElement("td");
    var cpf = document.createElement("td");
    var nome_user = document.createElement("td");
    var senha = document.createElement("td");
    var telefone = document.createElement("td");
    var endereco = document.createElement("td");
    var email = document.createElement("td");
    var perfil = document.createElement("td");

    //Selecionar tabela e corpo da tabela:
    var tabela = document.querySelector("#tabusuario").querySelector("tbody");

    //colocar as variáveis dentro de linha:
    linha.appendChild(nome);
    linha.appendChild(cpf);
    linha.appendChild(nome_user);
    linha.appendChild(senha);
    linha.appendChild(telefone);
    linha.appendChild(endereco);
    linha.appendChild(email);
    linha.appendChild(perfil);
    
    //Colocar linha dentro de tabela:
    tabela.appendChild(linha);

    //Adicionar dados dentro da tabela:
    nome.textContent = usuario.nome.value;
    cpf.textContent = usuario.cpf.value;
    nome_user.textContent = usuario.nome_user.value;
    senha.textContent = usuario.senha.value;
    telefone.textContent = usuario.telefone.value;
    endereco.textContent = usuario.endereco.value;
    email.textContent = usuario.email.value;
    perfil.textContent = usuario.perfil.value;
})