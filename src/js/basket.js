let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let closeBtn = document.getElementsByClassName("closeModal")[0];
let hide = document.getElementById("hideModal");
let bodyClose = document.querySelector('html');
// const modal = document.querySelector('html');

hide.addEventListener('click', bodyScroll);

function bodyScroll() {
   modal.classList.toggle("menu__open");
   bodyClose.classList.toggle("menu__close");
}




btn.onclick = function () {
   modal.style.display = "block";
   btn.style.display = "none";
}

closeBtn.onclick = function () {
   modal.style.display = "none";
   btn.style.display = "block";
}

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
      btn.style.display = "block";
   }
}



// window.addEventListener('click', function (event) {

//    // Провірка на клік добавити в корзину //
//    if (event.target.hasAttribute('data-cart')) {
//       console.log('click on busket')
//    }

// });