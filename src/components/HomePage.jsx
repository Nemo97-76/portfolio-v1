import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Grid,
  Card,
  AspectRatio,
  Sheet,
  Divider,
} from "@mui/joy";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css";
import Typer from "./typer.jsx";
import Speak from "./Speak.jsx";
import Navigator from "./navigator.jsx";
import resume from "../tasneem youssef CV.pdf";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle.jsx";
import { keyframes } from "@mui/system";
import "aos/dist/aos.css";
import BackToTop from "./BackToTop.jsx";

const HomePage = () => {
  //TODO: fix some styles
  //TODO: divide the page into components
  //TODO: convert all inline styles to external css each component in its own file
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box
      className="App"
      data-theme={isDark ? "dark" : "light"}
      sx={{
        backgroundColor: "var(--background-color)",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      <Box className="themeToggle">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </Box>
      {/* Hero Section */}
      <Sheet id="home" className="home">

        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography className="homeTitle" level="h4" data-aos="fade-down">
              HI, I'M TASNEEM YOUSSEF
            </Typography>
            <Typography
              level="h1"
              sx={{
                fontSize: { xs: "3rem", md: "5rem" },
                color: "white",
                fontWeight: "xl",
              }}
              data-aos="zoom-in"
            >
              <Typer />
            </Typography>
            <Typography
              level="h4"
              sx={{ color: "rgba(255,255,255,0.8)", fontWeight: "md" }}
              data-aos="fade-up"
            >
              Based in Alexandria, Egypt.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 4 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Button
                size="lg"
                variant="solid"
                sx={{
                  bgcolor: "#e57734",
                  "&:hover": { bgcolor: "#cc6622" },
                  borderRadius: "30px",
                  px: 4,
                }}
                component="a"
                href="#portfolio"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                  },
                  borderRadius: "30px",
                  px: 4,
                }}
                component="a"
                href="#contactMe"
              >
                Hire Me
              </Button>

            </Stack>
            <div className="ArrowDownContainer">
              <ArrowDownwardRoundedIcon
                className="ArrowDown"
              />
            </div>
          </Stack>
        </Container>



      </Sheet>
      <BackToTop />
      {/* About Section */}
      <Box id="AboutMe" sx={{ py: 10 }}>
        <Container>
          <Grid className="HideOverFlow" container spacing={4} alignItems="center">
            <Grid xs={12} md={6} data-aos="fade-right">
              <Typography className="sectionTitle" level="body-sm">
                ABOUT ME
              </Typography>
              <Typography
                level="h2"
                sx={{ mb: 2, color: "var(--primary-text-color)" }}
              >
                Know Me More
                <div className="subtitleLine"></div>
              </Typography>
              <Typography level="body-lg" sx={{ mb: 3, color: "gray" }}>
                I'm a Junior developer with a passion for web design. I enjoy
                developing simple, clean and slick websites that provide real
                value to the end user. Delivering work within time and budget
                which meets client’s requirements is my aim.
              </Typography>
              <Stack spacing={1}>
                <Typography>
                  <b>Name:</b> Tasneem Youssef
                </Typography>
                <Typography>
                  <b>Email:</b> tasneemyoussef61@gmail.com
                </Typography>
                <Typography>
                  <b>From:</b> Alexandria, Egypt
                </Typography>
              </Stack>
              <Button
                sx={{
                  mt: 4,
                  bgcolor: "#e57734",
                  "&:hover": { bgcolor: "#cc6622" },
                  borderRadius: "30px",
                }}
                startDecorator={<DownloadIcon />}
                component="a"
                href={resume}
                download="Tasneem_Youssef_CV.pdf"
              >
                Download CV
              </Button>
            </Grid>
            <Grid xs={12} md={6} data-aos="fade-left">
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="Number">
                  <Typography level="h1" sx={{ color: "white" }}>
                    2
                  </Typography>
                  <Typography level="body-sm" sx={{ color: "white" }}>
                    Years of Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Services */}
      <Sheet id="services" sx={{ py: 10, bgcolor: "var(--foreground-color)" }}>
        <Container>
          <Stack alignItems="center" sx={{ mb: 6 }} data-aos="fade-up">
            <Typography className="sectionTitle" level="body-sm">
              SERVICES
            </Typography>
            <Typography className="sectionSubtitle" level="h2">
              What I Do
            </Typography>
            <div className="subtitleLine"></div>
          </Stack>
          <Grid container spacing={3}>
            {[
              {
                title: "Web Design",
                desc: "Creating visually appealing and user-friendly web designs.",
              },
              {
                title: "Frontend Development",
                desc: "Building responsive and performant web applications using React.js.",
              },
              {
                title: "UI/UX Design",
                desc: "Designing intuitive interfaces for a great user experience.",
              },
              {
                title: "Responsive Design",
                desc: "Ensuring websites look great on all devices and screen sizes.",
              },
            ].map((service, index) => (
              <Grid
                xs={12}
                sm={6}
                md={3}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card
                  variant="soft"
                  sx={{
                    height: "100%",
                    p: 3,
                    border: "none",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "md",
                    },
                  }}
                >
                  <Typography level="h4" sx={{ mb: 1, color: "#e57734" }}>
                    {service.title}
                  </Typography>
                  <Typography level="body-sm" sx={{ color: "gray" }}>
                    {service.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Sheet>

      {/* Projects Section */}
      <Box id="portfolio" sx={{ py: 10 }}>
        <Container>
          <Stack alignItems="center" sx={{ mb: 6 }} data-aos="fade-up">
            <Typography className="sectionTitle" level="body-sm">
              PORTFOLIO
            </Typography>
            <Typography className="sectionSubtitle" level="h2">
              Featured Projects
            </Typography>
            <div className="subtitleLine"></div>
          </Stack>
          <Navigator />
        </Container>
      </Box>

      {/* Testimonials */}
      <Speak />

      {/* Contact Section */}
      <Box id="contact"  sx={{ py: 10 }}>
        <Container>
          <Grid  className="HideOverFlow" container spacing={4}>
            <Grid  id="contactMe" xs={12} md={5} data-aos="fade-right">
              <Typography
                level="h2"
                sx={{ mb: 2, color: "var(--primary-text-color)" }}
              >
                Let's get in touch
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4, color: "gray" }}>
                I enjoy discussing new projects and design challenges. Please
                share as much info as possible so we can get the most out of our
                first catch-up.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography level="h4" className="sectionSubtitle">
                    Living in:
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    45 Alexandria, Egypt
                  </Typography>
                </Box>
                <Box>
                  <Typography level="h4" className="sectionSubtitle">
                    Call:
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    +20 100 00 797 61
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <div
                  variant="soft"
                  component="a"
                  href="https://github.com/Nemo97-76"
                >
                  <GitHubIcon />
                </div>
                <div
                  variant="soft"
                  component="a"
                  href="https://www.linkedin.com/in/tasneem-youssef-770708278/"
                >
                  <LinkedInIcon />
                </div>
                <div
                  variant="soft"
                  component="a"
                  href="https://www.facebook.com/tasn13eem/"
                >
                  <FacebookIcon />
                </div>
                <div
                  variant="soft"
                  component="a"
                  href="https://www.instagram.com/"
                >
                  <InstagramIcon />
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={7} data-aos="fade-left">
              <Card variant="soft" sx={{ p: 4, border: "none" }}>
                <Typography level="h3" sx={{ mb: 3 }}>
                  Send a Message
                </Typography>
                <Stack spacing={2}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <Typography level="body-sm">What's your Name?</Typography>
                      <Divider sx={{ mb: 1 }} />
                      <input
                        type="text"
                        className="nameInput"
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid gray",
                          outline: "none",
                          padding: "8px 0",
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <Typography level="body-sm">
                        Your Email Address?
                      </Typography>
                      <Divider sx={{ mb: 1 }} />
                      <input
                        type="email"
                        className="nameInput"
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid gray",
                          outline: "none",
                          padding: "8px 0",
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box>
                    <Typography level="body-sm">How can I help you?</Typography>
                    <Divider sx={{ mb: 1 }} />
                    <textarea
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid gray",
                        outline: "none",
                        padding: "8px 0",
                        minHeight: "100px",
                      }}
                    ></textarea>
                  </Box>
                  <Button
                    size="lg"
                    sx={{
                      bgcolor: "#e57734",
                      "&:hover": { bgcolor: "#cc6622" },
                      borderRadius: "30px",
                      alignSelf: "flex-start",
                      px: 6,
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
            40% {transform: translateY(-10px) translateX(-50%);}
            60% {transform: translateY(-5px) translateX(-50%);}
          }
          .nameInput:focus {
            border-bottom: 2px solid #e57734 !important;
          }
        `}
      </style>
    </Box>
  );
};

export default HomePage;
