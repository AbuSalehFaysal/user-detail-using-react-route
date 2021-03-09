import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid lightgray',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <Link 
                to={`/friends/${id}`}> <button>Details</button>
            </Link>
        </div>
    );
};

export default Friend;