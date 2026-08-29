import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-15 bg-background">
      <h2 className="text-3xl font-bold mb-10 text-text">
        My <span className="text-accent">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects