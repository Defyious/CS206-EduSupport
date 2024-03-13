import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Forum from "./components/Forum"
import Selection from "./components/Selection";
import MenteeForm from "./components/MenteeForm";
import MentorForm from "./components/MentorForm";
import './App.css'; // Make sure to import the stylesheet

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/mentee-form" element={<MenteeForm />} />
        <Route path="/mentor-form" element={<MentorForm />} />
        <Route path="/" element={<Selection />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
