// The Definition of R&B - Enhanced JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeHeader();
    initializeAnimations();
    initializeInteractions();
    initializeNewsletter();
    initializeMobileMenu();
    initializeAudioPlayers();
    initializeScrollEffects();
});

// Header functionality
function initializeHeader() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header hide/show on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Header background opacity
        if (currentScrollY > 50) {
            header.style.background = 'rgba(245, 241, 232, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(245, 241, 232, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.artist-card, .section-header, .evolution-text, .newsletter-content');
    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .artist-card.animate-element {
            transition-delay: 0.1s;
        }
        
        .artist-card:nth-child(2).animate-element {
            transition-delay: 0.2s;
        }
        
        .artist-card:nth-child(3).animate-element {
            transition-delay: 0.3s;
        }
    `;
    document.head.appendChild(style);
}

// Interactive elements
function initializeInteractions() {
    // Artist card hover effects
    const artistCards = document.querySelectorAll('.artist-card');
    artistCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Play button interactions
    const playButtons = document.querySelectorAll('.play-btn, .play-overlay');
    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            handlePlayClick(btn);
        });
    });
    
    // Streaming link interactions
    const streamingLinks = document.querySelectorAll('.stream-link, .streaming-icons i');
    streamingLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleStreamingClick(link);
        });
    });
    
    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.btn, .discover-btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.textContent.includes('Explore Artists')) {
                e.preventDefault();
                scrollToSection('artists');
            } else if (btn.textContent.includes('Discover')) {
                e.preventDefault();
                showArtistModal(btn);
            }
        });
    });
}

// Newsletter functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitBtn = newsletterForm.querySelector('.submit-btn');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNewsletterSubmit(emailInput.value, submitBtn);
    });
    
    // Email validation
    emailInput.addEventListener('input', () => {
        const isValid = validateEmail(emailInput.value);
        emailInput.style.borderColor = isValid ? 'var(--burgundy)' : '#ff4444';
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    let isMenuOpen = false;
    
    mobileToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        toggleMobileMenu(isMenuOpen);
    });
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu(false);
                isMenuOpen = false;
            }
        });
    });
}

// Audio player functionality
function initializeAudioPlayers() {
    // Create audio context for future audio features
    let audioContext;
    
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Web Audio API not supported');
    }
    
    // Store audio context for future use
    window.audioContext = audioContext;
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero graphics
    const heroGraphics = document.querySelector('.hero-graphics');
    const vinylRecord = document.querySelector('.vinyl-record');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroGraphics) {
            heroGraphics.style.transform = `translateY(${rate}px)`;
        }
        
        // Vinyl record rotation speed based on scroll
        if (vinylRecord) {
            const rotation = scrolled * 0.5;
            vinylRecord.style.transform = `rotate(${rotation}deg)`;
        }
    });
    
    // Sound wave animation intensity based on scroll
    const waves = document.querySelectorAll('.wave');
    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
        
        waves.forEach((wave, index) => {
            const intensity = Math.sin(scrollPercent * Math.PI * 2 + index) * 0.5 + 0.5;
            wave.style.transform = `translateX(-50%) scaleY(${0.5 + intensity})`;
        });
    });
}

// Helper functions
function handlePlayClick(button) {
    // Add visual feedback
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Show play notification
    showNotification('🎵 Opening music player...', 'info');
    
    // In a real implementation, this would integrate with Spotify/Apple Music APIs
    console.log('Play button clicked - would integrate with music streaming service');
}

function handleStreamingClick(link) {
    const platform = link.classList.contains('spotify') ? 'Spotify' : 
                    link.classList.contains('apple') ? 'Apple Music' : 'YouTube';
    
    showNotification(`🎵 Opening ${platform}...`, 'info');
    
    // Add click animation
    link.style.transform = 'scale(0.9)';
    setTimeout(() => {
        link.style.transform = 'scale(1)';
    }, 150);
}

function handleNewsletterSubmit(email, button) {
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        button.textContent = 'Subscribed!';
        button.style.background = 'var(--gold)';
        button.style.color = 'var(--charcoal)';
        
        showNotification('🎉 Successfully subscribed to our newsletter!', 'success');
        
        // Reset form
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = 'var(--burgundy)';
            button.style.color = 'var(--white)';
            document.querySelector('.newsletter-form').reset();
        }, 3000);
    }, 2000);
}

function toggleMobileMenu(isOpen) {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (isOpen) {
        nav.style.display = 'flex';
        nav.style.position = 'fixed';
        nav.style.top = '80px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--white)';
        nav.style.flexDirection = 'column';
        nav.style.padding = '2rem';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        nav.style.zIndex = '999';
        
        toggle.classList.add('active');
    } else {
        nav.style.display = 'none';
        toggle.classList.remove('active');
    }
}

function showArtistModal(button) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'artist-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Artist Profile</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Artist profile feature coming soon! This will include:</p>
                <ul>
                    <li>Full discography</li>
                    <li>Streaming statistics</li>
                    <li>Biography and career highlights</li>
                    <li>Latest news and updates</li>
                    <li>Social media integration</li>
                </ul>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .artist-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: var(--white);
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid var(--cream);
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--charcoal);
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = modalStyles;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 2rem;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: var(--white);
            font-weight: 600;
            z-index: 10001;
            animation: slideIn 0.3s ease, slideOut 0.3s ease 2.7s;
            animation-fill-mode: both;
        }
        
        .notification-info {
            background: var(--burgundy);
        }
        
        .notification-success {
            background: var(--gold);
            color: var(--charcoal);
        }
        
        .notification-error {
            background: #ff4444;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = notificationStyles;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}
