import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeBtn } from "./common/SubscribeBtn";
import welcomeImg from "../assets/images/webp/WelcomeImg.webp";
export const Welcome = () => {
  return (
    <div className="bg_whiteEF pt-md-5 pb-md-4 my-md-5 my-4 position-relative z-1">
      <Container>
        <Row className="position-relative welcomeImg pt-md-0 pt-4" id="about">
          <Col xl={6} md={4} xs={12}>
            <p className="d-md-none ff_roboto fw-normal text-black mb-0 fs_4xl mb-3">
              <span className="fw-semibold ">Welcome</span> to Work Skills
            </p>
            <img
              src={welcomeImg}
              alt="welcomeImg"
              className="w-100 d-md-none"
            />
          </Col>
          <Col xl={6} md={8} xs={12} className="my-md-4 mb-md-4">
            <div
              className="bg_whiteFA rounded-2 p-sm-3 p-2 my-md-5 mb-5 mt-3 position-relative z-1"
              data-aos-offset="200"
              data-aos="fade-left"
            >
              <p
                className="ff_roboto d-md-block lh_normal d-none fw-normal text-black mb-0 fs_4xl mb-3 "
                data-aos-offset="200"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
              >
                <span className="fw-semibold ">Welcome</span> to Work Skills
              </p>
              <ul className="ps-4 mb-xl-5 mb-4">
                <li
                  className="list_dot ff_roboto fs_sm fw-normal clr_silver4B mb-3"
                  data-aos-offset="200"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                >
                  Work Skills is built for young professionals who want to
                  enhance their soft skills to overcome the challenges they
                  often face during the early first years of work.
                </li>
                <li
                  className="list_dot ff_roboto fs_sm fw-normal clr_silver4B mb-3"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-anchor-placement="center-bottom"
                >
                  In a practical and growth-oriented approach, we help young
                  professionals develop and strengthen essential skills such as
                  boundaries-setting, communication, adaptability, and others.
                </li>
                <li
                  className="list_dot ff_roboto fs_sm fw-normal clr_silver4B"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-offset="200"
                >
                  In this way, we aim to empower young professionals to navigate
                  their careers with confidence and success.
                </li>
              </ul>
              <SubscribeBtn text="Subscribe" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
