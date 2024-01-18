import React from "react";
function Tech(){
    return(
        <div style={{backgroundColor:"#3dfcfc"}}>
            <div className="text-center gap-2 p-5" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h1 style={{fontSize:"45px",fontWeight:"600"}}>Learn 4.0 Technologies</h1>
                <h5>Learning the basics can begin with taking a technology course or earning a technology certificate. Foundational technology courses typically approach the subject from a beginner's level, which can be useful for students with little to no experience.</h5>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-evenly"}} className="gap-4 pb-5">
                <div className="bg-white p-4 ms-5" style={{borderRadius:"30px",borderTop:"14px solid red",height:"350px",width:"400px",textAlign:"justify", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight:"600"}}>Data Scientist</h1>
                    <h5 className="h6">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</h5>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" height="100px" width="100px" style={{ alignSelf: "flex-end" }}/>
                </div>

                <div className="bg-white p-4" style={{borderRadius:"30px",borderTop:"14px solid blue",height:"350px",width:"400px",textAlign:"justify", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight:"600"}}>NOT Developer</h1>
                    <h5 className="h6">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</h5>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" height="100px" width="100px" style={{ alignSelf: "flex-end" }}/>
                </div>
                <div className="bg-white p-4 ms-5" style={{borderRadius:"30px",borderTop:"14px solid green",height:"350px",width:"400px",textAlign:"justify", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight:"600"}}>VR Developer</h1>
                    <h5 className="h6">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</h5>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" height="100px" width="100px" style={{ alignSelf: "flex-end" }}/>
                </div>
                <div className="bg-white p-4" style={{borderRadius:"30px",borderTop:"14px solid brown",height:"350px",width:"400px",textAlign:"justify", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight:"600"}}>ML engineer</h1>
                    <h5 className="h6">Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.</h5>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" height="100px" width="100px" style={{ alignSelf: "flex-end" }}/>
                </div>
            </div>
        </div>
    )
}
export {Tech};