"use client"
import React, { useState } from 'react';

export default function Employee() {    
    const [employeeName, setEmployeeName] = useState('');
    const [employeePosition, setEmployeePosition] = useState('');
    const [employeeLocation, setEmployeeLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the logic to submit the employee details to the server
        // You can use the employeeName, employeePosition, and employeeLocation variables here
    };

    return (
        <div className='flex flex-col justify-center '>
            
            <form onSubmit={handleSubmit} className='flex justify-center flex-col h-full w-full items-center'>
                <label htmlFor="employeeName">Employee Name:</label>
                <input
                    type="text"
                    id="employeeName"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                />

                <label htmlFor="employeePosition">Employee Position:</label>
                <input
                    type="text"
                    id="employeePosition"
                    value={employeePosition}
                    onChange={(e) => setEmployeePosition(e.target.value)}
                />

                <label htmlFor="employeeLocation">Employee Location:</label>
                <input
                    type="text"
                    id="employeeLocation"
                    value={employeeLocation}
                    onChange={(e) => setEmployeeLocation(e.target.value)}
                />

                <button className='bg-green-400  m-4 text-black rounded-lg hover:bg-blue-400 hover:text-white h-full' type="submit">Post Employee</button>
            </form>
        </div>
    );
}