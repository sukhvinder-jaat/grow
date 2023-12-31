import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeBtn } from "./common/SubscribeBtn";
import welcomeImg from "../assets/images/webp/WelcomeImg.webp";
export const Welcome = () => {
  return (
    <div className="bg_whiteEF pt-md-5 pb-lg-5 my-md-5 my-4 position-relative z-1">
      <Container>
        <Row
          className="position-relative welcomeImg pt-md-0 pt-4 pb-md-4"
          id="about"
        >
          <Col xl={6} lg={4} xs={12}>
            <p className="d-lg-none ff_roboto text-center fw-normal text-black mb-0 fs_4xl mb-3">
              <span className="fw-semibold ">Welcome</span> to Work Skills
            </p>
            <img
              src={welcomeImg}
              alt="welcomeImg"
              className="w-100 d-lg-none"
            />
          </Col>
          <Col xl={6} lg={8} xs={12} className="my-lg-4 mb-lg-4">
            <div className="bg_whiteFA hoverBoxPink rounded-2 p-sm-4 p-3 my-md-4 mb-lg-5 mt-3 position-relative z-1">
              <p className="ff_roboto d-lg-block lh_normal d-none fw-normal text-black mb-0 fs_4xl mb-3 ">
                <span className="fw-semibold hoverHeadding">Welcome</span> to Work Skills
              </p>
              <ul className="ps-4 mb-xl-5 mb-4">
                <li className="list_dot ff_roboto fs_sm fw-normal clr_silver4B mb-lg-3 mb-1">
                  Work Skills is built for young professionals who want to
                  enhance their soft skills to overcome the challenges they
                  often face during the early first years of work.
                </li>
                <li className="list_dot ff_roboto fs_sm fw-normal clr_silver4B mb-lg-3 mb-1">
                  In a practical and growth-oriented approach, we help young
                  professionals develop and strengthen essential skills such as
                  boundaries-setting, communication, adaptability, and others.
                </li>
                <li className="list_dot ff_roboto fs_sm fw-normal clr_silver4B">
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
