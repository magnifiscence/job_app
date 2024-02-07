// frontend/src/components/JobListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobListings() {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        axios.get('/api/job-listings/')
            .then(response => {
                setJobListings(response.data);
            })
            .catch(error => {
                console.error('Error fetching job listings:', error);
            });
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            {jobListings.map(job => (
                <div key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
}

export default JobListings;
