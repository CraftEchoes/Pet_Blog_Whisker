let cardContainer = document.querySelector(".main__cards-container");
let nowOrigin = window.location.origin;
const cleanUrl = nowOrigin.replace(/\.html$/, "");

let fakeData = [
  {
    animal_id: 392150, //收容編號
    animal_subid: "OAAAG1140204002", //識別碼
    animal_area_pkid: 19, //縣市代碼
    animal_shelter_pkid: 79, //收容所代碼
    animal_place: "花蓮縣狗貓躍動園區", //實際所在地
    animal_kind: "狗", //類型
    animal_Variety: "混種犬          ", //品種
    animal_sex: "M", //性別 M表示公，F表示母
    animal_bodytype: "MEDIUM", //體型大小 // 小型(SMALL)、中型(MEDIUM)、大型(LARGE)
    animal_colour: "黑白色", // 花色
    animal_age: "CHILD", // 幼年(CHI)、成年(ADULT)
    animal_sterilization: "T", // 已絕育(T)、未絕育(F)、不明(N)
    animal_bacterin: "F", // 已施打(T)、未施打(F)、不明(N)
    animal_foundplace: "花蓮縣瑞穗鄉富民村民有一街1 ", // 動物被發現的地點
    animal_title: "", // 動物在網站上的標題
    animal_status: "OPEN", //	開放認養(OPEN)、已認養(ADOPTED)、其他(OTHER)
    animal_remark: "認養動物需現場互動評估，欲認養請先來電預約，恕不作保留。", //	其他需要說明的事項
    animal_caption: "", //對動物的補充描述
    animal_opendate: "2025-03-26", // 開始開放認養的日期
    animal_closeddate: "2999-12-31", // 結束開放認養的日期
    animal_update: "2025/04/09", // 資料最後更新的時間
    animal_createtime: "2025/02/04", // 資料建立的時間
    shelter_name: "花蓮縣狗貓躍動園區", // 收容所的名稱
    album_file: "https://www.pet.gov.tw/upload/pic/1738643279785.png", // 動物照片的檔案名稱
    album_update: "", // 照片資料最後更新的時間
    cDate: "2025/04/09", // 此筆資料的最後更新時間
    shelter_address: "花蓮縣鳳林鎮林榮里永豐路255號", // 	收容所的地址
    shelter_tel: "038-421452", //收容所的聯絡電話
  },
  {
    animal_id: 390256,
    animal_subid: "OAAAG1140115005",
    animal_area_pkid: 19,
    animal_shelter_pkid: 79,
    animal_place: "花蓮縣狗貓躍動園區",
    animal_kind: "狗",
    animal_Variety: "混種犬          ",
    animal_sex: "F",
    animal_bodytype: "MEDIUM",
    animal_colour: "棕黑色",
    animal_age: "CHILD",
    animal_sterilization: "T",
    animal_bacterin: "F",
    animal_foundplace: "和平路信義路口",
    animal_title: "",
    animal_status: "OPEN",
    animal_remark: "認養動物需現場互動評估，欲認養請先來電預約，恕不作保留。",
    animal_caption: "",
    animal_opendate: "2025-02-12",
    animal_closeddate: "2999-12-31",
    animal_update: "2025/04/09",
    animal_createtime: "2025/01/15",
    shelter_name: "花蓮縣狗貓躍動園區",
    album_file: "https://www.pet.gov.tw/upload/pic/1736921780319.png",
    album_update: "",
    cDate: "2025/04/09",
    shelter_address: "花蓮縣鳳林鎮林榮里永豐路255號",
    shelter_tel: "038-421452",
  },
  {
    animal_id: 400721,
    animal_subid: "VAAAG114040905",
    animal_area_pkid: 2,
    animal_shelter_pkid: 49,
    animal_place: "臺北市動物之家",
    animal_kind: "狗",
    animal_Variety: "混種犬          ",
    animal_sex: "M",
    animal_bodytype: "MEDIUM",
    animal_colour: "黑色",
    animal_age: "ADULT",
    animal_sterilization: "F",
    animal_bacterin: "F",
    animal_foundplace: "康寧路三段２２０號",
    animal_title: "",
    animal_status: "OPEN",
    animal_remark: "左後肩傷 雙眼白內障 左眼較嚴重 皮膚病",
    animal_caption: "",
    animal_opendate: "",
    animal_closeddate: "2999-12-31",
    animal_update: "2025/04/09",
    animal_createtime: "2025/04/08",
    shelter_name: "臺北市動物之家",
    album_file: "https://www.pet.gov.tw/upload/pic/1744179834265.png",
    album_update: "",
    cDate: "2025/04/09",
    shelter_address: "臺北市內湖區安美街191號",
    shelter_tel: "02-87913254",
  },
  {
    animal_id: 399178,
    animal_subid: "PAAAG1140324016",
    animal_area_pkid: 21,
    animal_shelter_pkid: 83,
    animal_place: "澎湖縣流浪動物收容中心",
    animal_kind: "狗",
    animal_Variety: "混種犬          ",
    animal_sex: "M",
    animal_bodytype: "SMALL",
    animal_colour: "黑黃色",
    animal_age: "CHILD",
    animal_sterilization: "F",
    animal_bacterin: "F",
    animal_foundplace: "51號",
    animal_title: "",
    animal_status: "OPEN",
    animal_remark: "",
    animal_caption: "",
    animal_opendate: "2025-04-09",
    animal_closeddate: "2999-12-31",
    animal_update: "2025/04/09",
    animal_createtime: "2025/03/24",
    shelter_name: "澎湖縣流浪動物收容中心",
    album_file: "https://www.pet.gov.tw/upload/pic/1744179730494.png",
    album_update: "",
    cDate: "2025/04/09",
    shelter_address: "澎湖縣馬公市烏崁里260、261號",
    shelter_tel: "06-9213559",
  },
  {
    animal_id: 400873,
    animal_subid: "AAADG2025040901",
    animal_area_pkid: 3,
    animal_shelter_pkid: 50,
    animal_place: "新北市板橋區公立動物之家",
    animal_kind: "貓",
    animal_Variety: "混種貓                 ",
    animal_sex: "F",
    animal_bodytype: "SMALL",
    animal_colour: "黑色",
    animal_age: "ADULT",
    animal_sterilization: "F",
    animal_bacterin: "F",
    animal_foundplace: "復興區36之1號",
    animal_title: "",
    animal_status: "OPEN",
    animal_remark: "",
    animal_caption: "",
    animal_opendate: "2025-04-09",
    animal_closeddate: "2999-12-31",
    animal_update: "2025/04/09",
    animal_createtime: "2025/04/09",
    shelter_name: "新北市板橋區公立動物之家",
    album_file: "https://www.pet.gov.tw/upload/pic/1744179647129.png",
    album_update: "",
    cDate: "2025/04/09",
    shelter_address: "新北市板橋區板城路28-1號",
    shelter_tel: "02-89662158",
  },
];
let apiData = [];
let currentData = [];

