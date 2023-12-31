import React from "react";
import footerLogo from "../assets/images/svg/joinLogo.svg";
import writing from "../assets/images/svg/footerWriting.svg";
import { Container } from "react-bootstrap";
export const MyFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footerBg bg_no_repeat py-4">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <a href="#header">
            <img src={footerLogo} alt="footerLogo" className="mx_90 w-100" />
          </a>
          <p className="ff_roboto fw-normal mb-sm-2  mb-0 nowrap_375 fs_xsm text-white py_33 text-center">
            <span className="fs_sm clr_silver8E">© </span> {year} Lior krengle .
            <a
              href="#"
              className="text-decoration-underline pointer hoverOpacity06 text-white px-1"
            >
              Privacy
            </a>
            .
            <a
              href="#"
              className="text-decoration-underline pointer hoverOpacity06 pointer text-white px-1"
            >
              Terms
            </a>
            .
            <a
              href="#"
              className="text-decoration-underline pointer hoverOpacity06 pointer text-white px-1"
            >
              Collection Notice
            </a>
          </p>
          <div className="d-flex align-items-center flex-sm-row flex-column">
            <button className="lh_normal text-black fs_md fw-medium startBorder rounded-pill bg-white p_14_28">
              <img src={writing} alt="writing" width={24} height={24} /> Start
              Writing
            </button>
            <button className="lh_normal text-black fs_md fw-medium startBorder rounded-pill ms-sm-4 mt-sm-0 mt-3 bg-white p_16_32">
              Get the app
            </button>
          </div>
        </div>
        <hr className="footerLine mt-4" />
        <p className="ff_roboto fs_xsm fw-normal lh_normal clr_silver87 mb-0 text-center pt-3">
          <span className="text-decoration-underline pointer textHoverWhite">
            Substack
          </span>
          <span> is the home for great writing.</span>
        </p>
      </Container>
    </div>
  );
};
