import { Link } from 'react-router-dom';

const sections = ['home', 'about', 'services', 'contact'];

const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">CMS Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {sections.map(section => (
          <Link
            key={section}
            to={`/dashboard/${section}`}
            className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200"
          >
            Manage {section.charAt(0).toUpperCase() + section.slice(1)} Section
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
