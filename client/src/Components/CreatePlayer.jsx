import React, { useEffect, useState } from 'react'
import Nav1 from './Nav1'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePlayer() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ name: "", position: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  useEffect(() => {
    if (formData.name.length < 3 && formData.name !== "") {
      setErrorMessage("Name must be at least 3 characters");
      setIsButtonDisabled(true);
    } else {
      setErrorMessage("");
      setIsButtonDisabled(false);
    }
  }, [formData.name]);



  const formSubmit = (e) => {

    e.preventDefault();

    axios.post('http://localhost:8000/api/players', formData)
      .then(res => {
        console.log(res);
        navigate('/players/list');
      })
      .catch(err => {
        console.log(err);
      })




  }


  return (

    <div className="container">

      <Nav1 />

      <form onSubmit={formSubmit}>

        <h3>Add Player</h3>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" placeholder='Enter Player Name' onChange={e => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
        {errorMessage && <p style={{ color: "red" }}>* {errorMessage}</p>}
        <label htmlFor="position"></label>
        <input type="text" name="position" id="position" placeholder='Enter Player Position' onChange={e => setFormData((prev) => ({ ...prev, position: e.target.value }))} />
        <button type="submit" disabled={isButtonDisabled || formData.name === ""} style={{ backgroundColor: isButtonDisabled || formData.name === "" ? "#cccccc" : "#4CAF50" }}>Add</button>

      </form>

    </div>
  )
}

export default CreatePlayer