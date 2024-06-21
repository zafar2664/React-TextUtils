import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <div className="left">
          <h2>TextUtils</h2>
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>About us</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="right">
          <input type="checkbox" id="dark-mode" />
          <label for="dark-mode"></label>
          <p>Enable Dark Mode</p>
        </div>
      </nav>
    </>
  );
}

export default NavBar;