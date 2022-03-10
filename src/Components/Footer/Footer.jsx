import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <span className="col">
        <h3 className="col-title">Info</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">Formats</a>
            </li>
            <li>
              <a href="#">Compression</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </nav>
      </span>
      <span className="col">
        <h3 className="col-title">Resources</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">Developer API</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </span>

      <span className="col">
        <h3 className="col-title">Company</h3>
        <nav className="col-list">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </nav>
      </span>

      <span className="col">
        <div className="subscribe-form-holder">
          <h3 className="form-title">Subscribe to our email newsletter</h3>
          <form action="#" onsubmit="return false" className="subscribe-form">
            <input
              type="email"
              name="email"
              id="email"
              className="email subscribe-input"
              autocomplete="off"
              placeholder="Your email"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
        <div className="social-media">
          <h3 className="social-col-title">Follow us</h3>
        </div>
      </span>
    </footer>
  );
}

export default Footer;
