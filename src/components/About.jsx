import resumeIcon from "../assets/images/resume-icon.png";
import pixelCoding from "../assets/images/about-pixel-coding.png";
import pixelLaptop from "../assets/images/about-pixel-laptop.png";
import pixelCat from "../assets/images/about-pixel-cat.png";

function tiltMove(e){
 const el=e.currentTarget;
 const r=el.getBoundingClientRect();
 const x=(e.clientX-r.left)/r.width-.5;
 const y=(e.clientY-r.top)/r.height-.5;
 el.style.setProperty("--rx",`${(-y*10).toFixed(2)}deg`);
 el.style.setProperty("--ry",`${(x*12).toFixed(2)}deg`);
}

function tiltLeave(e){
 e.currentTarget.style.setProperty("--rx","0deg");
 e.currentTarget.style.setProperty("--ry","0deg");
}

function About(){
 return <main className="about-page">
  <section id="about" className="about-section">
   <div className="about-layout">
    <div className="about-card tilt" onMouseMove={tiltMove} onMouseLeave={tiltLeave}>
     <span className="about-label">MARIA YOHANA VIANNY LEO</span>
     <h2>About Me</h2>
     <div className="about-role">
      <b>Computer Science Student</b><span>Data Science Specialization Track</span>
     </div>
     <p>I am a Computer Science student at BINUS University pursuing a Data Science specialization track, with interests in Artificial Intelligence and data analytics. I enjoy turning data into practical and understandable solutions through analytical thinking, structured problem solving, and continuous learning. Beyond technical work, I value clear communication, collaboration, leadership, and adaptability in team-based projects.</p>
     <div className="about-stats">
      <div className="about-stat"><span>GPA</span><strong>3.85 <small>/ 4.00</small></strong></div>
      <div className="about-stat"><span>Core Soft Skills</span><strong>Communication • Leadership • Collaboration • Adaptability</strong></div>
     </div>
     <div className="about-polaroids">
      <img src={pixelCoding} alt="Pixel art of a developer coding"/>
      <img src={pixelLaptop} alt="Pixel art of a laptop"/>
      <img src={pixelCat} alt="Pixel art of a cat"/>
     </div>
    </div>
    <div className="about-side">
      <div className="quote-card tilt" onMouseMove={tiltMove} onMouseLeave={tiltLeave}><h3>“Turning data<br/>into decisions.”</h3></div>
      <a className="resume-card tilt" href="/resume.pdf" target="_blank" rel="noreferrer" onMouseMove={tiltMove} onMouseLeave={tiltLeave}>
       <img src={resumeIcon} alt="CV icon"/><div><h3>My Resume</h3><p>Review my CV for an overview of my background, skills, and experience.</p></div><span>→</span>
      </a>
    </div>
   </div>
  </section>
 </main>;
}

export default About;
