window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
        header.style.backgroundColor = '#333';
        header.style.color = '#fff';
        header.style.padding = '20px 0';
    } else {
        navbar.style.backgroundColor = 'transparent';
        header.style.backgroundColor = 'transparent';
        header.style.color = '#000'; 
        header.style.padding = '10px 0'; 
    }
});
