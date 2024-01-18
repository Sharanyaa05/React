import React from "react";
function Superover(){
    return(
    <>
        <div style={{backgroundColor:"#070a2b"}}>
            <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
                <h1 style={{color:"white",fontSize:"40px",fontWeight:"600"}}>Super Over League</h1>
                    <div className="pt-4">
                        <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" style={{height:"300px",width:"300px"}}/>
                        <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" style={{height:"300px",width:"300px"}}/>
                    </div>
            </div>
        </div>  
    </>
    );

}
export {Superover}