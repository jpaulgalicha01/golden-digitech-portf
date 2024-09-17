import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/imges";
export default function Header({ scrolled }) {
  return (
    <>
      <header className={`sticky ${scrolled ? "scrolled" : ""}`}>
        <div className="d-lg-none d-block d-flex justify-content-between">
          <Link
            to={"/"}
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={img.headerLogo} alt="logo" width={209} height={68} />
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
                <img src={img.headerLogo} alt="logo" width={209} height={68} />
              </Link>
            </div>

            <div className="mx-auto align-content-center ">
              <ul className="d-lg-flex d-grid     nav col-12 col-md-auto mb-2 justify-content-start mb-md-0 gap-3 ">
                <li>
                  <Link className=" px-2 header-link">Home</Link>
                </li>
                <li>
                  <Link to={""} className=" px-2 header-link">
                    About Us
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    to={""}
                    className=" px-2 header-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item">Action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Another action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Something else here</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""} className=" px-2 header-link">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-lg-end text-start align-content-center">
              <button
                type="button"
                className="btn btn-primary me-2"
                style={{
                  fontFamily: "'Bebas Neue', 'sans-serif'",
                  fontSize: "larger",
                }}
              >
                <i className="fa-solid fa-headset me-1"></i> Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
