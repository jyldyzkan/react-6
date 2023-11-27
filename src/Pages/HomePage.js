import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../Components/UserList';

const HomePage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    }, [])

    const handleDeleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    return (
        <div className='home-page'>
            <div className='container'>
                <div className="row">
                    <UserList users={users} onDeleteUser={handleDeleteUser} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
