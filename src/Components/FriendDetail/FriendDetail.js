import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setFriend(data));
    }, [])
    return (
        <div>
            <h1>Friend Detail: {friendId}</h1>
            <h1>{friend.name}</h1>
        </div>
    );
};

export default FriendDetail;