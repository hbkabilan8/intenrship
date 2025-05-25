 
         
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

         
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });

         
        const searchButton = document.querySelector('.search-bar button');
        const searchInput = document.querySelector('.search-bar input');
        
        searchButton.addEventListener('click', () => {
            if(searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                 
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter' && searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
            }
        });

         
        const listingCards = document.querySelectorAll('.listing-card');
        
        listingCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const img = card.querySelector('.listing-img');
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('.listing-img');
                img.style.transform = 'scale(1)';
            });
        });
         
const authModal = document.querySelector('.auth-modal');
const openAuthModal = document.querySelectorAll('.cta-button');
const closeAuthModal = document.querySelector('.close-modal');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const switchToRegister = document.querySelector('.switch-to-register');
const switchToLogin = document.querySelector('.switch-to-login');

 
openAuthModal.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        authModal.classList.add('active');
    });
});

 
closeAuthModal.addEventListener('click', () => {
    authModal.classList.remove('active');
});

 
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.classList.remove('active');
    }
});

 
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
         
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
         
        tab.classList.add('active');
        const formId = tab.getAttribute('data-tab');
        document.getElementById(`${formId}Form`).classList.add('active');
    });
});

 
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(f => f.classList.remove('active'));
    
    document.querySelector('.auth-tab[data-tab="register"]').classList.add('active');
    document.getElementById('registerForm').classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(f => f.classList.remove('active'));
    
    document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
    document.getElementById('loginForm').classList.add('active');
});

 
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
     
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    
    console.log('Login attempt with:', { email, password });
    alert('Login successful! (This is a demo)');
    authModal.classList.remove('active');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirm').value;
    
     
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password should be at least 6 characters');
        return;
    }
    
    
    console.log('Registration with:', { name, email, password });
    alert('Registration successful! (This is a demo)');
    
     
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(f => f.classList.remove('active'));
    document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
    document.getElementById('loginForm').classList.add('active');
});
        
