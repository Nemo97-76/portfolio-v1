import React, { useEffect } from "react";
import { InsertLink } from "@mui/icons-material";
import Tooltip from "@mui/joy/Tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import voyagley from "./images/voyagley.jpeg";
import crochetCounter from "./images/crochetCounter.jpeg";
import TaskManger from "./images/taskManger.jpeg";
import Linketree from "./images/LinkTree.jpeg";

const PROJECTS = [
  {
    image: voyagley,
    title: "travel site",
    href: "https://travel-site.netlify.app/",
  },
  {
    image: crochetCounter,
    title: "crochet counter",
    href: "https://crochet-count-helper.netlify.app/",
  },
  {
    image: TaskManger,
    title: "task manager",
    href: "https://github.com/Nemo97-76/task-manger-frontend",
  },
  {
    image: Linketree,
    title: "link tree",
    href: "https://nemolinktree.netlify.app/",
  },
];

const All = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="All">
          <div className="RowOne row ">
            {PROJECTS.map((project) => (
              <div
                className=" img"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="15000"
              >
                <img alt={project.title} src={project.image} />
                <a href={project.href} rel="noreferrer" target="_blank">
                  <Tooltip title="click to preview">
                    <div>
                      <InsertLink className="icon" /> <br />
                      <span style={{ fontSize: "1rem" }}>{project.title}</span>
                    </div>
                  </Tooltip>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default All;
