let messageArea = document.querySelector(".main__message-area");
let messageBox = messageArea.querySelector(".main__message-box");
let messageUsername = messageArea.querySelector(".main__message-username");
let messageBoard = messageArea.querySelector(".main__message-board");

let messageSubmit = messageArea.querySelector("button.submit");
let clearAllBelow = document.querySelector("button.clear-all-below");
let showMessageArea = document.querySelector(".main__message-show");
let haveBelow = false;
messageSubmit.addEventListener("click", function () {
  let username = messageUsername.value;
  let message = messageBoard.value;
  if (!message || !username) {
    return;
  }

  let date = new Date();
  // YYYY-mm-dd HH:MM:SS
  let nowYear = String(date.getFullYear()).padStart(4, "0"); //年份從1970開始
  let nowMonth = String(date.getMonth() + 1).padStart(2, "0"); //月份從0開始
  let nowDay = String(date.getDate()).padStart(2, "0");
  let nowHour = String(date.getHours()).padStart(2, "0");
  let nowMinute = String(date.getMinutes()).padStart(2, "0");
  let nowSecond = String(date.getSeconds()).padStart(2, "0");
  let nowTime = `${nowYear}-${nowMonth}-${nowDay} ${nowHour}:${nowMinute}:${nowSecond}`;
  let messageObj = {
    index: null,
    name: username,
    message: message,
    time: nowTime,
    timestamp: date.getTime(), // 用來排序、比對
  };
  storeMessageToLocalStorage(messageObj);
  // 取出儲存的localstorage並顯示在畫面上

  // 建立新增的單項項目
  if (localStorage.getItem(`message${messageObj.timestamp}`)) {
    createMessageBelow(messageObj);
  }
  messageUsername.value = "";
  messageBoard.value = "";
});
// 儲存到localStorage
function storeMessageToLocalStorage(messageObj) {
  let messageObjString = JSON.stringify(messageObj);
  localStorage.setItem(`message${messageObj.timestamp}`, messageObjString);
}

function readMessageLocalStorage() {
  const allMessage = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    if (!key.startsWith("message") || !value) {
      continue;
    }

    allMessage[key] = JSON.parse(value);
    let messageObj = allMessage[key];
  }

  createMessageBelowSameTime(allMessage);
}
readMessageLocalStorage();
function createMessageBelowSameTime(allListObj) {
  if (!allListObj.length) {
    showMessageArea.innerHTML = "尚未擁有留言";
  } else {
    haveBelow = true;
    showMessageArea.classList.remove("main__message-show--no-comment");
    showMessageArea.innerHTML = "";
  }
  let listElement = document.createDocumentFragment();
  // 在製作清單前先排序
  let sortedEntries = Object.entries(allListObj).sort(
    (a, b) => a[1].timestamp - b[1].timestamp
  );
  for (let [key, value] of sortedEntries) {
    createMessageBelow(value, listElement);
  }

  if (showMessageArea) {
    showMessageArea.append(listElement);
  }
}
function createMessageBelow(objKey, list = null) {
  if (!haveBelow) {
    showMessageArea.classList.remove("main__message-show--no-comment");
    showMessageArea.innerHTML = "";
    haveBelow = true;
  }

  let messageDiv = document.createElement("div");
  messageDiv.classList.add("main__below");
  if (!objKey.message) {
    return;
  }
  let mainBelowInfo = document.createElement("div");
  mainBelowInfo.classList.add("main__below-info");

  let mainBelowName = document.createElement("div");
  mainBelowName.classList.add("main__below-name");
  mainBelowName.textContent = objKey.name;
  let mainBelowTime = document.createElement("div");
  mainBelowTime.classList.add("main__below-time");
  mainBelowTime.textContent = objKey.time;
  mainBelowInfo.append(mainBelowName, mainBelowTime);

  let mainBelowMessage = document.createElement("div");
  mainBelowMessage.classList.add("main__below-message");
  mainBelowMessage.textContent = objKey.message;
  messageDiv.append(mainBelowInfo, mainBelowMessage);

  if (list) {
    list.append(messageDiv);
  } else if (showMessageArea) {
    showMessageArea.append(messageDiv);
  }
}

// 清除所有留言，開發用
clearAllBelow.addEventListener("click", clearBelow);
function clearBelow() {
  localStorage.clear();
  if (showMessageArea) {
    showMessageArea.innerHTML = "尚未擁有留言";
    showMessageArea.classList.add("main__message-show--no-comment");
  }
}
