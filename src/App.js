import "./style/Globel.scss";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
      <Routes>
        <Route path="/" exact component={Intro}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
