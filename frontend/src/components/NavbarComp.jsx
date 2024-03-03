import "./CSS/NavbarComp.css";

const NavbarComp = ({
  iconsaxLinearsearchstatus,
  group20,
  iconsaxLinearsmsnotificat,
  onHomeTextClick,
}) => {
  return (
    <header className="desktop-navbar-component2">
      <div className="brands-parent">
        <div className="brands2">
          <div className="logo-brand2">
            <div className="logo-brand-child" />
            <div className="logo-brand-item" />
            <div className="f-r-a-m-e-search-ellipses-parent">
              <div className="f-r-a-m-e-search-ellipses" />
              <div className="f-r-a-m-e-search-ellipses1" />
              <div className="ellipse-div" />
              <div className="d-container">
                <h1 className="d2">d</h1>
                <h1 className="g2">G</h1>
              </div>
            </div>
          </div>
          <div className="frame-discussion-forum">
            <h3 className="digiforumio2">EduSupport</h3>
            <div className="platform-discussion2">Platform Discussion</div>
          </div>
        </div>
        <div className="f-r-a-m-e-search-explore">
          <div className="search2">
            <div className="f-r-a-m-e-iconsax-linearsearch">
              <div className="iconsax-linearsearchstatus">
                <img
                  className="iconsaxlinearsearchstatus2"
                  alt=""
                  src={iconsaxLinearsearchstatus}
                />
              </div>
              <div className="explore2">Explore...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="navbar2">
          <nav className="links3">
            <div className="home2" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="about2">About</div>
            <div className="threads2">Threads</div>
            <div className="community2">Community</div>
            <div className="leaderboards3">Leaderboards</div>
          </nav>
        </div>
        <div className="footer-frame1">
          <div className="search-frame-parent">
            <div className="search-frame">
              <img
                className="search-frame-child"
                loading="lazy"
                alt=""
                src={group20}
              />
            </div>
            <img
              className="iconsaxlinearsmsnotification2"
              loading="lazy"
              alt=""
              src={iconsaxLinearsmsnotificat}
              />
              </div>
            </div>
          </div>
        </header>
      );
    };

export default NavbarComp;