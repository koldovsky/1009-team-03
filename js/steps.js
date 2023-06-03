const subtitle = document.getElementById('subtitle');
const originalText = subtitle.innerHTML;

subtitle.addEventListener('mouseenter', () => {
  subtitle.classList.add('paused-animation');
  subtitle.style.animationPlayState = 'paused';
});

subtitle.addEventListener('mouseleave', () => {
  subtitle.classList.remove('paused-animation');
  subtitle.style.animationPlayState = 'running';
});

subtitle.addEventListener('click', () => {
  if (subtitle.innerHTML === originalText) {
    subtitle.innerHTML = 'Try It!';
  } else {
    subtitle.innerHTML = originalText;
  }
});


