import { Fragment } from "react";
import IdCard from "./IdCard";
import stempediaTeam from "../assets/images/experience-stempedia-team.jpg";
import stempediaCertificate from "../assets/images/experience-stempedia-certificate.jpg";
import freshmenFavourite from "../assets/images/experience-freshmen-favourite.jpg";
import freshmenGroup from "../assets/images/experience-freshmen-group.jpg";
import freshmenLeaderPhoto from "../assets/images/experience-freshmen-leader-photo.png";
import icscGroup from "../assets/images/experience-icsc-group.png";
import icscHerbal from "../assets/images/experience-icsc-herbal.png";
import certificateAI from "../assets/images/certificate-ai900.png";
import certificateBNCC from "../assets/images/certificate-bncc.png";

const experiences = [
  {period:"May 2026",title:"International Event Operations Associate",org:"STEMpedia / Codeavour 7.0 International Showdown",
  points:[
    "Facilitated technical setups, participant registrations, competition task executions, and crowd management for an international robotics and AI event at BINUS University Alam Sutera.",
    "Coordinated operational support and cross-cultural communication for student competitors hailing from various countries, ensuring smooth tournament execution. Awarded an official Letter of Recommendation from the FSEF Director for outstanding leadership, operational agility, and fast-paced problem-solving."
  ],
  highlight:"International Operations • Leadership • Problem Solving",
  photos:[{src:stempediaTeam,alt:"Codeavour team",position:"center 30%"},{src:stempediaCertificate,alt:"Certificate",position:"center 62%"}]},
  {period:"Jul 2025 — Sep 2025",title:"Freshmen Leader B29",org:"BINUS University Orientation Program",
  points:[
    "Mentored and supported 45 incoming Computer Science freshmen by providing academic guidance, campus orientation, and peer support.",
    "Coordinated orientation activities with the leadership team, achieving a perfect KPI score of 4.00/4.00 and receiving a BINUS Certificate of Appreciation."
  ],
  highlight:"Mentorship • Orientation Leadership • KPI 4.00 / 4.00",
  photos:[{src:freshmenLeaderPhoto,alt:"Freshmen Leader documentation",position:"center 40%"},{src:freshmenFavourite,alt:"Freshmen team",position:"center 62%"}]},
  {period:"Feb 2025 — Feb 2026",title:"STAMANARA — Organization Experience",org:"BINUS University",
  roles:[
    {title:"Human Resource Development (HRD)",points:["Managed member recruitment through candidate screening, interviews, applicant evaluation, and onboarding preparation.","Maintained member databases, attendance records, and communication channels to support organizational operations."]},
    {title:"Finance & Event Division — Community Service Program",points:["Managed event budgeting, expense tracking, and resource allocation for operational needs.","Coordinated schedules, rehearsals, and logistics for a community service performance program at SMPN 3 Malang."]},
    {title:"Event Division — Cross-Institutional Benchmarking",points:["Organized benchmarking activities with POLINEMA Dance Club to exchange organizational insights.","Prepared event rundown, interactive activities, and coordination flow to support successful program execution."]}
  ],
  highlight:"Recruitment • Financial Management • Event Planning • Collaboration"},
  {period:"Mar 2025 — Jun 2025",title:"Class Coordinator | ICSC Community Project",org:"Teach For Indonesia Student Community (TFISC)",
  points:[
    "Led a student team supporting an economic empowerment initiative for herbal medicine UMKM CV Caraka Abadi by delegating responsibilities and monitoring project execution.",
    "Managed operational schedules, coordinated live class workflows, and prepared project progress reports for stakeholders."
  ],
  highlight:"Project Management • Team Leadership • Reporting",
  photos:[{src:icscGroup,alt:"ICSC project",position:"center"},{src:icscHerbal,alt:"CV Caraka Abadi",position:"center"}]},
  {period:"2025",title:"Peer Counselor & Event Contributor",org:"Friends Care Community | BINUS Malang",
  points:[
    "Served as MC for BINUS FESTIVAL Mental Health Workshop by managing speaker transitions and audience engagement.",
    "Coordinated event rundown and operational flow with the organizing committee."
  ],
  highlight:"Public Speaking • Event Operations"}
];

