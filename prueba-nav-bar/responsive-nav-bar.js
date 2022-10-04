$(document).ready(function(e) { 
$('.hamburguesa').click(function() {
    $('.p-n').toggleClass('p-n--abrir', 500);
    $('.ham').toggleClass('open');
})
});