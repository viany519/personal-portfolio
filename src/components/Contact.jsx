function MailIcon(){return <svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3 8 5 8-5"/></svg>}
function PhoneIcon(){return <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>}
function PinIcon(){return <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
function LinkedinIcon(){return <svg viewBox="0 0 24 24"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.95 1.95 0 1 0 5.25 6.9 1.95 1.95 0 0 0 5.25 3ZM20.44 13.5c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.88V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.71v-6.5Z"/></svg>}
function InstagramIcon(){return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.8" r="1"/></svg>}
function GithubIcon(){return <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}

function Contact(){
 const handleInquiry=(event)=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const name=(form.get("name")||"").toString().trim();
  const email=(form.get("email")||"").toString().trim();
  const message=(form.get("message")||"").toString().trim();
  const subject=encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body=encodeURIComponent(`Hi Vianny,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href=`mailto:vianyleo519@gmail.com?subject=${subject}&body=${body}`;
 };

 return <section id="contact" className="contact contact-page">
  <div className="contact-head"><span>CONTACT</span><h2>Open to Opportunities</h2><p>Have an internship opportunity, research idea, or data-driven project in mind? I am always open to meaningful collaborations where technology, data, and thoughtful problem solving can create real value.</p></div>
  <div className="contact-grid">
   <div className="contact-info">
    <h3>Contact Details</h3><p>Feel free to reach out through any of the channels below.</p>
    <a className="contact-item" href="mailto:vianyleo519@gmail.com"><MailIcon/><div><b>Email</b><br/>vianyleo519@gmail.com</div></a>
    <a className="contact-item" href="https://wa.me/6281213664964" target="_blank" rel="noreferrer"><PhoneIcon/><div><b>WhatsApp</b><br/>0812-1366-4964</div></a>
    <div className="contact-item"><PinIcon/><div><b>Location</b><br/>West Jakarta</div></div>
    <div className="socials contact-socials"><a href="https://www.linkedin.com/in/maria-yohana-vianny-leo-962076326?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"><LinkedinIcon/></a><a href="https://instagram.com/vlviany_" target="_blank" rel="noreferrer"><InstagramIcon/></a><a href="https://github.com/viany519" target="_blank" rel="noreferrer"><GithubIcon/></a></div>
   </div>
   <form className="contact-card" onSubmit={handleInquiry}>
    <h3>Send a Message</h3>
    <p>Tell me what you are working on, what you need, or where you see a potential fit, and I will be happy to continue the conversation.</p>
    <label className="form-field"><span>Full Name</span><input type="text" name="name" placeholder="Your name" required/></label>
    <label className="form-field"><span>Email Address</span><input type="email" name="email" placeholder="you@example.com" required/></label>
    <label className="form-field"><span>Message</span><textarea name="message" placeholder="Tell me about your inquiry..." rows="5" required></textarea></label>
    <button type="submit">Submit Inquiry ↗</button>
    <small className="form-note">This opens your email app with the inquiry pre-filled and addressed to me.</small>
   </form>
  </div>
 </section>
}
export default Contact;
