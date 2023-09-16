import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Client from "./Client";

const Update = () => {
const [client, setClient] = useState({
    GID: "",
    Name: "",
});
const [error,setError] = useState(false)

const location = useLocation();
const navigate = useNavigate();

const clientGID = location.pathname.split("/")[2];

const handleChange = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleClick = async (e) => {
    e.preventDefault();

    try {
    await axios.put(`http://localhost:8800/Client/${clientGID}`, client);
    navigate("/");
    } catch (err) {
    console.log(err);
    setError(true);
    }
};

return (
    <div className="form">
    <h1>Update the Client</h1>
    <input
        type="text"
        placeholder="GID"
        name="GID"
        onChange={handleChange}
    />
    <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
    />
    <button className='UpdateButton' onClick={handleClick}>Update</button>
    {error && "Something went wrong!"}
    <Link to="/">See all clients</Link>
    </div>
);
};

export default Update;