// 動態新增縣市checkbox
let cityIdMap = {
  2: "臺北市",
  3: "新北市",
  4: "基隆市",
  5: "宜蘭縣",
  6: "桃園市",
  7: "新竹市",
  8: "新竹縣",
  9: "苗栗縣",
  10: "臺中市",
  11: "彰化縣",
  12: "南投縣",
  13: "雲林縣",
  14: "嘉義縣",
  15: "嘉義市",
  16: "臺南市",
  17: "高雄市",
  18: "屏東縣",
  19: "花蓮縣",
  20: "臺東縣",
  21: "澎湖縣",
  22: "金門縣",
  23: "連江縣",
};
// 各個項目選到的值彙總到物件中來做filter
let allMainFilterItem = document.querySelectorAll("form .main__filter-item");

// 狀態管理物件
let currentStatus = {
  searchKeyword: "",
  filters: {
    city: [],
    type: [],
    gender: [],
    bodytype: [],
    status: [],
  },
  sort: "created_desc",
};
// 用來比對的物件

let today = new Date();
let changeObject = {
  gender: { M: "男生", F: "女生" },
  bodytype: { SMALL: "小型", MEDIUM: "中型", LARGE: "大型" },
  status: { OPEN: "開放認養", ADOPTED: "已認養", OTHER: "其他" },
};
let cityList = document.querySelector(".main__filter-list--city");
let cityArray = Object.entries(cityIdMap);
let listElement = document.createDocumentFragment();
let cityDomList = [];
for (let item of cityArray) {
  let div = document.createElement("div");
  div.classList.add("main__filter-option");
  let inputCheckbox = document.createElement("input");
  inputCheckbox.value = item[0];
  inputCheckbox.id = `city-${item[0]}`;
  inputCheckbox.type = "checkbox";
  let label = document.createElement("label");
  label.setAttribute("for", `city-${item[0]}`);
  label.textContent = item[1];
  div.append(inputCheckbox);
  div.append(label);
  listElement.append(div);
  cityDomList.push(inputCheckbox);
}

