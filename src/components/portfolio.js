import React ,{useEffect} from "react";
import { InsertLink } from "@mui/icons-material";
import portfolio1 from "./images/portfolio 1.png"
import Portfolio2 from "./images/portfolio2.webp"
import portfolio3 from "./images/portfolio3.webp"
import { Tooltip } from "@mui/joy";
import AOS from "aos";
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(()=>{
    AOS.init()
  },[])
 return (
    <>
      <div id="projects" className="mt-5">
        <div className="portfolio">
          <div className="RowOne row" >
          <div className=' img' data-aos="fade-up" data-aos-delay="100" data-aos-duration="15000">
          <img src={portfolio1} alt="port1" loading="lazy" />
              <Tooltip title="comming soon">
              <div>
                <InsertLink className='icon' /><br />
                <span alt="port1" style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
              </Tooltip>
            </div>

            <div className=" img" data-aos="fade-up" data-aos-delay="200" data-aos-duration="15000">
            <img src={Portfolio2} alt="port2" loading="lazy" />
              <Tooltip title="comming soon">
              <div>
                <InsertLink className='icon' /><br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
              </Tooltip>
            </div>

            <div className=" img" data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000">
              <img src={portfolio3} alt="port3" loading="lazy" />
              <Tooltip title="comming soon">
              <div>
                <InsertLink className='icon' /><br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
              </Tooltip>

            </div>
          </div>{/* /RowOne */}

        </div>{/* /portfolio */}
      </div>{/* /projects */}

    </>
  )
}
export default Portfolio