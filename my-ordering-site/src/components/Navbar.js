import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between shadow-md z-50">
      <h1 className="text-xl font-bold">My Ordering System</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/menu" className="hover:underline">Menu</Link></li>
        <li><Link to="/orders" className="hover:underline">Orders</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><a href="/special">Special</a></li>
      </ul>
    </nav>
  );
}