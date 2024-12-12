import React ,{useEffect} from "react";
import { InsertLink } from "@mui/icons-material";
import Portfolio1 from "./images/Admin Dashboard.png"
import portfolio2 from "./images/travel agency.png"
import portfolio3 from "./images/age calculator.png"
import ecommerce1 from "./images/linktree.png"
import ecommerce2 from "./images/website-w-reactjs.png"
import ecommerce3 from "./images/ecommerce3.png"
import  Tooltip  from "@mui/joy/Tooltip";
import AOS from "aos";
import 'aos/dist/aos.css';


const All = () => {
  useEffect(()=>{
    AOS.init()
  },[])

    return (
    <>
      <div id="projects" className="mt-5">
        <div className="All">
          <div className="RowOne row ">
           
              <div className=' img' data-aos="fade-up" data-aos-delay="100" data-aos-duration="15000">
              <img alt="port1" src={Portfolio1} loading="lazy"  />
<a href="https://admindashboard76.netlify.app/" rel="noreferrer" target="_blank">
<Tooltip title="click to preview">
<div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>Admin Dashoard</span>
              </div>

</Tooltip>
</a>
            </div>{/* /img1 */}
            
 <div className=" img" data-aos="fade-up" data-aos-delay="200" data-aos-duration="15000">
              <img src={ecommerce1} alt="e1" loading="lazy"  />
              <a href="https://nemolinktree.netlify.app/" rel="noreferrer" target="_blank">
                <Tooltip title="click to preview">
                <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>LinkTree</span>
              </div>
                </Tooltip>
              </a>
            </div>{/* /img2 */}

            <div className=" img" data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000">
              <img src={portfolio2} alt="port2" loading="lazy"  />
              <a href="https://travelagency00.netlify.app" rel="noreferrer" target="_blank">
                <Tooltip title="click to preview">
                <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>travel agency</span>
              </div>
                </Tooltip>
              </a>
              
              
            </div>{/* /img3 */}

          </div>{/* /RowOne */}
          <div className="RowTwo row wrap" style={{ justifyContent: 'space-around', marginTop: "5%" }}>
           
            <div className=' img' data-aos="fade-up" data-aos-delay="400" data-aos-duration="15000">
              <img src={ecommerce2} alt="e2" loading="lazy"  />
            <a href="https://website-w-reactjs.netlify.app/" rel="noreferrer" target="_blank"> 
              <Tooltip title="click to preview">
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>website</span>
              </div>
              </Tooltip>
            </a>            
            </div>{/* /img4 */}
           
            <div className=' img' data-aos="fade-up" data-aos-delay="500" data-aos-duration="15000">
              <img src={portfolio3} alt="port3" loading="lazy"  />
              <a href="https://yourage24.netlify.app/" rel="noreferrer" target="_blank">
<Tooltip title="click to preview">
<div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>age calculator</span>
              </div>
  
</Tooltip>
              </a>
              
            </div>{/* /img5 */}

            <div className=' img' data-aos="fade-up" data-aos-delay="600" data-aos-duration="15000">
              <img src={ecommerce3} alt="e3" loading="lazy"  />
              <Tooltip title="comming soon">
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>
              </Tooltip>
            </div>{/* /img6 */}


          </div>{/* /RowTwo */}
        </div>
      </div>{/* /projects */}
    </>
  )
}
export default All