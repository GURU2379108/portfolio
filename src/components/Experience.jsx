import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

const timelineData = [
  {
    year: "2023",
    title: "Started BCA at Shivaji University",
    icon: FaGraduationCap,
    points: [
      "Began learning programming fundamentals",
      "Python, C, Java basics",
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    year: "2024",
    title: "Machine Learning Journey",
    icon: FaCode,
    points: [
      "Learned ML algorithms: KNN, SVM, Random Forest",
      "Built first ML projects",
      "Explored Data Analysis with Pandas & NumPy",
    ],
    gradient: "from-purple-500 to-pink-400",
  },
  {
    year: "2024",
    title: "Deep Learning & NLP",
    icon: FaBrain,
    points: [
      "Mastered LSTM, GRU, TensorFlow",
      "Built Text Emotion Detector",
      "Built Next Word Prediction System",
    ],
    gradient: "from-pink-500 to-rose-400",
  },
  {
    year: "2025",
    title: "Generative AI & LLMs",
    icon: FaRobot,
    points: [
      "Explored LangChain, RAG, Agentic AI",
      "Built PDF RAG Chat Application",
      "Data Science Course at Technogeek Institute Pune",
    ],
    gradient: "from-amber-500 to-orange-400",
  },
  {
    year: "2025",
    title: "Present",
    icon: FaRocket,
    points: [
      "Building AI-powered applications",
      "Exploring Advanced Agentic AI",
      "Continuous learning and growth",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function TimelineCard({ item, index }) {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      className={`relative flex w-full items-center ${
        isLeft
          ? "md:flex-row flex-row"
          : "md:flex-row-reverse flex-row"
      }`}
    >
      {/* Card */}
      <motion.div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:pr-12 pl-12 md:pl-0" : "md:pl-12 pl-12"
        }`}
        variants={cardVariants}
        initial={isLeft ? "hiddenLeft" : "hiddenRight"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5">
          {/* Year badge */}
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.gradient} px-4 py-1.5 text-sm font-bold text-white shadow-lg`}
          >
            <Icon className="text-base" />
            {item.year}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">
            {item.title}
          </h3>

          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${item.gradient}`}
                />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Center dot — visible on all screens */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
        <motion.div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br ${item.gradient} shadow-lg`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        >
          <Icon className="text-sm text-white" />
        </motion.div>
      </div>

      {/* Empty spacer for the other side */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            My Journey
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            From learning the basics to building AI‑powered applications — a
            timeline of growth and exploration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 h-full w-0.5 md:-translate-x-1/2">
            {/* Track */}
            <div className="h-full w-full rounded-full bg-white/5" />
            {/* Filled portion */}
            <motion.div
              className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              style={{ scaleY }}
            />
          </div>

          <div className="relative space-y-16">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
