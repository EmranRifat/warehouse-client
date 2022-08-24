import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../image/banner/fruits.png";
import banner2 from "../../image/banner/mixed.png";
import banner3 from "../../image/banner/bull.png";

const Banner = () => {
  return (
    <div>
      <Carousel className="banner">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <div className="overlay"></div>

          <div className=" banner-text mb-5">
            <p>
              <small className="text-black fw-bold">2022 COLLECTION​</small>
            </p>
            <h1>All You Need Is Right Here​</h1>
            <p className="text-carousal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a className="button1" target="_blank" href="{}">
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <div className="overlay"></div>

          <div className="mb-5 banner-text">
            <h1>All You Need Is Right Here </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>

            <a className="button1" target="_blank" to>
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <div className="overlay"></div>

          <div className="mb-5 banner-text">
            <h1>All You Need Is Right Here​</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a
              className="button1"
              target="blank"
              href="https://www.linkedin.com/in/emran-hasan-rifat-443454168/"
            >
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
