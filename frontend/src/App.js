import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Forum from "./components/Forum"
import Selection from "./components/Selection";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";
import Home from './components/Home';
import RandomMatching from './components/RandomMatching';
import SelectiveMatching from './components/SelectiveMatching';
import MentoringPage from './components/MentoringPage';
import ForumPage from './components/ForumPage';
import './App.css'; // Make sure to import the stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/mentee-form" element={<MenteeForm />} />
        <Route path="/mentor-form" element={<MentorForm />} />
        <Route path="/random-matching" element={<RandomMatching />} />
        <Route path="/selective-matching" element={<SelectiveMatching />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/mentoring" element={<MentoringPage />} />
        <Route path="/" element={<Selection />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
