function updateClock() {
  const el = document.getElementById('clock');
  if (el)
    el.textContent = new Date().toLocaleTimeString('ru-RU', {hour12: false});
}
updateClock();
setInterval(updateClock, 1000);

