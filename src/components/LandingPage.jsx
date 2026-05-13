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
  IconButton,
  Sheet,
  Divider,
} from "@mui/joy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import resume from "../tasneem youssef Resume.pdf";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle.jsx";

const LandingPage = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

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
      <Box
        sx={{
          position: "fixed",
          right: 0,
          top: "50%",
          zIndex: 100,
          transform: "translateY(-50%)",
          bgcolor: "rgba(1, 117, 122, 0.7)",
          p: 1,
          borderRadius: "12px 0 0 12px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </Box>

      {/* Hero Section */}
      <Sheet
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/src/work-from-home-work-living-room_988095-479.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
        }}
      >
        <Container>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              level="h4"
              sx={{ color: "#e57734", fontWeight: "bold", letterSpacing: "2px" }}
              data-aos="fade-down"
            >
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
            <Stack direction="row" spacing={2} sx={{ mt: 4 }} data-aos="fade-up" data-aos-delay="200">
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
                href="#projects"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.1)", borderColor: "white" },
                  borderRadius: "30px",
                  px: 4,
                }}
                component="a"
                href="#contact"
              >
                Hire Me
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
          }}
        >
          <IconButton
            component="a"
            href="#about"
            variant="plain"
            sx={{ color: "white" }}
          >
            <ArrowForwardIcon sx={{ transform: "rotate(90deg)", fontSize: "2rem" }} />
          </IconButton>
        </Box>
      </Sheet>

      {/* About Section */}
      <Box id="about" sx={{ py: 10 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6} data-aos="fade-right">
              <Typography level="body-sm" sx={{ color: "#e57734", fontWeight: "bold" }}>
                ABOUT ME
              </Typography>
              <Typography level="h2" sx={{ mb: 2, color: "var(--primary-text-color)" }}>
                Know Me More
              </Typography>
              <Typography level="body-lg" sx={{ mb: 3, color: "gray" }}>
                I'm a Junior developer with a passion for web design. I enjoy
                developing simple, clean and slick websites that provide real
                value to the end user. Delivering work within time and budget
                which meets client’s requirements is my aim.
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ color: "var(--primary-text-color)" }}>
                  <b>Name:</b> Tasneem Youssef
                </Typography>
                <Typography sx={{ color: "var(--primary-text-color)" }}>
                  <b>Email:</b> tasneemyoussef61@gmail.com
                </Typography>
                <Typography sx={{ color: "var(--primary-text-color)" }}>
                  <b>From:</b> Alexandria, Egypt
                </Typography>
              </Stack>
              <Button
                sx={{ mt: 4, bgcolor: "#e57734", "&:hover": { bgcolor: "#cc6622" }, borderRadius: "30px" }}
                startDecorator={<DownloadIcon />}
                component="a"
                href={resume}
                download="Tasneem_Youssef_Resume.pdf"
              >
                Download Resume
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
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    bgcolor: "#e57734",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    boxShadow: "xl",
                  }}
                >
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

      {/* Services/Skills Section */}
      <Sheet sx={{ py: 10, bgcolor: "var(--foreground-color)" }}>
        <Container>
          <Stack alignItems="center" sx={{ mb: 6 }} data-aos="fade-up">
            <Typography level="body-sm" sx={{ color: "#e57734", fontWeight: "bold" }}>
              SERVICES
            </Typography>
            <Typography level="h2" sx={{ color: "var(--primary-text-color)" }}>
              What I Do
            </Typography>
            <Divider sx={{ width: 60, mt: 1, bgcolor: "#e57734", height: 3 }} />
          </Stack>
          <Grid container spacing={3}>
            {[
              { title: "Web Design", desc: "Creating visually appealing and user-friendly web designs." },
              { title: "Frontend Development", desc: "Building responsive and performant web applications using React.js." },
              { title: "UI/UX Design", desc: "Designing intuitive interfaces for a great user experience." },
              { title: "Responsive Design", desc: "Ensuring websites look great on all devices and screen sizes." },
            ].map((service, index) => (
              <Grid xs={12} sm={6} md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card variant="soft" sx={{ height: "100%", p: 3, border: "none", transition: "0.3s", "&:hover": { transform: "translateY(-10px)", boxShadow: "md" } }}>
                  <Typography level="h4" sx={{ mb: 1, color: "#e57734" }}>{service.title}</Typography>
                  <Typography level="body-sm" sx={{ color: "gray" }}>{service.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Sheet>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 10 }}>
        <Container>
          <Stack alignItems="center" sx={{ mb: 6 }} data-aos="fade-up">
            <Typography level="body-sm" sx={{ color: "#e57734", fontWeight: "bold" }}>
              PORTFOLIO
            </Typography>
            <Typography level="h2" sx={{ color: "var(--primary-text-color)" }}>
              Featured Projects
            </Typography>
            <Divider sx={{ width: 60, mt: 1, bgcolor: "#e57734", height: 3 }} />
          </Stack>
          <Navigator />
        </Container>
      </Box>

      {/* Testimonials */}
      <Sheet sx={{ py: 10, bgcolor: "var(--foreground-color)" }}>
        <Container>
          <Speak />
        </Container>
      </Sheet>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid xs={12} md={5} data-aos="fade-right">
              <Typography level="h2" sx={{ mb: 2, color: "var(--primary-text-color)" }}>
                Let's get in touch
              </Typography>
              <Typography level="body-lg" sx={{ mb: 4, color: "gray" }}>
                I enjoy discussing new projects and design challenges. Please
                share as much info as possible so we can get the most out of our
                first catch-up.
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography level="h4" sx={{ color: "var(--primary-text-color)" }}>Living in:</Typography>
                  <Typography sx={{ color: "gray" }}>45 Alexandria, Egypt</Typography>
                </Box>
                <Box>
                  <Typography level="h4" sx={{ color: "var(--primary-text-color)" }}>Call:</Typography>
                  <Typography sx={{ color: "gray" }}>+20 100 00 797 61</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton variant="soft" component="a" href="https://github.com/Nemo97-76"><GitHubIcon /></IconButton>
                <IconButton variant="soft" component="a" href="https://www.linkedin.com/in/tasneem-youssef-770708278/"><LinkedInIcon /></IconButton>
                <IconButton variant="soft" component="a" href="https://www.facebook.com/tasn13eem/"><FacebookIcon /></IconButton>
                <IconButton variant="soft" component="a" href="https://www.instagram.com/"><InstagramIcon /></IconButton>
              </Stack>
            </Grid>
            <Grid xs={12} md={7} data-aos="fade-left">
              <Card variant="soft" sx={{ p: 4, border: "none" }}>
                <Typography level="h3" sx={{ mb: 3 }}>Send a Message</Typography>
                <Stack spacing={2}>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <Typography level="body-sm">What's your Name?</Typography>
                      <Divider sx={{ mb: 1 }} />
                      <input type="text" className="nameInput" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid gray", outline: "none", padding: "8px 0" }} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <Typography level="body-sm">Your Email Address?</Typography>
                      <Divider sx={{ mb: 1 }} />
                      <input type="email" className="nameInput" style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid gray", outline: "none", padding: "8px 0" }} />
                    </Grid>
                  </Grid>
                  <Box>
                    <Typography level="body-sm">How can I help you?</Typography>
                    <Divider sx={{ mb: 1 }} />
                    <textarea style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid gray", outline: "none", padding: "8px 0", minHeight: "100px" }}></textarea>
                  </Box>
                  <Button
                    size="lg"
                    sx={{ bgcolor: "#e57734", "&:hover": { bgcolor: "#cc6622" }, borderRadius: "30px", alignSelf: "flex-start", px: 6 }}
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
      <Box
        sx={{
          py: 4,
          bgcolor: "#3e2922",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography level="body-sm" sx={{ color: "rgba(255,255,255,0.6)" }}>
          Copyright © {new Date().getFullYear()}{" "}
          <Typography sx={{ color: "#f6c0a6", fontWeight: "bold" }}>Tasneem Youssef</Typography>. All
          rights reserved.
        </Typography>
      </Box>

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

export default LandingPage;
