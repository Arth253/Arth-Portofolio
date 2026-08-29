function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 bg-background">
      <h2 className="text-3xl font-bold mb-6 text-text">
        About <span className="text-accent">Me</span>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-2">
        I'm a Computer Science graduate with First Class Honours from the University of Nottingham. My experience spans full stack development at Barclays, embedded safety systems at Jaguar Land Rover, and leading a backend team at Beckford Consulting, giving me exposure to everything from large scale data systems to low level hardware.
        {/* Mention where ive worked */}
      </p>
      <p className="text-text-secondary leading-relaxed mb-2">
        I move comfortably between debugging register level hardware faults and architecting scalable APIs, both with the same level of rigour. I bring a data driven, problem first mindset to whatever I work on, and I pick up new tools and domains quickly, which means I'm always ready for hard problems worth solving.
        {/* What im working on */}
      </p>
      <p className="text-text-secondary leading-relaxed mb-4">
        Away from code, I captained my university's national Kho team to a 2nd place finish, led event planning and fundraising initatives for 1000+ students nationally and completed the Yorkshire Three Peaks despite flooded routes.
      </p>
    </section>
  )
}

export default About