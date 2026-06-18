import { motion } from 'framer-motion';
import { FaProjectDiagram, FaCogs, FaCertificate, FaGraduationCap, FaPython, FaBrain } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* ───────────── animation variants ───────────── */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ───────────── stat card data ───────────── */
const stats = [
  {
    icon: FaProjectDiagram,
    value: '5+',
    label: 'Projects',
    color: 'from-indigo-500 to-blue-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: FaCogs,
    value: '10+',
    label: 'Skills',
    color: 'from-purple-500 to-violet-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: FaCertificate,
    value: '2',
    label: 'Certifications',
    color: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
  },
];

/* ───────────── highlight pills ───────────── */
const highlights = [
  { icon: FaPython, text: 'Python', bg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  { icon: FaBrain, text: 'Machine Learning', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { icon: HiSparkles, text: 'Generative AI', bg: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
];

/* ━━━━━━━━━━━━━━━ ABOUT COMPONENT ━━━━━━━━━━━━━━━ */
const About = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* ── section heading ── */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* gradient underline */}
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
            Get to know more about my background, skills, and what drives me.
          </p>
        </motion.div>

        {/* ── two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* left column – headshot + highlight pills */}
          <motion.div className="flex flex-col items-center gap-8" variants={fadeUp}>
            {/* headshot placeholder */}
            <div className="relative group">
              {/* outer ring glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500" />

              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl border-2 border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                {/* decorative initials */}
                <span className="text-6xl font-extrabold bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent select-none">
                  GK
                </span>

                {/* overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* highlight pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {highlights.map(({ icon: Icon, text, bg }) => (
                <span
                  key={text}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${bg}`}
                >
                  <Icon className="text-base" />
                  {text}
                </span>
              ))}
            </div>

            {/* education badge */}
            <motion.div
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3"
              variants={scaleIn}
            >
              <FaGraduationCap className="text-2xl text-indigo-400" />
              <div>
                <p className="text-sm font-semibold text-white">BCA Graduate</p>
                <p className="text-xs text-gray-400">Shivaji University</p>
              </div>
            </motion.div>
          </motion.div>

          {/* right column – text & stats */}
          <div className="flex flex-col gap-8">
            {/* professional summary card */}
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-indigo-500/5"
              variants={fadeUp}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 h-6 w-6 rounded-tl-2xl border-t-2 border-l-2 border-indigo-500/40" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-purple-500/40" />

              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HiSparkles className="text-purple-400" />
                Professional Summary
              </h3>

              <p className="text-gray-300 leading-relaxed text-base mb-4">
                Analytical and detail-oriented developer skilled in{' '}
                <span className="text-indigo-400 font-medium">Python</span>,{' '}
                <span className="text-indigo-400 font-medium">SQL</span>,{' '}
                <span className="text-purple-400 font-medium">Machine Learning</span>,{' '}
                <span className="text-purple-400 font-medium">Deep Learning</span>,{' '}
                <span className="text-pink-400 font-medium">NLP</span>,{' '}
                <span className="text-pink-400 font-medium">Generative AI</span>,{' '}
                <span className="text-indigo-400 font-medium">LangChain</span>,{' '}
                <span className="text-purple-400 font-medium">RAG</span>,{' '}
                <span className="text-pink-400 font-medium">Agentic AI</span>,{' '}
                <span className="text-indigo-400 font-medium">AWS</span>,{' '}
                <span className="text-purple-400 font-medium">Docker</span>, and{' '}
                <span className="text-pink-400 font-medium">Data Visualization</span>.
              </p>

              <p className="text-gray-300 leading-relaxed text-base">
                BCA Graduate from{' '}
                <span className="text-indigo-400 font-medium">Shivaji University</span>{' '}
                with a passion for building intelligent solutions that bridge the gap
                between cutting-edge research and practical applications.
              </p>
            </motion.div>

            {/* stats cards */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              variants={sectionVariants}
            >
              {stats.map(({ icon: Icon, value, label, color, glow }) => (
                <motion.div
                  key={label}
                  className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] shadow-lg ${glow}`}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  {/* icon circle */}
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}
                  >
                    <Icon className="text-xl text-white" />
                  </div>

                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
