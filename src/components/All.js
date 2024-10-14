import React from "react";
import { InsertLink } from "@mui/icons-material";
import Portfolio1 from "./images/Admin Dashboard.png"
import portfolio2 from "./images/travel agency.png"
import portfolio3 from "./images/portfolio3.webp"
import ecommerce1 from "./images/linktree.png"
import ecommerce2 from "./images/ecommerce2.png"
import ecommerce3 from "./images/ecommerce3.png";
import { Tooltip } from "@mui/joy";


const All = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="All">
          <div className="RowOne row ">
           
              <div className='AA img '>
              <img alt="port1" src={Portfolio1} loading="lazy" style={{ width: "100%" ,borderRadius:"20px"}} />
<a href="https://admindashboard76.netlify.app/" target="_blank">
<Tooltip title="click to preview">
<div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>Admin Dashoard</span>
              </div>

</Tooltip>
</a>
            </div>{/* /img1 */}
            
 <div className="AB img">
              <img src={ecommerce1} alt="e1" loading="lazy" style={{ width: "100%",borderRadius:"20px" }} />
              <a href="https://nemolinktree.netlify.app/" target="_blank">
                <Tooltip title="click to preview">
                <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>LinkTree</span>
              </div>
                </Tooltip>
              </a>
            </div>{/* /img2 */}

            <div className="AC img">
              <img src={portfolio2} alt="port2" loading="lazy" style={{ width: "100%" ,borderRadius:"20px"}} />
              <a href="https://travelagency00.netlify.app" target="_blank">
                <Tooltip title="click to preview">
                <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
                </Tooltip>
              </a>
              
              
            </div>{/* /img3 */}

          </div>{/* /RowOne */}
          <div className="RowTwo row wrap" style={{ justifyContent: 'space-around', marginTop: "5%" }}>
           
            <div className='BA img'>
              <img src={ecommerce2} alt="e2" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>
            </div>{/* /img4 */}
           
            <div className='BB img'>
              <img src={portfolio3} alt="port3" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>portfolio</span>
              </div>
            </div>{/* /img5 */}

            <div className='BC img'>
              <img src={ecommerce3} alt="e3" loading="lazy" style={{ width: "100%" }} />
              <div>
                <InsertLink className='icon' /> <br />
                <span style={{ fontSize: "1rem" }}>ecommerce</span>
              </div>
            </div>{/* /img6 */}


          </div>{/* /RowTwo */}
        </div>
      </div>{/* /projects */}
    </>
  )
}
export default All