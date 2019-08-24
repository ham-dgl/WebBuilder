$(document).ready(function () {
function moveTop() {
    $(".moveTop").on("click", function () {
        const top = $('body').offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
}
moveTop();

    });


