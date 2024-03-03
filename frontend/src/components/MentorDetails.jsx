import { useCallback } from "react";
import Vector from "../components/Vector";
import DesktopAsideLogin from "../components/DesktopAsideLogin";
import "./CSS/MentorDetails.css";

const MentorDetails = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Desktop / Discussion Forum" to the project
  }, []);

  return (
    <div className="desktop-mentor-details">
      <header className="desktop-navbar-component1">
        <div className="brand-logo">
          <div className="brands1">
            <div className="logo-brand1">
              <div className="desktop-navbar" />
              <div className="top-links" />
              <div className="mentor-avatar">
                <div className="mentor-name" />
                <div className="mentor-name1" />
                <div className="mentor-details-frame" />
                <div className="d-group">
                  <h1 className="d1">d</h1>
                  <h1 className="g1">G</h1>
                </div>
              </div>
            </div>
            <div className="see-all-leaderboards">
              <h3 className="digiforumio1">EduSupport</h3>
              <div className="platform-discussion1">Platform Discussion</div>
            </div>
          </div>
          <div className="search1">
            <div className="trendings">
              <div className="question-category">
                <img
                  className="iconsaxlinearsearchstatus1"
                  alt=""
                  src="/iconsaxlinearsearchstatus.svg"
                />
              </div>
              <div className="explore1">Explore...</div>
            </div>
          </div>
        </div>
        <div className="time-stamps">
          <div className="navbar1">
            <nav className="links1">
              <div className="home1" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="about1">About</div>
              <div className="threads1">Threads</div>
              <div className="community1">Community</div>
              <div className="leaderboards1">Mentor boards</div>
            </nav>
          </div>
          <div className="aside-frame">
            <div className="empty-frame">
              <img
                className="empty-frame-child"
                loading="lazy"
                alt=""
                src="/group-201.svg"
              />
            </div>
            <img
              className="iconsaxlinearsmsnotification1"
              loading="lazy"
              alt=""
              src="/iconsaxlinearsmsnotification1.svg"
            />
          </div>
        </div>
      </header>
      <main className="footer-frame">
        <Vector
          home="/home1.svg"
          yourThreads="/your-threads1.svg"
          bookmarks="/bookmarks1.svg"
          iconsaxBoldmedalstar="/iconsaxboldmedalstar.svg"
          vector="/vector.svg"
          gitPullRequest="/gitpullrequest.svg"
          image6="/image-61@2x.png"
          image5="/image-51@2x.png"
          frameDivWidth="320px"
          ebayyouAnAlignSelf="stretch"
          ebayyouAnWidth="unset"
          propPadding="var(--padding-3xs) var(--padding-13xl) var(--padding-3xs) var(--padding-12xl)"
        />
        <div className="footer-frame-inner">
          <div className="frame-parent5">
            <div className="mentor-details-wrapper">
              <h1 className="mentor-details">Mentor Details</h1>
            </div>
            <div className="thread-11">
              <div className="frame-parent6">
                <div className="primary-mathematics-mentor-parent">
                  <h1 className="primary-mathematics-mentor1">
                    Primary Mathematics Mentor
                  </h1>
                  <div className="frame-wrapper">
                    <div className="frame-parent7">
                      <div className="avatar-1-wrapper">
                        <img
                          className="avatar-1-icon1"
                          alt=""
                          src="/avatar-1@2x.png"
                        />
                      </div>
                      <div className="mentor-name2">
                        <h2 className="peter-tan1">Peter Tan</h2>
                        <div className="h-ago2">6h ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="introduction-qualification-container2">
                  <p className="introduction-qualification2">{`Introduction & Qualification`}</p>
                  <p className="p">
                    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>
                  <p className="p1">
                    --------------------------------------------------------------------------------------------
                  </p>
                  <p className="p2">----------.</p>
                </h3>
              </div>
              <div className="add-review2">
                <div className="desktop-aside">
                  <div className="rectangle-container">
                    <div className="rectangle-div" />
                    <div className="schedule-a-meeting">Schedule a meeting</div>
                  </div>
                  <div className="group-div">
                    <div className="frame-child1" />
                    <div className="send-a-direct">Send a direct message</div>
                  </div>
                </div>
                <div className="question-categories1">
                  <div className="vector">
                    <img
                      className="thumbsup-icon"
                      loading="lazy"
                      alt=""
                      src="/frame-191.svg"
                    />
                    <div className="direct-message">
                      <div className="hago">
                        <img
                          className="leaderboards-icon"
                          loading="lazy"
                          alt=""
                          src="/vector-15.svg"
                        />
                        <div className="add-review3">Add review</div>
                      </div>
                      <div className="primary-mentor">
                        <div className="avatar">10</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-1-icon2"
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <div className="footer">
                    <div className="thumbs-up-container">
                      <img
                        className="thumbs-up-icon2"
                        loading="lazy"
                        alt=""
                        src="/thumbsup1.svg"
                      />
                    </div>
                    <div className="div4">10</div>
                    <div className="iconsaxoutlinedislike-container">
                      <img
                        className="iconsaxoutlinedislike2"
                        loading="lazy"
                        alt=""
                        src="/iconsaxoutlinedislike1.svg"
                      />
                    </div>
                    <div className="div5">10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DesktopAsideLogin
          listOfUsers="List of Mentors"
          iconsaxLinearprofile2user="/iconsaxlinearprofile2user.svg"
          vector="/vector-21.svg"
          vector1="/vector-31.svg"
          vector2="/vector-41.svg"
          vector3="/vector-51.svg"
          vector4="/vector-61.svg"
          vector5="/vector-71.svg"
          iconsaxLinearmedal="/iconsaxlinearmedal.svg"
          login="Login"
          iconsaxLinearmedal1="/iconsaxlinearmedal-11.svg"
          labelVector="/vector-81.svg"
          vector6="/vector-91.svg"
          vector7="/vector-101.svg"
          vector8="/vector-111.svg"
          vector9="/vector-121.svg"
          vector10="/vector-131.svg"
          propBorderLeft="2px solid var(--color-darkslategray-100)"
          propColor="#fff"
          propColor1="#f9eeee"
          propColor2="#fff"
          propColor3="#f9eeee"
          propBackgroundColor="#433e58"
          propBorder="1px solid var(--color-rosybrown-400)"
          propColor4="#fff"
          propColor5="#f9eeee"
          propColor6="#fff"
          propColor7="#f9eeee"
          propColor8="#fff"
          propColor9="#f9eeee"
          propColor10="#fff"
          propColor11="#f9eeee"
          propColor12="#bdaaaa"
          propColor13="#ffe5e5"
          propColor14="#f9eeee"
          propBackgroundColor1="rgba(16, 14, 14, 0.17)"
          propColor15="#ffe5e5"
          propColor16="#f9eeee"
          propBackgroundColor2="rgba(16, 14, 14, 0.17)"
          propColor17="#ffe5e5"
          propColor18="#f9eeee"
          propBackgroundColor3="rgba(16, 14, 14, 0.17)"
          propColor19="#ffe5e5"
          propColor20="#f9eeee"
          propBackgroundColor4="rgba(16, 14, 14, 0.17)"
          propColor21="#ffe5e5"
          propColor22="#f9eeee"
          propBackgroundColor5="rgba(16, 14, 14, 0.17)"
          propColor23="#ffe5e5"
          propColor24="#f9eeee"
          propBackgroundColor6="rgba(16, 14, 14, 0.17)"
          propColor25="#fff"
          propTextAlign="left"
          propMarginTop="-686px"
        />
      </main>
    </div>
  );
};

export default MentorDetails;