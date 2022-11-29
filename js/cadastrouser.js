const form = document.getElementById("form");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const nome_user = document.getElementById("nome_user");
const senha = document.getElementById("senha");
const conf_senha = document.getElementById("conf_senha");
const telefone = document.getElementById("telefone");
const endereco = document.getElementById("endereco");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value;
    const nome_userValue = nome_user.value;
    const senhaValue = senha.value;
    const conf_senhaValue = conf_senha.value;
    const telefoneValue = telefone.value;
    const enderecoValue = endereco.value;
    const emailValue = email.value;

    if (nomeValue === "") {
        setErrorFor(nome, "O nome é obrigatório.");
    } else {
        setSuccessFor(nome);
    }

    if (nome_userValue === "") {
        setErrorFor(nome_user, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(nome_user);
    }

    if (senhaValue === "") {
        setErrorFor(senha, "A senha é obrigatória.");
    } else if (senhaValue.length < 7) {
        setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(senha);
    }

    if (conf_senhaValue === "") {
        setErrorFor(conf_senha, "A confirmação de senha é obrigatória.");
    } else if (conf_senhaValue !== senhaValue) {
        setErrorFor(conf_senha, "As senhas não conferem.");
    } else {
        setSuccessFor(conf_senha);
    }

    if (telefoneValue === "") {
        setErrorFor(telefone, "O telefone é obrigatório.");
    } else if (telefoneValue.length < 10) {
        setErrorFor(telefone, "Insira um telefone válido.");
    } else {
        setSuccessFor(telefone);
    }

    if (enderecoValue === "") {
        setErrorFor(endereco, "O endereço é obrigatório.");
    } else {
        setSuccessFor(endereco);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    const formControls = form.querySelectorAll(".form_control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form_control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form_control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validarCPF(el) {
    if (!_cpf(el.value)) {
        setErrorFor(cpf, "CPF inválido!");
    } else {
        setSuccessFor(cpf);
    }
}

function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
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
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

