import React from "react";
import "./portfoliolist.scss";

const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={`portfoliolist ${active && "active"}`}
      onClick={()=>setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
