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

const Projects = () => {
  return (
    <div className="mb-[19vh]">
      <div className="font-[over] px-[5vw] text-[4vw] mb-5">
        ---Projects
      </div>

      <div className="grid grid-cols-3 gap-6 px-[12vw]">
        {/* First row */}
        <div className="col-span-2">
          <YouTubeEmbed videoId="TtS2CcNWxxU" />
        </div>
        <div>
          <YouTubeEmbed videoId="tQBexrTSmfA " />
        </div>

        {/* Second row */}
        <div>
          <YouTubeEmbed videoId="hxEVOypXM5M " />
        </div>
        <div>
          <YouTubeEmbed videoId="M7lc1UVf-VE" />
        </div>
        <div>
          <YouTubeEmbed videoId="eVTXPUF4Oz4" />
        </div>

        {/* Third row */}
        <div>
          <YouTubeEmbed videoId="3JZ_D3ELwOQ" />
        </div>
        <div>
          <YouTubeEmbed videoId="ktvTqknDobU" />
        </div>
        <div>
          <YouTubeEmbed videoId="fJ9rUzIMcZQ" />
        </div>

        {/* Fourth row */}
        <div className="col-span-1">
          <YouTubeEmbed videoId="L_jWHffIx5E" />
        </div>
        <div className="col-span-2">
          <YouTubeEmbed videoId="sNPnbI1arSE" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
