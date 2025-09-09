import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between shadow-inner z-50
                    bg-[url('assets/images/banner/star.jpg')] bg-cover bg-center">
      <h1 className="text-2xl font-bold">My Ordering System</h1>
      <ul className="flex space-x-6 text-[22px]">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/menu" className="hover:underline">Menu</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><a href="/special" className="hover:underline">Special</a></li>
      </ul>
    </nav>
  );
}