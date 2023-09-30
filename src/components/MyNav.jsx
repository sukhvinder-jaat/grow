import React from "react";
import { Container, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../assets/images/svg/navLogo.svg";
import { NavOption } from "./common/Helper";
export const MyNav = () => {
  const [first, setfirst] = React.useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div className="position-relative" id="header">
        <Container className="px-md-3">
          <Nav>
            <div className="mt-3 w-100">
              <div className="d-flex justify-content-between align-items-center nav_property rounded-pill">
                <span className="z-10">
                  <img
                    src={logo}
                    alt="logo nav"
                    className="w-100 pointer mx_45_sm mx_50"
                  />
                </span>
                <div className="d-flex align-items-center">
                  <ul
                    className={`nav_show d-flex flex-md-row flex-column align-items-center mb-0 p-0 flex-row z-3
                      ${first ? "" : "showw gap-2"}`}
                  >
                    {NavOption.map((option) => {
                      return (
                        <>
                          <li key={option.id}>
                            <a
                              href={option.move}
                              onClick={clickshow}
                              className="position-relative fs_4vh me-md-3 fs_sm fw-normal ff_roboto hover_line text-white"
                            >
                              {option.home}
                            </a>
                          </li>
                        </>
                      );
                    })}
                    <li>
                      <div className="d-block d-md-none">
                        <button className="startBorder border-0 position-relative rounded-pill text-black ff_roboto fs_md fw-medium nav_btn whiteHover position-relative overflow-hidden hoverWhite bg_whiteHover2">
                          <span className=" position-relative z-1 textHoverWhite">
                            + Subscribe
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <button className="border-0 position-relative rounded-pill text-black ff_roboto fs_md fw-medium  nav_btn startBorder whiteHover position-relative overflow-hidden hoverWhite bg_whiteHover2">
                      <span className=" position-relative z-1 textHoverWhite">
                        + Subscribe
                      </span>
                    </button>
                  </div>
                </div>
                <div className="z-10 d-md-none position-relative">
                  <h3 className="text-white w-100" onClick={clickshow}>
                    {first ? <GiHamburgerMenu /> : <ImCross />}
                  </h3>
                </div>
              </div>
            </div>
          </Nav>
        </Container>
      </div>
    </>
  );
};
