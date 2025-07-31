let mainVoteChooses = document.querySelector(".main__vote-chooses");
let mainVoteArea = mainVoteChooses.querySelector(".main__vote-area");
let mainVoteSubmit = mainVoteChooses.querySelector(".main__vote-submit");
let ctx = document.querySelector("#vote-chart-canvas");
let chart = null;
mainVoteArea.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT" && e.target.type === "radio") {
    mainVoteSubmit.disabled = false;
  }
});
mainVoteSubmit.addEventListener("click", function (e) {
  let mainVoteRadioSelect = mainVoteChooses.querySelector(
    "input[name='vote']:checked"
  );
  let value = mainVoteRadioSelect.value;
  if (!value) {
    return;
  }

  mainVoteArea.classList.add("main__vote-area--get-result");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["飼料", "鮮食", "飯菜", "罐頭", "其他"],
      datasets: [
        {
          label: "人數",
          data: [15, 6, 4, 20, 7],
          backgroundColor: [
            "#A8C66C", // 飼料
            "#FFD966", // 鮮食
            "#E69138", // 飯菜
            "#C27BA0", // 罐頭
            "#6FA8DC", // 其他
          ],
          borderColor: ["#7C9C3C", "#C9A62C", "#B35413", "#A64D79", "#3D85C6"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 24,
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: window.innerWidth > 768 ? 20 : 16,
            },
          },
        },

        title: {
          display: true,
          text: "毛孩飲食習慣調查",
          font: {
            size: window.innerWidth > 768 ? 28 : 20,
          },
        },
      },
      animation: {
        //進場方式
        duration: 1500,
        easing: "easeInOutCubic",
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: window.innerWidth > 768 ? 20 : 16,
            },
          },
        },

        y: {
          beginAtZero: true, //從0開始
        },
      },
    },
  });
});

window.addEventListener("resize", () => {
  const newFontSize = window.innerWidth > 768 ? 20 : 16;
  const newLabelSize = window.innerWidth > 768 ? 20 : 16;
  const newTitleSize = window.innerWidth > 768 ? 28 : 20;
  if (chart) {
    chart.options.scales.x.ticks.font.size = newFontSize;
    chart.options.plugins.legend.labels.font.size = newLabelSize;
    chart.options.plugins.title.font.size = newTitleSize;
    chart.update();
  }
});
