import React from "react";
import "./VideoSection.css"
import {motion} from "framer-motion"

const VideoSection = () => {

  const video1="FJy2M6e4NPs"
  const video2="FJy2M6e4NPs"

  return (
    <div className="video-section">
      <motion.div className="video-container"
      initial={{x:"-100%",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.1,duration:0.4}}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video1}?rel=0&modestbranding=1&showinfo=0`}
          title="Video 1"
          frameBorder="0"
          allowFullScreen
        />
        
      </motion.div>
      <motion.div className="video-container"
      initial={{x:"-100%",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.1,duration:0.4}}
      >
        <iframe
          width="100%"
          height="100%"
      
          src={`https://www.youtube.com/embed/${video2}?rel=0&modestbranding=1&showinfo=0`}
          title="Video 2"
          frameBorder="0"
          allowFullScreen
        />
        


      </motion.div>
      
    </div>
  );
};

export default VideoSection;
