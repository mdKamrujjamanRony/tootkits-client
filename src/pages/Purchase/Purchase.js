import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const { _id, name, description, min_quantity, available_quantity, price } =
    product;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
      <figure>
        <img
          src="https://api.lorem.space/image/album?w=400&h=400"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-4xl font-bold">{description}</h2>
        <p>{name}</p>
        <p>Minimum Order Quantity: {min_quantity}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Price: ${price}</p>

        <form className="w-full max-w-lg">
          <div className="flex">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm lg:text-xl font-bold mb-2 mr-2 pt-2"
              htmlFor="quantity"
            >
              Order Quantity:
            </label>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-bold hover:text-white px-4 border border-red-500 hover:border-transparent rounded text-xl">
              -
            </button>
            <input
              className="w-1/5 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="quantity"
              type="text"
              value={min_quantity}
            />
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-bold hover:text-white px-4 border border-green-500 hover:border-transparent rounded text-xl">
              +
            </button>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                value={user.displayName}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={user.email}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="text"
                placeholder="Phone Or Telephone Number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                type="text"
                placeholder="Enter you address"
              />
            </div>
          </div>

          <div className="w-full">
            <input
              type="submit"
              value="purchase"
              className="btn btn-primary my-5 w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
