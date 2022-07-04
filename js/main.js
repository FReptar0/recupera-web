$(document).ready(function () {
    $('.p1').hover(function () {
        arriba = Math.random() * (400 - 1) + 1;
        abajo = Math.random() * (609 - 1) + 1;
        $(this).animate({
            top: abajo,
            left: arriba
        }, 100);
        $(this).css('top', arriba);
        $(this).css('left', abajo);
    });
});
function Si() {
    Swal.fire({
        title: 'Love u',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png',
        imageWidth: 300,
        imageHeight: 300,
        footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Da click aqu&iacute;</a>'
    });
}