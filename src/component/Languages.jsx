import React from 'react'

const Languages = () =>{
  let lang=[
{id:1,name:"java"},
{id:2,name:"javascript"},
{id:3,name:"kotlin"},
{id:4,name:"C"},

  ]; 
    var check=false;
  return (
    <div>
      <h1 className={check?"bg-warning":"bg-success text-white"}>
        {check ?"Best Programming Languages:" : "Top 4 programming languages"}</h1>
        <ul>
            {lang.map((item,index)=>(
            <li key={index}>{item}</li>
            ))}
        </ul>

    </div>
  )
}

export default Languages;