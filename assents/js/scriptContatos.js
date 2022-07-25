
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let message = document.getElementById('message');


function enviar () {
    if( nome.value == "" || email.value == "" || message.value == "") {
        alert('mensagem não pode ser enviada campos precisa ser preenchido corretamente');
    } else {
        alert('Mensagem enviada com sucesso');
    }
}