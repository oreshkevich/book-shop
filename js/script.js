let cartCount = 0;
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
document.getElementById('buyButton').addEventListener('click', () => {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  showToast('«Тёмная Башня» добавлена в корзину!');
});
document
  .getElementById('cartButton')
  .addEventListener('click', () =>
    showToast(`Товаров в корзине: ${cartCount}`),
  );
document
  .querySelectorAll('.card-btn')
  .forEach((btn) =>
    btn.addEventListener('click', () =>
      showToast(`Книга «${btn.dataset.title}» — скоро в продаже!`),
    ),
  );

