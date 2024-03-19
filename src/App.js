import "./style/Globel.scss";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Intro from "./component/intro/Intro";
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
        <About/>
        <Portfolio/>
        <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
