// src/layout/components/IntroVideo.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/intro.css';
import video from '../../sources/videos/introVideo.mp4';
import audio from '../../sources/audio/landing_ambient.mp3';

const IntroVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = document.getElementById('intro-video');
    const audioElement = document.getElementById('intro-audio');

    if (videoElement && audioElement) {
      videoElement.play();
      audioElement.play();
    }

    const handleVideoEnded = () => {
      navigate('/home');
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, [navigate]);

  return (
    <div id="container-intro">
      <video id="intro-video" autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio id="intro-audio" autoPlay>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default IntroVideo;
