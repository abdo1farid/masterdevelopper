<template>
  <section class="contact">
    <!-- Animated gradient orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    
    <!-- Animated lines -->
    <div class="animated-line line-1"></div>
    <div class="animated-line line-2"></div>

    <!-- Floating particles -->
    <div class="particles">
      <div class="particle" v-for="i in 25" :key="i"></div>
    </div>

    <!-- Radial gradient overlay -->
    <div class="radial-overlay"></div>
    
    <!-- Contact Content -->
    <div class="contact-content">
      <div class="content-wrapper">
        <div class="section-badge">
          <span class="badge-text">Get In Touch</span>
        </div>
        
        <h2 class="contact-title">
          Let's Connect
        </h2>
        
        <p class="contact-subtitle">
          Have questions or want to collaborate? We'd love to hear from you. Reach out and let's build something amazing together.
        </p>

        <div class="contact-container">
          <!-- Contact Form -->
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                class="form-input"
                v-model="formData.name"
                required
              />
            </div>

            <div class="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                class="form-input"
                v-model="formData.email"
                required
              />
            </div>

            <div class="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                class="form-input"
                v-model="formData.subject"
                required
              />
            </div>

            <div class="form-group">
              <textarea 
                placeholder="Your Message" 
                class="form-textarea"
                rows="5"
                v-model="formData.message"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h4 class="info-title">Email</h4>
              <p class="info-text">
                hello@masterdeveloper.com
              </p>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <h4 class="info-title">Response Time</h4>
              <p class="info-text">
                We typically respond within 24 hours
              </p>
            </div>

            <div class="info-card info-card-large">
              <div class="info-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4 class="info-title">Community</h4>
              <p class="info-text">
                Join our Discord and connect with developers
              </p>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <a href="#" class="social-link" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="social-link" title="Discord">
                <i class="fab fa-discord"></i>
              </a>
              <a href="#" class="social-link" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData)
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
  // Here you would typically send the form data to your backend
}
</script>

<style scoped>
.contact {
  min-height: auto;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: white;
  padding: 3.5rem 0;
  margin: 0;
  padding: 0;
  
  transform: translateY(-24px);
}

/* Animated Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 2;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #00d4ff 0%, #0a9cff 100%);
  top: 10%;
  right: -10%;
  animation: floatOrb1 10s ease-in-out infinite;
}

.orb-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #0066ff 0%, #0033cc 100%);
  bottom: 5%;
  left: -5%;
  animation: floatOrb2 12s ease-in-out infinite;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00a8ff 0%, #0055dd 100%);
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  animation: floatOrb3 11s ease-in-out infinite;
  animation-delay: 1s;
  opacity: 0.3;
}

@keyframes floatOrb1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-40px, -40px); }
}

@keyframes floatOrb2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(50px, 50px); }
}

@keyframes floatOrb3 {
  0%, 100% { transform: translateX(50%) translateY(0); }
  50% { transform: translateX(50%) translateY(-40px); }
}

/* Animated Lines */
.animated-line {
  position: absolute;
  background: linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%);
  z-index: 3;
}

.line-1 {
  width: 400px;
  height: 2px;
  top: 15%;
  right: 10%;
  animation: slideIn 4s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.7);
}

.line-2 {
  width: 350px;
  height: 1.5px;
  bottom: 30%;
  left: 5%;
  animation: slideInReverse 4s ease-in-out infinite;
  animation-delay: 1.5s;
  box-shadow: 0 0 25px rgba(0, 100, 255, 0.7);
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateX(-100px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateX(100px); }
}

@keyframes slideInReverse {
  0% { opacity: 0; transform: translateX(100px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateX(-100px); }
}

/* Contact Content */
.contact-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 2rem;
  width: 100%;
}

.content-wrapper {
  animation: contentAppear 0.9s ease-out;
}

@keyframes contentAppear {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-badge {
  display: inline-block;
  padding: 0.55rem 1.2rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1.5px solid rgba(0, 212, 255, 0.3);
  border-radius: 30px;
  margin-bottom: 1rem;
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
  }
}

.badge-text {
  color: #00d4ff;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.contact-title {
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 900;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  margin: 1rem 0 2.5rem 0;
  font-weight: 300;
  opacity: 0.9;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Contact Container */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2.5rem;
  align-items: start;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: formAppear 1s ease-out 0.3s both;
}

@keyframes formAppear {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-input,
.form-textarea {
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 0.85rem 1.2rem;
  color: white;
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-input:focus,
.form-textarea:focus {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
}

.submit-button {
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
  border: none;
  padding: 0.85rem 2.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.submit-button:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 12px 30px rgba(0, 212, 255, 0.3);
}

.submit-button:active {
  transform: translateY(-1px);
}

/* Contact Info */
.contact-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  animation: infoAppear 1s ease-out 0.5s both;
}

@keyframes infoAppear {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info-card {
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.15);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.info-card:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
}

.info-icon {
  font-size: 2rem;
  color: #00d4ff;
  margin-bottom: 0.8rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.info-card:hover .info-icon {
  color: #00ecff;
}

.info-card-large {
  grid-column: 1 / -1;
  max-width: 50%;
  margin: 0 auto;
  padding: 2rem;
}

.info-card-large .info-icon {
  font-size: 2.5rem;
}

.info-card-large .info-title {
  font-size: 1.2rem;
}

.info-card-large .info-text {
  font-size: 0.95rem;
}

.info-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: white;
}

.info-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
}

