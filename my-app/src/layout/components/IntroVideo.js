import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/intro.css';
import video from '../../sources/videos/introVideo.mp4';
import audio from '../../sources/audio/landing_ambient.mp3';

const IntroVideo = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const audioElement = audioRef.current;

    const handleInteraction = () => {
      if (videoElement && audioElement) {
        videoElement.play().catch(error => {
          console.error('Error attempting to play video:', error);
        });
        audioElement.play().catch(error => {
          console.error('Error attempting to play audio:', error);
        });
      }
    };

    const handleVideoEnded = () => {
      navigate('/home');
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnded);
    }

    // Add event listener to document to detect any interaction
    document.addEventListener('click', handleInteraction);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnded);
      }
      document.removeEventListener('click', handleInteraction);
    };
  }, [navigate]);

  return (
    <div id="container-intro">
      <video ref={videoRef} id="intro-video" autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio ref={audioRef} id="intro-audio" autoPlay>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default IntroVideo;
