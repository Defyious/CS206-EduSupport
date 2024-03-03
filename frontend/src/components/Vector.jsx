import { useMemo } from "react";
import "./CSS/Vector.css";

const Vector = ({
  home,
  yourThreads,
  bookmarks,
  iconsaxBoldmedalstar,
  vector,
  gitPullRequest,
  image6, // Ensure these image props are used if needed or remove unused props
  image5,
  frameDivWidth,
  ebayyouAnAlignSelf,
  ebayyouAnWidth,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => ({
    width: frameDivWidth,
  }), [frameDivWidth]);

  const desktopAsideStyle = useMemo(() => ({
    alignSelf: ebayyouAnAlignSelf,
    width: ebayyouAnWidth,
  }), [ebayyouAnAlignSelf, ebayyouAnWidth]);

  const buttonStyle = useMemo(() => ({
    padding: propPadding,
  }), [propPadding]);

  // Component JSX
  return (
    <div className="desktop-aside-parent" style={frameDivStyle}>
      <div className="desktop-aside3" style={desktopAsideStyle}>
        {/* Content and structure as before */}
        {/* Remember to add meaningful alt text or leave it empty for decorative images */}
      </div>
    </div>
  );
};

export default Vector;
