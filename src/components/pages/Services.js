import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
export default function Services({ scrolled, title }) {
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
                className="text-title-primary text-primary pb-lg-5 pb-2"
                style={{
                  fontSize: "calc(2vw + 1.5vh + 2vmin)",
                  textAlign: "justify",
                }}
                data-aos="fade-up"
              >
                Services Offered
              </h1>
              <br />

              <div className="row">
                <div
                  className="col-lg-6 col-12 py-lg-3 py-2"
                  data-aos="fade-up"
                >
                  <p
                    className="fs-5 text-title-secondary text-start"
                    style={{ color: "#dbb000" }}
                  >
                    A. Digital Marketing Services:
                  </p>
                  <ul className="text-white text-start">
                    <li className="text-paragraph-secondary">
                      Social Media Management
                    </li>
                    <li className="text-paragraph-secondary">
                      Social Media Content Strategy & Marketing
                    </li>
                    <li className="text-paragraph-secondary">
                      Online Customer Service
                    </li>
                    <li className="text-paragraph-secondary">
                      Virtual Assistance
                    </li>
                    <li className="text-paragraph-secondary">Graphic Design</li>
                    <li className="text-paragraph-secondary">
                      Branding & Brand Strategy
                    </li>
                    <li className="text-paragraph-secondary">
                      Video Creation & Editing
                    </li>
                    <li className="text-paragraph-secondary">
                      Web Development
                    </li>
                    <li className="text-paragraph-secondary">
                      Search Engine Optimization
                    </li>
                    <li className="text-paragraph-secondary">
                      E-commerce Set-up and Support
                    </li>
                  </ul>
                </div>

                <div
                  className="col-lg-6 col-12 py-lg-3 py-2"
                  data-aos="fade-up"
                >
                  <p
                    className="fs-5 text-title-secondary text-start"
                    style={{ color: "#dbb000" }}
                  >
                    B. Digital Skills Training:
                  </p>
                  <ul className="text-white text-start">
                    <li className="text-paragraph-secondary">
                      Social Media Management Course
                    </li>
                    <li className="text-paragraph-secondary">
                      Introduction Course for Online Customer Services
                    </li>
                    <li className="text-paragraph-secondary">
                      English as a Second Language (ESL) Online Teaching Course
                    </li>
                    <li className="text-paragraph-secondary">
                      Social Media Management
                    </li>
                    <li className="text-paragraph-secondary">
                      Virtual Assistance Course
                    </li>
                    <li className="text-paragraph-secondary">
                      Digital Marketing Course
                    </li>
                  </ul>
                </div>

                <div
                  className="col-lg-6 col-12 py-lg-3 py-2"
                  data-aos="fade-up"
                >
                  <p
                    className="fs-5 text-title-secondary text-start"
                    style={{ color: "#dbb000" }}
                  >
                    C. BPO Services Partnership:
                  </p>
                  <div className="d-lg-flex d-grid justify-content-between pe-lg-5 pe-0">
                    <ul className="text-white text-start ">
                      <p
                        className="text-subtitle-secondary"
                        style={{ color: "#dbb000" }}
                      >
                        Virtual Assistance
                      </p>
                      <li className="text-paragraph-secondary">
                        Real Estate VA
                      </li>
                      <li className="text-paragraph-secondary">
                        Admin Support
                      </li>
                      <li className="text-paragraph-secondary">Data Entry</li>
                      <li className="text-paragraph-secondary">
                        Multimedia & Design
                      </li>
                    </ul>
                    <ul className="text-white text-start">
                      <p
                        className="text-subtitle-secondary"
                        style={{ color: "#dbb000" }}
                      >
                        Call Center Jobs
                      </p>
                      <li className="text-paragraph-secondary">
                        Telemarketing
                      </li>
                      <li className="text-paragraph-secondary">Telesales</li>
                      <li className="text-paragraph-secondary">
                        Customer Service
                      </li>
                      <li className="text-paragraph-secondary">
                        Technical Support
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-12 py-lg-3 py-2"
                  data-aos="fade-up"
                >
                  <p
                    className="fs-5 text-title-secondary text-start"
                    style={{ color: "#dbb000" }}
                  >
                    D. Our Team of Virtual Assistants and Outsourcing Services
                    Providers
                  </p>
                  <div className="d-lg-flex d-grid justify-content-between gap-2 mx-auto">
                    <ul className="text-white text-start">
                      <li className="text-paragraph-secondary">
                        Social Media Managers
                      </li>
                      <li className="text-paragraph-secondary">
                        Social Media Marketers
                      </li>
                      <li className="text-paragraph-secondary">
                        Customer Service Representatives
                      </li>
                      <li className="text-paragraph-secondary">
                        Technical Support Representatives
                      </li>
                      <li className="text-paragraph-secondary">
                        Sales Representatives
                      </li>
                      <li className="text-paragraph-secondary">
                        Search Engine Optimization Specialists
                      </li>
                      <li className="text-paragraph-secondary">
                        Lead Generation Specialists
                      </li>
                      <li className="text-paragraph-secondary">
                        Cold Callers and Appointment-Setters
                      </li>
                      <li className="text-paragraph-secondary">
                        General Virtual Assistants
                      </li>
                    </ul>
                    <ul className="text-white text-start">
                      <li className="text-paragraph-secondary">
                        E-commerce VAs
                      </li>
                      <li className="text-paragraph-secondary">
                        Administrative Virtual Assistants
                      </li>
                      <li className="text-paragraph-secondary">
                        Medical and Healthcare VAs
                      </li>
                      <li className="text-paragraph-secondary">
                        Real Estate Virtual Assistants
                      </li>
                      <li className="text-paragraph-secondary">
                        Accounting and Bookkeeping VAs
                      </li>
                      <li className="text-paragraph-secondary">
                        Web Developers and Designers
                      </li>
                      <li className="text-paragraph-secondary">
                        English as a Second Language Tutors
                      </li>
                      <li className="text-paragraph-secondary">
                        Digital Skills Trainers
                      </li>
                      <li className="text-paragraph-secondary">
                        Other Digital Skills Service Providers
                      </li>
                    </ul>
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
