$(document).ready(function() {
    $('img').click( function () {
        console.log ('click!');
        $(this).css ('visibility' , 'hidden');
    })
})