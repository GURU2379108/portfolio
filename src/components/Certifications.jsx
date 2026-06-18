import { motion } from "framer-motion";
import { FaCertificate, FaBuilding } from "react-icons/fa";

const certifications = [
  {
    title: "Data Science Course Certificate",
    institution: "Technogeek Institute Pune",
    year: "2025",
    description:
      "Comprehensive course covering ML, DL, and Data Science",
    icon: FaCertificate,
    gradient: "from-amber-500 to-orange-400",
    glow: "shadow-amber-500/20",
  },
  {
    title: "IBM Data Analysis with Python (DA0101EN)",
    institution: "IBM / Coursera",
    year: "",
    description: "Data Analysis fundamentals with Python",
    icon: FaBuilding,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/3 h-80 w-80 rounded-full bg-amber-600/8 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 h-80 w-80 rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Recognised credentials that validate my skills in Data Science and
            AI.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${cert.gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-60`}
                />

                <div
                  className={`relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-transparent group-hover:bg-white/10 group-hover:shadow-xl ${cert.glow}`}
                >
                  {/* Icon with glow */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} shadow-lg transition-shadow duration-300 group-hover:shadow-xl ${cert.glow}`}
                    >
                      <Icon className="text-2xl text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-tight text-white">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {cert.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-gray-300">
                      {cert.institution}
                    </span>
                    {cert.year && (
                      <span
                        className={`rounded-full bg-gradient-to-r ${cert.gradient} px-3 py-1 font-semibold text-white`}
                      >
                        {cert.year}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
