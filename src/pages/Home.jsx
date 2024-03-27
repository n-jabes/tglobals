import React from 'react';
import video from '../assets/video.png';
import audio from '../assets/audio.png';
import bulb from '../assets/row3_icon.png';
import ledTruck from '../assets/row2_image.png';
import gamecontroller from '../assets/gamecontroller.png';
import gamingconsole from '../assets/GamingConsole1.png';
import example1 from '../assets/Exp2_row2_1.png';
import example2 from '../assets/Exp2_row2_2.png';
import example3 from '../assets/Exp2_row2_3.png';
import example4 from '../assets/Exp2_row2_4.png';
import example5 from '../assets/Exp2_row2_5.png';
import example6 from '../assets/Exp2_row2_6.png';
import example7 from '../assets/Exp2_row2_7.png';
import example8 from '../assets/Exp2_row2_8.png';
import example9 from '../assets/Exp2_row2_9.png';
import example10 from '../assets/Exp2_row2_10.png';
import example11 from '../assets/Exp2_row2_11.png';
import example12 from '../assets/Exp2_row2_12.png';
import example13 from '../assets/Exp2_row2_13.png';
import example14 from '../assets/Exp2_row2_14.png';
import example15 from '../assets/Exp2_row2_15.png';
import example16 from '../assets/Exp2_row2_16.png';

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
        <img src={ledTruck} alt="led truck" />
        <div className="content">
          <img src={bulb} alt="light bulb icon" />
          <div className="desc">
            <h3>Bright LED technology</h3>
            <p>
              Ensuring visibility <br /> under any lighting conditions, <br />{' '}
              including bright sunlight
            </p>
          </div>
        </div>
      </div>

      <div className="fourth-row">
        {/* <img src={gamingconsole} alt="people playing games on the LED truck" /> */}
        <div className="top">
          <div className="top-left">
            <p>You can use the LED truck as </p>
          </div>
          <div className="top-right">
            <h2>Gaming consoles</h2>
            <h2>
              Interactive games <sup>(eg. roulette)</sup>
            </h2>
            <h2>Live streaming</h2>
            <h2>Live drone feed</h2>
            <h2>Go Pro camera</h2>
            <h2>iPhone screen mirror</h2>
            <h2>Social media stream</h2>
          </div>
        </div>

        <div className="bottom">
          <img src={gamecontroller} alt="gamecontroller icon" />
          <h2>In the picture</h2>
          <h1>
            Customers have connected <br /> a game console and play directly{' '}
            <br /> on our LED truck
          </h1>
        </div>
      </div>

      <div className="fifth-row">
        <div className="container">
          <div className="left first-row-left">
            We work <br /> with
          </div>
          <div className="right first-row-right">
            since <br />
            <span>2004</span>
          </div>
        </div>

        <div className="container">
          <div className="left second-row-left">
            different <br /> companies
          </div>
          <div className="right second-row-right"></div>
        </div>

        <div className="container">
          <div className="left third-row-left">
            <p className="third-row-left-top">
              Have done advertising campaigns with for industries such as:
            </p>
            <h3>Cannabis</h3>
            <h3>Crypto & NFT</h3>
            <h3>Political</h3>
            <h3>Sports</h3>
            <p className="third-row-left-bottom">and many others</p>
          </div>

          <div className="right third-row-right"></div>
        </div>

        <div className="container">
          <div className="left fourth-row-left"></div>
          <div className="right fourth-row-right">
            Orders executed <br />
            <span>1,450+</span>
          </div>
        </div>

        <div className="container">
          <div className="left fourth-row-left"></div>
          <div className="right fourth-row-right">
            Reorders
            <br />
            <span>350+</span>
          </div>
        </div>

        <span>A few examples</span>
      </div>

      <div className="sixth-row">
        <div className="example">
          <img src={example1} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example2} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example3} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example4} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>

        <div className="example">
          <img src={example5} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example6} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example7} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example8} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example9} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example10} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example11} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example12} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example13} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example14} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example15} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
        <div className="example">
          <img src={example16} alt="example company" />
          <h2 className="name">Company name</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
