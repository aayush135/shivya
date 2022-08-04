import React, { useState } from "react";
import { loginAPI } from "../../apiCalls/authAPIs";
import { setAuthLoggedinState } from "../../store/auth";
import {router} from 'next/router'
import { useDispatch } from "react-redux";

const index = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const dispatch=useDispatch()

  const handleInputChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault()
    const res=await loginAPI(creds);
    debugger
    if(res.status==200) {
      dispatch(setAuthLoggedinState(true))
      router.push('/dashboard')
    }
  };


  return (
    <>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form onSubmit={handleSubmitClick} class="login">
              <div class="login__field">
                <input
                  value={creds.email}
                  onChange={handleInputChange}
                  name="email"
                  type="text"
                  class="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div class="login__field">
                <input
                  value={creds.password}
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <button class="button login__submit" type="submit">
                <span class="button__text">Log In Now</span>
              </button>
            </form>
            <div class="social-login">
              <h3>log in via</h3>
              <div class="social-icons">
                <a href="#" class="social-login__icon fab fa-instagram"></a>
                <a href="#" class="social-login__icon fab fa-facebook"></a>
                <a href="#" class="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
