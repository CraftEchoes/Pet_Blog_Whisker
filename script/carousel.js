let mainCarousel = document.querySelector(".main__carousel");
let mainCarouselLarge = mainCarousel.querySelector(".main__carousel-large");
let mainCarouselLargeWrapper = mainCarousel.querySelector(
  ".main__carousel-large__wrapper"
);
let allMainCarouselLargeCards = mainCarousel.querySelectorAll(
  ".main__carousel__card--large"
);
let mainCarouselSmall = mainCarousel.querySelector(".main__carousel-groups");
let allMainCarouselThumb = mainCarouselSmall.querySelectorAll(
  ".main__carousel-groups__thumb"
);

let carouselTabBar = mainCarousel.querySelector(
  ".main__carousel-large__tab-bar"
);
let carouselAllTabs = carouselTabBar.querySelectorAll("span");
carouselTabBar.addEventListener("click", (e) => {
  if (
    e.target.tagName === "SPAN" &&
    e.target.classList.contains("carousel__tab-dot")
  ) {
    changeCarouselSlide(e.target);
  }
});
let currentCarouselIndex = 0;
function changeCarouselSlide(item) {
  clearTimeout(autoCarouselTimer);
  if (
    currentCarouselIndex == carouselAllTabs.length &&
    item.dataset.index == 1
  ) {
    currentCarouselIndex = 0;
    mainCarouselLargeWrapper.style.transition = "none";
    activeCarouselSlide(currentCarouselIndex);
    currentCarouselIndex += 1;
    setTimeout(() => {
      requestAnimationFrame(() => {
        mainCarouselLargeWrapper.style.transition = "";
        activeCarouselSlide(currentCarouselIndex);
        autoCarouselTimer = setInterval(autoCarouselSlide, 3000);
      });
    }, 150);
    return;
  }
  currentCarouselIndex = item.dataset.index;
  activeCarouselSlide(Number(currentCarouselIndex));
  autoCarouselTimer = setInterval(autoCarouselSlide, 3000);
}
function autoCarouselSlide() {
  if (currentCarouselIndex == allMainCarouselLargeCards.length - 1) {
    mainCarouselLargeWrapper.style.transition = "none";
    currentCarouselIndex = 0;
    activeCarouselSlide(currentCarouselIndex);
    setTimeout(() => {
      requestAnimationFrame(() => {
        mainCarouselLargeWrapper.style.transition = "";
      });
    }, 0);
    return;
  }

  currentCarouselIndex += 1;
  activeCarouselSlide(currentCarouselIndex);
}
initCarouselSlide();
activeCarouselSlide(1);
autoCarouselSlide();
let autoCarouselTimer = setInterval(autoCarouselSlide, 3000);
function initCarouselSlide() {
  let lastClone =
    allMainCarouselLargeCards[allMainCarouselLargeCards.length - 1].cloneNode(
      true
    );
  mainCarouselLargeWrapper.insertBefore(
    lastClone,
    allMainCarouselLargeCards[0]
  );
  allMainCarouselLargeCards = mainCarousel.querySelectorAll(
    ".main__carousel__card--large"
  );
  mainCarouselLargeWrapper.style.transform = `translateX(-100%)`;
}
// 用index對照切換
function activeCarouselSlide(index) {
  index = Number(index);
  if (index > allMainCarouselLargeCards.length) {
    return;
  }

  let tabIndex = index - 1;
  if (tabIndex == -1) {
    tabIndex = carouselAllTabs.length - 1;
  }

  mainCarouselLargeWrapper.style.transform = `translateX(${index * -100}%)`;
  carouselAllTabs.forEach((i) => {
    i.classList.remove("active");
  });
  if (carouselAllTabs[tabIndex]) {
    carouselAllTabs[tabIndex].classList.add("active");
  }
}
