import { Routes, Route } from "react-router-dom";
//
import MainLayout from "./layouts/MainLayout";
import SpecialLayout from "./layouts/SpecialLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import SpecialPage from "./pages/SpecialPage";
//
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route element={<SpecialLayout />}>
            <Route path="/special" element={<SpecialPage />} />
          </Route>
        </Routes>

      </header>
    </div>
  );
}


export default App;
