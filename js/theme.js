const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('bookshop-theme') === 'light')
  document.body.classList.add('light');
function updateThemeIcon() {
  themeToggle.textContent = document.body.classList.contains('light')
    ? '☀'
    : '☾';
}
updateThemeIcon();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(
    'bookshop-theme',
    document.body.classList.contains('light') ? 'light' : 'dark',
  );
  updateThemeIcon();
});

