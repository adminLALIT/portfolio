import React from "react";
import "./works.scss";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <DeveloperModeIcon className="icon" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                  consequuntur atque in neque iste minima quod, autem,
                  accusantium eveniet doloremque{" "}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-ix8gShrwL5DoeCK9zIsjnhDyUrEn4j2zQ&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}
