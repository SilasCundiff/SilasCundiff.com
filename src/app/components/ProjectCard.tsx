export type Project = {
  title: string;
  description: string;
  challenge?: string;
  outcome?: string;
  url?: string;
  githubUrl?: string;
  imgUrl: string;
  skills: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card p-4">
      <div className="rounded-lg shadow-lg bg-sky-50 text-sky-950 relative md:min-w-[600px] min-w-300">
        <img
          src={project.imgUrl}
          className="card-img-top w-full h-[600px] object-cover rounded-lg"
          alt={project.title}
        />
        <div className="opacity-0 w-full flex flex-col p-4 hover:opacity-100 transition-opacity card-body absolute z-10 inset-0 rounded-lg bg-sky-50 bg-opacity-75">
          <h3 className="card-title text-2xl mt-4 font-bold">
            {project.title}
          </h3>
          <p className="card-text text-xl mb-2 max-w-xl">
            {project.description}
          </p>
          <div className="border-t-sky-950 border-t-2 pt-4">
            {project.challenge && (
              <>
                <h4>
                  <span className="font-bold">Challenge: </span>
                </h4>
                <p className="card-text text-xl mb-2 max-w-xl">
                  {project.challenge}
                </p>
              </>
            )}
            {project.outcome && (
              <>
                <h4>
                  <span className="font-bold">Outcome: </span>
                </h4>
                <p className="card-text text-xl mb-2 max-w-xl">
                  {project.outcome}
                </p>
              </>
            )}
          </div>
          <div className="flex gap-4 mt-auto mb-4">
            {project.url && (
              <>
                <a
                  href={project.url}
                  className="bg-sky-500 text-sky-50 px-4 py-2 rounded-lg "
                >
                  Demo
                </a>
              </>
            )}
            {project.githubUrl && (
              <>
                <a
                  href={project.githubUrl}
                  className="bg-sky-500 text-sky-50 px-4 py-2 rounded-lg "
                >
                  GitHub
                </a>
              </>
            )}
          </div>
          <div className="py-2 px-2 border-t-sky-950 border-t-2">
            <ul className="skill-list flex gap-4">
              {project.skills.map((skill, i) => (
                <li key={skill + i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
