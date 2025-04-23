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
    <div className="mb-[4vw]">
    <div className="font-[over] px-[5vw] text-[4vw] mb-5">
        ---Skills 
      
    </div>
    <div>
    <div className="flex flex-row px-[7vw] gap-[4vw]">
        <div className="w-full flex-wrap aspect-video bg-gray-300 rounded-3xl flex items-center justify-center text-gray-600 text-lg">
        <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </div>

        <div className="items-center justify-center">
            <div className="mb-5 font-[Hatten] text-4xl">
                Tools
            </div>
        <div className="flex flex-wrap gap-4 font-[oswald] text-[1.2vw] ">
            <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
                Adobe After Effects
            </div>
            <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
                Davinci Resolve
            </div>
            <div className="border border-black  px-4 py-2 rounded-full hover:bg-black hover:text-white">
                VN
            </div>
        </div>

        <div className="my-7     font-[Hatten] text-4xl">
                Video-Editing Skills
            </div>
            <div className="flex flex-wrap gap-4 font-[oswald] text-[1.2vw]">
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Motion-Graphics</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Text Work</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Color Grading</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Sync & Speed</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Animation</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Motion Tracking</div>
                <div className="border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Green Screen</div>
            </div>
        
        </div>
    </div>
    </div>
    </div>
    </>


  )
}

export default Skills
