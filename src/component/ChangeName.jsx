import {useState} from 'react'

const ChangeName = (props) => {
    let {sname}=props;
    const [name,setName]= useState(props.name);
  return (
    <div className="container mt-3">
    <div>{name}</div>
       <button className="btn btn-warning" onClick={() =>setName("KIET MCA")}>
        Change name
        </button>
        </div>
  )
}

export default ChangeName