export default function ProjectCard({ project, personal = false }) {
  return (
    <div className="project-row-card">
      {/* TOP CONTENT */}
      <div>
        <h4 className="project-title">{project.title}</h4>

        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div>
        {project.nda && <span className="project-badge">NDA Protected</span>}

        {personal && project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
