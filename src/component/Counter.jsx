import React, { useState } from 'react'

function New() {
    const [count,setCount]=useState(0);
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }

  return (
<>

<h1>{count}</h1>
<button onClick={increase} className='btn btn-primary' >increase</button>
<button onClick={decrease} className='btn btn-primary' >decrease</button>
</>

)
}

export default New