import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./auth/login";
import SingupForm  from './auth/signup'
import Home from './components/home'
import Example from "./cmmons/header";


 
 function App() {
  return (
   
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SingupForm />} />
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
