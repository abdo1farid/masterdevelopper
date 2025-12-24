<template>
  <section class="hero">
    <!-- Grid Background -->
    <div class="grid-background"></div>
    
    <!-- Animated gradient orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    
    <!-- Animated lines -->
    <div class="animated-line line-1"></div>
    <div class="animated-line line-2"></div>
    <div class="animated-line line-3"></div>
    
    <!-- Floating particles -->
    <div class="particles">
      <div class="particle" v-for="i in 30" :key="i"></div>
    </div>

    <!-- Radial gradient overlay -->
    <div class="radial-overlay"></div>
    
    <!-- Hero Content -->
    <div class="hero-content">
      <div class="content-wrapper">
        <div class="hero-badge">
          <span class="badge-text">Next Generation</span>
        </div>
        <h1 class="hero-title">
          <span class="title-word">BUILD</span>
          <span class="title-word">THE</span>
          <span class="title-word highlight">FUTURE</span>
        </h1>
        <p class="hero-subtitle">
          Cutting-edge technology meets stunning design. Experience the next evolution of web development.
        </p>
        <div class="waitlist-form">
          <input 
            v-model="email"
            type="email" 
            placeholder="Enter your email to join the waitlist" 
            class="waitlist-input"
            @keyup.enter="submitWaitlist"
          />
          <button class="waitlist-button" @click="submitWaitlist" :disabled="isLoading">
            {{ isLoading ? 'Joining...' : 'Join Waitlist' }}
          </button>
          <div v-if="message" :class="['form-message', messageType]">
            {{ message }}
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-dot"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const isLoading = ref(false);
const message = ref('');
const messageType = ref('success');

const submitWaitlist = async () => {
  if (!email.value || !email.value.includes('@')) {
    message.value = 'Please enter a valid email address';
    messageType.value = 'error';
    return;
  }

  isLoading.value = true;
  message.value = '';

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await response.json();

    if (response.ok) {
      message.value = 'Success! Check your email for confirmation.';
      messageType.value = 'success';
      email.value = '';
    } else {
      message.value = data.message || 'Something went wrong. Please try again.';
      messageType.value = 'error';
    }
  } catch (error) {
    console.error('Error:', error);
    message.value = 'Failed to join waitlist. Please try again later.';
    messageType.value = 'error';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: white;
  margin: 0;
  padding: 3rem 0 0 0;
  transform: translateY(-24px);
}

/* Grid Background */
.grid-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;
  z-index: 1;
  animation: gridMove 30s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Radial overlay gradient */
.radial-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 39, 0.4) 100%);
  z-index: 2;
  pointer-events: none;
}

/* Animated Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  z-index: 2;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #00d4ff 0%, #0a9cff 100%);
  top: 5%;
  left: 5%;
  animation: floatOrb1 10s ease-in-out infinite;
}

.orb-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #0066ff 0%, #0033cc 100%);
  top: 40%;
  right: -5%;
  animation: floatOrb2 12s ease-in-out infinite;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00a8ff 0%, #0055dd 100%);
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: floatOrb3 11s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes floatOrb1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -40px); }
}

@keyframes floatOrb2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-50px, 50px); }
}

@keyframes floatOrb3 {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-40px); }
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
  top: 25%;
  left: 5%;
  animation: slideIn 4s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.7);
}

.line-2 {
  width: 500px;
  height: 1.5px;
  top: 65%;
  right: 8%;
  animation: slideInReverse 4s ease-in-out infinite;
  animation-delay: 1.5s;
  box-shadow: 0 0 25px rgba(0, 100, 255, 0.7);
}

.line-3 {
  width: 350px;
  height: 1.5px;
  bottom: 25%;
  left: 20%;
  animation: slideIn 5s ease-in-out infinite;
  animation-delay: 0.8s;
  box-shadow: 0 0 25px rgba(0, 168, 255, 0.7);
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

/* Hero Content */
.hero-content {
  top: 5%;
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 2rem;
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

.hero-badge {
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

.hero-title {
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 900;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -2px;
}

.title-word {
  display: block;
  color: white;
  transition: all 0.3s ease;
}

.title-word.highlight {
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.6));
  }
}

.hero-subtitle {
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  margin: 1rem 0 1.8rem 0;
  font-weight: 300;
  opacity: 0.9;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.button-group {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: buttonsAppear 1s ease-out 0.4s both;
}

/* Waitlist Form */
.waitlist-form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: buttonsAppear 1s ease-out 0.4s both;
  max-width: 600px;
  margin: 0 auto;
}

.waitlist-input {
  flex: 1;
  min-width: 250px;
  padding: 0.85rem 1.5rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.3);
  border-radius: 50px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
}

