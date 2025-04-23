import { motion} from "framer-motion";
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
  

const Skills = () => {
  return (
    <>
    <div className="mb-[15vw]">
    <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
    className="font-[over] px-[5vw] text-[4vw] mb-5">
        ---Skills 
      
    </motion.div>
    <div>
    <div className="flex flex-col md:flex-row px-[7vw] gap-[4vw]">
        <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: 'easeIn' }}  
        className="w-full flex-wrap aspect-video bg-gray-300 rounded-3xl flex items-center justify-center text-gray-600 text-lg">
        <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </motion.div>

        <div className="items-center justify-center">
            <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
            className="mb-5 font-[Hatten] text-4xl">
                Tools
            </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
        className="flex flex-wrap gap-4 font-[oswald] md:text-[1.2vw] ">
            <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
                Adobe After Effects
            </div>
            <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
                Davinci Resolve
            </div>
            <div className="border border-black  px-4 py-2 rounded-full hover:bg-black hover:text-white">
                VN
            </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
        className="my-7     font-[Hatten] text-4xl">
                Video-Editing Skills
            </motion.div>
            <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
            className="flex flex-wrap gap-4 font-[oswald] md:text-[1.2vw]">
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Motion-Graphics</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Text Work</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Color Grading</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Sync & Speed</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Animation</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Motion Tracking</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Green Screen</div>
            </motion.div>
        
        </div>
    </div>
    </div>
    </div>
    </>


  )
}

export default Skills
