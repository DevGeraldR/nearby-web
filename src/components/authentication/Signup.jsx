import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo] = useState("");

  const { signUp } = useAuth();

  const handleClick = () => {
    //To create the new user in our firebase authentication
    //Then update the user data to save the user photoURL
    if (password !== confirmPassword) {
      alert("Password Don't Match");
      return;
    }
    signUp(name, photo, email, password);
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-col m-auto">
        <form className="max-w-[400px] w-full mx-auto rounded-lg border-solid border-2 border-black p-8 px-8">
          <h2 className="text-4xl dark:text-[#00df9a] font-bold text-center">
            SIGN UP
          </h2>
          <div className="flex flex-col py-2">
            <label>Full Name</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg border-solid border-2 border-gray-400 mt-2 p-2 focus:border-black focus:outline-none"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            className="w-full my-5 py-2 bg-[#00df9a] text-white font-semibold rounded-lg"
          >
            SIGNIN
          </button>
        </form>
        <div className="pl-2">
          <Link to="/signin">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
