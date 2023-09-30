import { React, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import updateImg from "../assets/images/webp/UpdatedImg.webp";
import { UpdateIn, UpdateInsta, UpdateMessage } from "./common/Icons";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const Updated = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rhvi6ne",
        "template_db3q008",
        form.current,
        "VdFIJa-Q4kIcZzKM7"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            confirmButtonText: "Succes",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg_whiteEF py-xl-5 my-lg-5">
      <Container className="py-lg-5 py-4">
        <Row className="position-relative my-xl-5 mt-lg-5 mt-4 justify-content-center">
          {/* small box */}
          <Col
            xl={6}
            lg={7}
            xs={8}
            className="position-absolute start-0 top_-12 ps-0 d-lg-block d-none"
          >
            <img src={updateImg} alt="updateImg" className="w-100" />
          </Col>
          <Col lg={5} md={10} xs={12}>
            <img src={updateImg} alt="updateImg" className="w-100 d-lg-none" />
          </Col>
          <div className="bg_whiteF8 p-4 updateBoxSmall position-lg-absolute z-1 bottom_25 start-0">
            <div className="d-flex align-items-center justify-content-start">
              <a href="#" className="d-flex align-items-center" target="blank">
                <UpdateMessage />
                <p className="ff_roboto fw-normal lh_normal text-black mb-0 ps-3">
                  Stepenjohns@gmail.com
                </p>
              </a>
            </div>
            <div className="d-flex align-items-center mt-2">
              <a href="https://www.instagram.com/" target="blank">
                <UpdateInsta />
              </a>
              <a
                href="https://www.linkedin.com/?original_referer="
                className="ms-1"
                target="blank"
              >
                <UpdateIn />
              </a>
            </div>
          </div>
          <Col lg={7} md={10} xs={12} className="mt-lg-0 mt-4">
            <div className="bg_whiteFA updateBox hoverBoxPink position-relative z-1">
              <p className="clr_black11 ff_roboto fs_4xl lh_normal fw-normal mb-0">
                Get
                <span className="fw-semibold hoverHeadding mx-2">Updated</span>
                With Us
              </p>
              <p className="opacity06 text-black ff_roboto fs_sm fw-medium mb-0 my-3">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <Row className="pt-4">
                  <Col sm={6} xs={12}>
                    <div className="linerBorder w-100">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="to_name"
                        className="clr_black80 ff_roboto border-0 fs_sm fw-normal bg-white rounded-1 yourNameInput w-100"
                      />
                    </div>
                  </Col>
                  <Col sm={6} xs={12} className="pt-sm-0 pt-3">
                    <div className="linerBorder w-100">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        name="email"
                        required
                        className="clr_black80 ff_roboto border-0 fs_sm fw-normal bg-white rounded-1 yourNameInput w-100"
                      />
                    </div>
                  </Col>
                  <Col xs={12} className="mt-3 mb-2">
                    <div className="linerBorder w-100">
                      <textarea
                        className="w-100 min_h_140 clr_black80 border-0 ff_roboto fs_sm  fw-normal bg-white rounded-1 yourNameInput w-100"
                        placeholder="Message"
                        required
                        name="message"
                      />
                    </div>
                  </Col>
                </Row>
                <button
                  type="submit"
                  className="subscribeHover whiteHover overflow-hidden position-relative ff_roboto fs_md text-white lh_normal fw-medium bg_pinkF7 rounded-pill p_12_24 mt-4 justify-content-center h_53 d-flex align-items-center"
                >
                  <span className="position-relative z-1">Send Message</span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
