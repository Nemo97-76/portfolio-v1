import React, {useEffect,useState} from "react";
import Typer from "./typer.js";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import BackToTop from "./BackToTop.js";
import resume from "../tasneem youssef Resume.pdf"
import Stack from '@mui/joy/Stack';
import { Box,  LinearProgress } from '@mui/joy';
import { Accordion } from 'react-bootstrap'
import Sheet from '@mui/joy/Sheet';
import Tooltip from '@mui/joy/Tooltip';
import Nav from 'react-bootstrap/Nav';
import { BsExclamationLg, BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs';
import Button from "@mui/joy/Button";
import { keyframes } from "@mui/system";
import { Snackbar } from '@mui/joy'
import { IoMdClose } from "react-icons/io";
import DownloadButton from "./downloadButton.js";
import Navigator from './navigator.js'
import Speak from './Speak.js';
import questionMark from "./images/questionMark.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toggle from "./Toggle.jsx";
import useLocalStorage from 'use-local-storage';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;
const Home = () => {

  //AOS initialize
  useEffect(()=>{
    AOS.init()
  },[])
  
  const [open, setOpen] = useState(false);
  var monthNow=new Date().getMonth()
var yearNow=new Date().getFullYear()
var dayNow= new Date().getDate()
let age = yearNow-1997
if (monthNow===11){
  if(dayNow===16){
    age = yearNow-1997
    }
  --age
}else{
--age
}


  const animationDuration = 600;
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
// eslint-disable-next-line
const preference=window.matchMedia("(prefers-color-scheme: dark)").matches;
const [isDark,setIsDark]=useLocalStorage("isDark",false);

  return (
    <div className="App" data-theme={isDark?"dark":"light"}>

            <Box className="themeToggle">
<Toggle
isChecked={isDark}
handleChange={()=>setIsDark(!isDark)}
/>
       </Box>
                  <div className="home" id="home">
        <h2
          className="InteroHeading"
        >
          <span className="welcomeMessage" >
            Hi,I'm a Junior &nbsp;
          </span>
          <br />
          <Typer />
          <span className="welcomeMessage">
            From Alexandria,Egypt
          </span>
          </h2>
<div className="NavToResume">
<Nav.Link href="#Resume">
<Button
            className="ResumeButton mt-5"
          >
            Resume
          </Button>
</Nav.Link>
          <br></br>
          <Nav.Link href="#Resume">
            <ArrowDownwardRoundedIcon
              className="Arrow"
            />
          </Nav.Link>
</div>
        <BackToTop />
      </div>

      <div

        className="AboutMe"
        id="AboutMe"
      >
        <p
          className="mb-4 AboutMeTitle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000"
        >
          About Me
        </p>
        <h3 className="mb-4 AboutMeHeading" data-aos="fade-up" data-aos-duration="15000" data-aos-delay="300">
          Know Me More
        </h3>
        <div
          className="detailsRow "  data-aos="fade-up" data-aos-delay="100" data-aos-duration="15000"
        >
          <div className="content" style={{ width: "45%" }}>
            <span id="title" className="BioHeading">
              Hi,I'm{" "}
              <b className="self">
                Tasneem Youssef
              </b>
            </span>
            <br></br>
            <span className="Bio">
              I'm a Junior developer with a passion for web design. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user. Thousands of clients have procured
              exceptional results while working with me. Delivering work within
              time and budget which meets client’s requirements is our aim.
            </span>
          </div>
          <div
            className="anime" data-aos="fade-up" data-aos-delay="200" data-aos-duration="15000"
          >
            <div
              className="circle"
            >
              <div className="number ">
                {age}
              </div>
            </div>
            {/* /circle */}
            <span style={{fontSize:"18px"}}>
              years <b>old</b>
            </span>
          </div>
          {/* /anime */}
        </div>
        <div
          className="Data"
        >
         
         <div className="item1" data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000">
          <span className="sub1-item1">Name :</span>
          <span className="sub2-item1">tasneem youssef</span>
         </div>{/* /item1 */}
         
         <div className="item2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="15000">
          <span className="sub1-item2">Email :</span>
          <span className="sub2-item2">tasneemyoussef61@gamil.com</span>
         </div>{/* /item2 */}

<div className="item3" data-aos="fade-up" data-aos-delay="500" data-aos-duration="15000">
  <span className="sub1-item3">Date of birth :</span>
  <span className="sub2-item3">12 december , 1997</span>
</div>{/* /item3 */}

<div className="item4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="15000">
  <span className="sub1-item4">form</span>
  <span className="sub2-item4">Alexandria, Egypt</span>
</div>{/* /item4 */}


        </div>
        {/* /data */}
      </div>
      {/* /AboutMe */}

      <div
        id='Resume'
        className="Resume "
      >
        <p
          className="mb-4 ResumeTitle"
        >
          Resume
        </p>
        <h3 className="BioHeading mb-4"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000">
          A summary of my Resume
        </h3>
        <div
          className="ResumeColumns"
        >
          <div
            className="columnOne" data-aos="fade-up" data-aos-duration="15000" data-aos-delay="200"
          >
            <h3 className="myskills" >My Education</h3>
            <div className="detailsBox"
            >
              <div>
                <h5>bachelor in physics</h5>
                <span>Alexandria unversity/2018-2022</span> <br></br>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>
            </div>
            <h3 className="myskills mt-2">My skills</h3>
            <div
              className="detailsBox"
            >
              
              <div>
                <h5>HTML/CSS</h5>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>

              <hr />

              <div>
                <h5>bootstrap</h5>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>
              

            </div>{/* /detailsBox */}

          </div>{/* /columnOne */}

          <div
            className="columnTwo" data-aos="fade-up" data-aos-duration="15000" data-aos-delay="300"
          >
            <div
              className="detailsBox"
            >
              
              <div>
                <h5>javaScript</h5>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>
              <hr />
              <div>
                <h5>reactjs.</h5>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>
              <hr />
              <div>
                <h5>Nodejs.</h5>
                <span className="eductiondetails">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div> 
              <hr/>
              <div>
                <h5>MongoDB</h5>
                <span className="eductiondetails">
                Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy text.
                </span>
              </div>
              
             
            </div>
          </div>
        </div>
        <div className="row bars mx-auto mt-5">
          <div className="progressBarleft">
            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="100">
              <div className="bardetails">
                <h5>web design</h5>
                <h5>95%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={95} />
              </Stack>
            </div>


            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="200">
              <div className="bardetails">
                <h5>HTML/CSS</h5>
                <h5>95%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={95} />
              </Stack>

            </div>

            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="300">
              <div className="bardetails">
                <h5>bootstrap</h5>
                <h5>90%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={90} />
              </Stack>

            </div>

          </div>
          <div className="progressBarRight">
            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="400">
              <div className="bardetails">
                <h5>javaScript</h5>
                <h5>80%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={80} />
              </Stack>

            </div>

            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="500">
              <div className="bardetails">
                <h5>Reactjs.</h5>
                <h5>85%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={85} />
              </Stack>

            </div>

            <div data-aos="fade-up" data-aos-duration="15000" data-aos-delay="600">
              <div className="bardetails">
                <h5>Nodejs.</h5>
                <h5>80%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={80} />
              </Stack>

            </div>

          </div>

        </div>
        <div className="btnHolder mt-5 pb-5">
          <DownloadButton fileurl={resume} filename="tasneem-Youssef-Resume.pdf" />
        </div>
      </div>

      <div className="portfolio"  >
        <p
          id="portfolio"
          className="mt-4"
        >
          portfolio
        </p>
        <h3 className="mt-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="15000">
          some of my recent projects
        </h3>
        <Navigator />
      </div>


      <div className="Hire mb-5">
        <div>
          <h2 data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease" >Interested in working with me?<br></br>
           
          </h2>
          <Button
          data-aos="fade-left" 
          data-aos-delay="1500"
              className="mt-5 bg-transparent text-white HireMe"
            >
              Hire me
            </Button>
        </div>
      </div>

      <Speak />
      <div className="QuestionHeading" data-aos="fade-right">
        <p
          className="mb-4 FAQ"
        >
          FAQ
        </p>
        <h4>
          Have any questions?
        </h4>

      </div>
      <div className="Questions mb-5" >

        <Accordion className="AccordionHolder" data-aos="fade-up" data-aos-delay="1000">
          <Accordion.Item className="AccordionItem"  eventKey="0">
            <Accordion.Header className="AccHeader">How can i help you ?</Accordion.Header>
            <Accordion.Body className="AccBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" eventKey="1">
            <Accordion.Header className="AccHeader">how you can contact me ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" eventKey="3">
            <Accordion.Header className="AccHeader" >how can i choose the template ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div data-aos="fade-up" data-aos-delay="1500" className="question-mark">
          <img src={questionMark} alt="questionMark" className="qusetionImg" />
        </div>

      </div> {/* /questions */}

      <div className="getInTouch" id="contactMe">

        <div className="leftInfo">

          <div className="column1 pt-5">
            <h2 data-aos="fade-up"> let's get in touch</h2>
            <p data-aos="fade-up" data-aos-delay="300" className="mt-4">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
          </div> {/* /cloumn1 */}

          <div className="column1 ">
            <h3 data-aos="fade-up"  data-aos-delay="350">livig in:</h3>
            <p data-aos="fade-up" data-aos-delay="400">45 Alexandria, Egypt </p>
          </div>{/* /cloumn1 */}

          <div className="column1 ">
            <h3 data-aos="fade-up" data-aos-delay="450">call:</h3>
            <p data-aos="fade-up" data-aos-delay="500">+20 100 00 797 61</p>
          </div>{/* /cloumn1 */}

          <div className="icons">
            <Sheet className="sheet"   data-aos="fade-up" data-aos-delay="550" >
              <Tooltip title="facebook" arrow placement="bottom">
                <a href="https://www.facebook.com/tasn13eem/">
                  <BsFacebook id="ICON" />
                </a>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet"   data-aos="fade-up" data-aos-delay="600">
              <Tooltip title="instagram" arrow placement="bottom">
                <div>
                  <BsInstagram id="ICON" />
                </div>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet" data-aos="fade-up" data-aos-delay="650">
              <Tooltip title="LinkedIn" arrow placement="bottom">
                <a href="https://www.linkedin.com/in/tasneem-youssef-770708278/">
                  <SiLinkedin id="ICON"  />
                </a>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet" data-aos="fade-up" data-aos-delay="700">
              <Tooltip title="gitHub" arrow placement="bottom">
                <a  href="https://github.com/Nemo97-76">
                  <BsGithub id="ICON" />
                </a>
              </Tooltip>
            </Sheet>
          </div>{/* /icons */}
        </div>{/* /left Info */}

        <div className="rightform ">
          <form id="Form">
<div data-aos="fade-up">
<label className="mt-5">what's your Name</label><br></br>
<input type="text" required className="nameInput" />
</div>

<div  data-aos="fade-up" data-aos-delay="750">
            <label className="mt-4">your email address</label><br></br>
            <input type="email" required className="nameInput" />
</div>
      <div  data-aos="fade-up" data-aos-delay="800">
            <label className="mt-4">how can i help you</label><br></br>
            <textarea maxLength={200} required></textarea>
</div>
            <Button
             data-aos="fade-up"
             data-aos-delay="850"
              className="mt-4 sendBTN"
              type="reset"
              onClick={handleClick}>
              send
            </Button>
            <Snackbar
              className="snackBar"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={open}
              onClose={handleClose}
              autoHideDuration={4000}
              animationDuration={animationDuration}
              size="sm"
              sx={{
                ...(open && {
                  animation: `${inAnimation} ${animationDuration}ms forwards`,
                }),
                ...(!open && {
                  animation: `${outAnimation} ${animationDuration}ms forwards`,
                }),
              }}
            >
              {<BsExclamationLg size={30} color="#e57734" />}project details has been sent ,i'll text you back soon <br></br>
              <Button className="modalBTN" onClick={handleClose}>
                <IoMdClose size={25} color="#000000" />
              </Button>
            </Snackbar>
          </form>
        </div>{/* /rightform */}
      </div>{/* /getInTouch */}

      <div className="footer text-center "  >
        <p>copy © {new Date().getFullYear()} <span className="text">Tasneem Youssef</span>. All rights reserved.</p>
      </div>
   </div>
  );
};
export default Home;
