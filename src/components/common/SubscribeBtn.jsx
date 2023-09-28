import React from "react";
export const SubscribeBtn = (props) => {
  return (
    <div>
      <button
        className="ff_roboto whiteHover overflow-hidden position-relative fw-medium fs_md lh_normal rounded-pill p_16_34 bg_pinkFF clr_whiteFFE subscribeHover h_53 d-flex align-items-center"
      >
        <span className="position-relative z-1">{props.text}</span>
      </button>
    </div>
  );
};
