import React, { useState } from 'react';
import "./topfold.css"

const Topfold = () => {
    const [query,setQuery]=useState("");

    const handleQuery=(e)=>{
        setQuery(e.target.value)
        console.log(query);

    }
    return (
        <div className="topfold ">
            <div className="searchbar">
                <i className="bi bi-search" />
                <input 
                type="text" name="search" 
                value= {query}
                placeholder=" Enter your search" 
                onChange={(e)=>handleQuery(e)}  />
                
                <button type="submit" className="btn btn-success add-button" 
                l><i class="bi bi-plus-circle-fill"></i></button>

            </div>

        </div>
    )
}

export default Topfold;