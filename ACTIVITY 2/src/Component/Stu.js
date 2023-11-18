import React from "react";
const Stu=(props)=>{
    return (
       <>
       <h1 style={{textAlign:"center"}}>StudentDetails</h1>
       <div className="m">
       <table border={5} cellPadding={15}>
        <tr>
            <th>Name:</th>
            <td className="p">{props.name}</td>
        </tr>
        <tr>
            <th>Age:</th>
            <td className="p">{props.Age}</td>
        </tr>
        <tr>
            <th>Email:</th>
            <td className="p">{props.email}</td>
        </tr>
        <tr>
            <th>Dept:</th>
            <td className="p">{props.dept}</td>
        </tr>
        <tr>
            <th>College:</th>
            <td className="p">{props.cllge}</td>
        </tr>
       </table>
       </div>
       </>
    )
}
export default Stu
