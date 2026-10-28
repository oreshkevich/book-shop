const video = document.getElementById('bookVideo');
const playlist = ['video1', 'video2', 'video3', 'video4'];
let number = 0;
function switchVideo(delta) {
  number = (number + delta + playlist.length) % playlist.length;
  video.src = `video/${playlist[number]}.mp4`;
  video.load();
  document.getElementById('videoLabel').textContent =
    `Обзор книги · Видео ${number + 1} из ${playlist.length}`;
  video.play().catch(() => {});
}
document.getElementById('videoPlay').onclick = () =>
  video.play().catch(() => {});
document.getElementById('videoPause').onclick = () => video.pause();
document.getElementById('videoMute').onclick = () => {
  video.muted = true;
};
document.getElementById('videoUnmute').onclick = () => {
  video.muted = false;
};
document.getElementById('videoNext').onclick = () => switchVideo(1);
document.getElementById('videoPrev').onclick = () => switchVideo(-1);

