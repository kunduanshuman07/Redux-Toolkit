import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../store/actions/buyCake';
import { buyCakeSelector } from '../store/selectors/buyCake';
import { fetchUsers } from '../store/actions/userDetail';
import { users, loading, error } from '../store/selectors/userDetail';

const CakeContainer = () => {
    const dispatch = useDispatch();
    const numOfCakes = useSelector(buyCakeSelector);
    const userDetail = useSelector(users);
    const loadingDetail = useSelector(loading);
    const errorDetail = useSelector(error);

    const handleBuyCake = () => {
        dispatch(buyCake());
    };

    const handleFetchUsers = () => {
        dispatch(fetchUsers());
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ margin: '10px auto' }}>Number of Cakes: {numOfCakes}</h1>
            <button style={{ margin: '10px auto' }} onClick={handleBuyCake}>Buy Cake</button>

            <h1 style={{ margin: '10px auto' }}>User Details</h1>
            <button style={{ margin: '10px auto' }} onClick={handleFetchUsers}>Fetch Users</button>

            {loadingDetail && <h2 style={{ margin: '10px auto' }}>Loading...</h2>}
            {errorDetail && <h2 style={{ margin: '10px auto' }}>Error: {errorDetail}</h2>}
            <ul style={{ margin: '10px auto' }}>
                {userDetail.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CakeContainer;
