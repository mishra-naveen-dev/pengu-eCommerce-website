import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
      <Home />
      <Footer />
    </>
  );
}

export default App;
