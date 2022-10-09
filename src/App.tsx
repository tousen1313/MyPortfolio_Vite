import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
