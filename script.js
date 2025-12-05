window.addEventListener('load', () => {
  const splashDuration = 2500;

  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-screen');

    // Fade out splash
    splash.style.transition = 'opacity 1s';
    splash.style.opacity = 0;

    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'flex';
      main.style.flexDirection = 'column';
    }, 1000);

  }, splashDuration);
});
