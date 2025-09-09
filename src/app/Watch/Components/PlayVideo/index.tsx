const PlayVideo = () => {
  return (
    <iframe
      className="w-full border-[3px] border-[#A78D4F] h-full"
      src="https://www.youtube.com/embed/p42ZnQ8UmxE"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
    />
  );
};
export default PlayVideo;
