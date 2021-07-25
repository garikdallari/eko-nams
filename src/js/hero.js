const video = document.querySelector('.video');
const btn = document.querySelector('.js-btn');

btn.addEventListener('click', makeVideoMute)

function makeVideoMute(e) {
    e.preventDefault();
    if (!video.muted) {
        video.muted = true;
    }
}
