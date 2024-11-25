// Show services section on button click
function showServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Show service details (basic implementation)
  function showServiceDetails(serviceName) {
    alert(`Learn more about our ${serviceName} services coming soon!`);
  }
  
  // Contact form submission (basic example)
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! We have received your message.`);
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  
  // Fetch services from the backend and display them
  const sendEmail = async (e) => {
    e.preventDefault();
  
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/send-email", data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    }
  };
  
// Submit contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message }),
})
  .then((response) => response.json())
  .then((data) => {
    alert(data.message);
    document.getElementById('contactForm').reset();
  })
  .catch((err) => console.error('Error submitting contact form:', err));
});
// GSAP Animations
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.hero button', { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

// Animate service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    delay: 0.2 * index,
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
    },
  });
});
