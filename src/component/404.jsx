import React from "react";
import "./css/404.css";

function ErrorPage() {
  return (
    <div className="page_404">
      <p className="zoom-area"></p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <h1>Look's like you are lost</h1>
        <a target="_blank" href="#" className="more-link">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
