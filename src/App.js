import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import { AdsProvider } from "./context/ads";
import Home from "./pages/home";
import Ads from "./pages/ads";
import Create from "./pages/create";
import Edit from "./pages/edit";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <AdsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ads/:id" element={<Ads />} />
            <Route path="/ads/create/:id" element={<Create />} />
            <Route path="/ads/edit/:id" element={<Edit />} />
          </Routes>
        </AdsProvider>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      />
    </div>
  );
}

export default App;
