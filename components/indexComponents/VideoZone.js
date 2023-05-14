const VideoZone = () => {
  return (
    <div className="h-96 mb-24">
      <h1 className="text-3xl font-bold text-center text-green-600 my-12">
        Une petite video pour resumer notre activite
      </h1>
      <iframe
        src="https://share.synthesia.io/embeds/videos/7ba48bb0-4745-4f9e-b085-ebdd2c34b99c"
        loading="lazy"
        title="Synthesia video player - Your AI video"
        allow="encrypted-media, fullscreen,"
        className="m-auto w-1/2 h-full mb-12 rounded-xl"
        
      />
    </div>
  );
};

export default VideoZone;
