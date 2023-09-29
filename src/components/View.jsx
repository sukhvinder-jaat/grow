import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Take } from "./common/Helper";
import { SubscribeBtn } from "./common/SubscribeBtn";
export const View = () => {
  return (
    <div className="bg_whiteEF pt-5 mt-xl-5 mt-sm-4">
      <Container className="pb-sm-5" id="article">
        <p className="ff_roboto text-black text-center fw-normal fs_4xl mb-lg-5 pb-3">
          Let’s Take a <span className="fw-semibold">View</span>
        </p>
        {Take.map((vieww) => {
          return (
            <div key={vieww.id}>
              <hr className="viewLine" />
              <Row className="justify-content-between viewBox">
                <Col lg={4} md={5} xs={12} className="overflow-hidden">
                  <img src={vieww.image} alt="image" className="w-100 h-100 viewImg" />
                </Col>
                <Col lg={7} md={7} xs={12}>
                  <p
                    className={`clr_pinkFF ff_roboto fs_md fw-medium fs_md ${vieww.july}`}
                  >
                    July 2023
                  </p>
                  <p
                    className={`ff_roboto fw-medium fs_2xl lh_normal text-black mx_550 ${vieww.joinBottom}`}
                  >
                    {vieww.join}
                  </p>
                  <p
                    className={`ff_roboto fs_sm fw-normal clr_silver48 ${vieww.workingSpace}`}
                  >
                    {vieww.working}
                  </p>
                  <p
                    className={`ff_roboto fs_xsm fw-normal clr_silver48 ${vieww.workingSpace}`}
                  >
                    {vieww.lior}
                  </p>
                  <p className="pointer text-black fw-medium fs_md text-decoration-underline ff_roboto hover_pink mb-0  d-inline-block">
                    Read more
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <img src={vieww.heart} className="pointer" />
                    <img src={vieww.chat} className="pointer" />
                    <img src={vieww.share} className="pointer" />
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
        <hr className="viewLine" />
        <div className="text-center d-flex justify-content-center mt-4 pt-2">
          <button className="ff_roboto fw-medium subscribeHover whiteHover overflow-hidden position-relative fs_md lh_normal w_188 p-3 rounded-pill bg_pinkFF clr_whiteFFE subscribeHover justify-content-center h_53 d-flex align-items-center">
            <span className="position-relative z-1">View All</span>
          </button>
        </div>
      </Container>
    </div>
  );
};
