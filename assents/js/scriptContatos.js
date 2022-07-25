
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let message = document.getElementById('message');


//function enviar () {
  //  if( nome.value == "" || email.value == "" || message.value == "") {
    //    alert('mensagem não pode ser enviada campos precisa ser preenchido corretamente');
    //} else {
      //  alert('Mensagem enviada com sucesso');
    //}
//}

function Validar () {
    if(nome.value == ""){
        alert('O Campo seu nome Precisa ser Preenchido');
    }if ( email.value == "") {
        alert('O Campo seu E-mail Precisa ser Preenchido');
    }if ( message.value == "") {
        alert('O Campo Mensagem Precisa ser Preenchido');
    } else {
        alert('Mensagem enviada com sucesso');
    }
}