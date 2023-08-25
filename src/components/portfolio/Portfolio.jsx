import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])
  const listItems = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "featured": setData(featuredPortfolio);
      break;
      case "web": setData(webPortfolio);
      break;
      case "mobile": setData(mobilePortfolio);
      break;
      default: setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {listItems.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(item=>(
        <div className="item">
          <img
            src= {item.img}
            alt=""
          />
          <h3>{item.title}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}
