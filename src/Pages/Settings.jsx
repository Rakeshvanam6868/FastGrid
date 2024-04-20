import React, { useRef, useState } from "react";
import { useGridSettings } from "../components/GridContext";
import { color_2x2_bg, color_3x3_bg, color_4x4_bg } from "../gridGenerate";
import { useNavigate} from "react-router";
import MainButton from "../components/MainButton";
// import {useHistory} from "react-router-dom"

const Settings = () => {
  const navigate = useNavigate();

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionType, setOptionType] = useState();

  const handleBodyClick = (event) => {
    if (optionsOpen && (event.target.id === "mainBody") ) {
      setOptionsOpen(false)
    }
  }

  return (
    <div
      className="dark:text-white flex justify-center items-center min-h-screen p-4 relative overflow-x-hidden"
      onClick={handleBodyClick}
      id="mainBody"
    >
      <div
        className="absolute top-4 left-4 p-2 rounded-full bg-blue-700 hover:scale-110"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </div>
      <div className="w-4/5 flex flex-col text-white dark:text-black">
        <MainButton
          background=" bg-red-600"
          addStyles="w-full"
          onClick={() => {
            setOptionsOpen(true);
            setOptionType("mode");
          }}
        >
          Mode
        </MainButton>
        <MainButton background="bg-yellow-400" addStyles="w-full">
          Sound
        </MainButton>
      </div>
      <div
        className={`bg-white w-3/5 h-full absolute right-0 top-0 transition-transform duration-200 dark:bg-black ${optionsOpen ? "translate-x-[0%]" : "translate-x-[100%]"} overflow-y-scroll`}
      >
        {optionType === "mode" && <ModeSelect setOptionType={setOptionType} />}
        {optionType === "customSettings" && <CustomSettings />}
      </div>
    </div>
  );
};

const ModeSelect = ({setOptionType}) => {
  const { setGameMode, setTotalTime, setGridColorList, setGridColorNo, setTotalColorNo, setGridType} = useGridSettings();
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-white dark:text-black">
      <div className="flex flex-col justify-center w-4/5">
        <MainButton
          background="bg-green-600"
          onClick={() => {
            setGameMode("classic");
            setTotalTime(30)
            setGridColorList(color_2x2_bg)
            setGridColorNo(4)
            setTotalColorNo(4)
            setGridType("grid-cols-2")
          }}
        >
          Classic
        </MainButton>
        <MainButton
          background="bg-blue-700"
          onClick={() => {
            setGameMode("custom");
            setOptionType("customSettings");
          }}
        >
          Custom
        </MainButton>
      </div>
    </div>
  );
};

const CustomSettings = () => {
  const { setGridColorList, setGridColorNo, setTotalColorNo, setTotalTime, setGridType } =
    useGridSettings();
  return (
    <div className="w-full min-h-screen flex justify-center items-center dark:text-white flex-col gap-8 max-w-[350px] mx-auto">
      <div className="w-full">
        <h3 className="text-center mb-4">Grid Type</h3>
        <div className="flex flex-col items-center">
          <MainButton
            background=" bg-orange-600"
            addStyles={"mt-0"}
            ad
            onClick={() => {
              setGridColorList(color_2x2_bg);
              setTotalColorNo(4);
              setGridColorNo(4);
              setGridType("grid-cols-2");
            }}
          >
            2 x 2
          </MainButton>
          <MainButton
            background="bg-green-600"
            onClick={() => {
              setGridColorList(color_3x3_bg);
              setTotalColorNo(9);
              setGridColorNo(7);
              setGridType("grid-cols-3");
            }}
          >
            3 x 3
          </MainButton>
          <MainButton
            background="bg-yellow-400"
            onClick={() => {
              setGridColorList(color_4x4_bg);
              setTotalColorNo(16);
              setGridColorNo(13);
              setGridType("grid-cols-4");
            }}
          >
            4 x 4
          </MainButton>
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-center text-black dark:text-white mb-4">
          Total time
        </h3>
        <div className="w-full flex flex-col items-center">
          <MainButton
            background="bg-blue-600"
            addStyles={"mt-0"}
            onClick={() => setTotalTime(30)}
          >
            30 secs
          </MainButton>
          <MainButton
            background="bg-orange-600"
            onClick={() => setTotalTime(45)}
          >
            45 secs
          </MainButton>
          <MainButton background="bg-red-600" onClick={() => setTotalTime(60)}>
            60 secs
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Settings;
