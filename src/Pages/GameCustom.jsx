import React, { useEffect, useState, useRef } from "react";
import { useGridSettings } from "../components/GridContext.jsx";
import {
  generateRandomColors,
  color_2x2_bg,
  color_3x3_bg,
  color_4x4_bg,
} from "../gridGenerate";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loaders/Loading.jsx";
import { useNavigate } from "react-router";
import Timer from "../components/Timer.jsx";

const GameCustom = () => {
  const {
    gridColorList,
    totalColorNo,
    gridColorNo,
    totalTime,
    theme,
  } = useGridSettings();

  const [started, setStarted] = useState(false);
  const [randomColorsList, setRandomColorsList] = useState(
    generateRandomColors(gridColorList, totalColorNo, gridColorNo)
  );
  const mainGridRef = useRef();
  const clicksRef = useRef(0);
  const [gridStyle, setGridStyle] = useState();
  const navigate = useNavigate();
  const timerRef = useRef();

  const [randomColors, primaryColor] = randomColorsList;

  useEffect(() => {
    if (gridColorList == color_2x2_bg) {
      setGridStyle("mainGrid-2x2");
    } else if (gridColorList == color_3x3_bg) {
      setGridStyle("mainGrid-3x3");
    } else setGridStyle("mainGrid-4x4");
  }, [gridColorList]);

  const handleGridClick = (event) => {
    const thisClasslist = event.currentTarget.classList;
    if (thisClasslist.contains(primaryColor)) {
      event.currentTarget.style.opacity = "0.5";
      if (!thisClasslist.contains("clicked")) {
        thisClasslist.add("clicked");
        clicksRef.current += 1;
      }}

    if (
      mainGridRef.current.classList.contains("mainGrid-2x2") &&
      clicksRef.current === 1
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("mainGrid-3x3") &&
      clicksRef.current === 3
    ) {
      nextGrid();
    } else if (
      mainGridRef.current.classList.contains("mainGrid-4x4") &&
      clicksRef.current === 4
    ) {
      nextGrid();
    }
  };

  const startTime = () => {
    setStarted(true);
    timerRef.current = setTimeout(() => {
      navigate("/result");
    }, totalTime * 1000);
  };

  const nextGrid = () => {
    clicksRef.current = 0;
    setRandomColorsList(
      generateRandomColors(gridColorList, totalColorNo, gridColorNo)
    );
  };

  return (
    <div>
      <h1 className={dark ? "text-white" : "text-black"}>Custom</h1>
      {started ? (
        <div>
          <Timer seconds={totalTime}></Timer>
          <div className={`w-12 h-12 mb-16 ${primaryColor}`}></div>
          <div className={`grid ${gridStyle} mx-auto `} ref={mainGridRef}>
            {randomColors.map((color) => {
              const Id = uuidv4();
              return (
                <div
                  key={Id}
                  className={`w-12 h-12 ${color} border-[1px] border-white`}
                  onClick={handleGridClick}
                ></div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            navigate("/settings");
          }}
          className="px-[1.5rem] py-[1rem] mt-8 bg-blue-600 rounded-xl w-4/5 text-lg font-bold hover:scale-110"
        >
          Settings
        </button>
        <button
          className="px-[1.5rem] py-[1rem] mt-8 bg-red-600 rounded-xl w-4/5 text-lg font-bold hover:scale-110"
          onClick={startTime}
        >
          Start
        </button>
        <button
          className="px-[1.5rem] py-[1rem] mt-8 bg-yellow-400 rounded-xl w-4/5 text-lg font-bold hover:scale-110"
          onClick={nextGrid}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// const Timer = ({ seconds }) => {
//   const [time, setTime] = useState(seconds);

//   useEffect(() => {
//     if (time <= 0) {
//       return;
//     }

//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [time]);

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   return <div>{formatTime(time)}</div>;
// };

export default GameCustom;
