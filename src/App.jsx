import React, { useEffect, useRef } from "react";
import MyRoutes from "./components/MyRoutes.jsx";
import { useGridSettings } from "./components/GridContext.jsx";
import Gameplay from "./Pages/Gameplay.jsx";
import Timer from "./components/Timer.jsx";
import GridaleLogo from "./Loaders/GridaleLogo.jsx";
import PauseOverlay from "./components/PauseOverlay.jsx";
import Test from "./Pages/Test.jsx";

const App = () => {
  const backgroundSoundRef = useRef(null);
  const {bgSoundPlaying, setBgSoundPlaying, bgSoundRef} = useGridSettings()

  useEffect(() => {
    if (bgSoundPlaying === "false") {
      bgSoundRef.current.play();
    } else bgSoundRef.current.pause();
  }, [bgSoundPlaying]);

  return (
    <div className={`bg-slate-200 dark:bg-black min-h-screen`}>
      <MyRoutes />
      {/* <Test /> */}
      {/* <Timer /> */}
      {/* <GridaleLogo /> */}
      {/* <PauseOverlay /> */}
    </div>
  );
};

export default App;
