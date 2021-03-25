import React, { Component } from 'react';
 
const CatList = (props) => {

 return (
   <div>
     {props.breeds.map((cat, index)=>{
     return  <li key={index}> {cat.charAt(0).toUpperCase() + cat.slice(1)} </li>
     })}
   </div>
 )
}

export default CatList;

