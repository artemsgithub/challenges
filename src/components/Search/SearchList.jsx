import React, { Component } from 'react';
 
const SearchList = (props) => {

 return (
   <div>
     {props.things.map((thing, index)=>{
     return  <div key={index}> {thing.charAt(0).toUpperCase() + thing.slice(1)} </div>
     })}
   </div>
 )
}

export default SearchList;

