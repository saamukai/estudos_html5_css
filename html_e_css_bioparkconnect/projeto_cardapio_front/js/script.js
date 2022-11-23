let botao = document.getElementById('reservar');
botao.addEventListener('click', finalizaReserva);
let data = document.getElementById('data');
let hora = document.getElementById('hora');
let pessoas = document.getElementById('pessoas');
let numero = document.getElementById('numero');

function finalizaReserva() {
    alert("Reserva solicitada com Sucesso, em breve entraremos em contato");
    data.value = '';
    hora.value = '';
    pessoas.value = '';
    numero.value = '';
}
