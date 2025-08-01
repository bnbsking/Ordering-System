import { Link } from "react-router-dom";

function MyButton() {
  return (
    <Link to="/menu" style={{color: 'black'}}>
      <button>
        I'm a button
      </button>
    </Link>
  );
}

export default function SpecialPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold">Welcome to the Special Page</h1>
      <p>This page has its own layout and does not use the common Navbar.</p>
      <MyButton />
    </div>
  );
}