document.addEventListener("DOMContentLoaded", function () {
  fetch("shoppingCart.json")
    .then((response) => response.json())
    .then((data) => {
      const cartItems = document.getElementById("cartItems");
      let total = 0;

      data.forEach((item) => {
        const tr = document.createElement("tr");
        const subtotal = item.price * item.quantity;

        tr.innerHTML = `
          <td><img src="${item.img}" alt="${item.productName}" class="product-image" /></td>
          <td>${item.productName}</td>
          <td>NT$${item.price}</td>
          <td>
            <div class="quantity">
              <button class="decrease">–</button>
              <span class="amount">${item.quantity}</span>
              <button class="increase">+</button>
            </div>
          </td>
          <td class="subtotal">NT$${subtotal}</td>
          <td><button>🗑️</button></td>
        `;

        cartItems.appendChild(tr);
        total += subtotal;

        const decreaseButton = tr.querySelector(".decrease");
        const increaseButton = tr.querySelector(".increase");
        const amountSpan = tr.querySelector(".amount");
        const subtotalCell = tr.querySelector(".subtotal");

        decreaseButton.addEventListener("click", function () {
          let currentAmount = parseInt(amountSpan.innerText, 10);
          if (currentAmount > 1) {
            currentAmount--;
            amountSpan.innerText = currentAmount;
            subtotalCell.innerText = `NT$${currentAmount * item.price}`;
            updateTotal();
          }
        });

        increaseButton.addEventListener("click", function () {
          let currentAmount = parseInt(amountSpan.innerText, 10);
          currentAmount++;
          amountSpan.innerText = currentAmount;
          subtotalCell.innerText = `NT$${currentAmount * item.price}`;
          updateTotal();
        });
      });

      document.querySelector(".total").innerText = `商品總額 NT$${total}`;

      function updateTotal() {
        const subtotals = document.querySelectorAll(".subtotal");
        let newTotal = 0;
        subtotals.forEach((cell) => {
          newTotal += parseInt(cell.innerText.replace("NT$", ""), 10);
        });
        document.querySelector(".total").innerText = `商品總額 NT$${newTotal}`;
      }
    })
    .catch((error) => {
      console.error("Error loading the JSON file:", error);
    });
});

/*提交訂單後跳轉頁面*/

document.querySelector('.submitButton').addEventListener('click', function() {
    // 假設需要提交訂單的表單或數據在這裡處理
    // 提交表單或進行其他操作

    // 重定向到輸入訂單資訊頁面
    window.location.href = '/checkout.html'; // 替換為實際的頁面路徑
});


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
};
