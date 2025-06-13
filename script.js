// Efeito de parallax e fade do background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const logo = document.querySelector('.game-logo');
    const backgroundImage = document.querySelector('.background-image');
    
    // Parallax da logo
    const parallax = scrolled * 0.5;
    const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
    logo.style.opacity = opacity;
    logo.style.transform = `translate(-50%, calc(-50% + ${parallax}px))`;
    
    // Fade da imagem conforme scrolla
    const fadeStart = window.innerHeight * 0.3; // Começa a esmaecer em 30% da viewport
    const fadeEnd = window.innerHeight * 1.2; // Termina em 120% da viewport
    
    if (scrolled <= fadeStart) {
        backgroundImage.style.opacity = '1';
    } else if (scrolled >= fadeEnd) {
        backgroundImage.style.opacity = '0';
    } else {
        const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
        backgroundImage.style.opacity = 1 - fadeProgress;
    }
});

// Animação de entrada das feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Desabilitar restauração automática de scroll
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Forçar ir para o topo em diferentes situações
document.addEventListener('DOMContentLoaded', function() {
    // Vai para o topo imediatamente
    window.scrollTo(0, 0);
    
    // Garante que foi para o topo após um pequeno delay
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100);
});

// Também ao sair da página
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Animação das features ao aparecer
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px'
});

// Efeito de sangue ao scrollar para a seção
const charactersSection = document.querySelector('.characters-section');
const bloodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('blood-visible');
        }
    });
}, {
    threshold: 0.3
});

if (charactersSection) {
    bloodObserver.observe(charactersSection);
}

// Animar personagens ao aparecer
const characterRows = document.querySelectorAll('.character-row');
const characterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

characterRows.forEach(row => {
    characterObserver.observe(row);
});

// Observar todas as feature rows
document.querySelectorAll('.feature-row').forEach(row => {
    featureObserver.observe(row);
});

// Animar cards dos habitantes ao aparecer
const inhabitantCards = document.querySelectorAll('.inhabitant-card');
const inhabitantObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, {
    threshold: 0.3
});

inhabitantCards.forEach(card => {
    inhabitantObserver.observe(card);
});