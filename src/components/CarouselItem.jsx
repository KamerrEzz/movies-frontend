import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/style/components/CarouselItem.scss";
import PlayIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from '../assets/static/remove-icon.png'
const CarouselItem = (props) => {
  const {id, cover, title, year, contentRating, duration ,isList} = props;

  const hanlderSetFavorite = () => {
    props.setFavorite({id, cover, title, year, contentRating, duration ,isList});
  };

  const handlerDeleteFavorite = () => {
    props.deleteFavorite(id)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={PlayIcon}
            alt="Play Icon"
          />
          {isList 
          ? 
          <img
            className="carousel-item__details--img"
            src={removeIcon}
            alt="Plus Icon"
            onClick={() => handlerDeleteFavorite(id)}
          />
          :
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={hanlderSetFavorite}
          />
          }
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};
//export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
