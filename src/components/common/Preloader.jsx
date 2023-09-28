import React from "react";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 2500);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <span className="z-15 w-50 d-flex flex-column justify-content-center align-items-center">
          <div className="d-inline-block">
            <p className="ff_roboto mx_600 lh_normal text-center fs_6xl text-white fw-normal mb-0 typed">
              Grow <span className="fw-medium">Work</span> Skill
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Preloader;
