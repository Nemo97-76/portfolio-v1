import React from "react";
import { InsertLink } from "@mui/icons-material";
import portfolio1 from "./images/portfolio 1.jpg"
import Portfolio2 from "./images/portfolio2.webp"
import portfolio3 from "./images/portfolio3.webp"
const Portfolio = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="portfolio">
          <div className="RowOne row" >
            <div className='AA img '>
              <img src={portfolio1} alt="port1" style={{ width: "100%" }} loading="lazy" />
              <div>
                <InsertLink className='icon' /><br />
                <span alt="port1" style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
            </div>

            <div className="AC img">
              <img src={Portfolio2} alt="port2" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /><br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
            </div>

            <div className='BB img'>
              <img src={portfolio3} alt="port3" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /><br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>

            </div>
          </div>{/* /RowOne */}

        </div>{/* /portfolio */}
      </div>{/* /projects */}

    </>
  )
}
export default Portfolio