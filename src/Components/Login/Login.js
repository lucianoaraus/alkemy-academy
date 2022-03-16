import React from "react";

export default function Login() {
  return (
    <>
      <h2>Login Form</h2>
      <form>
        <label>
          <span>Email:</span>
          <br />
          <input type="email" name="email" />
        </label>
        <label>
          <br />
          <span>Password:</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
