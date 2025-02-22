const hamburger = document.getElementById('hamburger');
const navCont = document.querySelector('.nav-cont');

hamburger.addEventListener('click', () => {
    navCont.classList.toggle('active');
});
