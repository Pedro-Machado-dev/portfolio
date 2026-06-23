function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="section-tag">Contact</p>

      <h2 className="section-title">Let's connect</h2>

      <p className="section-description">
        I am open to internship opportunities, academic projects and professional
        connections related to software development, electronics, embedded systems
        and automation.
      </p>

      <div className="contact-buttons">
        <a href="mailto:pedromara2709@gmail.com" className="button primary">
          Send Email
        </a>

        <a
          href="https://www.linkedin.com/in/pedro-machado-dev/"
          className="button secondary"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Pedro-Machado-dev"
          className="button secondary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact