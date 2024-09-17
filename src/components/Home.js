import React from "react";
import Header from "./includes/Header";
import img from "../images/imges";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Home({ scrolled }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid">
        <div className="row banner pb-4 mb-4">
          <Header scrolled={scrolled} />
          <div
            style={{ maxHeight: "550px  ", minHeight: "500px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center w-75">
              <h1
                className="text-title-primary text-white"
                style={{ fontSize: "calc(2vw + 2.5vh + 2vmin)" }}
              >
                Golden Digitech Digital Marketing Services
              </h1>
              <p
                className="text-paragraph-primary text-white fst-italic fw-lighter"
                style={{ fontSize: "calc(.9vw + 1vh + .5vmin)" }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "“In the digital age, the right skills and support are the keys that unlock doors to endless opportunitie”"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Another Sayings")
                      .start();
                  }}
                />
              </p>

              <button
                type="button"
                className="btn btn-primary me-2"
                style={{
                  fontFamily: "'Bebas Neue', 'sans-serif'",
                  fontSize: "larger",
                }}
              >
                Read More.
              </button>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4">
          <h1
            className="text-title-primary text-primary pb-lg-5 pb-1"
            style={{ fontSize: "calc(1.5vw + 1.5vh + 2vmin)" }}
          >
            BRIEF OVERVIEW OF GOLDEN DIGITECH DIGITAL MARKETING SERVICES
          </h1>
          <div
            className="col-lg-6 col-12 d-flex justify-content-center align-items-center"
            data-aos="flip-left"
          >
            <img
              src={img.headerLogo}
              alt="logo"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6 co-12" data-aos="fade-up">
            <p
              className="text-paragraph-secondary"
              style={{ textAlign: "justify" }}
            >
              Golden Digitech Digital Marketing and Skills Training Center
              provides social media management, digital marketing services, and
              digital skills training for businesses, organizations, and
              individuals.
            </p>
            <p
              className="text-paragraph-secondary"
              style={{ textAlign: "justify" }}
            >
              We also provide call center and virtual assistance services to
              clients who need help with their businesses when it comes to
              appointment-setting, cold calling, lead generation, executive
              assistance, calendar management, customer service, sales,
              technical support, Search Engine Optimization (SEO), e-commerce
              set-up and support, Amazon product research and management,
              website development, WordPress design, video editing and graphic
              design, and other online services.
            </p>
          </div>
        </div>

        <div className="row py-4 my-4">
          <div className="bg-white p-3 py-5">
            <h1
              className="text-title-primary text-primary pb-lg-5 pb-1 text-center"
              style={{ fontSize: "calc(1.5vw + 1.5vh + 2vmin)" }}
            >
              Services Offered
            </h1>
            <div className="d-flex justify-content-center">
              <div className="col-lg-8 col-10 ">
                <div className="row d-flex  justify-content-center row-gap-4">
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      className="services-border p-2  "
                      src={img.services1}
                      alt="services1"
                      width={99.62}
                      height={97.5}
                    />
                    <p className="text-subtitle-secondary pt-2">
                      Digital Marketing Services.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      className="services-border p-2  "
                      src={img.services2}
                      alt="services1"
                      width={99.62}
                      height={97.5}
                    />
                    <p className="text-subtitle-secondary pt-2">
                      Digital Skills Training
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      className="services-border p-2  "
                      src={img.services3}
                      alt="services1"
                      width={99.62}
                      height={97.5}
                    />
                    <p className="text-subtitle-secondary pt-2">
                      BPO Services Partnership
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-12 text-center"
                    data-aos="fade-up"
                  >
                    <img
                      className="services-border p-2  "
                      src={img.services4}
                      alt="services1"
                      width={99.62}
                      height={97.5}
                    />
                    <p className="text-subtitle-secondary pt-2">
                      Our Team of Virtual Assistants and Outsourcing Services
                      Providers
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link
                    to={"#"}
                    className="text-decoration-none fs-5 text-title-secondary"
                    style={{ color: "#dbb000" }}
                  >
                    More Services..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4">
          <h1
            className="text-title-primary text-primary pb-lg-5 pb-1 text-center"
            style={{ fontSize: "calc(1.5vw + 1.5vh + 2vmin)" }}
          >
            Sample Work with Some Clients
          </h1>

          <div className="col-12">
            <div className="d-md-flex d-grid align-items-start row-gap-5">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link text-subtitle-secondary active text-subtitle-secondary"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  POOL MASTER E-COMMERCE
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  GOLDEN AGRI
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-disabled"
                  aria-selected="false"
                >
                  GOLDEN AGRI E-COMMERCE
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Sytask, Inc
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  GS Gamboa Corp
                </button>
              </div>

              <div
                className="tab-content"
                id="v-pills-tabContent"
                style={{ width: "100%" }}
              >
                <div
                  className="tab-pane fade bg-white show active shadow-lg"
                  style={{ maxHeight: "80vh", minHeight: "70vh" }}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade bg-white show  shadow-lg"
                  style={{ maxHeight: "80vh", minHeight: "70vh" }}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade bg-white show  shadow-lg"
                  style={{ maxHeight: "80vh", minHeight: "70vh" }}
                  id="v-pills-disabled"
                  role="tabpanel"
                  aria-labelledby="v-pills-disabled-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade bg-white show  shadow-lg"
                  style={{ maxHeight: "80vh", minHeight: "70vh" }}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade bg-white show  shadow-lg"
                  style={{ maxHeight: "80vh", minHeight: "70vh" }}
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4">
          <div
            className="col-12 bg-dark p-5"
            style={{ borderRadius: "30px 30px 0px 0px", height: "200px" }}
          >
            <h1
              className="text-title-primary text-primary pb-lg-5 pb-1 text-center"
              style={{ fontSize: "calc(1.5vw + 1.5vh + 2vmin)" }}
            >
              GOLDEN DIGITECH TEAM
            </h1>
          </div>
        </div>

        <div className="row pt-4 mt-4 bg-dark px-3">
          <div className="d-lg-flex d-grid justify-content-between">
            <div className="d-grid" style={{ width: "50%" }}>
              <img src={img.footerLogo} width={361} height={72} alt="logo2" />
              <p className="text-white text-subtitle-secondary m-0">
                We’re located at:
              </p>
              <p className="text-white text-paragraph-secondary fw-lighter">
                Goldrake Building, Kabankalan - Bais Road, Kabankalan,
                Philippines
              </p>
              <br />
              <p className="text-white text-subtitle-secondary">
                Social Media :
              </p>
              <div>
                <i></i>
                <p>asd</p>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="d-grid" style={{ width: "50%" }}>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  Home
                </Link>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  About Us
                </Link>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  Services
                </Link>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  Team
                </Link>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  Privacy
                </Link>
                <Link
                  to={"#"}
                  className="text-decoration-none text-title-secondary text-white"
                >
                  Terms & Condition
                </Link>
              </div>
              <div className="ps-5">
                <p
                  className="text-title-secondary text-center"
                  style={{ color: "#dbb000" }}
                >
                  Scan Me
                </p>
                <img src={img.qrCodde} className="img-fluid" alt="barcode" />
              </div>
            </div>
          </div>

          <hr style={{ color: "white" }} />
          <p
            className="text-center pt-2 text-white text-paragraph-secondary fw-lighter"
            style={{ fontSize: ".8rem" }}
          >
            Copyright © 2024 All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
