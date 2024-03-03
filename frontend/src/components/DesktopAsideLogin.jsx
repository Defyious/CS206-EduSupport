import { useMemo } from "react";
import "./CSS/DesktopAsideLogin.css";

const DesktopAsideLogin = ({
  listOfUsers,
  iconsaxLinearprofile2user,
  vectors = [], // Provide a default empty array for vectors
  iconsaxLinearmedal,
  login,
  iconsaxLinearmedal1,
  labelVector,
  propStyles = {}, // Provide a default empty object for propStyles
}) => {
  // Use dynamic styles with default values to avoid accessing properties of undefined
  const dynamicStyles = useMemo(() => ({
    desktopAside: { borderLeft: propStyles.propBorderLeft || "none" }, // Use "none" or any suitable default value
    userStyles: { color: propStyles.propColor || "black" }, // Use "black" or any suitable default value
    frameDiv: {
      backgroundColor: propStyles.propBackgroundColor || "transparent", // Use "transparent" or any suitable default value
      border: propStyles.propBorder || "none", // Use "none" or any suitable default value
    },
    trendings: { marginTop: propStyles.propMarginTop || "0px" }, // Use "0px" or any suitable default value
    loginStyle: { textAlign: propStyles.propTextAlign || "left" }, // Use "left" or any suitable default value
  }), [propStyles]);

  return (
    <div className="desktop-aside-login">
      <div className="aside-section" style={dynamicStyles.desktopAside}>
        <img src={iconsaxLinearprofile2user} alt="Profile" />
        <div style={dynamicStyles.userStyles}>{listOfUsers}</div>
      </div>

      <div className="trendings-section" style={dynamicStyles.trendings}>
        {vectors.map((src, index) => (
          <div key={index} className="vector-item">
            <img src={src} alt={`Vector ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="login-section" style={dynamicStyles.loginStyle}>
        {login}
      </div>
    </div>
  );
};

export default DesktopAsideLogin;
