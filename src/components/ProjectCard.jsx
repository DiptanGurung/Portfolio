const ProjectCard = ({ title, description, link }) => (
  <div className="border p-4 rounded shadow bg-white dark:bg-gray-800">
    <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
    <a href={link} className="text-blue-500 underline">View Project</a>
  </div>
);

export default ProjectCard;