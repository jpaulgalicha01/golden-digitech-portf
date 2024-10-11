import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/imges";
export default function Header({ scrolled, title }) {
  return (
    <>
      <header className={`py-1 sticky ${scrolled ? "scrolled" : ""}`}>
        <div
          className="d-lg-none d-block d-flex justify-content-between"
          data-aos="fade-down"
          data-aos-duration="900"
        >
          <Link
            to={"/"}
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={img.headerLogo} alt="logo" width={230} height={60} />
          </Link>
          <button
            className=" d-lg-none btn btn-outline-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </div>
        <div
          className="offcanvas-lg offcanvas-end"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header bg-dark ">
            <button
              type="button"
              className="btn btn-outline-none "
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
            >
              <i className="fa-regular fa-circle-xmark text-white"></i>
            </button>
          </div>
          <div className="offcanvas-body bg-dark">
            <div className="text-start d-lg-block d-none">
              <Link
                to={"/"}
                className="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <img src={img.headerLogo} alt="logo" width={230} height={60} />
              </Link>
            </div>

            <div className="mx-auto align-content-center text-start">
              <ul className="d-lg-flex d-grid     nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 gap-3 ">
                <li>
                  <Link
                    to={"/"}
                    className={`px-2 header-link ${
                      title === "Home" ? "text-primary1" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/company-overview"}
                    className={`px-2 header-link ${
                      title === "Company Overview" ? "text-primary1" : ""
                    }`}
                  >
                    company overview
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    to={"/services"}
                    className={`px-2 header-link ${
                      title === "Services" ? "text-primary1" : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/esl"}
                    className={`px-2 header-link ${
                      title === "ESL" ? "text-primary1" : ""
                    }`}
                  >
                    ESL
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/team"}
                    className={`px-2 header-link ${
                      title === "Team" ? "text-primary1" : ""
                    }`}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg-end text-start align-content-center">
              <Link
                to={"/contact-us"}
                type="button"
                className="btn btn-primary me-2"
                style={{
                  fontFamily: "'Bebas Neue', 'sans-serif'",
                  fontSize: "larger",
                }}
              >
                <i className="fa-solid fa-headset me-1"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
