window.onload = function () {
  //菜單展開、關閉
  window.openSidenav = function () {
    document.getElementById("sidenav").style.width = "100%";
    document.body.style.overflow = "hidden";
  };

  window.closeSidenav = function () {
    document.getElementById("sidenav").style.width = "0%";
    document.body.style.overflow = "";
  };

  //展開菜單選項
  var dropdowns = document.getElementsByClassName("tem-dropdown-btn");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
      this.classList.toggle("tem-active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  //menu toggle up/down 圖案
  window.togglePic1 = function () {
    var margin1 = document.getElementById("add");
    var img1 = document.getElementById("updown1");
    if (img1.src.includes("down.png")) {
      img1.src = "./material/icon/up.png";
      margin1.style.margin = "40px 0";
    } else {
      img1.src = "./material/icon/down.png";
      margin1.style.margin = "";
    }
  };
  window.togglePic2 = function () {
    var margin2 = document.getElementById("add");
    var img2 = document.getElementById("updown2");
    if (img2.src.includes("down.png")) {
      img2.src = "./material/icon/up.png";
      margin2.style.margin = "40px 0";
    } else {
      img2.src = "./material/icon/down.png";
      margin2.style.margin = "";
    }
  };

  var dropdown2 = document.getElementsByClassName("down-btn");
  var x;
  for (x = 0; x < dropdown2.length; x++) {
    dropdown2[x].addEventListener("click", function () {
      this.classList.toggle("active2");
      var dropdownContent2 = this.nextElementSibling;
      if (dropdownContent2.style.display === "block") {
        dropdownContent2.style.display = "none";
      } else {
        dropdownContent2.style.display = "block";
      }
    });
  }

  //menu toggle up/down 圖案
  window.togglePic3 = function () {
    // var margin1 = document.getElementById("add");
    var img3 = document.getElementById("updown3");
    if (img3.src.includes("down.png")) {
      img3.src = "./material/icon/up.png";
      // margin1.style.margin = "40px 0";
    } else {
      img3.src = "./material/icon/down.png";
      // margin1.style.margin = "";
    }
  };
  window.togglePic4 = function () {
    // var margin2 = document.getElementById("add");
    var img4 = document.getElementById("updown4");
    if (img4.src.includes("down.png")) {
      img4.src = "./material/icon/up.png";
      // margin2.style.margin = "40px 0";
    } else {
      img4.src = "./material/icon/down.png";
      // margin2.style.margin = "";
    }
  };

  const products = [
    {
      name: "日式豬排飯",
      price: 130,
      image: "./material/mealkit/katsudon.jpg",
      releaseDate: "2023-04-22",
    },
    {
      name: "南洋叻沙海鮮湯麵",
      price: 135,
      image: "./material/mealkit/laksa.jpg",
      releaseDate: "2021-04-24",
    },
    {
      name: "奶油松露百菇燉飯",
      price: 220,
      image: "./material/mealkit/CreamyRisotto.jpg",
      releaseDate: "2025-06-22",
    },
    {
      name: "泰式冬蔭功酸辣海鮮湯",
      price: 170,
      image: "./material/mealkit/soup.png",
      releaseDate: "2021-04-02",
    },
    {
      name: "印度雞肉香飯",
      price: 140,
      image: "./material/mealkit/ChickenBiryani.jpg",
      releaseDate: "2023-02-22",
    },
    {
      name: "新加坡海南雞飯",
      price: 150,
      image: "./material/mealkit/HainaneseChickenRice.jpg",
      releaseDate: "2021-07-22",
    },
    {
      name: "韓式五色石鍋拌飯",
      price: 140,
      image: "./material/mealkit/KoreanBibimbap.png",
      releaseDate: "2021-11-22",
    },
    {
      name: "馬來西亞椰漿飯",
      price: 190,
      image: "./material/mealkit/NasiLemak.jpg",
      releaseDate: "2021-04-01",
    },
    {
      name: "馬來西亞椰漿飯",
      price: 150,
      image: "./material/mealkit/thaiPork.jpg",
      releaseDate: "2021-04-01",
    },
    {
      name: "越南牛肉河粉",
      price: 130,
      image: "./material/mealkit/BeefPho.png",
      releaseDate: "2021-04-01",
    },
    {
      name: "希臘酥炸櫛瓜薯泥球",
      price: 160,
      image: "./material/mealkit/PotatoBalls.jpg",
      releaseDate: "2021-04-01",
    },
    {
      name: "西班牙海鮮燉飯",
      price: 220,
      image: "./material/mealkit/SeafoodPaella.jpg",
      releaseDate: "2021-04-01",
    },
  ];

  window.displayProducts = function (products) {
    const container = document.getElementById("productContainer");
    container.innerHTML = ""; // Clear existing products
    products.forEach((product) => {
      container.innerHTML += `
                <div class="product">
                    <img class="product-image" src="${product.image}" alt="${product.name}">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$NT${product.price}</p>
                    <div class="home-product-btn">
                      <button class="add-to-favorite"><i class="fa-solid fa-heart"></i></button>
                      <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;加入購物車</button>
                    </div>
                </div>
            `;
    });

    // 加入購物車按鈕事件處理
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", function () {
        const productName =
          this.closest(".product").querySelector("h3").textContent;
        alert(`已將 ${productName} 加入購物車！`);
      });
    });

    // 收藏商品按鈕事件處理
    document.querySelectorAll(".add-to-favorite").forEach((button) => {
      button.addEventListener("click", function () {
        const productName =
          this.closest(".product").querySelector("h3").textContent;

        // 切換收藏狀態
        if (this.classList.contains("favorited")) {
          this.classList.remove("favorited");

          // 先更改顏色，然後延遲彈跳框
          setTimeout(() => {
            alert(`已將 ${productName} 取消收藏！`);
          }, 500); // 300 毫秒延遲
        } else {
          this.classList.add("favorited");

          // 先更改顏色，然後延遲彈跳框
          setTimeout(() => {
            alert(`已將 ${productName} 加入收藏！`);
          }, 500); // 300 毫秒延遲
        }
      });
    });
  };
  displayProducts(products);
};
