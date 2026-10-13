import { useEffect, useMemo, useRef } from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import greenPulseCover from "../assets/images/greenpulse-cover.png";
import project3 from "../assets/images/project3.png";
import hotelBookingCover from "../assets/images/hotel-booking-cover.png";
import scholarshipCover from "../assets/images/scholarship-cover.png";
import triverseCover from "../assets/images/triverse-cover.png";
import simkostCover from "../assets/images/simkost-cover.png";
import awsArchitecture from "../assets/images/aws-architecture.png";

const projects = [
  {
    title: "Movie Recommender AI",
    image: project1,
    desc: "AI-powered movie recommendation web app that finds similar films from synopsis, genre, and keyword similarity, built on a Sentence Transformer model and served through a FastAPI backend.",
    tech: ["Python", "FastAPI", "Next.js"],
    tag: "AI / RECOMMENDATION SYSTEM",
    link: "./movie-recommender.html",
    newTab: false,
    kind: "case",
    resources: [
      { type: "github", href: "https://github.com/viany519/movie-recommender-ai" },
      { type: "website", href: "https://movie-recommender-ai-khaki.vercel.app/" }
    ]
  },
  {
    title: "Green Pulse",
    image: greenPulseCover,
    imageClass: "greenpulse-cover",
    desc: "AI-based watering decision support system for indoor plants that turns simulated environmental sensor readings into clear watering recommendations.",
    tech: ["Python", "HTML/CSS", "FastAPI"],
    tag: "AI / SMART IRRIGATION",
    link: "./greenpulse.html",
    newTab: false,
    kind: "case",
    resources: [
      { type: "github", href: "https://github.com/viany519/smart-irrigation-web-ai" },
      { type: "website", href: "https://smart-irrigation-web-ai-xt1z.vercel.app/login.html" }
    ]
  },
  {
    title: "Hotel Booking Cancellation Analysis",
    image: hotelBookingCover,
    desc: "Data analysis project focused on identifying factors associated with hotel booking cancellations through Python-based exploration and a visual analytics dashboard.",
    tag: "DATA ANALYSIS / EXCEL DASHBOARD",
    tech: ["Python", "Pandas", "React"],
    link: "https://hotel-booking-analytics-dashboard.vercel.app/",
    newTab: false,
    kind: "case",
    resources: [
      { type: "github", href: "https://github.com/viany519/hotel-booking-analytics-dashboard" },
      { type: "excel", href: "./hotel-booking-dashboard.html", internal: true }
    ]
  },
  {
    title: "Student CGPA Prediction",
    image: project2,
    desc: "Regression model that predicts student CGPA from study habits and social conditions, without using prior academic grades. Built with a leakage-free scikit-learn pipeline and a Streamlit app.",
    tech: ["Python", "HTML/CSS", "Streamlit"],
    tag: "MACHINE LEARNING / REGRESSION",
    link: "./cgpa-prediction.html",
    newTab: false,
    kind: "case",
    resources: [{ type: "github", href: "https://github.com/lynxangels/CGPA-MachineLearningProject" }]
  },
  {
    title: "Scholarship Eligibility Profiling",
    image: scholarshipCover,
    desc: "Research-driven machine learning project exploring scholarship eligibility patterns using academic, socioeconomic, and digital-access characteristics from PISA 2022 Brazil data.",
    tech: ["Python", "ML", "K-Means"],
    tag: "MACHINE LEARNING / RESEARCH",
    link: "https://scholarship-eligibility-profiling.vercel.app/",
    kind: "case",
    resources: [{ type: "website", href: "https://scholarship-eligibility-profiling.vercel.app/" }]
  },
  {
    title: "AWS Cloud Architecture Design",
    image: awsArchitecture,
    desc: "Cloud-native event-driven architecture design for a restaurant operations platform using AWS services, focusing on scalability, data flow, analytics, security, and reliability.",
    tech: ["AWS", "Cloud", "Architecture"],
    tag: "CLOUD ARCHITECTURE / DATA ENGINEERING",
    link: "./aws-cloud-architecture.html",
    newTab: false,
    kind: "case",
    resources: []
  },
  {
    title: "Triverse",
    image: triverseCover,
    imageClass: "triverse-cover",
    desc: "UI/UX design concept for a perfume e-commerce experience with a dreamy cosmic brand identity, product discovery flow, and promotional landing sections.",
    tech: ["Figma", "UI/UX"],
    tag: "UI/UX DESIGN / FIGMA",
    link: "./triverse-project.html",
    newTab: false,
    kind: "project",
    resources: [{ type: "figma", href: "https://www.figma.com/design/6gEzNTqJ5kt9iu1BrrjMNV/LNT-FINPRO?node-id=0-1&t=oLH8m2ZNKI6pQYcj-1" }]
  },
  {
    title: "SIMKOST",
    image: simkostCover,
    imageClass: "simkost-cover",
    desc: "UI/UX design for a boarding-house search platform that helps users discover residences, compare rooms, and review property details in a clean booking interface.",
    tech: ["Figma", "UI/UX"],
    tag: "UI/UX DESIGN / FIGMA",
    link: "./simkost-project.html",
    newTab: false,
    kind: "project",
    resources: [{ type: "figma", href: "https://www.figma.com/design/gkB6gDssRcHJO7qVmjgXiZ/FINPRO-LAB-DATABASE?node-id=0-1&t=UkSp8qPmDSn080af-1" }]
  }
];

function GithubIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16 3.5 17 3.8 17 3.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v4.5c0 .4.2.7.8.6A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function LinkIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L11.6 4.33" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07l1.41-1.41" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function SheetIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v5h5M8 12h8M8 16h8M8 8h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function FigmaIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.5 2A4.5 4.5 0 0 0 4 6.5C4 8 4.74 9.33 5.88 10.15A4.49 4.49 0 0 0 4 13.5 4.5 4.5 0 0 0 8.5 18H10v1.5a4.5 4.5 0 1 0 4.5-4.5H13v-3h1.5a4.5 4.5 0 1 0 0-9H8.5Zm1.5 4.5H8.5a1.5 1.5 0 1 1 0-3H10v3Zm0 4.5H8.5a1.5 1.5 0 1 1 0-3H10v3Zm0 1v3H8.5a1.5 1.5 0 0 1 0-3H10Zm3 7.5a1.5 1.5 0 1 1 0-3H13v3Zm1.5-7.5H13v-3h1.5a1.5 1.5 0 1 1 0 3Z"/></svg>;
}

function ChevronLeft(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function ChevronRight(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function iconFor(type){
  if(type==="github") return <GithubIcon/>;
  if(type==="figma") return <FigmaIcon/>;
  if(type==="excel") return <SheetIcon/>;
  return <LinkIcon/>;
}

function actionLabel(kind){
  return kind === "project" ? "View Project" : "View Case Study";
}

function resourceTarget(item){
  return item.internal ? undefined : "_blank";
}

function resourceRel(item){
  return item.internal ? undefined : "noreferrer";
}

function tiltMove(e){
  const el=e.currentTarget;
  const r=el.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5;
  const y=(e.clientY-r.top)/r.height-.5;
  el.style.setProperty("--rx",`${(-y*9).toFixed(2)}deg`);
  el.style.setProperty("--ry",`${(x*12).toFixed(2)}deg`);
}

function tiltLeave(e){
  e.currentTarget.style.setProperty("--rx","0deg");
  e.currentTarget.style.setProperty("--ry","0deg");
}

function ProjectCard({ project }){
  return <article className="featured-card tilt" onMouseMove={tiltMove} onMouseLeave={tiltLeave}>
    <div className="featured-card-media">
      <img src={project.image} className={project.imageClass || ""} alt={`${project.title} preview`} loading="lazy" />
    </div>
    <div className="project-info">
      <small>{project.tag}</small>
      <h3>{project.title}</h3>
      {project.tech && <div className="project-tech-badges">
        {project.tech.map((tool)=><span key={tool}>{tool}</span>)}
      </div>}
      <p>{project.desc}</p>
      <div className="project-card-actions">
        <a className="project-primary-link" href={project.link} target={project.newTab === false ? undefined : "_blank"} rel={project.newTab === false ? undefined : "noreferrer"}>{actionLabel(project.kind)}</a>
        {project.resources.length > 0 && <div className="project-inline-icons">
          {project.resources.map((item, index) => <a key={`${project.title}-${item.type}-${index}`} className="project-resource-link" href={item.href} target={resourceTarget(item)} rel={resourceRel(item)} aria-label={`${project.title} ${item.type}`}>{iconFor(item.type)}</a>)}
        </div>}
      </div>
    </div>
  </article>;
}

function LoopingRow({ items, rowName }){
  const rowRef = useRef(null);
  const loopItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const row = rowRef.current;
    if(!row) return;

    const setStartPosition = () => {
      const singleWidth = row.scrollWidth / 3;
      row.scrollLeft = singleWidth;
    };

    const handleLoop = () => {
      const singleWidth = row.scrollWidth / 3;
      if(!singleWidth) return;
      if(row.scrollLeft < singleWidth * 0.4){
        row.scrollLeft += singleWidth;
      }else if(row.scrollLeft > singleWidth * 1.6){
        row.scrollLeft -= singleWidth;
      }
    };

    const resizeTimer = () => requestAnimationFrame(setStartPosition);

    setStartPosition();
    row.addEventListener("scroll", handleLoop, { passive: true });
    window.addEventListener("resize", resizeTimer);

    return () => {
      row.removeEventListener("scroll", handleLoop);
      window.removeEventListener("resize", resizeTimer);
    };
  }, [items]);

  const scrollRow = (direction) => {
    const row = rowRef.current;
    if(!row) return;
    const card = row.querySelector(".featured-card");
    const gap = 28;
    const amount = card ? card.getBoundingClientRect().width + gap : row.clientWidth * 0.82;
    row.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return <div className="projects-row-shell">
    <div className="projects-row-meta">
      
    </div>
    <button type="button" className="row-arrow row-arrow-left is-visible" aria-label={`${rowName} scroll left`} onClick={() => scrollRow(-1)}><ChevronLeft/></button>
    <div ref={rowRef} className="horizontal-projects-row">
      {loopItems.map((project, index) => <ProjectCard project={project} key={`${rowName}-${project.title}-${index}`} />)}
    </div>
    <button type="button" className="row-arrow row-arrow-right is-visible" aria-label={`${rowName} scroll right`} onClick={() => scrollRow(1)}><ChevronRight/></button>
  </div>;
}

export default function Projects() {
  const topRow = projects.slice(0, 4);
  const bottomRow = projects.slice(4, 8);

  return (
    <section id="work" className="featured selected-work-section">
      <div className="featured-motion-bg" aria-hidden="true">
        <span className="orb orb-a"></span>
        <span className="orb orb-b"></span>
        <span className="orb orb-c"></span>
        <span className="grid-wave"></span>
      </div>

      <div className="featured-head project-highlights-head">
        <span>SELECTED WORK</span>
        <h2>Project Highlights</h2>
      </div>

      <LoopingRow items={topRow} rowName="Featured Row A"/>
      <LoopingRow items={bottomRow} rowName="Featured Row B"/>
    </section>
  );
}
