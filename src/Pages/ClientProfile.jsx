import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


const Clientprofile = () =>{
    const [clientProfile,setClientProfile] = useState([]);

    useEffect(()=>{
        const fetchAllClientProfile = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/Client/:name");
                setClient(res.data);
            }catch(err){
                console.log(err)
            }
        };
        fetchAllClientProfile();
    },[]);

    console.log(clientProfile);

return (
    <div>
        <div className="Clientprofile">
            {client.map((client)=>(
                <div key={client.GID} className="clientprofile">
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
        </div>
    </div>);};

export default Client;