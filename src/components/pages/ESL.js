import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
import img from "../../images/imges";
import { Link } from "react-router-dom";
export default function ESL({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg ">
          <Header scrolled={scrolled} title={title} />
          <div
            className="d-flex justify-content-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-10 col-11 py-5">
              <h1
                className="text-start text-title-primary text-primary pb-lg-1 pb-2"
                style={{
                  fontSize: "calc(2vw + 1.5vh + 2vmin)",
                }}
                data-aos="fade-up"
              >
                Master English as a Second Language with Our ESL Program
              </h1>
              <br />

              <p
                className="text-paragraph-secondary text-white"
                style={{ textIndent: "50px", textAlign: "justify" }}
                data-aos="fade-up"
              >
                &mdash; At Golden Digitech, we offer high-quality ESL (English
                as a Second Language) courses tailored to meet the diverse needs
                of learners from all over the world. Whether you're a beginner
                looking to start from scratch or an advanced learner aiming to
                refine your skills, we provide flexible and personalized English
                lessons designed to help you succeed in your personal, academic,
                or professional journey
              </p>

              <p
                className="fs-5 text-title-secondary text-center pt-md-5 pt-3"
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                A. Why Choose Us?
              </p>
              <div className="d-md-flex d-grid justify-content-center mx-auto pt-md-5 pt-3">
                <div
                  className="p-4 w-lg-25 w-100 text-center"
                  data-aos="fade-up"
                  style={{ backgroundColor: "#efd303" }}
                >
                  <div>
                    <img
                      src={img.personalLearning}
                      alt=""
                      width={"150"}
                      className="img-fluid pb-5"
                    />
                  </div>
                  <small>
                    Personalized Learning: Every student receives a customized
                    lesson plan based on their proficiency level and goals.
                  </small>
                </div>
                <div
                  className="p-4 w-lg-25 w-100 text-center"
                  data-aos="fade-up"
                  style={{ backgroundColor: "#ffed10" }}
                >
                  <div>
                    <img
                      src={img.expIns}
                      alt=""
                      width={"150"}
                      className="img-fluid pb-5"
                    />
                  </div>
                  <small>
                    Experienced Instructors: Learn from certified and
                    experienced ESL teachers committed to helping you improve
                    your English skills.
                  </small>
                </div>
                <div
                  className="p-4 w-lg-25 w-100 text-center"
                  data-aos="fade-up"
                  style={{ backgroundColor: "#fffb43" }}
                >
                  <div>
                    <img
                      src={img.interactiveEngaging}
                      alt=""
                      width={"150"}
                      className="img-fluid pb-5"
                    />
                  </div>
                  <small>
                    Interactive & Engaging: Our courses emphasize real-world
                    conversations, listening activities, and role-playing to
                    ensure you're confident in using English in everyday life.
                  </small>
                </div>
                <div
                  className="p-4 w-lg-25 w-100 text-center"
                  data-aos="fade-up"
                  style={{ backgroundColor: "#fdff88" }}
                >
                  <div>
                    <img
                      src={img.globalOppur}
                      alt=""
                      width={"150"}
                      className="img-fluid pb-5"
                    />
                  </div>
                  <small>
                    Global Opportunities: Mastering English opens doors to
                    international career opportunities, travel, and connections
                    with people worldwide.
                  </small>
                </div>
              </div>

              <p
                className="fs-5 text-title-secondary text-center pt-5 "
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                B. Our Courses
              </p>

              <div className="col-12 d-md-flex d-grid pt-5">
                <div
                  className="w-100 text-md-start text-center p-4"
                  style={{
                    backgroundColor: "#DBB000",
                    borderRadius: "20px",
                  }}
                  data-aos="fade-up"
                >
                  <div className="d-md-none d-block pb-5">
                    <img
                      src={img.beginAd}
                      alt=""
                      width={"150px"}
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div>
                    <p className="fs-5 text-title-secondary text-white fw-bolder">
                      Beginner to Advanced Levels
                    </p>
                    <p className="text-paragraph-secondary text-white">
                      We cater to all skill levels, from foundational English to
                      advanced grammar and communication.
                    </p>
                  </div>
                </div>
                <div className="w-50 d-md-block d-none d-flex align-content-center">
                  <img
                    loading="lazy"
                    src={img.beginAd}
                    alt=""
                    width={"150px"}
                    className="img-fluid"
                    data-aos="fade-up"
                  />
                </div>
              </div>
              <div className="col-12 d-md-flex d-grid pt-5">
                <div className="w-50 d-md-block d-none d-flex align-content-center">
                  <img
                    loading="lazy"
                    src={img.specialCourse}
                    alt=""
                    width={"150px"}
                    className="img-fluid"
                    data-aos="fade-up"
                  />
                </div>
                <div
                  className="w-100 text-md-start text-center p-4"
                  style={{
                    backgroundColor: "#DBB000",
                    borderRadius: "20px",
                  }}
                  data-aos="fade-up"
                >
                  <div className="d-md-none d-block pb-5">
                    <img
                      src={img.specialCourse}
                      alt=""
                      width={"150px"}
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div>
                    <p className="fs-5 text-title-secondary text-white fw-bolder">
                      Specialized Courses
                    </p>
                    <p className="text-paragraph-secondary text-white">
                      Business English: Improve your professional communication
                      for international work environments. Conversational
                      English: Gain fluency and confidence in everyday
                      conversations. Exam Preparation: Get ready for IELTS,
                      TOEFL, or other standardized tests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 d-md-flex d-grid pt-5">
                <div
                  className="w-100 text-md-start text-center p-4"
                  style={{
                    backgroundColor: "#DBB000",
                    borderRadius: "20px",
                  }}
                  data-aos="fade-up"
                >
                  <div className="d-md-none d-block pb-5">
                    <img
                      src={img.flexLearning}
                      alt=""
                      width={"150px"}
                      className="img-fluid"
                    />{" "}
                  </div>
                  <div>
                    <p className="fs-5 text-title-secondary text-white fw-bolder">
                      Flexible Learning Options
                    </p>
                    <p className="text-paragraph-secondary text-white">
                      Online Classes: Learn from anywhere with our fully
                      interactive online courses. One-on-One Lessons:
                      Personalized tutoring for those seeking tailored learning
                      experiences. Group Classes: Join a supportive community of
                      learners in our small-group sessions.
                    </p>
                  </div>
                </div>
                <div className="w-50 d-md-block d-none d-flex align-content-center">
                  <img
                    loading="lazy"
                    src={img.flexLearning}
                    alt=""
                    width={"150px"}
                    className="img-fluid"
                    data-aos="fade-up"
                  />
                </div>
              </div>

              <p
                className="fs-5 text-title-secondary text-center py-5 "
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                C. How to Get Started
              </p>

              <div className="col-12">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-aos="fade-up"
                  data-bs-wrap="true"
                >
                  <div className="carousel-indicators" style={{ zIndex: "1" }}>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={img.esl1}
                        className="d-block mx-auto img-fluid"
                        style={{ width: "550px" }}
                        alt="..."
                        loading="lazy"
                      />
                      <div className="carousel-caption d-md-block">
                        <p>
                          Take Our Free Placement Test: Determine your current
                          English level.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img.esl2}
                        className="d-block mx-auto img-fluid"
                        style={{ width: "550px" }}
                        alt="..."
                        loading="lazy"
                      />
                      <div className="carousel-caption d-md-block">
                        <p>
                          Take a Free Trial Class: Experience our online
                          learning process.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img.esl3}
                        className="d-block mx-auto img-fluid"
                        style={{ width: "550px" }}
                        alt="..."
                        loading="lazy"
                      />
                      <div className="carousel-caption d-md-block">
                        <p>
                          Enroll in Your Course: Choose the program that
                          <br /> fits your schedule and goals.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img.esl4}
                        className="d-block mx-auto img-fluid"
                        style={{ width: "550px" }}
                        alt="..."
                        loading="lazy"
                      />
                      <div className="carousel-caption d-md-block">
                        <p>
                          Start Learning: Begin your ESL journey with us and
                          <br />
                          unlock new opportunities!
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row esl-banner">
          <div className="d-flex" style={{ height: "550px" }}>
            <div
              style={{ minHeight: "550px" }}
              className="d-flex align-items-center"
            >
              <div className="text-md-start text-center">
                <h1
                  className="text-title-primary text-white w-75 d-md-block d-none"
                  style={{ fontSize: "calc(2vw + 2.5vh + 2vmin)" }}
                >
                  Ready to improve your English skills? Get in touch with us
                  today!
                </h1>
                <h1
                  className="text-title-primary text-white w-100 d-md-none d-block"
                  style={{ fontSize: "calc(2vw + 2.5vh + 2vmin)" }}
                >
                  Ready to improve your English skills? Get in touch with us
                  today!
                </h1>
                <Link
                  to={"/contact-us"}
                  type="button"
                  className="btn btn-primary me-2 fs-4"
                  style={{
                    fontFamily: "'Bebas Neue', 'sans-serif'",
                    fontSize: "larger",
                  }}
                >
                  <i className="fa-solid fa-headset me-1" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
