
    window.onscroll = function() {scrollPog()};

    function scrollPog()
    {
        var pogScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (pogScroll / height) * 100;
        document.getElementById("poggy").style.width = scrolled + "%";
        console.log(scrolled);
    }