// Optional: Advanced animation utilities
export const createParticleSystem = (container, count = 20) => {
  const particles = [];
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'absolute rounded-full bg-blue-500/10';
    particle.style.width = `${Math.random() * 20 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    container.appendChild(particle);
    particles.push(particle);
  }
  
  return particles;
};

export const animateTextSequence = (element, texts, interval = 2000) => {
  let currentIndex = 0;
  
  const animate = () => {
    gsap.to(element, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: "power2.in",
      onComplete: () => {
        element.textContent = texts[currentIndex];
        gsap.to(element, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out"
        });
        currentIndex = (currentIndex + 1) % texts.length;
      }
    });
  };
  
  const intervalId = setInterval(animate, interval);
  return () => clearInterval(intervalId);
};