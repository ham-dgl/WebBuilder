/*
$(function(){
    var topPos = $('.table_sidebar').offset().top;
    $(window).scroll(function() {
        var top = $(document).scrollTop();

        console.log(top);

        if (top > 2700) {
            $('.table_sidebar').css({top:"205px"});
            console.log( $('.table_sidebar').offset());
        }
        else {
            $('.table_sidebar').css({top:"267px"});
        }
       /!* if (top > topPos) $('.table_sidebar').addClass('fixed');
        else $('.table_sidebar').removeClass('fixed');*!/

    });

});*/
$(document).ready(function () {
    $(function scrollTopWeb() {
        var $window = $(window);
        var $sidebar = $('.table_sidebar');
        var $sidebarTop = $sidebar.position().top;
        var $sidebarHeight = $sidebar.height();
        var $footerTop = 3830;

        $window.scroll(function(event) {
            $sidebar.addClass("fixed");
            var $scrollTop = $window.scrollTop();
            var $topPosition = Math.max(0, $sidebarTop - $scrollTop);

            if ($scrollTop + $sidebarHeight > $footerTop) {
                $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
            }

            $sidebar.css("top", $topPosition);
        });
    });
});
