import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
const PersonList = props => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                console.log(res.data);
                setPeople(res.data); // this is the change
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deletePerson = personId => {
        setPeople(people.filter(person => person._id !== personId))
    }

    return (
        <div>
            {
                people.length > 0 && people.map((person, index) => {
                    return (
                        <div >
                            <p key={index}> {person.lastName}, {person.firstName}</p>
                            <Link to={`/people/${person._id}`}> {person.firstName}'s Page! </Link>
                            <Link to={`/people/edit/${person._id}`}>Edit</Link>
                            <DeleteButton personId={person._id} successCallBack={() => deletePerson(person._id)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PersonList;