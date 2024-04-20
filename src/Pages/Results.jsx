import React, { useEffect, useRef, useState } from "react";
import MainButton from "../components/MainButton";
import { useNavigate } from "react-router";
import { useGridSettings } from "../components/GridContext";
import { apprentice } from "../assets/Badges/apprentice.jsx";
import { junior } from "../assets/Badges/junior.jsx";
import { journeyman } from "../assets/Badges/journeyman.jsx";
import { master } from "../assets/Badges/master.jsx";
import { senior } from "../assets/Badges/senior.jsx";

const Results = () => {
  const navigate = useNavigate();
  const {totalClicks, totalCorrectClicks, totalTime} = useGridSettings()
  const accuracy = (parseInt(totalCorrectClicks) / parseInt(totalClicks)) * 100
  const speed = (parseFloat(totalCorrectClicks) / parseInt(totalTime))
  const rank = (((speed > 5 ? 100 : (speed/5) * 100) * 0.8) + (accuracy * 0.2)) 

  let ranking
  let badge

  if (rank) {
    if (rank <= 20) {
    ranking = "Junior"
    badge = junior
  } else if(rank <= 40) {
    ranking = "Apprentice"
    badge = apprentice
  } else if(rank <= 60) {
    ranking = "Journeyman"
    badge = journeyman
  } else if(rank <= 80) {
    ranking = "Senior"
    badge = senior
  } else {
    ranking = "Master"
    badge = master
  } 
  } else badge = junior
  

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div
        className="h-10 w-10 p-2 bg-orange-500 rounded-full hover:scale-110 fixed top-4 right-4"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-full h-full text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <div className="w-4/5 ">{badge}</div>
      <div className="w-full p-2 flex flex-col items-center gap-2">
        <p className="dark:text-white ">
          {`Accuracy: ${accuracy ? accuracy.toFixed(2) + "%" : "0%"}`}
        </p>
        <p className="dark:text-white">
          {`Speed: ${
            speed ? speed.toFixed(2) + " clicks/sec" : "0 clicks/sec"
          }`}
        </p>
        <p className="dark:text-white">
          {`Rank: ${rank ? " Grid " + ranking : "No rank"}`}
        </p>
        <MainButton
          background={"bg-yellow-400"}
          onClick={() => navigate("/game")}
        >
          Play Again
        </MainButton>
      </div>
    </div>
  );
};

export default Results;
