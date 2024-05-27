import React, { useEffect, useState } from 'react';
import '../../../App.css';

const IntroVideo = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  useEffect(() => {
    if (hasInteracted) {
      const video = document.getElementById('intro-video');
      const audio = document.getElementById('intro-audio');

      if (video && audio) {
        video.play();
        audio.play();
      }
    }
  }, [hasInteracted]);

  return (
    <div onClick={handleInteraction}>
      <video id="intro-video" width="600" height="400" controls>
        <source src="my-app\src\sources\videos\HeroVideo-Video-2-noAudio-Final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio id="intro-audio" controls>
        <source src="my-app\src\sources\audio\landing_ambient.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default IntroVideo;
