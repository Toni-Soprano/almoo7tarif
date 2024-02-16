import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./auth/login";
import SingupForm from "./auth/signup";
import Home from "./components/home";

import { NextUIProvider } from "@nextui-org/react";
import Settings from "./cmmons/settings";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SingupForm />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
