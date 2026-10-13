function BackIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function FigmaIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.5 2A4.5 4.5 0 0 0 4 6.5C4 8 4.74 9.33 5.88 10.15A4.49 4.49 0 0 0 4 13.5 4.5 4.5 0 0 0 8.5 18H10v1.5a4.5 4.5 0 1 0 4.5-4.5H13v-3h1.5a4.5 4.5 0 1 0 0-9H8.5Zm1.5 4.5H8.5a1.5 1.5 0 1 1 0-3H10v3Zm0 4.5H8.5a1.5 1.5 0 1 1 0-3H10v3Zm0 1v3H8.5a1.5 1.5 0 0 1 0-3H10Zm3 7.5a1.5 1.5 0 1 1 0-3H13v3Zm1.5-7.5H13v-3h1.5a1.5 1.5 0 1 1 0 3Z"/></svg>;
}

function ArrowIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function Metric({label,value}){
  return <div className="ux-metric"><span>{label}</span><strong>{value}</strong></div>;
}

export default function UiUxProjectPage({theme,title,eyebrow,summary,description,figmaUrl,heroImage,secondaryImage,metrics}){
  return <main className={`ux-page ${theme}`}>
    <header className="ux-topbar">
      <a className="ux-back" href="./index.html#work"><BackIcon/> Back to portfolio</a>
      <div className="ux-top-meta">UI/UX project</div>
    </header>

    <section className="ux-hero ux-hero-compact">
      <div className="ux-copy">
        <span className="ux-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="ux-summary">{summary}</p>
        <p className="ux-description">{description}</p>
        <div className="ux-actions">
          <a className="ux-primary" href={figmaUrl} target="_blank" rel="noreferrer"><FigmaIcon/> Open Figma</a>
          <a className="ux-secondary" href="./index.html#work">Back to Project Highlights <ArrowIcon/></a>
        </div>
        <div className="ux-metrics-row">
          {metrics.map((item) => <Metric key={item.label} label={item.label} value={item.value} />)}
        </div>
      </div>
      <div className="ux-hero-visual">
        <img src={heroImage} alt={`${title} primary interface`} />
      </div>
    </section>

    <section className="ux-section ux-gallery-section ux-gallery-tight">
      <div className="ux-section-head">
        <span>INTERFACE PREVIEW</span>
        <h2>Selected screens</h2>
      </div>
      <div className="ux-gallery-grid">
        <div className="ux-gallery-card ux-gallery-card-large"><img src={heroImage} alt={`${title} screen one`} /></div>
        <div className="ux-gallery-card"><img src={secondaryImage} alt={`${title} screen two`} /></div>
      </div>
    </section>

    <section className="ux-cta ux-cta-compact">
      <span>SEE THE FULL DESIGN</span>
      <h2>Open the full Figma file.</h2>
      <p>For the complete user flow and design details, continue to the Figma prototype.</p>
      <a className="ux-primary" href={figmaUrl} target="_blank" rel="noreferrer"><FigmaIcon/> View Project in Figma</a>
    </section>
  </main>;
}
