import ReactAudioPlayer from "react-audio-player";

export const AudioPlayer = () => {
  const audio = localStorage.getItem("@Audio");

  return (
    <>
      {audio ? (
        <>
          <ReactAudioPlayer src={audio} autoPlay={false} controls />
        </>
      ) : (
        <>Audio indisponível</>
      )}
    </>
  );
};
