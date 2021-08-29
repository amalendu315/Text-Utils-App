import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div className="myFooter">
      <div className="container my-4">
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="text-center">
                <h5 className="text-uppercase" style={{ color: "white" }}>
                  TEXT-UTILS
                </h5>
                <p className="tex">
                  Here you can analyze your written text like how many words and
                  characters are there in it and many more stuffs.
                </p>
              </div>
            </div>
          </div>
          <div className="social_icons">
            <section className="mb-4 text-center">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://twitter.com/AmalenduPandey?s=08"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://google.com/"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com/amalendu_pandey_/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/amalendu-pandey-7909241ba"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/amalendu315"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div className="footer-copyright text-center py-3">
            <h6 className="copyright">© 2020 Copyright: Amalendu Pandey</h6>
          </div>
        </footer>
      </div>
    </div>
  );
}
