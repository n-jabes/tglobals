import React from 'react';
import video from '../assets/video.png';
import audio from '../assets/audio.png';

function Home(props) {
  return (
    <div className="home">
      <div className="intro">
        <div className="title">
          LED TRUCK <br /> ADVERTISING
        </div>
      </div>

      <div className="second-row">
        <div className="col col1">
          <h2>LED TRUCK</h2>
          <p>
            Is a truck equipped with <br /> high resolution screens
          </p>
        </div>
        <div className="col col2">
          <div className="empty"></div>
          <p>which plays</p>
        </div>
        <div className="col col3">
          <img src={video} alt="video icon" />
          <p>video</p>
        </div>
        <div className="col col4">
          <img src={audio} alt="audio icon" />
          <p>audio</p>
        </div>
      </div>

      <div className="third-row">
        <img src="../assets/row2_image.png" alt="led truck" />
      </div>
    </div>
  );
}

export default Home;
