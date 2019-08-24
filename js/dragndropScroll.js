$(function() {
    var $window = $(window);
    var $sidebar = $(".table_sidebar");
    var $sidebarTop = $sidebar.position().top;
    var $sidebarHeight = $sidebar.height();
    var $lastBlock = $('.wixPros_cons');
    var $lastBlockTop = $lastBlock.position().top + $lastBlock.height();

    $window.scroll(function(event) {
        $sidebar.addClass("fixed");
        var $scrollTop = $window.scrollTop();
        var $topPosition = Math.max(265 , $sidebarTop - $scrollTop);

        if ($scrollTop + $sidebarHeight + 165 > $lastBlockTop ) {
            var $topPosition = Math.min($topPosition, $lastBlockTop - $scrollTop + 75);
        }

        $sidebar.css("top", $topPosition);

    });
});