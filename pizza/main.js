import { data } from "./data.js";
const search = document.querySelector("#search");
const totalpizza = document.querySelector("#StoragePizza");
const pizzacards = document.querySelector("#PizzaCards");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const Total = document.querySelector("#ShowCard");
const Card = document.querySelector("#Card");
const over = document.querySelector("#overlay");
const empty = document.querySelector("#Empty");
const buybutton = document.querySelector("#BuyButton");
const quickcard = document.querySelector("#QuickCard");
const TPrice = document.querySelector("#TotalPrice");
const Price = document.querySelector(".Total");
let start = 0;
let end = 12;
let cart = {};
function renderData(dataArr) {
  pizzacards.innerHTML = "";
  totalpizza.innerText = dataArr.length;
  dataArr.slice(start, end).forEach((item) => {
    pizzacards.innerHTML += `
      <div class="card shadow-sm p-[20px]">
        <button class="w-[100%] mb-[20px] focus:cursor-pointer">
          <img
            src="${item.img}"
            alt
            class="object-cover w-[100%]"
            onerror="this.src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'">
        </button>
        <button class="hover:cursor-pointer AddToCard" 
                data-id="${item.id}"
                data-name="${item.name}"
                data-price="${item.price}"
                data-img="${item.img}">
          <i class="fa-solid fa-bag-shopping text-[20px]"></i>
        </button>
        <p class="text-black font-bold text-[23px]">${item.name}</p>
        <p class="text-orange-500 text-[14px]">Price: ${item.price} AZN</p>
      </div>
    `;
  });
  const AddCard = document.querySelectorAll(".AddToCard");
  AddCard.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const img = btn.dataset.img;
      empty.classList.add("hidden");
      buybutton.classList.remove("hidden");
      TPrice.classList.remove("hidden");
      if (cart[id]) {
        cart[id].count += 1;
      } else {
        cart[id] = {
          name,
          price,
          img,
          count: 1,
        };
      }
      updateQuickCard();
    });
  });
}
function updateQuickCard() {
  quickcard.innerHTML = "";
  let total = 0;
  Object.keys(cart).forEach((id) => {
    const item = cart[id];
    total += item.price * item.count;
    quickcard.innerHTML += `
      <div class="grid grid-cols-3 justify-between items-center gap-2 mb-4" data-id="${id}">
        <img src="${item.img}" class="w-[50px] h-[50px] object-cover rounded" 
        onerror="this.src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'">
        <div>
          <p class="font-bold">${item.name}</p>
          <p class="text-sm">${item.price * item.count} AZN</p>
        </div>
        <div class="flex items-center gap-1">
          <button class="bg-blue-600 text-white px-2 subs">-</button>
          <span>${item.count}</span>
          <button class="bg-blue-600 text-white px-2 plus">+</button>
        </div>
      </div>
    `;
  });
  Price.innerText = `${total} AZN`;
}
quickcard.addEventListener("click", (e) => {
  const parent = e.target.closest("div[data-id]");
  if (!parent) return;
  const id = parent.dataset.id;
  if (e.target.classList.contains("plus")) {
    cart[id].count += 1;
    updateQuickCard();
  }
  if (e.target.classList.contains("subs")) {
    cart[id].count -= 1;
    if (cart[id].count <= 0) {
      delete cart[id];
    }
    updateQuickCard();
  }
  if (Object.keys(cart).length === 0) {
    empty.classList.remove("hidden");
    buybutton.classList.add("hidden");
    TPrice.classList.add("hidden");
  }
});
search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  const filtered = data.filter((item) => item.name.toLowerCase().includes(val));
  renderData(filtered);
});
renderData(data);
button1.addEventListener("click", () => {
  start = 0;
  end = 12;
  renderData(data);
});
button2.addEventListener("click", () => {
  start = 12;
  end = 24;
  renderData(data);
});
button3.addEventListener("click", () => {
  start = 24;
  end = 36;
  renderData(data);
});
button4.addEventListener("click", () => {
  start = 36;
  end = 48;
  renderData(data);
});
button5.addEventListener("click", () => {
  start = 48;
  end = 54;
  renderData(data);
});
Total.addEventListener("click", () => {
  Card.classList.toggle("hidden");
  over.classList.toggle("hidden");
});
over.addEventListener("click", function () {
  Card.classList.add("hidden");
  over.classList.add("hidden");
});
