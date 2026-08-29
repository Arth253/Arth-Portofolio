import type { Experience } from '../data/experience'

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-accent transition">
      <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
        <h3 className="text-xl font-bold text-text">{experience.role}</h3>
        <span className="text-sm text-text-secondary">{experience.duration}</span>
      </div>
      <p className="text-accent mb-3">{experience.company}</p>
      <p className="text-text-secondary mb-4">{experience.description}</p>

      {experience.tech && (
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-accent text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceCard