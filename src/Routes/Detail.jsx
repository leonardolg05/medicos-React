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
      <h1>Detail Dentist id {doctor.id} </h1>
      <h4>{doctor.name}</h4>
        <div><label>user:</label> <input value={doctor.username}/></div>
        <div><label>email</label> <input value={doctor.email}/></div>
        <div><label>phone </label> <input value={doctor.phone}/></div>
        <div><label>website : </label><input value={doctor.website}/></div>
    </>
  )
}

export default Detail