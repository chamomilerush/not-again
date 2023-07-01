function showToast() {
    // Створюємо елемент тосту
    var toast = document.createElement('div');
    toast.classList.add('custom-toast');

    // Додаємо текст до тосту
    var toastText = document.createTextNode('Міхаєвич Марія Олексіївна, ВПВПС-20-3');
    toast.appendChild(toastText);

    // Додаємо кнопку закриття
    var closeBtn = document.createElement('span');
    closeBtn.classList.add('toast-close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
      // При натисканні на кнопку закриття видаляємо тост з DOM
      toast.parentNode.removeChild(toast);
    });
    toast.appendChild(closeBtn);

    // Додаємо тост до DOM
    document.body.appendChild(toast);
  }

// Отримуємо необхідні елементи з DOM
const overlayButton = document.getElementById('overlayButton');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');

// Функція для відкриття оверлея
function openOverlay() {
  overlay.style.display = 'flex';
}

// Функція для закриття оверлея
function closeOverlayFn() {
  overlay.style.display = 'none';
}

// Додаємо обробники подій для кнопки відкриття та закриття оверлея
overlayButton.addEventListener('click', openOverlay);
closeOverlay.addEventListener('click', closeOverlayFn);
