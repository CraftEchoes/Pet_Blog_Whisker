let locationArgs = new URLSearchParams(window.location.search);
let animal_subid = getParamsClean("animal_subid");
let animal_place = getParamsClean("animal_place");
let animal_kind = getParamsClean("animal_kind");
let animal_Variety = getParamsClean("animal_Variety");
let animal_sex = getParamsClean("animal_sex");
let animal_bodytype = getParamsClean("animal_bodytype");
let animal_colour = getParamsClean("animal_colour");
let animal_title = getParamsClean("animal_title");

let animal_status = getParamsClean("animal_status");
let animal_remark = getParamsClean("animal_remark");
let animal_createtime = getParamsClean("animal_createtime");
let shelter_address = getParamsClean("shelter_address");
let shelter_tel = getParamsClean("shelter_tel");
let shelter_name = getParamsClean("shelter_name");
let album_file = getParamsClean("album_file");

let mainDetailInfo = document.querySelector(".main__detail-info");
let mainDetailImage = document.querySelector(".main__detail-image img");
function getParamsClean(paramsName, fallback = "") {
  const value = locationArgs.get(paramsName);
  return !value || value.trim() === "" ? fallback : value.trim();
}

let petData = {
  animal_subid: animal_subid,
  animal_place: animal_place,
  animal_kind: animal_kind,
  animal_Variety: animal_Variety,
  animal_sex: animal_sex,
  animal_bodytype: animal_bodytype,
  animal_colour: animal_colour,
  animal_title: animal_title,
  animal_status: animal_status,
  animal_remark: animal_remark,
  animal_createtime: animal_createtime,
  shelter_address: shelter_address,
  shelter_tel: shelter_tel,
  shelter_name: shelter_name,
  // album_file: album_file,
};

let petKey = {
  animal_subid: "收容編號",
  animal_place: "實際所在地",
  animal_kind: "種類",
  animal_Variety: "品種",
  animal_sex: "性別",
  animal_bodytype: "體型",
  animal_colour: "花色",
  animal_title: "標題",
  animal_status: "開放認養",
  animal_remark: "備註",
  animal_createtime: "建檔日期",
  shelter_address: "收容所位置",
  shelter_tel: "連絡電話",
  shelter_name: "收容所名稱",
  // album_file: album_file,
};

let domFragment = document.createDocumentFragment();
let sex_refer = { M: "男孩", F: "女孩" };
let bodytype_refer = { SMALL: "小型", MEDIUM: "中型", LARGE: "大型" };
let status_refer = { OPEN: "開放認養", ADOPTED: "已認養", OTHER: "其他" };

if (album_file) {
  mainDetailImage.src = album_file;
} else {
  if (petData.animal_kind === "狗") {
    mainDetailImage.src = "./image/dog-default.png";
  } else {
    mainDetailImage.src = "./image/cat-default.png";
  }
}

for (key in petData) {
  let displayValue = petData[key];
  if (key === "animal_sex") {
    displayValue = sex_refer[petData[key]];
  }
  if (key === "animal_bodytype") {
    displayValue = bodytype_refer[petData[key]];
  }
  if (key === "animal_status") {
    displayValue = status_refer[petData[key]];
  }
  createElement(domFragment, "div", petKey[key], "info-label");
  createElement(domFragment, "div", displayValue, "info-value");
  mainDetailInfo.append(domFragment);
}

function createElement(fragment, type, text, cName) {
  // fragment 集合式DOM
  //type DOM類型
  //text 文字資料
  let newElement = document.createElement(type);
  newElement.textContent = text;
  newElement.classList.add("cName");
  fragment.append(newElement);
}
