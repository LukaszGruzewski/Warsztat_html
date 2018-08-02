document.addEventListener('DOMContentLoaded', function () {

    var hideMainBar = document.querySelectorAll('.main-article-link');

    for (var i = 0; i < hideMainBar.length; i++) {


        hideMainBar[i].addEventListener('mouseover', function () {
            var children = this.querySelector(".main-article-bar");
            children.style.display = 'none';
        });

        hideMainBar[i].addEventListener('mouseout', function () {
            var children = this.querySelector(".main-article-bar");
            children.style.display = 'block';
        });
    }


    var btnNext = document.querySelector(".banner-next");
    var btnPrev = document.querySelector(".banner-prev");
    var bannerSlides = document.querySelectorAll(".banner-slide");


    btnNext.addEventListener('click', function () {
        bannerSlides[0].classList.remove("banner-slide-active");
        bannerSlides[1].classList.add("banner-slide-active");
    });

    btnPrev.addEventListener('click', function () {
        bannerSlides[1].classList.remove("banner-slide-active");
        bannerSlides[0].classList.add("banner-slide-active");
    });

});


