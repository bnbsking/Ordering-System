import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl">Welcome to the Home Page</h2>
      
      {/* Link to Menu page */}
      <div className="mt-4">
        <Link to="/menu" className="text-blue-400 underline">
          Go to Menu
        </Link>
      </div>
    </div>
  );
}