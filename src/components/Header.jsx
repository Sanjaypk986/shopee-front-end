import { Link } from "react-router-dom";
import "./Header.css"; // Import the custom CSS for hover effects

const Header = () => {
  return (
    <header className="bg-blue-950 py-6 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website logo/title */}
        <span className="text-2xl font-bold text-white tracking-wide">
          <Link to="/" className="hover:text-gray-300 transition duration-300 ease-in-out">
            StationaryHive
          </Link>
        </span>

        {/* Navigation links */}
        <div>
          <ul className="flex items-center text-white text-lg gap-8">
            {/* Home */}
            <li className="hover:text-gray-300 transition-colors duration-200 ease-in-out">
              <Link to="/" className="header-link">Home</Link>
            </li>

            {/* Cart */}
            <li className="hover:text-gray-300 transition-colors duration-200 ease-in-out">
              <Link to="/bill-estimate" className="header-link">Cart</Link>
            </li>

            {/* Dashboard */}
            <li className="hover:text-gray-300 transition-colors duration-200 ease-in-out">
              <Link to="/admin-page" className="header-link">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
