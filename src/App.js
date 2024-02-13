import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./auth/login";
import SingupForm from "./auth/signup";
import Home from "./components/home";
import Services from "./components/services";
import Example from "./cmmons/header";
import { NextUIProvider } from "@nextui-org/react";
import Cardd from "./cmmons/cardd";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
           <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SingupForm />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
