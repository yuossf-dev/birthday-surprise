// Set the birthday date - April 3, 2026 at 00:00:00
const birthdayDate = new Date('2026-04-03T00:00:00').getTime();

const countdownContainer = document.getElementById('countdown-container');
const birthdayContainer = document.getElementById('birthday-container');

// Track visitor (simple local tracking)
function trackVisitor() {
    const visits = JSON.parse(localStorage.getItem('siteVisits') || '[]');
    
    // Create a simple fingerprint
    const fingerprint = navigator.userAgent + screen.width + screen.height;
    
    // Get device info
    let device = 'Desktop';
    if (/Mobile|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
        device = 'Mobile';
    } else if (/Tablet|iPad/.test(navigator.userAgent)) {
        device = 'Tablet';
    }
    
    // Add new visit
    visits.push({
        timestamp: new Date().toISOString(),
        fingerprint: btoa(fingerprint).substring(0, 10),
        device: device,
        userAgent: navigator.userAgent.substring(0, 50)
    });
    
    // Keep only last 100 visits
    if (visits.length > 100) {
        visits.shift();
    }
    
    localStorage.setItem('siteVisits', JSON.stringify(visits));
}

// Track on page load
trackVisitor();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // If birthday has arrived or passed
    if (distance <= 0) {
        countdownContainer.classList.add('hidden');
        birthdayContainer.classList.remove('hidden');
        return;
    }

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add some confetti effect when birthday arrives
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            confetti.style.transition = 'all 3s ease-out';
            confetti.style.zIndex = '1000';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.opacity = '0';
            }, 100);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
}

// Check if it's birthday time and trigger confetti
setInterval(() => {
    const now = new Date().getTime();
    if (birthdayDate - now <= 0 && !birthdayContainer.classList.contains('hidden')) {
        createConfetti();
    }
}, 10000); // Confetti every 10 seconds on birthday