.waitlist-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.waitlist-input:focus {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.waitlist-button {
  padding: 0.85rem 2.2rem;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

.waitlist-button:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 12px 30px rgba(0, 212, 255, 0.3);
}

.waitlist-button:active {
  transform: translateY(-1px);
}

.form-message {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  animation: messageSlide 0.3s ease-out;
}

.form-message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1.5px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.form-message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1.5px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes buttonsAppear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-button {
  padding: 0.85rem 2.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button.primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
  pointer-events: none;
}

.cta-button.primary:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 15px 35px rgba(0, 212, 255, 0.3);
}

.cta-button.primary:hover .button-shine {
  left: 100%;
}

.cta-button.secondary {
  background: transparent;
  color: #00d4ff;
  border: 2px solid #00d4ff;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.05);
}

.cta-button.secondary:hover {
  background: rgba(0, 212, 255, 0.1);
  transform: translateY(-5px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.5),
    inset 0 0 20px rgba(0, 212, 255, 0.15),
    0 15px 35px rgba(0, 212, 255, 0.2);
}

.cta-button:active {
  transform: translateY(-2px);
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
.particle:nth-child(26) { left: 78%; top: 15%; animation-delay: 0s; }
.particle:nth-child(27) { left: 42%; top: 85%; animation-delay: 3s; }
.particle:nth-child(28) { left: 58%; top: 35%; animation-delay: 5s; }
.particle:nth-child(29) { left: 8%; top: 45%; animation-delay: 2s; }
.particle:nth-child(30) { left: 92%; top: 55%; animation-delay: 4s; }

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

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.scroll-dot {
  width: 8px;
  height: 8px;
  background: #00d4ff;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
}

@media screen and (max-width: 1024px) {
  .hero {
    min-height: 85vh;
    padding: 2rem 1.5rem 0 1.5rem;
    transform: translateY(-24px);
  }

  .hero-content {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
  }

  .hero-title {
    font-size: clamp(1.8rem, 6vw, 3rem);
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin: 0.8rem 0 1.5rem 0;
  }

  .button-group {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-button {
    padding: 0.85rem 1.8rem;
    font-size: 0.85rem;
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

@media screen and (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 2rem 1.5rem 0 1.5rem;
    transform: translateY(-24px);
  }

  .grid-background {
    background-size: 30px 30px;
  }

  .orb-1 {
    width: 120px;
    height: 120px;
  }

  .orb-2 {
    width: 150px;
    height: 150px;
  }

  .orb-3 {
    width: 100px;
    height: 100px;
  }

  .hero-content {
    padding: 1rem;
  }

  .hero-title {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    letter-spacing: -0.5px;
    margin-bottom: 0.8rem;
  }

  .title-word {
    display: inline;
    margin-right: 0.2em;
  }

  .hero-subtitle {
    font-size: 0.85rem;
    margin: 0.8rem 0 1.2rem 0;
    line-height: 1.5;
  }

  .button-group {
    gap: 0.8rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }

  .line-1, .line-2, .line-3 {
    opacity: 0.2;
  }

  .scroll-indicator {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .hero {
    min-height: 75vh;
    padding: 1.5rem 1rem 0 1rem;
    transform: translateY(-24px);
  }

  .hero-content {
    padding: 0.8rem;
  }

  .hero-title {
    font-size: clamp(1.3rem, 4vw, 2rem);
    letter-spacing: -0.3px;
    margin-bottom: 0.6rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    margin: 0.6rem 0 1rem 0;
    line-height: 1.5;
  }

  .button-group {
    gap: 0.6rem;
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.75rem;
    letter-spacing: 0.3px;
    width: 100%;
  }

  .orb-1 {
    width: 80px;
    height: 80px;
  }

  .orb-2 {
    width: 100px;
    height: 100px;
  }

  .orb-3 {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 380px) {
  .hero {
    min-height: 70vh;
    padding: 1.2rem 0.8rem 0 0.8rem;
    transform: translateY(-24px);
  }

  .hero-content {
    padding: 0.5rem;
  }

  .hero-badge {
    padding: 0.35rem 0.7rem;
    margin-bottom: 0.4rem;
  }

  .badge-text {
    font-size: 0.6rem;
  }

  .hero-title {
    font-size: clamp(1.1rem, 3vw, 1.8rem);
    margin-bottom: 0.5rem;
  }

  .hero-subtitle {
    font-size: 0.75rem;
    margin: 0.5rem 0 0.8rem 0;
    line-height: 1.4;
  }

  .button-group {
    gap: 0.5rem;
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    padding: 0.6rem 1rem;
    font-size: 0.7rem;
    width: 100%;
  }

  .orb-1, .orb-2, .orb-3 {
    display: none;
  }

  .grid-background {
    opacity: 0.3;
  }
}
</style>
