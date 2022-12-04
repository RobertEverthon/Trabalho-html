function validaNome() {
    var nome = document.getElementById("nome").value;
    if (nome.length > 3) {
        return true;
    } else {
        alert("Preencha seu nome!");
        return false;
    }
}

function validaCPF(cpf) {
    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') {
        alert("Preencha seu CPF!");
        return false;
    }
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
        alert("Só aceitamos CPFs válidos!")
        return false;
    }
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9))) {
        alert("CPF inválido!");
        return false;
    }
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10))) {
        alert("CPF inválido!");
        return false;
    } else {
        return true;
    }
}

function validaNomeUser() {
    var nome_user = document.getElementById("nome_user").value;
    if (nome_user.length > 3) {
        return true;
    } else {
        alert("Preencha seu nome de usuário!");
        return false;
    }
}

function validaSenha() {
    var senha = document.getElementById("senha").value;
    if (senha.length > 7) {
        return true;
    } else {
        alert("Senha inválida!");
        return false;
    }
}

function validaConfSenha() {
    var senha = document.getElementById("senha")
    var conf_senha = document.getElementById("conf_senha");

    if (senha.value != conf_senha.value) {
        alert("Senhas diferentes!");
        return false;
    } else {
        return true;
    }
}

function validaTelefone(telefone) {
    var telefone = document.getElementById("telefone").value;
    telefone = telefone.replace(/\D/g, '');

    if (!(telefone.length >= 10 && telefone.length <= 11)) {
        alert("Telefone inválido!");
        return false;
    }

    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) {
        alert("Telefone inválido!");
        return false;
    }

    for (var n = 0; n < 10; n++) {
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) {
            alert("Telefone inválido!");
            return false;
        }
    }

    var DDD = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32,
        33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    if (DDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) {
        alert("O DDD do telefone é inválido!");
        return false;
    } else {
        return true;
    }
}

function validaEndereco() {
    var endereco = document.getElementById("endereco").value;
    if (endereco.length > 5) {
        return true;
    } else {
        alert("O endereço é inválido");
        return false;
    }
}

function validaEmail() {
    var email = document.getElementById("email");
    if (!email.checkValidity()) {
        alert("E-mail inválido!");
        return false;
    } else {
        return true;
    }
}

function validaEmailVazio() {
    var email = document.getElementById("email").value;
    if (email == '') {
        alert("Preencha seu e-mal!");
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
