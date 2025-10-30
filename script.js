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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 1)';
        navbar.style.borderBottom = '2px solid #FFD700';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.borderBottom = '1px solid #333333';
    }
});

// Intersection Observer for animations
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

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Enhanced hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tags interactive effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.4)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.boxShadow = 'none';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Experience section toggle functionality
const toggleBtns = document.querySelectorAll('.toggle-btn');
const contentArea = document.getElementById('content-area');

const workContent = `
    <div class="experience-item">
        <div class="experience-header">
            <h3>Media Marketing Manager</h3>
            <span class="date">February 2025 – Present</span>
        </div>
        <p class="company">Dosa Anna Cafe, Borivali West, Mumbai</p>
        <ul class="experience-list">
            <li>Managed all online and offline marketing activities to grow the brand</li>
            <li>Used AI tools for SEO, social media planning, and Instagram reach</li>
            <li>Handled Google Business account and improved search results</li>
        </ul>
    </div>
`;

const educationContent = `
    <div class="experience-item">
        <div class="experience-header">
            <h3>Bachelor's in Computer Science</h3>
            <span class="date">April 2023 – Present</span>
        </div>
        <p class="company">Nirmala Memorial Foundation, College of Arts and Science</p>
    </div>
    <div class="experience-item">
        <div class="experience-header">
            <h3>Full Stack Development Certification</h3>
            <span class="date">August 2024 – July 2025</span>
        </div>
        <p class="company">Apna College – Online Course Platform</p>
        <ul class="experience-list">
            <li>Frontend: HTML, CSS, JavaScript, React</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Built practical projects and learned DSA using C++</li>
        </ul>
    </div>
    <div class="experience-item">
        <div class="experience-header">
            <h3>Hardware & Networking Certification</h3>
            <span class="date">2024 (6 Months)</span>
        </div>
        <p class="company">Offline Coaching Program</p>
        <ul class="experience-list">
            <li>Computer hardware setup and system assembly</li>
            <li>Networking basics and router configuration</li>
        </ul>
    </div>
`;

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // Don't switch if already active
        if (btn.classList.contains('active')) return;
        
        // Remove active class from all buttons
        toggleBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Add blur effect
        contentArea.classList.add('switching');
        
        // Change content after blur animation
        setTimeout(() => {
            if (tab === 'work') {
                contentArea.innerHTML = workContent;
            } else {
                contentArea.innerHTML = educationContent;
            }
            
            // Remove blur effect
            contentArea.classList.remove('switching');
        }, 250);
    });
});

// Profile picture click to refresh
document.getElementById('navPfp').addEventListener('click', () => {
    location.reload();
});

// Modal functionality
const messageBtn = document.getElementById('messageBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const contactForm = document.getElementById('contactForm');

messageBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('show');
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    modalOverlay.classList.remove('show');
    contactForm.reset();
});

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});