import React, { useState } from 'react';

function LoginModal({ isModalOpen, closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? '' : 'hidden'}`}>
      <div className="absolute bg-black bg-opacity-50 w-full h-full"></div>
      <div className="absolute top-24 left-0 w-full flex items-center justify-center">
        <div className="bg-white login-modal rounded-lg p-8 relative">
          <button className="absolute top-0 right-0 mr-4 mt-2 text-gray-700 text-2xl focus:outline-none" onClick={closeModal}>
            &times;
          </button>
          <h2 className="text-2xl mb-4">Create an Account or Sign In</h2>
          <p className="text-sm text-gray-600 mb-4">Create an account or sign in. <br/> By continuing, you agree to our Terms of Use and Privacy Policy.</p>
          <div className="flex flex-col mb-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 focus:outline-none focus:shadow-outline">Continue with Google</button>
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-2 focus:outline-none focus:shadow-outline">Continue with Github</button>
          </div>
          <hr className="border-gray-400 mb-4" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Enter Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700 font-bold">Show Password</label>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closeModal}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
