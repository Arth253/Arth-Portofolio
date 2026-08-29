import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-15 bg-background">
      <h2 className="text-3xl font-bold mb-10 text-text">
        My <span className="text-accent">Experience</span>
      </h2>
      <div className="flex flex-col gap-6">
        {experience.map((exp) => (
          <ExperienceCard key={`${exp.role}-${exp.company}`} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experience