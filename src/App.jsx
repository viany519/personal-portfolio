import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

function App(){
 return <>
  <CursorGlow/>
  <Navbar/>
  <Hero/>
  <Projects/>
  <About/>
  <Experience/>
  <Contact/>
 </>;
}
export default App;
