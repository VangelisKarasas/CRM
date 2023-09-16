import React from 'react';
import {NavBarData} from './NavBarData.js';

function Navbar(){
    return( 
            <div className="NavBar">
                <ul className='NavBarList'> 
                    {NavBarData.map((val,key)=>{
                    return(
                        <li 
                        key={key} 
                        className="row" 
                        id={window.location.pathname === val.link? "active":""}
                        onClick={()=>{window.location.pathname=val.link}}>
                            {""}
                            <div id="icon">{val.icon}</div>{""}
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                            );
                    })}
                </ul>
            </div>
    );
}
export default Navbar;