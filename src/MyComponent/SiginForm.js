// src/components/SignInForm.js
import React, { useState } from 'react';

const SignInForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Sign-in functionality is currently unavailable. Please try again later or contact support.');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 bg-light rounded">
              <h3 className="text-center text-primary mb-4">Sign In to <strong>FCFund</strong></h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>

              {message && (
                <div className="alert alert-info alert-dismissible fade show mt-3" role="alert">
                  {message}
                  <button type="button" className="btn-close" onClick={() => setMessage('')}></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;