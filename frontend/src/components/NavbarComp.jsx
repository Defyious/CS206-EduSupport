import "./CSS/NavbarComp.css";

const NavbarComp = () => {
  return (
    <div className="desktop-navbar-component">
      <div className="title-frame">
        <div className="brands">
          <div className="logo-brand">
            <div className="desktop-aside-instance" />
            <div className="header-frame" />
            <div className="main-content">
              <div className="group-frame" />
              <div className="group-frame1" />
              <div className="main-content-child" />
              <div className="d-parent">
                <h1 className="d">d</h1>
                <h1 className="g">G</h1>
              </div>
            </div>
          </div>
          <div className="thumbsup-icon">
            <h3 className="digiforumio">EduSupport</h3>
            <div className="platform-discussion">Platform Discussion</div>
          </div>
        </div>
        <div className="search">
          <div className="trend-node">
            <div className="vector-frontend">
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
      <div className="machinelearning-node">
        <header className="menu-tab-container">
          <div className="navbar">
            <div className="links1">
              <div className="home">Home</div>
              <div className="about">About</div>
              <div className="threads">Threads</div>
              <div className="community">Community</div>
              <div className="leaderboards1">Mentor boards</div>
            </div>
          </div>
          <div className="label-four-tab">
            <div className="tab-holding-zone">
              <img
                className="tab-holding-zone-child"
                loading="eager"
                alt=""
                src="/group-20.svg"
              />
            </div>
            <img
              className="iconsaxlinearsmsnotification"
              alt=""
              src="/iconsaxlinearsmsnotification.svg"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavbarComp;