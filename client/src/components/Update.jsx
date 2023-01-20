import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = props => {
    const {id} = useParams();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then( res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/people/${id}`, {
            firstName, 
            lastName
        })
            .then(res => {
                console.log(res);
                navigate('/people')
            })
            .catch(err => console.log(err))

            setFirstName("");
            setLastName("");
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label htmlFor="firstName">First Name</label> <br/>
                    <input type='text' value={firstName} onChange = { e => { setFirstName(e.target.value)}} />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name</label> <br/>
                    <input type='text' value={lastName} onChange = { e => { setLastName(e.target.value)}} />
                </p>
                <button>Submit Change</button>
            </form>
        </div>
    )

}

export default Update;