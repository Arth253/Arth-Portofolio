import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden hover:border-accent transition">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-3">{project.description}</p>

        {project.details && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition mb-3"
          >
            {expanded ? 'Show less' : 'Read more'}
            <FiChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        {project.details && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-text-secondary border-t border-border pt-4">
              {project.details}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-accent text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition underline"
            >
              GitHub
            </a>
          )}
        {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard