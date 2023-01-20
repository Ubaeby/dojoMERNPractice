import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PersonList = props => {

    const { removeFromDom, people, setPeople} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then( res => {
                console.log(res.data);
                setPeople(res.data); // this is the change
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    const deletePerson = personId => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
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
                            <button onClick={ e => {deletePerson(person._id)}}>Avada Kedavra</button>
                        </div>
                        
                    ) 
                })
            }
        </div>
    )
}

export default PersonList;