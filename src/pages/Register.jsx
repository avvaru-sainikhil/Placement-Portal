import React from "react";

function Register()
{
    return(
        <div   style={{
        width: '300px',
        margin: '100px auto',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '20px'
      }}>

        <h2>Register</h2>
         <form>
        <div style={{ marginBottom: '15px' }}>
          <label>First Name</label>
          <br />
          <input
            type="text"
            placeholder="FirstName"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

         <div style={{ marginBottom: '15px' }}>
            <label > Last Name </label>
            <br />
            <input type="text"   placeholder="LastName"
            style={{ width: '100%', padding: '8px' }}/>
         </div>

          <div style={{ marginBottom: '15px' }}>
            <label > Mobile Number </label>
            <br />
            <input type="text"   placeholder="Mobile Number"
            style={{ width: '100%', padding: '8px' }}/>
         </div>

          <div style={{ marginBottom: '15px' }}>
            <label > email</label>
            <br />
            <input type="email"   placeholder="email"
            style={{ width: '100%', padding: '8px' }}/>
         </div>

 <div style={{ marginBottom: '15px' }}>

<label for="role">Select Role:</label>

<select id="role" name="role"  style={{ width: '100%', padding: '8px' }}>
    <option value="">--Choose a Role--</option>
    <option value="student">Student</option>
    <option value="recruiter">Recruiter</option>
</select>

          
         </div>


        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius:'10px',
            backgroundColor: '#d9d0b2'
          }}
        >
          Submit
        </button>
      </form>


        </div>
    )
}
export default Register;