import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { CursorDrivenParticleTypography } from '../components/ui/cursor-driven-particles-typography'
import useTheme from '../hooks/useTheme'

function Hero() {
  const { theme } = useTheme()

  return (
    <section className="flex flex-col justify-center items-center text-center px-6 py-5 bg-background">
      <div className="w-full max-w-xl text-text" style={{ height: '150px' }}>
        <CursorDrivenParticleTypography
          key={theme}
          text="Arth Gandhi"
          fontSize={60}
          particleDensity={3}
          dispersionStrength={5}
          returnSpeed={0.04}
          color={theme === 'dark' ? '#ffffff' : '#000000'}
          className="!min-h-0 !h-full"
        />
      </div>

      <p className="text-xl text-accent mb-2 mt-2">Software Engineer</p>
      <p className="max-w-xl text-text-secondary mb-8">
        Building scalable systems. Driven by performance, clean architecture and turning messy problems into elegant solutions
      </p>

      <a
        href="#projects"
        className="bg-accent text-background px-6 py-3 rounded-lg hover:bg-accent-hover transition mb-8"
      >
        View My Work
      </a>

      <div className="flex items-center gap-4">
        <a
          href="mailto:youremail@example.com"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition"
        >
          <FiMail size={20} />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition"
        >
          <FiLinkedin size={20} />
        </a>
      </div>
    </section>
  )
}

export default Hero