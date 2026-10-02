// ============================
// TEMA CLARO / ESCURO
// ============================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = htmlElement.getAttribute('data-theme') === 'light' || htmlElement.classList.contains('modo-claro');

        if (isLight) {
            htmlElement.setAttribute('data-theme', 'dark');
            htmlElement.classList.remove('modo-claro');
            htmlElement.classList.add('modo-escuro');
            localStorage.setItem('pontual-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            htmlElement.classList.remove('modo-escuro');
            htmlElement.classList.add('modo-claro');
            localStorage.setItem('pontual-theme', 'light');
        }
    });
}

// ============================
// BOTÃO VOLTAR AO TOPO
// ============================

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// ============================
// BOTÕES
// ============================

const botoes = document.querySelectorAll(
    '.primary-button, .header-button'
);

botoes.forEach(botao => {

    botao.addEventListener('click', () => {

        alert('A plataforma Pontual será conectada aqui.');

    });

});


// ============================
// ANIMAÇÃO DE ROLAGEM
// ============================

const animElements = document.querySelectorAll(
    '.floating-card, .process-item, .solution-left, .solution-right, .big-statement h2, .section-top'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // observer.unobserve(entry.target); // Opcional: animar apenas 1 vez
            }
        });
    },
    { threshold: 0.15 }
);

animElements.forEach(el => {
    el.classList.add('anim-hidden');
    observer.observe(el);
});


// ============================
// MOVIMENTO SUTIL (PARALLAX)
// ============================
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15; 
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    
    const heroPanel = document.querySelector('.hero-panel');
    if (heroPanel) {
        heroPanel.style.transform = `rotate(3deg) translate(${x}px, ${y}px)`;
    }

    const cardOne = document.querySelector('.card-one');
    if (cardOne) {
        cardOne.style.transform = `rotate(-4deg) translate(${x * -1.5}px, ${y * -1.5}px)`;
    }

    const cardTwo = document.querySelector('.card-two');
    if (cardTwo) {
        cardTwo.style.transform = `rotate(5deg) translate(${x * 2}px, ${y * 2}px)`;
    }
});