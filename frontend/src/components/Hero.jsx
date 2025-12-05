import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Sparkles, Brain, Cpu, Globe, Shield, Code, Terminal, Rocket, CpuIcon, Network } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const particlesRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStage, setAnimationStage] = useState('splash');
  const splashContainerRef = useRef(null);

  // GENIUS COLOR PALETTE - Vibrant yet sophisticated
  const colors = {
    primary: '#00D4FF',      // Electric Cyan
    secondary: '#9D4EDD',    // Vibrant Purple
    accent: '#00FFAA',       // Neon Green
    glow: '#FF2E63',         // Hot Pink
    gold: '#FFD700',         // Gold
    backgroundLight: '#0F172A', // Deep Space Blue
    backgroundDark: '#020617',  // Cosmic Black
    gradientPrimary: 'linear-gradient(135deg, #00D4FF, #9D4EDD, #00FFAA)',
    gradientSecondary: 'linear-gradient(135deg, #FF2E63, #9D4EDD, #00D4FF)'
  };

  // Tech terms for data stream
  const techTerms = [
    "NEURAL", "AI", "MLOPS", "CLOUD", "TENSOR", "PYTORCH",
    "KUBERNETES", "DOCKER", "AWS", "AZURE", "GOOGLE",
    "REACT", "NODE", "PYTHON", "JAVA", "RUST", "GO",
    "DATABASE", "API", "MICROSERVICES", "DEVOPS", "CI/CD",
    "SECURITY", "ENCRYPTION", "BLOCKCHAIN", "IOT", "EDGE",
    "QUANTUM", "BIGDATA", "ANALYTICS", "VISUALIZATION"
  ];

  // SMOOTH particle matrix with enhanced visuals
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particles = [];
    const gridSize = 30;
    const particleCount = 150;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Particle class
    class MatrixParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.7;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.color = Math.random() > 0.5 ? colors.primary : colors.secondary;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.originalSize = this.size;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Smooth movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Enhanced mouse interaction
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.x -= dx * 0.01 * force;
          this.y -= dy * 0.01 * force;
        }

        // Soft boundary bounce
        if (this.x > canvas.width) this.speedX = -Math.abs(this.speedX);
        if (this.x < 0) this.speedX = Math.abs(this.speedX);
        if (this.y > canvas.height) this.speedY = -Math.abs(this.speedY);
        if (this.y < 0) this.speedY = Math.abs(this.speedY);

        // Smooth pulsing
        this.size = this.originalSize + Math.sin(Date.now() * this.pulseSpeed + this.pulsePhase) * 0.5;
        this.opacity = 0.15 + 0.2 * Math.sin(Date.now() * 0.001 + this.x * 0.005);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Add glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new MatrixParticle());
    }

    // Enhanced connection drawing
    const drawConnections = () => {
      particles.forEach((p1, i) => {
        particles.forEach((p2, j) => {
          if (i < j) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              const alpha = 0.1 * (1 - distance / 80);
              const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              gradient.addColorStop(0, `${colors.primary}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
              gradient.addColorStop(1, `${colors.secondary}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
              
              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 0.5 + (1 - distance / 80) * 1.5;
              ctx.lineCap = 'round';
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });
    };

    // Animation loop with smooth transitions
    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = `rgba(15, 23, 42, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid
      ctx.strokeStyle = colors.primary;
      ctx.globalAlpha = 0.03;
      ctx.lineWidth = 0.5;
      
      // Animated grid lines
      const offset = Date.now() * 0.0001;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(offset + x * 0.001) * 2, 0);
        ctx.lineTo(x + Math.cos(offset + x * 0.001) * 2, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.sin(offset + y * 0.001) * 2);
        ctx.lineTo(canvas.width, y + Math.cos(offset + y * 0.001) * 2);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  // ULTRA-SMOOTH WATER SPLASH EFFECT
  useEffect(() => {
    if (animationStage !== 'splash') return;
    
    const splashContainer = splashContainerRef.current;
    if (!splashContainer) return;

    splashContainer.innerHTML = '';
    
    // Enhanced water surface
    const waterSurface = document.createElement('div');
    waterSurface.className = 'water-surface';
    waterSurface.style.cssText = `
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at center, 
        rgba(0, 212, 255, 0.12) 0%,
        rgba(157, 78, 221, 0.08) 30%,
        transparent 70%);
      filter: blur(20px);
      z-index: 2;
      opacity: 0;
    `;
    splashContainer.appendChild(waterSurface);

    // Droplets layer with smooth physics
    const dropletsLayer = document.createElement('div');
    dropletsLayer.className = 'droplets-layer';
    dropletsLayer.style.cssText = `
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
    `;
    splashContainer.appendChild(dropletsLayer);

    // Enhanced splash text container
    const splashText = document.createElement('div');
    splashText.className = 'splash-text-container';
    splashText.style.cssText = `
      position: relative;
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
    `;
    
    const bitafricaWord = document.createElement('div');
    bitafricaWord.className = 'word-bitafrica';
    bitafricaWord.style.cssText = `position: relative;`;
    
    const aiWord = document.createElement('div');
    aiWord.className = 'word-ai';
    aiWord.style.cssText = `position: relative;`;
    
    // Enhanced letter creation
    "BITAFRICA".split('').forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'splash-letter';
      charSpan.textContent = char;
      charSpan.style.cssText = `
        display: inline-block;
        opacity: 0;
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        font-weight: 900;
        letter-spacing: 0.2em;
        color: ${colors.primary};
        margin: 0 0.06em;
        position: relative;
        transform-origin: center bottom;
        text-shadow: 0 0 20px ${colors.primary}80;
      `;
      bitafricaWord.appendChild(charSpan);
    });
    
    "AI".split('').forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'splash-letter';
      charSpan.textContent = char;
      charSpan.style.cssText = `
        display: inline-block;
        opacity: 0;
        font-size: clamp(2.5rem, 7vw, 4.5rem);
        font-weight: 900;
        letter-spacing: 0.2em;
        color: ${colors.secondary};
        margin: 0 0.06em;
        position: relative;
        transform-origin: center bottom;
        text-shadow: 0 0 20px ${colors.secondary}80;
      `;
      aiWord.appendChild(charSpan);
    });
    
    splashText.appendChild(bitafricaWord);
    splashText.appendChild(aiWord);
    splashContainer.appendChild(splashText);

    // Enhanced ripple system
    const createRipple = (x, y, size, color, delay = 0) => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 2px solid ${color};
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        pointer-events: none;
        z-index: 1;
      `;
      
      splashContainer.appendChild(ripple);
      
      gsap.to(ripple, {
        scale: 3.5,
        opacity: 0.4,
        duration: 2,
        ease: "power2.out",
        delay: delay,
        onComplete: () => ripple.remove()
      });
      
      return ripple;
    };

    // Enhanced droplet effects
    const createDroplet = (x, y) => {
      const droplet = document.createElement('div');
      droplet.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle at 30% 30%, ${colors.primary}, ${colors.secondary});
        border-radius: 50%;
        transform: translate(-50%, -50%);
        filter: blur(1px);
        pointer-events: none;
        z-index: 3;
      `;
      
      dropletsLayer.appendChild(droplet);
      
      gsap.to(droplet, {
        y: '+=40',
        scale: 0.3,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => droplet.remove()
      });
      
      setTimeout(() => {
        createRipple(x, y + 40, 10, colors.accent);
      }, 600);
    };

    // Enhanced surface disturbance
    const createSurfaceDisturbance = (centerX, centerY, intensity) => {
      const disturbance = document.createElement('div');
      disturbance.style.cssText = `
        position: absolute;
        left: ${centerX}px;
        top: ${centerY}px;
        width: ${intensity * 100}px;
        height: ${intensity * 100}px;
        background: radial-gradient(circle, 
          ${colors.primary}30 0%,
          ${colors.secondary}20 30%,
          transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        filter: blur(15px);
        pointer-events: none;
        z-index: 1;
      `;
      
      splashContainer.appendChild(disturbance);
      
      gsap.to(disturbance, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => disturbance.remove()
      });
    };

    // Master animation timeline
    const letters = splashText.querySelectorAll('.splash-letter');
    const containerRect = splashContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setAnimationStage('final');
          createCleanTitle();
        }, 300);
      }
    });

    // Initial setup
    tl.to(waterSurface, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    // Initial water impact
    tl.call(() => {
      createRipple(centerX, centerY, 50, colors.primary);
      createRipple(centerX, centerY, 100, colors.secondary, 0.2);
      createSurfaceDisturbance(centerX, centerY, 1);
    }, null, 0.3);

    // Enhanced letter emergence
    letters.forEach((letter, i) => {
      const letterRect = letter.getBoundingClientRect();
      const letterX = letterRect.left - containerRect.left + letterRect.width / 2;
      const letterY = letterRect.top - containerRect.top + letterRect.height / 2;
      
      tl.to(letter, {
        opacity: 1,
        y: -20,
        scale: 1.1,
        duration: 0.8,
        ease: "back.out(2)",
        onStart: () => {
          for (let j = 0; j < 3; j++) {
            setTimeout(() => {
              createDroplet(letterX + (Math.random() - 0.5) * 20, letterY);
            }, j * 100);
          }
          createRipple(letterX, letterY, 30, colors.primary, 0.1);
        }
      }, i * 0.07);
      
      tl.to(letter, {
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      }, i * 0.07 + 0.6);
    });

    // Final waves
    tl.call(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createRipple(
            centerX + (Math.random() - 0.5) * 180,
            centerY + (Math.random() - 0.5) * 100,
            40,
            i % 2 === 0 ? colors.primary : colors.secondary
          );
        }, i * 200);
      }
    }, null, "+=0.5");

    // Grand finale
    tl.to({}, {
      duration: 1,
      onComplete: () => {
        createRipple(centerX, centerY, 80, colors.accent);
        createSurfaceDisturbance(centerX, centerY, 2);
      }
    });

  }, [animationStage]);

  // ULTRA-CLEAN TITLE WITH SMOOTH TRANSITIONS
  const createCleanTitle = () => {
    const titleContainer = titleRef.current;
    if (!titleContainer) return;

    titleContainer.innerHTML = '';
    
    const titleClean = document.createElement('div');
    titleClean.className = 'title-clean-container';
    titleClean.style.cssText = `
      opacity: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.6em;
      width: 100%;
    `;

    const bitafricaWord = document.createElement('div');
    bitafricaWord.className = 'word-bitafrica-clean';
    bitafricaWord.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `;

    const aiWord = document.createElement('div');
    aiWord.className = 'word-ai-clean';
    aiWord.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `;

    // Enhanced BITAFRICA letters
    "BITAFRICA".split('').forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char-clean';
      charSpan.textContent = char;
      charSpan.style.cssText = `
        display: inline-block;
        color: ${colors.primary};
        font-weight: 900;
        font-size: clamp(2.8rem, 8vw, 5rem);
        letter-spacing: 0.15em;
        margin: 0 0.03em;
        opacity: 0;
        position: relative;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-shadow: 0 0 30px ${colors.primary}40;
      `;
      bitafricaWord.appendChild(charSpan);
    });

    // Enhanced AI letters
    "AI".split('').forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char-clean';
      charSpan.textContent = char;
      charSpan.style.cssText = `
        display: inline-block;
        color: ${colors.secondary};
        font-weight: 900;
        font-size: clamp(2.8rem, 8vw, 5rem);
        letter-spacing: 0.15em;
        margin: 0 0.03em;
        opacity: 0;
        position: relative;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        text-shadow: 0 0 30px ${colors.secondary}40;
      `;
      aiWord.appendChild(charSpan);
    });

    const space = document.createElement('div');
    space.style.cssText = `width: 1em; height: 1px;`;

    titleClean.appendChild(bitafricaWord);
    titleClean.appendChild(space);
    titleClean.appendChild(aiWord);
    titleContainer.appendChild(titleClean);

    const chars = titleClean.querySelectorAll('.char-clean');
    
    const tl = gsap.timeline();
    
    // Ultra-smooth title reveal
    tl.to(titleClean, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power4.out"
    })
    .from(chars, {
      y: 10,
      opacity: 0,
      scale: 0.8,
      rotationY: 10,
      duration: 0.8,
      stagger: {
        each: 0.04,
        from: "center",
        ease: "back.out(1.7)"
      }
    }, '-=0.6');
  };

  // Enhanced Subtitle Animation
  useEffect(() => {
    if (animationStage !== 'final') return;
    
    const subtitle = "Transforming Africa with Intelligent Solutions";
    const subtitleContainer = subtitleRef.current;
    
    if (!subtitleContainer) return;
    
    subtitleContainer.innerHTML = '';
    
    const subtitleEl = document.createElement('div');
    subtitleEl.className = 'subtitle-container';
    subtitleEl.textContent = subtitle;
    
    subtitleContainer.appendChild(subtitleEl);
    
    gsap.from(subtitleEl, {
      duration: 1.5,
      y: 30,
      opacity: 0,
      scale: 0.9,
      delay: 0.5,
      ease: "power4.out"
    });
  }, [animationStage]);

  // Enhanced Floating Orbs
  const FloatingOrbs = () => {
    const orbs = useRef([]);
    
    useEffect(() => {
      const icons = [Brain, Cpu, Globe, Shield, Code, Network];
      const orbElements = orbs.current;
      
      orbElements.forEach((orb, i) => {
        if (orb) {
          const radius = 150 + i * 25;
          const speed = 0.3 + i * 0.08;
          
          gsap.to(orb, {
            rotation: 720,
            duration: 40 / speed,
            repeat: -1,
            ease: "none"
          });
          
          gsap.to(orb, {
            x: `+=${radius * 1.2}`,
            duration: 20 / speed,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
          
          gsap.to(orb, {
            y: `+=${radius * 0.5}`,
            duration: 15 / speed,
            repeat: -1,
            yoyo: true,
            delay: i * 0.5,
            ease: "sine.inOut"
          });
          
          gsap.to(orb, {
            boxShadow: `0 0 30px ${colors.glow}`,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });
    }, []);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Brain, Cpu, Globe, Shield, Code, Network].map((Icon, i) => (
          <div
            key={i}
            ref={el => orbs.current[i] = el}
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${colors.primary}20, transparent 70%)`,
              transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(150px)`,
              filter: 'blur(1px)',
              zIndex: 2,
              opacity: animationStage === 'splash' ? 0 : 1,
              transition: 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              border: `1px solid ${colors.primary}30`
            }}
          >
            <Icon className="h-8 w-8 text-white" />
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, ${colors.secondary}25, transparent 70%)`,
                filter: 'blur(10px)',
                animationDuration: `${3 + i}s`
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  // Enhanced Data Stream
  const DataStream = () => {
    const streamRef = useRef(null);
    
    useEffect(() => {
      const stream = streamRef.current;
      if (!stream) return;
      
      const streams = [];
      
      for (let i = 0; i < 15; i++) {
        const streamElement = document.createElement('div');
        streamElement.className = 'data-stream absolute font-mono text-xs font-bold tracking-wider';
        streamElement.style.left = `${(i / 15) * 100}%`;
        streamElement.style.top = '-100px';
        streamElement.style.color = i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent;
        streamElement.style.opacity = animationStage === 'splash' ? 0.1 : 0.25;
        streamElement.style.transition = 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        streamElement.style.zIndex = '1';
        streamElement.style.fontSize = '0.75rem';
        streamElement.style.textShadow = `0 0 10px currentColor`;
        
        let content = '';
        const wordsInStream = 3;
        for (let j = 0; j < wordsInStream; j++) {
          const randomTerm = techTerms[Math.floor(Math.random() * techTerms.length)];
          content += randomTerm + ' • ';
        }
        streamElement.textContent = content.trim();
        
        stream.appendChild(streamElement);
        
        gsap.to(streamElement, {
          y: window.innerHeight + 200,
          duration: 15 + Math.random() * 8,
          ease: "none",
          repeat: -1,
          delay: Math.random() * 4,
          onRepeat: () => {
            let newContent = '';
            for (let j = 0; j < wordsInStream; j++) {
              const randomTerm = techTerms[Math.floor(Math.random() * techTerms.length)];
              newContent += randomTerm + ' • ';
            }
            streamElement.textContent = newContent.trim();
          }
        });
      }
    }, [animationStage]);
    
    return <div ref={streamRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
  };

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Master initialization
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(heroRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      onComplete: () => setIsLoaded(true)
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[70vh] overflow-hidden"
      style={{ 
        opacity: 0,
        background: `
          radial-gradient(ellipse at 20% 20%, ${colors.secondary}15 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, ${colors.primary}10 0%, transparent 50%),
          linear-gradient(160deg, ${colors.backgroundDark} 0%, ${colors.backgroundLight} 50%, #1e293b 100%)
        `
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <DataStream />
      
      {/* Enhanced Grid Floor */}
      <div 
        ref={gridRef}
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{
          background: `linear-gradient(to top, ${colors.backgroundDark}ee, transparent)`,
          perspective: '800px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${colors.primary}10 1px, transparent 1px),
              linear-gradient(${colors.primary}10 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            transform: 'rotateX(75deg) translateZ(-150px)',
            transformOrigin: 'center bottom',
            animation: 'gridFloat 20s linear infinite'
          }}
        />
      </div>
      
      <FloatingOrbs />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto text-center">
        
          {/* Enhanced Holographic Badge */}
          <div 
            className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-cyan-500/40 mb-8 sm:mb-10 overflow-hidden group"
            style={{
              opacity: animationStage === 'splash' ? 0 : 1,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s',
              transform: animationStage === 'splash' ? 'translateY(20px)' : 'translateY(0)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Zap className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-cyan-300 mr-2 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent tracking-widest">
              HOLOGRAPHIC AI LAUNCHPAD
            </span>
          </div>
          
          {/* Water Splash Container */}
          <div 
            ref={splashContainerRef}
            className="mb-6 sm:mb-8 min-h-[160px] flex items-center justify-center"
            style={{
              opacity: animationStage === 'splash' ? 1 : 0,
              pointerEvents: animationStage === 'splash' ? 'auto' : 'none',
              position: animationStage === 'splash' ? 'relative' : 'absolute'
            }}
          />
          
          {/* Clean Title Container */}
          <div 
            ref={titleRef}
            className="mb-6 sm:mb-8 min-h-[120px] flex items-center justify-center w-full"
          />
          
          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-8 sm:mb-10" />
          
          {/* Enhanced Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10"
            style={{
              opacity: animationStage === 'final' ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s',
              transform: animationStage === 'final' ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {[
              { value: "99.9%", label: "Neural Accuracy", color: colors.primary },
              { value: "500+", label: "AI Deployments", color: colors.secondary },
              { value: "24/7", label: "Uptime Support", color: colors.accent },
              { value: "98%", label: "Client Satisfaction", color: colors.glow }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}60`
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300/90 font-medium tracking-wider px-2">{stat.label}</div>
                <div 
                  className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"
                  style={{ color: stat.color }}
                />
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12"
            style={{
              opacity: animationStage === 'final' ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s',
              transform: animationStage === 'final' ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <button className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: colors.gradientPrimary,
                  opacity: 0.95
                }}
              />
              <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-accent-400 opacity-0 group-hover:opacity-80 transition-opacity duration-700"
                style={{ filter: 'blur(12px)' }}
              />
              <span className="relative z-10 flex items-center justify-center text-white font-bold text-base sm:text-lg tracking-wider">
                <Rocket className="mr-2 h-4.5 w-4.5 sm:h-5 sm:w-5 group-hover:rotate-45 transition-transform duration-500" />
                INITIATE DEPLOYMENT
                <ArrowRight className="ml-2 h-4.5 w-4.5 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>
            
            <button className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border-2 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div 
                className="absolute inset-0 rounded-2xl border-2"
                style={{
                  borderImage: colors.gradientSecondary + ' 1',
                  background: 'rgba(15, 23, 42, 0.7)'
                }}
              />
              <span className="relative z-10 flex items-center justify-center font-bold text-base sm:text-lg tracking-wider"
                style={{
                  background: colors.gradientSecondary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <Terminal className="mr-2 h-4.5 w-4.5 sm:h-5 sm:w-5" />
                ACCESS TERMINAL
              </span>
            </button>
          </div>
          
          {/* Enhanced Tech Stack */}
          <div 
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-cyan-500/30"
            style={{
              opacity: animationStage === 'final' ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s',
              transform: animationStage === 'final' ? 'translateY(0)' : 'translateY(50px)'
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white/95 mb-4 sm:mb-5 tracking-wider"
              style={{
                textShadow: `0 0 15px ${colors.primary}80`
              }}
            >
              INTEGRATED WITH FUTURE TECH
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { name: "TensorFlow", icon: Brain, color: colors.primary },
                { name: "PyTorch", icon: Cpu, color: colors.secondary },
                { name: "Kubernetes", icon: Globe, color: colors.accent },
                { name: "Quantum AI", icon: Shield, color: colors.glow },
                { name: "Neural Core", icon: Code, color: colors.gold }
              ].map((tech, i) => (
                <div 
                  key={i}
                  className="group relative p-3 sm:p-4 rounded-xl backdrop-blur-sm hover:scale-110 transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)`,
                    border: `1px solid ${tech.color}30`
                  }}
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <tech.icon className="h-6 w-6 sm:h-7 sm:w-7 mb-2" style={{ color: tech.color }} />
                    <span className="text-xs sm:text-sm font-medium tracking-wider" style={{ color: tech.color }}>
                      {tech.name}
                    </span>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.color}30, transparent 70%)`,
                      filter: 'blur(10px)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Interactive Prompt */}
          <div 
            className="mt-8 sm:mt-10 text-sm text-gray-300/80 tracking-wider"
            style={{
              opacity: animationStage === 'final' ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s',
              transform: animationStage === 'final' ? 'translateY(0)' : 'translateY(60px)'
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>SYSTEM READY</span>
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>AWAITING COMMANDS</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gridFloat {
          0% { transform: rotateX(75deg) translateZ(-150px) translateY(0); }
          50% { transform: rotateX(75deg) translateZ(-150px) translateY(-10px); }
          100% { transform: rotateX(75deg) translateZ(-150px) translateY(0); }
        }
        
        .title-clean-container {
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 900;
          letter-spacing: 0.15em;
          position: relative;
          width: 100%;
        }
        
        .word-bitafrica-clean,
        .word-ai-clean {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .char-clean {
          position: relative;
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .char-clean:hover {
          transform: translateY(-5px) scale(1.1);
          text-shadow: 0 0 50px currentColor;
        }
        
        .subtitle-container {
          font-size: clamp(1rem, 2.8vw, 1.6rem);
          letter-spacing: 0.2em;
          font-weight: 500;
          color: ${colors.accent};
          margin-bottom: 2rem;
          opacity: 0.95;
          padding: 0 1.5rem;
          line-height: 1.5;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 0 15px ${colors.accent}80;
        }
        
        /* Enhanced Data Stream */
        .data-stream {
          font-family: 'Courier New', monospace;
          white-space: nowrap;
          pointer-events: none;
          will-change: transform;
        }
        
        /* Smooth cursor */
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="none" stroke="${colors.primary}" stroke-width="2"/><circle cx="10" cy="10" r="2" fill="${colors.primary}"/></svg>') 10 10, auto;
        }
        
        /* Mobile responsiveness with smooth scaling */
        @media (max-width: 640px) {
          .title-clean-container {
            letter-spacing: 0.12em;
            gap: 0.4em;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .subtitle-container {
            letter-spacing: 0.12em;
            font-size: 1.1rem;
            line-height: 1.4;
            padding: 0 1rem;
          }
          
          .char-clean {
            margin: 0 0.02em;
            font-size: clamp(2.2rem, 6vw, 3.5rem);
          }
        }
        
        @media (max-width: 480px) {
          .title-clean-container {
            font-size: 2.2rem;
            letter-spacing: 0.1em;
            gap: 0.3em;
          }
          
          .subtitle-container {
            font-size: 0.95rem;
            letter-spacing: 0.1em;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .group:hover {
            transform: none !important;
          }
          
          .char-clean:hover {
            transform: none;
          }
          
          .animate-pulse {
            animation: none;
            opacity: 0.8;
          }
          
          @keyframes gridFloat {
            0% { transform: rotateX(75deg) translateZ(-150px); }
          }
        }
        
        /* Performance optimizations */
        .char-clean,
        .data-stream,
        canvas {
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;