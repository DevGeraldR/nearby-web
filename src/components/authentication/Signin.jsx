import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  //To sign in the user it uses firebase authentication
  const handleClick = async () => {
    await signIn(email, password);
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-col m-auto">
        <form className="max-w-[400px] w-full mx-auto rounded-lg border-solid border-2 border-black p-8 px-8">
          <h2 className="text-4xl dark:text-[#00df9a] font-bold text-center">
            SIGN IN
          </h2>
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
          <div className="flex justify-between py-2">
            <p>Forgot Password</p>
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
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
