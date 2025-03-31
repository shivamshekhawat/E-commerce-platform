import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
const Sign_in = () => {
        
const [logdata, setData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",

});
const adddata = (e) =>{
    const {name,value} = e.target;
    setData(() =>{
        return{
            ...logdata,
            [name]: value
        }
    })
}


  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input type="text"
                onChange={adddata}
                value={logdata.email}

                name="email" id="email" />
              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                  id="password"
                  placeholder="At Least 6 Characters"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">
        
              <button> Create Your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
