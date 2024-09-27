// 全局变量
	var slideIndex = 1;
	var autoPlayInterval;

	// 自動撥放
	function startAutoPlay() {
	  autoPlayInterval = setInterval(function () {
	    slideIndex++;
	    showSlides(slideIndex);
	  }, 5000); // 每5秒自動切換
	}

	// 手動切換下一張
	function plusSlides(n) {
	  clearInterval(autoPlayInterval); // 停止自動撥放
	  slideIndex += n;
	  showSlides(slideIndex);
	  startAutoPlay(); // 重新啟動自動播放
	}

	document.getElementById("slidesNext").addEventListener("click", () => {
	     plusSlides(+1);
		 console.log("Next button clicked");
	   });

	document.getElementById("slidesPrev").addEventListener("click", () => {
	     plusSlides(-1);
		 console.log("Next button clicked");
	   });

	// 目前圖片的顯示
	function currentSlide(n) {
	  clearInterval(autoPlayInterval); // 停止自動撥放
	  slideIndex = n;
	  showSlides(slideIndex);
	  startAutoPlay(); // 重新啟動自動播放
	}

	// 顯示輪播圖
	function showSlides(n) {
	  let slides = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("dot");

	  if (n > slides.length) {
	    slideIndex = 1;
	  }
	  if (n < 1) {
	    slideIndex = slides.length;
	  }

	  // 隐藏所有幻灯片
	  for (let i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }

	  // 移除所有圆点的活动状态
	  for (let i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" dotActive", "");
	  }

	  // 显示当前幻灯片，并激活当前的圆点
	  slides[slideIndex - 1].style.display = "block";
	  dots[slideIndex - 1].className += " dotActive";
	}

	// Slideshow
	  showSlides(slideIndex);
	  startAutoPlay();
	  
window.onload = function () {

  //精選調理包專區
  const products = [
    {
      id: 1,
      name: "日式豬排飯",
      price: 130,
      image: "./material/mealkit/katsudon.jpg",
    },
    {
      id: 2,
      name: "南洋叻沙海鮮湯麵",
      price: 135,
      image: "./material/mealkit/laksa.jpg",
    },
    {
      id: 3,
      name: "奶油松露百菇燉飯",
      price: 220,
      image: "./material/mealkit/CreamyRisotto.jpg",
    },
    {
      id: 4,
      name: "泰式冬蔭功酸辣海鮮湯",
      price: 170,
      image: "./material/mealkit/soup.png",
    },
    {
      id: 5,
      name: "印度雞肉香飯",
      price: 140,
      image: "./material/mealkit/ChickenBiryani.jpg",
    },
    {
      id: 6,
      name: "新加坡海南雞飯",
      price: 150,
      image: "./material/mealkit/HainaneseChickenRice.jpg",
    },
    {
      id: 7,
      name: "韓式五色石鍋拌飯",
      price: 140,
      image: "./material/mealkit/KoreanBibimbap.png",
    },
    {
      id: 8,
      name: "馬來西亞椰漿飯",
      price: 190,
      image: "./material/mealkit/NasiLemak.jpg",
    },
    {
      id: 9,
      name: "馬來西亞椰漿飯",
      price: 150,
      image: "./material/mealkit/thaiPork.jpg",
    },
    {
      id: 10,
      name: "越南牛肉河粉",
      price: 130,
      image: "./material/mealkit/BeefPho.png",
    },
    {
      id: 11,
      name: "希臘酥炸櫛瓜薯泥球",
      price: 160,
      image: "./material/mealkit/PotatoBalls.jpg",
    },
    {
      id: 12,
      name: "西班牙海鮮燉飯",
      price: 220,
      image: "./material/mealkit/SeafoodPaella.jpg",
    },
  ];

  let currentIndex = 0;

  function renderProducts() {
    const container = document.getElementById("productContainer1");
    container.innerHTML = "";
    for (let i = -1; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      const product = products[index];
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$NT${product.price}</p>
                  <div class="home-product-btn">
                    <button class="add-to-favorite"><i class="fa-solid fa-heart"></i></button>
                    <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;加入購物車</button>
                  </div>
            `;
      container.appendChild(productElement);
    }

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
  }

  //上下一個商品
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderProducts();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length;
    renderProducts();
  });

  renderProducts();

  //精選生鮮食材包專區
  const meal_kit_products = [
    {
      id: 1,
      name: "日式豬排飯",
      price: 130,
      image: "./material/mealkit/katsudon.jpg",
    },
    {
      id: 2,
      name: "南洋叻沙海鮮湯麵",
      price: 135,
      image: "./material/mealkit/laksa.jpg",
    },
    {
      id: 3,
      name: "奶油松露百菇燉飯",
      price: 220,
      image: "./material/mealkit/CreamyRisotto.jpg",
    },
    {
      id: 4,
      name: "泰式冬蔭功酸辣海鮮湯",
      price: 170,
      image: "./material/mealkit/soup.png",
    },
    {
      id: 5,
      name: "印度雞肉香飯",
      price: 140,
      image: "./material/mealkit/ChickenBiryani.jpg",
    },
    {
      id: 6,
      name: "新加坡海南雞飯",
      price: 150,
      image: "./material/mealkit/HainaneseChickenRice.jpg",
    },
    {
      id: 7,
      name: "韓式五色石鍋拌飯",
      price: 140,
      image: "./material/mealkit/KoreanBibimbap.png",
    },
    {
      id: 8,
      name: "馬來西亞椰漿飯",
      price: 190,
      image: "./material/mealkit/NasiLemak.jpg",
    },
    {
      id: 9,
      name: "馬來西亞椰漿飯",
      price: 150,
      image: "./material/mealkit/thaiPork.jpg",
    },
    {
      id: 10,
      name: "越南牛肉河粉",
      price: 130,
      image: "./material/mealkit/BeefPho.png",
    },
    {
      id: 11,
      name: "希臘酥炸櫛瓜薯泥球",
      price: 160,
      image: "./material/mealkit/PotatoBalls.jpg",
    },
    {
      id: 12,
      name: "西班牙海鮮燉飯",
      price: 220,
      image: "./material/mealkit/SeafoodPaella.jpg",
    },
  ];

  let currentIndex2 = 0;

  function renderProducts2() {
    const container2 = document.getElementById("productContainer2");
    container2.innerHTML = "";
    for (let i = -1; i <= 2; i++) {
      const index =
        (currentIndex2 + i + meal_kit_products.length) %
        meal_kit_products.length;
      const product2 = meal_kit_products[index];
      const productElement2 = document.createElement("div");
      productElement2.className = "product";
      productElement2.innerHTML = `
                <img class="product-image" src="${product2.image}" alt="${product2.name}">
                <h3 class="product-name">${product2.name}</h3>
                <p class="product-price">$NT${product2.price}</p>
                  <div class="home-product-btn">
                    <button class="add-to-favorite"><i class="fa-solid fa-heart"></i></button>
                    <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;加入購物車</button>
                  </div>  
            `;
      container2.appendChild(productElement2);
    }

    // 加入購物車按鈕事件處理
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", function () {
        const productName2 =
          this.closest(".product").querySelector("h3").textContent;
        alert(`已將 ${productName2} 加入購物車！`);
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
  }

  document.getElementById("prevBtn2").addEventListener("click", () => {
    currentIndex2 =
      (currentIndex2 - 1 + meal_kit_products.length) % meal_kit_products.length;
    renderProducts2();
  });

  document.getElementById("nextBtn2").addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % meal_kit_products.length;
    renderProducts2();
  });

  renderProducts2();
};