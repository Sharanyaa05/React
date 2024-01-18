import { text } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight, faArrowCircleRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Login(){
    return(
        <div style={{ background: "linear-gradient(to right, orange,pink,purple)",height:"100vh",display:"flex",alignItems:"center"}}>
            <div className="bg-white container" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"500px",justifyContent:"space-around",borderRadius:"30px"}}>
                    <img src="https://img.freepik.com/premium-vector/login-form-laptop-screen-laptop-with-login-password-page_349999-334.jpg"/>
                <div className="gap-2" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
                    <h2 className="mb-4">Member login</h2>
                    <div className="bg-secondary mb-2" style={{ borderRadius: "30px", position: "relative" }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                    <input type="text" className="bg-secondary py-2 text-center"  placeholder="Enter your Email" style={{borderRadius:"30px",border:"none",width:"250px"}}/>
                    </div>
                    <div className="bg-secondary mb-2" style={{ borderRadius: "30px", position: "relative" }}>
                    <FontAwesomeIcon icon={faLock} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                    <input type="password" className="bg-secondary py-2 text-center" placeholder="**********" style={{borderRadius:"30px",border:"none",width:"250px"}}/>
                    </div>
                    <input type="button" className="bg-success px-5 py-2 text-white" style={{borderRadius:"30px",border:"none",width:"250px"}} value="Login"/>
                    <h5 className="mt-4">Forget <a className="text-success" href="#" style={{textDecoration:"none"}}> User Name / Password?</a></h5>
                    <a className="text-success h5" style={{textDecoration:"none"}} href="#">Create a Accouant <FontAwesomeIcon icon={faArrowCircleRight} className="text-success"/></a>
                </div>
            </div>
        </div>
    )
}
export {Login}