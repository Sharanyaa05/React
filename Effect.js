import React,{useEffect, useState} from 'react';
function Effect(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(product=>
                {console.log(product)
                setdata(product)
                })
    },[])
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {data.map((product) => (
        <div key={product.id} style={{ border: '2px solid black', margin: '10px', width: '300px',display:"flex",flexDirection:"column"}}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center',backgroundColor:"aqua",borderBottom:"1px solid" }}>Title: {product.title}</p>
          <img src={product.image} alt={product.title} style={{ height: '100px', width: '100px', marginBottom: '10px',alignSelf:"center"}} />
        </div>
      ))}
    </div>
     );
     
}
export {Effect}