function validaTitulo() {
    var titulo = document.getElementById("titulo").value;
    if (titulo.length > 0) {
        return true;
    } else {
        alert("Preencha o título!");
        return false;
    }
}

function validaSubTitulo() {
    var subtitulo = document.getElementById("subtitulo").value;
    if (subtitulo.length > 0) {
        return true;
    } else {
        alert("Preencha o subtítulo!");
        return false;
    }
}

function validaAutor() {
    var autor = document.getElementById("autor").value;
    if (autor.length > 0) {
        return true;
    } else {
        alert("Preencha o nome do autor!");
        return false;
    }
}

function validaData() {
    var data = document.getElementById("data_pub");
    if (data.value == '') {
        alert("Preencha a data de publicação!");
        return false;
    } else {
        return true;
    }
}

function validaDetalhes() {
    var detalhes = document.getElementById("detalhes");
    if (detalhes.value == '') {
        alert("Preencha os detalhes!");
        return false;
    } else {
        return true;
    }
}

let det = document.getElementById("detalhes");
det.addEventListener('keyup', function (event) {
    let trimmed = this.value.trim();
    if (!trimmed) {
        this.value = '';
        return false;
    } else {
        return true;
    }
});

function validaLide() {
    var lide = document.getElementById("lide").value;
    if (lide.length > 0) {
        return true;
    } else {
        alert("Preencha a lide!");
        return false;
    }
}

function validaLocal() {
    var local = document.getElementById("local").value;
    if (local.length > 0) {
        return true;
    } else {
        alert("Preencha o Local!");
        return false;
    }
}

function validaReferencia() {
    var ref = document.getElementById("ref").value;
    if (ref.length > 0) {
        return true;
    } else {
        alert("Preencha a referência!");
        return false;
    }
}

function validaTema() {
    var a = document.getElementById("tema");
    if (a.options[a.selectedIndex].value == "") {
        alert("Preencha o Tema!");
        return false;
    } else {
        return true;
    }
}

function validaPerfil() {
    if (document.getElementById("gamer").checked) {
        return true;
    } else if (document.getElementById("user_domestico").checked) {
        return true;
    } else if (document.getElementById("hacker").checked) {
        return true;
    } else {
        alert("Selecione um perfil de usuário!")
        return false
    }
}
