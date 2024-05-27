import React, { useEffect, useState } from 'react';
import '../../../App.css';
import video from '../../../sources/videos/introVideo.mp4';
import audio from '../../../sources/audio/landing_ambient.mp3';
import Home from '../Home';

const IntroVideo = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('intro-video');
    const audioElement = document.getElementById('intro-audio');

    if (videoElement && audioElement) {
      videoElement.play();
      audioElement.play();
    }

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <div id="container-intro">
      {videoEnded ? (
        <Home /> 
      ) : (
        <video id="intro-video" autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <audio id="intro-audio" autoPlay>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};


export default IntroVideo;
