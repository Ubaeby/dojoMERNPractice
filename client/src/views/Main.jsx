import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = () => {
    const [people, setPeople] = useState([]);

    const [personList, setPersonList] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:8000/api/people')
            .then( res => {
                setPersonList(res.data)
            })
            .catch( err => console.log(err))
    }, [])

    const removeFromDom = personId => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then( res => {
                console.log(res.data)
                setPeople(people.filter(person => person._id !== personId))
            })
            .catch(err => console.log(err))
    }

    const createPerson = personParam => {
        axios.post('http://localhost:8000/api/people', personParam)
            .then(res => {
                console.log(res.data)
                setPersonList([...personList, res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <PersonForm onSubmitProp = {createPerson} initialFirstName="" initlaLastName=""/>
            <hr/>
            <PersonList personList = {personList} removeFromDom = {removeFromDom}/>
        </div>
    )
}

export default Main;