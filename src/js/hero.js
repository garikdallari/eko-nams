const video = document.querySelector('.video');
const btn = document.querySelector('.js-btn');

btn.addEventListener('click', makeVideoMute)

function makeVideoMute() {
    if (!video.muted) {
        video.muted = true;
    }
}
