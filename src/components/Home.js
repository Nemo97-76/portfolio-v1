import React from "react";
import Typer from "./typer.js";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import BackToTop from "./BackToTop.js";
import "animate.css";
import Stack from '@mui/joy/Stack';
import { LinearProgress } from '@mui/joy';
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
import Speak from './Speak.js'
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
  const [open, setOpen] = React.useState(false);

  const animationDuration = 600;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="home" x id="home">
        <h2
          className="InteroHeading"
        >
          <span className="welcomeMessage" >
            Hi,I'm a Junior &nbsp;
          </span>
          <br></br>
          <Typer />
          <br></br>
          <span className="welcomeMessage">
            From Alexandria,Egypt
          </span>
          <br></br>
          <Button
            className="ResumeButton mt-5"
          >
            Resume
          </Button>
          <br></br>
          <Nav.Link href="#Resume">
            <ArrowDownwardRoundedIcon
              className="Arrow"
            />
          </Nav.Link>
        </h2>
        <BackToTop />
      </div>

      <div

        className="AboutMe"
        id="AboutMe"
      >
        <p
          className="mb-4 AboutMeTitle"
        >
          About Me
        </p>
        <h3 className="mb-4 AboutMeHeading">
          Know Me More
        </h3>
        <div
          className="detailsRow"
        >
          <div className="content" style={{ width: "45%" }}>
            <span id="title" className="BioHeading"/*  style={{ fontSize: "40px" }} */>
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
            className="anime"
          >
            <div
              className="circle"
            >
              <div
                className="pulsate-fwd"
              >
                26
              </div>
            </div>{" "}
            {/* /circle */}
            <span
              className="animate__animated animate__rubberBand"
            >
              years <b>old</b>
            </span>
          </div>
          {/* /anime */}
        </div>
        <div
          className="Data d-flex justify-content-around mx-auto container mt-5 wrap"
        >
          <div>
            <p>Name:</p>
            <p>Tasneem Youssef</p>
          </div>
          <div
          >
            <p>Email:</p>
            <p
              style={{
                textDecoration: "underline",
                textTransform: "none",
                flexWrap: "wrap",

              }}
            >
              tasneemyoussef61@gmail.com
            </p>
          </div>
          <div>
            <p>Date of birth:</p>
            <p>12 December,1997</p>
          </div>

          <div>
            <p>From:</p>
            <p>Alexandria,Egypt</p>
          </div>
        </div>
        {/* /data */}
      </div>
      {/* /AboutMe */}

      <div
        id='Resume'
        className="Resume bg-light"
      >
        <p
          className="mb-4 ResumeTitle"
        >
          Resume
        </p>
        <h3 className="BioHeading mb-4">
          A summary of my Resume
        </h3>
        <div
          className="ResumeColumns"
        >
          <div
            className="columnOne"
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
            <h5 className="myskills mt-2">My skills</h5>
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
            </div>
          </div>

          <div
            className="columnTwo"
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
                <span>Alexandria unversity/2018-2022</span> <br></br>
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
            <div>
              <div className="bardetails">
                <h5>web design</h5>
                <h5>95%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={95} />
              </Stack>

            </div>


            <div>
              <div className="bardetails">
                <h5>HTML/CSS</h5>
                <h5>95%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={95} />
              </Stack>

            </div>

            <div>
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
            <div>
              <div className="bardetails">
                <h5>javaScript</h5>
                <h5>80%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={80} />
              </Stack>

            </div>

            <div >
              <div className="bardetails">
                <h5>Reactjs.</h5>
                <h5>85%</h5>
              </div>
              <Stack spacing={2} >
                <LinearProgress className="linear" determinate value={85} />
              </Stack>

            </div>

            <div >
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
          <DownloadButton fileurl="http://localhost:3000/src/tasneem-youssef-Resume.pdf" filename="tasneem Youssef Resume.pdf" />
        </div>
      </div>

      <div className="portfolio"  >
        <p
          id="portfolio"
          className="mt-4"
        >
          portfolio
        </p>
        <h3 className="mt-4">
          some of my recent projects
        </h3>
        <Navigator />
      </div>


      <div className="Hire mb-5">
        <div>
          <h2>Interested in working with me?<br></br>
            <Button
              className="animate__animated HiringBTN animate__rubberBand mt-5 bg-transparent text-white HireMe"
            >
              Hire me
            </Button>
          </h2>
        </div>
      </div>

      <Speak />

      <div className="Questions mt-5 mb-5">
        <Accordion className="AccordionHolder" >
          <p
            className="mb-4 FAQ"
          >
            FAQ
          </p>
          <h4 className="mb-4">
            Have any questions?
          </h4>
          <Accordion.Item style={{ fontSize: "0.7rem" }} eventKey="0">
            <Accordion.Header style={{ fontSize: "1rem" }}>How can i help you ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={{ fontSize: "0.7rem" }} eventKey="1">
            <Accordion.Header style={{ fontSize: "1rem" }}>how you can contact me ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item style={{ fontSize: "0.7rem" }} eventKey="3">
            <Accordion.Header style={{ fontSize: "1rem" }}>how can i choose the template ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="question-mark"></div>
      </div>
      <div className="getInTouch" id="contactMe">
        <div className="leftInfo">
          <div className="column1 pt-5">
            <h2>let's get in touch</h2>
            <p className="mt-4">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
          </div>
          <div className="column1 ">
            <h3>livig in:</h3>
            <p>45 Alexandria, Egypt </p>
          </div>

          <div className="column1 ">
            <h3>call:</h3>
            <p>+20 100 00 797 61</p>
          </div>

          <div className="icons">

            <Sheet className="sheet" >
              <Tooltip title="facebook" arrow placement="bottom">
                <a href="https://www.facebook.com/tasn13eem/">
                  <BsFacebook id="ICON" />
                </a>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="instagram" arrow placement="bottom">
                <div>
                  <BsInstagram id="ICON" />
                </div>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="LinkedIn" arrow placement="bottom">
                <div>
                  <SiLinkedin id="ICON" />
                </div>
              </Tooltip>
            </Sheet>

            <Sheet className="sheet">
              <Tooltip title="gitHub" arrow placement="bottom">
                <a href="https://github.com/Nemo97-76">
                  <BsGithub id="ICON" />
                </a>
              </Tooltip>
            </Sheet>
          </div>
        </div>

        <div className="rightform ">
          <form id="Form">
            <label className="mt-5">what's your Name</label><br></br>
            <input type="text" required className="nameInput" />

            <label className="mt-4">your email address</label><br></br>
            <input type="email" required className="nameInput" />

            <label className="mt-4">how can i help you</label><br></br>
            <textarea maxLength={200} required></textarea>

            <Button
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
        </div>
      </div>
      <div className="footer text-center " >
        <p>copy © {new Date().getFullYear()} <span className="text">Tasneem Youssef</span>. All rights reserved.</p>
      </div>

    </>
  );
};
export default Home;
