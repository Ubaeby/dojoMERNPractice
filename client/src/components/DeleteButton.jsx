import axios from 'axios';

const DeleteButton = props => {
    const {personId, successCallBack } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                successCallBack();
            })
    }

    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

export default DeleteButton;