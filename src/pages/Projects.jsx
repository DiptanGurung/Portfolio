import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'Task Manager', description: 'A todo app with authentication using Firebase.', link: '#' },
  { title: 'Weather App', description: 'Shows real-time weather using OpenWeatherMap API.', link: '#' },
  { title: 'Admin Dashboard', description: 'Responsive dashboard with charts and tables.', link: '#' },
];

const Projects = () => (
  <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    {projects.map((proj, index) => (
      <ProjectCard key={index} {...proj} />
    ))}
  </section>
);

export default Projects;