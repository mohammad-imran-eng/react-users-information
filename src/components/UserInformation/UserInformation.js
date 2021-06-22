import './UserInformation.css'
import FakeData from '../../FakeData/FakeData';
import Users from '../Users/Users';

const UserInformation = () => {
    const addUser = (information) => {
        console.log(information)
    }
    return (
        <div>
            {
                FakeData.map(users => <Users users={users} addUser={addUser} key={users.id}></Users>)
            }
        </div>
    );
};

export default UserInformation;