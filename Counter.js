import React,{useState} from 'react';
function Counter(){
    const[num,setCount]=useState(0)
    return(
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"100vh",backgroundColor:"aqua"}}>
            <div>
            <h1 style={{fontSize:"50px",marginLeft:"20px"}}>{num}</h1>
            </div>
            <div style={{ display: "flex", gap: "50px",marginTop:"40px"}}>
            <button className="btn btn-success" onClick={()=>(setCount(num+1))}>Increment</button>
            <button className="btn btn-danger" onClick={()=>(setCount(num-1))}>Decrement</button>
            <button className="btn btn-warning" onClick={()=>(setCount(0))}>Reset</button>
            </div>
        </div>
    )
}
export {Counter}