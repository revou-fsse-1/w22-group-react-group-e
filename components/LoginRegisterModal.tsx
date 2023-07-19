import React, { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { deleteCookie, setCookie } from '@/libs/cookies';
import { checkLogin } from '@/libs/checkLogin';

export default function LoginModal({ loginAuthCheck }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const router = useRouter();

  const submitLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const checkToken = checkLogin();

    console.log('submitRegister called');

    console.log('Making fetch call with the following details:');
    console.log('Endpoint:', 'http://localhost:4001/auth/login');
    console.log('Method:', 'POST');
    console.log('Headers:', { 'Content-Type': 'application/json' });
    console.log('Body:', {
      password: password,
      email: email,
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVICE_BASE}/auth/login`,
        {
          method: 'POST',
          body: JSON.stringify({
            password: password,
            email: email,
          }),
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(
          'HTTP error',
          response.status,
          'Error message:',
          errorData.message,
        );
      } else {
        const data = await response.json();
        setCookie('token', data.token, 1);
        console.log('Response data: ', data.token);
        console.log('Response data: ', data);
      }
    } catch (error) {
      console.error('Error during fetch: ', error);
    }
    closeModal();

    // router.reload();
  };

  const submitRegister = async (e: SyntheticEvent) => {
    e.preventDefault();

    console.log('submitRegister called');

    console.log('Making fetch call with the following details:');
    console.log('Endpoint:', 'http://localhost:4001/auth/register');
    console.log('Method:', 'POST');
    console.log('Headers:', { 'Content-Type': 'application/json' });
    console.log('Body:', {
      username: username,
      password: password,
      role: role,
      address: address,
      email: email,
      phoneNumber: phone,
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVICE_BASE}/auth/register`,
        {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            password: password,
            role: role,
            address: address,
            email: email,
            phoneNumber: phone,
          }),
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(
          'HTTP error',
          response.status,
          'Error message:',
          errorData.message,
        );
      } else {
        const data = await response.json();
        console.log('Response data: ', data);
      }
    } catch (error) {
      console.error('Error during fetch: ', error);
    }
    openModal();
  };

  const openModal = () => {
    setIsRegister(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsRegister(false);
    router.reload();
  };

  const register = () => {
    setIsRegister(true);
    setIsOpen(false);
  };

  const logoutClick = () => {
    deleteCookie();
    router.reload();
  };

  return (
    <div>
      {loginAuthCheck ? (
        <button
          onClick={logoutClick}
          className="middle none center rounded-full bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={openModal}
          className="middle none center rounded-full bg-emerald-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Sign in
        </button>
      )}
      {/* Login */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-4 rounded shadow">
            <div className="col text-right">
              <button onClick={closeModal} className="">
                X
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-lg  font-bold mb-2">
                Welcome! please login to continue
              </h2>
              <p>
                New member?{' '}
                <a
                  className="text-emerald-600 cursor-pointer"
                  onClick={register}
                >
                  register here
                </a>{' '}
              </p>
            </div>
            <div className="pt-5">
              <form onSubmit={submitLogin}>
                <div>
                  <label htmlFor="username">Email</label>
                  <input
                    id="username"
                    name="username"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="jhondoe@example.com"
                    required
                    className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="****************"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-5 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button className="bg-emerald-600  w-full text-white font-bold py-2 px-4 rounded mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Register */}
      {isRegister && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-4 rounded shadow">
            <div className="col text-right">
              <button onClick={closeModal} className="">
                X
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-lg  font-bold mb-2">Register</h2>
              <p>
                already have an account{' '}
                <a
                  className="text-emerald-600 cursor-pointer"
                  onClick={openModal}
                >
                  Login here
                </a>{' '}
              </p>
            </div>
            <div className="">
              <form onSubmit={submitRegister}>
                <div>
                  <label htmlFor="username">Usename</label>
                  <input
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="jhondoe@example.com"
                    required
                    className="mb-1 block p-2.5 w-full h-full  text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="****************"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-1 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="mb-1 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select a role</option>
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address">address</label>
                  <input
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Adress"
                    required
                    className="mb-1 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="jhondoe@example.com"
                    required
                    className="mb-1 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="0812xxxxxxxxx"
                    required
                    className="mb-1 block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-emerald-600  w-full text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
