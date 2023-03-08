import React from 'react';

const UserData = (props) => {
    const {datos} = props;

    const {firstName, lastName, email, pass, confirmPass} = datos;

    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {pass}</p>
            <p>Confirm Password: {confirmPass}</p>
        </div>
    )
}

export default UserData;