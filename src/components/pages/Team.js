import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
export default function Team({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row ">
          <Header scrolled={scrolled} title={title} />
          <div className="d-flex justify-content-center company-overview-bg  ">
            <div className="col-md-10 col-11 py-5">
              <h1
                className="text-title-primary text-primary pb-lg-5 pb-2"
                style={{
                  fontSize: "calc(2vw + 1.5vh + 2vmin)",
                  textAlign: "justify",
                }}
                data-aos="fade-up"
              >
                Company overview
              </h1>
              <br />

              <p
                className="fs-5 text-title-secondary"
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                A. Mission Statement:
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                At Golden DigiTech Digital Marketing Services and Training
                Center, our mission is to empower individuals and businesses
                with the digital marketing knowledge and skills necessary to
                achieve their goals and maximize their potential. We strive to
                provide high-quality training and services that are tailored to
                the unique needs and objectives of each client and we also aim
                to help provide digital jobs in the countryside. We are
                committed to staying up-to-date with the latest trends and
                technologies in the digital marketing industry.
              </p>
              <br />
              <p
                className="text-decoration-none fs-5 text-title-secondary"
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                B. Vision Statement:
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                Our vision at Golden DigiTech Digital Marketing Services and
                Training Center is to become a leading provider of digital
                marketing solutions, training programs, and online work,
                recognized for our commitment to excellence, innovation, and
                results. We aspire to be the trusted partner for businesses and
                individuals seeking to leverage the power of digital marketing
                to achieve their objectives. Through our commitment to
                continuous learning and improvement, we aspire to be the go-to
                source for all things digital marketing.
              </p>
              <br />
              <p
                className="text-decoration-none fs-5 text-title-secondary"
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                C. VALUES
              </p>
              <p
                className="text-paragraph-secondary text-white"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
              >
                At Golden DigiTech Digital Marketing Services and Training
                Center, we believe in a set of core values that guide our work
                and shape our relationships with clients, employees, trainees,
                and the wider community
              </p>
              <br />
              <p
                className="text-decoration-none fs-5 text-title-secondary"
                style={{ color: "#dbb000" }}
                data-aos="fade-up"
              >
                These values include
              </p>

              <div className="row py-2">
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Excellence
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We strive for excellence in everything we do, whether
                        it's providing digital marketing services or delivering
                        training programs. We are dedicated to achieving the
                        highest standards of quality and professionalism.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Innovation
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We are constantly seeking new and better ways to solve
                        problems and meet the evolving needs of our clients and
                        the industry as a whole.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Empowerment
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We are passionate about empowering our clients and
                        students to achieve their full potential. We believe in
                        providing them with the tools, knowledge, and support
                        they need to succeed.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Integrity
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We conduct ourselves with the utmost integrity, honesty,
                        and transparency. We believe that trust is the
                        foundation of all successful relationships and work hard
                        to earn and maintain it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Collaboration
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We believe in working together as a team, with our
                        clients and partners, to achieve shared goals and create
                        mutual success. We encourage open communication, mutual
                        respect, and constructive feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-12 py-lg-3 py-3"
                  data-aos="fade-up"
                >
                  <div className="card" style={{ backgroundColor: "#dbb000" }}>
                    <div className="card-body p-3">
                      <p className="fs-3 text-title-secondary text-center text-white">
                        Community
                      </p>
                      <p
                        className="text-paragraph-secondary text-dark"
                        style={{ textAlign: "justify" }}
                      >
                        We believe in giving back to the community and
                        supporting social responsibility initiatives that make a
                        positive impact on people's lives.
                      </p>
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
