import profile from "../assets/images/profile.png";

export default function IdCard(){
  return <div className="portfolio-id-shell">
    <div className="portfolio-id-string"></div>
    <div className="portfolio-id-clip"></div>
    <div className="portfolio-id-card">
      <span className="portfolio-id-chip">Portfolio Access</span>
      <div className="portfolio-id-top">
        <div>
          <small>Creative Identity Pass</small>
          <h3>Vianny</h3>
          <p>Computer Science Student</p>
        </div>
        <span className="portfolio-id-badge">BINUS</span>
      </div>
      <div className="portfolio-id-main">
        <div className="portfolio-id-photo">
          <img src={profile} alt="Maria Yohana Vianny Leo"/>
        </div>
        <div className="portfolio-id-copy">
          <div><span>Full Name</span><b>Maria Yohana Vianny Leo</b></div>
          <div><span>Focus</span><b>Data Science &amp; AI</b></div>
          <div><span>Location</span><b>West Jakarta</b></div>
        </div>
      </div>
      <div className="portfolio-id-footer">
        <span>vianyleo519@gmail.com</span>
        <span>ID 2026 / DS TRACK</span>
      </div>
      <div className="portfolio-id-barcode"><i></i></div>
    </div>
  </div>;
}
