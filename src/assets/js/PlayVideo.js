const playTrigger = document.querySelectorAll('.js-play-video');
playTrigger.forEach((elem) => {
  elem.addEventListener('click', () => {
    const video = elem.querySelector('video');
    const playBtn = elem.querySelector('.play');
    if (video.paused) {
      video.play();
      playBtn.style.display = 'none';
    } else {
      video.pause();
      playBtn.style.display = '';
    }
  });
});
