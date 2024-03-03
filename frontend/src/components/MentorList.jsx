import { useCallback } from "react";
import Vector from "../components/Vector";
import { useNavigate } from "react-router-dom";
import DesktopAsideLogin from "../components/DesktopAsideLogin";
import "./CSS/MentorList.css";

const MentorList = () => {
  const navigate = useNavigate();

  const onThread1ContainerClick = useCallback(() => {
    navigate("/desktop-mentor-details");
  }, [navigate]);

  return (
    <div className="desktop-mentor-premium-me">
      <header className="desktop-navbar-component">
        <div className="navbar-component-instance">
          <div className="brands">
            <div className="logo-brand">
              <div className="navbar-links-frame" />
              <div className="leaderboards-frame" />
              <div className="button-frame">
                <div className="footer-rectangle" />
                <div className="footer-rectangle1" />
                <div className="mentor-list-text" />
                <div className="d-parent">
                  <h1 className="d">d</h1>
                  <h1 className="g">G</h1>
                </div>
              </div>
            </div>
            <div className="match-group">
              <h3 className="digiforumio">EduSupport</h3>
              <div className="platform-discussion">Platform Discussion</div>
            </div>
          </div>
          <div className="search">
            <div className="h-ago-rectangle">
              <div className="vector-frame">
                <img
                  className="iconsaxlinearsearchstatus"
                  alt=""
                  src="/iconsaxlinearsearchstatus.svg"
                />
              </div>
              <div className="explore">Explore...</div>
            </div>
          </div>
        </div>
        <div className="navbar-parent">
          <div className="navbar">
            <nav className="links">
              <div className="home">Home</div>
              <div className="about">About</div>
              <div className="threads">Threads</div>
              <div className="community">Community</div>
              <div className="leaderboards">Mentor boards</div>
            </nav>
          </div>
          <div className="frame-empty">
            <div className="aside-container">
              <img
                className="aside-container-child"
                loading="lazy"
                alt=""
                src="/group-20.svg"
              />
            </div>
            <img
              className="iconsaxlinearsmsnotification"
              loading="lazy"
              alt=""
              src="/iconsaxlinearsmsnotification.svg"
            />
          </div>
        </div>
      </header>
      <main className="footer-rectangle2">
        <Vector
          home="/home.svg"
          yourThreads="/your-threads.svg"
          bookmarks="/bookmarks.svg"
          iconsaxBoldmedalstar="/iconsaxboldmedalstar.svg"
          vector="/vector.svg"
          gitPullRequest="/gitpullrequest.svg"
          image6="/image-6@2x.png"
          image5="/image-5@2x.png"
          frameDivWidth="320px"
          ebayyouAnAlignSelf="stretch"
          ebayyouAnWidth="unset"
          propPadding="var(--padding-3xs) var(--padding-11xl) var(--padding-3xs) var(--padding-13xl)"
        />
        <div className="footer-rectangle-inner">
          <div className="reviews-parent">
            <div className="reviews">
              <h1 className="mentor-list">Mentor List</h1>
            </div>
            <div className="dislike">
              <div className="thread-1" onClick={onThread1ContainerClick}>
                <div className="question-categories-title">
                  <h1 className="primary-mathematics-mentor">
                    Primary Mathematics Mentor
                  </h1>
                  <div className="frame-parent">
                    <div className="vector-icons-parent">
                      <div className="vector-icons">
                        <img
                          className="avatar-1-icon"
                          alt=""
                          src="/avatar-1@2x.png"
                        />
                      </div>
                      <div className="thread-data">
                        <h2 className="peter-tan">Peter Tan</h2>
                        <div className="h-ago">6h ago</div>
                      </div>
                    </div>
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="match">Match</div>
                    </div>
                  </div>
                </div>
                <div className="introduction-qualification-wrapper">
                  <h3 className="introduction-qualification-container">
                    <p className="introduction-qualification">{`Introduction & Qualification`}</p>
                    <p className="more">---------- ...more</p>
                  </h3>
                </div>
                <div className="frame-group">
                  <div className="review-buttons-parent">
                    <img
                      className="review-buttons-icon"
                      loading="lazy"
                      alt=""
                      src="/frame-19.svg"
                    />
                    <div className="match-section">
                      <div className="avatar-icons">
                        <img
                          className="user-reviews-icon"
                          alt=""
                          src="/vector-1.svg"
                        />
                        <div className="add-review">Add review</div>
                      </div>
                      <div className="like-dislike">
                        <div className="div">10</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-1-icon"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className="question-categories">
                    <div className="emptyspace">
                      <img
                        className="thumbs-up-icon"
                        loading="lazy"
                        alt=""
                        src="/thumbsup.svg"
                      />
                    </div>
                    <div className="emptyspace1">10</div>
                    <div className="likeicon">
                      <img
                        className="iconsaxoutlinedislike"
                        loading="lazy"
                        alt=""
                        src="/iconsaxoutlinedislike.svg"
                      />
                    </div>
                    <div className="framewithbuttons">10</div>
                  </div>
                </div>
              </div>
              <div className="thread-2">
                <div className="primary-english-mentor-parent">
                  <h1 className="primary-english-mentor">
                    Primary English Mentor
                  </h1>
                  <div className="frame-container">
                    <div className="frame-div">
                      <div className="astronaut-parent">
                        <img
                          className="astronaut-icon"
                          alt=""
                          src="/astronaut@2x.png"
                        />
                        <img
                          className="astronaut-icon1"
                          loading="lazy"
                          alt=""
                          src="/astronaut-1@2x.png"
                        />
                      </div>
                      <div className="mary-anderson-parent">
                        <h2 className="mary-anderson">Mary Anderson</h2>
                        <div className="h-ago1">6h ago</div>
                      </div>
                    </div>
                    <div className="rectangle-group">
                      <div className="frame-item" />
                      <div className="match1">Match</div>
                    </div>
                  </div>
                </div>
                <div className="introduction-qualification-frame">
                  <h3 className="introduction-qualification-container1">
                    <p className="introduction-qualification1">{`Introduction & Qualification`}</p>
                    <p className="more1">---------- ...more</p>
                  </h3>
                </div>
                <div className="frame-parent1">
                  <div className="frame-parent2">
                    <img
                      className="frame-inner"
                      loading="lazy"
                      alt=""
                      src="/frame-19-1.svg"
                    />
                    <div className="frame-parent3">
                      <div className="vector-parent">
                        <img
                          className="vector-icon"
                          loading="lazy"
                          alt=""
                          src="/vector-2.svg"
                        />
                        <div className="add-review1">Add review</div>
                      </div>
                      <div className="wrapper">
                        <div className="div1">10</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-1-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="frame-parent4">
                    <div className="thumbs-up-wrapper">
                      <img
                        className="thumbs-up-icon1"
                        loading="lazy"
                        alt=""
                        src="/thumbsup-1.svg"
                      />
                    </div>
                    <div className="div2">10</div>
                    <div className="iconsaxoutlinedislike-wrapper">
                      <img
                        className="iconsaxoutlinedislike1"
                        loading="lazy"
                        alt=""
                        src="/iconsaxoutlinedislike-1.svg"
                      />
                    </div>
                    <div className="div3">10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DesktopAsideLogin
          listOfUsers="List of Mentors"
          iconsaxLinearprofile2user="/iconsaxlinearprofile2user.svg"
          vector="/vector-3.svg"
          vector1="/vector-4.svg"
          vector2="/vector-5.svg"
          vector3="/vector-6.svg"
          vector4="/vector-7.svg"
          vector5="/vector-8.svg"
          iconsaxLinearmedal="/iconsaxlinearmedal.svg"
          login="Login"
          iconsaxLinearmedal1="/iconsaxlinearmedal-1.svg"
          labelVector="/vector-9.svg"
          vector6="/vector-10.svg"
          vector7="/vector-11.svg"
          vector8="/vector-12.svg"
          vector9="/vector-13.svg"
          vector10="/vector-14.svg"
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

export default MentorList;