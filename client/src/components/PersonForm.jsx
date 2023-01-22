import { useState } from 'react'
import axios from 'axios';
const PersonForm= (props) => {
    // const [ message, setMessage ] = useState("Loading...")
    const { intialFirstName, intialLastName, onSubmitProp} = props;
    // const {people, setPeople} = props;
    const [firstName, setFirstName] = useState(intialFirstName);
    const [lastName, setLastName] = useState(intialLastName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp( {firstName, lastName})
        // axios.post('http://localhost:8000/api/people', {
        //     firstName,
        //     lastName
        // })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //         setPeople([...people, res.data]);
        //     })
        //     .catch( err => 
        //         console.log(err)
        //     );

        // setFirstName("");
        // setLastName("");
    }

    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))
    //         .catch(err=>console.log(err))
    // }, []);
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </p>
            <button>Submit</button>
        </form>

        // <div>
        //     <h2>Message from the backend: {message}</h2>
        // </div>
    )
}
export default PersonForm;

