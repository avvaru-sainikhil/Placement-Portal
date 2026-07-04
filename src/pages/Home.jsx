import React from "react";
import { Link } from "react-router-dom";
import {Register} from "react-router-dom";

function Home({children}) {
  return (
    <div className="homediv">
      <nav
        className="navBar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#d9d0b2'
        }}
      >
        <header>
          <h1>PLACEMENT PORTAL</h1>
        </header>

        <div
          style={{
            display: 'flex',
            gap: '30px',
            padding: '30px'
          }}
        >
          <Link
            to="/login"
            style={{
              fontSize: '19px',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Login
          </Link>

          <Link
            to="/Register"
            style={{
              fontSize: '19px',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Register
          </Link>
        </div>
      </nav>

      <h2
        style={{
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '50px'
        }}
      >
        Bridge the Gap Between Ambition and Opportunity...!
      </h2>

      <br />

      <Link to="/login">
    <button
        style={{
            backgroundColor: '#d9d0b2',
            margin: '0px 650px',
            borderRadius:'10px',
            padding: '10px'
        }}
    >
        Explore Jobs
    </button>
</Link>
    </div>
  );
}

export default Home;