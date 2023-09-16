import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

const Add = () =>{
    const [client,setClient]=useState({
        company:"",
        sector:"",
        email:"",
        location:"",
    });

    const navigate = useNavigate();

    const handleChange= (e) => {
        setClient((prev)=>({...prev,[e.target.name]:e.target.value}));
    };


const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/Client", client);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
}


return (
        <div className='Form'> 
            <h1>Add New Client</h1>
            <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
            <input type="text" placeholder='Sector' name='sector' onChange={handleChange}/>
            <input type="text" placeholder='Email' name='email' onChange={handleChange}/>
            <input type="text" placeholder='Location' name='location' onChange={handleChange}/>

            <button className="addButton" onClick={handleClick}>Add</button>
                <Link to="/">Preview all clients</Link> 
            </div>
        );
};


export default Add