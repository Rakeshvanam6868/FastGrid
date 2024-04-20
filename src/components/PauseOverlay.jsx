import React from 'react'
import MainButton from './MainButton'
import Theme from './Theme';

const PauseOverlay = ({onCancle, onRestart, onSet}) => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-40 bg-white dark:bg-black">
      <div className="dark:bg-white w-4/5 h-3/5 rounded-2xl flex items-center justify-center flex-col bg-black relative">
        <div className="ml-auto border-2 dark:border-black rounded-full border-white mr-4 absolute top-6 right-2">
          <Theme />
        </div>
        <div className="mx-auto flex items-center justify-center flex-col w-full ">
          <MainButton background="bg-yellow-400" onClick={onRestart}>Restart</MainButton>
          <MainButton background="bg-green-700" onClick={onSet}>Settings</MainButton>
          <MainButton background="bg-red-700" addStyles="mt-0" onClick={onCancle}>
            Cancle
          </MainButton>
        </div>
      </div>
    </div>
  );
}

export default PauseOverlay
