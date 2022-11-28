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
    checkCPF();
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

function checkCPF() {
    const cpfValue = cpf.value;

    if (cpfValue === "") {
        setErrorFor(cpf, "O CPF é obrigatório.");
    } else if (cpfValue.length < 11) {
        setErrorFor(cpf, "O CPF precisa ter 11 caracteres.");
    } else {
        setSuccessFor(cpf);
    }
}