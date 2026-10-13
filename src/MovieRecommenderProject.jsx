import curtain from "./assets/images/movie-recommender-bg.jpg";

const liveUrl = "https://movie-recommender-ai-khaki.vercel.app/";
const githubUrl = "https://github.com/viany519/movie-recommender-ai";
const datasetUrl = "https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata";

const facts = [
  { label: "Input", text: "Any movie title, even in lowercase or messy capitalization" },
  { label: "Output", text: "Five similar films ranked by similarity percentage" },
  { label: "Detail", text: "Synopsis, rating, runtime and more for every film" }
];

const weights = [
  { name: "Synopsis", note: "Semantic embedding", value: 60 },
  { name: "Genre", note: "Genre similarity", value: 25 },
  { name: "Keywords", note: "Keyword similarity", value: 15 }
];

const stack = [
  { title: "Frontend", tool: "Next.js on Vercel", text: "A responsive web interface with forgiving title search and detailed movie cards." },
  { title: "Backend", tool: "FastAPI", text: "A REST API that serves the movie list and returns the top five recommendations." },
  { title: "AI Model", tool: "Hugging Face", text: "The trained model files are stored on Hugging Face and used by the backend." }
];

function BackIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function GithubIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 .7 12c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16 3.5 17 3.8 17 3.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v4.5c0 .4.2.7.8.6A11.3 11.3 0 0 0 23.3 12 11.3 11.3 0 0 0 12 .7Z"/></svg>;
}

function LinkIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L11.6 4.33" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07l1.41-1.41" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function DatabaseIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function ArrowIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function MovieRecommenderProject(){
  return <main className="mr-page" style={{ backgroundImage: `url("${curtain}")` }}>
    <div className="mr-shade" aria-hidden="true"></div>
    <div className="mr-wrap">
      <nav className="mr-top" aria-label="Project links">
        <a className="mr-back" href="./index.html#work"><BackIcon/> Back to Project Highlights</a>
        <div className="mr-icons">
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Movie Recommender AI GitHub repository"><GithubIcon/></a>
          <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Movie Recommender AI live website"><LinkIcon/></a>
        </div>
      </nav>

      <header className="mr-head">
        <span className="mr-eyebrow">AI • NLP • RECOMMENDATION SYSTEM</span>
        <h1>Movie Recommender AI</h1>
        <p>A web app that suggests five films similar to any title you type, matched by story synopsis, genre, and keywords.</p>
        <div className="mr-actions">
          <a className="mr-cta" href={liveUrl} target="_blank" rel="noreferrer">
            <span className="mr-cta-icon"><LinkIcon/></span>
            <span className="mr-cta-text"><b>Try the Live Website</b><small>movie-recommender-ai-khaki.vercel.app</small></span>
            <ArrowIcon/>
          </a>
          <a className="mr-btn" href={datasetUrl} target="_blank" rel="noreferrer"><DatabaseIcon/> View Dataset</a>
          <a className="mr-btn" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon/> GitHub</a>
        </div>
      </header>

      <div className="mr-grid">
        <article className="mr-card mr-wide">
          <h2>Case Study</h2>
          <p>Streaming platforms offer thousands of titles, which makes it hard to find a new film that feels like the one you just loved. This project turns that into a single search: type a movie you enjoyed and the app returns the five films with the closest story, genre, and themes, each ranked by a similarity score.</p>
          <ul className="mr-facts">
            {facts.map((item) => <li key={item.label}><b>{item.label}</b><span>{item.text}</span></li>)}
          </ul>
        </article>

        <article className="mr-card">
          <h2>Dataset</h2>
          <p>The TMDB 5000 Movie Dataset from Kaggle, cleaned into about 4,800 unique films. Each film is described by its synopsis, genres, and keywords, and the same dataset supplies the rating, runtime, budget, and other details shown on the result cards.</p>
          <div className="mr-stats">
            <div><strong>4,800</strong><span>FILMS</span></div>
            <div><strong>3</strong><span>TEXT SIGNALS</span></div>
          </div>
          <a className="mr-btn mr-btn-solid" href={datasetUrl} target="_blank" rel="noreferrer"><DatabaseIcon/> Open dataset on Kaggle</a>
        </article>

        <article className="mr-card">
          <h2>Model</h2>
          <p>A hybrid content-based model. Each synopsis is turned into a semantic embedding with the all-MiniLM-L6-v2 Sentence Transformer, then combined with genre and keyword similarity into one final score. Similarities between all films are pre-computed, so recommendations return instantly.</p>
          <div className="mr-weights" role="img" aria-label="Score weights: synopsis 60%, genre 25%, keywords 15%">
            <div className="mr-weight-bar">
              {weights.map((item, index) => <i key={item.name} className={`mr-w${index + 1}`} style={{ width: `${item.value}%` }}>{item.value}%</i>)}
            </div>
            <ul>
              {weights.map((item, index) => <li key={item.name}><u className={`mr-w${index + 1}`}></u><b>{item.name}</b><span>{item.note}</span></li>)}
            </ul>
          </div>
        </article>

        <article className="mr-card mr-wide">
          <h2>Deployment</h2>
          <div className="mr-stack">
            {stack.map((item, index) => <div key={item.title} className="mr-step">
              <em>{index + 1}</em>
              <small>{item.title}</small>
              <strong>{item.tool}</strong>
              <span>{item.text}</span>
            </div>)}
          </div>
          <p className="mr-note">The frontend and backend are kept in two separate GitHub repositories.</p>
        </article>
      </div>
    </div>
  </main>;
}
