import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

const Update = props => {
    const { id } = useParams();

    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                // setFirstName(res.data.firstName);
                // setLastName(res.data.lastName);
                setPerson(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = personParam => {
        axios.put(`http://localhost:8000/api/people/${id}`, personParam)
            // {   firstName, 
            //     lastName
            // }
            .then(res => {
                console.log(res);
                // navigate('/people')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {
                loaded && (
                    <>
                        <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName} />
                        <DeleteButton personId={person._id} successCallBack={() => navigate('/people')} />
                    </>
                )
            }

            {/* <form onSubmit={updatePerson}>
                <p>
                    <label htmlFor="firstName">First Name</label> <br/>
                    <input type='text' value={firstName} onChange = { e => { setFirstName(e.target.value)}} />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name</label> <br/>
                    <input type='text' value={lastName} onChange = { e => { setLastName(e.target.value)}} />
                </p>
                <button>Submit Change</button>
            </form> */}
        </div>
    )

}

export default Update;