import { motion } from "framer-motion";

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

const skillList = [
  "Motion-Graphics",
  "Text Work",
  "Color Grading",
  "Sync & Speed",
  "Animation",
  "Motion Tracking",
  "Green Screen"
];
const toolsList = [
  "Adobe After Effects",
  "Davinci Resolve",
  "VN"
];

const skillItemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  })
};

const Skills = () => {
  return (
    <>
      <div className="mb-[15vw]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeIn' }}
          className="font-[over] px-[5vw] text-[4vw] mb-5"
        >
          ---Skills
        </motion.div>
        <div>
          <div className="flex flex-col md:flex-row px-[7vw] gap-[4vw]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeIn' }}
              className="w-full flex-wrap aspect-video bg-gray-300 rounded-3xl flex items-center justify-center text-gray-600 text-lg"
            >
              <YouTubeEmbed videoId="TtS2CcNWxxU" />
            </motion.div>

            <div className="items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeIn' }}
                className="mb-5 font-[Hatten] text-4xl"
              >
                Tools
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4 font-[oswald] md:text-[1.2vw]"
              >
                {toolsList.map((tool, i) => (
                  <motion.div
                    key={tool}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={skillItemVariant}
                    viewport={{ once: true }}
                    className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0px 4px 16px #fde04755"
                    }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeIn' }}
                className="my-7 font-[Hatten] text-4xl"
              >
                Video-Editing Skills
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4 font-[oswald] md:text-[1.2vw]"
              >
                {skillList.map((skill, i) => (
                  <motion.div
                    key={skill}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={skillItemVariant}
                    viewport={{ once: true }}
                    className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0px 4px 16px #fde04755"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;