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
      } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

         event.target.closest('.cart-wrapper').remove();

      }
   }
});