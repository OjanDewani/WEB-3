// HERO SLIDER
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

setInterval(() => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);

function showDetail(product){
  // Mengubah "Fire Alarm System" menjadi "fire-alarm-system"
  // .toLowerCase() mengubah jadi huruf kecil, .replace() mengubah spasi menjadi strip (-)
  const slug = product.toLowerCase().trim().replace(/\s+/g, '-');
  
  // Mengarahkan halaman ke detail.html dengan parameter produk yang sesuai
  window.location.href = `detail.html?produk=${slug}`;
}

// --- Batas kode ScrollReveal kamu (tetap biarkan seperti semula) ---
ScrollReveal().reveal('.hero-content',{
  delay:200,
  distance:'50px',
  origin:'bottom',
  duration:1000
});

ScrollReveal().reveal('.product-card',{
  interval:200,
  distance:'40px',
  origin:'bottom',
  duration:1000
});

ScrollReveal().reveal('.about-content',{
  delay:300,
  origin:'left',
  distance:'50px',
  duration:1200
});

ScrollReveal().reveal('.client',{
  interval:200,
  scale:0.8,
  duration:1000
});

ScrollReveal().reveal('.artikel-card',{
  interval:200,
  origin:'bottom',
  distance:'40px',
  duration:1000
});

// Fungsi ini bisa dihapus jika tidak digunakan lagi
function details(){
  alert("Menampilkan detail produk");
}

ScrollReveal().reveal('.about-content', {
  delay: 200,
  distance: '50px',
  origin: 'left',
  duration: 1000
});

ScrollReveal().reveal('.about-image', {
  delay: 400,
  distance: '50px',
  origin: 'right',
  duration: 1000
});

ScrollReveal().reveal('.vision-card', {
  interval: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 1000
});

const waForm = document.getElementById("waForm");

if (waForm) {
    waForm.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const telepon = document.getElementById("telepon").value;
        const pesan = document.getElementById("pesan").value;

        const nomorWA = "6281319131032";

        const text =
`Halo STARVVO,

Nama : ${nama}
Email : ${email}
Telepon : ${telepon}

Kebutuhan:
${pesan}`;

        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    });
}

const galleryItems = document.querySelectorAll('.portfolio-image');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{
  threshold:0.15
});

galleryItems.forEach(item=>{
  observer.observe(item);
});


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

if (hamburger && nav && overlay){

    hamburger.onclick = () => {

        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");

    };

    overlay.onclick = () => {

        hamburger.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");

    };

}