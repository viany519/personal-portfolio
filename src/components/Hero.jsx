import profile from "../assets/images/profile.png";

function LinkedinIcon(){return <svg viewBox="0 0 24 24"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.95 1.95 0 1 0 5.25 6.9 1.95 1.95 0 0 0 5.25 3ZM20.44 13.5c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.88V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.71v-6.5Z"/></svg>}
function InstagramIcon(){return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.8" r="1"/></svg>}
function GithubIcon(){return <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.48v-1.72c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.93.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.9c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"/></svg>}

function Hero(){
 return <section id="home" className="hero">
  <div className="hero-aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div className="hero-particles" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div className="hero-left">
   <h1>Hi, I'm<br/><span>Vianny</span></h1>
   <h2>Aspiring Data Scientist &amp; AI Engineer</h2>
   <p>Computer Science student at BINUS University pursuing a Data Science specialization track, with a strong focus on Machine Learning, Artificial Intelligence, and data-driven problem solving. I enjoy transforming complex data into clear insights and practical solutions through predictive modeling, analysis, and thoughtful digital experiences.</p>
   <div className="hero-buttons">
    <button className="primary" onClick={()=>document.getElementById("work").scrollIntoView()}>View My Work →</button>
    <a className="secondary download-cv" href="/resume.pdf" download="Maria_Yohana_Vianny_Leo_CV.pdf">Download CV ↓</a>
   </div>
   <div className="socials">
    <a href="https://www.linkedin.com/in/maria-yohana-vianny-leo-962076326?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon/></a>
    <a href="https://instagram.com/vlviany_" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon/></a>
    <a href="https://github.com/viany519" target="_blank" rel="noreferrer" aria-label="Github"><GithubIcon/></a>
   </div>
   <div className="tags">
    <span>Data Science</span>
    <span>Machine Learning</span>
    <span>Python</span>
    <span>SQL</span>
    <span>Data Analysis</span>
    <span>Deep Learning</span>
    <span>HTML</span>
    <span>CSS</span>
   </div>
  </div>
  <div className="hero-right">
   <div className="card tools"><b>Tools &amp; Languages</b><p>Python &amp; SQL</p><p>Java &amp; C</p><p>HTML &amp; CSS</p><p>Pandas &amp; Scikit-Learn</p></div>
   <img src={profile} className="profile" alt="Maria Yohana Vianny Leo"/>
   <div className="card learning"><b>Currently Learning</b><p>Deep Learning</p><p>Computer Vision</p><p>PyTorch &amp; TensorFlow</p><p>Power BI</p></div>
  </div>
 </section>
}
export default Hero;
