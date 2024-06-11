"use client"

// import { useState } from "react";

import React, { useState } from 'react';


    export default function Job() {
        const [jobTitle, setJobTitle] = useState('');
        const [jobDescription, setJobDescription] = useState('');
        const [jobLocation, setJobLocation] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform the logic to submit the job details to the server
            // You can use the jobTitle, jobDescription, and jobLocation variables here
        };

        return (
            <div className='flex flex-col justify-center '>
                
                <form onSubmit={handleSubmit} className='flex justify-center flex-col h-full w-full items-center'>
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />

                    <label htmlFor="jobDescription">Job Description:</label>
                    <textarea
                        id="jobDescription"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    ></textarea>

                    <label htmlFor="jobLocation">Job Location:</label>
                    <input
                        type="text"
                        id="jobLocation"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                    />

                    <button className='bg-green-400  m-4 text-black rounded-lg hover:bg-blue-400 hover:text-white h-full' type="submit">Post Job</button>
                </form>
            </div>
        );
    }
   