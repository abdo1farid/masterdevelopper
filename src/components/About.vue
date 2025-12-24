<template>
  <section class="about">
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
    
    <!-- About Content -->
    <div class="about-content">
      <div class="content-wrapper">
        <div class="section-badge">
          <span class="badge-text">About Master Developer</span>
        </div>
        
        <h2 class="about-title">
          Revolutionizing Developer Education
        </h2>
        
        <div class="about-grid">
          <!-- Main Description -->
          <div class="about-main">
            <p class="about-description">
              We are a passionate team dedicated to transforming how developers learn and grow. Our mission is to create innovative tools and resources that empower developers at every stage of their journey.
            </p>
            <p class="about-description">
              Breaking free from traditional teaching methods, we've built a platform that combines cutting-edge tools with modern learning approaches—designed for the developer of today and tomorrow.
            </p>
          </div>

          <!-- Stats -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">Active Developers</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">Learning Courses</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Community Support</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Free & Open</div>
            </div>
          </div>
        </div>

        <!-- Core Values -->
        <div class="values-section">
          <h3 class="values-title">Our Core Values</h3>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon"><i class="fas fa-lightbulb"></i></div>
              <h4 class="value-name">Innovation</h4>
              <p class="value-description">
                We constantly innovate and push boundaries to bring you the latest tools and techniques in development.
              </p>
            </div>

            <div class="value-card">
              <div class="value-icon"><i class="fas fa-graduation-cap"></i></div>
              <h4 class="value-name">Learning</h4>
              <p class="value-description">
                We believe education should evolve. Modern methods for modern developers—that's our approach.
              </p>
            </div>

            <div class="value-card">
              <div class="value-icon"><i class="fas fa-handshake"></i></div>
              <h4 class="value-name">Community</h4>
              <p class="value-description">
                Together we're stronger. We foster a supportive community where developers help each other succeed.
              </p>
            </div>

            <div class="value-card">
              <div class="value-icon"><i class="fas fa-rocket"></i></div>
              <h4 class="value-name">Growth</h4>
              <p class="value-description">
                Your success is our success. We're committed to helping you reach new heights in your coding journey.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="about-cta">
          <p class="cta-text">Ready to join our community?</p>
          <button class="cta-button">Start Your Journey</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  min-height: auto;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: white;
  margin: 0;
  padding: 3.5rem 0;
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
  top: 15%;
  left: -10%;
  animation: floatOrb1 10s ease-in-out infinite;
}

.orb-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #0066ff 0%, #0033cc 100%);
  bottom: 10%;
  right: -5%;
  animation: floatOrb2 12s ease-in-out infinite;
  animation-delay: 2s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00a8ff 0%, #0055dd 100%);
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  animation: floatOrb3 11s ease-in-out infinite;
  animation-delay: 1s;
  opacity: 0.3;
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
  top: 20%;
  left: 10%;
  animation: slideIn 4s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.7);
}

.line-2 {
  width: 350px;
  height: 1.5px;
  bottom: 20%;
  right: 10%;
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

/* About Content */
.about-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1100px;
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

.about-title {
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 900;
  margin: 0 0 2rem 0;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2.5rem 0;
  align-items: center;
}

.about-main {
  text-align: left;
}

.about-description {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.5rem 0;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.about-description:last-child {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat-card {
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.15);
  border-radius: 15px;
  transition: all 0.3s ease;
  animation: statAppear 0.8s ease-out;
}

@keyframes statAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.stat-card:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.15);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* Values Section */
.values-section {
  margin-top: 3rem;
}

.values-title {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  font-weight: 800;
  margin: 0 0 2rem 0;
  color: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.value-card {
  padding: 1.8rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.15);
  border-radius: 20px;
  transition: all 0.3s ease;
  animation: cardFadeIn 0.8s ease-out;
  margin-bottom: 25px;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.value-card:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  transform: translateY(-6px);
  box-shadow: 0 0 35px rgba(0, 212, 255, 0.2);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: iconFloat 3s ease-in-out infinite;
}

.value-card:nth-child(2) .value-icon {
  animation-delay: 0.3s;
}

.value-card:nth-child(3) .value-icon {
  animation-delay: 0.6s;
}

.value-card:nth-child(4) .value-icon {
  animation-delay: 0.9s;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.value-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #00d4ff;
  margin: 0 0 0.8rem 0;
}

.value-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  font-weight: 300;
}

/* CTA Section */
.about-cta {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  animation: ctaAppear 1s ease-out 0.6s both;
}

@keyframes ctaAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-text {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 1.2rem 0;
  color: rgba(255, 255, 255, 0.9);
}

.cta-button {
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

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 12px 30px rgba(0, 212, 255, 0.3);
}

.cta-button:active {
  transform: translateY(-1px);
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
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Collapse stats and values into single column at <=1024 for consistent layout */
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  .about {
    min-height: auto;
    padding: 2.5rem 0;
  }

  .about-content {
    padding: 1rem;
  }

  .about-title {
    margin-bottom: 1.5rem;
  }

  .about-description {
    font-size: 0.9rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .value-card {
    padding: 1.3rem;
  }

  .value-icon {
    font-size: 2rem;
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
  .about {
    min-height: 70vh;
  }

  .about-content {
    padding: 0.8rem;
  }

  .about-title {
    font-size: clamp(1.3rem, 4vw, 2.5rem);
    margin-bottom: 1rem;
  }

  .about-description {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .about-grid {
    gap: 1rem;
  }

  .stats-grid {
    gap: 0.8rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .values-grid {
    gap: 0.8rem;
  }

  .value-card {
    padding: 1rem;
  }

  .value-icon {
    font-size: 1.8rem;
  }

  .orb-1, .orb-2, .orb-3 {
    display: none;
  }
}

@media screen and (max-width: 380px) {
  .about {
    min-height: 60vh;
  }

  .about-content {
    padding: 0.5rem;
  }

  .about-title {
    font-size: clamp(1.1rem, 3vw, 2rem);
    margin-bottom: 0.8rem;
  }

  .about-description {
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
  }

  .stat-card {
    padding: 0.8rem;
  }

  .stat-number {
    font-size: 1.3rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }

  .value-card {
    padding: 0.8rem;
  }

  .value-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .value-name {
    font-size: 0.9rem;
    margin: 0.3rem 0;
  }

  .value-description {
    font-size: 0.65rem;
  }

  .cta-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.7rem;
  }
}
</style>
