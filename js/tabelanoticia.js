//pegar/capturar botão:
var bot_salvar = document.querySelector("#submit");

//Evento pra chamar a função, quando o botão for clicado:
bot_salvar.addEventListener("click", function (event) {
    event.preventDefault();
    //Trazer o form pra o html
    var noticia = document.querySelector("#form");

    //criar tr:
    var linha = document.createElement("tr");

    //criar td:
    var titulo = document.createElement("td");
    var subtitulo = document.createElement("td");
    var autor = document.createElement("td");
    var data_pub = document.createElement("td");
    var detalhes = document.createElement("td");
    var lide = document.createElement("td");
    var local = document.createElement("td");
    var tema = document.createElement("td");
    var ref = document.createElement("td");
    var perfil = document.createElement("td");

    //Selecionar tabela e corpo da tabela:
    var tabela = document.querySelector("#tabela_noticia").querySelector("tbody");

    //colocar as variáveis dentro de linha:
    linha.appendChild(titulo);
    linha.appendChild(subtitulo);
    linha.appendChild(autor);
    linha.appendChild(data_pub);
    linha.appendChild(detalhes);
    linha.appendChild(lide);
    linha.appendChild(local);
    linha.appendChild(tema);
    linha.appendChild(ref);
    linha.appendChild(perfil);
    
    //Colocar linha dentro de tabela:
    tabela.appendChild(linha);

    //Adicionar dados dentro da tabela:
    titulo.textContent = noticia.titulo.value;
    subtitulo.textContent = noticia.subtitulo.value;
    autor.textContent = noticia.autor.value;
    data_pub.textContent = noticia.data_pub.value;
    detalhes.textContent = noticia.detalhes.value;
    lide.textContent = noticia.lide.value;
    local.textContent = noticia.local.value;
    tema.textContent = noticia.tema.value;
    ref.textContent = noticia.ref.value;
    perfil.textContent = noticia.perfil.value;
})