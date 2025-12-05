// Splash fade + show main
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-screen');

  setTimeout(() => {
    splash.style.transition = 'opacity 1s';
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block';
      startParticles();
    }, 1000);
  }, 2500);
});

// Smooth nav scrolling
document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Particle background
function startParticles() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const particles = [];
  const num = 120;

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 2 + 1;
      this.dx = (Math.random() - 0.5) * 0.3;
      this.dy = (Math.random() - 0.5) * 0.3;
      this.o = Math.random() * 0.3 + 0.05;
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.init();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${this.o})`;
      ctx.fill();
    }
  }

  for(let i=0;i<num;i++) particles.push(new Particle());

  function animate() {
    ctx.fillStyle = '#0e0e0f';
    ctx.fillRect(0,0,w,h);
    particles.forEach(p => p.update() && p.draw());
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}
