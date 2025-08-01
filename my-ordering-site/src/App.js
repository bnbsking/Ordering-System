import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import MainLayout from "./layouts/MainLayout";
import SpecialLayout from "./layouts/SpecialLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import SpecialPage from "./pages/SpecialPage";
//
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>Welcome to my app H</h1>

        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route element={<SpecialLayout />}>
              <Route path="/special" element={<SpecialPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}


export default App;
