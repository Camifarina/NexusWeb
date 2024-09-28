const $days = document.getElementById('dias'),
$hours = document.getElementById('horas'),
$minutes = document.getElementById('minutos'),
$seconds = document.getElementById('segundos');

//Fecha a futuro
const countdownDate = new Date('11 15, 2024 18:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60 )) / (1000));
    
    //Escribimos resultados
    $days.innerHTML = dias;
    $hours.innerHTML = horas;
    $minutes.innerHTML = minutos;
    $seconds.innerHTML = ('0' + segundos).slice(-2);

},1000);