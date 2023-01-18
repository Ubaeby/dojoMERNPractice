import { useEffect } from "react";
import axios from "axios";
const PersonList = props => {

    const {people, setPeople} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then( res => {
                console.log(res.data);
                setPeople([res.data]);
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                people.map((person, index) => {
                    return <p key={index}> {person.lastName}, {person.firstName}</p>
                })
            }
        </div>
    )
}

export default PersonList;