
(function () {
    var forCommerce = document.getElementById('forCommerce');
    var forCreative = document.getElementById('forCreative');
    var forBusiness = document.getElementById('forBusiness');

    var category = document.getElementsByClassName('category');
    var Business = category[0];
    var Commerce = category[1];
    var Creative = category[2];

    forBusiness.style.display = "flex";
    forBusiness.style.flexWrap = "wrap";

    forCommerce.style.display = "none";
    forCreative.style.display = "none";

    Business.addEventListener('click',function () {
        $('#forBusiness').fadeIn();

        forBusiness.style.display = "flex";
        forBusiness.style.flexWrap = "wrap";

        forCommerce.style.display = "none";
        forCreative.style.display = "none";
    })

    Commerce.addEventListener('click',function () {

        $('#forCommerce').fadeIn();

        forCommerce.style.display = "flex";
        forCommerce.style.flexWrap = "wrap";

        forBusiness.style.display = "none";
        forCreative.style.display = "none";
    })

    Creative.addEventListener('click',function () {

        $('#forCreative').fadeIn();

        forCreative.style.display = "flex";
        forCreative.style.flexWrap = "wrap";

        forCommerce.style.display = "none";
        forBusiness.style.display = "none";
    })

})();

