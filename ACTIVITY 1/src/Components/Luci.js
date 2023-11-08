import {Accessibility,AlarmCheck,AirVent,Activity,Building} from 'lucide-react';
import {Currency,Crown,Dices,Gamepad,Wind,Wand,Wine,View} from 'lucide-react';
const Luci = ()=>{
    return (
        <>
           <h1 style={{textAlign:'center'}}>Icons From Lucide</h1>
           <table className='sty' border={7} cellPadding={10}>
            <tr>
                <td><Accessibility size={20} color='blue' strokeWidth={3}></Accessibility></td>
                <td><AlarmCheck size={20} color='blue' strokeWidth={3}/></td>
                <td><AirVent size={20} color='blue' strokeWidth={3}/></td>
                <td><Activity size={20} color='blue' strokeWidth={3}/></td>
            </tr>
            <tr>
                <td><Building size={20} color='blue' strokeWidth={3}></Building></td>
                <td><Currency size={20} color='blue' strokeWidth={3}></Currency></td>
                <td><Crown size={20} color='blue' strokeWidth={3}></Crown></td>
                <td><Dices size={20} color='blue' strokeWidth={3}/></td>
            </tr>
            <tr>
                <td><Gamepad size={20} color='blue' strokeWidth={3}/></td>
                <td><Wind size={20} color='blue' strokeWidth={3}/></td>
                <td><Wand size={20} color='blue' strokeWidth={3}/></td>
                <td><Wine size={20} color='blue' strokeWidth={3}/></td>
            </tr>
            <tr>
                <td><View size={20} color='blue' strokeWidth={3}/></td>
                <td><Wine size={20} color='blue' strokeWidth={3}/></td>
                <td><Dices size={20} color='blue' strokeWidth={3}/></td>
                <td><Activity size={20} color='blue' strokeWidth={3}/></td>
            </tr>
           </table>
        </>
    )
}
export default Luci