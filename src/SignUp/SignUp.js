import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [userData,setUserData]=useState([])
    const onSubmitBtn=(event)=>{
        event.preventDefault()
        const comment={
            name: event.target.name.value,
            email: event.target.email.value,
            aCard: event.target.aCard.value,
            pCard:event.target.pCard.value,
            mNubmer:event.target.mNumber.value,
            city:event.target.city.value,
            state: event.target.state.value,
            photo: event.target.photo.value
           }
           setUserData(comment)
           

    }
    return (     
        <div className='flex justify-center items-center bg-slate-800 p-4'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form onSubmit={onSubmitBtn} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                          />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Adhar Card Number</span>
                        </label>
                        <input
                            type="number"
                            name="aCard"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pan Card Number</span>
                        </label>
                        <input
                            type="number"
                            name="pCard"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input
                            type="number"
                            name="mNumber"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">State</span>
                        </label>
                        <input
                            type="text"
                            name="state"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            name="photo"
                            placeholder="Your Answer"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                      
                    </div>
                    <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Sign Up" />
                </form>
                
                
            </div>
        </div>
    </div >
    );
};

export default SignUp;