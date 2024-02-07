// frontend/src/components/JobCreationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function JobCreationForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const data = {
            title: title,
            description: description,
            // Add more fields as needed
        };

        axios.post('/api/job-listings/', data)
            .then(response => {
                console.log('Job listing created successfully:', response.data);
                // Optionally, update UI or redirect to job listings page
            })
            .catch(error => {
                console.error('Error creating job listing:', error);
            });
    };

    return (
        <div>
            <h2>Create Job Listing</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Create</button>
        </div>
    );
}

export default JobCreationForm;
