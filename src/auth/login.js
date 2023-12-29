import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email and password
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur...',
        text: 'Email obligatoire!',
      });
      return;
    }
  
    if (!password) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur...',
        text: 'Mot de passe obligatoire!',
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3900/api/login', {
        email,
        password,
      });
  
      // Handle the response from the server
      console.log(response.data);
  
      if (response.data.user) {
        setUser(response.data.user);
        // Redirect or set authentication state in your app
        console.log('Login successful');
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error status (4xx or 5xx)
        const { data } = error.response;
  
        if (data.errors) {
          // Handle validation errors
          Swal.fire({
            icon: 'error',
            title: 'Erreur...',
            text: 'Validation error!',
          });
        } else if (data.msg === 'Utilisateur non trouvé') {
          // SweetAlert2 alert for "Utilisateur non trouvé" message
          Swal.fire({
            icon: 'error',
            title: 'Erreur...',
            text: 'Utilisateur non trouvé!',
          });
        } else if (data.error) {
          // Handle other errors
          Swal.fire({
            icon: 'error',
            title: 'Erreur...',
            text: data.error,
          });
        }
      } else {
        // An error occurred in making the request (e.g., network error)
        console.error('Network error:', error.message);
        // Show SweetAlert2 network error message
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Unable to connect to the server. Please try again later.',
        });
      }
    }
  };
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Left Side (Photo as Background) */}
        <div
          className="col-md-6 p-0"
          style={{
            backgroundImage: 'url(/assets/img/elect2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Right Side (Login Form) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <form className="bg-white shadow-md rounded p-5 text-center">
            {/* Logo inside the form */}
            <div className=" mb-1  ml-5">
              <img
                src="/assets/img/logo.png"
                alt="logo"
                className="img-fluid"
                style={{ maxWidth: '230px' }}
              />
            </div>

            <h1 className="h3 mb-4 mt-4">Login</h1>

            <div className="mb-3">
              <label htmlFor="email" className="form-label visually-hidden">
                Email Address
              </label>
              <div className="input-group">
                <span className="input-group-text" id="email-addon">
                  <FaUser />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  required
                  aria-describedby="email-addon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label visually-hidden">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text" id="password-addon">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-control"
                  required
                  aria-describedby="password-addon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 form-check d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input type="checkbox" id="remember" className="form-check-input" />
        <label htmlFor="remember" className="form-check-label">
          Remember me
        </label>
      </div>
      <button type="button" className="btn-link"  >
        Forgot password?
      </button>
    </div>
            <button
              type="button" // Change to "submit" if you want it to submit the form
              className="btn bg-primary w-100 hover:bg-secondary"
              onClick={handleSubmit}
            >
              Login
            </button>

            <div className="mt-4 text-center">
        <p className="text-sm">
          {/* Display the user's name if available */}
          {user && `Welcome, ${user.name}!`}
          {!user && 'Don\'t have an account? '}
          <Link to="/signup" className="text-blue-500">
            Register now!
          </Link>
        </p>
      
     
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
