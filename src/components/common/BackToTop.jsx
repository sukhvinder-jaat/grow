import React, { useState } from "react";
import { Container } from "react-bootstrap";
import backToTop from "../../assets/images/svg/backToTop.svg";
const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section>
      <Container>
        <img
          height={60}
          onClick={() => onTop()}
          className={
            first
              ? "d-none"
              : "d-block backtotop_btn pointer position-fixed end-0 bottom-0 mb-3 me-3"
          }
          src={backToTop}
          alt="image"
        />
      </Container>
    </section>
  );
};

export default BackToTop;
