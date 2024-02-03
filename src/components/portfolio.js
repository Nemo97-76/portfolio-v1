import React from "react";
import { InsertLink } from "@mui/icons-material";

const Portfolio = () => {
  return (
    <>
      <div id="projects" className="mt-5">
        <div className="portfolio">
          <div className="RowOne row" >
            <div className='AA img '>
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>
            </div>

            <div className="AC img">
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>

            </div>

            <div className='BB img'>
              <div>
                <InsertLink className='icon' />
                <h2>portfolio</h2>
              </div>

            </div>
          </div>{/* /RowOne */}

        </div>{/* /portfolio */}
      </div>{/* /projects */}

    </>
  )
}
export default Portfolio