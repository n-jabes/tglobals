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
import Mobibo from '../assets/Mobibo.png';
import Truck from '../assets/truck.png';
import Advertisement1 from '../assets/Ads_setting_1.png';
import Advertisement2 from '../assets/Ads_setting_2.png';
import Advertisement3 from '../assets/Ads_setting_3.png';
import Advertisement4 from '../assets/Ads_setting_4.png';
import Map from '../assets/MapExample.png';
import flag from '../assets/flag.png';
import lightLogo from '../assets/order_logo.png';

import Calendar from './../components/Calendar';

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

      <div className="seventh-row">
        <div className="top">
          <div className="amount">
            $1750 <sup>per day</sup>
          </div>
          <div className="middle">
            <p>
              + <br />
              <span>
                discount for each subsequent <br /> day
              </span>
            </p>
          </div>
        </div>

        <div className="left">
          $2400 <br />
          <span>
            Average market price <br /> per day
          </span>
        </div>

        <div className="calendar-container">
          <div className="calendar">
            <h2 className="heading">Calculate the cost for rent</h2>
            {/* <div className="cal"> <Calendar /> </div> */}
            <h2 className="row price">
              <span>Price for 9 days</span>{' '}
              <span className="price-left">193088.99</span>
            </h2>
            <h2 className="row savings">
              <span>Savings</span> <span className="savings-left">2400.02</span>
            </h2>
          </div>
          <button className="order-btn">Order</button>
        </div>

        <div className="bottom">
          <p>
            We also offer wholesale pricing on 30-60 day campaigns <br /> which
            starts at
          </p>
          <h2>$1250</h2>
          <p>per day</p>
        </div>
      </div>

      <div className="eighth-row">
        <img src={Mobibo} alt="city" />
      </div>

      <div className="nineth-row">
        <h2>Test your ideas</h2>
        <div className="table">
          <div className="left">
            <div className="btn-group">
              <button className="btn-left active">Side</button>
              <button className="btn-right">Back</button>
            </div>
            <div className="btn-group">
              <button className="btn-left active">2D</button>
              <button className="btn-right">3D</button>
            </div>
            <div className="form">
              <div className="row">
                <div className="left">Advertising size</div>
                <div className="right">11.5x6.5'</div>
              </div>
              <div className="row">
                <div className="left">Available for</div>
                <div className="right">Video/Image</div>
              </div>
              <div className="row">
                <div className="left">File formats</div>
                <div className="right">MP4/MOV/JPEG</div>
              </div>
              <div className="row">
                <div className="left">Min resolution</div>
                <div className="right">1280x720px</div>
              </div>
              <div className="row5">
                <div className="left">Max file size</div>
                <div className="right">50mb</div>
              </div>
            </div>
            <button className="upload-btn">Upload</button>
            <button className="order-btn">Order</button>
          </div>
          <div className="right">
            <img src={Truck} alt="SVG of a truck" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Also</p>
            <p>All our trucks are</p>
          </div>
          <div className="right">
            <p>
              <span>black</span> <br /> and <br /> unbranded
            </p>
            <p>
              to give you <br /> maximum transparency
            </p>
          </div>
        </div>
      </div>

      <div className="tenth-row">
        <div className="top">
          <div className="left">Ad campaign settings</div>
          <div className="right">
            <div className="col">
              <h3>Before</h3>
              <p>
                We’ll present you with a proposed route based on our own
                analysis and you’ll also be able to request specific locations
                as well.
              </p>
            </div>
            <div className="col">
              <h3>During</h3>
              <p>
                During the campaign, you’ll receive updates and optimization
                suggestions from a dedicated team.
              </p>
            </div>
            <div className="col">
              <h3>After</h3>
              <p>
                Post-campaign, a detailed report with GPS data, a gallery, and
                raw data for retargeting on social media is provided.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          Pick a place <br />
          where your target audience <br /> congregates <br /> and show them{' '}
          <br /> the ads
        </div>
      </div>

      <div className="eleventh-row">
        <img className="bg" src={Map} alt="map" />
        <div className="container">
          <div className="left">
            <img src={Advertisement1} alt="advertisement " />
            <img src={Advertisement2} alt="advertisement " />
            <img src={Advertisement3} alt="advertisement " />
            <img src={Advertisement4} alt="advertisement " />
          </div>
          <div className="right">
            <div className="content">
              <h2>All campaign routes are fully customizable</h2>
              <p>Date</p>
              <p>Place</p>
              <p>Time</p>
              <p>Duration</p>
              <p>etc.</p>
            </div>
            <div className="ex">Example</div>
          </div>
        </div>
      </div>

      <div className="twelveth-row">
        <div className="top">Work in</div>
        <div className="bottom">
          <div className="left">
            <div className="nbr">50</div>
            <div className="address">
              cities <img src={flag} alt="" />
            </div>
          </div>
          <div className="right">
            <ul className="cities-left">
              <li>New York</li>
              <li>Houston</li>
              <li>Phoenix (Prescott)</li>
              <li>Orlando-Daytona Beach-Melbourne</li>
              <li>Charlotte</li>
              <li>Nashville</li>
              <li>San Antonio</li>
              <li>Greenville-Spartanburg-Asheville-Anderson</li>
              <li>Jacksonville</li>
              <li>Birmingham (Anniston and Tuscaloosa)</li>
              <li>Los Angeles</li>
              <li>Atlanta</li>
              <li>Tampa-St. Petersburg (Sarasota)</li>
              <li>Denver</li>
              <li>Raleigh-Durham (Fayettville)</li>
              <li>Salt Lake City</li>
              <li>Hartford & New Haven</li>
              <li>Cincinatti</li>
              <li>Grand Rapids-Kalamazoo-Battle Creek</li>
              <li>Oklahoma City</li>
              <li>Chicago</li>
              <li>Boston (Manchester)</li>
              <li>Seattle-Tacoma</li>
              <li>Miami-Fort Lauderdale</li>
              <li>Portland, OR</li>
            </ul>
            <ul className="cities-right">
              <li>Pittsburgh</li>
              <li>Columbus, OH</li>
              <li>Milwauke</li>
              <li>Norfolk-Portsmouth-Newport News</li>
              <li>Louisville</li>
              <li>Philadelphia</li>
              <li>Washington, D.C. (Hagerstown)</li>
              <li>Detroit</li>
              <li>Cleveland-Akron (Canton)</li>
              <li>St. Louis</li>
              <li>Baltimore</li>
              <li>Kansas City</li>
              <li>West Palm Beach-Fort Pierce</li>
              <li>Harrisburg-Lancaster-Lebanon-York</li>
              <li>Albuquerque-Santa Fe</li>
              <li>Dallas-Forth Worth</li>
              <li>San Francisco-Oakland-San Jose</li>
              <li>Minneapolis-St. Paul</li>
              <li>Sacramentio-Stockton-Modesto</li>
              <li>Indianapolis</li>
              <li>San Diego</li>
              <li>Austin</li>
              <li>Las Vegas</li>
              <li>Greensboro-High Point-Winston-Salem</li>
              <li>Memphis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="thirteenth-row">
        <div className="top">
          <div className="h2">
            <p>If you have</p>
            <p>not found the</p>
            <p>city you are</p>
            <p>interested in</p>
          </div>
        </div>
        <div className="bottom">
          <input type="text" placeholder="Offer your location" />
          <p className="left">
            and we will try to organize and advertising <br /> campaign for you
            there
          </p>
          <button>Offer</button>
        </div>
      </div>

      <div className="fourteenth-row">
        <h2>Order process</h2>
        <div className="container">
          <div className="left">
            <p className="lightText">it's very easy</p>
            <img src={lightLogo} alt="ligt logo" />
          </div>
          <div className="right">
            <div className="step">
              <span>1</span> Application for advertising placement
            </div>
            <div className="floated">
              <p>Specify the city</p>
              <p>Specify the dates</p>
              <p>
                Attach your advertising materials
                <p className="sub lightText">
                  can be skipped and sent after payment
                </p>
              </p>
              <p>
                Provide personal information
                <p className=" sub lightText">
                  First Name <br /> Last Name <br /> Email <br /> Phone <br />
                  Company name <br /> Notes to LED truck driver
                </p>
              </p>
            </div>
            <div className="step">
              <span>2</span> Coordinating all points with our advertising
              strategist
              <p className="sub lightText">who will contact you</p>
            </div>
            <div className="floated">
              <p>Creatives</p>
              <p>route optimization</p>
              <p>Measurement</p>
              <p className="lightText">Etc</p>
            </div>
            <div className="step">
              <span>3</span> Payment
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="adsArea"></div>
          <button>Run ads</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
