import React from "react";
import { Container } from "react-bootstrap";
import joinLogo from "../assets/images/svg/joinLogo.svg";
import { SubscribeBtn } from "./common/SubscribeBtn";
export const Join = () => {
  return (
    <div className="bg_no_repeat join_bg py-4">
      <Container className="pt-3">
        <div className="d-flex flex-column align-items-center pb-3">
          <img
            src={joinLogo}
            alt="joinLogo"
            className="w-100 mx_128"
          />
          <p
            className="ff_roboto fs_4xl fw-normal text-center text-white lh_120 mx_800 my-3 py-1  mb-0 lh_120"
          >
            Join work skill and start
            <span className="fw-semibold"> work on your soft skills now </span>
            and change yourself
          </p>
          <p
            className="ff_roboto fs_sm fw-normal clr_whiteB7 mb-lg-5 mb-4 mx_510 text-center"
          >
            Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed. Eros
            sem sed gravida in nulla dictum
          </p>
          <SubscribeBtn text="Subscribe" />
        </div>
      </Container>
    </div>
  );
};
