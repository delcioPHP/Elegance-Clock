/**
 * Created by Delcio Cabanga on 25/07/2017.
 * Clock Elegancy.
 * Versao: 1.0.
 */

$(document).ready(function () {

    // Creat elemnt and Date;
    var $date = new Date();
    var $el = $('.clock');
    var $elDay = $('.semana-clock');

    // Declare Variable;
    var $clockElegancy;
    var $getMonth;
    var $getDay;
    var $getMinute;
    var $getHour;
    var $addZero;
    var $render;
    var $renderM;
    var $display;
    var $getDate;
    var $displayM;
    var $week = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
    var $month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    //Add zero;
    $addZero = function ($n) {
        if ($n < 10) {
            $n = "0" + $n;
        }
        return $n;
    };
    //Mount Day, Date and Month
    $getDay = $date.getDay();
    $getDate = $date.getDate();
    $getMonth = $date.getMonth();

    //Render week in Disply
    $displayM = $week[$getDay] + ', <br>' + $getDate + ' de ' +  $month[$getMonth];
    $renderM = $elDay.html($displayM);

    //creat clock
    $clockElegancy = function () {
        var $date = new Date();
        $getHour = $date.getHours();
        $getMinute = $date.getMinutes();
        $display = $getHour + ':' + $addZero($getMinute) + ':' + $addZero($date.getSeconds());
        $render = $el.html($display);
            setInterval(function () {
                $clockElegancy()
            }, 1000);
     };

$clockElegancy();
});