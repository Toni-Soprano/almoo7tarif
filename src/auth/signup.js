import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaUser, FaLock, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="container-fluid bg-blue-800">
    <div className="row">
      {/* Form on the left */}
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="card p-4" style={{ width: '20rem' }}>
          {/* Logo */}
          <div className="mb-3 text-center">
            <img src="/assets/img/logo.png" alt="Logo" className=" ml-10"  style={{ height: '180px' }} />
          </div>
          <h1 className="text-center text-dark mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label text-dark">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label text-dark">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <IoMdMail className="mt-2" />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label text-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <FaPhone className="mt-2" />
              </div>

              <div className="mb-3">
                <label htmlFor="birthday" className="form-label text-dark">
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  className="form-control"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label text-dark">
                  Gender
                </label>
                <select
                  id="gender"
                  className="form-select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label text-dark">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="mt-2" />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label text-dark">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <FaLock className="mt-2" />
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label text-dark">
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="form-control"
                />
              </div>

              <Link to="/home" className="btn bg-primary w-100 hover:bg-secondary">
  Sign up
</Link>
            </form>
          </div>
        </div>

        {/* Background covering the entire right side */}
        <div className="col-md-6 p-0" style={{ backgroundImage: 'url(/assets/img/plumber-thinking.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto' }}></div>
      </div>
    </div>
  );
};

export default SignupForm;
