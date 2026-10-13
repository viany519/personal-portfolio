const githubUrl = "https://github.com/lynxangels/CGPA-MachineLearningProject";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#dataset", label: "Dataset" },
  { href: "#method", label: "Method" },
  { href: "#results", label: "Results" },
  { href: "#deployment", label: "Deployment" }
];

const models = [
  { name: "Linear", value: 0.053 },
  { name: "Lasso", value: 0.063 },
  { name: "Ridge", value: 0.054 },
  { name: "Random Forest", value: 0.262 },
  { name: "RF Tuned", value: 0.291, best: true }
];

const drivers = [
  { name: "Current semester", value: 0.35 },
  { name: "Class attendance", value: 0.086 },
  { name: "Social media hours", value: 0.057 }
];

const steps = [
  { title: "Preprocessing", note: "log1p + scaling for numeric features, one-hot encoding for categories, fitted on training data only", tag: "No leakage", tone: "pink" },
  { title: "Model comparison", note: "Linear, Lasso, Ridge and Random Forest compared with 5-fold cross-validation", tag: "4 models", tone: "blue" },
  { title: "Tuning", note: "GridSearchCV on Random Forest: 200 trees, max depth 10", tag: "R² 0.291", tone: "olive" },
  { title: "Prediction app", note: "Streamlit form with 22 inputs returns a CGPA estimate, a category and recommendations", tag: "Streamlit", tone: "yellow" }
];

const timeline = [
  { label: "Data", text: "1,194 student survey records" },
  { label: "Pipeline", text: "Preprocessing and feature encoding" },
  { label: "Training", text: "Model comparison and tuning" },
  { label: "Evaluation", text: "MAE, RMSE and R²" },
  { label: "Deploy", text: "Streamlit app exposed through ngrok" }
];

const tiers = [
  { range: "≥ 3.50", name: "High performance", tone: "olive" },
  { range: "2.75 – 3.49", name: "Medium performance", tone: "yellow" },
  { range: "< 2.75", name: "Needs attention", tone: "pink" }
];

const findings = [
  "Current semester is the strongest predictor, with a feature importance of 0.350.",
  "Environmental factors carry 65.6% of total importance, ahead of study habits at 34.4%.",
  "Class attendance is the most predictive habit and outranks daily study hours.",
  "Social media hours show a negative relationship with CGPA.",
  "Family income has almost no linear correlation, yet the forest still uses it, which points to a non-linear effect."
];

const limitations = [
  "Few low-CGPA students, so the model is weaker for at-risk groups.",
  "Data comes from one university in Bangladesh, which limits generalisation.",
  "Self-reported survey answers can carry social desirability bias.",
  "Colab with ngrok is a temporary deployment, not a production setup."
];

function BackIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function GithubIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16 3.5 17 3.8 17 3.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v4.5c0 .4.2.7.8.6A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function ArrowIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function CgpaProject(){
  return <main className="cg-page">
    <div className="cg-frame">
      <aside className="cg-side">
        <div className="cg-brand">cgpa<span>.ml</span></div>
        <nav className="cg-nav" aria-label="Case study sections">
          <small>Case study</small>
          {navItems.map((item, index) => <a key={item.href} href={item.href} className={index === 0 ? "is-active" : undefined}>{item.label}</a>)}
          <small>Links</small>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub repository</a>
          <a href="./index.html#work">Back to portfolio</a>
        </nav>
        <div className="cg-side-note">Group project<b>BINUS University</b></div>
      </aside>

      <div className="cg-body">
        <section className="cg-main">
          <header id="overview" className="cg-head">
            <span className="cg-eyebrow">MACHINE LEARNING • REGRESSION • STREAMLIT</span>
            <h1>Student CGPA Prediction</h1>
            <p>A regression model that estimates a student's CGPA from study habits and social conditions, so academic risk can be spotted before final grades are released. No previous academic grades are used as input.</p>
            <div className="cg-actions">
              <a className="cg-btn cg-btn-dark" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon/> View on GitHub</a>
              <a className="cg-btn cg-btn-light" href="./index.html#work"><BackIcon/> Back to Project Highlights</a>
            </div>
          </header>

          <div className="cg-bento">
            <article id="dataset" className="cg-tile cg-yellow">
              <h2>Dataset:</h2>
              <div className="cg-stats">
                <div><strong>1,194</strong><span>STUDENTS</span></div>
                <div><strong>22</strong><span>FEATURES</span></div>
                <div><strong>0</strong><span>MISSING</span></div>
              </div>
              <p>Survey of BCSE students at a private university in Bangladesh (Hasan et al., 2024). Target: CGPA on a 0.0 to 4.0 scale.</p>
              <svg className="cg-shape" viewBox="0 0 100 100" aria-hidden="true"><path d="M38 6h24v32h32v24H62v32H38V62H6V38h32z" fill="currentColor"/></svg>
            </article>

            <article id="results" className="cg-tile cg-pink">
              <h2>Model results:</h2>
              <div className="cg-stats">
                <div><strong>0.291</strong><span>R² (TUNED)</span></div>
                <div><strong>0.443</strong><span>MAE</span></div>
                <div><strong>5-fold</strong><span>CROSS-VAL</span></div>
              </div>
              <div className="cg-bars" role="img" aria-label="Cross-validation R² by model">
                {models.map((item) => <div key={item.name} className={item.best ? "cg-bar is-best" : "cg-bar"}>
                  <i style={{height:`${Math.round((item.value / 0.3) * 100)}%`}}></i>
                  <span>{item.name}</span>
                </div>)}
              </div>
              <svg className="cg-shape cg-shape-heart" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 90C12 62 4 40 14 24c9-14 28-12 36 4 8-16 27-18 36-4 10 16 2 38-36 66z" fill="currentColor"/></svg>
            </article>

            <article className="cg-tile cg-olive">
              <h2>Top drivers:</h2>
              <ul className="cg-drivers">
                {drivers.map((item) => <li key={item.name}>
                  <span>{item.name}</span>
                  <div><i style={{width:`${Math.round((item.value / 0.35) * 100)}%`}}></i></div>
                  <b>{item.value.toFixed(3)}</b>
                </li>)}
              </ul>
              <svg className="cg-shape cg-shape-tri" viewBox="0 0 100 100" aria-hidden="true"><path d="M4 8h92L50 94z" fill="currentColor"/></svg>
            </article>

            <article id="deployment" className="cg-tile cg-blue">
              <h2>Deployment:</h2>
              <div className="cg-stats">
                <div><strong>22</strong><span>INPUTS</span></div>
                <div><strong>3</strong><span>TIERS</span></div>
                <div><strong>0–4</strong><span>CGPA</span></div>
              </div>
              <p>Streamlit app running on Google Colab and shared through an ngrok tunnel.</p>
              <svg className="cg-shape cg-shape-star" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 2l9 22 22-9-9 22 22 9-22 9 9 22-22-9-9 22-9-22-22 9 9-22-22-9 22-9-9-22 22 9z" fill="currentColor"/></svg>
            </article>
          </div>

          <section id="method" className="cg-section">
            <h2>Method</h2>
            <div className="cg-steps">
              {steps.map((item, index) => <div key={item.title} className={`cg-step cg-step-${item.tone}`}>
                <b>{index + 1}</b>
                <div><strong>{item.title}</strong><span>{item.note}</span></div>
                <em>{item.tag}</em>
              </div>)}
            </div>
          </section>

          <section className="cg-section cg-split">
            <article className="cg-panel cg-panel-pink">
              <h2>Key findings</h2>
              <ul>{findings.map((text) => <li key={text}>{text}</li>)}</ul>
            </article>
            <article className="cg-panel cg-panel-plain">
              <h2>Limitations</h2>
              <ul>{limitations.map((text) => <li key={text}>{text}</li>)}</ul>
            </article>
          </section>
        </section>

        <aside className="cg-right">
          <div className="cg-card">
            <h2>Pipeline timeline</h2>
            <ol className="cg-timeline">
              {timeline.map((item) => <li key={item.label}><b>{item.label}</b><span>{item.text}</span></li>)}
            </ol>
          </div>

          <div className="cg-card">
            <h2>Output categories</h2>
            <ul className="cg-tiers">
              {tiers.map((item) => <li key={item.name} className={`cg-tier-${item.tone}`}><span>{item.range}</span><b>{item.name}</b></li>)}
            </ul>
          </div>

          <a className="cg-btn cg-btn-dark cg-btn-wide" href={githubUrl} target="_blank" rel="noreferrer">Open repository <ArrowIcon/></a>
        </aside>
      </div>
    </div>
  </main>;
}
