import React from "react";
import Carousel from "react-material-ui-carousel";
import { Divider } from "@mui/material";
import { products } from "./productdata";
import "./slide.css";

const Slide = ({ title }) => {
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>
      
      <Divider />
      <Carousel
        className="carasousel"
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        autoPlaySpeed={4000}
      >
        {products.map((e, index) => (
          <div className="products_items" key={e.id || index}>
            <div className="product_img">
              <img src={e.url} alt="productitem" />
            </div>
            <p className="products_name">{e.title.shortTitle}</p>
            <p className="products_offer">{e.discount}</p>
            <p className="products_explore">{e.tagline}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
