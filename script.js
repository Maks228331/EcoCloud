
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const isScrolled = window.scrollY > 50;

   
    if (header) header.classList.toggle('scrolled', isScrolled);
    if (nav) nav.classList.toggle('scrolled', isScrolled);
});


document.querySelectorAll('.btn[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.target;
        const el = document.getElementById(id);
        
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});