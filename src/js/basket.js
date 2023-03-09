/**basket */
let basketModal = document.getElementById("basket-modal");
let btnBasket = document.getElementById("shop-btn");
let closeBasket = document.getElementsByClassName("basket-close")[0];

btnBasket.onclick = function () {
   basketModal.style.display = "block";
}

closeBasket.onclick = function () {
   basketModal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == basketModal) {
      basketModal.style.display = "none";
   }
};



const cartWrapper = document.querySelector('.modal__cards');

// Додаємо товари в корзину //
window.addEventListener('click', function (event) {

   // Провірка на клік добавити в корзину //
   if (event.target.hasAttribute('data-cart')) {

      const card = event.target.closest('.pizza__body');


      const productInfo = {
         id: card.dataset.id,
         imgSrc: card.querySelector('.pizza__image img').getAttribute('src'),
         title: card.querySelector('.pizza__title h3').innerText,
         price: card.querySelector('.price').innerText,
         counter: card.querySelector('[data-counter]').innerText,
      };


      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

      if (itemInCart) {
         const counterElement = itemInCart.querySelector('[data-counter]');
         counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {



         // Збираємо дані в корзину //
         const cartItemHTML = `<div class="pizza__body" data-id="${productInfo.id}">
      <div class="pizza__card">
          <div class="pizza__title">
              <h3>
                  ${productInfo.title}
              </h3>
          </div>
          <div class="pizza__image">
              <img src="${productInfo.imgSrc}" alt="pizza">
          </div>
      </div>
      <div class="items__wrapper">
          <div class="price">
              <p>${productInfo.price}<span></span></p>
          </div>
          <div class="items counter-pizza">
              <div class="items__control" data-action="minus">-</div>
              <div class="items__current" data-counter="">${productInfo.counter}</div>
              <div class="items__control" data-action="plus">+</div>
          </div>
      </div>
  </div>`;


         // Відображаємо товар в корзині //
         cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
      }

      card.querySelector('[data-counter]').innerText = '1';

   }

});