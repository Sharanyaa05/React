import React from "react";
function Social(){
    let back="https://i.pinimg.com/originals/01/50/05/01500503703d5a1ebad61782206bfd24.jpg"
    return(
        <div style={{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
                <h1 style={{color:"white",fontSize:"50px",fontWeight:"800",fontFamily:"fantasy"}}>Socail Buttons</h1>
                <div className="container pt-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button className="border rounded bg-warning px-4 py-2">Like</button>
                    <button className="border rounded bg-white p-2 mx-5">Comment</button>
                    <button className="border rounded bg-primary px-4 py-2">Share</button>
                </div>
            </div>
        </div>
    )
}
export {Social};