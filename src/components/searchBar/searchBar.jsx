import React, { useState } from 'react';
import './searchBar.scss';

const types = ["buy","rent"] ; 

const searchBar = () => {
    const [query,setQuery] =useState({
        type : "buy",
        location : "",
        minPrice : 0,
        maxPrice : 0
    })

    const switchType = (value)=>{
       setQuery((prev)=>({...prev, type: value}))
    }

  return (
   <>
   <div className="searchBar">
      <div className="type">
        {types.map((type)=>{
             return <button key={type} onClick={()=>{switchType(type)}} className={query.type === type ? "active"  : ""}>{type}</button>
        })}
      </div>
      <form action="">
        <input type="text" name='location' id='location' placeholder='Enter City Location' />
        <input type="number" name='minPrice' id='minPrice' min={0} max={100000} placeholder='Min Price' />
        <input type="number" name='maxPrice' id='maxPrice' min={0} max={100000} placeholder='Max Price' />
        <button>
            <img src="/search.png" alt="search" />
        </button>
        
      </form>
   </div>
   </>
  )
}

export default searchBar
