import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import "./CSS/DiscussionForum.css";

const DiscussionForum = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Desktop / Discussion Forum" to the project
  }, []);

  return (
    <div className="desktop-discussion-forum">
      <NavbarComp />
      <main className="chemistry">
        <div className="vector1">
          <div className="desktop-aside1">
            <div className="links-parent">
              <div className="links2">
                <div className="list-link-1">
                  <img
                    className="home-icon"
                    loading="lazy"
                    alt=""
                    src="/home4.svg"
                  />
                  <h3 className="profile">Profile</h3>
                </div>
                <div className="list-link-11">
                  <img
                    className="your-threads-icon"
                    loading="lazy"
                    alt=""
                    src="/your-threads4.svg"
                  />
                  <h3 className="your-threads">Your Questions</h3>
                </div>
                <div className="list-link-12">
                  <img
                    className="bookmarks-icon"
                    loading="lazy"
                    alt=""
                    src="/bookmarks4.svg"
                  />
                  <h3 className="saved">Saved</h3>
                </div>
              </div>
              <div className="top-leads">
                <div className="leaderboards2">
                  <h1 className="top-leaderboards">Mentor Categories</h1>
                  <div className="leads">
                    <div className="login">
                      <div className="thread-info">
                        <div className="frame-title" />
                        <div className="avatar-icon">
                          <div className="ebayyou-an">Mathematics</div>
                          <div className="ebaygmailc">ebay@gmail.c</div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="div6">4.8</div>
                      </div>
                    </div>
                    <div className="frame-parent8">
                      <div className="frame-parent9">
                        <div className="frame-child2" />
                        <div className="ebayyou-an-parent">
                          <div className="ebayyou-an1">Ebayyou An</div>
                          <div className="ebaygmailc1">ebay@gmail.c</div>
                        </div>
                      </div>
                      <div className="frame">
                        <div className="div7">80</div>
                      </div>
                    </div>
                    <div className="login1">
                      <div className="frame-parent10">
                        <div className="frame-child3" />
                        <div className="ebayyou-an-group">
                          <div className="ebayyou-an2">Science</div>
                          <div className="ebaygmailc2">ebay@gmail.c</div>
                        </div>
                      </div>
                      <div className="wrapper1">
                        <div className="div8">4.3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="button" variant="primary" />
              </div>
            </div>
            <div className="footer1">
              <div className="digiforum-all-rights">
                ©2023 DigiForum. All rights reserved.
              </div>
              <div className="frame-parent11">
                <div className="vector-group">
                  <img className="vector-icon1" alt="" src="/vector.svg" />
                  <div className="source-code">Source Code</div>
                </div>
                <div className="git-pull-request-parent">
                  <img
                    className="git-pull-request-icon"
                    alt=""
                    src="/gitpullrequest.svg"
                  />
                  <div className="forum-api-dicoding">Forum API Dicoding</div>
                </div>
              </div>
              <div className="chemistry-info" />
            </div>
          </div>
          <img
            className="image-6-icon"
            loading="lazy"
            alt=""
            src="/image-64@2x.png"
          />
          <img
            className="image-5-icon"
            loading="lazy"
            alt=""
            src="/image-54@2x.png"
          />
        </div>
        <div className="minago">
          <div className="containers">
            <div className="added-thread">
              <div className="input">
                <Button
                  className="iconsax-linearmedal"
                  name="ICON"
                  variant="outline-primary"
                />
                <div className="added-thread1">
                  <div className="how-do-i">
                    How do I solve this trigonometry question?
                  </div>
                </div>
              </div>
              <div className="button-group">
                <div className="fitur">
                  <img
                    className="iconsaxlineargallery"
                    loading="lazy"
                    alt=""
                    src="/iconsaxlineargallery.svg"
                  />
                  <img
                    className="iconsaxlineartext"
                    loading="lazy"
                    alt=""
                    src="/iconsaxlineartext.svg"
                  />
                  <img
                    className="iconsaxlineartextaligncenter"
                    loading="lazy"
                    alt=""
                    src="/iconsaxlineartextaligncenter.svg"
                  />
                  <img
                    className="iconsaxlineartask"
                    loading="lazy"
                    alt=""
                    src="/iconsaxlineartask.svg"
                  />
                  <img
                    className="iconsaxlineartranslate"
                    loading="lazy"
                    alt=""
                    src="/iconsaxlineartranslate.svg"
                  />
                </div>
                <Button
                  className="button-group-child"
                  name="Submit"
                  variant="outline-primary"
                  onClick={onGroupButtonClick}
                />
              </div>
            </div>
            <div className="thumbsup">
              <div className="thread-12">
                <div className="what-is-the-difference-between-wrapper">
                  <h1 className="what-is-the">
                    What is the difference between ionic bond and covalent bond?
                  </h1>
                </div>
                <div className="thread-1-inner">
                  <div className="frame-parent12">
                    <div className="avatar-parent">
                      <div className="avatar1">
                        <div className="dahee">
                          <Button
                            className="minago1"
                            name="ICON"
                            variant="outline-primary"
                          />
                          <div className="image">
                            <div className="dahee1">Dahee</div>
                            <div className="min-ago">50min ago</div>
                          </div>
                        </div>
                        <div className="rectangle-parent1">
                          <div className="frame-child4" />
                          <div className="chemistry1">Chemistry</div>
                        </div>
                      </div>
                      <div className="image-4-wrapper">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="im-still-confused">{`Im still confused on how to differenciate between....more `}</div>
                    </div>
                    <div className="ionic-covalic">
                      <div className="what-is-the1">
                        <img
                          className="frame-question-icon"
                          loading="lazy"
                          alt=""
                          src="/frame-192.svg"
                        />
                        <div className="add-response">
                          <div className="vector-prompt">
                            <img
                              className="frame-question-icon1"
                              alt=""
                              src="/vector-18.svg"
                            />
                            <div className="add-response1">Add response</div>
                          </div>
                          <div className="time-elapsed">
                            <div className="frontend-label">13</div>
                          </div>
                        </div>
                      </div>
                      <div className="thumbs-up-dislike">
                        <div className="thumbsup-icon1">
                          <img
                            className="thumbs-up-icon3"
                            loading="lazy"
                            alt=""
                            src="/thumbsup2.svg"
                          />
                        </div>
                        <div className="thumbsup-icon2">10</div>
                        <div className="thumbsup-icon3">
                          <img
                            className="iconsaxoutlinedislike3"
                            loading="lazy"
                            alt=""
                            src="/iconsaxoutlinedislike2.svg"
                          />
                        </div>
                        <div className="thumbsup-icon4">10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thread-21">
                <div className="object-force">
                  <h1 className="what-is-the2">
                    What is the amount of force exerted by Object A onto Object
                    B?
                  </h1>
                  <div className="astronaut-time-stamp">
                    <div className="frontend-icon">
                      <img
                        className="vector-icon2"
                        loading="lazy"
                        alt=""
                        src="/frame-29@2x.png"
                      />
                      <div className="frame-question">
                        <div className="astronout">Astronout</div>
                        <div className="h-ago3">6h ago</div>
                      </div>
                    </div>
                    <div className="rectangle-parent2">
                      <div className="frame-child5" />
                      <div className="front-end">Front-end</div>
                    </div>
                  </div>
                </div>
                <div className="chemistry-category">
                  <h3 className="the-three-main">{`The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools... `}</h3>
                  <div className="frontend-instance">
                    <div className="frontend-categories">
                      <img
                        className="vectormathematics-icon"
                        alt=""
                        src="/frame-19-11.svg"
                      />
                      <div className="time-elapsed-icons">
                        <div className="rectangle-frame-frames">
                          <img
                            className="vector-math-languages"
                            alt=""
                            src="/vector-24.svg"
                          />
                          <div className="add-response2">Add response</div>
                        </div>
                        <div className="medal-icon-frame">
                          <div className="empty-text-response">10</div>
                        </div>
                      </div>
                    </div>
                    <div className="thumbsup-dislike-frames">
                      <div className="thumbs-up-icon-frame">
                        <img
                          className="thumbs-up-icon4"
                          alt=""
                          src="/thumbsup-11.svg"
                        />
                      </div>
                      <div className="thumbs-up-icon5">10</div>
                      <div className="thumbs-up-icon-frame1">
                        <img
                          className="iconsaxoutlinedislike4"
                          alt=""
                          src="/iconsaxoutlinedislike-11.svg"
                        />
                      </div>
                      <div className="thumbs-up-icon6">10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-aside-login">
          <div className="desktop-aside2">
            <div className="frame-parent13">
              <div className="frame-parent14">
                <div className="frame-parent15">
                  <div className="frame-child6" />
                  <div className="ebayyou-anggoro-parent">
                    <div className="ebayyou-anggoro">Ebayyou Anggoro</div>
                    <div className="user-1">user-1</div>
                  </div>
                </div>
                <div className="frame-parent16">
                  <div className="frame-child7" />
                  <div className="ebayyou-anggoro-group">
                    <div className="ebayyou-anggoro1">Ebayyou Anggoro</div>
                    <div className="user-11">user-1</div>
                  </div>
                </div>
                <div className="frame-parent17">
                  <div className="frame-child8" />
                  <div className="ebayyou-anggoro-container">
                    <div className="ebayyou-anggoro2">Ebayyou Anggoro</div>
                    <div className="user-12">user-1</div>
                  </div>
                </div>
                <div className="frame-parent18">
                  <div className="frame-child9" />
                  <div className="ebayyou-anggoro-parent1">
                    <div className="ebayyou-anggoro3">Ebayyou Anggoro</div>
                    <div className="user-13">user-1</div>
                  </div>
                </div>
                <div className="frame-parent19">
                  <div className="frame-child10" />
                  <div className="ebayyou-anggoro-parent2">
                    <div className="ebayyou-anggoro4">Ebayyou Anggoro</div>
                    <div className="user-14">user-1</div>
                  </div>
                </div>
                <div className="frame-parent20">
                  <div className="frame-child11" />
                  <div className="ebayyou-anggoro-parent3">
                    <div className="ebayyou-anggoro5">Ebayyou Anggoro</div>
                    <div className="user-15">user-1</div>
                  </div>
                </div>
              </div>
              <div className="list-of-users-parent">
                <div className="list-of-users">List of ........</div>
                <img
                  className="iconsaxlinearprofile2user"
                  alt=""
                  src="/iconsaxlinearprofile2user.svg"
                />
              </div>
              <div className="button-see">
                <div className="see-more">see more</div>
              </div>
            </div>
            <div className="trendings1">
              <div className="trend">
                <div className="frame-parent21">
                  <div className="frame-parent22">
                    <div className="vector-container">
                      <img
                        className="vector-icon3"
                        alt=""
                        src="/vector-34.svg"
                      />
                      <div className="front-end1">Front-end</div>
                    </div>
                    <div className="h-ago4">6h ago</div>
                  </div>
                  <div className="frame-child12" />
                </div>
                <div className="trend1">
                  <div className="frame-parent23">
                    <div className="frame-parent24">
                      <div className="vector-parent1">
                        <img
                          className="vector-icon4"
                          alt=""
                          src="/vector-44.svg"
                        />
                        <div className="back-end">Back-end</div>
                      </div>
                      <div className="h-ago5">6h ago</div>
                    </div>
                    <div className="frame-child13" />
                  </div>
                </div>
                <div className="trend2">
                  <div className="frame-parent25">
                    <div className="frame-parent26">
                      <div className="vector-parent2">
                        <img
                          className="vector-icon5"
                          alt=""
                          src="/vector-54.svg"
                        />
                        <div className="mobile-dev">Mobile-dev</div>
                      </div>
                      <div className="h-ago6">6h ago</div>
                    </div>
                    <div className="frame-child14" />
                  </div>
                </div>
                <div className="trend3">
                  <div className="frame-parent27">
                    <div className="frame-parent28">
                      <div className="vector-parent3">
                        <img
                          className="vector-icon6"
                          alt=""
                          src="/vector-64.svg"
                        />
                        <div className="data-analyst">Data-analyst</div>
                      </div>
                      <div className="h-ago7">6h ago</div>
                    </div>
                    <div className="frame-child15" />
                  </div>
                </div>
                <div className="trend4">
                  <div className="frame-parent29">
                    <div className="frame-parent30">
                      <div className="vector-parent4">
                        <img
                          className="vector-icon7"
                          alt=""
                          src="/vector-74.svg"
                        />
                        <div className="machine-learning">Machine-learning</div>
                      </div>
                      <div className="h-ago8">6h ago</div>
                    </div>
                    <div className="frame-child16" />
                  </div>
                </div>
                <div className="trend5">
                  <div className="frame-parent31">
                    <div className="frame-parent32">
                      <div className="vector-parent5">
                        <img
                          className="vector-icon8"
                          alt=""
                          src="/vector-84.svg"
                        />
                        <div className="blockchain-dev">Blockchain-dev</div>
                      </div>
                      <div className="h-ago9">6h ago</div>
                    </div>
                    <div className="frame-child17" />
                  </div>
                </div>
              </div>
              <div className="whats-happenning-parent">
                <div className="whats-happenning">Whats Happenning?</div>
                <img
                  className="iconsaxlinearmedal"
                  alt=""
                  src="/iconsaxlinearmedal.svg"
                />
              </div>
            </div>
            <div className="login-panel">
              <Button
                className="math-matters"
                name="Mentoring"
                variant="primary"
              />
            </div>
          </div>
          <div className="trendings2">
            <div className="frame-wrapper1">
              <div className="question-categories2">Question Categories</div>
              <img
                className="iconsaxlinearmedal1"
                alt=""
                src="/iconsaxlinearmedal-14.svg"
              />
            </div>
            <div className="math-vector-group">
              <div className="label-vector">
                <div className="label-vector1">
                  <div className="label-vector2">
                    <img
                      className="label-vector-icon"
                      alt=""
                      src="/vector-94.svg"
                    />
                    <div className="mathematics">Mathematics</div>
                  </div>
                  <div className="h-ago10">6h ago</div>
                </div>
                <div className="rectangle-container1" />
              </div>
              <div className="label-vector3">
                <div className="frame-parent33">
                  <div className="vector-parent6">
                    <img
                      className="vector-icon9"
                      alt=""
                      src="/vector-104.svg"
                    />
                    <div className="english">English</div>
                  </div>
                  <div className="h-ago11">6h ago</div>
                </div>
                <div className="label-vector-child" />
              </div>
              <div className="label-vector4">
                <div className="frame-parent34">
                  <div className="vector-parent7">
                    <img
                      className="vector-icon10"
                      alt=""
                      src="/vector-114.svg"
                    />
                    <div className="biology">Biology</div>
                  </div>
                  <div className="h-ago12">6h ago</div>
                </div>
                <div className="label-vector-item" />
              </div>
              <div className="label-vector5">
                <div className="frame-parent35">
                  <div className="vector-parent8">
                    <img
                      className="vector-icon11"
                      alt=""
                      src="/vector-124.svg"
                    />
                    <div className="chemistry2">Chemistry</div>
                  </div>
                  <div className="h-ago13">6h ago</div>
                </div>
                <div className="label-vector-inner" />
              </div>
              <div className="label-vector6">
                <div className="frame-parent36">
                  <div className="vector-parent9">
                    <img
                      className="vector-icon12"
                      alt=""
                      src="/vector-132.svg"
                    />
                    <div className="physics">Physics</div>
                  </div>
                  <div className="h-ago14">6h ago</div>
                </div>
                <div className="label-vector-child1" />
              </div>
              <div className="label-vector7">
                <div className="frame-parent37">
                  <div className="vector-parent10">
                    <img
                      className="vector-icon13"
                      alt=""
                      src="/vector-141.svg"
                    />
                    <div className="chinese">Chinese</div>
                  </div>
                  <div className="h-ago15">6h ago</div>
                </div>
                <div className="label-vector-child2" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiscussionForum;