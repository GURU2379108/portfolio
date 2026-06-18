import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    title: 'Heart Disease Prediction Web App',
    description: 'Predicts heart disease risk using machine learning and medical data.',
    tech: ['KNN', 'Medical Dataset', 'Streamlit', 'Feature Scaling', 'One-Hot Encoding'],
    category: 'Machine Learning',
    github: 'https://github.com/GURU2379108/heart-disease-risk',
    live: 'https://github.com/GURU2379108/heart-disease-risk', // Fallback if no Streamlit URL
    image: '/images/heart_disease.png',
    accent: 'from-red-500 to-pink-500',
    glowColor: 'hover:shadow-red-500/30',
  },
  {
    title: 'Text Emotion Detector',
    description: 'Detects emotions such as Happy, Sad, Angry, and Neutral from text.',
    tech: ['Python', 'NLTK', 'Scikit-Learn', 'NLP', 'Streamlit'],
    category: 'NLP',
    github: 'https://github.com/GURU2379108/NLP-text-to-emotion-finder',
    live: 'https://github.com/GURU2379108/NLP-text-to-emotion-finder',
    image: '/images/emotion_detector.png',
    accent: 'from-yellow-500 to-orange-500',
    glowColor: 'hover:shadow-yellow-500/30',
  },
  {
    title: 'Next Word Prediction System',
    description: 'Predicts the next word in real-time using deep learning language models.',
    tech: ['LSTM', 'GRU', 'TensorFlow', 'Keras', 'Streamlit'],
    category: 'Deep Learning',
    github: 'https://github.com/GURU2379108/next-word-predictor-using-LSMT-GRU',
    live: 'https://github.com/GURU2379108/next-word-predictor-using-LSMT-GRU',
    image: '/images/next_word.png',
    accent: 'from-blue-500 to-cyan-500',
    glowColor: 'hover:shadow-blue-500/30',
  },
  {
    title: 'Netflix AI Movie Recommender',
    description: 'Recommends movies using content-based filtering and AI-powered suggestions.',
    tech: ['Streamlit', 'TF-IDF', 'Cosine Similarity', 'TMDB API'],
    category: 'Machine Learning',
    github: 'https://github.com/GURU2379108/ai-movie-recommender',
    live: 'https://github.com/GURU2379108/ai-movie-recommender',
    image: '/images/netflix_recommender.png',
    accent: 'from-red-600 to-rose-500',
    glowColor: 'hover:shadow-rose-500/30',
  },
  {
    title: 'PDF RAG Chat Application',
    description: 'Chat with uploaded PDF documents using Retrieval-Augmented Generation (RAG).',
    tech: ['LLMs', 'LangChain', 'ChromaDB', 'HuggingFace', 'Gemini', 'Streamlit'],
    category: 'Generative AI',
    github: 'https://github.com/GURU2379108/Gen-AI',
    live: 'https://github.com/GURU2379108/Gen-AI',
    image: '/images/rag_chat.png',
    accent: 'from-emerald-500 to-teal-500',
    glowColor: 'hover:shadow-emerald-500/30',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Analyzes resumes against job descriptions to provide match scores and improvement suggestions.',
    tech: ['Python', 'NLP', 'LLMs', 'Streamlit', 'PDF Parsing'],
    category: 'Generative AI',
    github: 'https://github.com/GURU2379108/Resume_Analyzer_Builder',
    live: 'https://github.com/GURU2379108/Resume_Analyzer_Builder',
    image: '/images/ai_resume_analyzer.png',
    accent: 'from-purple-500 to-indigo-500',
    glowColor: 'hover:shadow-purple-500/30',
  }
];

const categories = ['All', 'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 dark:bg-slate-950 bg-slate-50 transition-colors duration-300">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400 dark:text-gray-400 text-slate-600">
            A showcase of my recent work in AI, Machine Learning, and Full-Stack Development.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white border-slate-300 bg-white text-slate-900 focus:ring-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 dark:border-white/10 dark:bg-white/5 border-slate-200 bg-white shadow-xl ${project.glowColor}`}
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/1e1b4b/ffffff?text=Project+Image';
                    }}
                  />
                  
                  {/* Category Tag overlaid on image */}
                  <div className="absolute top-4 right-4 z-20 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-white dark:text-white text-slate-900 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm text-gray-400 dark:text-gray-400 text-slate-600">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 border border-white/5 dark:bg-white/5 dark:text-gray-300 bg-slate-100 text-slate-600 border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white text-slate-600 hover:text-slate-900"
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
