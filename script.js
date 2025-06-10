
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const toggleBtn = document.getElementById("togglemenu");
const navA = document.querySelector(".nav-a");
const navB= document.querySelector(".nav-b");
if (toggleBtn) {
  toggleBtn.addEventListener("click" , () => {
    navA.classList.toggle("show");
    navB.classList.toggle("show");
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    contactForm.reset();
  });
}
