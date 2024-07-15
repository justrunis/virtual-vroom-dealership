import Home from "./pages/Home";
import Models from "./pages/Models";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PopularVehicles from "./pages/PopularVehicles";
import Vehicle from "./pages/Vehicle";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundImage from "./components/Home/BackgroundImage";
import carIcon from "./assets/background_image.jpg";
import { Provider } from "react-redux";
import store from "./store/index";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Cart from "./components/Cart/Cart";
import "tw-elements";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <main className="flex flex-col min-h-screen">
            <Header />
            <BackgroundImage imageUrl={carIcon}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/models" element={<Models />} />
                <Route path="/models/:make" element={<Vehicles />} />
                <Route path="/vehicle/:id" element={<Vehicle />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<PopularVehicles />} />
              </Routes>
              <Footer />
            </BackgroundImage>
          </main>
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
