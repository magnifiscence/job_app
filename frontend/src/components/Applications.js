// frontend/src/components/Applications.js
import React from 'react';

function Applications({ applications }) {
    return (
        <div>
            <h2>Applications</h2>
            {applications.map(application => (
                <div key={application.id}>
                    <h3>{application.job.title}</h3>
                    <p>Status: {application.status}</p>
                    {/* Add more application details */}
                </div>
            ))}
        </div>
    );
}

export default Applications;
