import React from 'react';

export function Card({ username, btnText }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{username}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            {btnText || "Visit Me"}
          </button>
        </div>
      </div>
    </div>
  );
}
