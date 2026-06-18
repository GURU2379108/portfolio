import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

/* ───────────── animation variants ───────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ───────────── floating orb component ───────────── */
const FloatingOrb = ({ size, x, y, delay, duration, color }) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
    }}
    animate={{
      y: [0, -40, 0, 40, 0],
      x: [0, 30, -30, 20, 0],
      scale: [1, 1.15, 0.9, 1.1, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut',
    }}
  />
);

/* ───────────── floating particle component ───────────── */
const Particle = ({ index }) => {
  const size = Math.random() * 4 + 2;
  const left = `${Math.random() * 100}%`;
  const animDuration = `${Math.random() * 8 + 6}s`;
  const animDelay = `${Math.random() * 5}s`;

  return (
    <span
      key={index}
      className="absolute rounded-full bg-white/20 animate-[floatUp_linear_infinite]"
      style={{
        width: size,
        height: size,
        left,
        bottom: '-10px',
        animation: `floatUp ${animDuration} ${animDelay} linear infinite`,
      }}
    />
  );
};

/* ───────────── typewriter hook ───────────── */
const useTypewriter = (text, speed = 55, startDelay = 1200) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let timeout;

    const start = setTimeout(() => {
      const tick = () => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i < text.length) {
          timeout = setTimeout(tick, speed);
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return displayed;
};

/* ━━━━━━━━━━━━━━━ HERO COMPONENT ━━━━━━━━━━━━━━━ */
const Hero = () => {
  const subtitle = useTypewriter(
    'Data Scientist | Machine Learning Engineer | Generative AI Developer'
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"
    >
      {/* ── CSS keyframes injected once ── */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50%      { opacity: 0.07; }
        }
      `}</style>

      {/* ── grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridPulse 8s ease-in-out infinite',
        }}
      />

      {/* ── floating orbs ── */}
      <FloatingOrb size={340} x="10%" y="15%" delay={0} duration={14} color="rgba(99,102,241,0.35)" />
      <FloatingOrb size={260} x="70%" y="60%" delay={2} duration={18} color="rgba(168,85,247,0.30)" />
      <FloatingOrb size={200} x="50%" y="10%" delay={4} duration={16} color="rgba(236,72,153,0.25)" />
      <FloatingOrb size={180} x="85%" y="20%" delay={1} duration={20} color="rgba(59,130,246,0.25)" />
      <FloatingOrb size={150} x="25%" y="75%" delay={3} duration={15} color="rgba(139,92,246,0.30)" />

      {/* ── floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* ── radial glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* ━━━ main content ━━━ */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* social icons */}
        <motion.div className="flex justify-center gap-5 mb-8" variants={childVariants}>
          <a
            href="https://github.com/GURU2379108"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/gurudas-kadam-714996322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform"
          >
            <FaLinkedin size={26} />
          </a>
        </motion.div>

        {/* profile photo */}
        <motion.div className="flex justify-center mb-6" variants={childVariants}>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <img 
              src="/images/profile_photo.png" 
              alt="Gurudas Sunil Kadam" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 object-cover shadow-2xl z-10"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/160/1e1b4b/ffffff?text=GK';
              }}
            />
          </div>
        </motion.div>

        {/* greeting */}
        <motion.p
          className="text-indigo-400 font-mono text-sm md:text-base tracking-widest uppercase mb-4"
          variants={childVariants}
        >
          Hello, I&apos;m
        </motion.p>

        {/* name – animated gradient */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight"
          variants={childVariants}
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite] bg-[length:200%_200%]">
            Gurudas Sunil Kadam
          </span>
          <style>{`
            @keyframes gradientShift {
              0%   { background-position: 0% 50%; }
              50%  { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </motion.h1>

        {/* typewriter subtitle */}
        <motion.div className="h-8 mb-8" variants={childVariants}>
          <p className="text-lg md:text-xl text-purple-300/80 font-light tracking-wide">
            {subtitle}
            <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* glassmorphism intro card */}
        <motion.div
          className="relative mx-auto max-w-2xl mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-indigo-500/10"
          variants={childVariants}
        >
          {/* decorative corner accents */}
          <span className="absolute top-0 left-0 h-8 w-8 rounded-tl-2xl border-t-2 border-l-2 border-indigo-500/40" />
          <span className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-purple-500/40" />

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Passionate AI Developer specializing in{' '}
            <span className="text-indigo-400 font-medium">Machine Learning</span>,{' '}
            <span className="text-purple-400 font-medium">Deep Learning</span>,{' '}
            <span className="text-pink-400 font-medium">LLMs</span>,{' '}
            <span className="text-indigo-400 font-medium">RAG Systems</span>,{' '}
            <span className="text-purple-400 font-medium">Agentic AI</span>, and{' '}
            <span className="text-pink-400 font-medium">Data Science</span>.
            I build intelligent applications that solve real-world problems.
          </p>
        </motion.div>

        {/* CTA buttons – staggered */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-60}
              className="group relative inline-flex items-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
            >
              <HiDownload className="text-lg" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-60}
              className="group relative inline-flex items-center gap-2 cursor-pointer rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm px-7 py-3 text-sm font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:scale-105"
            >
              <HiEnvelope className="text-lg" />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll-down indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          variants={childVariants}
        >
          <Link
            to="about"
            smooth
            duration={600}
            offset={-60}
            className="cursor-pointer group"
          >
            <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-300">
              Scroll Down
            </span>
            <motion.div
              className="mt-2 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HiArrowDown className="text-2xl text-indigo-400/70" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
