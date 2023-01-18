import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PersonList = props => {

    const {people, setPeople} = props;

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

    return (
        <div>
            {
                people.length > 0 && people.map((person, index) => {
                    return (
                        <div>
                            <p key={index}> {person.lastName}, {person.firstName}</p>
                            <Link to={`/people/${person._id}`}> {person.firstName}'s Page! </Link>
                        </div>
                        
                    ) 
                })
            }
        </div>
    )
}

export default PersonList;