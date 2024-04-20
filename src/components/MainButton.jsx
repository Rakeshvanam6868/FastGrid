import React from 'react'

const MainButton = ({children, background, addStyles, onClick}) => {
  return (
    <button className= {`px-[1.5rem] py-[1rem] mt-8 w-4/5 rounded-xl text-lg font-bold hover:scale-110 ${background} text-white dark:text-black ${addStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default MainButton
