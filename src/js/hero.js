const btnRef = document.querySelector('.js-btn');
const videoRef = document.querySelector('.video');


btnRef.addEventListener('click', () => {
    videoRef.setAttribute('muted','')
})