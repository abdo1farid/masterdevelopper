<template>
  <section class="services">
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
    
    <!-- Services Content -->
    <div class="services-content">
      <div class="content-wrapper">
        <div class="section-badge">
          <span class="badge-text">Our Services</span>
        </div>
        
        <h2 class="services-title">
          What We Provide
        </h2>
        
        <p class="services-subtitle">
          Comprehensive tools and resources designed to accelerate your development journey and unlock your full potential.
        </p>

        <div class="services-grid">
          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-tools"></i></div>
              <div class="service-number">01</div>
            </div>
            <h3 class="service-title">Developer Tools</h3>
            <p class="service-description">
              Powerful utilities and extensions designed to streamline your workflow, boost productivity, and solve real-world development challenges.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>

          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-book"></i></div>
              <div class="service-number">02</div>
            </div>
            <h3 class="service-title">Interactive Courses</h3>
            <p class="service-description">
              Learn coding through modern, hands-on courses that break away from traditional teaching. Master skills at your own pace with real projects.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>

          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-brain"></i></div>
              <div class="service-number">03</div>
            </div>
            <h3 class="service-title">AI Code Assistant</h3>
            <p class="service-description">
              Get intelligent suggestions, code completions, and real-time assistance powered by advanced AI to help you code smarter and faster.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>

          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-magnifying-glass"></i></div>
              <div class="service-number">04</div>
            </div>
            <h3 class="service-title">Code Analysis</h3>
            <p class="service-description">
              Analyze and optimize your code with AI-powered insights. Get detailed reports on performance, security, and best practices.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>

          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-globe"></i></div>
              <div class="service-number">05</div>
            </div>
            <h3 class="service-title">Community Hub</h3>
            <p class="service-description">
              Connect with thousands of developers worldwide, share knowledge, collaborate on projects, and grow together in a supportive environment.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>

          <div class="service-card">
            <div class="card-header">
              <div class="service-icon"><i class="fas fa-chart-line"></i></div>
              <div class="service-number">06</div>
            </div>
            <h3 class="service-title">Progress Tracking</h3>
            <p class="service-description">
              Monitor your growth with detailed analytics. Track your progress, identify strengths, and get personalized recommendations for improvement.
            </p>
            <a href="#" class="service-link">Explore →</a>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="services-cta">
          <p class="cta-text">Explore all our services and start building amazing things today</p>
          <button class="cta-button">Get Started Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services {
  min-height: 100vh;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: white;
  margin: 0;
  padding: 4rem 0;
  
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

/* Services Content */
.services-content {
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

.services-title {
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

.services-subtitle {
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

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
}

.service-card {
  padding: 2rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1.5px solid rgba(0, 212, 255, 0.15);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  animation: cardFadeIn 0.8s ease-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d4ff, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.service-icon {
  font-size: 2.5rem;
  animation: iconFloat 3s ease-in-out infinite;
}

.service-card:nth-child(2) .service-icon {
  animation-delay: 0.3s;
}

.service-card:nth-child(3) .service-icon {
  animation-delay: 0.6s;
}

.service-card:nth-child(4) .service-icon {
  animation-delay: 0.2s;
}

.service-card:nth-child(5) .service-icon {
  animation-delay: 0.5s;
}

.service-card:nth-child(6) .service-icon {
  animation-delay: 0.4s;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.service-number {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.4;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.8rem 0;
  color: white;
  text-align: left;
}

.service-description {
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1.2rem 0;
  text-align: left;
  flex-grow: 1;
}

.service-link {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;
  text-align: left;
}

.service-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00d4ff;
  transition: width 0.3s ease;
}

.service-link:hover::after {
  width: 100%;
}

.service-card:hover .service-link {
  color: #00ecff;
  transform: translateX(5px);
}

/* Services CTA */
.services-cta {
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
  /* At <=1024 we collapse services grid to single column for consistency */
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.8rem 0;
  }

  .services-content {
    padding: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  .services {
    min-height: auto;
    padding: 2.5rem 0;
  }

  .services-content {
    padding: 1rem;
  }

  .services-title {
    margin-bottom: 0.8rem;
  }

  .services-subtitle {
    margin: 0.8rem 0 1.5rem 0;
  }

  .services-grid {
    gap: 1rem;
    grid-template-columns: 1fr;
    margin: 1.5rem 0;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-icon {
    font-size: 2rem;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.85rem;
  }

  .service-number {
    font-size: 1.5rem;
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
  .services {
    min-height: 60vh;
  }

  .services-content {
    padding: 0.8rem;
  }

  .services-title {
    font-size: clamp(1.3rem, 4vw, 2.5rem);
    margin-bottom: 0.6rem;
  }

  .services-subtitle {
    font-size: 0.75rem;
    margin: 0.6rem 0 1.5rem 0;
  }

  .services-grid {
    gap: 0.8rem;
  }

  .service-card {
    padding: 1rem;
  }

  .service-icon {
    font-size: 1.5rem;
  }

  .service-number {
    font-size: 1.2rem;
  }

  .service-title {
    font-size: 0.95rem;
  }

  .service-description {
    font-size: 0.75rem;
  }

  .orb-1, .orb-2, .orb-3 {
    display: none;
  }
}

@media screen and (max-width: 380px) {
  .services {
    min-height: 50vh;
  }

  .services-content {
    padding: 0.5rem;
  }

  .services-title {
    font-size: clamp(1.1rem, 3vw, 2rem);
    margin-bottom: 0.5rem;
  }

  .services-subtitle {
    font-size: 0.7rem;
    margin: 0.5rem 0 1.2rem 0;
  }

  .services-grid {
    gap: 0.6rem;
  }

  .service-card {
    padding: 0.8rem;
  }

  .service-icon {
    font-size: 1.2rem;
  }

  .service-title {
    font-size: 0.85rem;
    margin: 0.3rem 0;
  }

  .service-description {
    font-size: 0.65rem;
    margin: 0.3rem 0;
  }

  .service-link {
    font-size: 0.7rem;
  }

  .cta-text {
    font-size: 0.85rem;
  }

  .cta-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.7rem;
  }
}
</style>
