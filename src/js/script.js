// // PIZZA //

// window.addEventListener('click', function (event) {

//   // Об'являємо змінну для рахунку ПІЦ//
//   let counter;

//   // Провіряємо клік тільки по кнопках Плюс або мінус//
//   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
//     // Знаходимо обгортку рахунку //
//     const counterPizza = event.target.closest('.counter-pizza');
//     // Знаходимо число рахунка //
//     counter = counterPizza.querySelector('[data-counter]');
//   }



//   // Рахунок на ПЛЮС //
//   if (event.target.dataset.action === 'plus') {

//     // Збільшує рахунок на 1 //
//     counter.innerText = ++counter.innerText;

//   };


//   // Рахунок на МІНУС //
//   if (event.target.dataset.action === 'minus') {

//     // Провірка рахунку не менше 1 //
//     if (parseInt(counter.innerText) > 1) {
//       // Зменшує рахунок на 1 //
//       counter.innerText = --counter.innerText;
//     }

//   }
// });

// /**basket */
// let basketModal = document.getElementById("basket-modal");
// let btnBasket = document.getElementById("shop-btn");
// let closeBasket = document.getElementsByClassName("basket-close")[0];

// btnBasket.onclick = function () {
//   basketModal.style.display = "block";
// }

// closeBasket.onclick = function () {
//   basketModal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == basketModal) {
//     basketModal.style.display = "none";
//   }
// };

// let count = 0;
// let sum = 0;
// let cart = {};

// if (localStorage.getItem("count")) {
//     count = parseInt(localStorage.getItem("count"));
// }

// if (localStorage.getItem("sum")) {
//     sum = parseInt(localStorage.getItem("sum"));
// }

// if (localStorage.getItem("cart")) {
//     cart = JSON.parse(localStorage.getItem("cart"));
// }

// updateCart();


// let btns = document.querySelectorAll(".items__wrapper button");

// for (let i = 0; i < btns.length; i++) {
//     let btn = btns[i];
//     btn.addEventListener("click", add);

//     id = btn.dataset.id;
//     if (cart.indexOf(id) >= 0) {
//         btn.className = "added";
//         btn.textContent = "Remove";
//     }
// }

// function add(event) {
//     let price = Number(event.target.dataset.price);
//     let title = event.target.dataset.title;
//     let id = event.target.dataset.id;

// if (id in cart) {
//     cart[id].qty++;
// } else {
//     let cartItem = {
//         title: title,
//         price: price,
//         qty: 1
//     };
//     cart[id] = cartItem
// }

//     count++;
//     sum += price;

//     console.log(cart);

//     // let index = cart.indexOf(event.target.dataset.id);
//     // if (index >= 0) {
//     //     cart.splice(index, 1);
//     //     count--;
//     //     sum -= price;
//     //     event.target.className = "";
//     //     event.target.textContent = "Add to cart";
//     // } else {
//     //     cart.push(event.target.dataset.id);
//     //     count++;
//     //     sum += price;
//     //     event.target.className = "added";
//     //     event.target.textContent = "Remove";
//     // }
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCart();
// }

// function updateCart() {
//     document.getElementById("sum").textContent = sum;
//     document.getElementById("count").textContent = count;
//     localStorage.setItem("sum", sum);
//     localStorage.setItem("count", count);
// }


// let cartCart = {};
// if (localStorage.getItem("cart")) {
//   cartCart = JSON.parse(localStorage.getItem("cart"));
// }




/////////////////////////////////////////


let swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  // speed: 1000,
  // autoplay: {
  //   delay: 2500,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 25,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 180,
  //       depth: 100,
  //       modifier: 5,
  //       slideShadows: false,
  //     },
  //   },
  //   // 500: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 50,
  //   //   coverflowEffect: {
  //   //     rotate: 0,
  //   //     stretch: 80,
  //   //     depth: 200,
  //   //     modifier: 1,
  //   //     slideShadows: true,
  //   //   },
  //   // },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 130,
  //       depth: 150,
  //       modifier: 4,
  //       slideShadows: true,
  //     },
  //   },
  //   800: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 150,
  //       depth: 100,
  //       modifier: 3,
  //       slideShadows: true,
  //     },
  //   },
  //   1000: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1200: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  //   1300: {
  //     slidesPerView: 3,
  //     spaceBetween: 60,
  //   },
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});