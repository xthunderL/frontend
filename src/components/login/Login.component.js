import React, { useState } from "react";
import "./login.css";
import "./basic.css";

const LoginComponent = (props) => {
  const onLogin = () => {
    props.setSignedIn(true);
    localStorage.setItem("login", true);
    window.location.href = "/";
  };

  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center"></div>
        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="login-wrap p-4 p-md-5">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-user-o"></span>
              </div>
              <h3 class="text-center h4" style={{ color: "#808080" }}>
                Dashboard Kit
              </h3>
              <div class="loginH">
                <h1 className="lTitle">Log in to Dashboard Kit</h1>
                <h1 className="subTitle">Enter your email and password</h1>
              </div>
              <form action="#" class="login-form">
                <div class="form-group">
                  <label>EMAIL</label>
                  <input
                    type="text"
                    class="form-control rounded-left"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <label>PASSWORD</label>
                <div class="form-group d-flex">
                  <input
                    type="password"
                    class="form-control rounded-left"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
                <div class="bottomTitle">
                  <label>
                    Don't have an account ?{" "}
                    <a href="#" style={{ fontWeight: "bold" }}>
                      Sign up
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
