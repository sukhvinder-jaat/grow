import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { AccordianData } from "./common/Helper";
export const Frequently = () => {
  return (
    <div className="bg_whiteEF position-relative z-1 mb-sm-5 mb-4 pb-lg-4 pt-md-0 pt-3">
      <Container className="py-md-5 py-4" id="events">
        <p
          className="ff_outfit fw-semibold fs_5xl text-center text-black mb-4 pb-3"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </p>
        {/* accordian */}
        {AccordianData.map((data) => [
          <Accordion key={data.id} data-aos="fade-up">
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header>
                <p className="ff_outfit mb-0 fs_xl fw-medium clr_black0D lh_110">
                  {data.heading}
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_outfit fw-normal fs_sm text-black opacity08 mx_750">
                  {data.paragraph}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>,
        ])}
      </Container>
    </div>
  );
};
