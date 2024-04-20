import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Theme from "../components/Theme";
import GridaleLoader from "../Loaders/GridaleLoader";
import Raki from "../assets/Rakesh.png";
import MainButton from "../components/MainButton";
import { useGridSettings } from "../components/GridContext";
import Sound from "../components/Sound";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="ml-auto flex gap-2 w-fit items-center">
        <Sound />
        <Theme />
      </div>
      <GridaleLoader />
      <div className="flex flex-col justify-center items-center">
        <MainButton
          background="bg-yellow-400"
          onClick={() => {
            navigate("/game");
          }}
        >
          Play
        </MainButton>

        <MainButton
          background="bg-blue-700"
          onClick={() => navigate("/settings")}
        >
          Settings
        </MainButton>

        <MainButton background="bg-red-700" onClick={() => navigate("/about")}>
          About
        </MainButton>
      </div>
      <div className="flex gap-4 justify-center items-center mt-10">
        <p className="text-xs dark:text-white text-center ">
          Developed by Rakesh
        </p>
        <div className="w-6 h-6 inline-block rounded-sm dark:border-2 dark:border-white">
          <img src={Raki} alt="Rakesh" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
