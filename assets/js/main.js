/* ============================================
   GAINEDGE LANDING PAGE - JAVASCRIPT
   ============================================ */

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});

// Subscription Modal Functions
function openSubscription() {
  document.getElementById('subscriptionModal').style.display = 'flex';
  updatePrice();
}

function closeSubscription() {
  document.getElementById('subscriptionModal').style.display = 'none';
}

// Error Modal Functions
function showError(message) {
  const modal = document.getElementById('errorModal');
  document.getElementById('errorMessage').textContent = message;
  modal.style.display = 'flex';
}

function closeErrorModal() {
  document.getElementById('errorModal').style.display = 'none';
}

// Price Update based on Currency
function updatePrice() {
  const select = document.getElementById('currencySelect');
  const selected = select.options[select.selectedIndex];

  const actualPrice = selected.dataset.actual;
  const normalPrice = selected.dataset.normal;

  document.getElementById('actualPrice').textContent = actualPrice || '-';
  document.getElementById('offerPrice').textContent = normalPrice || '-';
  document.getElementById('actualPriceModal').textContent = actualPrice || '-';
  document.getElementById('offerPriceModal').textContent = normalPrice || '-';
}

// Currency Select Event Listener
document.getElementById('currencySelect').addEventListener('change', updatePrice);

// Parse amount for Razorpay
function parseAmount(priceStr) {
  if (!priceStr) return 0;
  const num = priceStr.replace(/[^\d.]/g, '');
  return Math.round(parseFloat(num) * 100);
}

// Handle Payment
const handlePayment = async () => {
  const select = document.getElementById('currencySelect');
  const selected = select.options[select.selectedIndex];

  const currency = selected.value;
  const offerPrice = selected.dataset.normal;
  const amount = parseAmount(offerPrice);

  const options = {
    key: 'rzp_live_SUL5aYNs5PVP13',
    amount: amount,
    currency: currency,
    name: 'GainEdge',
    description: 'Premium Subscription Plan',
    image: 'assets/images/logo.svg',
    handler: function (response) {
      console.log(response);
      showError(`Payment Successful!\n\nPayment ID: ${response.razorpay_payment_id}\n\nThank you for subscribing to GainEdge Premium!`);
      closeSubscription();
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    theme: {
      color: '#7FE698',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

// Load Razorpay Script
const loadRazorpayScript = () => {
  const existing = document.getElementById('razorpay-script');

  if (!existing) {
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => handlePayment();
    script.onerror = () => {
      showError('Payment service failed to load. Please try again.');
    };
    document.body.appendChild(script);
  } else {
    handlePayment();
  }
};

// Close modals when clicking outside
window.onclick = function (event) {
  const subscriptionModal = document.getElementById('subscriptionModal');
  const errorModal = document.getElementById('errorModal');

  if (event.target === subscriptionModal) {
    closeSubscription();
  }
  if (event.target === errorModal) {
    closeErrorModal();
  }
};

// Smooth scroll for anchor links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 14, 36, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 14, 36, 0.95)';
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePrice();
});

// Keyboard accessibility for modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSubscription();
    closeErrorModal();
  }
});
