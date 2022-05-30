import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4gX8Ixi1otvYCrIX6B2uyTmZiqQ5FlKB6YDutimq6QIMA0tRI2qCOlBweCnMtKK4MhS2Miv0gsXuHzn4RG8j47004rmGF6qs');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/my-order/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.email}</p>
                    <h2 class="card-title">Please Pay for {order.name}</h2>
                    <p>Your Order id: <span className='text-orange-700'>{order._id}</span></p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100  mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;