function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-tag">Software • Electronics • Embedded Systems</p>

      <h1>Pedro Machado</h1>

      <h2>Software Engineering Student & Electronics Technician</h2>

      <p className="hero-description">
        I am a Software Engineering student and Electronics Technician focused on
        Web Development, Embedded Systems, Electronics and Automation.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="button primary">
          View Projects
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

export default Hero