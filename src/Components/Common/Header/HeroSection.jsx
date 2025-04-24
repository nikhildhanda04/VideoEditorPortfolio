import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
  
const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <div className="mb-[20vw] md:mb-[10vw]">
      <div className="p-[2vw] px-[4vw] font-[Oswald] flex gap-[2vw] flex-row justify-end text-gray-800 text-[2vw]">
        <span>Welcome! I make your videos reach the {""} </span>{""}<span className="text-yellow-500 font-semibold">potential they deserve!</span>
      </div>

      <motion.div 
      className="font-[over] text-[13vw] justify-center flex mt-10"
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        VIDEO-EDITOR
      </motion.div>

      <div className="flex flex-col md:flex-row px-[10vw] gap-[4vw]">
        <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
        className="w-full flex-1 aspect-video bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-lg">
          <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </motion.div>

        <div className="flex-1 font-[oswald]     md:text-[1.7vw] leading-relaxed" ref={ref}>
      <motion.span variants={fadeInUp} initial="hidden" animate={controls}>
        My name is{" "}
        <motion.span variants={fadeInUp} className="text-yellow-400 font-semibold">
          Nikhil Dhanda
        </motion.span>
        , and I am a{" "}
        <motion.span variants={fadeInUp} className="text-yellow-400 font-semibold">
          professional video editor
        </motion.span>{" "}
        with over{" "}
        <motion.span variants={fadeInUp} className="text-yellow-400 font-semibold">
          three years of experience
        </motion.span>
        . I specialize in a wide range of video formats, from short-form content to long-form productions. My expertise
        spans various editing styles and platforms, allowing me to deliver{" "}
        <motion.span variants={fadeInUp} className="text-yellow-400 font-semibold">
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
