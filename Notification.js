import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faBell, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Notification(){
    return(
        <>
        <div className="container gap-4" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}> 
            <h1 style={{fontSize:"45px",fontWeight:"600"}}>Notification</h1>
            <h5 className="bg-primary py-4 ps-2 mt-2 text-white" style={{width:"500px"}}><FontAwesomeIcon icon={faCheckCircle} className="bg-primary pe-2"></FontAwesomeIcon>Information Message</h5>
            <h5 className="bg-success py-4 ps-2 text-white" style={{width:"500px"}}><FontAwesomeIcon icon={faCheckCircle} className="bg-success pe-2"></FontAwesomeIcon>Sucess Message</h5>
            <h5 className="bg-warning py-4 ps-2 text-white" style={{width:"500px"}}><FontAwesomeIcon icon={faBell} className="bg-warning pe-2"></FontAwesomeIcon>Warning Message</h5>
            <h5 className="bg-danger py-4 ps-2 text-white" style={{width:"500px"}}><FontAwesomeIcon icon={faInfoCircle}className="bg-danger pe-2"></FontAwesomeIcon>Error Message</h5>
            
        </div>

        </>
    )
}
export {Notification}