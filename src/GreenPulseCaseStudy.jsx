import greenPulseCover from "./assets/images/greenpulse-cover.png";
import dashboardDesign from "./assets/images/greenpulse-dashboard.png";
import pickPlantDesign from "./assets/images/greenpulse-pick-plant.png";
import monitoringDesign from "./assets/images/greenpulse-monitoring.png";

const liveUrl = "https://smart-irrigation-web-ai-xt1z.vercel.app/login.html";
const githubUrl = "https://github.com/viany519/smart-irrigation-web-ai";

function GithubIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16 3.5 17 3.8 17 3.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v4.5c0 .4.2.7.8.6A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function ArrowIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Leaf({className=""}){
  return <svg className={className} viewBox="0 0 80 120" aria-hidden="true"><path d="M69 8C34 18 8 47 12 78c3 24 24 36 42 23 23-17 23-57 15-93Z" fill="currentColor" opacity=".16"/><path d="M18 101C30 72 44 48 65 19" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".45"/><path d="M29 77c10-1 18-5 25-12M39 57c7 0 13-3 19-8M24 86c-2-8-2-16 0-24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".28"/></svg>;
}

function Metric({value,label}){
  return <div className="gp-metric"><strong>{value}</strong><span>{label}</span></div>;
}

export default function GreenPulseCaseStudy(){
  return <main className="gp-case-page">
    <div className="gp-grid-bg" aria-hidden="true"></div>
    <Leaf className="gp-leaf gp-leaf-a"/><Leaf className="gp-leaf gp-leaf-b"/><Leaf className="gp-leaf gp-leaf-c"/>

    <header className="gp-topbar">
      <a className="gp-back" href="./index.html#work">← Back to portfolio</a>
      <div className="gp-case-brand"><span className="gp-brand-mark">⌁</span><span>greenpulse</span></div>
      <div className="gp-top-actions">
        <a className="gp-icon-link" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Open Green Pulse GitHub repository"><GithubIcon/></a>
        <a className="gp-live-small" href={liveUrl} target="_blank" rel="noreferrer">Live website <ArrowIcon/></a>
      </div>
    </header>

    <section className="gp-hero-case">
      <div className="gp-hero-copy gp-reveal">
        <span className="gp-eyebrow">AI • SMART IRRIGATION • WEB APPLICATION</span>
        <h1>Green Pulse</h1>
        <p className="gp-lead">An AI-assisted watering decision support system designed to help household users determine when indoor plants need water based on environmental data.</p>
        <p className="gp-intro">Green Pulse is a proof-of-concept web application that integrates a machine learning model with a plant monitoring workflow. In the current implementation, users manually enter environmental readings to simulate Arduino sensor input. The model classifies plant conditions as Healthy or Needs Watering, while the interface helps users manage plants, monitor conditions, and record watering-related activities. The system is designed as a foundation for future integration with physical sensors and automatic real-time data collection.</p>
        <div className="gp-hero-actions">
          <a className="gp-primary-cta" href={liveUrl} target="_blank" rel="noreferrer">Visit Green Pulse <ArrowIcon/></a>
          <a className="gp-github-cta" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon/> GitHub repository</a>
        </div>
        <div className="gp-metrics-row">
          <Metric value="3" label="core model inputs"/>
          <Metric value="AI" label="watering classification"/>
          <Metric value="Web" label="decision support dashboard"/>
        </div>
      </div>

      <div className="gp-hero-visual gp-reveal gp-delay-1">
        <div className="gp-photo-frame"><img src={greenPulseCover} alt="Indoor plant watering scene"/></div>
        <div className="gp-floating-card gp-floating-card-one"><span>SOIL MOISTURE</span><strong>75%</strong><small>Healthy range</small></div>
        <div className="gp-floating-card gp-floating-card-two"><span>AI STATUS</span><strong>Water wisely</strong><small>Recommendation ready</small></div>
      </div>
    </section>

    <section className="gp-section gp-overview gp-reveal">
      <div className="gp-section-label">01 / OVERVIEW</div>
      <div className="gp-overview-grid">
        <div>
          <h2>Environmental data, translated into watering decisions.</h2>
          <p>Green Pulse was developed to address inconsistent household plant watering caused by limited monitoring and reliance on manual judgment. Instead of presenting environmental readings as isolated numbers, the system uses a trained machine learning model to translate those values into a clear watering recommendation. The current prototype validates this sensor–AI–decision workflow through simulated sensor input, providing a foundation for future physical sensor integration.</p>
        </div>
        <div className="gp-tech-card">
          <span>PROJECT STACK</span>
          <div className="gp-tech-list"><b>Frontend</b><p>HTML, CSS, JavaScript</p><b>Backend</b><p>Python + FastAPI</p><b>AI</b><p>Logistic Regression classifier integrated through FastAPI</p><b>Deployment</b><p>Vercel + GitHub</p></div>
        </div>
      </div>
    </section>

    <section className="gp-section gp-overview gp-reveal">
      <div className="gp-section-label">02 / DATASET &amp; MODEL</div>
      <div className="gp-overview-grid">
        <div>
          <h2>From historical sensor data to watering decisions.</h2>
          <p>The machine learning model was developed using a historical environmental sensor dataset obtained from Mendeley Data. The dataset represents a small-scale irrigation environment: soil moisture is used as the primary indicator, supported by temperature and humidity measurements, while watering status provides the target label for learning when irrigation is required.</p>
          <p>Logistic Regression, Decision Tree, Random Forest, and Support Vector Machine (SVM) were evaluated during model development. Logistic Regression was selected as the final model because it provided stable performance, clear interpretability, and low computational complexity for the binary watering classification task.</p>
          <p>Because the dataset contains a strong relationship between soil moisture and watering status, this prototype primarily learns the irrigation decision pattern represented in the dataset rather than the full biological complexity of plant water requirements across different species and growing conditions.</p>
        </div>
        <div className="gp-tech-card">
          <span>DATASET SNAPSHOT</span>
          <div className="gp-tech-list"><b>Source</b><p>Mendeley Data</p><b>Core inputs</b><p>Soil moisture, temperature, humidity</p><b>Target</b><p>Watering status → Healthy / Needs Watering</p><b>Final model</b><p>Logistic Regression</p></div>
        </div>
      </div>
    </section>

    <section className="gp-section gp-features">
      <div className="gp-section-label">03 / CORE EXPERIENCE</div>
      <div className="gp-section-head gp-reveal"><h2>What Green Pulse does</h2><p>The interface supports the complete decision-making flow—from managing a plant and entering simulated sensor readings to receiving an AI watering recommendation and recording the user's action.</p></div>
      <div className="gp-feature-grid">
        <article className="gp-feature-card gp-reveal"><span>01</span><h3>Plant management</h3><p>Add and select plants so monitoring data, AI predictions, and watering history remain associated with the active plant.</p></article>
        <article className="gp-feature-card gp-reveal gp-delay-1"><span>02</span><h3>Environmental monitoring</h3><p>Enter soil moisture, temperature, and humidity readings manually as a simulation of sensor input, then review the latest condition of the active plant through the monitoring interface.</p></article>
        <article className="gp-feature-card gp-reveal gp-delay-2"><span>03</span><h3>AI watering recommendation</h3><p>The entered environmental readings are processed by a Logistic Regression model through FastAPI, producing a clear classification of Healthy or Needs Watering to support the user's watering decision.</p></article>
        <article className="gp-feature-card gp-reveal"><span>04</span><h3>Human-in-the-loop watering</h3><p>Green Pulse does not activate a physical irrigation pump in the current prototype. The AI provides a watering recommendation, while the user remains responsible for performing and recording the watering action.</p></article>
      </div>
    </section>

    <section className="gp-section gp-flow gp-reveal">
      <div className="gp-section-label">04 / SYSTEM FLOW</div>
      <h2>From simulated sensor input to watering recommendation</h2>
      <div className="gp-flow-track">
        <div><span>1</span><b>Choose plant</b><p>Select the plant that will be monitored.</p></div>
        <i>→</i>
        <div><span>2</span><b>Input readings</b><p>Manually enter environmental values representing sensor measurements.</p></div>
        <i>→</i>
        <div><span>3</span><b>AI prediction</b><p>FastAPI sends the input to the trained Logistic Regression model.</p></div>
        <i>→</i>
        <div><span>4</span><b>Make a decision</b><p>Review the Healthy or Needs Watering result and decide whether the plant should be watered.</p></div>
      </div>
    </section>

    <section className="gp-section gp-design-section">
      <div className="gp-section-label">05 / FIGMA INTERFACE DESIGN</div>
      <div className="gp-section-head gp-reveal"><h2>Interface exploration</h2><p>The interface was designed to make environmental data and AI predictions easy to understand for household users. Clean white surfaces, botanical green accents, structured cards, and generous spacing keep plant information, sensor input, and watering recommendations clear at a glance.</p></div>

      <div className="gp-design-list">
        <article className="gp-design-row gp-reveal">
          <div className="gp-design-copy"><span>Dashboard</span><h3>Everything important, at a glance.</h3><p>The dashboard brings the active plant, latest environmental readings, reminders, and AI watering recommendation into one overview, giving users a clear starting point for plant-care decisions.</p></div>
          <div className="gp-design-image"><img src={dashboardDesign} alt="Green Pulse dashboard Figma design"/></div>
        </article>
        <article className="gp-design-row gp-design-row-reverse gp-reveal">
          <div className="gp-design-copy"><span>Plant selection</span><h3>A visual way to choose what you monitor.</h3><p>Plant cards allow users to manage multiple plants and select one active plant, ensuring monitoring data, AI predictions, and history remain specific to the plant currently being viewed.</p></div>
          <div className="gp-design-image"><img src={pickPlantDesign} alt="Green Pulse pick plant Figma design"/></div>
        </article>
        <article className="gp-design-row gp-reveal">
          <div className="gp-design-copy"><span>Monitoring</span><h3>Sensor data without visual noise.</h3><p>The monitoring interface presents the latest manually entered sensor values together with the plant condition and AI prediction, helping users understand how environmental readings relate to the watering recommendation.</p></div>
          <div className="gp-design-image"><img src={monitoringDesign} alt="Green Pulse monitoring Figma design"/></div>
        </article>
      </div>
    </section>

    <section className="gp-section gp-build gp-reveal">
      <div className="gp-build-copy"><span className="gp-eyebrow">DESIGN → DEVELOPMENT → AI</span><h2>Built as a working smart-irrigation prototype.</h2><p>Green Pulse was built as a functional proof of concept for AI-assisted plant watering. The web interface is connected to a FastAPI backend and a trained Logistic Regression model, while environmental readings are currently entered manually to simulate Arduino sensor input. This implementation validates the complete input–AI–recommendation workflow without claiming full physical IoT integration.</p><p><strong>Current limitation &amp; future direction —</strong> Green Pulse is not yet connected directly to physical sensors or an irrigation pump, so environmental data is not collected automatically in real time. A future version is intended to integrate Arduino or other microcontrollers with physical soil-moisture and environmental sensors, allowing readings to be transmitted automatically to the web application for continuous monitoring and AI-assisted irrigation decisions.</p><p>User and plant data are currently stored locally in the browser, making the prototype device-specific. Future development can introduce centralized database storage and server-side authentication to support synchronization across devices.</p></div>
      <div className="gp-build-values"><div><b>01</b><span>Plant-centered monitoring</span></div><div><b>02</b><span>Simulated sensor workflow</span></div><div><b>03</b><span>AI decision support</span></div></div>
    </section>

    <section className="gp-case-cta gp-reveal">
      <Leaf className="gp-cta-leaf"/>
      <span>EXPLORE THE WORKING PROJECT</span>
      <h2>See Green Pulse in action.</h2>
      <p>Explore the working proof of concept, test the AI-assisted watering workflow, or review the implementation and source code on GitHub.</p>
      <div className="gp-hero-actions gp-cta-actions">
        <a className="gp-primary-cta gp-primary-light" href={liveUrl} target="_blank" rel="noreferrer">Open live website <ArrowIcon/></a>
        <a className="gp-github-cta gp-github-light" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon/> View on GitHub</a>
      </div>
    </section>

    <footer className="gp-footer"><a href="./index.html#work">← Back to Project Highlights</a><span>Green Pulse • Smart Irrigation Case Study</span></footer>
  </main>;
}
