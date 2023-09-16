import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


const Client = () =>{
    const [client,setClient] = useState([]);

    useEffect(()=>{
        const fetchAllClient = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/Client");
                setClient(res.data);
            }catch(err){
                console.log(err)
            }
        };
        fetchAllClient();
    },[]);

    console.log(client);

    const handleDelete = async (GID)=>{
        try{
            await axios.delete(`http://localhost:8800/Client/${GID}`)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    } 


    return (
    <div>
        <div className="Client">
            {client.map((client)=>(
                <div key={client.GID} className="client">
                    <h2>{client.GID}</h2>
                    <h1>{client.Name}</h1>
                    <button className='Delete' onClick={()=>handleDelete(client.GID)}>Delete</button>
                    <button className="Update">
                        <Link
                        to={`/update/${client.GID}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                        >
                        Update
                        </Link>
                    </button>
                </div>
            ))}
            <button className="addClient">
                <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add new client
                </Link>
            </button>
        </div>
    </div>);};

export default Client;