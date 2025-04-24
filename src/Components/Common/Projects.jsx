import {motion} from "framer-motion"
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

const YouTubeShortsEmbed = ({ videoId }) => {
  return (
    <div className="w-full h-full ">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Shorts"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mb-[20vw] md:mb-[10vw]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
      className="font-[over] px-[5vw] text-[4vw] mb-5">
        ---Projects
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeIn' }}  
      className="grid grid-cols-3 gap-6 px-[12vw]">
        {/* First row */}
        <div className="col-span-2">
          <YouTubeEmbed videoId="0d_6orfjxEM " />
        </div>
        <div>
          <YouTubeShortsEmbed videoId="Siq6l9j6C5s" />
        </div>

        {/* Second row */}
        <div>
          <YouTubeEmbed videoId="eZNsqSROh9o " />
        </div>
        <div>
          <YouTubeEmbed videoId="-YOWk6NNp5g " />
        </div>
        <div>
          <YouTubeEmbed videoId="1wQ6lw2501A " />
        </div>

        {/* Third row */}

        {/* Fourth row */}
        <div className="col-span-1">
          <YouTubeShortsEmbed videoId="UbrqupLw7To" />
        </div>
        <div className="col-span-2">
          <YouTubeEmbed videoId="IFmUNaK_NiY " />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
