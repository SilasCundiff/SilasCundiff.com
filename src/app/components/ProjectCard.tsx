export type Project = {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  imgUrl: string;
  skills: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card rounded-lg shadow-lg bg-sky-50 text-sky-950 relative">
      <img
        src={project.imgUrl}
        className="card-img-top w-full max-h-[800px] object-cover rounded-lg"
        alt={project.title}
      />
      <div className="opacity-100 hover:opacity-100 transition-opacity card-body absolute z-10 inset-0 rounded-lg bg-sky-200 bg-opacity-50">
        <h3 className="card-title text-2xl">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <a href={project.url} className="btn btn-primary">
          Go to project
        </a>
        <a href={project.githubUrl}>View on GitHub</a>
        <div>
          <ul className="skill-list">
            {project.skills.map((skill, i) => (
              <li key={skill + i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
