const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

showImage(current);

// Passar as fotos automaticamente a cada 4 segundos
setInterval(nextImage, 6000);

window.addEventListener('load', () => {
  const musica = document.getElementById('musica');
  musica.currentTime = 48; 
  musica.volume = 0.3 ;
  musica.play();
});

