import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
    const { id, first_name, email, gender, university, href, salary } = props.users;
    return (
        <div className="sectionStyle">
            <h3><i>id: {id}</i></h3>
            <img className="imgStyle" src={href} alt="" /> <br />
            <strong>Name: {first_name}</strong> <br />
            <p><small>Email: {email}</small></p>
            <p><small>Gender: {gender}</small></p>
            <p><small>University: {university}</small></p>
            <strong>Salary: {salary}</strong> <br /> <br /> <br />
            <button onClick={() => props.addUser(props.users)} className="buttonStyle"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add User</button>
        </div>
    );
};

export default Users;