import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Button,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { render } from "react-dom";
import ReactAudioPlayer from "react-audio-player";

import { FiPlay } from "react-icons/fi";
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