function ButterflyIcon(){
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M30.5 31.5C25.7 18.1 15.1 8.9 8.9 15.4c-5.2 5.5 1.7 16.2 15.4 18.5-10.8 2.9-15.4 10.7-10.1 14.8 5.4 4.2 13.1-3.2 17.3-13.2"/><path d="M33.5 31.5C38.3 18.1 48.9 8.9 55.1 15.4c5.2 5.5-1.7 16.2-15.4 18.5 10.8 2.9 15.4 10.7 10.1 14.8-5.4 4.2-13.1-3.2-17.3-13.2"/><path d="M32 27v15"/><circle cx="32" cy="24" r="2.2"/></svg>;
}

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-bg" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
        <span className="experience-butterfly experience-butterfly-one"><ButterflyIcon/></span>
        <span className="experience-butterfly experience-butterfly-two"><ButterflyIcon/></span>
        <span className="experience-butterfly experience-butterfly-three"><ButterflyIcon/></span>
      </div>
      <div className="experience-head">
        <span>EXPERIENCE</span>
        <h2>Experience, Education &amp; Certifications</h2>
        <p>A concise overview of the roles, academic background, and credentials that shape my work in data, technology, leadership, and event operations.</p>
      </div>

      <div className="experience-layout">
        <div className="credential-stack">
          <div className="credential-panel education-panel">
            <div className="credential-heading"><span>EDUCATION</span></div>
            <div className="credential-item">
              <span>2024 — 2028</span>
              <h3>BINUS University Jakarta</h3>
              <p>Bachelor of Computer Science — Data Science Streaming Program</p>
              <strong>GPA 3.85 / 4.00</strong>
            </div>
            <div className="credential-item">
              <span>2021 — 2024</span>
              <h3>SMAN 1 Larantuka</h3>
              <p>Mathematics and Natural Sciences Major</p>
            </div>
          </div>

          <div className="credential-panel certification-panel">
            <div className="credential-heading"><span>CERTIFICATIONS</span></div>
            <div className="credential-item">
              <span>Mar 2026</span>
              <h3>Microsoft Certified: Azure AI Fundamentals (AI-900)</h3>
              <p>Microsoft</p>
              <img className="certificate-image" src={certificateAI} alt="Microsoft AI-900 certificate"/><strong>Credential ID: 11154112181489/GreatNusa/III/2026</strong>
            </div>
            <div className="credential-item">
              <span>Aug 2025</span>
              <h3>Front-End Development Certification</h3>
              <p>Bina Nusantara Computer Club (BNCC) — High Distinction</p>
              <img className="certificate-image" src={certificateBNCC} alt="BNCC Front-End certificate"/><strong>Credential ID: 052/LnT/III/MEMBER/BNCC/MLG/XXXV/08.2025</strong>
            </div>
          </div>
          <div className="credential-panel recommendation-panel">
  <div className="credential-heading">
    <span>LETTER OF RECOMMENDATION</span>
  </div>

  <div className="credential-item">
    <span>MAY 2026</span>

    <h3>Future Skills Education Foundation (FSEF)</h3>

    <p>
      Received a letter of recommendation from the FSEF Director
      for exceptional volunteer contributions during the
      Codeavour 7.0 International Showdown at BINUS University,
      Jakarta (16–17 May 2026).
    </p>

    <p>
      Recognized for leadership, technical and event operations,
      participant coordination, and mentoring in AI, coding,
      and robotics.
    </p>

    <a
  className="recommendation-link"
  href={`${import.meta.env.BASE_URL}files/letter-of-recommendation.jpg`}
  target="_blank"
  rel="noopener noreferrer"
>
  View Recommendation Letter
  <span aria-hidden="true">↗</span>
</a>
  </div>
</div>

          <div className="credential-panel experience-id-panel">
            <div className="credential-heading"><span>PORTFOLIO ID</span></div>
            <IdCard/>
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((item,index)=>(
            <Fragment key={item.title}>
              <article className="experience-card" style={{"--delay":`${index * .08}s`}}>
                <div className="experience-card-top"><span>{item.period}</span></div>
                <h3>{item.title}</h3>
                <h4>{item.org}</h4>
                {item.roles ? <div className="experience-roles">{item.roles.map((role)=>(
                  <div className="experience-role" key={role.title}>
                    <h5>{role.title}</h5>
                    <ul>{role.points.map((point)=><li key={point}>{point}</li>)}</ul>
                  </div>
                ))}</div> : <ul className="experience-points">{item.points.map((point)=><li key={point}>{point}</li>)}</ul>}
                {item.photos && <div className="experience-photos">
                  {item.photos.map((photo)=>(
                    <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" style={{objectPosition:photo.position}}/>
                  ))}
                </div>}
                <small>{item.highlight}</small>
              </article>
              {index < experiences.length - 1 && <div className="experience-rope" aria-hidden="true"><i></i></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
