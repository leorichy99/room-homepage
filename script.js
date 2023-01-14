const slideInfo = document.querySelector(".slide_info");
const rightArrow = document.querySelector(".right_arrow");
const leftArrow = document.querySelector(".left_arrow");
const closeIcon = document.querySelector(".close");
const hamburgerIcon = document.querySelector(".hamburger_icon");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const logo = document.querySelector(".logo");

const imgSlidesBg = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg",
];
const imgSlidesBgMobile = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg",
];

const imagesSlide = document.querySelector(".image_slides");
let slideCounter = 0;
let mSlideCount = 0;

const fetchedData = fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        slideInfo.firstElementChild.innerHTML = data[slideCounter].head;
        slideInfo.lastElementChild.innerHTML = data[slideCounter].info;

        // slide functionality on larger screens
        if (window.innerWidth > 550) {
            rightArrow.addEventListener("click", () => {
                slideCounter++;

                if (slideCounter > imgSlidesBg.length - 1) {
                    slideCounter = 0;
                }

                imagesSlide.style.backgroundImage = `url(${imgSlidesBg[slideCounter]})`;
                slideInfo.firstElementChild.innerHTML = data[slideCounter].head;
                slideInfo.lastElementChild.innerHTML = data[slideCounter].info;
            });

            leftArrow.addEventListener("click", () => {
                slideCounter--;
                if (slideCounter < 0) {
                    slideCounter = imgSlidesBg.length - 1;
                }

                imagesSlide.style.backgroundImage = `url(${imgSlidesBg[slideCounter]})`;
                slideInfo.firstElementChild.innerHTML = data[slideCounter].head;
                slideInfo.lastElementChild.innerHTML = data[slideCounter].info;
            });
        }

        // slide functionality on mobile screens
        else if (window.innerWidth <= 550) {
            rightArrow.addEventListener("click", () => {
                mSlideCount++;

                if (mSlideCount > imgSlidesBgMobile.length - 1) {
                    mSlideCount = 0;
                }

                imagesSlide.style.backgroundImage = `url(${imgSlidesBgMobile[mSlideCount]})`;
                slideInfo.firstElementChild.innerHTML = data[mSlideCount].head;
                slideInfo.lastElementChild.innerHTML = data[mSlideCount].info;
            });

            leftArrow.addEventListener("click", () => {
                mSlideCount--;

                if (mSlideCount < 0) {
                    mSlideCount = imgSlidesBgMobile.length - 1;
                }

                imagesSlide.style.backgroundImage = `url(${imgSlidesBgMobile[mSlideCount]})`;
                slideInfo.firstElementChild.innerHTML = data[mSlideCount].head;
                slideInfo.lastElementChild.innerHTML = data[mSlideCount].info;
            });
        }
    });

hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.add("show");
    hamburgerIcon.classList.add("hide");
    logo.classList.add("hide");
});

closeIcon.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show");
    hamburgerIcon.classList.remove("hide");
    logo.classList.remove("hide");
});
