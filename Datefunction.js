import React, { useState } from 'react';
function Datefunction(){
    const[input,setInput]=useState('')
    const[output,setOutput]=useState('')

    function calculate(){
        if(input){
            const date=new Date(input)
            date.setDate(date.getDate()+90)
            let day=date.getDate();
            let month=date.getMonth() + 1;
            let year=date.getFullYear();

            if(day<10){
               day= `0${day}`
            }
            if(month<10){
               month= `0${month}`
            }
            const final=`${day}/${month}/${year}`
            setOutput(final)
        }
    }
    const back="https://t3.ftcdn.net/jpg/03/02/04/06/360_F_302040655_IEH9RyDlu7LL8YCLjgL1IskhrpOlmlSv.jpg"
    return(
        <div style={{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className="container gap-4" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"100vh"}}>
            <h1 className="text-white" style={{fontFamily:"monospace",fontSize:"40px",fontWeight:"bolder"}}>Course Duration 90day's</h1>
                <div className="p-5 gap-3 rounded" style={{backgroundColor: "rgba(0, 0, 0, 0.4)",flexDirection:"column",display:"flex",width:"400px"}}>
                <h1 className="text-white" style={{fontFamily:"cursive",fontSize:"20px",fontWeight:"bolder",alignSelf:"center"}}>Start Date</h1>
                <input type="date" value={input} onChange={(x)=>setInput(x.target.value)} style={{width:"200px",alignSelf:"center",borderRadius:"20px",padding:"5px"}}/>
                <button onClick={calculate} style={{width:"200px",alignSelf:"center",borderRadius:"20px",padding:"5px",fontWeight:"bolder"}}>Calculate</button>
                <h1 style={{fontFamily:"cursive",fontSize:"20px",fontWeight:"bolder",alignSelf:"center",color:"white"}}>End Date:{output}</h1>
                </div>
            </div>
        </div>
    )
}
export {Datefunction}