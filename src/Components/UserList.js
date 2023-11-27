import React, { useState } from 'react';

const UserList = ({users, onDeleteUser}) => {

    const handleDeleteUser = (userId) => {
        onDeleteUser(userId);
    };

    return (
        <>
            {
                users.map(user =>
                    <div key={user.id} className='col-3'>
                            <img src="https://global55.ru/usr/cv/cv-15923064240.jpg" alt="" />
                            <h4>{user.name}</h4>
                            <p>{user.username}</p>
                            <div className={'btn-card'}>
                                <button className={'btn btn-secondary'}>Edit User</button>
                                <button className={'btn btn-danger'} onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                            </div>
                    </div>
                )
            }
        </>
    );
}

export default UserList;
