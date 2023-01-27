import React, { useState } from 'react';
import blocksound from "../assets/block-sound.mp3"
import goldsound from "../assets/gold-sound.mp3"
import "../assets/styles/landing.css";

const Scorebar = () => {
  return (
    <p>
      <span className="topline-mario">MARIO</span>  
      <span className="topline-world">WORLD</span>
      <span className="topline-time">TIME</span>
      <span className="bottomline-score">OOOOOO</span>
      <span className="bottomline-coin">
        <img src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Coin.gif" height="40px" alt="Coin" /> x OO
      </span>
      <span className="bottomline-world">1 - 1</span>
      <span className="bottomline-time">111</span>
    </p>
  );
};

const Cloud = () => {
  return (
    <>
      <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudSingle.gif" alt="cloud"/>
      <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudDouble.gif" alt="cloud"/>
      <img className="cloud" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/CloudTriple.gif" alt="cloud"/>
    </>
  );
};

const Skyblocks = () => {
  return (
    <>
      <img className="brick" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif" height="70px" alt="brick"/>
      <img className="brick" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/QuestionBlock.gif" height="70px" alt="question block"/>
      <img className="brick" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif" height="70px" alt="brick"/>
      <img className="brick" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Bricks.gif" height="70px" alt="brick"/>
    </>
  );
};

const Bush = () => {
  return (
    <>
      <img className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushDouble.gif" height="70px" alt="bush"/>
      <img className="bush" src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/BushSingle.gif" height="70px" alt="bush"/>
    </>
  );
};

const Mario = () => {
  return <div className="marioman"></div>;
};






const Landing = () => {

//blocks and sound
 const [isCoinClicked, setIsCoinClicked] = useState(false);
  const [isCoinClicked2, setIsCoinClicked2] = useState(false);
  const [isBoxEmpty, setIsBoxEmpty] = useState(false);
  const [sound, setSound] = React.useState(false);
  const [sound2, setSound2] = React.useState(false);

  let blockAudio = null;
  let goldAudio = null;

  const handleClick = () => {
    setIsBoxEmpty(true);
    console.log(isCoinClicked);
    if (isCoinClicked) {
      // play block sound
      console.log("clicked");
      

    } else {
      setIsCoinClicked(true);
      setSound(true);
        setTimeout(() => {
          setIsBoxEmpty(true);
          setSound2(true);
        }, 150);
    }
  };

  const handleClick2 = () => {
    setIsBoxEmpty(true);
    if (isCoinClicked2) {
      
    } else {
      setIsCoinClicked2(true);
      setSound(true);
      setTimeout(() => {
        setIsBoxEmpty(true);
        setSound2(true);
      }, 150);
    }
  };

  const handleReplayClick = () => {
    setIsCoinClicked(false);
    setIsBoxEmpty(false);
  };


  return (
    <div className='landing-body'>
    <div className="sky" >
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      <div className="scorebar">
        <Scorebar />
      </div>
      <Cloud />
      <div className="ground" >
        <Bush/>
        <Mario />
      </div>
       
      
      <div>
      <div className="mario">
        <div className='flexbox'>
        <div
          className={`box ${isBoxEmpty ? "empty" : ""}`}
          onClick={handleClick}
        >
          <span className={`coin ${isCoinClicked ? "play" : ""}`}>
            <img src="http://adobewordpress.com/tasarim/images/coin.png" />
          </span>
          <button className="landing-button">Admin Login</button>
        </div>
        <div
          className={`box ${isBoxEmpty ? "empty" : ""}`}
          onClick={handleClick2}
        >
          <span className={`coin2 ${isCoinClicked2 ? "play" : ""}`}>
            <img src="http://adobewordpress.com/tasarim/images/coin.png" />
          </span>
          <button className="landing-button">User Login</button>
        </div>
        </div>
        {sound && <iframe id="audio" title="blocksond" src={blocksound} allow="autoplay" style={{display: 'none'}}></iframe>}
        {sound2 && <iframe id="audio" title="goldsound" src={goldsound} allow="autoplay" style={{display: 'none'}}></iframe>}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;
