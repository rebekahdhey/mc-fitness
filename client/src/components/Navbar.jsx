import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-8 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3">
        <span className="text-white font-spotlight text-xl tracking-wide">
          MC
        </span>

        <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <li><Link to="/about" className="hover:text-gray-300 transition">About Us</Link></li>
          <li><Link to="/gym" className="hover:text-gray-300 transition">Gym & Equipment</Link></li>
          <li><Link to="/membership" className="hover:text-gray-300 transition">Membership</Link></li>
          <li><Link to="/coaches" className="hover:text-gray-300 transition">Coaches</Link></li>
          <li><Link to="/shop" className="hover:text-gray-300 transition">Shop</Link></li>
          <li><Link to="/events" className="hover:text-gray-300 transition">Events</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
        </ul>
      </div>

      <Link
        to="/join"
        className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition whitespace-nowrap"
      >
        Join Now
      </Link>
    </nav>
  );
};

export default Navbar;