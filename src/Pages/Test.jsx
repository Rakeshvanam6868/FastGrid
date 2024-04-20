import React from "react";
import { Howl } from "howler";
import MainButton from "../components/MainButton";

const Test = () => {
  const interfaceSound = new Howl({
    src: ["/../../public/Sounds/interfaceWav.wav"],
    onplayerror: (error) => {
      console.error(error);
    //   interfaceSound.once("unlock", () => interfaceSound.play());L
    },
    preload: true,
    onloaderror: (id, error) => {
      console.error("Error loading sound:", error, id);
    },
    volume: 1,
  });

  const handlePlay = () => {
    interfaceSound.play()
  }

  return (
    <div>
      <div className="dark:text-white">Test</div>
      <MainButton background={"bg-blue-700"} onClick={handlePlay}>
        Play
      </MainButton>
    </div>
  );
};

export default Test;
