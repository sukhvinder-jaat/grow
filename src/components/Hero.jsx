import React from "react";
import { Container } from "react-bootstrap";
import { MyNav } from "./MyNav";
export const Hero = () => {
  return (
    <>
      <div className="hero_h_custom bg_no_repeat hero_bg d-flex flex-column justify-content-center position-relative z-3">
        <MyNav />
        <Container className="flex-grow-1 h-100 d-flex align-items-center justify-content-center py-md-5 pb-5 py-md-0 mt-sm-5 mt-md-0">
          <div className="d-flex flex-column justify-content-center align-items-center pt-5 pt-md-0">
            <p className="mb-2 pb-1 ff_roboto mx_600 lh_normal text-center fs_6xl text-white fw-normal mx_670_md">
              Meet <span className="fw-semibold">Work Skill</span> Your Agency
              for Growth
            </p>
            <p className="text-center ff_roboto clr_whiteCD fw-normal fs_sm mx_700 mb-3 pb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less norma.
            </p>
            <button className="ff_roboto fw-medium fs_md lh_normal rounded-pill startBorder mt-sm-4 p_16_34 whiteHover position-relative overflow-hidden hoverWhite bg_whiteHover">
              <span className=" position-relative">Get Started</span>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};
