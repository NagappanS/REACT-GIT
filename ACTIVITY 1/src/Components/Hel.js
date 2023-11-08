import {User} from 'lucide-react'; 
const Hel = () => {
    return (
        <>
            <form className="all">
                <h1 className='mt'><User/>Forms</h1>
                <input type="text" name="name"placeholder="Name"/><br/>
                <input type="number" placeholder="Number"></input><br/>
                <input type="number" placeholder="Age"></input><br/>
                <input type="email" placeholder="Email"></input><br/>
                <input type="password" placeholder="Password"></input><br/>
               <button className="mm" onClick={aa}><b>Submit</b></button>
            </form>
        </>
    )
}
function aa(){
    alert('Form Submitted');
}
export default Hel
