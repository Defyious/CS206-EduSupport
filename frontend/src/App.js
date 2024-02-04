import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Forum from "./components/Forum"

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate replace to="/forum" />} />
      <Route path="/forum" element={<Forum />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
