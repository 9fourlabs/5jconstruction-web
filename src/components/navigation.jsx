import React from "react";

export const Navigation = (props) => {
  return (
    <>
      <div style={{
        backgroundColor: '#009ffd',
        color: 'white',
        textAlign: 'center',
        padding: '8px 0',
        fontWeight: '600',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1031
      }}>
        Contact us now for a FREE quote: <a href="tel:+17704025691" style={{color: 'white', textDecoration: 'underline'}}>(770) 402-5691</a>
      </div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{top: '36px'}}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            5.J. Construction
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
