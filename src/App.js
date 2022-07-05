import "./styles/App.css";
import Home from "./index/home";
import { About } from "./about/about.jsx";
import { StudyPlanner } from "./index/studyplanner";
import { Header } from "./layouts/header.jsx";
import { Footer } from "./layouts/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/studyplanner" element={<StudyPlanner/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
