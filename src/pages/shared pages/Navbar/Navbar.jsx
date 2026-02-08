import { useState } from "react";
import { UserCircle, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";
import UseAuth from "../../../hooks/UseAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOutUser } = UseAuth();

  const handleProfileClick = () => {
    if (!user) {
      navigate("/signin");
    } else {
      setOpen(!open);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();  // 👈 sign out first
      navigate("/");        // then go home
    } catch (err) {
      console.error(err);
    }
  };

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/blog", label: "BLOG" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="w-full bg-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* LEFT SIDE - Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          <img className="h-20 w-40" src="fitness_pro_logo.png" alt="Logo" />
        </Link>
        {/* Desktop Links */}
        <div className="hidden sm:flex gap-6 ml-4">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `font-black text-sm ${isActive
                  ? "text-gray-600"
                  : "text-gray-800 hover:text-gray-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 relative">
        {/* Profile Icon */}
        <button onClick={handleProfileClick} className="relative">
          <UserCircle className="w-7 h-7 text-gray-800 hover:text-gray-600" />
        </button>

        <div className="flex-1 flex justify-center md:justify-start">
          <Link
            to="/membership"
            className="px-4 py-3 bg-gray-800 text-white text-sm hover:bg-gray-700 transition hidden sm:inline-block"
          >
            Become a Member
          </Link>
        </div>

        {/* Hamburger Menu - visible on small screens */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>


        {/* Dropdown Menu (profile) */}
        {user && open && (
          <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-md overflow-hidden z-20">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setOpen(false);    // close menu
                handleSignOut();   // sign out
              }}
            >
              Sign Out
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-white shadow-md z-10 flex flex-col items-center gap-4 py-4">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `font-bold text-lg ${isActive
                  ? "text-gray-600"
                  : "text-gray-800 hover:text-gray-600"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Become a Member (mobile) */}
          <Link
            to="/membership"
            className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 transition rounded"
            onClick={() => setMenuOpen(false)}
          >
            Become a Member
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
