import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h1>find me on:</h1>
        <a href="https://github.com/tomerrajuan/" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/tomer-rajuan-3406b0192/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p className="footer__copyright">
        Copyright © 2022 Tomer Rajuan- all rights reserved
      </p>
    </footer>
  );
}
