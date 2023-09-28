import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Take } from "./common/Helper";
import { SubscribeBtn } from "./common/SubscribeBtn";
export const View = () => {
  return (
    <div className="bg_whiteEF pt-5 mt-xl-5 mt-sm-4">
      <Container className="pb-sm-5" id="article">
        <p
          className="ff_roboto text-black text-center fw-normal fs_4xl mb-lg-5 pb-3"
          data-aos="fade-up"
        >
          Let’s Take a <span className="fw-semibold">View</span>
        </p>
        {Take.map((vieww) => {
          return (
            <div key={vieww.id}>
              <hr className="viewLine" />
              <Row className="justify-content-between">
                <Col lg={4} md={5} xs={12} data-aos="fade-right">
                  <img src={vieww.image} alt="image" className="w-100 h-100" />
                </Col>
                <Col lg={7} md={7} xs={12}>
                  <p
                    data-aos="fade-left"
                    className={`clr_pinkFF ff_roboto fs_md fw-medium fs_md ${vieww.july}`}
                  >
                    July 2023
                  </p>
                  <p
                    data-aos="fade-left"
                    className={`ff_roboto fw-medium fs_2xl lh_normal text-black mx_550 ${vieww.joinBottom}`}
                  >
                    {vieww.join}
                  </p>
                  <p
                    data-aos="fade-left"
                    className={`ff_roboto fs_sm fw-normal clr_silver48 ${vieww.workingSpace}`}
                  >
                    {vieww.working}
                  </p>
                  <p
                    data-aos="fade-left"
                    className={`ff_roboto fs_sm fw-normal clr_silver48 ${vieww.workingSpace}`}
                  >
                    {vieww.lior}
                  </p>
                  <p
                    data-aos="fade-left"
                    className="pointer text-black fw-medium fs_md text-decoration-underline ff_roboto hover_pink mb-0  d-inline-block"
                  >
                    Read more
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <img src={vieww.heart} className="pointer" data-aos="fade-up" />
                    <img src={vieww.chat} className="pointer" data-aos="fade-up" />
                    <img src={vieww.share} className="pointer" data-aos="fade-up" />
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
        <hr className="viewLine" />
        <div className="text-center mt-4 pt-2">
          <SubscribeBtn text="View All" />
        </div>
      </Container>
    </div>
  );
};
