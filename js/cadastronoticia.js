const form = document.getElementById("form");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const autor = document.getElementById("autor");
const detalhes = document.getElementById("detalhes");
const lide = document.getElementById("lide");
const local = document.getElementById("local");
const ref = document.getElementById("ref");
const tema = document.getElementById("tema");
const data_pub = document.getElementById("data_pub");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const tituloValue = titulo.value;
    const subtituloValue = subtitulo.value;
    const autorValue = autor.value;
    const detalhesValue = detalhes.value;
    const lideValue = lide.value;
    const localValue = local.value;
    const temaValue = tema.value;
    const refValue = ref.value;

    if (tituloValue === "") {
        setErrorFor(titulo, "O título é obrigatório.");
    } else {
        setSuccessFor(titulo);
    }

    if (subtituloValue === "") {
        setErrorFor(subtitulo, "O subtítulo é obrigatório.");
    } else {
        setSuccessFor(subtitulo);
    }

    if (autorValue === "") {
        setErrorFor(autor, "O autor é obrigatório.");
    } else {
        setSuccessFor(autor);
    }

    if (detalhesValue === "") {
        setErrorFor(detalhes, "Preencha os detalhes.");
    } else {
        setSuccessFor(detalhes);
    }

    if (lideValue === "") {
        setErrorFor(lide, "O lide é obrigatório.");
    } else {
        setSuccessFor(lide);
    }

    if (localValue === "") {
        setErrorFor(local, "O autor é obrigatório.");
    } else {
        setSuccessFor(local);
    }

    if (refValue === "") {
        setErrorFor(ref, "A referência é obrigatória.");
    } else {
        setSuccessFor(ref);
    }

    if (temaValue === "") {
        setErrorFor(tema, "O tema é obrigatório.");
    } else {
        setSuccessFor(tema);
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

document.getElementById('submit').onclick = function () {
    var radios = document.querySelector('input[type=radio][name=perfil]:checked');

    if (!!radios) {

    }
    else {
        alert('Selecione um perfil de usuário!');
    }
}

function validarData() {
    var data = document.getElementById("data_pub");
    if (data.value == '') {
        setErrorFor(data_pub, "A data é obrigatória.");
    } else {
        setSuccessFor(data_pub);
    }
    return;
}
