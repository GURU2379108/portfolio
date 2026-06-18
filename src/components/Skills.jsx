import React from 'react';
import { FaPython, FaDatabase, FaBrain, FaRobot, FaChartBar, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Programming',
    icon: FaPython,
    color: 'from-blue-500 to-cyan-400',
    glowColor: 'shadow-blue-500/40',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'Python', proficiency: 90 },
      { name: 'SQL', proficiency: 85 },
    ],
  },
  {
    name: 'Machine Learning',
    icon: FaBrain,
    color: 'from-purple-500 to-pink-400',
    glowColor: 'shadow-purple-500/40',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'KNN', proficiency: 85 },
      { name: 'Logistic Regression', proficiency: 88 },
      { name: 'SVM', proficiency: 82 },
      { name: 'Decision Tree', proficiency: 87 },
      { name: 'Random Forest', proficiency: 86 },
      { name: 'Naive Bayes', proficiency: 80 },
      { name: 'Clustering', proficiency: 83 },
    ],
  },
  {
    name: 'Deep Learning',
    icon: FaBrain,
    color: 'from-orange-500 to-red-400',
    glowColor: 'shadow-orange-500/40',
    borderColor: 'border-orange-500/30',
    skills: [
      { name: 'LSTM', proficiency: 82 },
      { name: 'GRU', proficiency: 80 },
      { name: 'TensorFlow', proficiency: 85 },
      { name: 'NLP', proficiency: 83 },
    ],
  },
  {
    name: 'Generative AI',
    icon: FaRobot,
    color: 'from-emerald-500 to-teal-400',
    glowColor: 'shadow-emerald-500/40',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'LLMs', proficiency: 88 },
      { name: 'RAG', proficiency: 85 },
      { name: 'Agentic AI', proficiency: 80 },
      { name: 'LangChain', proficiency: 86 },
      { name: 'Prompt Engineering', proficiency: 90 },
      { name: 'Vector Databases', proficiency: 82 },
    ],
  },
  {
    name: 'Data Science',
    icon: FaChartBar,
    color: 'from-yellow-500 to-amber-400',
    glowColor: 'shadow-yellow-500/40',
    borderColor: 'border-yellow-500/30',
    skills: [
      { name: 'Pandas', proficiency: 92 },
      { name: 'NumPy', proficiency: 90 },
      { name: 'Scikit-Learn', proficiency: 88 },
      { name: 'Data Analysis', proficiency: 90 },
      { name: 'Feature Engineering', proficiency: 85 },
      { name: 'EDA', proficiency: 88 },
    ],
  },
  {
    name: 'Cloud & Tools',
    icon: FaCloud,
    color: 'from-sky-500 to-indigo-400',
    glowColor: 'shadow-sky-500/40',
    borderColor: 'border-sky-500/30',
    skills: [
      { name: 'AWS', proficiency: 78 },
      { name: 'Docker', proficiency: 80 },
      { name: 'Git', proficiency: 88 },
      { name: 'Power BI', proficiency: 82 },
      { name: 'Jupyter', proficiency: 92 },
      { name: 'VS Code', proficiency: 95 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const pillContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (proficiency) => ({
    width: `${proficiency}%`,
    transition: { duration: 1.2, ease: 'easeOut', delay: 0.5 },
  }),
};

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative rounded-2xl border ${category.borderColor} bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:${category.glowColor} hover:shadow-2xl hover:bg-white/10`}
    >
      {/* Glow border effect */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      {/* Card header */}
      <div className="relative z-10 mb-5 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
        >
          <Icon className="text-2xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
      </div>

      {/* Skill pills */}
      <motion.div
        variants={pillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mb-6 flex flex-wrap gap-2"
      >
        {category.skills.map((skill) => (
          <motion.span
            key={skill.name}
            variants={pillVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 18px rgba(139,92,246,0.5)',
            }}
            className={`cursor-default rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/20 hover:text-white hover:shadow-lg`}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>

      {/* Proficiency bars */}
      <div className="relative z-10 space-y-3">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium text-white/60">
                {skill.name}
              </span>
              <span className="text-xs font-semibold text-white/80">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                variants={barVariants}
                custom={skill.proficiency}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
          >
            My Expertise
          </motion.span>
          <h2 className="mt-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            A comprehensive toolkit spanning machine learning, deep learning,
            generative AI, and modern cloud technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