/* Social Links */
.social-links {
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 212, 255, 0.1);
  border: 1.5px solid rgba(0, 212, 255, 0.3);
  border-radius: 50%;
  color: #00d4ff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
}

/* Floating Particles */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #00d4ff;
  border-radius: 50%;
  opacity: 0.6;
  animation: particleFloat 25s infinite ease-in;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
}

.particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; top: 50%; animation-delay: 2s; }
.particle:nth-child(3) { left: 30%; top: 10%; animation-delay: 4s; }
.particle:nth-child(4) { left: 40%; top: 70%; animation-delay: 1s; }
.particle:nth-child(5) { left: 50%; top: 30%; animation-delay: 3s; }
.particle:nth-child(6) { left: 60%; top: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; top: 20%; animation-delay: 2s; }
.particle:nth-child(8) { left: 80%; top: 50%; animation-delay: 4s; }
.particle:nth-child(9) { left: 90%; top: 10%; animation-delay: 1s; }
.particle:nth-child(10) { left: 15%; top: 80%; animation-delay: 3s; }
.particle:nth-child(11) { left: 25%; top: 25%; animation-delay: 5s; }
.particle:nth-child(12) { left: 35%; top: 45%; animation-delay: 0s; }
.particle:nth-child(13) { left: 45%; top: 75%; animation-delay: 2s; }
.particle:nth-child(14) { left: 55%; top: 15%; animation-delay: 4s; }
.particle:nth-child(15) { left: 65%; top: 85%; animation-delay: 1s; }
.particle:nth-child(16) { left: 75%; top: 35%; animation-delay: 3s; }
.particle:nth-child(17) { left: 85%; top: 65%; animation-delay: 5s; }
.particle:nth-child(18) { left: 5%; top: 40%; animation-delay: 2s; }
.particle:nth-child(19) { left: 95%; top: 70%; animation-delay: 4s; }
.particle:nth-child(20) { left: 50%; top: 50%; animation-delay: 3s; }
.particle:nth-child(21) { left: 12%; top: 60%; animation-delay: 1s; }
.particle:nth-child(22) { left: 88%; top: 40%; animation-delay: 3s; }
.particle:nth-child(23) { left: 38%; top: 20%; animation-delay: 5s; }
.particle:nth-child(24) { left: 62%; top: 75%; animation-delay: 2s; }
.particle:nth-child(25) { left: 22%; top: 65%; animation-delay: 4s; }

@keyframes particleFloat {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

/* Radial overlay */
.radial-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 39, 0.4) 100%);
  z-index: 2;
  pointer-events: none;
}

@media screen and (max-width: 1024px) {
  /* Make the overall contact container single-column and stack info cards */
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .contact {
    min-height: auto;
    padding: 2.5rem 0 2rem 0;
  }

  .contact-content {
    padding: 1rem;
  }

  .contact-title {
    margin-bottom: 0.8rem;
  }

  .contact-subtitle {
    margin: 0.8rem 0 1.5rem 0;
  }

  .contact-container {
    gap: 1.5rem;
  }

  .contact-form {
    gap: 1rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 1.2rem;
  }

  .info-icon {
    font-size: 1.5rem;
  }

  .info-title {
    font-size: 0.9rem;
  }

  .info-text {
    font-size: 0.8rem;
  }

  .social-links {
    gap: 0.8rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .orb-1 {
    width: 200px;
    height: 200px;
  }

  .orb-2 {
    width: 250px;
    height: 250px;
  }

  .orb-3 {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 480px) {
  .contact {
    min-height: auto;
    padding: 1.8rem 0 1.5rem 0;
  }

  .contact-content {
    padding: 0.8rem;
  }

  .contact-title {
    font-size: clamp(1.3rem, 4vw, 2.5rem);
    margin-bottom: 0.6rem;
  }

  .contact-subtitle {
    font-size: 0.75rem;
    margin: 0.6rem 0 1.5rem 0;
  }

  .contact-container {
    gap: 1rem;
  }

  .contact-form {
    gap: 0.8rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.65rem 0.9rem;
    font-size: 0.85rem;
  }

  .submit-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.75rem;
  }

  .contact-info {
    gap: 1rem;
  }

  .info-card {
    padding: 1rem;
  }

  .info-icon {
    font-size: 1.8rem;
  }

  .info-title {
    font-size: 0.9rem;
  }

  .info-text {
    font-size: 0.75rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .orb-1, .orb-2, .orb-3 {
    display: none;
  }
}

@media screen and (max-width: 380px) {
  .contact {
    min-height: auto;
    padding: 1.2rem 0 1rem 0;
  }

  .contact-content {
    padding: 0.5rem;
  }

  .contact-title {
    font-size: clamp(1.1rem, 3vw, 2rem);
    margin-bottom: 0.5rem;
  }

  .contact-subtitle {
    font-size: 0.7rem;
    margin: 0.5rem 0 1.2rem 0;
  }

  .contact-container {
    gap: 0.8rem;
  }

  .contact-form {
    gap: 0.7rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }

  .submit-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.7rem;
  }

  .info-card {
    padding: 0.8rem;
  }

  .info-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .info-title {
    font-size: 0.85rem;
    margin: 0.3rem 0;
  }

  .info-text {
    font-size: 0.7rem;
  }

  .social-links {
    gap: 0.6rem;
  }

  .social-link {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }

  .cta-text {
    font-size: 0.8rem;
  }
}
</style>
