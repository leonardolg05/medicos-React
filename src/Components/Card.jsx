import React from "react";
import {ContextProvider, useDoctorState} from "./Context/global.context";
import { Link } from "react-router-dom";
import '../styles/Card.module.css'

const Card = ({doctor}) => {
  const {dispatch} = useDoctorState();
  const addFav = ()=>{
    dispatch({ type: "ADD_CART", payload: {doctor} })
  }

  return (
    <div >
      <div className="cardContainer">
      <Link to={'/detail/' + doctor.id}>
        <img src='../utils/images/doctor.jpg' alt="doctor" />
        <h4>name: {doctor.name}</h4>
        <h4>user:{doctor.username}</h4>
        <h4>id : {doctor.id}</h4>
        </Link>
      </div>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
