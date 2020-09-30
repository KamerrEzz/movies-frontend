import React from "react";
import PropTypes from "prop-types";
import "../assets/style/components/CarouselItem.scss";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src="../assets/play-icon.png"
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src="../assets/plus-icon.png"
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};
export default CarouselItem;
