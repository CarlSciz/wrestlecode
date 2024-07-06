import React, { useState, useEffect } from 'react';

function LoginModal({ isModalOpen, closeModal, setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isRegisterView, setIsRegisterView] = useState(false);
  const [username, setUsername] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    if (registrationStatus || loginStatus) {
      const timer = setTimeout(() => {
        setRegistrationStatus('');
        setLoginStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [registrationStatus, loginStatus]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const toggleView = () => {
    setIsRegisterView(!isRegisterView);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      if (data.status === 'ok') {
        setRegistrationStatus('User is now registered!');
        closeModal();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        setUser(data.username);
        setLoginStatus('Login successful!');
        closeModal();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      {registrationStatus && (
        <div className="bg-green-500 text-white p-2 text-center">
          {registrationStatus}
        </div>
      )}
      {loginStatus && (
        <div className="bg-green-500 text-white p-2 text-center">
          {loginStatus}
        </div>
      )}
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? '' : 'hidden'}`}>
        <div className="absolute bg-black bg-opacity-50 w-full h-full"></div>
        <div className="absolute top-24 left-0 w-full flex items-center justify-center">
          <div className="bg-white login-modal rounded-lg p-8 relative">
            <button className="absolute top-0 right-0 mr-4 mt-2 text-gray-700 text-2xl focus:outline-none" onClick={closeModal}>
              &times;
            </button>
            {isRegisterView ? (
              <>
                <h2 className="text-2xl mb-4">Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder="Enter your username"
                      required
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
                        required
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Register
                  </button>
                </form>
                <br />
                <button className="mt-4 text-blue-500 hover:text-blue-700" onClick={toggleView}>
                  Already have an account?
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder="Enter your username"
                      required
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
                        required
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                  </button>
                </form>
                <br />
                <button className="mt-4 text-blue-500 hover:text-blue-700" onClick={toggleView}>
                  Don't have an account? Register here
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
