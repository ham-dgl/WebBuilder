$(document).ready(function() {
    $(document).on('click','#show_all_button',function(){


        $('.table_content_list').toggleClass('open-block');
        $('#smallVector').toggleClass('transform-rotate')
    });
});