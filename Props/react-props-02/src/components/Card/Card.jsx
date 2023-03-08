import React from "react";
import './Card.css'
const Card = ({movie}) => {
    console.log(movie.title)
  return (
    <div className="card-container">
      <div className="details-container">
        <div className="titles-container">
          <div className="poster">
            <img src={movie.poster} alt="poster-img" />
          </div>
          <div className="titles">
            <h3 className="title">{movie.title}</h3>
            <p className="sub-title">{movie.subtitle}</p>
            <div className="rating-genre">
              <span>{movie.duration} min</span>
              <span>{movie.genre}</span>
            </div>
          </div>
        </div>
        <div className="desc-container">
          <span>
             dolor sit amet consectetur, adipisicing elit. Omnis
            tempore voluptatibus, reprehenderit perspiciatis molestiae soluta
            fugiat nostrum laborum ab iste porro sunt voluptatum similique
            architecto quisquam unde quaerat maxime nam?
          </span>
        </div>
        <div className="icons-container">

        </div>
      </div>
      <div className="img-container">
        <img src={movie.img_link} alt="" />
      </div>
    </div>
  );
};

export default Card;
