import React from "react";
import { InsertLink } from "@mui/icons-material";
import Portfolio1 from "./images/portfolio 1.jpg"
import portfolio2 from "./images/portfolio2.webp"
import portfolio3 from "./images/portfolio3.webp"
import ecommerce1 from "./images/ecommerce1.jpg"
import ecommerce2 from "./images/ecommerce2.png"
import ecommerce3 from "./images/ecommerce3.png";
const All = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="All">
          <div className="RowOne row wrap">
            <div className='AA img '>
              <img alt="port1" src={Portfolio1} loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
            </div>

            <div className="AB img">
              <img src={ecommerce1} alt="e1" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>

            </div>
            <div className="AC img">
              <img src={portfolio2} alt="port2" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>

            </div>

          </div>{/* /RowOne */}
          <div className="RowTwo row wrap" style={{ justifyContent: 'space-around', marginTop: "5%" }}>
            <div className='BA img'>
              <img src={ecommerce2} alt="e2" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>

            </div>
            <div className='BB img'>
              <img src={portfolio3} alt="port3" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>

            </div>
            <div className='BC img'>
              <img src={ecommerce3} alt="e3" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>
            </div>
          </div>{/* /RowTwo */}
        </div>
      </div>{/* /projects */}
    </>
  )
}
export default All