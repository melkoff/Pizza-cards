// PIZZA //

window.addEventListener('click', function (event) {

  // Об'являємо змінну для рахунку ПІЦ//
  let counter;

  // Провіряємо клік тільки по кнопках Плюс або мінус//
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // Знаходимо обгортку рахунку //
    const counterPizza = event.target.closest('.counter-pizza');
    // Знаходимо число рахунка //
    counter = counterPizza.querySelector('[data-counter]');
  }



  // Рахунок на ПЛЮС //
  if (event.target.dataset.action === 'plus') {

    // Збільшує рахунок на 1 //
    counter.innerText = ++counter.innerText;

  };


  // Рахунок на МІНУС //
  if (event.target.dataset.action === 'minus') {

    // Провірка рахунку не менше 1 //
    if (parseInt(counter.innerText) > 1) {
      // Зменшує рахунок на 1 //
      counter.innerText = --counter.innerText;
    }

  }
});

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
}