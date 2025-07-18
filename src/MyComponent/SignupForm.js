import React, { useState } from 'react';
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Login functionality is currently unavailable. Please try again later or contact support.');
  };

  return (
  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-lg border-0">
        <div class="card-body p-4 bg-light rounded">
          <h3 class="text-center text-primary mb-4">Join <strong>FCFund</strong></h3>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label text-dark">Full Name</label>
              <input type="text" class="form-control border-primary" id="name" placeholder="John Doe" required/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label text-dark">Email Address</label>
              <input type="email" class="form-control border-primary" id="email" placeholder="you@example.com" required/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label text-dark">Password</label>
              <input type="password" class="form-control border-primary" id="password" placeholder="••••••••" required/>
            </div>
            <button type="submit" class="btn btn-primary w-100" onClick={handleSubmit}>Sign Up</button>
            <Link class="text-success" to='/signin'>Sigin Now ?</Link>
            {message && (
          <div className="alert alert-info alert-dismissible mt-2 fade show" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={() => setMessage('')}></button>
          </div>
        )}
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )}

export default SignupForm;