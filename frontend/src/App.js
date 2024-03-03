import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import Forum from "./components/Forum";
import MentorDetails from "./components/MentorDetails";
import MentorList from "./components/MentorList";
import MentorMatching from "./components/MentorMatching";
import ForumPosting from "./components/ForumPost";
import DiscussionForum from "./components/DiscussionForum";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/forum" />} />
          <Route path="/forum" element={<DiscussionForum />} />
          <Route path="/mentors/details" element={<MentorDetails />} />
          <Route path="/mentors/list" element={<MentorList />} />
          <Route path="/mentors/match" element={<MentorMatching />} />
          <Route path="/forum/post" element={<ForumPosting />} />
          {/* Uncomment the next line when the Forum component is available and imported */}
          {/* <Route path="/forum/general" element={<Forum />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
