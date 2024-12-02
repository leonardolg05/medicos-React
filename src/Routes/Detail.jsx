import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Detail = () => {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = ` https://jsonplaceholder.typicode.com/users/${id}`;
 

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h4>{doctor.name}</h4>
        <h4>user:{doctor.username}</h4>
        <h4>id : {doctor.id}</h4>
        <h4>email : {doctor.email}</h4>
        <h4>phone : {doctor.phone}</h4>
        <h4>website : {doctor.website}</h4>
    </>
  )
}

export default Detail