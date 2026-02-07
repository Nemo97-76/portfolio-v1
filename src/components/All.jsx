import React, { useEffect } from "react";
import { InsertLink } from "@mui/icons-material";
import Form from "./images/login form.jpeg";
import TaskManger from "./images/task manger.jpeg";
import cal from "./images/age calculator.png";
import ecommerce1 from "./images/linktree.png";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import Tooltip from "@mui/joy/Tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

const All = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="projects" className="mt-5">
        <div className="All">
          <div className="RowOne row ">
            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="15000"
            >
              <img alt="port1" src={Form} loading="lazy" />
              <a
                href="https://loginsignup55.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Tooltip title="click to preview">
                  <div>
                    <InsertLink className="icon" /> <br />
                    <span style={{ fontSize: "1rem" }}>login/signup form</span>
                  </div>
                </Tooltip>
              </a>
            </div>
            {/* /img1 */}

            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="15000"
            >
              <img src={ecommerce1} alt="e1" loading="lazy" />
              <a
                href="https://nemolinktree.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Tooltip title="click to preview">
                  <div>
                    <InsertLink className="icon" /> <br />
                    <span style={{ fontSize: "1rem" }}>LinkTree</span>
                  </div>
                </Tooltip>
              </a>
            </div>
            {/* /img2 */}

            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="15000"
            >
              <img src={TaskManger} alt="port2" loading="lazy" />
              <div>
                <InsertLink className="icon" /> <br />
                <span style={{ fontSize: "1rem" }}>task manager</span>
              </div>
            </div>
            {/* /img3 */}
          </div>
          {/* /RowOne */}
          <div
            className="RowTwo row wrap"
            style={{ justifyContent: "space-around", marginTop: "5%" }}
          >
            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="15000"
            >
              <img src={img1} alt="e2" loading="lazy" />
              
                  <div>
                    <InsertLink className="icon" /> <br />
                    <span style={{ fontSize: "1rem" }}>traveling </span>
                  </div>
            </div>
            {/* /img4 */}

            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="15000"
            >
              <img src={cal} alt="port3" loading="lazy" />
              <a
                href="https://yourage24.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Tooltip title="click to preview">
                  <div>
                    <InsertLink className="icon" /> <br />
                    <span style={{ fontSize: "1rem" }}>age calculator</span>
                  </div>
                </Tooltip>
              </a>
            </div>
            {/* /img5 */}

            <div
              className=" img"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="15000"
            >
              <img src={img2} alt="e3" loading="lazy" />
                <div>
                  <InsertLink className="icon" /> <br />
                  <span style={{ fontSize: "1rem" }}>ecommerce</span>
                </div>
            </div>
            {/* /img6 */}
          </div>
          {/* /RowTwo */}
        </div>
      </div>
      {/* /projects */}
    </>
  );
};
export default All;
