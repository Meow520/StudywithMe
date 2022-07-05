import "./styles/App.css";
import Home from "./index/home";
import { About } from "./about/about.jsx";
import { StudyList } from "./studylist/studylist";
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
          <Route path="/studylist" element={<StudyList/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
