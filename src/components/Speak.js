import { Avatar } from "@mui/joy";
import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import client1 from "../client-sm-4.jpg"
import client2 from "../client-sm-2.jpg"
import client3 from "../client-sm-3.jpg"
const Speak = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="clientSpeak">

      <div
        className="AboutMeTitle"
      >
        client speak</div>
      <h5 className="speakTitle mt-4" style={{ textAlign: "center" }}>
        what some of my clients says
      </h5>
      <Carousel className="carousel" interval={3000} activeIndex={index} controls={false} onSelect={handleSelect}>
        <Carousel.Item className="CarosuelItem"  >
          <div>
            <div className="speakContainer" >
              <div  className="clientcomment">
                <sup ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#e57734" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg></sup>I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et.</div>
            </div>

            <Avatar src={client1} className="review1 Avatar mt-3 " ></Avatar>
            <p className="pt-3">chris Tom <p className="clientDetails">user from UK</p></p>
          </div>
        </Carousel.Item>{/* item1 */}

        <Carousel.Item className="CarosuelItem"  >
          <div >

            <div className="speakContainer" >

              <div className="clientcomment">
                <sup><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#e57734" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg></sup>Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.</div>
            </div>
            <Avatar src={client2} className="Avatar mt-3"  />
          </div>
          <p className="pt-3">dennis jacques <p className="clientDetails">noon inc</p></p>
        </Carousel.Item>{/* item2 */}


        <Carousel.Item className="CarosuelItem"  >
          <div >
            <div className="speakContainer" >
              <div className="clientcomment">
                <sup><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#e57734" class="bi bi-quote" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg></sup>I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.</div>
            </div>
            <Avatar src={client3} className="Avatar mt-3"  />
          </div>
          <p className="pt-3">Patrick Cary<p className="clientDetails">freelancer from USA</p></p>

        </Carousel.Item>{/* item3 */}

      </Carousel>


    </div>
  )
}
export default Speak;