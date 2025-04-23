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

const HeroSection = () => {
  return (
    <div className="mb-[19vh]">
    <div className="p-[2vw] px-[4vw] font-[Oswald] flex gap-[2vw] flex-row justify-end text-gray-800 text-[2vw]">
        <div className=" hover:underline hover:text-black">
            About Me
        </div>
        <div className=" hover:underline hover:text-black">
            Skills
        </div>
        <div className=" hover:underline hover:text-black">
            Projects
        </div>
        <div className=" hover:underline hover:text-black">
            Contact me
        </div>
    </div>

    <div className="font-[over] text-[13vw] justify-center flex mt-10">
        VIDEO-EDITOR
    </div>

    <div className="flex flex-row px-[10vw] gap-[4vw]">
        <div className="w-full flex-1 aspect-video bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-lg">
        <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </div>
        <div className="flex flex-1 font-[oswald] text-[1.2vw] items-center">
        My name is Nikhil Dhanda, and I am a professional video editor with over three years of experience.
I specialize in a wide range of video formats, from short-form content to long-form productions. My expertise spans various editing styles and platforms, allowing me to deliver high-quality, engaging videos tailored to your needs. I offer a variety of service packages, each designed to provide flexible options and incorporate a diverse set of skills to suit different project requirements.
        </div>
    </div>

    </div>
  )
}

export default HeroSection
