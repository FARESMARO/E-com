import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
