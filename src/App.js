import "./styles/App.css";
import { Header } from "./layouts/header.jsx";
import { Footer } from "./layouts/footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./index/home/home";
import {About} from "./about/about"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
