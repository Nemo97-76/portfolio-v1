import React from "react";
import { InsertLink } from "@mui/icons-material";

const All = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="All">
          <div className="RowOne row wrap">
            <div className='AA img '>
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>
            </div>
            <div className="AB img">
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>

            </div>
            <div className="AC img">
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>

            </div>

          </div>{/* /RowOne */}
          <div className="RowTwo row wrap" style={{ justifyContent: 'space-around', marginTop: "5%" }}>
            <div className='BA img'>
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>

            </div>
            <div className='BB img'>
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>

            </div>
            <div className='BC img'>
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>
            </div>
          </div>{/* /RowTwo */}
        </div>
      </div>{/* /projects */}
    </>
  )
}
export default All