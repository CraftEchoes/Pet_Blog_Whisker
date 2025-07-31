let blogMainControl = document.querySelector(".blog__main-control");
let form = blogMainControl.querySelector("form");
let allMainFilterItem = document.querySelectorAll("form .main__filter-item");
let mainControl = document.querySelector(".main__control");
let mainControlSearch = mainControl.querySelector(".main__control-search");
let inputSearch = mainControlSearch.querySelector("#post_list-search-input");
let submitSearch = mainControlSearch.querySelector("#post_list-search-submit");
let noticeSearch = mainControlSearch.querySelector(
  ".main__control-search-notice"
);
let blogMainListMain = document.querySelector(".blog__main-list-main");

let adoptionSelect = document.querySelector("#post_list-select");
let resetFilter = document.querySelector(".main__filter-reset");
resetFilter.addEventListener("click", clearFilter);
submitSearch.addEventListener("click", updateDisplayData);
adoptionSelect.addEventListener("change", function () {
  if (currentStatus) {
    currentStatus.sort = this.value;
    updateDisplayData();
  }
});
// tags: ["鏟屎日常", "寵物健康", "狗狗","貓貓"],
const articleFakeData = [
  {
    id: 1,
    title: "盛夏的午後冒險",
    date: "2025-04-21",
    content: "每當午後陽光灑落，小圓總愛把頭伸出窗外，感受風的溫度...",
    tags: ["鏟屎日常", "狗狗"],
    image: "./image/post/post-6.png",
    liked: 20, //喜歡數量
    bookmarked: 5, //收藏數量
    viewed: 100, //觀看次數
  },
  {
    id: 2,
    title: "貓貓的新玩具實測",
    date: "2025-04-20",
    content: "這次幫阿虎買了一個互動小老鼠，原本以為牠會不屑...",
    tags: ["鏟屎日常", "貓咪"],
    image: "./image/post/post-2.png",
    liked: 35,
    bookmarked: 12,
    viewed: 240,
  },
  {
    id: 3,
    title: "帶你回家的第一天",
    date: "2025-04-18",
    content: "我們終於把「黑豆」帶回家了，牠有點怕生但很溫柔...",
    tags: ["寵物健康", "狗狗"],
    image: "./image/post/post-3.png",
    liked: 58,
    bookmarked: 24,
    viewed: 375,
  },
  {
    id: 4,
    title: "寵物攝影小技巧",
    date: "2025-04-16",
    content: "用手機也能拍出專業寵物寫真？今天分享 5 個實用秘訣...",
    tags: ["鏟屎日常", "貓咪", "狗狗"],
    image: "./image/post/post-4.png",
    liked: 19,
    bookmarked: 6,
    viewed: 185,
  },
  {
    id: 5,
    title: "毛孩保健日常",
    date: "2025-04-14",
    content: "定期刷牙、按時除蚤是照顧毛孩健康的基本功，讓我們一起養成習慣！",
    tags: ["寵物健康", "貓咪", "狗狗"],
    image: "./image/post/post-5.png",
    liked: 44,
    bookmarked: 17,
    viewed: 310,
  },
];

let currentStatus = {
  searchKeyword: "",
  filters: {
    tags: [],
  },
  sort: "created_desc",
};
let apiData = [];
let currentData = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  allMainFilterItem.forEach((item) => {
    let type = item.dataset.key;
    let options = item.querySelectorAll(".main__filter-option");
    pushCheckedToList(options, currentStatus.filters);
  });
  updateDisplayData();
});
function pushCheckedToList(options, listObj) {
  options.forEach((item) => {
    let checkbox = item.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      listObj["tags"].push(checkbox.value);
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (match) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[match];
  });
}
function searchData(data, keyword) {
  let keywordRegexp = new RegExp(keyword, "i"); //i代表不分大小寫

  let match = data.filter((item) => {
    return item.title.match(keywordRegexp);
  });
  if (match && keyword) {
    createMatchCloseButton(keyword);
  }
  return match;
}
// 正在搜尋的關鍵字小卡
function createMatchCloseButton(keyword) {
  noticeSearch.style.display = "block";
  noticeSearch.innerHTML = "";
  let button = document.createElement("button");
  button.classList.add("main__control-search-notice-tag");
  let spanWord = document.createElement("span");
  spanWord.textContent = keyword;
  let spanCloseIcon = document.createElement("img");
  spanCloseIcon.src = "./image/icons/close-solid.png";
  button.append(spanWord, spanCloseIcon);
  noticeSearch.append(button);
  button.addEventListener("click", clearSearch);
}
function isFilterActive(filters) {
  return Object.values(filters).some((arr) => arr.length > 0); // some為array有一個為true就返回true，這裡是只要有任何勾選就回傳true
}

// 清空搜尋
function clearSearch() {
  noticeSearch.style.display = "";
  noticeSearch.innerHTML = "";
  inputSearch.value = "";
  searchData(apiData, "");
  updateDisplayData();
}
// 清空篩選
function clearFilter() {
  noticeSearch.style.display = "";
  noticeSearch.innerHTML = "";
  resetFilters();

  updateDisplayData();
}
function resetFilters() {
  currentStatus.filters = {
    tags: [],
  };
}

function filterData(data, filterListObj) {
  let filterData = data.filter((item) => {
    const match =
      !filterListObj.tags.length ||
      item.tags.some((tag) => {
        return filterListObj.tags.includes(tag);
      });
    return match;
  });
  return filterData;
}
function sortData(data, rule) {
  if (rule === "update-asc") {
    // 最後更新的時間 | 舊-新 update
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (rule === "update-desc") {
    // 最後更新的時間 | 新-舊 update
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return data;
}
function updateDisplayData() {
  blogMainListMain.innerHTML = "";
  currentStatus.searchKeyword = inputSearch.value.trim();
  let baseData = [...articleFakeData];
  // 搜尋
  let keyword = currentStatus.searchKeyword;
  if (keyword) {
    keyword = escapeHTML(keyword);
  }
  baseData = searchData(baseData, keyword); //篩選搜尋物件

  // 篩選
  if (isFilterActive(currentStatus.filters)) {
    baseData = filterData(baseData, currentStatus.filters);
  }

  let sorted = sortData(baseData, currentStatus.sort);

  currentData = sorted;
  renderCards(currentData);
}

function renderCards(list) {
  blogMainListMain.innerHTML = "";
  blogMainListMain.classList.remove("blog__main-list-main--no-list");
  let fragment = document.createDocumentFragment();
  if (!list.length) {
    blogMainListMain.innerHTML = "請重新輸入搜尋條件";
    blogMainListMain.classList.add("blog__main-list-main--no-list");
    return;
  }
  list.forEach((item) => {
    createCardElement(item, fragment);
  });
  blogMainListMain.append(fragment);
}

function createCardElement(item, fragment) {
  let a = document.createElement("a");
  a.href = `./post-detail.html`;
  a.setAttribute("target", "_blank");
  a.classList.add("blog__main-card");

  let imgBox = document.createElement("div");
  imgBox.classList.add("blog__main-card-image");
  let img = document.createElement("img");
  img.src = item.image;
  imgBox.append(img);

  let cardContent = document.createElement("div");
  cardContent.classList.add("blog__main-card-content");
  let h3 = document.createElement("h3");
  h3.textContent = item.title;
  let p = document.createElement("p");
  p.textContent = item.content;
  let mainCardTags = document.createElement("div");

  mainCardTags.classList.add("blog__main-card-tags");
  if (item.tags) {
    item.tags.forEach((tag) => {
      let span = document.createElement("span");
      span.classList.add("card__tag");
      span.textContent = tag;
      mainCardTags.append(span);
    });
  }
  cardContent.append(h3, p, mainCardTags);

  let mainCardInfo = document.createElement("div");
  mainCardInfo.classList.add("blog__main-card-info");
  let mainCardTime = document.createElement("div");
  mainCardTime.classList.add("blog__main-card-time");
  mainCardTime.textContent = item.date;

  let mainCardLabels = document.createElement("div");
  mainCardLabels.classList.add("blog__main-card-labels");
  let labels = ["bookmarked", "liked", "viewed"];
  labels.forEach((label) => {
    let mainCardLabel = document.createElement("div");
    mainCardLabel.classList.add("blog__main-card-label");
    let span = document.createElement("span");
    span.classList.add("blog__main-card-icon");
    let img = document.createElement("img");
    img.src = `./image/icons/${label}.png`;
    span.append(img);

    let blogMainCount = document.createElement("div");
    blogMainCount.classList.add("blog__main-count");
    blogMainCount.textContent = item[label];
    mainCardLabel.append(span, blogMainCount);
    mainCardLabels.append(mainCardLabel);
  });
  mainCardInfo.append(mainCardTime, mainCardLabels);

  a.append(imgBox, cardContent, mainCardInfo);
  fragment.append(a);
}

window.addEventListener("load", updateDisplayData); // 初始化
