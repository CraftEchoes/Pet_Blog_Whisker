let header = document.querySelector("header");
let headerList = header.querySelector(".header__list");
let headerLinksCloseBtn = header.querySelector(".header__links-close-btn");
let headerLinks = header.querySelector(".header__links");
let mainVoteEndtime = document.querySelector(".main__vote-endtime");
let isHeaderLinksOpen = false;
// nav list
headerList.addEventListener("click", () => {
  isHeaderLinksOpen = !isHeaderLinksOpen;
  if (isHeaderLinksOpen) {
    headerLinks.classList.add("header__links--open");
  } else {
    headerLinks.classList.remove("header__links--open");
  }
});
headerLinksCloseBtn.addEventListener("click", function () {
  isHeaderLinksOpen = false;
  headerLinks.classList.remove("header__links--open");
});

// header bg opacity
let ticking = false;
function scrollChangeOpacity() {
  if (window.scrollY == 0) {
    header.classList.remove("header--scroll");
  } else {
    header.classList.add("header--scroll");
  }
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(scrollChangeOpacity);
    ticking = true;
  }
});

let voteDate = new Date("2025-05-01T23:59:59").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  let diff = voteDate - now;

  if (diff < 0) {
    mainVoteEndtime.textContent = "00:00:00:00";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  function pad(n) {
    return n.toString().padStart(2, "0");
  }

  mainVoteEndtime.textContent = `${pad(days)}:${pad(hours)}:${pad(
    minutes
  )}:${pad(seconds)}`;
}

updateCountdown(); // 初始執行一次
const timer = setInterval(updateCountdown, 1000); // 每秒更新
