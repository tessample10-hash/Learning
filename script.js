// ===== Scroll Progress =====
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// ===== Smooth Scroll =====
const scrollFactor = 0.6;
let currentScroll = window.scrollY;
let targetScroll = window.scrollY;

window.addEventListener('scroll', () => {
  targetScroll = window.scrollY; // update target
});

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * scrollFactor;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

// ===== Custom Cursor =====
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Scale cursor on link hover
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.25)';
  });
  link.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});
