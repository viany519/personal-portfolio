import {useState} from "react";

function ButterflyIcon(){
 return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M30.5 31.5C25.7 18.1 15.1 8.9 8.9 15.4c-5.2 5.5 1.7 16.2 15.4 18.5-10.8 2.9-15.4 10.7-10.1 14.8 5.4 4.2 13.1-3.2 17.3-13.2"/><path d="M33.5 31.5C38.3 18.1 48.9 8.9 55.1 15.4c5.2 5.5-1.7 16.2-15.4 18.5 10.8 2.9 15.4 10.7 10.1 14.8-5.4 4.2-13.1-3.2-17.3-13.2"/><path d="M32 27v15"/><circle cx="32" cy="24" r="2.2"/></svg>;
}

function Navbar(){
 const [dark,setDark]=useState(false);
 const toggle=()=>{document.body.classList.toggle("dark");setDark(!dark);};
 return <nav className="navbar">
  <div className="brand">
   <span className="brand-text">Maria Y. Vianny Leo</span>
   <span className="brand-butterfly brand-butterfly-one"><ButterflyIcon/></span>
   <span className="brand-butterfly brand-butterfly-two"><ButterflyIcon/></span>
  </div>
  <div className="nav-links">
   <a href="#home">Home</a><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
  </div>
  <div className="nav-actions">
   <button aria-label="theme" className="theme-btn" onClick={toggle}>{dark?<span>☀</span>:<span>◐</span>}</button>
  </div>
 </nav>;
}
export default Navbar;
