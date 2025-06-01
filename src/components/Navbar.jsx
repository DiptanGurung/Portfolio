import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav className="p-4 shadow flex justify-between items-center bg-white dark:bg-gray-800">
      <div className="font-bold text-xl text- -600 dark:text-white">Diptan.dev</div>
      <div className="space-x-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme} className="ml-4 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;