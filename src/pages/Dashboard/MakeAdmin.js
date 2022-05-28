import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All Users</h1>
        </div>
    );
};

export default MakeAdmin;