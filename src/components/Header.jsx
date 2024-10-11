import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-950 py-6 px-4">
      <div className="container mx-auto  flex justify-between items-center">
        <span className="text-xl font-bold text-white tracking-wider">
         <Link to={'/'}> StationaryHive</Link>
        </span>
        <div>
          <ul className="flex items-center text-white text-lg gap-4">
            <li className="hover:text-gray-200">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-gray-200">
              <Link to={"/bill-estimate"}>Cart</Link>
            </li>
            <li className="hover:text-gray-200">
              <Link to={"/admin-page"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
