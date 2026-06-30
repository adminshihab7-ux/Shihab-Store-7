// Simple live badge pulse override (already in CSS)
// Add click feedback on order buttons
document.querySelectorAll('.btn-order, .btn-whatsapp, .btn-telegram').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            this.style.transform = 'scale(0.96)';
            setTimeout(() => { this.style.transform = ''; }, 200);
            // You can replace with actual links later
            alert('🔗 যোগাযোগের লিংক শীঘ্রই যুক্ত হবে!');
        }
    });
});

console.log('🛒 Shihab Store — Premium FreeFire Services');