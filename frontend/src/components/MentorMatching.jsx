import { useCallback } from "react";
import Vector from "../components/Vector";
import DesktopNavbarComponent from "../components/NavbarComp";
import DesktopAside from "./DesktopAsideLogin";
import "./CSS/MentorMatching.css";

const MentorMatching = () => {
  const onHomeTextClick = useCallback(() => {
    // Implementation or navigation logic goes here.
    console.log("Home text clicked");
  }, []);

  const onTrendingsFrameContainerClick = useCallback(() => {
    // Implementation or navigation logic goes here.
    console.log("Trendings frame clicked");
  }, []);

  return (
    <div className="desktop-mentor-free-match">
      <DesktopNavbarComponent
        iconsaxLinearsearchstatus="/iconsaxlinearsearchstatus.svg"
        group20="/group-203.svg"
        iconsaxLinearsmsnotificat="/iconsaxlinearsmsnotification3.svg"
        onHomeTextClick={onHomeTextClick} // Ensure this prop is used in DesktopNavbarComponent to handle click events
      />
      <main className="see-all-leaderboards-button">
        <Vector
          home="/home3.svg"
          yourThreads="/your-threads3.svg"
          bookmarks="/bookmarks3.svg"
          iconsaxBoldmedalstar="/iconsaxboldmedalstar.svg"
          vector="/vector.svg"
          gitPullRequest="/gitpullrequest.svg"
          image6="/image-63@2x.png"
          image5="/image-53@2x.png"
          // Ensure these props are correctly handled in the Vector component
        />
        <div className="matching-process-frame">
          <div className="matching-inprocess-text">
            <div className="something-useful-text">
              <h1 className="matching-in-process">Matching in process...</h1>
              <div className="finding-your-best">
                Finding your best mentor...
              </div>
            </div>
            <div
              className="trendings-frame"
              onClick={onTrendingsFrameContainerClick}
            >
              <div className="frame-with-math-formulas-text">
                <img
                  className="iconsaxlinearmirroringscreen"
                  loading="lazy"
                  alt=""
                  src="/iconsaxlinearmirroringscreen.svg"
                />
                <h2 className="something-useful">{`Something useful `}</h2>
              </div>
              <div className="basic-math-formulas-container">
                {/* Content here */}
              </div>
            </div>
          </div>
        </div>
        <DesktopAside
          listOfUsers="List of ......."
          iconsaxLinearprofile2user="/iconsaxlinearprofile2user.svg"
          vector="/vector-17.svg"
          vector1="/vector-23.svg"
          vector2="/vector-33.svg"
          vector3="/vector-43.svg"
          vector4="/vector-53.svg"
          vector5="/vector-63.svg"
          iconsaxLinearmedal="/iconsaxlinearmedal.svg"
          login="Mentoring"
          iconsaxLinearmedal1="/iconsaxlinearmedal-13.svg"
          labelVector="/vector-73.svg"
          vector6="/vector-83.svg"
          vector7="/vector-93.svg"
          vector8="/vector-103.svg"
          vector9="/vector-113.svg"
          vector10="/vector-123.svg"
          // Ensure these props are correctly handled in the DesktopAsideLogin component
        />
      </main>
    </div>
  );
};

export default MentorMatching;