if (cityList && listElement) {
  cityList.append(listElement);
}
let adoptionSelect = document.querySelector("#control-select");

adoptionSelect.addEventListener("change", function () {
  if (currentStatus) {
    currentStatus.sort = this.value;
    updateDisplayData();
  }
});

let allCityOption = document.querySelector("#all-city-option");
allCityOption.addEventListener("click", function (e) {
  let checked = e.target.checked;
  if (cityDomList) {
    cityDomList.forEach((item) => {
      item.checked = checked;
    });
  }
});
// 主要的核心大功能，資料策動畫面
function updateDisplayData() {
  noticeSearch.style.display = "none";
  currentStatus.searchKeyword = inputSearch.value.trim(); //將尾部空格去掉
  let baseData = [...apiData];

  // 搜尋
  let keyword = currentStatus.searchKeyword;
  if (keyword) {
    let wordRegexp = new RegExp("^[A-Za-z0-9]+$", "i"); //i代表不分大小寫
    if (keyword && !wordRegexp.test(keyword)) {
      return;
    }

    // 複寫baseData達成資料篩選
    baseData = searchData(baseData, keyword);
  }
  // 篩選
  if (isFilterActive(currentStatus.filters)) {
    baseData = filterData(baseData, currentStatus.filters);
  }
  // 排序
  let sorted = sortData(baseData, currentStatus.sort);
  currentData = sorted;
  renderCards(currentData); //創造渲染畫面
}

// 是否有篩選任何資料
function isFilterActive(filters) {
  return Object.values(filters).some((arr) => arr.length > 0); // some為array有一個為true就返回true，這裡是只要有任何勾選就回傳true
}
let resetFilter = document.querySelector(".main__filter-reset");
resetFilter.addEventListener("click", clearFilter);
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  allMainFilterItem.forEach((item) => {
    let type = item.dataset.key;
    let options = item.querySelectorAll(".main__filter-option");
    pushCheckedToList(type, options, currentStatus.filters);
  });
  updateDisplayData();
});

// 將篩選勾選加入清單
function pushCheckedToList(type, checkBoxList, listObj) {
  let filterList = [];
  checkBoxList.forEach((item) => {
    let checkbox = item.querySelector("input[type='checkbox']");
    let label = item.querySelector("label");
    if (checkbox.checked) {
      filterList.push(checkbox.value);
    }
  });
  listObj[type] = filterList;
}

//處理篩選資料，之後使用真正的API需要放到async內
function filterData(data, filterListObj) {
  let filterData = data.filter((item) => {
    // 若陣列是空的，回傳true，等於是沒有條件，若陣列不等於空的，檢查資料是否包含在篩選條件內
    // includes：在該Array中包含某個值並回傳boolean
    // 若都includes不到代表可能型別不同

    const cityMatch =
      !filterListObj.city.length ||
      filterListObj.city.includes(String(item.animal_area_pkid));
    const typeMatch =
      !filterListObj.type.length ||
      filterListObj.type.includes(String(item.animal_kind));
    const genderMatch =
      !filterListObj.gender.length ||
      filterListObj.gender.includes(String(item.animal_sex));
    const bodyTypeMatch =
      !filterListObj.bodytype.length ||
      filterListObj.bodytype.includes(String(item.animal_bodytype));
    const statusMatch =
      !filterListObj.status.length ||
      filterListObj.status.includes(String(item.animal_status));

    return (
      cityMatch && typeMatch && genderMatch && bodyTypeMatch && statusMatch
    );
  });
  return filterData;
}

