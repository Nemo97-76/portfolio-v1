import React, {useEffect} from "react";
import { InsertLink } from "@mui/icons-material";
import ecommerce1 from "./images/ecommerce1.jpg";
import ecommerce2 from "./images/ecommerce2.png";
import ecommerce3 from "./images/ecommerce3.png";
import { Tooltip } from "@mui/joy";
import AOS from "aos";
import "aos/dist/aos.css";
const Ecommerce = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="mt-5">
        <div className="ecommerce">
          <div
            className="RowOne row wrap"
          >
            <div
              className="AB img"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="15000"
            >
              <img
                src={ecommerce1}
                alt="e1"
                loading="lazy"
                style={{ width: "100%" }}
              />
              <Tooltip title="comming soon">
                <div>
                  <InsertLink className="icon" />
                  <br />
                  <span style={{ fontSize: "1rem" }}>ecommerce</span>
                </div>
              </Tooltip>
            </div>

            <div
              className="BA img"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="15000"
            >
              <img
                src={ecommerce2}
                alt="e2"
                loading="lazy"
                style={{ width: "100%" }}
              />
              <Tooltip title="comming soon">
                <div>
                  <InsertLink className="icon" />
                  <br />
                  <span style={{ fontSize: "1rem" }}>ecommerce</span>
                </div>
              </Tooltip>
            </div>

            <div
              className="BC img"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="15000"
            >
              <img
                src={ecommerce3}
                alt="e3"
                loading="lazy"
                style={{ width: "100%" }}
              />
              <Tooltip title="comming soon">
                <div>
                  <InsertLink className="icon" />
                  <br />
                  <span style={{ fontSize: "1rem" }}>ecommerce</span>
                </div>
              </Tooltip>
            </div>
          </div>
          {/* /RowOne */}
        </div>{" "}
        {/* /ecommerce */}
      </div>
      {/* /projects */}
    </>
  );
};
export default Ecommerce;
