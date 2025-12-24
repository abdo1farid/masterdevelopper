<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <!-- Logo Brand -->
      <div class="navbar-brand">
        <a href="#home" class="logo">
          <img src="/logo.jpg" alt="Master Dev Logo" class="logo-img">
        </a>
      </div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li><a href="#home" class="nav-item" title="Home"><i class="fas fa-home"></i><span class="nav-text">Home</span></a></li>
        <li><a href="#about" class="nav-item" title="About"><i class="fas fa-user"></i><span class="nav-text">About</span></a></li>
        <li><a href="#services" class="nav-item" title="Services"><i class="fas fa-briefcase"></i><span class="nav-text">Services</span></a></li>
        <li><a href="#contact" class="nav-item" title="Contact"><i class="fas fa-envelope"></i><span class="nav-text">Contact</span></a></li>
      </ul>

      <!-- CTA Button -->
      <button class="cta-button">
        <span>Get Started</span>
        <i class="fas fa-arrow-right"></i>
      </button>

      <!-- Mobile Menu Toggle -->
      <div class="hamburger" :class="{ active: isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ active: isOpen }">
      <a href="#home" class="mobile-item" @click="isOpen = false">Home</a>
      <a href="#about" class="mobile-item" @click="isOpen = false">About</a>
      <a href="#services" class="mobile-item" @click="isOpen = false">Services</a>
      <a href="#contact" class="mobile-item" @click="isOpen = false">Contact</a>
      <button class="mobile-cta">Get Started</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Navbar Container */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: min(calc(100% - 2rem), 1100px);
  background: linear-gradient(135deg, rgba(10, 30, 80, 0.4) 0%, rgba(15, 50, 120, 0.4) 100%);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(0, 212, 255, 0.25);
  border-radius: 50px;
  padding: 0;
  box-shadow: 
    0 8px 32px rgba(0, 212, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 60px rgba(0, 212, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar:hover {
  border-color: rgba(0, 212, 255, 0.35);
  box-shadow: 
    0 12px 48px rgba(0, 212, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 80px rgba(0, 212, 255, 0.08);
  transform: translateX(-50%) translateY(-2px);
}

.navbar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* Logo & Brand */
.navbar-brand {
  flex-shrink: 0;
  position: absolute;
  left: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: -0.5px;
}

.logo-img {
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo:hover .logo-img {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 12px rgba(0, 212, 255, 0.3));
}

.brand-text {
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.nav-links li {
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  color: #00d4ff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.6rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  position: relative;
  letter-spacing: 0.3px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 45px;
  height: 45px;
  overflow: visible;
  min-width: 45px;
}

.nav-item i {
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nav-text {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scale(0.7);
  opacity: 0;
  font-size: 0.6rem;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: rgba(0, 212, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  margin-top: 0.5rem;
  pointer-events: none;
}

.nav-item:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2);
}

.nav-item:hover i {
  opacity: 0.8;
}

.nav-item:hover .nav-text {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

/* CTA Button */
.cta-button {
  flex-shrink: 0;
  padding: 0.75rem 1.8rem;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: absolute;
  right: 2rem;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(0, 212, 255, 0.4),
    inset 0 0 15px rgba(255, 255, 255, 0.1);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
  z-index: 0;
}

.cta-button span,
.cta-button i {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.2),
    0 12px 30px rgba(0, 212, 255, 0.25);
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:active {
  transform: translateY(-1px);
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  flex-shrink: 0;
  position: absolute;
  right: 2rem;
  z-index: 102;
  width: 32px;
  height: 28px;
  justify-content: center;
}

.hamburger span {
  width: 24px;
  height: 2.5px;
  background: linear-gradient(90deg, #00d4ff, #0a9cff);
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.hamburger:hover span {
  box-shadow: 0 0 16px rgba(0, 212, 255, 0.5);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 90px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: linear-gradient(135deg, rgba(10, 30, 80, 0.95) 0%, rgba(15, 50, 120, 0.95) 100%);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 25px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 99;
  box-shadow: 
    0 10px 40px rgba(0, 212, 255, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  width: 90%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
}

.mobile-nav.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.mobile-item {
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  display: block;
}

.mobile-item:first-child {
  border-radius: 25px 25px 0 0;
  padding-top: 1.2rem;
}

.mobile-item:last-of-type {
  border-bottom: none;
}

.mobile-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 0;
  background: linear-gradient(180deg, #00d4ff, #0a9cff);
  transition: height 0.3s ease;
  border-radius: 0 3px 3px 0;
}

.mobile-item:hover {
  background: rgba(0, 212, 255, 0.12);
  color: #00d4ff;
  padding-left: 1.8rem;
}

.mobile-item:hover::before {
  height: 100%;
}

.mobile-cta {
  padding: 1rem 1.5rem;
  margin: 0.8rem;
  background: linear-gradient(135deg, #00d4ff 0%, #0a9cff 100%);
  color: #0a0e27;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.mobile-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(0, 212, 255, 0.5);
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .navbar {
    width: calc(100% - 2rem);
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    padding: 0.9rem 1.2rem;
  }

  .navbar-wrapper {
    padding: 0.8rem 1.2rem;
    gap: 1.5rem;
    justify-content: flex-start;
  }

  .navbar-brand {
    position: static;
    margin-right: auto;
  }

  .nav-links {
    display: none;
  }

  .cta-button {
    display: none;
    position: static;
  }

  .hamburger {
    display: flex;
    position: static;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    width: calc(100% - 1rem);
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.8rem 1rem;
  }

  .navbar-wrapper {
    padding: 0.7rem 1rem;
    gap: 1rem;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .mobile-nav {
    width: 90%;
    top: 75px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    width: calc(100% - 0.8rem);
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.7rem 0.8rem;
    border-radius: 25px;
  }

  .navbar-wrapper {
    padding: 0.6rem 0.8rem;
    gap: 0.8rem;
  }

  .navbar-brand {
    position: static;
    flex-shrink: 0;
  }

  .logo-img {
    width: 35px;
    height: 35px;
  }

  .nav-item {
    width: 40px;
    height: 40px;
  }

  .hamburger {
    position: static;
    width: 28px;
    height: 24px;
    gap: 4px;
  }

  .hamburger span {
    width: 20px;
    height: 2px;
  }

  .mobile-nav {
    width: 85%;
    max-width: 200px;
    top: 65px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  .mobile-item {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }

  .mobile-cta {
    padding: 0.75rem 1.2rem;
    font-size: 0.75rem;
    margin: 0.6rem;
  }
}

@media screen and (max-width: 357px) {
  .navbar {
    width: calc(100% - 0.6rem);
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.65rem 0.7rem;
    border-radius: 20px;
  }

  .navbar-wrapper {
    padding: 0.5rem 0.6rem;
    gap: 0.6rem;
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .nav-item {
    width: 36px;
    height: 36px;
  }

  .nav-item i {
    font-size: 1rem;
  }

  .hamburger {
    width: 24px;
    height: 20px;
    gap: 3px;
  }

  .hamburger span {
    width: 18px;
    height: 1.8px;
  }

  .mobile-nav {
    width: 80%;
    max-width: 160px;
    top: 60px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
  }

  .mobile-item {
    padding: 0.7rem 0.9rem;
    font-size: 0.75rem;
  }

  .mobile-cta {
    padding: 0.65rem 0.9rem;
    margin: 0.6rem;
    font-size: 0.7rem;
  }
}
</style>
