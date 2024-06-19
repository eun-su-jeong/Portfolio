import "./style/Globel.scss";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import {Route, Routes} from "react-router-dom";
import Main from "./component/main/Main";
import Portfolio from "./component/main/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header/>
        <Main/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
