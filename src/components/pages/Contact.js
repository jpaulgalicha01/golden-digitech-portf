import React from "react";
import Header from "../includes/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../includes/Footer";
import img from "../../images/imges";
import { Link } from "react-router-dom";
export default function Contact({ scrolled, title }) {
  Aos.init();
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row company-overview-bg">
          <Header scrolled={scrolled} title={title} />
          <div className="p-0 m-0 row">
            <div className="col-md-6 col-12 d-grid py-lg-5 py-3">
              <div className="map-container img-fluid">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.347221113349!2d122.81764657416302!3d9.98815007324025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac1113c7c233cd%3A0x8e001d76a142dcad!2sGolden%20Digitech%20Digital%20Marketing%20Services%20and%20Training%20Center!5e0!3m2!1sen!2sph!4v1726905847450!5m2!1sen!2sph"
                  style={{ border: "0" }}
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 col-12 py-lg-5 py-3 text-start">
              <p
                className="text-decoration-none fs-5 text-title-secondary"
                style={{ color: "#dbb000", textAlign: "justify" }}
                data-aos="fade-up"
              >
                For collaborations, partnerships, inquiries, and for more
                details, you may reach us through the following:
              </p>
              <div
                className=" d-lg-flex d-grid gap-3 pt-3  "
                data-aos="fade-up"
              >
                <Link
                  className="d-flex gap-2 text-decoration-none py-2 align-items-center"
                  to="https://mail.google.com/mail/?view=cm&fs=1&to=goldendigitechph@gmail.com"
                  target="_blank"
                >
                  <img
                    src={img.gmail}
                    alt="gmail icon"
                    style={{
                      width: "50px",
                    }}
                    className="img-fluid"
                  />
                  <p className=" text-white mb-0">goldendigitechph@gmail.com</p>
                </Link>
                <Link
                  className="d-flex gap-2 text-decoration-none py-2 align-items-center"
                  to={"https://www.facebook.com/digitalmarketingplustraining"}
                  target="_blank"
                >
                  <img src={img.facebook} alt="gmail icon" width={50} />
                  <p className=" text-white mb-0">Golden Digitech</p>
                </Link>
              </div>
              <p
                className="text-white text-subtitle-secondary py-3 m-0"
                data-aos="fade-up"
              >
                Or contact:
              </p>
              <div
                className="d-flex align-items-center gap-2"
                data-aos="fade-up"
              >
                <img src={img.mobile} alt="gmail icon" width={50} />
                <p className="text-white mb-0">0955 776 9445</p>
              </div>

              <div className="pt-lg-5 pt-3 d-flex justify-content-between mx-auto">
                <div className="w-50 d-flex align-items-end" data-aos="fade-up">
                  <h1
                    className="text-title-primary text-white"
                    style={{
                      fontSize: "calc(2.5vw + 1.5vh + 1vmin)",
                    }}
                  >
                    LET'S WORK TOGETHER SOON!
                  </h1>
                </div>
                <div>
                  <p
                    className="text-title-secondary text-center"
                    style={{ color: "#dbb000" }}
                    data-aos="fade-up"
                  >
                    Scan Me
                  </p>
                  <img
                    src={img.qrCodde}
                    className="img-fluid"
                    alt="barcode"
                    style={{
                      width: "200px",
                      height: "auto",
                    }}
                    data-aos="fade-up"
                  />
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
