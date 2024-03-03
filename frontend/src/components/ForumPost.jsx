import NavbarComp from "../components/NavbarComp";
import Vector from "../components/Vector";
import Question from "../components/Question";
import DesktopAsideLogin from "../components/DesktopAsideLogin";
import "./CSS/ForumPost.css";

const ForumPosting = () => {
  return (
    <div className="desktop-discussion-forum-po">
      <NavbarComp
        iconsaxLinearsearchstatus="/iconsaxlinearsearchstatus.svg"
        group20="/group-202.svg"
        iconsaxLinearsmsnotificat="/iconsaxlinearsmsnotification2.svg"
      />
      <main className="frame-main">
        <Vector
          home="/home2.svg"
          yourThreads="/your-threads2.svg"
          bookmarks="/bookmarks2.svg"
          iconsaxBoldmedalstar="/iconsaxboldmedalstar.svg"
          vector="/vector.svg"
          gitPullRequest="/gitpullrequest.svg"
          image6="/image-62@2x.png"
          image5="/image-52@2x.png"
        />
        <div className="question-posting-area">
          <Question />
        </div>
        <DesktopAsideLogin
          listOfUsers="List of ......"
          iconsaxLinearprofile2user="/iconsaxlinearprofile2user.svg"
          vector="/vector-16.svg"
          vector1="/vector-22.svg"
          vector2="/vector-32.svg"
          vector3="/vector-42.svg"
          vector4="/vector-52.svg"
          vector5="/vector-62.svg"
          iconsaxLinearmedal="/iconsaxlinearmedal.svg"
          login="Mentoring"
          iconsaxLinearmedal1="/iconsaxlinearmedal-12.svg"
          labelVector="/vector-72.svg"
          vector6="/vector-82.svg"
          vector7="/vector-92.svg"
          vector8="/vector-102.svg"
          vector9="/vector-112.svg"
          vector10="/vector-122.svg"
        /> {/* Missing self-closing tag fixed here */}
      </main> {/* Closing main tag */}
    </div> // Closing div for the component
  );
};

export default ForumPosting; // Exporting the component
