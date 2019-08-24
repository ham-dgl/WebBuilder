$(function() {
    var $window = $(window);
    var $sidebar = $(".table_sidebar");
    var $sidebarTop = $sidebar.position().top;
    var $sidebarHeight = $sidebar.height();
    var $lastBlock = $('#stopper');
    var $lastBlockTop = $lastBlock.position().top + $lastBlock.height();

    $window.scroll(function(event) {
        $sidebar.addClass("fixed");
        var $scrollTop = $window.scrollTop();
        var $topPosition = Math.max(265 , $sidebarTop - $scrollTop);

        if ($scrollTop + $sidebarHeight + 265 > $lastBlockTop ) {
            var $topPosition = Math.min($topPosition, $lastBlockTop - $scrollTop -230);
        }

        $sidebar.css("top", $topPosition);
        console.log($lastBlockTop,$scrollTop + $sidebarHeight+265);
    });
});












































/*
var $window = $(window);
var $sidebar = $(".table_sidebar");
var $sidebarTop = $sidebar.position().top;
var $sidebarHeight = $sidebar.height();
var $lastBlock = $('.lastBlock');
var $lastBlockTop = $lastBlock.position();

$window.scroll(function(event) {
    $sidebar.addClass("fixed");
    var $scrollTop = $window.scrollTop().top;
    var $topPosition = Math.max(0, $sidebarTop - $scrollTop);

    if ($scrollTop + $sidebarHeight > $lastBlockTop) {
        var $topPosition = Math.min($topPosition, $lastBlockTop - $scrollTop - $sidebarHeight);
    }

    $sidebar.css("top", $topPosition);

*/

