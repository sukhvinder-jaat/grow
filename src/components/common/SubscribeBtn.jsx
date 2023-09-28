import React from "react";
export const SubscribeBtn = (props) => {
  return (
    <div>
      <button
        data-aos="fade-up"
        className="ff_roboto fw-medium fs_md lh_normal rounded-pill p_16_34 bg_pinkFF clr_whiteFFE subscribeHover"
      >
        {props.text}
      </button>
    </div>
  );
};