//目前因為沒有分頁，所以先接66筆
async function fetchData() {
  let res = await fetch(
    "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=66&$skip=0"
  );
  apiData = await res.json();
  currentData = [...apiData];

  cardContainer.innerHTML = "";
  if (apiData && cardContainer) {
    updateDisplayData();
  }
}
// 搜尋的驗證邏輯
// 當我搜尋之後，旁邊會出現一個我現在搜尋的編號小卡及叉叉，點了之後又回到整頁模式
let mainControl = document.querySelector(".main__control");
let mainControlSearch = mainControl.querySelector(".main__control-search");
let inputSearch = mainControlSearch.querySelector("#control-search-input");
let submitSearch = mainControlSearch.querySelector("#control-search-submit");
let noticeSearch = mainControlSearch.querySelector(
  ".main__control-search-notice"
);

submitSearch.addEventListener("click", updateDisplayData);

// 搜尋功能
function searchData(data, keyword) {
  let keywordRegexp = new RegExp(keyword, "i"); //i代表不分大小寫

  let match = data.filter((item) => {
    return item.animal_subid.match(keywordRegexp);
  });

  if (match && keyword) {
    createMatchCloseButton(keyword);
  }
  return match;
}
// 正在搜尋的關鍵字小卡
function createMatchCloseButton(keyword) {
  noticeSearch.style.display = "";
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
// 清空搜尋
function clearSearch() {
  noticeSearch.style.display = "none";
  noticeSearch.innerHTML = "";
  inputSearch.value = "";
  searchData(apiData, "");
  updateDisplayData();
}
// 清空篩選
function clearFilter() {
  noticeSearch.style.display = "none";
  noticeSearch.innerHTML = "";
  resetFilters();

  updateDisplayData();
}
function resetFilters() {
  currentStatus.filters = {
    city: [],
    type: [],
    gender: [],
    bodytype: [],
    status: [],
  };
}
function sortData(data, rule) {
  // 在sort中如果回傳a-b是字串日期相減會變成nan，排序無效！因此要先轉為Date物件
  if (rule === "opendate-asc") {
    // 開放認養日 | 舊-新 opendate
    data.sort(
      (a, b) => new Date(a.animal_opendate) - new Date(b.animal_opendate)
    );
  }
  if (rule === "opendate-desc") {
    // 開放認養日 | 新-舊 opendate
    data.sort(
      (a, b) => new Date(b.animal_opendate) - new Date(a.animal_opendate)
    );
  }
  if (rule === "update-asc") {
    // 最後更新的時間 | 舊-新 update
    data.sort((a, b) => new Date(a.animal_update) - new Date(b.animal_update));
  }
  if (rule === "update-desc") {
    // 最後更新的時間 | 新-舊 update
    data.sort((a, b) => new Date(b.animal_update) - new Date(a.animal_update));
  }
  if (rule === "createtime-asc") {
    // 資料建立的時間 | 舊-新 createtime
    data.sort(
      (a, b) => new Date(a.animal_createtime) - new Date(b.animal_createtime)
    );
  }
  if (rule === "createtime-desc") {
    // 資料建立的時間 | 新-舊 createtime
    data.sort(
      (a, b) => new Date(b.animal_createtime) - new Date(a.animal_createtime)
    );
  }
  return data;
}

// 創建卡片
function renderCards(list) {
  cardContainer.innerHTML = "";
  let fragment = document.createDocumentFragment();
  list.forEach((item) => {
    createCardElement(item, fragment);
  });
  cardContainer.append(fragment);
}
function changeTimeData(time) {
  let startDate = new Date(time);
  // 差距(毫秒)
  let diffInMs = today - startDate;
  let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return `入園共 ${diffInDays} 天`;
}
function createCardElement(item, fragment) {
  //資料都要處理過
  let city = cityIdMap[item.animal_area_pkid] || "不明"; //地區 //用卡片 //因為是編號所以要處理
  let gender = changeObject.gender[item.animal_sex] || "不明"; //性別

  let bodytype = changeObject.bodytype[item.animal_bodytype] || "不明"; //體型
  let status = changeObject.status[item.animal_status] || "不明"; //開放認養
  let type = item.animal_kind || "不明"; //種類
  let place = item.animal_place || "不明"; //所在收容所
  let createTime = changeTimeData(item.animal_createtime) || "不明"; // 入園時間
  let subid = item.animal_subid || "不明"; //收容編號
  let imageSrc = item.album_file || "不明";

  let card = document.createElement("a");
  card.classList.add("main__cards-card");

  let mainCardsCardMain = document.createElement("a");
  mainCardsCardMain.classList.add("main__cards-card-main");
  // 網址之後改成網域名稱
  if (cleanUrl) {
    mainCardsCardMain.href = `${cleanUrl}/adop-detail.html?&animal_subid=${item.animal_subid}&
    &animal_place=${item.animal_place}
    &animal_kind=${item.animal_kind}
    &animal_Variety=${item.animal_Variety}
    &animal_sex=${item.animal_sex}
    &animal_bodytype=${item.animal_bodytype}
    &animal_colour=${item.animal_colour}
    &animal_title=${item.animal_title}
    &animal_status=${item.animal_status}
    &animal_remark=${item.animal_remark}
    &animal_createtime=${item.animal_createtime}
    &shelter_address=${item.shelter_address}
    &shelter_tel=${item.shelter_tel}
    &shelter_name=${item.shelter_name}
    &album_file=${item.album_file}`;
  } else {
    mainCardsCardMain.href = "#";
  }

  let mainCardsCardMainImage = document.createElement("div");
  mainCardsCardMainImage.classList.add("main__cards-card-main-image");
  let imageImg = document.createElement("img");
  imageImg.loading = "lazy";
  imageImg.src = imageSrc;
  imageImg.onerror = function () {
    if (type === "狗") {
      this.src = "./image/cat-default.png"; // 預設替代圖片
    } else if (type === "貓") {
      this.src = "./image/dog-default.png"; // 預設替代圖片
    }
  };
  mainCardsCardMainImage.append(imageImg);

  let mainCardsCardMainType = document.createElement("div");
  mainCardsCardMainType.classList.add("main__cards-card-main-type");

  let typeImg = document.createElement("img");
  if (type === "狗") {
    typeImg.src = `./image/icons/dog.png`;
  } else if (type === "貓") {
    typeImg.src = `./image/icons/cat.png`;
  }
  mainCardsCardMainType.append(typeImg);
  mainCardsCardMainImage.append(mainCardsCardMainType);

  let mainCardsCardMainStatus = document.createElement("div");
  mainCardsCardMainStatus.classList.add("main__cards-card-main-status");
  mainCardsCardMainStatus.textContent = status;

  let mainCardsCardMainGender = document.createElement("div");
  mainCardsCardMainGender.classList.add("main__cards-card-main-gender");
  let genderImg = document.createElement("img");
  if (gender === "男生") {
    genderImg.src = `./image/icons/boy.png`;
  } else if (gender === "女生") {
    genderImg.src = `./image/icons/girl.png`;
  }
  mainCardsCardMainGender.append(genderImg);

  let mainCardsCardMainCity = document.createElement("div");
  mainCardsCardMainCity.classList.add("main__cards-card-main-city");
  mainCardsCardMainCity.textContent = city;
  // main append
  mainCardsCardMain.append(mainCardsCardMainImage);
  mainCardsCardMain.append(mainCardsCardMainStatus);
  mainCardsCardMain.append(mainCardsCardMainGender);
  mainCardsCardMain.append(mainCardsCardMainCity);

  let mainCardsCardInfo = document.createElement("div");
  mainCardsCardInfo.classList.add("main__cards-card-info");

  let mainCardsCardMainPlace = document.createElement("div");
  mainCardsCardMainPlace.classList.add("main__cards-card-info-place");
  mainCardsCardMainPlace.textContent = place;

  let mainCardsCardMainBodyType = document.createElement("div");
  mainCardsCardMainBodyType.classList.add("main__cards-card-info-bodyType");
  mainCardsCardMainBodyType.textContent = bodytype;

  let mainCardsCardMainCreateTime = document.createElement("div");
  mainCardsCardMainCreateTime.classList.add("main__cards-card-info-createtime");
  mainCardsCardMainCreateTime.textContent = createTime;

  let mainCardsCardMainSubid = document.createElement("div");
  mainCardsCardMainSubid.classList.add("main__cards-card-info-subid");
  mainCardsCardMainSubid.textContent = `收容編號 ${subid}`;
  // info append
  mainCardsCardInfo.append(mainCardsCardMainPlace);
  mainCardsCardInfo.append(mainCardsCardMainBodyType);
  mainCardsCardInfo.append(mainCardsCardMainCreateTime);
  mainCardsCardInfo.append(mainCardsCardMainSubid);

  card.append(mainCardsCardMain);
  card.append(mainCardsCardInfo);

  fragment.append(card);
}
fetchData();
