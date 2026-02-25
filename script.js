// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href'))
.scrollIntoView({ behavior: 'smooth' });
});
});

// Navbar efeito no scroll
window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');

if(window.scrollY > 50){
navbar.style.background = "rgba(5,5,5,0.98)";
navbar.style.boxShadow = "0 5px 20px rgba(0,255,136,0.2)";
}else{
navbar.style.background = "rgba(10,10,10,0.95)";
navbar.style.boxShadow = "none";
}
});