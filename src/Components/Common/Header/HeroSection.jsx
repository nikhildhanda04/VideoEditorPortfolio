import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="w-full h-full aspect-video">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rotatingPhrases = [
  "potential they deserve!",
  "the perfect target audience!",
  "maximum engagement!",
  "viral success!",
];

const rotateVariant = {
  initial: {
    opacity: 0,
    rotateY: 90,
    scale: 0.8,
    filter: "blur(2px)",
    color: "#fde047",
    textShadow: "0px 8px 24px rgba(0,0,0,0.15)",
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1.1,
    filter: "blur(0px)",
    color: "#facc15",
    textShadow: "0px 8px 32px rgba(0,0,0,0.25)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
    filter: "blur(2px)",
    color: "#fde047",
    textShadow: "0px 8px 24px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.5,
      ease: [0.55, 0, 0.55, 0.2],
    },
  },
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-[20vw] md:mb-[10vw] relative">
      <div className="relative z-10 p-[2vw] px-[4vw] font-[Oswald] flex gap-[0.8vw] flex-row justify-end text-gray-800 text-[2vw]">
        <span id="welcome-span">Welcome! I make your videos reach the&nbsp;</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={phraseIndex}
            className="text-yellow-500 font-semibold inline-block"
            variants={rotateVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ minWidth: "16ch" }}
          >
            {rotatingPhrases[phraseIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <svg
        className="absolute pointer-events-none"
        style={{
          left: "28vw",
          top: "4vw",
          width: "38vw",
          height: "11vw",
          zIndex: 5,
          transform: "scaleX(-1)",
        }}
        viewBox="0 0 380 160"
        fill="none"
      >
        <path
          d="
            M370 130
            Q320 60 270 100
            Q230 130 200 70
            Q170 10 100 60
            Q40 110 20 40
          "
          stroke="#facc15"
          strokeWidth="4"
          strokeDasharray="6 10"
          fill="none"
          markerEnd="url(#arrowhead)"
          filter="url(#cartoon-glow)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="16"
            markerHeight="16"
            refX="8"
            refY="8"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M3,3 L13,8 L3,13 Q6,8 3,3" fill="#facc15" stroke="#facc15" strokeLinejoin="round"/>
          </marker>
          <filter id="cartoon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fde047" floodOpacity="0.7"/>
          </filter>
        </defs>
      </svg>

      <motion.div
        className="font-[over] text-[13vw] justify-center flex mt-10 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <span>
          <span style={{ position: "relative", zIndex: 20 }}>VI</span>
          <span style={{ position: "relative", zIndex: 20 }}>DEO-EDITOR</span>
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row px-[10vw] gap-[4vw]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className="w-full flex-1 aspect-video bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-lg"
        >
          <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </motion.div>

        <div className="flex-1 font-[oswald] md:text-[1.7vw] leading-relaxed" ref={ref}>
          <motion.span variants={fadeInUp} initial="hidden" animate={controls}>
            My name is{" "}
            <motion.span
              variants={fadeInUp}
              className="text-yellow-400 font-semibold"
              animate={{
                textShadow: [
                  "0px 0px 0px #facc15",
                  "0px 0px 2px #facc15",
                  "0px 0px 0px #facc15"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
            >
              Nikhil Dhanda
            </motion.span>
            , and I am a{" "}
            <motion.span
              variants={fadeInUp}
              className="text-yellow-400 font-semibold"
              animate={{
                textShadow: [
                  "0px 0px 0px #facc15",
                  "0px 0px 2px #facc15",
                  "0px 0px 0px #facc15"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
            >
              professional video editor
            </motion.span>{" "}
            with over{" "}
            <motion.span
              variants={fadeInUp}
              className="text-yellow-400 font-semibold"
              animate={{
                textShadow: [
                  "0px 0px 0px #facc15",
                  "0px 0px 2px #facc15",
                  "0px 0px 0px #facc15"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
            >
              three years of experience
            </motion.span>
            . I specialize in a wide range of video formats, from short-form content to long-form productions. My expertise
            spans various editing styles and platforms, allowing me to deliver{" "}
            <motion.span
              variants={fadeInUp}
              className="text-yellow-400 font-semibold"
              animate={{
                textShadow: [
                  "0px 0px 0px #facc15",
                  "0px 0px 2px #facc15",
                  "0px 0px 0px #facc15"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
            >
              high-quality, engaging videos
            </motion.span>{" "}
            tailored to your needs.
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;