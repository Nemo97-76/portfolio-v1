import React from "react";
import { InsertLink } from "@mui/icons-material";

const Ecommerce = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="ecommerce">
          <div className="RowOne row wrap" style={{ justifyContent: "space-around" }}>

            <div className="AB img">
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>

            </div>

            <div className='BA img'>
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>

            </div>

            <div className='BC img'>
              <div>
                <InsertLink className='icon' />
                <h2>ecommerce</h2>
              </div>
            </div>

          </div>{/* /RowOne */}
        </div> {/* /ecommerce */}
      </div>{/* /projects */}

    </>
  )
}
export default Ecommerce