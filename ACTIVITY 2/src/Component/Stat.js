import { useState } from "react";
const Stat=()=>{
    const [buttoncolor,setbuttoncolor]=useState(false)
    const handle=()=>{
        setbuttoncolor(!buttoncolor)
    }
    return (
    <>
    <div style ={{ backgroundColor: buttoncolor ? '#11998e' : '#CB356B',height:"150px",width:"150px",borderRadius:"60%"}}></div>
    <button onClick={handle} style={{backgroundColor: buttoncolor ? 'blue' : 'gold',borderRadius:"10%",margin:"53px"}}>Show</button>
    </>
    )
}
export default Stat
