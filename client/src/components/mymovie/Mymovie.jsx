import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import "./mymovie.css";
// console.log(data.genres);

function Mymovie(props) {
  // console.log("titbfffffffffffffffffffffffffffffdsle", props);
  return (
    <div className="carts">
      <ul className="list-style">
        <li>{props.item.title}</li>
        <li>
          <img className="my-img" src={props.item.posterUrl} alt="" />
        </li>
        <li>{props.item.year}</li>
        <li>{props.item.genres}</li>
        <li>{props.item.director}</li>
        <li>Actors: {props.item.actors}</li>
        <li>Plot: {props.item.plot}</li>
      </ul>
    </div>
  );
}

export default Mymovie;
