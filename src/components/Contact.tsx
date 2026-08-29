import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-15 bg-background text-center">
      <h2 className="text-3xl font-bold mb-6 text-text">
        Get In <span className="text-accent">Touch</span>
      </h2>
      <p className="text-text-secondary mb-10">
        Feel free to reach out if you'd like to connect.
      </p>

      <div className="flex justify-center items-center gap-4">
        <a
          href="mailto:arthgandhi2531@gmail.com"
          className="flex items-center gap-2 bg-accent text-background px-5 py-2.5 rounded-lg hover:bg-accent-hover transition"
        >
          <FiMail size={18} />
          Say Hello
        </a>

        <a
          href="https://github.com/Arth253"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-text hover:border-accent hover:text-accent transition"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/arth-gandhi-/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-text hover:border-accent hover:text-accent transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </section>
  )
}

export default Contact