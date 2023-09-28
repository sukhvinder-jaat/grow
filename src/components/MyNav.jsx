import React from "react";
import { Container, Nav } from "react-bootstrap";
import { AiOutlineAlignRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import logo from "../assets/images/svg/navLogo.svg";
import { NavOption } from "./common/Helper";
export const MyNav = () => {
  const [first, setfirst] = React.useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      {/* <div className="d-flex flex-column rounded-pill pt-md-1 flex-grow-0 position-relative z-3 px-md-3 px-5 "> */}
      <div className="position-relative">
        <Container className=" px-md-3">
          <Nav>
            <div className=" mt-3 w-100">
              <div className="d-flex justify-content-between align-items-center nav_property rounded-pill">
                <span className="z-10">
                  <img
                    src={logo}
                    alt="logo nav"
                    className="w-100 pointer mx_45_sm mx_50"
                  />
                </span>
                <div className="d-flex align-items-center">
                  {NavOption.map((option) => {
                    return (
                      <ul
                        key={option.id}
                        className={`
                       nav_show d-flex flex-md-row flex-column align-items-center mb-0 p-0 flex-row z-3
                      ${first ? "" : "showw gap-2"}`}
                      >
                        <li>
                          <a
                            href={option.move}
                            className="position-relative me-md-3 fs_sm fw-normal ff_roboto hover_line text-white"
                          >
                            {option.home}
                          </a>
                        </li>
                        <li>
                          <div className="d-block d-md-none">
                            <button className="startBorder border-0 position-relative rounded-pill text-black ff_roboto fs_md fw-medium bg-white nav_btn">
                              + Subscribe
                            </button>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <button className=" border-0 position-relative rounded-pill text-black ff_roboto fs_md fw-medium bg-white nav_btn startBorder">
                      + Subscribe
                    </button>
                  </div>
                </div>
                <div className="z-10 d-md-none position-relative">
                  <h3 className="text-white w-100" onClick={clickshow}>
                    {first ? <AiOutlineAlignRight /> : <ImCross />}
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
