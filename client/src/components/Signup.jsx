import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Sign-up</legend>

          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Sign-up</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Signup;
