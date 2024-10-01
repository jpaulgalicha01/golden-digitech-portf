import React from "react";
import Header from "../includes/Header";
import img from "../../images/imges";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
export default function Home({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid">
        <div className="row home-banner pb-4 mb-4">
          <Header scrolled={scrolled} title={title} />
          <div
            style={{ minHeight: "550px" }}
            className="d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
            data-aos-duration="900"
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
                        "“In the digital age, the right skills and support are the keys that unlock doors to endless opportunities”"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="row py-4 my-4">
          <h1
            className="text-title-primary text-primary pb-lg-5 pb-2"
            style={{
              fontSize: "calc(2vw + 1.5vh + 2vmin)",
              textAlign: "justify",
            }}
            data-aos="fade-up"
          >
            BRIEF OVERVIEW OF GOLDEN DIGITECH DIGITAL MARKETING SERVICES
          </h1>
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img
              src={img.logoPlain}
              alt="logo"
              className="img-fluid"
              style={{
                width: "500px",
                height: "auto",
                filter: "drop-shadow(7px 9px 7px #a8a8a8)",
              }}
              data-aos="flip-left"
            />
          </div>
          <div className="col-lg-6 co-12 mt-lg-0 mt-3" data-aos="fade-up">
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
              style={{ fontSize: "calc(2vw + 1.5vh + 2vmin)" }}
              data-aos="fade-up"
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
                      Virtual Assistance and Outsourcing Services
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link
                    to={"/services"}
                    className="text-decoration-none fs-5 text-title-secondary"
                    style={{ color: "#dbb000" }}
                    data-aos="fade-up"
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
            style={{ fontSize: "calc(2vw + 1.5vh + 2vmin)" }}
            data-aos="fade-up"
          >
            Sample Work with Some Clients
          </h1>

          <div className="col-12" data-aos="zoom-in">
            <div className="d-md-flex d-grid align-items-start row-gap-5">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link text-subtitle-secondary active text-subtitle-secondary"
                  id="v-pills-first-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-first"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-first"
                  aria-selected="true"
                >
                  Pool Master Swimming Pool Equipment & Chemical Supplies
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-second-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-second"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-second"
                  aria-selected="false"
                >
                  POOL MASTER E-COMMERCE | Lazada & Shopee Store
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-third-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-third"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-third"
                  aria-selected="false"
                >
                  Swimming Pool Filter Elements
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-fourth-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-fourth"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-fourth"
                  aria-selected="false"
                >
                  Golden Agri Ventures
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-fifth-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-fifth"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-fifth"
                  aria-selected="false"
                >
                  GOLDEN AGRI E-COMMERCE | Lazada & Shopee Store
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-sixth-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-sixth"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-sixth"
                  aria-selected="false"
                >
                  Sytask, Inc
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-seven-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-seven"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-seven"
                  aria-selected="false"
                >
                  GS Gamboa Corp.
                </button>
                <button
                  className="nav-link text-subtitle-secondary"
                  id="v-pills-eight-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-eight"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-eight"
                  aria-selected="false"
                >
                  GD Virtual Assistance and Outsourcing Services
                </button>
              </div>

              <div
                className="tab-content"
                id="v-pills-tabContent"
                style={{ width: "100%" }}
              >
                <div
                  className="tab-pane fade bg-white active show  shadow p-3 mb-5  rounded"
                  id="v-pills-first"
                  role="tabpanel"
                  aria-labelledby="v-pills-first-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample1}
                        className="img-fluid"
                        alt="sample1"
                        style={{ width: "500px" }}
                      />
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Management
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Graphic Design
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Meta Ads
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          E-commerce Set-up and Support
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Branding & Brand Strategy
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Video Creation & Editing
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Content Strategy & Marketing
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Online Customer Service
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Virtual Assistance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade bg-white shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-second"
                  role="tabpanel"
                  aria-labelledby="v-pills-second-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <div className="d-grid gap-2 justify-content-center">
                        <div>
                          <img
                            src={img.sample2}
                            className="img-fluid"
                            alt="sample1"
                            style={{ width: "290px" }}
                          />
                        </div>
                        <div>
                          <img
                            src={img.sample3}
                            className="img-fluid"
                            alt="sample1"
                            style={{ width: "290px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">
                          Online store design
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Online store creation and setup
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Product shoot
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Editing of product photos
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Uploading of product photos
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Product measurement
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Entry of product details
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Setting up payment options
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Customer service chat
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Processing of orders
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Product inventory update{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade bg-white   shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-third"
                  role="tabpanel"
                  aria-labelledby="v-pills-third-tab"
                >
                  <div className="row p-lg-5 p-3">
                    Swimming Pool Filter Elements
                  </div>
                </div>
                <div
                  className="tab-pane fade bg-white   shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-fourth"
                  role="tabpanel"
                  aria-labelledby="v-pills-fourth-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample4}
                        className="img-fluid"
                        alt="sample1"
                        style={{ width: "500px" }}
                      />
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Management
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Graphic Design
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Meta Ads
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          E-commerce Set-up and Support
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Branding & Brand Strategy
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Video Creation & Editing
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Content Strategy & Marketing
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Online Customer Service
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Virtual Assistance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-fifth"
                  role="tabpanel"
                  aria-labelledby="v-pills-fifth-tab"
                >
                  <div className="row p-lg-5 p-3">
                    GOLDEN AGRI E-COMMERCE
                    {/* <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample4}
                        className="img-fluid"
                        alt="sample1"
                        style={{ width: "500px" }}
                      />
                    </div> */}
                    {/* <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">Social Media Management</li>
                        <li className="text-paragraph-secondary text-secondary">Graphic Design</li>
                        <li className="text-paragraph-secondary text-secondary">Meta Ads</li>
                        <li className="text-paragraph-secondary text-secondary">E-commerce Set-up and Support</li>
                        <li className="text-paragraph-secondary text-secondary">Branding & Brand Strategy</li>
                        <li className="text-paragraph-secondary text-secondary">Video Creation & Editing</li>
                        <li className="text-paragraph-secondary text-secondary">Social Media Content Strategy & Marketing</li>
                        <li className="text-paragraph-secondary text-secondary">Online Customer Service</li>
                        <li className="text-paragraph-secondary text-secondary">Virtual Assistance</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-sixth"
                  role="tabpanel"
                  aria-labelledby="v-pills-sixth-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample6}
                        className="img-fluid"
                        alt="sample1"
                        style={{ width: "500px" }}
                      />
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">
                          Facebook and Instagram Pages Set-up
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Management
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Online Customer Service
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Graphic Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-seven"
                  role="tabpanel"
                  aria-labelledby="v-pills-seven-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample7}
                        className="img-fluid"
                        alt="sample1"
                        style={{ width: "500px" }}
                      />
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <ul>
                        <li className="text-paragraph-secondary text-secondary">
                          Facebook Page Set-up
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Social Media Management
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Content Creation
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Online Customer Service
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Graphic Design
                        </li>
                        <li className="text-paragraph-secondary text-secondary">
                          Organic Marketing (Meta)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade shadow p-3 mb-5 bg-white  rounded"
                  id="v-pills-eight"
                  role="tabpanel"
                  aria-labelledby="v-pills-eight-tab"
                >
                  <div className="row p-lg-5 p-3">
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample8A}
                        className="img-fluid"
                        alt="sample1"
                      />
                    </div>
                    <div className="col-lg-6 col-12 py-lg-0 py-2">
                      <img
                        src={img.sample8b}
                        className="img-fluid"
                        alt="sample1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
