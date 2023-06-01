const parentElement = document.querySelector('.steps__subtitle');

parentElement.addEventListener('mouseenter', function() {
    parentElement.style.animationPlayState = 'paused';
});

parentElement.addEventListener('mouseleave', function() {
    parentElement.style.animationPlayState = 'running';
});
