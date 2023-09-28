import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import updateImg from "../assets/images/webp/UpdatedImg.webp";
import { UpdateIn, UpdateInsta, UpdateMessage } from "./common/Icons";
export const Updated = () => {
  return (
    <div className="bg_whiteEF py-xl-5 my-lg-5">
      <Container className="py-lg-5 py-4">
        <Row className="position-relative my-xl-5 mt-5 justify-content-center">
          {/* small box */}
          <div className="bg_whiteF8 p-4 updateBoxSmall position-absolute z-1 bottom_10 start-0 d-lg-block d-none">
            <div className="d-flex align-items-center justify-content-start">
              <a
                href="mail:Stepenjohns@gmail.com"
                className="d-flex align-items-center"
                target="blank"
              >
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
          <Col
            xl={6}
            lg={7}
            xs={8}
            className="position-absolute start-0 top_-12 ps-0 d-lg-block d-none"
          >
            <img src={updateImg} alt="updateImg" className="w-100" />
          </Col>
          <Col lg={5} md={8} sm="10" xs={12}>
            <img src={updateImg} alt="updateImg" className="w-100 d-lg-none" />
          </Col>
          <Col lg={7} xs={12} className="mt-lg-0 mt-4">
            <div className="bg_whiteFA updateBox position-relative z-1">
              <p className="clr_black11 ff_roboto fs_4xl lh_normal fw-normal mb-0">
                Get <span className="fw-semibold">Updated</span> With Us
              </p>
              <p className="opacity06 text-black ff_roboto fs_sm fw-medium mb-0 my-3">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli.
              </p>
              <Row className="pt-4">
                <Col xs={6}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-black ff_roboto fs_sm opacity05 fw-normal bg-white rounded-1 yourNameInput w-100"
                  />
                </Col>
                <Col xs={6}>
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="text-black ff_roboto fs_sm opacity05 fw-normal bg-white rounded-1 yourNameInput w-100"
                  />
                </Col>
                <Col xs={12} className="mt-3 mb-2">
                  <textarea
                    className="w-100 min_h_140 text-black ff_roboto fs_sm opacity05 fw-normal bg-white rounded-1 yourNameInput w-100"
                    placeholder="Message"
                  />
                </Col>
              </Row>
              <button className="subscribeHover whiteHover overflow-hidden position-relative ff_roboto fs_md text-white lh_normal fw-medium bg_pinkF7 rounded-pill p_12_24 mt-4 justify-content-center h_53 d-flex align-items-center">
                <span className="position-relative z-1">Send Message</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
