import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";

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
      <div className="rounded-lg shadow-lg bg-sky-50 text-sky-950 relative md:min-w-[740px] max-w-[300px]">
        <img
          src={project.imgUrl}
          className="card-img-top w-full md:h-[600px] object-cover rounded-t-lg md:rounded-lg"
          alt={project.title}
        />
        <div className="md:opacity-0 w-full flex flex-col p-4 md:hover:opacity-100 transition-opacity card-body relative md:absolute z-10 inset-0 rounded-lg bg-sky-100 bg-opacity-75 backdrop-blur">
          <div className="flex justify-between items-baseline mb-4">
            <h3 className="card-title md:text-4xl text-2xl font-bold">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.url && (
                <>
                  <IconLink href={project.url} variant="black">
                    <FontAwesomeIcon icon={faLink} size="2xl" />
                  </IconLink>
                </>
              )}
              {project.githubUrl && (
                <>
                  <IconLink href={project.githubUrl} variant="black">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                  </IconLink>
                </>
              )}
            </div>
          </div>
          <p className="card-text text-xl mb-4 max-w-xl">
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
          <div className="py-2 px-2 border-t-sky-950 border-t-2  mt-auto">
            <ul className="skill-list flex md:flex-row flex-col md:gap-4 ">
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
