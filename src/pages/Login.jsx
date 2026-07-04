import React from "react";
import { Link } from "react-router-dom";
import { Register } from "react-router-dom";
function Login() {
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "20px",
      }}
    >
      <h2>Login</h2>

      <form>
        <div style={{ marginBottom: "15px" }}>
          <label for="role">Select Role:</label>

          <select
            id="role"
            name="role"
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">--Choose a Role--</option>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>User Name</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#d9d0b2",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>

      <br />

      <a href="#">Forgot Password?</a>

      <br />
      <br />
      <Link to="/Register">
        <button
          style={{
            backgroundColor: "#d9d0b2",
            margin: "0px 125px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Register
        </button>
      </Link>
    </div>
  );
}

export default Login;
