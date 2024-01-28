import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";
import VideoPlaying from "./components/VideoStreamPage/VideoPlaying";
import MainBody from "./components/MainBody";

function App() {
  return (
    
    <div className="relative">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainBody />}>
            <Route index element={<VideoShowcase />} />
            <Route path="/watch" element={<VideoPlaying />} />
          </Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
